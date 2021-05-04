import { Injectable } from '@angular/core';
import { perfil,ls } from 'src/environments/environment';

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

  constructor() { }

  static isLogado() : boolean {
    let isLogado = ls.get("isLogado");
    if (isLogado == "true" || isLogado) return true
    else return false;
  }
}
