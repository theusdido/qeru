import { EventEmitter, Injectable, Output } from '@angular/core';
import { perfil,ls } from 'src/environments/environment';
import { Observable } from 'rxjs';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class Sessao {  

  // Perfil atual que está logado L = Lojista e C = Cliente
  public currentPerfil:string = perfil;

  // ID da Sessão atual do PHP
  public sessionid:string = "gq4nejt5en5s3jeoq8u0c1nqoo";

  // Usuário Logado
  public userid:number = 0;

  // Token de Acesso
  public static token:string = '';

  // Lojista Logado
  public static lojista:number;

  // Loja 
  public static loja: number;

  // Observador de quando está logado
  public isLogged:Observable<any>;

  constructor() {

    // Registra o atributo is_logged na lista com o Observador
    this.isLogged = new Observable(observer => {      
      observer.next(this.isLogado());
      console.log('Chamou o isLogado da Sessão pelo Observable');
    });

  }

  @Output() is_logado = new EventEmitter();

  isLogado() : boolean {
    let is_logado = ls.get("is_logado");
    if (!is_logado || is_logado == null || is_logado == undefined){
      this.logOut();
    }else{
      this.logIn();
    }
    this.is_logado.emit(is_logado);
    return is_logado;
  }

  logIn(){
    setTimeout( ()=> {
      $('.opcoes-logon .is-logado').show();
      $('.opcoes-logon .isnot-logado').hide();
    },100);
  }

  logOut(){
    setTimeout( ()=> {
      $('.opcoes-logon .is-logado').hide();
      $('.opcoes-logon .isnot-logado').show();
    },100); 
  }
}
