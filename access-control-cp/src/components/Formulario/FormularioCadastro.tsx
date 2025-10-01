import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type Inputs = {
    nome: string;
    nomeUsuario: string;
    email: string;
};

export default function FormularioCadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();

     const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const userResponse = await fetch(`http://localhost:4000/usuarios?nomeUsuario=${data.nomeUsuario}`);
            const userExists = await userResponse.json();
            if (userExists.length > 0) {
                alert("Erro: Nome de usuário já cadastrado.");
                return;
            }

            const emailResponse = await fetch(`http://localhost:4000/usuarios?email=${data.email}`);
            const emailExists = await emailResponse.json();
            if (emailExists.length > 0) {
                alert("Erro: Email já cadastrado.");
                return;
            }

            const response = await fetch("http://localhost:4000/usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                navigate("/"); 
            } else {
                alert("Ocorreu um erro ao cadastrar.");
            }
        } catch (error) {
            console.error("Falha na comunicação com o servidor:", error);
            alert("Não foi possível conectar ao servidor.");
        }
    };

    return (
        <div className="formulario-container">
            <h2>Cadastro</h2> 
                <form onSubmit={handleSubmit(onSubmit)} className="formulario">
                    <div>
                        <label htmlFor="nome" className="caixa">Nome Completo</label>
                        <input
                            id="nome"
                            className="campo"
                            {...register("nome", { required: "O nome é obrigatório" })}
                        />
                        {errors.nome && <p className="erro">{errors.nome.message}</p>}
                    </div>

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
                    <button type="submit" className="botao-cadastro">Cadastrar</button>
                    <p>
                        Já possui uma conta? <Link to="/">Faça o login</Link>
                    </p>  
                </form>
            </div>
    );
}