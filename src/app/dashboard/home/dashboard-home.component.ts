import { Component, OnInit } from '@angular/core';
import { ls } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  public perfil         = ls.get("perfil");
  constructor() { }

  ngOnInit(): void {
    switch(this.perfil){
      case 'C':
        this.perfil = "C";
      break;
      case 'L':
        this.perfil = "L";
      break;
      default:
        //this.rota.navigate(["/logon"]);
    }    
  }

}
