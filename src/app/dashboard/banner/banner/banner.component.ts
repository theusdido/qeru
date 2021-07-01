import { Component, OnInit } from '@angular/core';
import { RequisicaoMiles } from 'src/app/miles/src/requisicao';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public path               = this.rs.file + "imagem-95-";
  public sliders:Array<any> = [];
  constructor(
    public rs:RequisicaoService
  ) { 
    this.rs.get("slider").subscribe(
      (response:any) => {        
        this.sliders = response;
      }
    );
  }

  ngOnInit(): void {
  }

}
