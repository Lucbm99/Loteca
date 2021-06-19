import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
// const avatarProfile = <FontAwesomeIcon icon={faUserAlt} />;

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
            {/* <i className="avatar-user">{avatarProfile}</i> */}
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