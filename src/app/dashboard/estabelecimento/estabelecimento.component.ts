import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
