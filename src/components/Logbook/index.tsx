/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import './styles.css'

export function Logbook() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    const [selectedTreino, setSelectedTreino] = useState("A1");

    const treinoOptions: Record<string, string[]> = {
        A1: [
            "T bar row",
            "Remada baixa com triângulo (pronada ou neutra)",
            "Supino inclinado smith (banco 30°)",
            "Supino reto máquina (polia)",
            "Desenvolvimento máquina (polia)",
            "Tríceps francês unilateral (polia)",
            "Tríceps polia alta (barra reta ou V)"
        ],
        B1: [
            "RDL",
            "Cadeira flexora unilateral (máquina zerada)",
            "Leg press 45°",
            "Cadeira extensora",
            "Bíceps rosca polia baixa (barra reta)",
            "Bíceps rosca unilateral polia baixa (bayesian curl)"
        ],
        A2: [
            "Remada curvada com halteres (pronada)",
            "Puxada alta (pegada neutra ou triângulo)",
            "Supino inclinado máquina (polia)",
            "Supino reto máquina (polia)",
            "Tríceps polia alta (barra reta ou V)",
            "Tríceps francês unilateral (polia)",
            "Elevação unilateral (polia baixa pegador)"
        ],
        B2: [
            "Cadeira flexora",
            "Agachamento livre",
            "Cadeira extensora",
            "Elevação pélvica smith",
            "Mesa flexora",
            "Bíceps rosca polia baixa (barra reta)",
            "Bíceps rosca unilateral polia baixa (bayesian curl)"
        ],
        A3: [
            "Remada polia baixa unilateral (neutra)",
            "T bar row máquina",
            "Supino inclinado smith (banco 30°)",
            "Supino reto máquina convergente",
            "Desenvolvimento com halteres (banco 75°)",
            "Tríceps polia alta (barra reta ou V)",
            "Tríceps cruzado polia (unilateral)"
        ],
        B3: [
            "Cadeira flexora",
            "Leg press 45°",
            "Sumo deadlift",
            "Cadeira extensora",
            "Bíceps rosca polia baixa (barra reta)",
            "Bíceps rosca martelo halteres (simultâneo)",
            "Elevação lateral com halter sentado (banco 90°)"
        ]
    };

    const exercises = treinoOptions[selectedTreino] || [];

    return (
            <form action="">
                <div className="container center-align">
                    <p className="text-form white-text">Treino</p>
                    <select
                        required
                        defaultValue=""
                        className="grey darken-4 white-text"
                        onChange={(e) => setSelectedTreino(e.target.value)}>
                        <option value="" disabled>Escolha o treino</option>
                        <option value="A1">A1</option>
                        <option value="B1">B1</option>
                        <option value="A2">A2</option>
                        <option value="B2">B2</option>
                        <option value="A3">A3</option>
                        <option value="B3">B3</option>
                    </select>
                </div>

                <div className="container">
                    <div className="center-align">
                        <p className="text-form white-text">Exercícios</p>
                    </div>
                    {exercises.map((exercise, index) => (
                        <div>
                            <p className="text-form white-text" key={index} >{exercise}</p>
                            <input type="number" className="grey darken-4 white-text" placeholder="Repetições" required/>
                            <input type="number" className="grey darken-4 white-text" placeholder="Carga de Trabalho" required/>
                        </div>
                    ))}
                </div>

                <div className="center-align">
                    <button className="large btn waves-effect waves-light red accent-4" type="submit" name="action">Salvar
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
    )
}