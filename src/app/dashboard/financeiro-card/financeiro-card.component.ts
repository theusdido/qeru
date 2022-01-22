import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-financeiro-card',
  templateUrl: './financeiro-card.component.html',
  styleUrls: ['./financeiro-card.component.scss']
})
export class FinanceiroCardComponent implements OnInit {
  @Input() caption = '';
  @Input() item = '';
  @Input() color = '';
  constructor() { }

  ngOnInit(): void {
  }

}
