import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NegociacaoService } from '../negociacoes/negociacao.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ChatService } from '../chat/chat.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-negociacao-home',
  templateUrl: './negociacao-home.component.html',
  styleUrls: ['./negociacao-home.component.scss']
})
export class NegociacaoHomeComponent implements OnInit {
  public negociacoes!:Observable<any>;
  public faStar = faStar;
  public itens:Array<any> = [];
  public responsiveOptions:any;
  public url_arquivo = environment.miles.arquivos;

  constructor(
    public ns:NegociacaoService,
    public cs:ChatService
  ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];        
  }

  ngOnInit(): void {
    this.ns.abertas().subscribe(
      (negociacoes:any) =>{
        this.itens = negociacoes;
      }
    );
  }

  abrirChat(negociacao:any){
    this.cs.ir(negociacao);
  }

}
