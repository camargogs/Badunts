import { Evento } from './../models/evento.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventos-cadastro',
  templateUrl: './eventos-cadastro.component.html',
  styleUrls: ['../eventos/eventos.component.css']
})
export class EventosCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventoId: string;
  nome: string;
  data: string;
  local: string;
  endereco: string;
  hora_ini: string;
  hora_fim: string;
  equipamentos: string;
  genero: string;
  evento: Evento =  
    { "eventoId": 0, "nome": "","data": "", "local": "", "hora_ini": "", "hora_fim": "", "equipamentos": "", "genero": "", "descricao": "", "detalhes":""};

  eventoCad1(nome,data,hora_ini,hora_fim, equipamentos, genero){
    this.evento.nome = nome;
    this.evento.data = data;
    this.evento.hora_ini = hora_ini;
    this.evento.hora_fim = hora_fim;
    this.evento.equipamentos = equipamentos;
    this.evento.genero = genero;

    console.log(this.evento);
    localStorage.setItem("evento", JSON.stringify(this.evento));
  }

}
