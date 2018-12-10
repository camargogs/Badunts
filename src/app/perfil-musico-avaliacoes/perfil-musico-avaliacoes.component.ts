import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-musico-avaliacoes',
  templateUrl: './perfil-musico-avaliacoes.component.html',
  styleUrls: ['../perfil-musico/perfil-musico.component.css']
})
export class PerfilMusicoAvaliacoesComponent implements OnInit {

  constructor() { }

  contratantes;
  contratos;
  musicos;
  atual;
  avaliacao;

  contratante;
  nome_musi;
  comentario;

  foto:string;
  ngOnInit() {
    this.avaliacao = JSON.parse(localStorage.getItem("avaliacao"));
    this.contratantes = JSON.parse(localStorage.getItem("contratantes"));
    this.musicos =  JSON.parse(localStorage.getItem("musicos"));
    this.atual =  JSON.parse(localStorage.getItem("atual"));

    if(this.contratantes!=null){
      this.contratante =  this.contratantes[0].estabelecimento;
      this.foto = this.contratantes[0].carteiraID;
    }
    if(this.comentario!=null){
      this.nome_musi = this.atual.nome;
      this.comentario = this.avaliacao.comentarioContratante;
    }

  
  }


}
