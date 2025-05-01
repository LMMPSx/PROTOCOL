import { useEffect } from "react";
import { useFormContext } from "../../context/FormContext";

export function History() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    const { formData, treinoOptions } = useFormContext();
    const { setFormData } = useFormContext();

    const handleClearHistory = () => {
        setFormData({ treino: "", exercises: {} }); // Reseta o estado
        localStorage.clear(); // Limpa o localStorage
        M.toast({ html: "Histórico limpo!", classes: "green darken-1" });
    };

    // Agrupa os exercícios por treino
    const groupedExercises = Object.entries(formData.exercises).reduce((acc, [exerciseKey, data]) => {
        const [treino] = exerciseKey.split("-"); // Extrai o treino do índice único
        if (!acc[treino]) {
            acc[treino] = [];
        }
        acc[treino].push({ exerciseKey, data });
        return acc;
    }, {} as Record<string, { exerciseKey: string; data: typeof formData.exercises[string] }[]>);

    return (
        <div className="container">
            <h2>Histórico</h2>
            <button className="btn red" onClick={handleClearHistory}>
                Limpar Histórico
            </button>
            <div>
                {Object.keys(groupedExercises).length > 0 ? (
                    Object.entries(groupedExercises).map(([treino, exercises]) => (
                        <div key={treino}>
                            <h4 className="center-align">{treino}</h4> {/* Exibe o treino como título */}
                            <table className="highlight centered">
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
                                        const [, exerciseIndex] = exerciseKey.split("-"); // Extrai o índice do exercício
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