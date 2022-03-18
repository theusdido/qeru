import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { faUserTie,faStore,faImage,faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {
  public faStore    = faStore;
  public faUserTie  = faUserTie;
  public faImage    = faImage;
  public faTruck= faTruck;

  @ViewChild('loja') aba_loja:any;
  @ViewChild('lojista') aba_lojista:any;
  @ViewChild('matTabGroup') mat_tab_group:any;
  

  constructor() { }

  ngOnInit(): void {
  }

  salvar()
  {
    this.aba_lojista.salvar();
    this.aba_loja.salvar();
    if (!this.aba_lojista.salvar()){
      this.mat_tab_group.selectedIndex = 1;
    }
  }
}
