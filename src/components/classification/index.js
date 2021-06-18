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
            <i style={{ position: 'absolute', right: '5%', top: '3%', padding: '8px', borderRadius: '10px'}} onClick={handleProfile}>{avatarProfile}</i>
            <strong>Classificação do campeonato <br/> Brasileirão - Returno</strong>
            <Table className="table-striped table-hover table-dark" responsive>
                <thead>
                    <tr>
                        <th>Posição</th>
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
                        <td>1</td>
                        <td>Adriano</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Daniel</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Giácomo</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Júlio</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Lucas</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>6</td>
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