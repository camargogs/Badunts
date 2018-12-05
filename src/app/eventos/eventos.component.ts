import { Evento } from './../models/evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }
  rota: string;
  eventos: Evento[] = [];
  nome: string;
  endereco: string;
  ngOnInit() {
    var atual = JSON.parse(localStorage.getItem("atual"));
    this.nome = atual.nome;
    this.endereco = atual.endereco;
    this.eventos = JSON.parse(localStorage.getItem("eventos"));
    for (let index = 0; index < this.eventos.length; index++) {
      this.eventos[index].eventoId = index + 1;
    }
    localStorage.setItem("eventos", JSON.stringify(this.eventos));
     if(atual.musicoId == ""){
      this.rota = "/perfilMusico";
     } 
     if(atual.contratanteId == ""){
      this.rota = "/perfilContratante";
     }
  }
}
