import { Component, OnInit } from '@angular/core';
import { RequisicaoMiles } from 'src/app/miles/src/requisicao';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public rm:RequisicaoMiles
  ) { 
    this.setSessionToken();
  }

  ngOnInit(): void {
    
  }

  async setSessionToken(){
    await this.rm.setSessionToken();
  }

}
