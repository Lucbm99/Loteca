import React, {useState} from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [emailPassword, setEmailPassword] = useState('');

    const sendPassword = (e) => {
        e.preventDefault();
        if(emailPassword === '') {
            alert("E-mail digitado inválido ou em branco. Verifique e tente novamente.");
        } else {
            alert("E-mail enviado com sucesso!!");
        }
    }

    return (
        <section className="description">
            <h4 className="instructions-password">
                Digite seu e-mail no campo abaixo e uma nova senha será enviada a você:</h4>
            <form className="send-password">
                <label htmlFor="email">E-mail:</label><br />
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail..." 
                    autoFocus 
                    value={emailPassword}
                    onChange={(e)=>setEmailPassword(e.target.value)}
                    />
                <br />
                <button className="button-send-password" onClick={sendPassword}>
                    Enviar
                </button>
            </form>
            <div className="backlogin">
                <Link to="/">Voltar ao login</Link>
            </div>
        </section>
    )
}

export default ForgotPassword;
