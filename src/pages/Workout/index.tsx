import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import './styles.css'
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { Footer } from "../../components/Footer";

export function Workout() {
    const [selectedWorkout, setSelectedWorkout] = useState<string>("");
    const [videoUrl, setVideoUrl] = useState<string>(""); // Estado para o vídeo selecionado

    useEffect(() => {
        M.AutoInit();
    }, []);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedWorkout(event.target.value);
    };

    const handleExerciseClick = (video: string) => {
        setVideoUrl(video); // Atualiza o URL do vídeo
    };

    return (
        <>
            <Header />

            <div className="row">

                <div className="col s3 blue-grey darken-2 white-text">
                    <p>Selecione um treino para ver os exercícios.</p>
                    <p>Clique em um dos exercícios da tabela para abrir um vídeo nesta área mostrando a execução.</p>
                    <iframe src={videoUrl} width="100%" height="700" title="Exercício"></iframe>
                </div>

                <div className="col s9 grey darken-2 white-text">
                    <div className="container input-field">
                        <select value={selectedWorkout} onChange={handleSelectChange}>
                            <option value="" disabled>Selecione um treino</option>
                            <option value="A1">A1</option>
                            <option value="B1">B1</option>
                            <option value="A2">A2</option>
                            <option value="B2">B2</option>
                            <option value="A3">A3</option>
                            <option value="B3">B3</option>
                        </select>
                    </div>
                    <Table selectedWorkout={selectedWorkout} onExerciseClick={handleExerciseClick} />
                </div>

            </div>

            <Footer />
        </>
    );
}