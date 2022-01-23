import { Injectable } from '@angular/core';
import { RequisicaoMiles } from '../miles/src/requisicao';

declare var PagSeguroDirectPayment:any;
declare var $:any;
@Injectable({
  providedIn: 'root'
})

export class PagseguroService {
  private identificador = '';
  public valor_total    = 0;
  constructor(
    public rm:RequisicaoMiles
  ) {
   
  }

  getSessionID(){
    return this.rm.get({
      controller:'pagseguro/index',
      op:'session_id'
    });
  }

  getBandeirasCartaoCredito(){
    this.getSessionID().subscribe( (r:any) => {
      PagSeguroDirectPayment.setSessionId( r.session_id );
      this.identificador = PagSeguroDirectPayment.getSenderHash();
      PagSeguroDirectPayment.getPaymentMethods({
        amount:this.valor_total,
        success:function(response:any){
          //meios de pagamento disponíveis
        },
        error:function(response:any){
          //tratamento do erro
        },
        complete:function(response:any){
          //tratamento comum para todas chamadas
          if (!response.error){
						let c:any;
            for (c in response.paymentMethods.CREDIT_CARD.options){
							var bandeira = response.paymentMethods.CREDIT_CARD.options[c];
							$("#bandeira").append("<option value='"+bandeira.code+"'>"+bandeira.displayName+"</option>");
						}
            // Seta VISA como cartão padrão
            $("#bandeira").val(101);            
          }
        }
      });
    });
  }

  setParcelamento(){
		PagSeguroDirectPayment.getInstallments({
			amount:this.valor_total,
			brand:$("#bandeiracartao").val(),
			success:function(response:any){
				//opções de parcelamento disponível
				$("#msg-erro-parcelamento").hide();
			},
			error:function(response:any){
				//tratamento do erro
                $("#parcelamento").html("");
                $("#parcelamento").attr("readonly",true);
                $("#msg-erro-parcelamento").html(response.error);
                $("#msg-erro-parcelamento").show();				
			},
			complete:function(response:any){
				$("#parcelamento").html("");
        let p,i;
				for (p in response.installments){
					for (i in response.installments[p]){
						var item = response.installments[p][i];
						var valoritem = item.installmentAmount;
						var valortotalitem = item.totalAmount;
						$("#parcelamento").append('<option value="' + item.quantity + '^' + valoritem.toFixed(2) + '">'+(item.quantity<10?"0":"") + item.quantity + ' x ' + valoritem.toLocaleString("pt-BR",{ style: "currency",currency: "BRL" }) + ' = ' + valortotalitem.toLocaleString("pt-BR",{ style: "currency",currency: "BRL" }) + '</option>');
					}
				}
				$("#parcelamento").css("width","100%");
				$("#loading-parcelamento").hide();
				$("#parcelamento").removeAttr("readonly");
				$("#msg-erro-parcelamento").hide();
				//tratamento comum para todas chamadas
			}
		});
  }  
}