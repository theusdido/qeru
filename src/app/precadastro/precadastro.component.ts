import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoService } from '../service/requisicao.service';
import { Validar } from '../validar';

declare var $:any;

@Component({
  selector: 'app-precadastro',
  templateUrl: './precadastro.component.html',
  styleUrls: ['./precadastro.component.scss']
})
export class PrecadastroComponent implements OnInit {

  @ViewChildren('required')  obrigatorios: any;

  public precadastro = {
    nome:"",
    email:"",
    celular:""
  };

  public validarCampos = {
    nome:"",
    email:"",
    celular:""
   
  };
  
  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public validar:Validar
  ) {
   }

  ngOnInit(): void {
  }

  validarCampo(campo:string){
    switch(campo){
      case 'email':
        if (this.precadastro.email == ""){
          this.validarCampos.email = "";
        }else{        
          this.validarCampos.email = this.validar.getTDClass(this.validar.isValidEmail(this.precadastro.email));
        }
      break;  
      case 'celular':
        if (this.precadastro.celular == ""){
          this.validarCampos.celular = "";
        }else{        
          this.validarCampos.celular = this.validar.getTDClass(this.validar.isVvalidTelefone(this.precadastro.celular));
        }  
      break;          
    }
  }

  salvar() : any {
    if (!this.validar.isRequired(this.obrigatorios)) return false;
    $("#preloader-active").show();
    this.rs.get("precadastro",{
      op:"salvar",
      precadastro:this.precadastro
    }).subscribe( 
      (response:any) => {
        $("#preloader-active").hide();
      },
      (error) => 
      {
        $("#preloader-active").hide();
      }
    );
  }

}
