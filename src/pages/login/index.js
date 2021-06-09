import React from 'react';
import './style.css';
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
                <a href="#" class="forgot-password">Esqueci a senha</a><br />
                <button className="enter">
                    Entrar
                </button>
            </form>
            <div className="register">
                <a href="#">Não possui conta? Cadastre-se</a>
            </div>
        </section>
    )
}

export default Login;
