import { AfterContentInit, Component, OnInit, ViewChildren } from '@angular/core';
import { PagseguroService } from 'src/app/service/pagseguro.service';
import { Validar } from '../../../validar';

declare var $:any;

@Component({
  selector: 'app-adicionar-credito',
  templateUrl: './adicionar-credito.component.html',
  styleUrls: ['./adicionar-credito.component.scss']
})
export class AdicionarCreditoComponent implements OnInit,AfterContentInit {

  public nome             = '';
  public numero_cartao    = '';
  public valor_total      = 50;
  public validade         = '';
  public cvc              = '';
  public cpf              = '';
  public data_nascimento  = '';
  public telefone         = '';

  @ViewChildren('required')  obrigatorios: any;
  
  constructor(
    public pagseguro:PagseguroService,
    public validar:Validar
  ) { }

  ngOnInit(): void {    
    this.setCartoes();
  }

  ngAfterContentInit(): void {
    
		$("#btn-checkout-pagamento").removeClass("btn-default");
		$("#btn-checkout-pagamento").addClass("btn-warning");
  
    $("#cpf-cartao,#div-pagamento-boleto #cpftiular").mask("999.999.999-99");
    $("#telefone-cartao,#div-pagamento-boleto #telefone").mask("(99) 99999-9999");
    $("#datanascimento-cartao").mask("99/99/9999");
    
    $('#numerocartao').payment('formatCardNumber');
    $('#validade').payment('formatCardExpiry');
    $('#codigoseguranca').payment('formatCardCVC');
  }

  setCartoes (){
    this.pagseguro.getBandeirasCartaoCredito();
  }

  loadParcelamento():boolean
  {
    this.pagseguro.valor_total  = this.valor_total;
    let numero_cartao           = this.numero_cartao;
		if (numero_cartao == "") {
      $('#numerocartao').parent().removeClass("has-error");
      $('#numerocartao').css("background-color","#FFFFFF");
      $("#msg-erro-numerocartao").hide();
      $("#parcelamento").attr("readonly",true);
    }else {
      if (!$.payment.validateCardNumber(numero_cartao)) {
          $('#numerocartao').parent().addClass("has-error");
          $('#numerocartao').css("background-color", "#ffe6e6");
          $("#msg-erro-numerocartao").html("Número do Cartão de Crédito é Inválido !");
          $("#msg-erro-numerocartao").show();
          return false;
      } else {
          $('#numerocartao').parent().removeClass("has-error");
          $('#numerocartao').css("background-color", "#FFFFFF");
          $("#msg-erro-numerocartao").hide();
      }
    }
    this.pagseguro.setParcelamento();
    this.pagseguro.getBrand(numero_cartao);
    return true;
  }

  checkValidade(){
    this.pagseguro.setValidade(this.validade);
  }

  checkCodigoSeguranca(){
    this.pagseguro.setCVC(this.cvc);
  }

  checkCPF(){
    if (!this.validar.isValidCPF(this.cpf)){
      $(this).parent().addClass("has-error");
      $(this).css("background-color","#ffe6e6");
      $("#msg-erro-cpf-cartao").html("Número do Cartão de Crédito é Inválido !");
      $("#msg-erro-cpf-cartao").show();
    }else{
      $(this).parent().removeClass("has-error");
      $(this).css("background-color","#333");
      $("#msg-erro-cpf-cartao").hide();
    }
  }

  checkDataNascimento(){
    if (!this.validar.isValidData(this.data_nascimento)){
      $(this).parent().addClass("has-error");
      $(this).css("background-color","#ffe6e6");
      $("#msg-erro-datanascimento-cartao").html("Data de Nascimento é Inválido !");
      $("#msg-erro-datanascimento-cartao").show();
    }else{
      $(this).parent().removeClass("has-error");
      $(this).css("background-color","#333");
      $("#msg-erro-datanascimento-cartao").hide();
    }
  }
  checkTelefone(){
    if (!this.validar.isVvalidTelefone(this.telefone)){
      $(this).parent().addClass("has-error");
      $(this).css("background-color","#ffe6e6");
      $("#msg-erro-telefone-cartao").html("Telefone é Inválido !");
      $("#msg-erro-telefone-cartao").show();
    }else{
      $(this).parent().removeClass("has-error");
      $(this).css("background-color","#333");
      $("#msg-erro-telefone-cartao").hide();
    }
  }

  finalizarCartao(){
    if (this.validar.isRequired(this.obrigatorios)){
      if (!$("#chktermo").is(":checked")){
        $("#msg-erro-politicaprivacidade").html("Você precisa aceitar os termos da <b>Política de Privacidade</b>.");
      }else{
        this.pagseguro.tokenCartao();
        $('#retorno-pagamento-cartao').html('Crédito adicionado com sucesso !!');
        $('#retorno-pagamento-cartao').show();
        $('.pagamento-cartaocredito').hide();
      }
    }
  }
}