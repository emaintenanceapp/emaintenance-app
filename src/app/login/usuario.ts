export class Usuario {
    id: number;
    name: string;
    password: string;
    confirmacaoSenha: string;
    role: Array<string>;
    email: string;
    descricao: string;
    status: boolean;
}