import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-musico',
  templateUrl: './perfil-musico.component.html',
  styleUrls: ['./perfil-musico.component.css']
})
export class PerfilMusicoComponent implements OnInit {
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
  avaliacao: 0;
  carteiraId: string;
  cep: number;
  cidade: string;
  conta: string;
  cpf: string;
  email: string;
  endereco: string;
  genero: string;
  musicoId: 0;
  nome: string;
  rg: string;
  senha: string;
  tipo: string;
  usuario: string;

  rota_img:string="";
  rota: string;

  contratos;

  atual;

  constructor() { }

  
  perfil: string;
  video_port:string;
  audio_port:string;
  texto_port:string;
  fotos_port:string;
  descricao_bio: string;
  edt_act:boolean = true;
  spn_edt:boolean;
  detalhes_letra: string;
  spn_det: boolean;
  edt_det: boolean = true;

  ngOnInit() {
    this.rota = "/eventos"
    this.rota_img = "../../assets/images/propostas-inativo.svg"
    var user = JSON.parse(localStorage.getItem("atual"));
    console.log(user);
    this.descricao_bio = user.descricao;
    
    this.alterarTagTodo();

    console.log(user);
    this.nome = user.nome;
    this.cidade = user.cidade;
    this.genero = user.genero;
    this.avaliacao = user.avaliacao; 
    this.contratos = JSON.parse(localStorage.getItem("contratos"));
    this.perfil = user.agendaId; 
    this.video_port = user.video;
    this.audio_port = user.audio;
    this.fotos_port = user.fotos; 
    console.log(this.contratos);
    if(this.contratos==null){
      this.contratos=[];
    }
    for (let index = 0; index < this.contratos.length; index++) {
      if(this.contratos[index].musicoId== user.musicoId){
        if(this.contratos[index].status =="Pendente"){
          this.rota_img = "../../assets/images/propostas-inativo-pendding.svg"
          this.rota = "/eventocontra"
        }
      }
    }
  }
  onPerfil(event) {
    var user = JSON.parse(localStorage.getItem("atual"));
    var musicos = JSON.parse(localStorage.getItem("musicos"));
    var files = event.srcElement.files;
    user.agendaId = "../../assets/images/"+ files[0].name;
    localStorage.setItem("atual", JSON.stringify(user));
    for (let index = 0; index < musicos.length; index++) {
      if(musicos[index].musicoId == user.musicoId){
        musicos[index] = user;
        localStorage.setItem("musicos", JSON.stringify(musicos));
      }
    }
    this.ngOnInit();
  }

  onVideo(event) {
    var user = JSON.parse(localStorage.getItem("atual"));
    var musicos = JSON.parse(localStorage.getItem("musicos"));
    var files = event.srcElement.files;
    user.video = "../../assets/video/"+ files[0].name;
    localStorage.setItem("atual", JSON.stringify(user));
    for (let index = 0; index < musicos.length; index++) {
      if(musicos[index].musicoId == user.musicoId){
        musicos[index] = user;
        localStorage.setItem("musicos", JSON.stringify(musicos));
      }
    }
    this.ngOnInit();
  }

  onAudio(event) {
    var user = JSON.parse(localStorage.getItem("atual"));
    var musicos = JSON.parse(localStorage.getItem("musicos"));
    var files = event.srcElement.files;
    user.audio = "../../assets/audios/"+ files[0].name;
    localStorage.setItem("atual", JSON.stringify(user));
    for (let index = 0; index < musicos.length; index++) {
      if(musicos[index].musicoId == user.musicoId){
        musicos[index] = user;
        localStorage.setItem("musicos", JSON.stringify(musicos));
      }
    }
    this.ngOnInit();
  }

  onFoto(event) {
    var user = JSON.parse(localStorage.getItem("atual"));
    var musicos = JSON.parse(localStorage.getItem("musicos"));
    var files = event.srcElement.files;
    user.fotos = "../../assets/images/"+ files[0].name;
    localStorage.setItem("atual", JSON.stringify(user));
    for (let index = 0; index < musicos.length; index++) {
      if(musicos[index].musicoId == user.musicoId){
        musicos[index] = user;
        localStorage.setItem("musicos", JSON.stringify(musicos));
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

    editarDet(){
      var user = JSON.parse(localStorage.getItem("atual"));
      var musicos = JSON.parse(localStorage.getItem("musicos"));
      user.letras = this.detalhes_letra;
      localStorage.setItem("atual", JSON.stringify(user));
      for (let index = 0; index < musicos.length; index++) {
        if(musicos[index].musicoId == user.musicoId){
          musicos[index] = user;
          localStorage.setItem("musicos", JSON.stringify(musicos));
        }
      }
      if(this.edt_det){
        this.edt_det = false;
        this.spn_det = true;
      }else{
        this.edt_det = true;
        this.spn_det = false;
      }
    }
    editarBio(){
      var user = JSON.parse(localStorage.getItem("atual"));
      var musicos = JSON.parse(localStorage.getItem("musicos"));
      user.descricao = this.descricao_bio;
      localStorage.setItem("atual", JSON.stringify(user));
      for (let index = 0; index < musicos.length; index++) {
        if(musicos[index].musicoId == user.musicoId){
          musicos[index] = user;
          localStorage.setItem("musicos", JSON.stringify(musicos));
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
