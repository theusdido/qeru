import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarteiraDigitalService {

  public dados!:Observable<any>;
  public collection:any = this.db.object('carteiradigital:1');

  constructor(
    public db:AngularFireDatabase
  ) { }

  create(){
    this.dados = this.collection.valueChanges();
    this.db.object('carteiradigital:' + ls.get('loja')).set({valor:0});
  }

  getSaldo(){
    return this.db.list('carteiradigital:' + ls.get('loja'))
    .valueChanges();
  }
}
