export class Musico{
    constructor(
        public musicoId: number,
        public nome: string,
        public usuario: string,
        public email: string,
        public senha: string,
        // public tipoShow: Show[],
        // public portfolio: Portfolio,
        public carteiraId: string,
        public avaliacao: number,
        public agendaId: string,
        public rg:string,
        public cpf:string,
        public cidade:string,
        public endereco: string,
        public cep: number,
        public genero:string[],
        public tipo: string,
        public conta: number,
        public foto: string
    ){    
    }
}