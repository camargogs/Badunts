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
  email: string
  senha: string
  ngOnInit() {
  }
  onSumit(email1){
    console.log(email1);
  }
}
