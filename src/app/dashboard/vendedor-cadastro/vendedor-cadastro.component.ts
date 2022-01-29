import { Component, OnInit, ViewChildren } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { Validar } from 'src/app/validar';
import { ls } from 'src/environments/environment';

declare var $:any;

@Component({
  selector: 'app-vendedor-cadastro',
  templateUrl: './vendedor-cadastro.component.html',
  styleUrls: ['./vendedor-cadastro.component.scss']
})
export class VendedorCadastroComponent implements OnInit {

  public nome:string      = '';
  public cpf:string       = '';
  public email:string     = '';
  public telefone:string  = '';

  @ViewChildren('required')  obrigatorios: any;

  constructor(
    public validar: Validar,
    public rs:RequisicaoService
  ) { }

  ngOnInit(): void {
    $('#cpf').mask('999.999.999-99');
    $('#telefone').mask('(99) 99999-9999');
  }

  validarCampo(event:any){
    let id    = event.target.id;
    let value = event.target.value;
    switch(id){
      case 'cpf':
        if (value == ''){
          $('#' + id).removeClass('td-validation-error td-validation-success');
        }else{
          $('#' + id).addClass(this.validar.getTDClass(this.validar.isValidCPF(value)));
        }
      break;
      case 'email':
        if (value == ''){
          $('#' + id).removeClass('td-validation-error td-validation-success');
        }else{
          $('#' + id).addClass(this.validar.getTDClass(this.validar.isValidEmail(value)));
        }
      break;
      case 'telefone':
        if (value == ''){
          $('#' + id).removeClass('td-validation-error td-validation-success');
        }else{
          $('#' + id).addClass(this.validar.getTDClass(this.validar.isVvalidTelefone(value)));
        }
      break;
    }
  }
  salvar(){
    if (!this.validar.isRequired(this.obrigatorios)) return;
    if ($('input').hasClass('td-validation-error')){
      return;
    }

    this.rs.get("vendedor",{
      op:"salvar",
      nome:this.nome,
      cpf:this.cpf,
      email:this.email,
      telefone:this.telefone,
      loja:ls.get('loja')
    }).subscribe(
      (response:any) => {
        if (response.status == 0){

          this.nome     = '';
          this.cpf      = '';
          this.email    = '';
          this.telefone = '';

          $('input').removeClass('td-validation-error td-validation-success');
          $('#vendedor-msg-retorno').show();
          setTimeout( () => {
            $('#vendedor-msg-retorno').hide('200');
          },3000);
        }
      },
      (error) => 
      {

      }
    );
  }
}
