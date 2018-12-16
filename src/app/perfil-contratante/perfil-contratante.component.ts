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

  agendaId: string;
  avaliacao: number;
  carteiraId: string;
  cep: number;
  cidade: string;
  conta: string;
  cpf: string;
  email: string;
  endereco: string;
  genero: string;
  musicoId: string;
  nome: string;
  rg: string;
  senha: string;
  tipo: string;
  usuario: string;
  estabelecimento: string;

  perfil: string;
  descricao_bio: string;
  edt_act:boolean = true;
  spn_edt:boolean = false;
  video_port: string;
  audio_port:string;
  fotos_port:string;

  constructor() { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("atual"));
    this.nome = user.nome;
    this.cidade = user.cidade;
    this.genero = user.genero;
    this.avaliacao = user.avaliacao;
    this.estabelecimento = user.estabelecimento;
    this.perfil = user.carteiraID;
    this.descricao_bio = user.descricao;
    this.video_port = user.video;
    this.audio_port = user.audio;
    this.fotos_port = user.fotos;
    console.log(user);
    this.alterarTagTodo();
  }
  
  onPerfil(event) {
    var user = JSON.parse(localStorage.getItem("atual"));
    var contratantes = JSON.parse(localStorage.getItem("contratantes"));
    var files = event.srcElement.files;
    user.carteiraID = "../../assets/images/"+ files[0].name;
    localStorage.setItem("atual", JSON.stringify(user));
    for (let index = 0; index < contratantes.length; index++) {
      if(contratantes[index].contratanteId == user.contratanteId){
        contratantes[index] = user;
        localStorage.setItem("contratantes", JSON.stringify(contratantes));
      }
    }
    this.ngOnInit();
  }
  

  onVideo(event) {
    var user = JSON.parse(localStorage.getItem("atual"));
    var contratantes = JSON.parse(localStorage.getItem("contratantes"));
    var files = event.srcElement.files;
    user.video = "../../assets/video/"+ files[0].name;
    localStorage.setItem("atual", JSON.stringify(user));
    for (let index = 0; index < contratantes.length; index++) {
      if(contratantes[index].contratantesId == user.contratantesId){
        contratantes[index] = user;
        localStorage.setItem("contratantes", JSON.stringify(contratantes));
      }
    }
    this.ngOnInit();
  }

  onAudio(event) {
    var user = JSON.parse(localStorage.getItem("atual"));
    var contratantes = JSON.parse(localStorage.getItem("contratantes"));
    var files = event.srcElement.files;
    user.audio = "../../assets/audios/"+ files[0].name;
    localStorage.setItem("atual", JSON.stringify(user));
    for (let index = 0; index < contratantes.length; index++) {
      if(contratantes[index].contratanteId == user.contratanteId){
        contratantes[index] = user;
        localStorage.setItem("contratantes", JSON.stringify(contratantes));
      }
    }
    this.ngOnInit();
  }

  onFoto(event) {
    var user = JSON.parse(localStorage.getItem("atual"));
    var contratantes = JSON.parse(localStorage.getItem("contratantes"));
    var files = event.srcElement.files;
    user.fotos = "../../assets/images/"+ files[0].name;
    localStorage.setItem("atual", JSON.stringify(user));
    for (let index = 0; index < contratantes.length; index++) {
      if(contratantes[index].contratanteId == user.contratantes){
        contratantes[index] = user;
        localStorage.setItem("contratantes", JSON.stringify(contratantes));
      }
    }
    this.ngOnInit();
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

editarBio(){
  var user = JSON.parse(localStorage.getItem("atual"));
  var contratantes = JSON.parse(localStorage.getItem("contratantes"));
  user.descricao = this.descricao_bio;
  localStorage.setItem("atual", JSON.stringify(user));
  for (let index = 0; index < contratantes.length; index++) {
    if(contratantes[index].musicoId == user.musicoId){
      contratantes[index] = user;
      localStorage.setItem("contratantes", JSON.stringify(contratantes));
    }
  }
  if(this.edt_act){
    this.edt_act = false;
    this.spn_edt = true;
  }else{
    this.edt_act = true;
    this.spn_edt = false;
  }
}
}

