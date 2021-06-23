import React, { useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [textEmail, setTextEmail] = useState('');
    const [textPassword, setTextPassword] = useState('');

    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        if(textEmail === '') {
            alert("Campo e-mail inválido ou em branco. Verifique e tente novamente");
        } else if (textPassword === '') {
            alert("Campo senha inválido ou em branco. Verifique e tente novamente");
        } else {
            history.push('/classification');
        }
    }

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
                        value={textEmail}
                        onChange={(e) => setTextEmail(e.target.value)}
                        autoFocus />
                    <br />
                    
                    <label htmlFor="password">Senha:</label><br />
                    <input 
                        type={passwordShown ? "text" : "password"}
                        placeholder="Digite sua senha..." 
                        value={textPassword} 
                        onChange={(e) => setTextPassword(e.target.value)} />
                    <br />
                    <span 
                        className="show-password" 
                        role="button" 
                        tabindex="0" 
                        onClick={togglePasswordVisiblity}>
                        Mostrar
                    </span>
                    <Link 
                        to="/forgotpassword" 
                        className="forgot-password">
                            Esqueci a senha
                    </Link>
                    <br />
                    
                    <button 
                        className="enter" 
                        onClick={handleClick}>
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
