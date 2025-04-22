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
            { name: "Supino reto máquina", video: "https://www.youtube.com/embed/video4" },
            { name: "Desenvolvimento máquina", video: "https://www.youtube.com/embed/video5" },
            { name: "Tríceps francês unilateral", video: "https://www.youtube.com/embed/video6" },
            { name: "Tríceps polia alta", video: "https://www.youtube.com/embed/video7" },
        ],
        B1: [
            { name: "RDL", video: "https://www.youtube.com/embed/video8" },
            { name: "Cadeira flexora unilateral", video: "https://www.youtube.com/embed/video9" },
            { name: "Leg press 45°", video: "https://www.youtube.com/embed/video10" },
            { name: "Cadeira extensora", video: "https://www.youtube.com/embed/video11" },
            { name: "Bíceps rosca polia baixa", video: "https://www.youtube.com/embed/video12" },
            { name: "Bíceps rosca unilateral", video: "https://www.youtube.com/embed/video13" },
        ],
        A2: [
            { name: "Remada curvada com halteres", video: "https://www.youtube.com/embed/video14" },
            { name: "Puxada alta", video: "https://www.youtube.com/embed/video15" },
            { name: "Supino inclinado máquina", video: "https://www.youtube.com/embed/video16" },
            { name: "Supino reto máquina", video: "https://www.youtube.com/embed/video17" },
            { name: "Tríceps polia alta", video: "https://www.youtube.com/embed/video18" },
            { name: "Tríceps francês unilateral", video: "https://www.youtube.com/embed/video19" },
            { name: "Elevação lateral unilateral", video: "https://www.youtube.com/embed/video20" },
        ],
        B2: [
            { name: "Cadeira flexora", video: "https://www.youtube.com/embed/video21" },
            { name: "Agachamento livre", video: "https://www.youtube.com/embed/video22" },
            { name: "Cadeira extensora", video: "https://www.youtube.com/embed/video23" },
            { name: "Elevação pélvica smith", video: "https://www.youtube.com/embed/video24" },
            { name: "Mesa flexora", video: "https://www.youtube.com/embed/video25" },
            { name: "Bíceps rosca polia baixa", video: "https://www.youtube.com/embed/video26" },
            { name: "Bíceps rosca unilateral", video: "https://www.youtube.com/embed/video27" },
        ],
        A3: [
            { name: "Remada polia baixa unilateral", video: "https://www.youtube.com/embed/video28" },
            { name: "T bar row máquina", video: "https://www.youtube.com/embed/video29" },
            { name: "Supino inclinado smith", video: "https://www.youtube.com/embed/video30" },
            { name: "Supino reto máquina convergente", video: "https://www.youtube.com/embed/video31" },
            { name: "Desenvolvimento com halteres", video: "https://www.youtube.com/embed/video32" },
            { name: "Tríceps polia alta", video: "https://www.youtube.com/embed/video33" },
            { name: "Tríceps cruzado polia", video: "https://www.youtube.com/embed/video34" },
        ],
        B3: [
            { name: "Cadeira flexora", video: "https://www.youtube.com/embed/video35" },
            { name: "Leg press 45°", video: "https://www.youtube.com/embed/video36" },
            { name: "Sumo deadlift", video: "https://www.youtube.com/embed/video37" },
            { name: "Cadeira extensora", video: "https://www.youtube.com/embed/video38" },
            { name: "Bíceps rosca polia baixa", video: "https://www.youtube.com/embed/video39" },
            { name: "Bíceps rosca martelo", video: "https://www.youtube.com/embed/video40" },
            { name: "Elevação lateral com halter", video: "https://www.youtube.com/embed/video41" },
        ],
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
                                    style={{ cursor: "pointer"}} // Estilo para indicar que é clicável
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