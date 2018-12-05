export class Evento{
    constructor(
        public eventoId: number,
        public nome: string,
        public data: string,
        public local: string,
        public hora_ini: string,
        public hora_fim: string,
        public equipamentos: string,
        public genero: string,
        public descricao: string,
        public detalhes: string
        ){}
}