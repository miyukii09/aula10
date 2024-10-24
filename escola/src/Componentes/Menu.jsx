import { Link } from "react-router-dom";
export default function Menu()
{
    return (
        <header>
            <h2>Escola</h2>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/Cadastro">Novo aluno</Link>
                <Link to="/Consulta">Listagem de alunos</Link>
            </div>
        </header>
    );
}