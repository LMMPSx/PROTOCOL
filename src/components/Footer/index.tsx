/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import './styles.css'

export function Footer() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <footer className="page-footer blue-grey darken-4">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae exercitationem commodi earum deleniti natus suscipit veniam amet rem debitis esse, facilis similique nesciunt sunt tempore numquam beatae tempora? Distinctio, ad.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/LMMPSx" target="blank">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2025 Luiz Miguel
                </div>
            </div>
        </footer>
    )
}