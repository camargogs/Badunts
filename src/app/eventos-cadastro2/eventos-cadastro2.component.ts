import { Evento } from './../models/evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-cadastro2',
  templateUrl: './eventos-cadastro2.component.html',
  styleUrls: ['../eventos/eventos.component.css']
})
export class EventosCadastro2Component implements OnInit {

  constructor() { }
  nome: string;
  endereco: string;
  data: string;
  hora_ini: string;
  hora_fim: string; 
  descricao: string;
  detalhes: string;
  evento: Evento;
  eventos: Evento[]= [];
  ngOnInit() {
    this.evento = JSON.parse(localStorage.getItem("evento"));
    var contratante = JSON.parse(localStorage.getItem("atual"));
    this.nome = this.evento.nome;
    this.data = this.evento.data;
    this.hora_ini = this.evento.hora_ini;
    this.hora_fim = this.evento.hora_fim;
    this.endereco = contratante.endereco;
  }

  eventoCad2(descricao,detalhes){
    this.evento.descricao = descricao;
    this.evento.detalhes = detalhes;
    this.eventos = JSON.parse(localStorage.getItem("eventos"));
    this.eventos.push(this.evento);
    localStorage.setItem("eventos", JSON.stringify(this.eventos));
  }

}
