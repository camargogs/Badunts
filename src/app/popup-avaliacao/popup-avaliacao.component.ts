import { Avaliacao } from './../models/avaliacao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-avaliacao',
  templateUrl: './popup-avaliacao.component.html',
  styleUrls: ['./popup-avaliacao.component.css']
})
export class PopupAvaliacaoComponent implements OnInit {

  constructor() { }
  avaliacao: Avaliacao = {
    "musicoId":0,"contratanteId":0,"notaMusico":0,"notaContratante":0,"comentarioContratante":"","comentarioMusico":""
  };
  avaliacoes: Avaliacao[] = [];
  musicos;
  contratante;
  contratos;
  contrato;
  atual;
  contratantes;
  musico;

  nota: number

  musicoId:number;
  contratanteId:number;
  notaMusico: number;
  notaContratante: number;
  comentarioContratante: string;
  comentarioMusico: string;

  //coloração das estrelas
  star1:string="../../assets/images/star-gray.svg";
  star2:string="../../assets/images/star-gray.svg";
  star3:string="../../assets/images/star-gray.svg";
  star4:string="../../assets/images/star-gray.svg";
  star5:string="../../assets/images/star-gray.svg";
  

  // localStorage.setItem("atual", JSON.stringify(contratantes[index]));
  ngOnInit() {
    this.contratantes = JSON.parse(localStorage.getItem("contratantes"));
    this.contratos = JSON.parse(localStorage.getItem("contratos"));
    this.musicos =  JSON.parse(localStorage.getItem("musicos"));
    this.atual =  JSON.parse(localStorage.getItem("atual"));
    console.log(this.atual);
    console.log(this.musicos);
    // if(this.atual.publico){
    //   for (let index = 0; index < this.contratos.length; index++) {
    //       for (let i = 0; i < this.musicos.length; i++) {
    //         console.log(this.musicos[i].musicoId);
    //         if(this.musicos[i].musicoId==this.contratos.musicoId){
    //           this.musico = this.musicos[i];
    //           this.musicoId = this.musico.musicoId;
    //           this.contratanteId = this.atual.contratanteId;
    //           console.log(this.musico);
    //       }
    //     }
    //   }
    // }
    // if(this.atual.tipo){
    // }
    if(this.atual.publico){
      this.musicoId = this.musicos[0].musicoId;
      this.contratanteId = this.atual.contratanteId;
    }else{
      this.contratanteId = this.contratantes[0].musicoId;
      this.musicoId = this.atual.musicoId;
    }
    
  }

  notaUm(){
    this.star1="../../assets/images/star-orange.svg";
    this.star2="../../assets/images/star-gray.svg";
    this.star3="../../assets/images/star-gray.svg";
    this.star4="../../assets/images/star-gray.svg";
    this.star5="../../assets/images/star-gray.svg";
    this.nota = 1;
    if(this.atual.publico){
    this.notaMusico = this.nota;
  }else{
    this.notaContratante = this.nota;
  }
}
  notaDois(){
    this.star1="../../assets/images/star-orange.svg";
    this.star2="../../assets/images/star-orange.svg";
    this.star3="../../assets/images/star-gray.svg";
    this.star4="../../assets/images/star-gray.svg";
    this.star5="../../assets/images/star-gray.svg";
    this.nota = 2;
    if(this.atual.publico){
    this.notaMusico = this.nota;
  }
  else{
    this.notaContratante = this.nota;
  }
  }
  notaTres(){
    this.star1="../../assets/images/star-orange.svg";
    this.star2="../../assets/images/star-orange.svg";
    this.star3="../../assets/images/star-orange.svg";
    this.star4="../../assets/images/star-gray.svg";
    this.star5="../../assets/images/star-gray.svg";
    this.nota = 3;
    if(this.atual.publico){
      this.notaMusico = this.nota;
    }
    else{
      this.notaContratante = this.nota;
    }
  }
  notaQuatro(){
    this.star1="../../assets/images/star-orange.svg";
    this.star2="../../assets/images/star-orange.svg";
    this.star3="../../assets/images/star-orange.svg";
    this.star4="../../assets/images/star-orange.svg";
    this.star5="../../assets/images/star-gray.svg";
    this.nota = 4;
    if(this.atual.publico){
      this.notaMusico = this.nota;
    }
    else{
      this.notaContratante = this.nota;
    }
  }
  notaCinco(){
    this.star1="../../assets/images/star-orange.svg";
    this.star2="../../assets/images/star-orange.svg";
    this.star3="../../assets/images/star-orange.svg";
    this.star4="../../assets/images/star-orange.svg";
    this.star5="../../assets/images/star-orange.svg";
    this.nota = 5;
    if(this.atual.publico){
      this.notaMusico = this.nota;
    }
    else{
      this.notaContratante = this.nota;
    }
  }

  avaliar(comentario){
    if(this.atual.publico){
      this.avaliacao.contratanteId = this.contratanteId;
      this.avaliacao.musicoId = this.musicoId;
      this.avaliacao.notaMusico = this.notaMusico;
      this.avaliacao.notaContratante = this.contratanteId;
      this.avaliacao.comentarioContratante = comentario;
      localStorage.setItem("avaliacao", JSON.stringify(this.avaliacao));
      this.musicos[0].avaliacao = this.notaMusico;
      localStorage.setItem("musicos", JSON.stringify(this.musicos));
      console.log(this.musicos[0]);
    }else{
      this.avaliacao.contratanteId = this.contratanteId;
      this.avaliacao.musicoId = this.musicoId;
      this.avaliacao.notaMusico = this.notaMusico;
      this.avaliacao.notaContratante = this.contratanteId;
      this.avaliacao.comentarioMusico = comentario;
      localStorage.setItem("avaliacao", JSON.stringify(this.avaliacao));
     
    }
  
  }

}
