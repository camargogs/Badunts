import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';
import { debug } from 'util';
import { $ } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email1: string;
  senha1: string;
  rota: string;
  act: boolean = false;
  // tipo1: boolean = false;
  // tipo2: boolean = false;
  textError:boolean = false;
  inputError:boolean = false;

  
  ngOnInit() {
    // localStorage.clear();
    var user = JSON.parse(localStorage.getItem("contratantes"));
    var card = JSON.parse(localStorage.getItem("musicos"));
    console.log(user);
    console.log(card);
  }

  // onClickMusico(){
  //   this.tipo1 = true;
  //   this.tipo2 = false;
  // }
  // onClickContratante(){
  //   this.tipo1 = false;
  //   this.tipo2 = true;
  // }

  loginError(){
    this.textError = true;
    this.inputError = true;
  }

  onSumit(email1,senha1){
    var contratantes = JSON.parse(localStorage.getItem("contratantes"));
    var musicos = JSON.parse(localStorage.getItem("musicos"));
    console.log(musicos);

    if(musicos != null){
      for (let index = 0; index < musicos.length; index++) {
        if(musicos[index].email==email1&&musicos[index].senha==senha1){
          console.log(musicos[index]);
          localStorage.setItem("atual", JSON.stringify(musicos[index]));
          this.rota = "/perfilMusico";
        }
      }
    }
    if(contratantes != null){
      for (let index = 0; index < contratantes.length; index++) {
        if(contratantes[index].email==email1&&contratantes[index].senha==senha1){
          console.log(contratantes[index]);
          localStorage.setItem("atual", JSON.stringify(contratantes[index]));
          this.rota = "/perfilContratante";
        }
      }
    }
    this.loginError();
    console.log("Email ou senha está incorreto");
  }
}
