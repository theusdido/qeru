import { Component, OnInit, ViewChild } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { PropagandaViewComponent } from 'src/app/propaganda-view/propaganda-view.component';
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
    public ps:PropagandaService
  ) {
    this.propagandas = this.ps.disponiveis();
  }
  ngOnInit(): void {}

  visualizar(propaganda:any){
    this.view.show(propaganda);
  }

}
