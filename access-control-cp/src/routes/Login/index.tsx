import { Link } from "react-router-dom";
import FormularioLogin from "../../components/Formulario/FormularioLogin";

export default function Login() {
    return (
        <main>
            <FormularioLogin/>
            <p>
                Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
        </main>
    );
}