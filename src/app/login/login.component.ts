import { Contratante } from './../models/contratante.model';
import { Musico } from './../models/musico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email1: string
  senha1: string
  rota: string
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("contratantes"));
    var card = JSON.parse(localStorage.getItem("musicos"));
    console.log(user);
    console.log(card);
  }
  onSumit(email1,senha1){
    var contratantes = JSON.parse(localStorage.getItem("contratantes"));
    var musicos = JSON.parse(localStorage.getItem("musicos"));
    console.log(email1);
    console.log(musicos);
    for (let index = 0; index < musicos.length; index++) {
      if(musicos[index].email==email1&&musicos[index].senha==senha1){
        console.log(musicos[index]);
        localStorage.setItem("atual", JSON.stringify(musicos[index]));
      }
    }
  }
}
