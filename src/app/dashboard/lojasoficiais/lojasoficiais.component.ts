import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { LojasoficiaisService } from 'src/app/service/lojasoficiais.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-lojasoficiais',
  templateUrl: './lojasoficiais.component.html',
  styleUrls: ['./lojasoficiais.component.scss']
})
export class LojasoficiaisComponent implements OnInit {
  public faStar = faStar;
  public lojas!:Observable<any>;
	public itens:Array<any> = [];
	public responsiveOptions;
  public url_arquivo = environment.miles.arquivos;

  constructor(
    public ls:LojasoficiaisService
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
    this.ls.all().subscribe( (loja:any) => {
      this.itens = loja;
    });
  }

}
