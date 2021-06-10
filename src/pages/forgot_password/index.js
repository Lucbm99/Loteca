import React from 'react';
import './style.css';

function ForgotPassword() {
    return (
        <section className="description">
            <h4 class="instructions-password">
                Digite seu e-mail no campo abaixo e uma nova senha será enviada a você:            </h4>
            <form className="send-password">
                <label htmlFor="email">E-mail:</label><br />
                <input type="email" placeholder="Digite seu e-mail..." autoFocus /><br />
                <button className="button-send-password">
                    Enviar
                </button>
            </form>
            <div className="backlogin">
                <a href="#">Voltar ao login</a>
            </div>
        </section>
    )
}

export default ForgotPassword;
