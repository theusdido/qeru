import { Component, OnInit } from '@angular/core';
import { faTrash,faCheck,faPlus } from '@fortawesome/free-solid-svg-icons';
declare var $:any;

@Component({
  selector: 'app-dashboard-atributo',
  templateUrl: './dashboard-atributo.component.html',
  styleUrls: ['./dashboard-atributo.component.scss']
})
export class DashboardAtributoComponent implements OnInit {
  faTrash = faTrash;
  faCheck = faCheck;
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    $(".card-body").show('200');
  }
}
