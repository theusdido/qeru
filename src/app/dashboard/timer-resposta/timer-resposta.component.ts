import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-timer-resposta',
  templateUrl: './timer-resposta.component.html',
  styleUrls: ['./timer-resposta.component.scss']
})
export class TimerRespostaComponent implements OnInit {
  public display:string = "";
  public hora:number = 0;
  public minuto:number = 0;
  public segundo:number = 0;
  public intervalo:any;

  @Output() tempo = new EventEmitter(); //Cria um emissor de evento.

  constructor() { }

  ngOnInit(): void {
    this.zerarTimer();
  }

  timer(){
    this.intervalo = setInterval(() => {
      if (this.segundo < 59) {
        this.segundo++;
      }else {
        this.segundo = 0;
        this.minuto++;
        if (this.minuto > 59) {
          this.minuto  = 0;
          this.hora++;
        }
      }
      console.log("qqr coisa")
      this.setDisplay(); 
    }, 1000); 
  }

  iniciarTimer(){
    this.zerarTimer();
    this.timer();
    
  }

  zerarTimer(){
    this.tempo.emit();  //Emite o evento no escopo global do projeto. Permite que outros componentes o acessem esse método.
    this.segundo = 0;
    this.minuto = 0;
    this.hora = 0;
    this.setDisplay();
  }

  reiniciarTimer(){
    this.zerarTimer();
    this.iniciarTimer();
  }

  pararTimer(){
    console.log("lalala")
    clearInterval(this.intervalo);
  }

  setDisplay(){
    let hora = (this.hora < 10 ? "0" : "") + this.hora;
    let minuto = (this.minuto < 10 ? "0" : "") + this.minuto;
    let segundo = (this.segundo < 10 ? "0" : "") + this.segundo;

    this.display = hora + ":" + minuto + ":" + segundo;
  }
}
