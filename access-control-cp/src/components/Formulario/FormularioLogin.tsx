import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
    nomeUsuario: string;
    email: string;
};

export default function FormularioLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

        const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await fetch(`http://localhost:4000/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`);
            const user = await response.json();

            if (user.length > 0) {
                alert("Login realizado com sucesso!");
                sessionStorage.setItem("usuarioLogado", JSON.stringify(user[0]));
                window.location.reload(); 
            } else {
                alert("Nome de usuário ou email inválidos.");
            }
        } catch (error) {
            console.error("Falha na comunicação com o servidor:", error);
            alert("Não foi possível conectar ao servidor.");
        }
    };

    return (
        <div className="formulario-container">
            <h2>Login</h2> 
                <form onSubmit={handleSubmit(onSubmit)} className="formulario">
                    <div>
                        <label htmlFor="nomeUsuario" className="caixa">Nome de Usuário</label>
                        <input
                            id="nomeUsuario"
                            className="campo"
                            {...register("nomeUsuario", { required: "O nome de usuário é obrigatório" })}
                        />
                        {errors.nomeUsuario && <p className="erro">{errors.nomeUsuario.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="caixa">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="campo"
                            {...register("email", {
                                required: "O email é obrigatório",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Insira um email válido"
                                }
                            })}
                        />
                        {errors.email && <p className="erro">{errors.email.message}</p>}
                    </div>
                    <button type="submit" className="botao-login">Entrar</button>
                    <p>
                        Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                    </p>
                </form>
        </div>
    );
}