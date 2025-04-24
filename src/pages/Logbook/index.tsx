/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import './styles.css'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";

export function LogBook() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <>
            <Header />

            <div className="row">

                <div className="col s3 grey darken-3 white-text">
                    <Form />
                </div>

                <div className="col s9 grey darken-2 white-text">

                </div>

            </div>

            <Footer />
        </>
    )
}