import { Musico } from './../models/musico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-musico-shows',
  templateUrl: './perfil-musico-shows.component.html',
  styleUrls: ['../perfil-musico/perfil-musico.component.css']
})
export class PerfilMusicoShowsComponent implements OnInit {

  constructor() { }

  nome_show: string;
  genero: string;
  preco: number;
  perfil: string;
  descricao: string;
  novo: Musico;

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("atual"));
    this.perfil = user.agendaId;
    
  }

  add_show(nome_show,preco,descricao){
    var user = JSON.parse(localStorage.getItem("atual"));
    
  }

}