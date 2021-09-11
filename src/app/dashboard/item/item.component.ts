import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { ls } from 'src/environments/environment';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';

declare var $:any;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit,AfterViewInit {

  public pahtupload:string    = this.rs.upload;
  public fileinput:string     = "";
  public src_sem_foto = "assets/img/semimagem.jpg";
  public indice:number = 0;
  public itens:Array<string> = [];
  constructor(
    public rs:RequisicaoService,
    public pedido:PedidoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {  
    $(".btn-adicionarfoto").click(function(e:any){
      e.stopPropagation();
      e.preventDefault();
    });
  }

  ngAfterViewInit(){    
    this.owl();
    setTimeout( ()=> {
      $("#token").val(ls.get("token"));
    },500);

    $(document).on('click','.dialog-mat-close', () =>{
      this.dialog.closeAll();
    });
  }

  owl(){
    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    });
  }
  carregarFoto(){
    $("#foto").click();
    $("#foto").change( () => {
        let extensao = this.fileinput.split(".").pop();
        let indice = this.getIndiceFoto();

        $("#indice").val(indice);
        $("#uploadform").submit();
        setTimeout(
          () => {
            let src_img = this.rs.file + "temp/" + indice + "." + extensao + "?u=" + indice;
            $(".card-img-top").prop("src", src_img);
            $("#src_temp").val(src_img);
          },500
        );
    });
  }

  addMiniatura(src:string){

    var divItem = $('<div  class="item" data-indice="'+this.indice+'">');
    var excluirItem =  $('<i class="fas fa-trash excluir-imagem-lista-item" ></i>');
    var imgItem = $('<img src="'+src+'" />');
    
    excluirItem.click( (iconExcluir:any) => {
      $(".owl-carousel").trigger('remove.owl.carousel', [this.indice]).trigger('refresh.owl.carousel');
    });

    divItem.append(excluirItem);
    divItem.append(imgItem);

    $('.owl-carousel')
    .trigger('add.owl.carousel', [divItem, 0])
    .trigger('refresh.owl.carousel')    
  }

  adicionarFoto(){
    let src = $("#src_temp").val();
    if (src == ''){
      this.dialog.open(DialogElementsExampleDialog);
    }else{
      this.itens.push(src);
      this.addMiniatura(src);
      this.indice++;
      this.fileinput = "";
      $(".card-img-top").prop("src",this.src_sem_foto);
      $("#src_temp,#foto").val("");
    }
  }

  getIndiceFoto(){
    return new Date().getTime();
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  template: `
    <i class="fas fa-window-close dialog-mat-close"></i>
    <h2 mat-dialog-title>Nenhuma imagem carregada.</h2>
    <div mat-dialog-content>Carregue uma imagem do seu computador para efetuar o upload.</div>
`,
})
export class DialogElementsExampleDialog {}