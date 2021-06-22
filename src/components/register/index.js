import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// const eye = <FontAwesomeIcon icon={faEye} />;

function Register() {
    // const [passwordShown, setPasswordShown] = useState(false);
    const [nameRegister, setNameRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [passwordRegister2, setPasswordRegister2] = useState('');

    // const togglePasswordVisiblity = () => {
    //     setPaswsordShown(passwordShown ? false : true);
    // };

    const registerUser = (e) => {
        e.preventDefault();
        if(nameRegister === '') {
            alert("Nome inválido ou em branco. Verifique e tente novamente");
        } else if(emailRegister === '') {
            alert("E-mail inválido ou em branco. Verifique e tente novamente");
        } else if(passwordRegister === '') {
            alert("Senha inválido ou em branco. Verifique e tente novamente");
        } else if(passwordRegister2 === '') {
            alert("Confirmação de senha inválida ou em branco. Verifique e tente novamente");
        } else if (passwordRegister !== passwordRegister2) {
            alert("Senhas não conferem. Verifique e tente novamente.")
        } else {
            alert("Cadastro feito com sucesso!!");
        }
    }

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
                    autoFocus 
                    value={nameRegister}
                    onChange={(e) => setNameRegister(e.target.value)}
                    />
                <br />

                <label htmlFor="email">E-mail:</label><br />
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail..." 
                    value={emailRegister}
                    onChange={(e) => setEmailRegister(e.target.value)} />
                <br />

                <label htmlFor="password">Senha:</label><br />
                <input 
                    // type={passwordShown ? "text" : "password"}
                    type="password"
                    placeholder="Digite sua senha..." 
                    value={passwordRegister}
                    onChange={(e)=>setPasswordRegister(e.target.value)} />
                    {/* <i onClick={togglePasswordVisiblity}>{eye}</i> */}
                <br />

                <label htmlFor="password">Redigite sua senha:</label><br />
                <input 
                    type="password"
                    placeholder="Redigite sua senha..." 
                    value={passwordRegister2}
                    onChange={(e)=>setPasswordRegister2(e.target.value)} />
                <br />
                    
                <button className="button-register" onClick={registerUser}>
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
