export class Manutencao {

    id?: number;
	tituloManutencao?: string;
	descricaoManutencao?: string;
	nomeOperador?: string;
	nomeManutenedor?: string;
	equipamentos?: number;
	tipoManutencoes?: number;
    criticidades?: number;
	dataManutencao?: string;
    dataUltimaManutencao?: string;
    dataProximaManutencao?: string;
    diasFinalizacao?: number;
    diasTotais?: number;
	pauseManutencao?: boolean;
    dataRetornoPause?: string;
	dataCadastro?: string;
	dataAtualizacao?: string;
	status?: boolean;

}