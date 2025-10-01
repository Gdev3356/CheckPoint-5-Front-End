const API_BASE_URL = 'http://localhost:4000';

export interface Usuario {
  id: number;
  nome: string;
  nomeUsuario: string;
  email: string;
}

export interface LoginData {
  nomeUsuario: string;
  email: string;
}

export interface CadastroData {
  nome: string;
  nomeUsuario: string;
  email: string;
}

export const authService = {
  async login(loginData: LoginData): Promise<Usuario | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios`);
      const usuarios: Usuario[] = await response.json();
      
      const usuario = usuarios.find(
        user => user.nomeUsuario === loginData.nomeUsuario && user.email === loginData.email
      );
      
      return usuario || null;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return null;
    }
  },

  async cadastro(cadastroData: CadastroData): Promise<Usuario | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios`);
      const usuarios: Usuario[] = await response.json();
      
      const usuarioExistente = usuarios.find(
        user => user.nomeUsuario === cadastroData.nomeUsuario || user.email === cadastroData.email
      );
      
      if (usuarioExistente) {
        throw new Error('Usuário ou email já cadastrado');
      }

      const novoUsuario = {
        ...cadastroData,
        id: Date.now()
      };

      const createResponse = await fetch(`${API_BASE_URL}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
      });

      return await createResponse.json();
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      throw error;
    }
  },

  async getUsuarioById(id: number): Promise<Usuario | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios/${id}`);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return null;
    }
  }
};