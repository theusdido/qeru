import { Component, OnInit } from '@angular/core';
import { RequisicaoMiles } from 'src/app/miles/src/requisicao';
import { Sessao } from 'src/app/service/sessao.service';
import { ClienteService } from '../../dashboard/cliente/cliente.service';

declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(
    public rm:RequisicaoMiles,
    public cr:ClienteService,
    public session:Sessao
    
  ) {
    this.setSessionToken();
  }
  ngOnInit(): void {
    this.session.isLogado();
    $(document).on('click','.list-group-item', () =>{
      window.scrollTo( 0, 0 );
    });
  }

  async setSessionToken(){
    await this.rm.setSessionToken();
  }

  
}