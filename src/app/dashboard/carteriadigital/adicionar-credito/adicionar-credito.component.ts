import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PagseguroService } from 'src/app/service/pagseguro.service';

declare var $:any;

@Component({
  selector: 'app-adicionar-credito',
  templateUrl: './adicionar-credito.component.html',
  styleUrls: ['./adicionar-credito.component.scss']
})
export class AdicionarCreditoComponent implements OnInit,AfterContentInit {

  public numero_cartao  = '';
  public valor_total    = 0;
  constructor(
    public pagseguro:PagseguroService
  ) { }

  ngOnInit(): void {
    this.pagseguro.valor_total = 100;
    this.setCartoes();
  }

  ngAfterContentInit(): void {
    
		$("#btn-checkout-pagamento").removeClass("btn-default");
		$("#btn-checkout-pagamento").addClass("btn-warning");
  
    $("#div-pagamento-cartaocredito #cpftiular,#div-pagamento-boleto #cpftiular").mask("999.999.999-99");
    $("#div-pagamento-cartaocredito #telefone,#div-pagamento-boleto #telefone").mask("(99) 99999-9999");
    $("#div-pagamento-cartaocredito #datanascimento").mask("99/99/9999");
    
    $('#numerocartao').payment('formatCardNumber');
    $('#datavencimento').payment('formatCardExpiry');
    $('#codigoseguranca').payment('formatCardCVC');
    
  }

  setCartoes (){
    this.pagseguro.getBandeirasCartaoCredito();
  }

  loadParcelamento():boolean
  {
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
    return true;
  }
}