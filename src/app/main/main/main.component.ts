import { Component, OnInit } from '@angular/core';
import { RequisicaoMiles } from 'src/app/miles/src/requisicao';
import { ClienteService } from '../../dashboard/cliente/cliente.service';
import { ls } from '../../..//environments/environment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public rm:RequisicaoMiles,
    public cr:ClienteService     
  ) { 
    this.setSessionToken();
  }

  ngOnInit(): void {
  }

  async setSessionToken(){
    await this.rm.setSessionToken();
  }

}