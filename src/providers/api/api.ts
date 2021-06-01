import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiProvider {

  public idEvent: any;
  public url:string;
  public apiRes:string;
  private userLoged: any;

  constructor(public http: HttpClient) {
    console.log('--------------API----------------' );
    this.idEvent = 5;
    this.url = 'http://localhost:8080/Admin/api/';
  }
  /* LISTA DE EVENTOS */
  obtenerEventos(){
    return this.http.get(this.url+'even');
  }

  /* BUSCA EL USUARIO */
  logUser(email){
    this.apiRes="";
    if(email==undefined){
      this.apiRes = this.url + 'res/admin';
    }else {
      this.apiRes = this.url+ 'res/' + email;
    }
    return this.http.get(this.apiRes);
  }

  setUser(user){
    this.userLoged = user;
  }
  getUser(){
    return this.userLoged;
  }

  /* POST COMENTARIO */
  postPublicComent(data){
    var urlPost = this.url+'coment/set';
    return this.http.post( urlPost, data,
      {headers: new HttpHeaders({"content-Type":"application/json"})});
  }


  /* GET COMETARIOS  */
  getPublicComent(id){
    return this.http.get(this.url+'coment/public/'+id);
  }

  /* GET DEUDORES  */
  getDeptors(){
    return this.http.get(this.url+'deudores/list');
  }
}
