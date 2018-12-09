import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  contratantes;
  musicos;
  atual;
  fotos: string[]=[];
  nome: string[]=[];
  genero;
  cidade;
  user ;

  rota: string;
  ngOnInit() {
    this.atual =  JSON.parse(localStorage.getItem("atual"));

    if(this.atual.publico){
      // this.foto = this.atual.agendaId;
      // this.nome = this.atual.nome;
      // this.genero = this.atual.genero[0];
      // this.cidade = this.atual.cidade;
      this.user = JSON.parse(localStorage.getItem("musicos"));
     
      for (let index = 0; index < this.user.length; index++) {
        this.fotos.push(this.user[index].agendaId);
        this.nome.push(this.user[index].nome);
        this.rota = "/perfilContratante";
      }
      
    }else{
      this.user = JSON.parse(localStorage.getItem("contratantes"));
      for (let index = 0; index < this.user.length; index++) {
        this.fotos.push(this.user[index].carteiraID);
        this.nome.push(this.user[index].estabelecimento);
        this.rota = "/perfilMusico";
      }
    }
  }

}
