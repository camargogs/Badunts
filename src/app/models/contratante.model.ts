export class Contratante{
    constructor(
        public contratanteId: number,
        public nome: string,
        public usuario: string,
        public email: string,
        public senha: string,
        // public evento: Evento[],
        public avaliacao: number,
        public carteiraID: string,
        public rg:string,
        public cpf:string,
        public cidade:string,
        public endereco: string,
        public cep: number,
        public estabelecimento: string,
        public publico: number,
        public cartao: number
    ){}
} 