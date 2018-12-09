import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
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
  rota: string;
  act: boolean = false;
  tipo1: boolean;
  tipo2: boolean;

  textError:boolean = false;
  inputError:boolean = false;

  ngOnInit() {
    
    var user = JSON.parse(localStorage.getItem("contratantes"));
    var card = JSON.parse(localStorage.getItem("musicos"));
    var card = JSON.parse(localStorage.getItem("musicos"));
    console.log(user);
    console.log(card);

  }
  loginError(){
    this.textError = true;
    this.inputError = true;
  }

  onClickMusico(){
    this.tipo1 = true;
    this.tipo2 = false;
    this.rota = "/perfilMusico";
  }
  onClickContratante(){
    this.tipo1 = false;
    this.tipo2 = true;
    this.rota = "/perfilContratante";
  }
  onSumit(email1,senha1){
    var contratantes = JSON.parse(localStorage.getItem("contratantes"));
    var musicos = JSON.parse(localStorage.getItem("musicos"));
    console.log(musicos);
    if(email1==null||senha1==null){
      this.loginError();
    }
    if(musicos==null){
      musicos = []
    }
    if(contratantes==null){
      contratantes=null;
    }
    for (let index = 0; index < musicos.length; index++) {
      if(musicos[index].email==email1&&musicos[index].senha==senha1){
        localStorage.setItem("atual", JSON.stringify(musicos[index]));
      }
    }
    for (let index = 0; index < contratantes.length; index++) {
      if(contratantes[index].email==email1&&contratantes[index].senha==senha1){
        console.log(contratantes[index]);
        localStorage.setItem("atual", JSON.stringify(contratantes[index]));
      }
    }
  }
}
