import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public pathapirest = "http://teia.tec.br/miles/sistema/index.php?currentproject=31";
  constructor() { }
}
