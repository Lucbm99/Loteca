import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Register() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <section className="description">
            <h4 className="instructions-register">
                Faça seu cadastro preenchendo os campos abaixo:
            </h4>
            <form className="register-user">
                <label htmlFor="nome">Nome:</label><br />
                <input 
                    type="text" 
                    placeholder="Digite seu nome..." 
                    autoFocus />
                <br />

                <label htmlFor="email">E-mail:</label><br />
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail..." />
                <br />

                <label htmlFor="password">Senha:</label><br />
                <input 
                    type={passwordShown ? "text" : "password"}
                    placeholder="Digite sua senha..." />
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                <br />

                <label htmlFor="password">Redigite sua senha:</label><br />
                <input 
                    type="password"
                    placeholder="Redigite sua senha..." />
                <br />
                    
                <button className="button-register">
                    Cadastrar
                </button>
            </form>
            <div className="back-login">
                <Link to="/">Já possui conta? Faça seu login</Link>
            </div>
        </section>
    )
}

export default Register;
