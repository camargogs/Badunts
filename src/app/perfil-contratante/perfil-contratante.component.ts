import { Component, OnInit } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-perfil-contratante',
  templateUrl: './perfil-contratante.component.html',
  styleUrls: ['./perfil-contratante.component.css']
})
export class PerfilContratanteComponent implements OnInit {

  tagvideo:boolean;
  tagaudio:boolean;
  tagtexto:boolean;
  tagfoto:boolean;
  tagtodo:boolean;
  audio:string;
  video:string;
  foto:string;
  texto:string;
  todo:string;

  constructor() { }

  ngOnInit() {
  }
 
  alterarTagVideo(){
    if((this.tagvideo=true)&& (this.video = 'block')){
      this.tagaudio=false;
      this.tagfoto=false;
      this.tagtexto = false;
      this.tagtodo = false;
      this.foto = 'none';
      this.texto = 'none';
      this.audio = 'none';
      this.todo = 'none';
     

    }
    
    
  }
  alterarTagAudio(){
    if((this.tagaudio=true)&&(this.audio = 'block')){
      this.tagvideo=false;
      this.tagfoto=false;
      this.tagtexto = false;
      this.tagtodo = false;
      this.foto = 'none';
      this.texto = 'none';
      this.video = 'none';
      this.todo = 'none';

    }
    
  
  }
  alterarTagFoto(){
    if((this.tagfoto=true)&&(this.foto = 'block')){
      this.tagaudio=false;
      this.tagvideo=false;
      this.tagtexto = false;
      this.tagtodo = false;
      this.audio = 'none';
      this.texto = 'none';
      this.video = 'none';
      this.todo = 'none';
    }
    
   
  }
  alterarTagTexto(){
    if((this.tagtexto =true)&&(this.texto = 'block')){
      this.tagaudio=false;
      this.tagfoto=false;
      this.tagvideo = false;
      this.tagtodo = false;
      this.audio = 'none';
      this.foto = 'none';
      this.video = 'none';
      this.todo = 'none';

    }
  }
    alterarTagTodo(){
      if((this.tagtodo=true)&&(this.todo = 'block')){
        this.tagaudio=false;
        this.tagfoto=false;
        this.tagvideo = false;
        this.tagtexto = false;
        this.audio = 'none';
        this.foto = 'none';
        this.video = 'none';
        this.texto = 'none';
  
      }
  
}
}

