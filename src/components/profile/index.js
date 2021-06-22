import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Profile = () => {

    const history = useHistory();

    const handleClassification = () => {
        history.push('/classification');
    }

    const handleLogout = () => {
        alert("Tem certeza que deseja sair do sistema?");
        history.push('/');
    }
    return (
        <div>
            <img className="img-avatar" src="/avatar-icon.png" alt="avatar" />
            <div class="update">
                <Link to="/edit-profile">Alterar dados</Link>
            </div>
            <div className="buttons">
                <button className="backclassification" onClick={handleClassification}>Voltar</button>
                <button className="logout" onClick={handleLogout}>Sair</button>    
            </div>
        </div>
    );
}

export default Profile;