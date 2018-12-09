export class Avaliacao{
    constructor(
        public musicoId:number,
        public contratanteId:number,
        public notaMusico: number,
        public notaContratante: number,
        public comentarioContratante: string,
        public comentarioMusico: string
    ){}
}