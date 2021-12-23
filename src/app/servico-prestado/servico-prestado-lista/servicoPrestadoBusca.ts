import { Cliente } from '../../clientes/cliente';

export class ServicoPrestadoBusca {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    data: string;
    cliente: Cliente;
    idUsuario: number;
    dataCadastro: string;
    dataAtualizacao: string;
}