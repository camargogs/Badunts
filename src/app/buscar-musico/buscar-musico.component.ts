import { Musico } from './../models/musico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-musico',
  templateUrl: './buscar-musico.component.html',
  styleUrls: ['../eventos/eventos.component.css']
})
export class BuscarMusicoComponent implements OnInit {

  constructor() { }
  
  musicos: Musico[] =[];
  ngOnInit() {
    this.musicos = JSON.parse(localStorage.getItem("musicos"));
    for (let index = 0; index < this.musicos.length; index++) {
      this.musicos[index].musicoId = index + 1;
    }
    localStorage.setItem("musicos", JSON.stringify(this.musicos));
  }
}
