import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInfoService } from 'src/app/service/user-info.service';
import { ls } from '../../../environments/environment';

declare var $:any;

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public username       = ls.get("username");
  public useremaill     = ls.get("useremail");
  public params!:HttpParams;
  public src_brand      = ls.get('brand-user-src');

  @ViewChild('upload') upload:any;

  constructor(
    public us:UserInfoService
  ) {

    if (ls.get('perfil') == 'L'){
      this.params      = new HttpParams()
      .append('param','{"op":"loja-logo"}')
      .append('param','{"loja":'+ls.get('loja')+'}');
    }else{
      this.params      = new HttpParams()
      .append('param','{"op":"foto-perfil"}')
      .append('param','{"cliente":'+ls.get('userid')+'}');
    }
  }

  ngOnInit(): void {
    this.us.setBrandImagem();
  }

  uploadImage(){
    this.upload.showDialog();
  }

  uploaded(dados:any){
    this.setSrcImagem(dados.src);
  }

  setSrcImagem(src:string){    
    this.src_brand = src;
    setTimeout(function(){
      $('#user-img-dashboard').attr('src',src + '?' + new Date().getMilliseconds());
    },500);
  }
}