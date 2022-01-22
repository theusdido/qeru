import { Component, Input, OnInit } from '@angular/core';
import { faTruck,faUser } from '@fortawesome/free-solid-svg-icons';
import { PrecadastroService } from '../service/precadastro.service';

declare var $:any;

@Component({
  selector: 'app-precadastro-perfil',
  templateUrl: './precadastro-perfil.component.html',
  styleUrls: ['./precadastro-perfil.component.scss']
})
export class PrecadastroPerfilComponent implements OnInit {

  faTruck = faTruck;  
  faUser = faUser;
  lojista_selected = '';
  cliente_selected = '';
  @Input() precadastro:any;
  constructor(
    public pc:PrecadastroService
  ) { 

  }

  ngOnInit(): void {

  }
  setPerfil(perfil:string){
    $('#btn-sou-lojista,#btn-sou-cliente').removeClass('btn_disabled');
    if (perfil == 'L'){
      this.lojista_selected = 'perfil_selected';
      this.cliente_selected = 'perfil_no_selected';
      $('#btn-sou-cliente').addClass('btn_disabled');
    }else{
      this.cliente_selected = 'perfil_selected';
      this.lojista_selected = 'perfil_no_selected';
      $('#btn-sou-lojista').addClass('btn_disabled');
    }
    this.pc.setPerfil(perfil);
  }

}
