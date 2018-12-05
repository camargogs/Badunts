import { Evento } from './../models/evento.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-eventos-evento',
  templateUrl: './eventos-evento.component.html',
  styleUrls: ['../eventos/eventos.component.css']
})
export class EventosEventoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  eventos: Evento[] = [];
  atual;
  nome_evento: string; 
  endereco: string;
  data: string;
  hora_ini: string;
  hora_fim: string;
  genero: string;
  equipamentos: string;
  descricao: string;
  detalhes: string;
  ngOnInit() {
    this.route.params.forEach((params: Params )=>{
      let id = params['id'];
      if(id!= undefined){
        this.eventos = JSON.parse(localStorage.getItem("eventos"));
        this.atual = JSON.parse(localStorage.getItem("atual"));
        this.endereco = this.atual.endereco;
        console.log(this.eventos);
        for (let index = 0; index < this.eventos.length; index++) {
          if(this.eventos[index].eventoId == id){
              console.log("aqui")
              this.nome_evento = this.eventos[index].nome;
              this.data = this.eventos[index].data;
              this.hora_ini = this.eventos[index].hora_ini;
              this.hora_fim = this.eventos[index].hora_fim;
              this.genero = this.eventos[index].genero;
              this.equipamentos = this.eventos[index].equipamentos;
              this.descricao = this.eventos[index].descricao;
              this.detalhes = this.eventos[index].detalhes;
          }
        }
      }
  });
  }

}
