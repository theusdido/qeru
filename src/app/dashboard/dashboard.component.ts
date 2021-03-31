import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public titulo = "";
  public userType = "";
  constructor(
    public activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {

    /*
    this.activeRouter.queryParams.subscribe( params => {
      this.userType = params["userType"];
      this.titulo   = this.userType;


    });
    */

  }
}
