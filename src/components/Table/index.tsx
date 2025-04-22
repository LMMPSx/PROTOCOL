/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import './styles.css'

export function Table() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <div className="">
            <table className="centered highlight black-text">
                <thead>
                    <tr>
                        <th>Treino</th>
                        <th>Exercício</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td
                            rowSpan={8}
                        >
                            A1
                        </td>
                    </tr>
                    <tr>
                        <td>T bar row</td>
                    </tr>
                    <tr>
                        <td>Remada baixa com triângulo (pronada ou neutra)</td>
                    </tr>
                    <tr>
                        <td>Supino inclinado smith (banco 30°)</td>
                    </tr>
                    <tr>
                        <td>Supino reto máquina (polia)</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento máquina (polia)</td>
                    </tr>
                    <tr>
                        <td>Tríceps francês unilateral (polia)</td>
                    </tr>
                    <tr>
                        <td>Tríceps polia alta (barra reta ou V)</td>
                    </tr>

                    <tr>
                        <td
                            rowSpan={7}
                        >
                            B1
                        </td>
                    </tr>
                    <tr>
                        <td>RDL</td>
                    </tr>
                    <tr>
                        <td>Cadeira flexora unilateral (máquina zerada)</td>
                    </tr>
                    <tr>
                        <td>Leg press 45°</td>
                    </tr>
                    <tr>
                        <td>Cadeira extensora</td>
                    </tr>
                    <tr>
                        <td>Bíceps rosca polia baixa (barra reta)</td>
                    </tr>
                    <tr>
                        <td>Bíceps rosca unilateral polia baixa (bayesian curl)</td>
                    </tr>

                    <tr>
                        <td
                            rowSpan={8}
                        >
                            A2
                        </td>
                    </tr>
                    <tr>
                        <td>Remada curvada com halteres (pronada)</td>
                    </tr>
                    <tr>
                        <td>Puxada alta (pegada neutra ou triângulo)</td>
                    </tr>
                    <tr>
                        <td>Supino inclinado máquina (polia)</td>
                    </tr>
                    <tr>
                        <td>Supino reto máquina (polia)</td>
                    </tr>
                    <tr>
                        <td>Tríceps polia alta (barra reta ou V)</td>
                    </tr>
                    <tr>
                        <td>Tríceps francês unilateral (polia)</td>
                    </tr>
                    <tr>
                        <td>Elevação unilateral (polia baixa pegador)</td>
                    </tr>

                    <tr>
                        <td
                            rowSpan={8}
                        >
                            B2
                        </td>
                    </tr>
                    <tr>
                        <td>Cadeira flexora</td>
                    </tr>
                    <tr>
                        <td>Agachamento livre</td>
                    </tr>
                    <tr>
                        <td>Cadeira extensora</td>
                    </tr>
                    <tr>
                        <td>Elevação pélvica smith</td>
                    </tr>
                    <tr>
                        <td>Mesa flexora</td>
                    </tr>
                    <tr>
                        <td>Bíceps rosca polia baixa (barra reta)</td>
                    </tr>
                    <tr>
                        <td>Bíceps rosca unilateral polia baixa (bayesian curl)</td>
                    </tr>

                    <tr>
                        <td
                            rowSpan={8}
                        >
                            A3
                        </td>
                    </tr>

                    <tr>
                        <td>Remada polia baixa unilateral (neutra)</td>
                    </tr>
                    <tr>
                        <td>T bar row máquina</td>
                    </tr>
                    <tr>
                        <td>Supino inclinado smith (banco 30°)</td>
                    </tr>
                    <tr>
                        <td>Supino reto máquina convergente</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento com halteres (banco 75°)</td>
                    </tr>
                    <tr>
                        <td>Tríceps polia alta (barra reta ou V)</td>
                    </tr>
                    <tr>
                        <td>Tríceps cruzado polia (unilateral)</td>
                    </tr>

                    <tr>
                        <td
                            rowSpan={8}
                        >
                            B3
                        </td>
                    </tr>

                    <tr>
                        <td>Cadeira flexora</td>
                    </tr>
                    <tr>
                        <td>Leg press 45°</td>
                    </tr>
                    <tr>
                        <td>Sumo deadlift</td>
                    </tr>
                    <tr>
                        <td>Cadeira extensora</td>
                    </tr>
                    <tr>
                        <td>Bíceps rosca polia baixa (barra reta)</td>
                    </tr>
                    <tr>
                        <td>Bíceps rosca martelo halteres (simultâneo)</td>
                    </tr>
                    <tr>
                        <td>Elevação lateral com halter sentado (banco 90°)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}