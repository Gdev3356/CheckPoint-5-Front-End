import { Link } from "react-router-dom";

export default function Login() {
    return (
        <main>
            <h1 className="h1">Login</h1>
            <p>
                Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
        </main>
    );
}