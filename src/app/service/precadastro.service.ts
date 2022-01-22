import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrecadastroService {

  perfil_selected = '';
  constructor() { }

  private choosePerfilSource = new Subject<string>();
  public choosePerfil = this.choosePerfilSource.asObservable();

  setPerfil(perfil:string){
    this.perfil_selected = perfil;
    this.choosePerfilSource.next(perfil);
  }

}