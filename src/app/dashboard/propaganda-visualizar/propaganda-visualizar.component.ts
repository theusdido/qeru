import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { PropagandaService } from 'src/app/service/propaganda.service';

@Component({
  selector: 'app-propaganda-visualizar',
  templateUrl: './propaganda-visualizar.component.html',
  styleUrls: ['./propaganda-visualizar.component.scss']
})
export class PropagandaVisualizarComponent implements OnInit {
  public faStar = faStar;
  public propagandas!:Observable<any>;
  @ViewChild('propandaview') view:any;

  constructor(
    public ps:PropagandaService,
    public rota:ActivatedRoute
  ) {
    this.rota.params.subscribe( (p)=> {
      if (p.hash == undefined){
        this.propagandas = this.ps.disponiveis();
      }else{
        this.propagandas = this.ps.withHash(p.hash);
        this.propagandas.subscribe( (p)=>{
          this.visualizar(p[0]);
        });
      }
    });
  }

  ngOnInit(): void {}

  visualizar(propaganda:any){
    this.view.show(propaganda);
  }

}
