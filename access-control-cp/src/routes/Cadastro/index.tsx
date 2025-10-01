import { Link } from "react-router-dom";
import FormularioCadastro from "../../components/Formulario/FormularioCadastro";

export default function Cadastro() {
    return (
        <main>
            <h1 className="h1">Cadastro de Usuário</h1>
            <FormularioCadastro/>
             <p>
                Já possui uma conta? <Link to="/">Faça o login</Link>
            </p>
        </main>
    );
}