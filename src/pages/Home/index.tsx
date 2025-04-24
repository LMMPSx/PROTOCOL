/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import './styles.css'
import { Links } from "../../components/Links";
import { Content } from "../../components/Content";

export function Home() {
    const [content, setContent] = useState("default");

    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <>
            <Header />

            <div className="row">

                <div className="col s3 grey darken-3 white-text">
                    <Links onSectionChange={setContent}/>
                </div>

                <div className="col s9 grey darken-2 white-text">
                    <Content section={content}/>
                </div>

            </div>

            <Footer />
        </>
    );
}