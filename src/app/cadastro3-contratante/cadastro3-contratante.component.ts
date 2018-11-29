import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro3-contratante',
  templateUrl: './cadastro3-contratante.component.html',
  styleUrls: ['../cadastro/cadastro.component.css']
})
export class Cadastro3ContratanteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  estabelecimento: String;
  publico: number;
  contraPart3(estabelecimento,publico){
    var user = JSON.parse(localStorage.getItem("contratante"));
    user.estabelecimento = estabelecimento;
    user.publico = publico;
    localStorage.setItem("contratante", JSON.stringify(user));
  }

}
