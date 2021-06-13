import React from 'react';
import { Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';

function Games() {
    return (
        <div>
            <p className="orientations">Preencha os seus palpites nos jogos abaixo e<br/>
            clique em Enviar, ao finalizar:</p><br/>

                <Table className="table-striped table-light" responsive>
                <thead>
                    <tr>
                        <th>Mandante</th>
                        <th>Empate</th>
                        <th>Visitante</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                </tbody>
            </Table>

            <div className="button-send">
                <button className="send-guesses">Enviar</button>
            </div>

            <div className="back-classification">
                <Link to="/classification">Voltar</Link>
            </div>
        </div>
    )
}

export default Games;