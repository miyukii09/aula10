import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Paginas/Home";
import Cadastro from "../Paginas/Cadastro";
import Consulta from "../Paginas/Consulta";
import Alteracao from "../Paginas/Alteracao";
import Exclusao from "../Paginas/Exclusao";
import Erro from "../Paginas/Erro";
import Menu from "./Menu";



export default function Rotas()
{
    return (
        <div>
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Cadastro" element={<Cadastro />} />
                    <Route path="/Consunta" element={<Consulta />} />
                    <Route path="/Alteracap/:codigo" element={<Alteracao />} />
                    <Route path="/Exclusao/:codigo" element={<Exclusao />} />
                    <Route path="*" element={<Erro />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}