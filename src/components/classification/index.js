import React from 'react';
import { Table } from 'reactstrap';
import './style.css';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
const avatarProfile = <FontAwesomeIcon icon={faUserAlt} />;

const Classification = () => {

    const history = useHistory();
    const handleGames = () => {
        history.push('/games');
    }

    const handleProfile = () => {
        history.push('/profile');
    }

    return (
        
        <div>
            <h4 className="welcome-message">Olá, nome do usuário!</h4>
            <div className="button-results">
                <button className="send-results" onClick={handleGames}>Enviar palpites</button>
            </div>
            <i style={{ position: 'absolute', right: '5%', top: '5%', padding: '8px', borderRadius: '10px'}} onClick={handleProfile}>{avatarProfile}</i>
            <strong>Classificação do campeonato - Brasileirão - Returno</strong>
            <Table className="table-striped table-hover table-dark" responsive>
            <thead>
                <tr>
                    <th>Nomes</th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Adriano</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Daniel</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Giácomo</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Júlio</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Lucas</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Victor</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
            </Table>
        </div>
    );
}

export default Classification;