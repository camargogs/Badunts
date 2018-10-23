export class Musico{
    constructor(
        public musicoId: string,
        public nome: string,
        public usuario: string,
        public email: string,
        public senha: string,
        // public tipoShow: Show[],
        // public portfolio: Portfolio,
        public carteiraId: string,
        public avaliacao: number,
        public agendaId: string,
    ){    
    }
}