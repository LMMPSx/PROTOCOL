import { useEffect, useMemo, useState } from "react";
import { useFormContext } from "../../context/FormContext";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import M from "materialize-css";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import "./styles.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function History() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    const { formData, treinoOptions } = useFormContext();
    const { setFormData } = useFormContext();

    const [selectedExerciseKey, setSelectedExerciseKey] = useState<string>("");

    const handleClearHistory = () => {
        setFormData({ treino: "", exercises: {} });
        localStorage.clear();
        M.toast({ html: "Histórico limpo!", classes: "green darken-1" });
    };

    const groupedExercises = Object.entries(formData.exercises).reduce((acc, [exerciseKey, data]) => {
        const [treino] = exerciseKey.split("-");
        if (!acc[treino]) {
            acc[treino] = [];
        }
        acc[treino].push({ exerciseKey, data });
        return acc;
    }, {} as Record<string, { exerciseKey: string; data: typeof formData.exercises[string] }[]>);

    const exerciseOptions = useMemo(() => {
        const seen = new Map<string, string>();

        Object.keys(formData.exercises).forEach((key) => {
            const [treino, index] = key.split("-");
            const name = treinoOptions[treino]?.[parseInt(index)] || "Exercício desconhecido";
            if (!seen.has(name)) {
                seen.set(name, key); // salva a primeira chave encontrada para este nome
            }
        });

        return Array.from(seen.entries()).map(([name, key]) => ({ key, name }));
    }, [formData.exercises, treinoOptions]);


    const filteredChartData = useMemo(() => {
        if (!selectedExerciseKey) return null;

        const [treino, index] = selectedExerciseKey.split("-");
        const exerciseName = treinoOptions[treino]?.[parseInt(index)];
        if (!exerciseName) return null;

        const entries = Object.entries(formData.exercises).filter(([key, data]) => {
            const [t, i] = key.split("-");
            const name = treinoOptions[t]?.[parseInt(i)];
            return (
                name === exerciseName &&
                data.date &&
                Array.isArray(data.reps) &&
                Array.isArray(data.loads) &&
                data.series > 0
            );
        });

        const labels: string[] = [];
        const repsData: number[] = [];
        const loadData: number[] = [];

        entries.forEach(([_, data]) => {
            data.reps.forEach((repsVal, i) => {
                const dateLabel = `${data.date} - Série ${i + 1}`;
                labels.push(dateLabel);
                repsData.push(repsVal);
                loadData.push(data.loads[i] || 0);
            });
        });

        return {
            labels,
            datasets: [
                {
                    label: "Repetições por Série",
                    data: repsData,
                    borderColor: "blue",
                    backgroundColor: "rgba(0,0,255,0.2)",
                },
                {
                    label: "Carga por Série",
                    data: loadData,
                    borderColor: "green",
                    backgroundColor: "rgba(0,255,0,0.2)",
                },
            ],
        };
    }, [selectedExerciseKey, formData.exercises, treinoOptions]);


    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
                labels: {
                    color: "#FFFFFF",
                },
            },
            title: {
                display: true,
                text: "Progressão de Treinos",
                color: "#FFFFFF",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#FFFFFF",
                },
            },
            y: {
                ticks: {
                    color: "#FFFFFF",
                },
            },
        },
    };

    return (
        <div className="container">
            <h2>Histórico</h2>
            <button className="btn red" onClick={handleClearHistory}>
                Limpar Histórico
            </button>

            {exerciseOptions.length > 0 && (
                <>
                    <div className="input-field" style={{ marginTop: "20px" }}>
                        <p>Selecione um exercício</p>
                        <select
                            value={selectedExerciseKey}
                            onChange={(e) => setSelectedExerciseKey(e.target.value)}
                            className=""
                        >
                            <option value="">-- Selecione --</option>
                            {exerciseOptions.map((opt) => (
                                <option key={opt.key} value={opt.key}>
                                    {opt.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            {filteredChartData && (
                <div style={{ marginTop: "30px" }}>
                    <Line data={filteredChartData} options={chartOptions} />
                </div>
            )}

            <div style={{ marginTop: "40px" }}>
                {Object.keys(groupedExercises).length > 0 ? (
                    Object.entries(groupedExercises).map(([treino, exercises]) => (
                        <div className="history-table" key={treino}>
                            <h4 className="center-align">{treino}</h4>
                            <table className="centered">
                                <thead>
                                    <tr>
                                        <th>Exercício</th>
                                        <th>Séries</th>
                                        <th>Repetições</th>
                                        <th>Carga</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exercises.map(({ exerciseKey, data }) => {
                                        const [, exerciseIndex] = exerciseKey.split("-");
                                        const exerciseName =
                                            treinoOptions[treino]?.[parseInt(exerciseIndex)] || "Exercício desconhecido";

                                        return (
                                            <tr key={exerciseKey}>
                                                <td>{exerciseName}</td>
                                                <td>{data.series}</td>
                                                <td>{data.reps.join(", ")}</td>
                                                <td>{data.loads.join(", ")}</td>
                                                <td>{data.date || "Data não registrada"}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ))
                ) : (
                    <p>Nenhum exercício registrado.</p>
                )}
            </div>
        </div>
    );
}
