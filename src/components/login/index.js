import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        
            <section className="description">
                <h2 class="welcome">
                    SEJA BEM VINDO AO...
                </h2>
                <h4 class="instructions">
                    Faça o login abaixo para jogar na próxima rodada da loteca:
                </h4>
                <form className="login">
                    <label htmlFor="email">E-mail:</label><br />
                    <input type="email" placeholder="Digite seu e-mail..." autoFocus /><br />
                    <label htmlFor="password">Senha:</label><br />
                    <input type="password" placeholder="Digite sua senha..." /><br />
                    <Link to="/forgotpassword" class="forgot-password">Esqueci a senha</Link><br />
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
