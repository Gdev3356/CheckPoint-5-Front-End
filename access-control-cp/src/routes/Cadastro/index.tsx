import { Link } from "react-router-dom";
import FormularioCadastro from "../../components/Formulario/FormularioCadastro";

export default function Cadastro() {
    return (
        <main>
            <FormularioCadastro/>
             <p>
                Já possui uma conta? <Link to="/">Faça o login</Link>
            </p>
        </main>
    );
}