/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import './styles.css';

interface TableProps {
    selectedWorkout: string;
    onExerciseClick: (video: string) => void; // Função para lidar com o clique no exercício
}

export function Table({ selectedWorkout, onExerciseClick }: TableProps) {
    useEffect(() => {
        M.AutoInit();
    }, []);

    const data: Record<string, { name: string; video: string }[]> = {
        A1: [
            { name: "T bar row", video: "https://www.youtube.com/embed/59GM_xjPhco?si=qDCog5ICHm_9hwzH" },
            { name: "Remada baixa com triângulo", video: "https://www.youtube.com/embed/video2" },
            { name: "Supino inclinado smith", video: "https://www.youtube.com/embed/video3" },
        ],
        B1: [
            { name: "RDL", video: "https://www.youtube.com/embed/video4" },
            { name: "Cadeira flexora unilateral", video: "https://www.youtube.com/embed/video5" },
        ],
        // Adicione os outros treinos aqui...
    };

    const filteredData = selectedWorkout ? data[selectedWorkout] : [];

    return (
        <div className="table-container">
            <table className="centered highlight black-text">
                <thead>
                    <tr>
                        <th>Treino</th>
                        <th>Exercício</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((exercise, index) => (
                            <tr key={index}>
                                {index === 0 && (
                                    <td rowSpan={filteredData.length} className="workout-index">
                                        {selectedWorkout}
                                    </td>
                                )}
                                <td
                                    onClick={() => onExerciseClick(exercise.video)} // Chama a função ao clicar
                                    style={{ cursor: "pointer", color: "blue" }} // Estilo para indicar que é clicável
                                >
                                    {exercise.name}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2}>Selecione um treino para ver os exercícios.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}