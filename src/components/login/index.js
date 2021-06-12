import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
            <section className="description">
                <h2 className="welcome">
                    SEJA BEM VINDO AO...
                </h2>
                <h4 className="instructions">
                    Faça o login abaixo para jogar na próxima rodada da loteca:
                </h4>
                <form className="login">
                    <label htmlFor="email">E-mail:</label><br />
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail..." 
                        autoFocus />
                    <br />
                    
                    <label htmlFor="password">Senha:</label><br />
                    <input 
                        type={passwordShown ? "text" : "password"}
                        placeholder="Digite sua senha..." />
                        <i className="eye-login" onClick={togglePasswordVisiblity}>{eye}</i>
                    <br />

                    <Link to="/forgotpassword" className="forgot-password">Esqueci a senha</Link><br />
                    
                    <button className="enter">
                        Entrar
                    </button>
                </form>
                <div className="register">
                    <Link to="/register">Não possui conta? Cadastre-se</Link>
                </div>
            </section>
    )
}

export default Login;
