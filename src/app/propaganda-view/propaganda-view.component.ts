import { Component, OnInit,Inject, Output, EventEmitter, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { faCheck, faCopy, faClose } from '@fortawesome/free-solid-svg-icons';
import { CarteiraDigitalService } from '../realtime-database/carteira-digital.service';
import { PontuacaoService } from '../service/pontuacao.service';
import { PropagandaService } from '../service/propaganda.service';

declare var $:any;

@Component({
  selector: 'app-propaganda-view',
  templateUrl: './propaganda-view.component.html',
  styleUrls: ['./propaganda-view.component.scss']
})

export class PropagandaViewComponent implements OnInit {
  
  @Output() openDialog = new EventEmitter();  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  show(propaganda:any) {
    this.openDialog.emit();
    this.dialog.open(DialogDataViewPropaganda, {
      data: propaganda,
    });
  } 
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './propaganda-view-dialog.html',
  styleUrls: ['./propaganda-view.component.scss']
})
export class DialogDataViewPropaganda {
  @ViewChild('progressbar') pg:any;
  public percentual     = 0;
  public tempo_duracao  = 50; // Segundos
  public intervalo      = 100; // Milesegundos
  public faCheck        = faCheck;
  public hide           = true;
  public faCopy         = faCopy;
  public faClose        = faClose;
  public pontos         = 3;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public pd:PontuacaoService,
    public prs:PropagandaService,
    public cds:CarteiraDigitalService
  ) {
    this.startProgressBar();
  }

  startProgressBar(){
    let seconds   = 0;
    let duracao   = 100 / this.duracao();
    let progress  = setInterval(()=>{
      this.percentual = seconds * parseInt(String(duracao));
      if (this.percentual >= 100){
        clearInterval(progress);
        this.prs.visto(this.data.id).subscribe( 
          (response:any) => {
          if (response.visto){
            this.pd.inc(response.pontos_transacao);
            this.cds.incSaldo(response.valor_transacao);
            $('.pontos-ganhhos').show('100');
          }
        });
      }
      seconds++;
    },this.intervalo);
  }

  duracao():number{
    return this.tempo_duracao;
  }
}  