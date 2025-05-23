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

    const data: Record<string, { name: string; sets: string; prep: string; method: string; video: string }[]> = {
        A1: [
            { name: "T bar row", sets: "3", prep: "1x Aquecimento\n3x Feeder", method: "2x Work\n1x Back off", video: "https://www.youtube.com/embed/HeqTlG_Zrow?si=1fzBHhFxQ9XZUqni" },
            { name: "Remada baixa com triângulo (pronada ou neutra)", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/UDaQKi9Z9lY?si=8xhiJ5C2m-Q909Ep" },
            { name: "Supino inclinado smith (banco 30°)", sets: "2", prep: "3x Feeder", method: "2x Work", video: "https://youtube.com/embed/-kqeSi8iHBs" },
            { name: "Supino reto máquina (polia)", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/6Cpf8SBfHqs?si=t_zt56QhU9DN-sIh" },
            { name: "Desenvolvimento máquina (polia)", sets: "2", prep: "2x Feeder", method: "1x Work\n 1x Top set", video: "https://www.youtube.com/embed/WvLMauqrnK8?si=G1Br1cIP6qO97A22" },
            { name: "Tríceps francês unilateral (polia)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/cf7BqZErm0A?si=xVesdUQba6Z26agX" },
            { name: "Tríceps polia alta (barra reta ou V)", sets: "2", prep: "2x Feeder", method: "1x Work\n 1 Rest Pause", video: "https://www.youtube.com/embed/wQdCw93LkcI?si=p1aGI5HwWEIYDVEh" },
        ],
        B1: [
            { name: "RDL", sets: "3", prep: "1x Aquecimento\n2x Feeder", method: "2x Work\n 1x Back off", video: "https://www.youtube.com/embed/tX__cAsyj30" },
            { name: "Cadeira flexora unilateral (máquina zerada)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/wqVoX6lbYf8" },
            { name: "Leg press 45°", sets: "2", prep: "3x Feeder", method: "1x Work\n 1x Top set", video: "https://www.youtube.com/embed/hYKoCUczAY4?si=fpIhbkB8fhi7NTgc" },
            { name: "Cadeira extensora", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Rest Pause", video: "https://www.youtube.com/embed/4ZDm5EbiFI8?si=UzFJuMHE9afk-lo7" },
            { name: "Bíceps rosca polia baixa (barra reta)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/dH7xKAXOkJM" },
            { name: "Bíceps rosca unilateral polia baixa (bayesian curl)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/qGb4DIxYPEg?si=KdFoobCwQgRDYxWX" },
        ],
        A2: [
            { name: "Remada curvada com halteres (pronada)", sets: "3", prep: "1x Aquecimento\n3x Feeder", method: "2x Work\n 1x Back off", video: "https://www.youtube.com/embed/_ePXLHAILR8?si=kGonsciDGvr1vewM" },
            { name: "Puxada alta (pegada neutra ou triângulo)", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Rest Pause", video: "https://www.youtube.com/embed/AQmHe1vjs-A?si=mG_a_HGciJ5sOAOb" },
            { name: "Supino inclinado máquina (polia)", sets: "2", prep: "3x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/ZTOyEEwBdRM?si=d0aR_Azbrztc__0b" },
            { name: "Supino reto máquina (polia)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/6Cpf8SBfHqs?si=t_zt56QhU9DN-sIh" },
            { name: "Tríceps polia alta (barra reta ou V)", sets: "3", prep: "2x Feeder", method: "3x Work", video: "https://www.youtube.com/embed/wQdCw93LkcI?si=p1aGI5HwWEIYDVEh" },
            { name: "Tríceps francês unilateral (polia)", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Rest Pause", video: "https://www.youtube.com/embed/cf7BqZErm0A?si=xVesdUQba6Z26agX" },
            { name: "Elevação unilateral (polia baixa pegador)", sets: "3", prep: "2x Feeder", method: "3x Work", video: "https://www.youtube.com/embed/nQwNcD7CKKY?si=K2Dnk_JY3bknb68D" },
        ],
        B2: [
            { name: "Cadeira flexora", sets: "2", prep: "1x Aquecimento\n2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/wqVoX6lbYf8" },
            { name: "Agachamento livre", sets: "2", prep: "3x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/XJdV5WNyvHQ?si=dm9_0n9-yko0cRIv" },
            { name: "Cadeira extensora", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/4ZDm5EbiFI8?si=UzFJuMHE9afk-lo7" },
            { name: "Elevação pélvica smith", sets: "2", prep: "3x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/ZDSetUhr0fo" },
            { name: "Mesa flexora", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Rest Pause", video: "https://www.youtube.com/embed/P9zH7iHsfE8?si=mfUXIgtSx7AN2kLZ" },
            { name: "Bíceps rosca polia baixa (barra reta)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/dH7xKAXOkJM" },
            { name: "Bíceps rosca unilateral polia baixa (bayesian curl)", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Rest Pause", video: "https://www.youtube.com/embed/qGb4DIxYPEg?si=KdFoobCwQgRDYxWX" },
        ],
        A3: [
            { name: "Remada polia baixa unilateral (neutra)", sets: "3", prep: "1x Aquecimento\n2x Feeder", method: "2x Work\n1x Back off", video: "https://www.youtube.com/embed/PN95TKHkDqE?si=0q7-QO_pwKiibz54" },
            { name: "T bar row máquina", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/HeqTlG_Zrow?si=1fzBHhFxQ9XZUqni" },
            { name: "Supino inclinado smith (banco 30°)", sets: "2", prep: "3x Feeder", method: "1x Work\n1x Top set", video: "https://youtube.com/embed/-kqeSi8iHBs" },
            { name: "Supino reto máquina convergente", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/z_Hsovhiy48" },
            { name: "Desenvolvimento com halteres (banco 75°)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/qeMH-V6CsfM?si=L9xICELsRqpCGyYv" },
            { name: "Tríceps polia alta (barra reta ou V)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/wQdCw93LkcI?si=p1aGI5HwWEIYDVEh" },
            { name: "Tríceps cruzado polia (unilateral)", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Rest Pause", video: "https://www.youtube.com/embed/IIQMw5Up1Ws?si=zb2JiBAFcsGdFbTm" },
        ],
        B3: [
            { name: "Cadeira flexora", sets: "2", prep: "1x Aquecimento\n3x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/wqVoX6lbYf8" },
            { name: "Leg press 45°", sets: "2", prep: "2x Feeder", method: "1x Work\n1x Top set", video: "https://www.youtube.com/embed/hYKoCUczAY4?si=fpIhbkB8fhi7NTgc" },
            { name: "Sumo deadlift", sets: "3", prep: "3x Feeder", method: "1x Work\n1x Top set\n1x Back off", video: "https://www.youtube.com/embed/e7oLkRlT2CQ" },
            { name: "Cadeira extensora", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/4ZDm5EbiFI8?si=UzFJuMHE9afk-lo7" },
            { name: "Bíceps rosca polia baixa (barra reta)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/dH7xKAXOkJM" },
            { name: "Bíceps rosca martelo halteres (simultâneo)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/BRVDS6HVR9Q?si=fh5YnIuxDK6lkh20" },
            { name: "Elevação lateral com halter sentado (banco 90°)", sets: "2", prep: "2x Feeder", method: "2x Work", video: "https://www.youtube.com/embed/CpDBdo3U-dI?si=Dx3bq50ULQLFhpAJ" },
        ],
    };

    const filteredData = selectedWorkout ? data[selectedWorkout] : [];

    return (
        <div className="table-container">
            <table className="centered white-text">
                <thead>
                    <tr>
                        <th>Exercício</th>
                        <th>Preparação</th>
                        <th>Séries</th>
                        <th>Método</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((exercise, index) => (
                        <tr key={index}>
                            <td
                            onClick={() => onExerciseClick(exercise.video)} // Chama a função ao clicar
                            style={{ cursor: "pointer"}} // Estilo para indicar que é clicável
                            >
                            {exercise.name}
                            </td>
                            <td>
                            {exercise.prep.split("\n").map((line, index) => (
                                <span key={index}>
                                {line}
                                <br />
                                </span>
                            ))}
                            </td>
                            <td>{exercise.sets}</td>
                            <td>
                            {exercise.method.split("\n").map((line, index) => (
                                <span key={index}>
                                {line}
                                <br />
                                </span>
                            ))}
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>Nenhum exercício encontrado</td>
                        </tr>
                    )}
                    </tbody>
            </table>
        </div>
    );
}