	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	$('.btn-editar').click(function(){
		// disableForm(false);
		window.location.assign('#top');
	});

	$('.btn-incluir').click(function(){		
		disableForm("#" + $( this ).parents("form").attr("id"),false);
	});
	$('.btn-cancelar').click(function(){
		listar();
		// document.forms[0].reset();
	})
/*
    $('.btn-submit').click(function(){		
		$.ajax({		
			url:"classes/menu/verifica_json.php",
			type:"POST",			
			dataType: "json",
			data:{
				live: '1'
			},
			success:function(retorno){	
				if(!retorno.success){
					alert('Olá, Sua sessão foi encerrada.');
					window.location.assign(window.location.pathname);
				}
			}
		});	
    });
*/