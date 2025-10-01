import { Link } from "react-router-dom";

export default function Cadastro() {
    return (
        <main>
            <h1 className="h1">Cadastro de Usuário</h1>
             <p>
                Já possui uma conta? <Link to="/">Faça o login</Link>
            </p>
        </main>
    );
}