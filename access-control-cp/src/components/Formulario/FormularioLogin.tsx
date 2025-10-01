import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
    nomeUsuario: string;
    email: string;
};

export default function FormularioLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("Dados do formulário de login:", data);
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