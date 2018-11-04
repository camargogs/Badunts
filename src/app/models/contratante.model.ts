export class Contratante{
    constructor(
        public contratanteId: string,
        public nome: string,
        public usuario: string,
        public email: string,
        public senha: string,
        // public evento: Evento[],
        public avaliacao: number,
        public carteiraID: string,
    ){}
} 