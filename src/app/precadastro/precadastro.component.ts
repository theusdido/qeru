import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ls } from 'src/environments/environment';
import { PrecadastroService } from '../service/precadastro.service';

@Component({
  selector: 'app-precadastro',
  templateUrl: './precadastro.component.html',
  styleUrls: ['./precadastro.component.scss']
})
export class PrecadastroComponent implements OnInit {
  constructor(
    public pc:PrecadastroService,
    public rota:Router
  ){
  }

  ngOnInit(): void {
    console.log(ls.get('is_logado'));
    if (ls.get('is_logado')){
      this.rota.navigate(["/dashboard"]);
    }
  }
}