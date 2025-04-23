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
            { name: "T bar row", video: "https://www.youtube.com/embed/HeqTlG_Zrow?si=1fzBHhFxQ9XZUqni" },
            { name: "Remada baixa com triângulo", video: "https://www.youtube.com/embed/UDaQKi9Z9lY?si=8xhiJ5C2m-Q909Ep" },
            { name: "Supino inclinado smith", video: "https://youtube.com/embed/-kqeSi8iHBs" },
            { name: "Supino reto máquina", video: "https://www.youtube.com/embed/6Cpf8SBfHqs?si=t_zt56QhU9DN-sIh" },
            { name: "Desenvolvimento máquina", video: "https://www.youtube.com/embed/WvLMauqrnK8?si=G1Br1cIP6qO97A22" },
            { name: "Tríceps francês unilateral", video: "https://www.youtube.com/embed/cf7BqZErm0A?si=xVesdUQba6Z26agX" },
            { name: "Tríceps polia alta", video: "https://www.youtube.com/embed/wQdCw93LkcI?si=p1aGI5HwWEIYDVEh" },
        ],
        B1: [
            { name: "RDL", video: "https://www.youtube.com/embed/tX__cAsyj30" },
            { name: "Cadeira flexora", video: "https://www.youtube.com/embed/wqVoX6lbYf8" },
            { name: "Leg press 45°", video: "https://www.youtube.com/embed/hYKoCUczAY4?si=fpIhbkB8fhi7NTgc" },
            { name: "Cadeira extensora", video: "https://www.youtube.com/embed/4ZDm5EbiFI8?si=UzFJuMHE9afk-lo7" },
            { name: "Bíceps rosca polia baixa", video: "https://www.youtube.com/embed/dH7xKAXOkJM" },
            { name: "Bíceps rosca unilateral", video: "https://www.youtube.com/embed/qGb4DIxYPEg?si=KdFoobCwQgRDYxWX" },
        ],
        A2: [
            { name: "Remada curvada com halteres", video: "https://www.youtube.com/embed/_ePXLHAILR8?si=kGonsciDGvr1vewM" },
            { name: "Puxada alta", video: "https://www.youtube.com/embed/AQmHe1vjs-A?si=mG_a_HGciJ5sOAOb" },
            { name: "Supino inclinado máquina", video: "https://www.youtube.com/embed/ZTOyEEwBdRM?si=d0aR_Azbrztc__0b" },
            { name: "Supino reto máquina", video: "https://www.youtube.com/embed/6Cpf8SBfHqs?si=t_zt56QhU9DN-sIh" },
            { name: "Tríceps polia alta", video: "https://www.youtube.com/embed/wQdCw93LkcI?si=p1aGI5HwWEIYDVEh" },
            { name: "Tríceps francês unilateral", video: "https://www.youtube.com/embed/cf7BqZErm0A?si=xVesdUQba6Z26agX" },
            { name: "Elevação lateral unilateral", video: "https://www.youtube.com/embed/nQwNcD7CKKY?si=K2Dnk_JY3bknb68D" },
        ],
        B2: [
            { name: "Cadeira flexora", video: "https://www.youtube.com/embed/wqVoX6lbYf8" },
            { name: "Agachamento livre", video: "https://www.youtube.com/embed/XJdV5WNyvHQ?si=dm9_0n9-yko0cRIv" },
            { name: "Cadeira extensora", video: "https://www.youtube.com/embed/4ZDm5EbiFI8?si=UzFJuMHE9afk-lo7" },
            { name: "Elevação pélvica smith", video: "https://www.youtube.com/embed/ZDSetUhr0fo" },
            { name: "Mesa flexora", video: "https://www.youtube.com/embed/P9zH7iHsfE8?si=mfUXIgtSx7AN2kLZ" },
            { name: "Bíceps rosca polia baixa", video: "https://www.youtube.com/embed/dH7xKAXOkJM" },
            { name: "Bíceps rosca unilateral", video: "https://www.youtube.com/embed/qGb4DIxYPEg?si=KdFoobCwQgRDYxWX" },
        ],
        A3: [
            { name: "Remada polia baixa unilateral", video: "https://www.youtube.com/embed/PN95TKHkDqE?si=0q7-QO_pwKiibz54" },
            { name: "T bar row máquina", video: "https://www.youtube.com/embed/HeqTlG_Zrow?si=1fzBHhFxQ9XZUqni" },
            { name: "Supino inclinado smith", video: "https://youtube.com/embed/-kqeSi8iHBs" },
            { name: "Supino reto máquina convergente", video: "https://www.youtube.com/embed/z_Hsovhiy48" },
            { name: "Desenvolvimento com halteres", video: "https://www.youtube.com/embed/qeMH-V6CsfM?si=L9xICELsRqpCGyYv" },
            { name: "Tríceps polia alta", video: "https://www.youtube.com/embed/wQdCw93LkcI?si=p1aGI5HwWEIYDVEh" },
            { name: "Tríceps cruzado polia", video: "https://www.youtube.com/embed/IIQMw5Up1Ws?si=zb2JiBAFcsGdFbTm" },
        ],
        B3: [
            { name: "Cadeira flexora", video: "https://www.youtube.com/embed/wqVoX6lbYf8" },
            { name: "Leg press 45°", video: "https://www.youtube.com/embed/hYKoCUczAY4?si=fpIhbkB8fhi7NTgc" },
            { name: "Sumo deadlift", video: "https://www.youtube.com/embed/e7oLkRlT2CQ" },
            { name: "Cadeira extensora", video: "https://www.youtube.com/embed/4ZDm5EbiFI8?si=UzFJuMHE9afk-lo7" },
            { name: "Bíceps rosca polia baixa", video: "https://www.youtube.com/embed/dH7xKAXOkJM" },
            { name: "Bíceps rosca martelo", video: "https://www.youtube.com/embed/BRVDS6HVR9Q?si=fh5YnIuxDK6lkh20" },
            { name: "Elevação lateral com halter", video: "https://www.youtube.com/embed/CpDBdo3U-dI?si=Dx3bq50ULQLFhpAJ" },
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