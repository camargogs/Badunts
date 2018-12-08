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

  musico;
  endereco:string;
  nome:string;
  cnpj:string;
  cep:string;
  cidade: string;
  rg:string;
  estabelecimento:string;
  eventos;
  evento_atual;
  evento;
  nome_musi:string;
  rg_musi:string;
  cpf_musi:string;
  cidade_musi:string;
  cep_musi:string;
  endereco_musi:string;

  nome_eve:string;
  data_eve:string;
  hora_fim:string;
  hora_ini:string;


  ngOnInit() {
    this.atual = JSON.parse(localStorage.getItem("atual"));
    console.log(this.atual);
    this.musicos = JSON.parse(localStorage.getItem("musicos"));
    this.eventos = JSON.parse(localStorage.getItem("eventos"));
    this.evento_atual = JSON.parse(localStorage.getItem("evento_atual"));
    if(this.atual.publico){
      localStorage.setItem("contratando", JSON.stringify(this.atual));
    }
    var contratando = JSON.parse(localStorage.getItem("contratando"));
    this.endereco = contratando.endereco;
    this.nome = contratando.nome;
    this.cnpj = contratando.cpf;
    this.cidade = contratando.cidade;
    this.rg = contratando.rg;
    this.estabelecimento = contratando.estabelecimento;
    let id;
    this.route.params.forEach((params: Params )=>{
      id = params['id'];
      if(id!= undefined){
        this.musicos = JSON.parse(localStorage.getItem("musicos"));
        for (let index = 0; index < this.musicos.length; index++) {
          if(this.musicos[index].musicoId == id){
              this.contrato.musicoId = id;
              this.rota = "/buscamusi";
              this.musico = this.musicos[index];
              localStorage.setItem("contratado", JSON.stringify(this.musico));
          }
        }
      }
      var contratado = JSON.parse(localStorage.getItem("contratado"));
      this.nome_musi = contratado.nome;
      this.rg_musi = contratado.rg;
      this.cpf_musi = contratado.cpf;
      this.cidade_musi = contratado.cidade;
      this.cep_musi = contratado.cep;
      this.endereco_musi= contratado.enredeco;

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
    for (let index = 0; index < this.eventos.length; index++) {
      if(this.eventos[index].eventoId = this.evento_atual){
        this.evento = this.eventos[index];
      }
       
    }
    this.nome_eve = this.evento.nome;
    this.data_eve = this.evento.data;
    this.hora_fim = this.evento.hora_fim;
    this.hora_ini = this.evento.hora_ini;
  
}

  aceitaContrato(){
    this.contrato.contratanteId = this.atual.contratanteId;
    console.log(this.contratos_feitos);
    if(this.rota == "/buscamusi"){
      
      this.contrato.status ="Pendente";
      this.contratos.push(this.contrato);
      console.log(this.contrato);
      localStorage.setItem("contratos", JSON.stringify(this.contratos));
    }else{
      localStorage.setItem("contratos", JSON.stringify(this.contratos_feitos));
    }
  }
}
