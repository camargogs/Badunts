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
  star1: string;
  star2: string;
  star3: string;
  star4: string;
  star5: string;
  nota: number;
  notaMusico;
  notaContratante;

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
 
    if(this.atual!=null){
      this.nota = this.atual.avaliacao;
    }
    if(this.nota == 1){
      this.star1="../../assets/images/star-orange.svg";
      this.star2="../../assets/images/star-gray.svg";
      this.star3="../../assets/images/star-gray.svg";
      this.star4="../../assets/images/star-gray.svg";
      this.star5="../../assets/images/star-gray.svg";
    }
    if(this.nota==2){
      this.star1="../../assets/images/star-orange.svg";
      this.star2="../../assets/images/star-orange.svg";
      this.star3="../../assets/images/star-gray.svg";
      this.star4="../../assets/images/star-gray.svg";
      this.star5="../../assets/images/star-gray.svg";
    }
    if(this.nota==3){
      this.star1="../../assets/images/star-orange.svg";
      this.star2="../../assets/images/star-orange.svg";
      this.star3="../../assets/images/star-orange.svg";
      this.star4="../../assets/images/star-gray.svg";
      this.star5="../../assets/images/star-gray.svg";
    }
    if(this.nota==4){
      this.star1="../../assets/images/star-orange.svg";
      this.star2="../../assets/images/star-orange.svg";
      this.star3="../../assets/images/star-orange.svg";
      this.star4="../../assets/images/star-orange.svg";
      this.star5="../../assets/images/star-gray.svg";
    }
    if(this.nota==5){
      this.star1="../../assets/images/star-orange.svg";
      this.star2="../../assets/images/star-orange.svg";
      this.star3="../../assets/images/star-orange.svg";
      this.star4="../../assets/images/star-orange.svg";
      this.star5="../../assets/images/star-orange.svg";
    }
  }
}
