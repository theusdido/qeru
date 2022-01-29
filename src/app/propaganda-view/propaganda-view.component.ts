import { Component, OnInit,Inject, Output, EventEmitter, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.startProgressBar();
  }

  startProgressBar(){
    let seconds   = 0;
    let duracao   = 100 / this.duracao();
    let progress  = setInterval(()=>{
      this.percentual = seconds * parseInt(String(duracao));
      if (this.percentual >= 100){
        $('.pontos-ganhhos').show('100');
        clearInterval(progress);
      }
      seconds++;
    },this.intervalo);
  }

  duracao():number{
    return this.tempo_duracao;
  }
}  