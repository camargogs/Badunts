import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro3-musico',
  templateUrl: './cadastro3-musico.component.html',
  styleUrls: ['../cadastro/cadastro.component.css']
})
export class Cadastro3MusicoComponent implements OnInit {

  constructor() { }
  generos:string;
  tipo1:boolean;
  tipo2:boolean;
  tipo3:boolean;
  
  



  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("musico"));
    console.log(user);
    this.generos = user.genero[0];   
 
  }

  onClickBanda(){
    this.tipo1 = true;
    this.tipo2 = false;
    this.tipo3 = false;
  }
  onClickSolo(){
    this.tipo1 = false;
    this.tipo2 = true;
    this.tipo3 = false;
  }
  OnClickDj(){
    this.tipo1 = false;
    this.tipo2 = false;
    this.tipo3 = true;
  }
  cardPart3(generos){
    var user = JSON.parse(localStorage.getItem("musico"));
    if(this.tipo1){
      console.log(user);
      console.log(generos);
      user.genero.push(generos);
      user.tipo = "Banda";
      localStorage.setItem("musico", JSON.stringify(user));
    }
    if(this.tipo2){
      user.genero.push(generos);
      user.tipo = "Solo";
      localStorage.setItem("musico", JSON.stringify(user));
    }
    if(this.tipo3){
      user.genero.push(generos);
      user.tipo = "Dj";
      localStorage.setItem("musico", JSON.stringify(user));
    }
  }
}
