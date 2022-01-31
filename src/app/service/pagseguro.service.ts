import { Injectable } from '@angular/core';
import { RequisicaoMiles } from '../miles/src/requisicao';
import { environment, ls } from '../../environments/environment';

declare var PagSeguroDirectPayment:any;
declare var $:any;
@Injectable({
  providedIn: 'root'
})

export class PagseguroService {
  public valor_total    = 0;
  constructor(
    public rm:RequisicaoMiles
  ) {
    let directpaymentJS = $('<script type="text/javascript" src="https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js"></script>');
    //$('head').append(directpaymentJS);
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
      $('#identificador').val(PagSeguroDirectPayment.getSenderHash());
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
  getBrand(numero_cartao:string){    
    if (numero_cartao.length >= 6){
      
      var bin = numero_cartao.replace(' ','').substring(0,6);
      PagSeguroDirectPayment.getBrand({
        cardBin:bin,
        success:function(response:any){},
        error:function(response:any){
          console.log(response.error);
        },
        complete:function(response:any) {
          if (!response.error) {
            if (response.brand.config.hasCvv) {
              $("#codigoseguranca").removeAttr("readonly");
              $("#codigoseguranca").attr("required", "required");
            } else {
              $("#codigoseguranca").attr("readonly", "readonly");
              $("#codigoseguranca").removeAttr("required");
            }
            if (response.brand.config.hasDueDate) {
              $("#validade").removeAttr("readonly");
              $("#validade").attr("required", "required");
            } else {
              $("#validade").attr("readonly", "readonly");
              $("#validade").removeAttr("required");
            }
            if (response.brand.config.hasPassword) {
              $("#senha").removeAttr("readonly");
              $("#senha").attr("required", "required");
              $("#senha").parents(".form-group").show();
            }else{
              $("#senha").attr("readonly", "readonly");
              $("#senha").removeAttr("required");
              $("#senha").parents(".form-group").hide();
            }
            $("#bandeiracartao").val(response.brand.name);
            this.parcelamento();
          }else{
            $("#numerocartao").parent().addClass("has-error");
            $("#numerocartao").css("background-color", "#ffe6e6");
            $("#parcelamento").html("");
            $("#parcelamento").attr("readonly",true);
          }
        }
      });
    }
  }

  parcelamento(){
    let p,i;
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
				for (p in response.installments){
					for (i in response.installments[p]){
						let item            = response.installments[p][i];
						var valoritem       = item.installmentAmount;
						var valortotalitem  = item.totalAmount;
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

  setValidade(validade_cartao:string):boolean{
		if (validade_cartao != '') {
      let validade  = validade_cartao.split("/");
      let mes       =  validade[0].trim();
      let ano       = validade[1].trim();
      if (mes.length != 2 || ano.length != 4){
        $("#validade").parent().addClass("has-error");
        $("#validade").css("background-color", "#ffe6e6");
        $("#msg-erro-validade").html("Validade Incorreta ! Ex: 12/2030");
        $("#msg-erro-validade").show();
        return false;
      }else{
        $("#msg-erro-validade").hide();
        $("#msg-erro-validade").html("");
        $("#validade").parent().removeClass("has-error");
        $("#validade").css("background-color","#333");
      }
      if (!$.payment.validateCardExpiry(mes, ano)) {
        $(this).parent().addClass("has-error");
        $(this).css("background-color", "#ffe6e6");
        $("#msg-erro-validade").html("Validade do Cartão de Crédito é Inválido !");
        $("#msg-erro-validade").show();
        return false;
      }else{
        $(this).parent().removeClass("has-error");
        $(this).css("background-color", "#333");
        $("#msg-erro-validade").hide();
      }
    }else{
      $(this).parent().removeClass("has-error");
      $(this).css("background-color", "#333");
      $("#msg-erro-validade").hide();
    }
    return true;
  }
  
  setCVC(cvc_cartao:string):boolean{
    if ($(this).val() == ''){
      $(this).parent().removeClass("has-error");
      $(this).css("background-color", "#333");
      $("#msg-erro-codigoseguranca").hide();
      return false;
    }else{
      if (!$.payment.validateCardCVC(cvc_cartao)) {
        $(this).parent().addClass("has-error");
        $(this).css("background-color", "#ffe6e6");
        $("#msg-erro-codigoseguranca").html("Código de Segurança do Cartão de Crédito é Inválido !");
        $("#msg-erro-codigoseguranca").show();
        return false;
      }else{
        $(this).parent().removeClass("has-error");
        $(this).css("background-color", "#333");
        $("#msg-erro-codigoseguranca").hide();
        return true;
      }
    }
  }

  tokenCartao(){
		let validade_mes      = $("#validade").val().split("/")[0].replace(new RegExp('[" "]+', 'gm'),'');;
    let validade_ano      = $("#validade").val().split("/")[1].replace(new RegExp('[" "]+', 'gm'),'');;
		let cartaonumero      = $("#numerocartao").val().replace(new RegExp('[" "]+', 'gm'),'');
    let brand             = $("#bandeiracartao").val();
    let codigo_seguranca  = $("#codigoseguranca").val();
    let instancia         = this;

		// Parâmetro opcional para qualquer chamada
		PagSeguroDirectPayment.createCardToken({
      cardNumber: cartaonumero,
      brand:brand,
      cvv:codigo_seguranca,
      expirationMonth:validade_mes,
      expirationYear:validade_ano,
      success:function(response:any){
        //token gerado, esse deve ser usado na chamada da API do Checkout Transparente
        $("#tokencartao").val(response.card.token);
        instancia.finalizarPedidoCartao();
      },
      error:function(response:any){
        //tratamento do erro
        if (response.error){
            let e;
            for(e in response.errors){
              //$("#msg-erro-pedido").html(e + " - " + errospagseguro[e]);
            }
            $("#msg-erro-pedido").show();
        }
      },
      complete:function(response:any){
        //tratamento comum para todas chamadas
      }
    });

    //this.finalizarPedidoCartao();
	}

  finalizarPedidoCartao(){
		$("#div-pagamento-cartaocredito .loading-finalizar").show();
		let cpf 					        = $("#cpf-cartao").val();
		let parcelamento 			    = $("#parcelamento").val();
		let nome          			  = $("#nome").val();
		let telefone 				      = $("#telefone-cartao").val();
		let datanascimento 			  = $("#datanascimento-cartao").val();
    let identificador         = $('#identificador').val();
    let token_cartao          = $("#tokencartao").val();
    let is_titular            = $("input[type=radio]:checked").val();
    let email                 = ls.get('useremail');

		$.ajax({
			type:"POST",
			url:environment.miles.host,
			data:{
        currentproject:31,
				controller:"pagseguro/index",
				op:"pagar_cartaocredito",
				cpf:cpf,
				hash:identificador,
				token:token_cartao,
				qtde:parcelamento.split("^")[0],
				valor:parcelamento.split("^")[1],
				nome:nome,
				soutitular:is_titular,
				telefone:telefone,
				datanascimento:datanascimento,
        email:email,
        usuario:ls.get('userid')
			},
			error:function(){
        /*
				$("#div-pagamento-cartaocredito .pagamento-cartaocredito").hide(200);
				$("#valortotalcompra-pagamento").hide(100);
				$("#valortotalcompra-pagamento").val("0,00");
				$("#retorno-pagamento-cartao").html("<div class=\'alert alert-danger\' role=\'alert\'><b>Erro ao Finalizar Pedido </b> Pedimos desculpas pelo incoveniente, favor entrar em contato conosco ou tentar comprar mais tarde.</div>");
        */
			},
			complete:function(retorno:any){
        /*
				try{
					let retFin = JSON.parse(retorno.responseText);
					let status = parseInt(retFin[0].status);
					if (status == 1 || status == 2 || status == 3){
						$("#valortotalcompra-pagamento").val("0,00");
						$("#etapas-checkout,#valorsubtotal-pagamento,#valorfrete-pagamento,.pagamento-aviso").hide();
						$("#btns-metodo-pagamento").hide();
						$(".btn-etapa").hide();
						$(".td-totais-checkout").hide();
					}else{
						$("#btn-checkout-pagamento").addClass("btn-danger");
            $("#lista-erro-pagseguro li").each( 
              (index:number,element:any) => {
                let codigoerro = parseInt($(element).find(".codigo-erro-pagseguro").html());
                $(element).find(".msg-erro-pagseguro").html(this.pagseguro.getDescricaoErro(codigoerro));
            });
					}
					$("#retorno-pagamento-cartao").html(retFin[0].msg);
				}catch(e){
					$("#valortotalcompra-pagamento").val("0,00");
					$("#retorno-pagamento-cartao").html("<div class=\'alert alert-danger\' role=\'alert\'><b>Erro ao Finalizar Pedido </b> Pedimos desculpas pelo incoveniente, favor entrar em contato conosco ou tentar comprar mais tarde.</div>");
				}finally{
					$("#valortotalcompra-pagamento").hide(100);
					$("#div-pagamento-cartaocredito .pagamento-cartaocredito").hide(200);
				}
        */
			}
		});
  }
  getDescricaoErro(error_code:number){
    let errospagseguro = [];
    errospagseguro[5003]      = " Falha de comunicação com a instituição financeira.";
    errospagseguro[10000]     = " Bandeira do Cartão de Crédito Inválida.";
    errospagseguro[10001]     = " Tamanho do número do cartão de crédito inválido.";
    errospagseguro[10002]     = " Formato da data inválido.";
    errospagseguro[10003]     = " Código de segurança inválido.";
    errospagseguro[10004]     = " CVV é mandatória.";
    errospagseguro[10006]     = " Código de segurança com tamanho inválido.";
    errospagseguro[53004]     = " Quantidade de itens do pedido inválido.";
    errospagseguro[53005]     = " Moeda não informada.";
    errospagseguro[53006]     = " Valor da moeda inválido: {0}";
    errospagseguro[53007]     = " Tamanho da referencia inválida: {0}";
    errospagseguro[53008]     = " Tamanho da notificationURL inválida: {0}";
    errospagseguro[53009]     = " Valor da notificationURL inválida: {0}";
    errospagseguro[53010]     = " E-mail do cliente é obrigado.";
    errospagseguro[53011]     = " E-Mail do cliente com tamanho inválido: {0}";
    errospagseguro[53012]     = " E-Mail do cliente inválido: {0}";
    errospagseguro[53013]     = " Nome do cliente é obrigatório.";
    errospagseguro[53014]     = " Nome do cliente com tamanho inválido: {0}";
    errospagseguro[53015]     = " Nome do cliente com caracter inválido: {0}";
    errospagseguro[53017]     = " CPF inválido: {0}";
    errospagseguro[53018]     = " CEP é obrigatório.";
    errospagseguro[53019]     = " Valor do CEP é inválido: {0}";
    errospagseguro[53020]     = " Número do telefone é obrigatório.";
    errospagseguro[53021]     = " Número do telefone é inválido: {0}";
    errospagseguro[53022]     = " CEP do endereço de é obrigátório.";
    errospagseguro[53023]     = " CEP do endereço de entrega é inválido: {0}";
    errospagseguro[53024]     = " Rua do endereço de entrega é obrigatório.";
    errospagseguro[53025]     = " O tamanho da rua do endereço de entrega é inválido: {0}";
    errospagseguro[53026]     = " Número do endereço de entrega é obrigatório.";
    errospagseguro[53027]     = " Tamanho do número do endereço de entrega é inválido: {0}";
    errospagseguro[53028]     = " Tamanho do complemento do endereço de entrega é inválido: {0}";
    errospagseguro[53029]     = " Bairro no endereço de entrega é obrigatório.";
    errospagseguro[53030]     = " Tamanho do bairro no endereço de entrega é inválido: {0}";
    errospagseguro[53031]     = " Cidade do endereço de entrega é obrigatório.";
    errospagseguro[53032]     = " Tamanho da cidade do endereço de entrega é inválido: {0}";
    errospagseguro[53033]     = " Estado do endereço de entrega é obrigatório.";
    errospagseguro[53034]     = " Tamanho do estado do endereço de entrega é inválido: {0}";
    errospagseguro[53035]     = " Páis do endereço de entrega é obrigatório.";
    errospagseguro[53036]     = " Tamanho do país no endereço de entrega é obrigatório: {0}";
    errospagseguro[53037]     = " Token do cartão de crédito é obrigatório (ERRO INTERNO) .";
    errospagseguro[53038]     = " Quantidade de parcelas é obrigatória.";
    errospagseguro[53039]     = " Quantidade de parcelas é inválido: {0}";
    errospagseguro[53040]     = " O valor da parcela é obrigatório.";
    errospagseguro[53041]     = " O valor da parcela é inválido: {0}";
    errospagseguro[53042]     = " O nome do titular do cartão de crédito é obrigatório.";
    errospagseguro[53043]     = " O tamanho do nome do titular do cartão de crédito é inválido: {0}";
    errospagseguro[53044]     = " O nome do titular do cartão de crédito é inválido: {0}";
    errospagseguro[53045]     = " O CPF do titular do cartão de crédito é obrigatório.";
    errospagseguro[53046]     = " O CPF do titular do cartão de crédito é inválido: {0}";
    errospagseguro[53047]     = " Data de nascimento do titular do cartão de crédit é obrigatório.";
    errospagseguro[53048]     = " Data de nascimento do titular do cartão de crédito é inválido: {0}";
    errospagseguro[53049]     = " Código de área do telefone do titular do cartão de crédito é obrigáório.";
    errospagseguro[53050]     = " Código de área do telefone do titular do cartão de crédito é inválido: {0}";
    errospagseguro[53051]     = " Telefone do titular do cartão de crédito é obrigatório.";
    errospagseguro[53052]     = " Número do telefone do titular do cartão de crédito é obrigatório: {0}";
    errospagseguro[53053]     = " CEP do endereço de cobrança é obrigatório.";
    errospagseguro[53054]     = " CEP do endereço de cobrança é inválido: {0}";
    errospagseguro[53055]     = " CEP do endereço de cobrança é obrigatório.";
    errospagseguro[53056]     = " Tamanho do CEP do endereço de cobrança é inválido: {0}";
    errospagseguro[53057]     = " Número do endereço de cobrança é obrigatório.";
    errospagseguro[53058]     = " Tamanho do número do endereço de cobrança é inválido: {0}";
    errospagseguro[53059]     = " Tamanho do complemento do endereço de cobrança é inválido: {0}";
    errospagseguro[53060]     = " Bairro do endereço de cobrança é obrigatório.";
    errospagseguro[53061]     = " Tamanho do bairro do endereço de cobrança é inválido: {0}";
    errospagseguro[53062]     = " Cidade do endereço de cobrança é inválido.";
    errospagseguro[53063]     = " Tamanho da cidade do endereço de cobrança é inválido: {0}";
    errospagseguro[53064]     = " Estado do endereço de cobrança é obrigatório.";
    errospagseguro[53065]     = " Estado do endereço de cobrança é inválido: {0}";
    errospagseguro[53066]     = " País do endereço de cobrança é obrigatório.";
    errospagseguro[53067]     = " Tamanho do país do endereço de cobrança é inválido: {0}";
    errospagseguro[53068]     = " Tamanho do e-mail do destinatário é inválido: {0}";
    errospagseguro[53069]     = " E-Mail do destinatário é inválido: {0}";
    errospagseguro[53070]     = " ID do produto é obrigatório.";
    errospagseguro[53071]     = " Tamanho do produto é inválido: {0}";
    errospagseguro[53072]     = " Descrição do produto é obrigatório.";
    errospagseguro[53073]     = " Tamanho da descrição do produto é inválido: {0}";
    errospagseguro[53074]     = " Quantidade de produto é obrigatório.";
    errospagseguro[53075]     = " Quantidade de produto fora do permitido: {0}";
    errospagseguro[53076]     = " Valor da quantidade do produto inválido: {0}";
    errospagseguro[53077]     = " Quantidade de item de produto é necessário.";
    errospagseguro[53078]     = " Quantidade de item de produto fora do padrão: {0}.";
    errospagseguro[53079]     = " Quantidade de item de produto fora do intervalo permitido: {0}";
    errospagseguro[53081]     = " Remetente está relacionado ao receptor.";
    errospagseguro[53084]     = " Vendedor inválido: {0}, verifique o status do vendedor e se é uma conta de vendedor.";
    errospagseguro[53085]     = " Método de pagamento indiponível.";
    errospagseguro[53086]     = " Valor total do pedido fora do intervalo permitido: {0}";
    errospagseguro[53087]     = " Dados do cartão de crédito são inválidos.";
    errospagseguro[53091]     = " Hash de envio inválido.";
    errospagseguro[53092]     = " Bandeira do cartão de crédito não foi aceita.";
    errospagseguro[53095]     = " Tipo de padrão de entrega inválido: {0}";
    errospagseguro[53096]     = " Custo de envio fora do padrão: {0}";
    errospagseguro[53097]     = " Custo de envio forado intervaldo permitiado: {0}";
    errospagseguro[53098]     = " Valor total do pedido não pode ser negativo: {0}";
    errospagseguro[53099]     = " Valor adicional fora do padrão: {0}. Deve se ajustar ao padrão: -?\\d+.\\d\{2\}";
    errospagseguro[53101]     = " Valor do modo de pagamento inválido, os valores são padrão e gateway.";
    errospagseguro[53102]     = " Valor do método de pagamento é inválido, os valores são creditCard, boleto e eft.";
    errospagseguro[53104]     = " Custo de envio foi adicionado, o endereço de entrega é obrigatório.";
    errospagseguro[53105]     = " Informação do remetente foi adicionado, o e-mail deve ser fornecido também.";
    errospagseguro[53106]     = " Titular do cartão de crédito está incompleto.";
    errospagseguro[53109]     = " As informações do endereço de entrega foram adicionadas, o e-mail de entrega deve ser fornecido também.";
    errospagseguro[53110]     = " eft o banco é obrigatório.";
    errospagseguro[53111]     = " eft o banco não foi aceito.";
    errospagseguro[53115]     = " Valor inválido na data de nascimento do remetente: {0}";
    errospagseguro[53117]     = " CNPJ do remente é inválido: {0}";
    errospagseguro[53122]     = " Domínimo do e-mail do remente é inválido: {0}. Você precisa usar um e-mail @sandbox.pagseguro.com.br";
    errospagseguro[53140]     = " Quantidade de parcela fora do intervalo permitido: {0}. O valor da parcela tem que ser maior que zero.";
    errospagseguro[53141]     = " Envio para este vendedor está bloqueado.";
    errospagseguro[53142]     = " Token do cartão de crédito está inválido.";

    return errospagseguro[error_code];
  }
}