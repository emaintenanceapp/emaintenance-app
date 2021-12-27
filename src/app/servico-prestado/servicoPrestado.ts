import { Cliente } from "../clientes/cliente";

export class ServicoPrestado {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    data: string;
    cliente: Cliente;
    idCliente: number;
    idUsuario: number;
    dataCadastro: string;
    dataAtualizacao: string;
}

