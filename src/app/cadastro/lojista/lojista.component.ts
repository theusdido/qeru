import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lojista } from 'src/environments/environment';
import { RequisicaoService } from '../../service/requisicao.service';
import { Validar } from '../../validar';

@Component({
  selector: 'app-lojista',
  templateUrl: './lojista.component.html',
  styleUrls: ['./lojista.component.scss']
})
export class LojistaComponent implements OnInit {
  public lojista = lojista;
  public validarCampos = {
    cpf:"",
    celular:"",
    datanascimento:"",
    cnpj:"",
    telefone:"",
    cep:"",
    email:"",
    senha:""
  };
  public categorias:any;

  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public validar:Validar
  ) { }

  ngOnInit(): void {
    
  }

  salvar(){
    console.log(this.categorias);
    //this.rota.navigate(["/dashboard/lojista"]);
    /*
    this.rs.lojista({
      op:"salvar",
      lojista:this.lojista
    }).subscribe( (response:any) => {
      if (response.status == 0){
        this.rota.navigate(["/dashboard"] , {queryParams:{isUser:false}});
      }
    });
    */
  }
  validarCampo(campo:string){
    switch(campo){
      case 'cpf':
        if (this.lojista.cpf == ""){
          this.validarCampos.cpf = "";
        }else{
          this.validarCampos.cpf = this.validar.getTDClass(this.validar.isValidCPF(this.lojista.cpf));
        }
      break;
      case 'celular':
        if (this.lojista.celular == ""){
          this.validarCampos.celular = "";
        }else{        
          this.validarCampos.celular = this.validar.getTDClass(this.validar.isVvalidTelefone(this.lojista.celular));
        }  
      break;
      case 'datanascimento':
        if (this.lojista.datanascimento == ""){
          this.validarCampos.datanascimento = "";
        }else{        
          this.validarCampos.datanascimento = this.validar.getTDClass(this.validar.isValidData(this.lojista.datanascimento));
        }
      break;
      case 'cnpj':
        if (this.lojista.cnpj == ""){
          this.validarCampos.cnpj = "";
        }else{        
          this.validarCampos.cnpj = this.validar.getTDClass(this.validar.isValidCNPJ(this.lojista.cnpj));
        }
      break;
      case 'telefone':
        if (this.lojista.fixo == ""){
          this.validarCampos.telefone = "";
        }else{        
          this.validarCampos.telefone = this.validar.getTDClass(this.validar.isVvalidTelefone(this.lojista.fixo));
        }
      break;
      case 'cep':
        if (this.lojista.cep == ""){
          this.validarCampos.cep = "";
        }else{        
          this.validarCampos.cep = this.validar.getTDClass(this.validar.isValidCEP(this.lojista.cep));
        }
      break;      
      case 'email':
        if (this.lojista.email == ""){
          this.validarCampos.email = "";
        }else{        
          this.validarCampos.email = this.validar.getTDClass(this.validar.isValidEmail(this.lojista.email));
        }
      break;      
      case 'senha':
        if (this.lojista.senha == ""){
          this.validarCampos.senha = "";
        }else{        
          this.validarCampos.senha = this.validar.getTDClass(this.validar.isValidSenha(this.lojista.senha));
        }
      break;            
    }
  }

  setCategorias(categorias:any){
    console.log(categorias);
  }
}

