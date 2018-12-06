import { Contrato } from './../models/contrato.model';
import { Musico } from './../models/musico.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-eventos-contrato',
  templateUrl: './eventos-contrato.component.html',
  styleUrls: ['./eventos-contrato.component.css']
})
export class EventosContratoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  contratos: Contrato[]=[];
  contrato: Contrato={
    "musicoId":0,"contratanteId":0,"status":""
  };
  musicos: Musico[]=[];
  atual;
  rota: string;
  contratos_feitos;
  ngOnInit() {
    let id;
    this.route.params.forEach((params: Params )=>{
      id = params['id'];
      if(id!= undefined){
        this.musicos = JSON.parse(localStorage.getItem("musicos"));
        this.atual = JSON.parse(localStorage.getItem("atual"));
        console.log(this.musicos);
        for (let index = 0; index < this.musicos.length; index++) {
          if(this.musicos[index].musicoId == id){
              this.contrato.musicoId = id;
              this.rota = "/buscamusi";
          }
        }
      }
  });
    if(id==undefined){
      console.log("aqui")
    this.contratos_feitos = JSON.parse(localStorage.getItem("contratos"));
    this.musicos = JSON.parse(localStorage.getItem("musicos"));
    for (let index = 0; index < this.musicos.length; index++) {
      for (let i = 0; i < this.contratos_feitos.length; i++) {
        if(this.musicos[index].musicoId = this.contratos_feitos[i].musicoId){
            this.rota = "/eventos";
            this.contratos_feitos[i].status = "Aceito";
          } 
        }
      }
    }
}

  aceitaContrato(){
    if(this.rota == "/buscamusi"){
      this.contrato.contratanteId = this.atual.contratanteId;
      this.contrato.status ="Pendente";
      this.contratos.push(this.contrato);
      localStorage.setItem("contratos", JSON.stringify(this.contratos));
    }else{
      localStorage.setItem("contratos", JSON.stringify(this.contratos_feitos));
    }
  }
}
