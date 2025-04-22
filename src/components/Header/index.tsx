/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import './styles.css'

export function Header() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <nav>
            <div className="nav-wrapper red accent-4">
                <a href="#" className="brand-logo center">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/workout">Workout</a></li>
                    <li><a href="/logbook">Logbook</a></li>
                </ul>
            </div>
        </nav>
    )
}