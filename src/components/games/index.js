import React from 'react';
import { Table, Input, Card, CardTitle, CardText } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

function Games() {
    const history = useHistory();

    const handleGuesses = () => {
        if (window.confirm("Deseja enviar os jogos?")) {
            alert("Jogos enviados com sucesso!");
            history.push('/classification');
        }
    }

    return (
        <div>
            <p className="orientations">Preencha os seus palpites nos jogos abaixo e<br/>
            clique em Enviar, ao finalizar:</p><br/>
                <Card body inverse color="warning">
                    <CardTitle tag="h5">Atenção!</CardTitle>
                    <CardText>O envio dos palpites são permitidos até às 14hrs de sábado.</CardText>
                </Card>
                <Table className="table-striped table-light" responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mandante</th>
                        <th>Empate</th>
                        <th>Visitante</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td><Input type="checkbox" />São Paulo</td>
                        <td><Input type="checkbox" /></td>
                        <td><Input type="checkbox" />Flamengo</td>
                    </tr>
                </tbody>
            </Table>

            <div className="button-send">
                <button className="send-guesses" onClick={handleGuesses}>Enviar</button>
            </div>

            <div className="back-classification">
                <Link to="/classification">Voltar</Link>
            </div>
        </div>
    )
}

export default Games;