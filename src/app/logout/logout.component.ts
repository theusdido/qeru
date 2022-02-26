import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ls } from 'src/environments/environment';
import { Sessao } from '../service/sessao.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    public rota:Router,
    public session:Sessao
  ) { }

  ngOnInit(): void {
    ls.clear();
    this.session.logOut();
    this.rota.navigate(['/']);
  }

}
