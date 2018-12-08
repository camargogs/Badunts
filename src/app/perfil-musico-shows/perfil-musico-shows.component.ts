import { Musico } from './../models/musico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-musico-shows',
  templateUrl: './perfil-musico-shows.component.html',
  styleUrls: ['../perfil-musico/perfil-musico.component.css']
})
export class PerfilMusicoShowsComponent implements OnInit {

  constructor() { }


  add: boolean;
  show: boolean = true;
  nome_show: string;
  genero: string;
  preco: number;
  perfil: string;
  descricao: string;

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("atual"));
    this.nome_show = user.nome_show;
    this.genero = user.genero;
    this.preco = user.hora_preco;
    this.perfil = user.agendaId;
    this.descricao = user.detalhe_show;
    if(this.nome_show==""&&this.descricao==""){
      this.add = true;
    }
  }

  add_show(nome_show,preco,descricao){
    var user = JSON.parse(localStorage.getItem("atual"));
    user.nome_show = nome_show;
    user.hora_preco = preco;
    user.detalhe_show = descricao;
    localStorage.setItem("atual", JSON.stringify(user));
    nome_show = "";
    preco = "";
    descricao = "";
    this.add = true;
    if(this.add){
      this.add = false;
      this.show = true;
    }
  }
  adicionar(){
    if(this.show){
      this.show = false;
      this.add = true;
    }
  }

}