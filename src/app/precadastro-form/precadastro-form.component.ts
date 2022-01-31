import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { PrecadastroService } from '../service/precadastro.service';
import { RequisicaoService } from '../service/requisicao.service';
import { Validar } from '../validar';
import { ls } from 'src/environments/environment';

declare var $:any;

@Component({
  selector: 'app-precadastro-form',
  templateUrl: './precadastro-form.component.html',
  styleUrls: ['./precadastro-form.component.scss']
})
export class PrecadastroFormComponent implements OnInit {

  @ViewChildren('required')  obrigatorios: any;

  public precadastro = {
    nome:"",
    email:"",
    senha:"",
    perfil:""
  };

  public validarCampos = {
    nome:"",
    email:"",
    senha:""
  };

  public perfil = '';

  constructor(
    public rs:RequisicaoService,
    public rota:Router,
    public validar:Validar,
    public pc:PrecadastroService
  ) { 
  }

  ngOnInit(): void {
    $('#aceite-checkbox').click( function(this:any) {
      $(this).css('border','none');
    });
  }

  validarCampo(campo:string){
    switch(campo){
      case 'nome':
        if (this.precadastro.nome == ""){
          this.validarCampos.nome = "";
        }else{        
          this.validarCampos.nome = this.validar.getTDClass(this.validar.isNoEmpty(this.precadastro.nome));
        }
      break;      
      case 'email':
        if (this.precadastro.email == ""){
          this.validarCampos.email = "";
        }else{        
          this.validarCampos.email = this.validar.getTDClass(this.validar.isValidEmail(this.precadastro.email));
        }
      break;
      case 'senha':
        if (this.precadastro.senha == ""){
          this.validarCampos.senha = "";
        }else{
          this.validarCampos.senha = this.validar.getTDClass(this.validar.isValidSenha(this.precadastro.senha));
        }
        this.isSenhaForte();
      break;
    }
  }

  salvar() : any {
    this.precadastro.perfil = $('.check-perfil:checked').val();
    if (this.precadastro.perfil == undefined){
      $('.check-perfil').parents('.form-check').css('border-bottom','2px solid #FF0000');
      return;
    }

    if (!this.validar.isRequired(this.obrigatorios)) return false;

    if ($('input').hasClass('td-validation-error')){
      return false;
    }
    if (!$('#concordoTermos').is(':checked')){
      $('#aceite-checkbox').css('border-bottom','2px solid #FF0000');
      return false;
    }else{
      $('#aceite-checkbox').css('border','none');
    }

    $("#preloader-active").show();
    this.rs.get("cadastro",{
      op:"salvar",
      dados:this.precadastro
    }).subscribe( 
      (response:any) => {
        if (response.status == 0){
          ls.set("perfil",this.precadastro.perfil);
          ls.set("useremail",this.precadastro.email);
          ls.set("lojista",response.loja);
          ls.set("loja",response.loja);
          ls.set("is_logado",true);
          ls.set("cliente",response.cliente);
          ls.set("userid",response.userid);
          ls.set("username",response.username);
          ls.set("usergroup",response.usergroup);
          this.rota.navigate(["/dashboard"]);
        }
        $("#preloader-active").hide();
      },
      (error) => 
      {
        $("#preloader-active").hide();
      }
    );
  }

  isSenhaForte(){
    let senha = this.precadastro.senha;
    if (senha ==''){
      this.validarCampos.senha = '';
      $('#lista-senha-forte').hide('100');
      return;
    }
    if (!this.validar.isSenhaForte(senha)){
      this.validarCampos.senha = 'td-validation-error';
      $('#lista-senha-forte').show('100');
    }else{
      this.validarCampos.senha = 'td-validation-success';
      $('#lista-senha-forte').hide('100');
    }
  }
}