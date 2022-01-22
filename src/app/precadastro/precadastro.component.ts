import { Component, OnInit } from '@angular/core';
import { PrecadastroService } from '../service/precadastro.service';

@Component({
  selector: 'app-precadastro',
  templateUrl: './precadastro.component.html',
  styleUrls: ['./precadastro.component.scss']
})
export class PrecadastroComponent implements OnInit {

  is_show_form:boolean = false;
  constructor(
    public pc:PrecadastroService
  ){
    pc.choosePerfil.subscribe( p => {
      this.is_show_form = true;
     });
  }

  ngOnInit(): void {
    
  }
}