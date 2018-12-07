import { Musico } from './../models/musico.model';
import { Contrato } from './../models/contrato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-evento2',
  templateUrl: './eventos-evento2.component.html',
  styleUrls: ['../eventos/eventos.component.css']
})
export class EventosEvento2Component implements OnInit {

  constructor() { }
  contratos: Contrato[] = [];
  contrato: Contrato={
    "musicoId":0,"contratanteId":0,"status":""
  };
  musicos: Musico [] = [];
  status: string;
  musicos_con: Musico [] = [];
  btn_add: string="btn__add";
  menssage:boolean;
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("atual"));
    this.contratos = JSON.parse(localStorage.getItem("contratos"));
    this.musicos = JSON.parse(localStorage.getItem("musicos"));
    if(user.musicoId){
      this.btn_add = "btn_none"
      this.menssage = true;
    }
    for (let index = 0; index < this.contratos.length; index++) {
      for (let i = 0; i < this.musicos.length; i++) {
        if(this.contratos[index].musicoId = this.musicos[i].musicoId){
          this.musicos_con.push(this.musicos[i]);
          this.status = this.contratos[index].status;
        }
      }
    }
  }

}
