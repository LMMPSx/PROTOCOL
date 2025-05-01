import { useFormContext } from "../../context/FormContext";
import { useEffect, useState } from "react";
import M from "materialize-css";
import "./styles.css";

export function Form() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    const { formData, setFormData, treinoOptions } = useFormContext();
    const [selectedTreino, setSelectedTreino] = useState("");
    const [repsInputs, setRepsInputs] = useState<Record<number, number[]>>({});
    const [loadsInputs, setLoadsInputs] = useState<Record<number, number[]>>({});

    const exercises = treinoOptions[selectedTreino] || [];

    const handleSeriesChange = (exerciseIndex: number, seriesCount: number) => {
        const maxSeries = 10;
        if (seriesCount > maxSeries) {
            seriesCount = maxSeries;
        }

        const updatedReps = { ...repsInputs };
        const updatedLoads = { ...loadsInputs };

        updatedReps[exerciseIndex] = Array.from({ length: seriesCount }, () => 0);
        updatedLoads[exerciseIndex] = Array.from({ length: seriesCount }, () => 0);

        setRepsInputs(updatedReps);
        setLoadsInputs(updatedLoads);
    };

    const handleRepetitionChange = (exerciseIndex: number, seriesIndex: number, value: number) => {
        const updatedReps = { ...repsInputs };
        if (!updatedReps[exerciseIndex]) {
            updatedReps[exerciseIndex] = [];
        }
        updatedReps[exerciseIndex][seriesIndex] = value;
        setRepsInputs(updatedReps);
    };

    const handleLoadChange = (exerciseIndex: number, seriesIndex: number, value: number) => {
        const updatedLoads = { ...loadsInputs };
        if (!updatedLoads[exerciseIndex]) {
            updatedLoads[exerciseIndex] = [];
        }
        updatedLoads[exerciseIndex][seriesIndex] = value;
        setLoadsInputs(updatedLoads);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!selectedTreino) {
            M.toast({ html: "Por favor, selecione um treino.", classes: "red darken-1" });
            return;
        }
    
        const formattedExercises = Object.keys(repsInputs).reduce((acc, exerciseIndex) => {
            const numericIndex = parseInt(exerciseIndex, 10); // Converte o índice para número
            const uniqueIndex = `${selectedTreino}-${numericIndex}-${Date.now()}`; // Índice único
            acc[uniqueIndex] = {
                series: repsInputs[numericIndex].length,
                reps: repsInputs[numericIndex],
                loads: loadsInputs[numericIndex] || [],
                date: new Date().toLocaleDateString(), // Adiciona a data atual
            };
            return acc;
        }, {} as Record<string, { series: number; reps: number[]; loads: number[]; date: string }>);
    
        // Combine os novos exercícios com os existentes
        const updatedExercises = {
            ...formData.exercises, // Exercícios existentes
            ...formattedExercises, // Novos exercícios
        };
    
        setFormData({
            ...formData,
            treino: selectedTreino,
            exercises: updatedExercises,
        });
    
        M.toast({ html: "Dados enviados para o histórico!", classes: "green darken-1" });
    
        // Limpa os inputs
        setRepsInputs({});
        setLoadsInputs({});
        setSelectedTreino("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container center-align">
                <p className="text-form white-text">Treino</p>
                <select
                    required
                    value={selectedTreino}
                    className="grey darken-3 white-text"
                    onChange={(e) => setSelectedTreino(e.target.value)}
                >
                    <option value="" disabled>
                        Escolha o treino
                    </option>
                    {Object.keys(treinoOptions).map((treino) => (
                        <option key={treino} value={treino}>
                            {treino}
                        </option>
                    ))}
                </select>
            </div>

            <div className="container">
                <div className="center-align">
                    <p className="text-form white-text">Exercícios</p>
                </div>
                {exercises.map((exercise, exerciseIndex) => (
                    <div key={exerciseIndex}>
                        <p className="text-form white-text">{exercise}</p>
                        <input
                            type="number"
                            className="grey darken-3 white-text"
                            placeholder="Séries"
                            max={10}
                            required
                            onChange={(e) =>
                                handleSeriesChange(exerciseIndex, parseInt(e.target.value) || 0)
                            }
                        />
                        {repsInputs[exerciseIndex]?.map((_, seriesIndex) => (
                            <div key={`series-${seriesIndex}`}>
                                <input
                                    key={`reps-${seriesIndex}`}
                                    type="number"
                                    className="reps grey darken-3 white-text"
                                    placeholder={`Repetições ${seriesIndex + 1}° série`}
                                    max={20}
                                    required
                                    onChange={(e) =>
                                        handleRepetitionChange(
                                            exerciseIndex,
                                            seriesIndex,
                                            parseInt(e.target.value) || 0
                                        )
                                    }
                                />
                                <input
                                    key={`loads-${seriesIndex}`}
                                    type="number"
                                    className="carga grey darken-3 white-text"
                                    placeholder={`Carga de trabalho ${seriesIndex + 1}° série`}
                                    required
                                    onChange={(e) =>
                                        handleLoadChange(
                                            exerciseIndex,
                                            seriesIndex,
                                            parseInt(e.target.value) || 0
                                        )
                                    }
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="center-align">
                <button
                    className="btn-large waves-effect waves-light grey darken-4"
                    type="submit"
                    name="action"
                >
                    Salvar
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </form>
    );
}