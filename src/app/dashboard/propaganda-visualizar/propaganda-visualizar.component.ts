import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { PropagandaService } from 'src/app/service/propaganda.service';
import { environment } from 'src/environments/environment';

// JQuery
declare var $:any;

@Component({
  selector: 'app-propaganda-visualizar',
  templateUrl: './propaganda-visualizar.component.html',
  styleUrls: ['./propaganda-visualizar.component.scss']
})
export class PropagandaVisualizarComponent implements OnInit {
  public faStar = faStar;
  public propagandas!:Observable<any>;
  @ViewChild('propandaview') view:any;
	public itens:Array<any> = [];
	public responsiveOptions;
  public url_arquivo = environment.miles.arquivos;
  
  constructor(
    public ps:PropagandaService,
    public rota:ActivatedRoute
  ) {
    this.rota.params.subscribe( (p)=> {
      if (p.hash == undefined){
        this.ps.disponiveis().subscribe( (propagandas:any) => {
          this.itens =  propagandas;
          
          console.log(this.itens.length);
          
            setTimeout( () => {
              if (this.itens.length > 3){
                $('.product-image').css('width','50%');
              }
              $('.product-image').show();
            },500);
        });
      }else{
        this.propagandas = this.ps.withHash(p.hash);
        this.propagandas.subscribe( (p)=>{
          this.visualizar(p[0]);
        });
      }
    });

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
    $('.product-image').hide();
  }

  visualizar(propaganda:any){
    this.view.show(propaganda);
  }

}
