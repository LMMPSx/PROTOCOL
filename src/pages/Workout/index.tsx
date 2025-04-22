/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import './styles.css'
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { Footer } from "../../components/Footer";

export function Workout() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <>
            <Header />

            <div className="row">

                <div className="col s3 grey darken-4 white-text">
                    <p>Clique em um dos exercícios da tabela para abrir um video nesta área mostrando a execução.</p>
                </div>

                <div className="col s9 grey lighten-3 white-text">
                    <Table />
                </div>

            </div>

            <Footer />
        </>
    )
}