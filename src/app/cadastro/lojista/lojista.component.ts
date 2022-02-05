import { AfterViewInit, Component, Input, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ls,ambiente,funcoes } from 'src/environments/environment';
import { RequisicaoService } from '../../service/requisicao.service';
import { Validar } from '../../validar';
import { UF } from '../../classe/uf';
import { Lojista } from '../../classe/lojista';
import { LojistaService } from '../../dashboard/lojista/lojista.service';
import { EnderecoService } from 'src/app/service/endereco.service';

declare var $:any;

@Component({
  selector: 'app-lojista',
  templateUrl: './lojista.component.html',
  styleUrls: ['./lojista.component.scss']
})
export class LojistaComponent implements OnInit {
  ngOnInit(): void {
      
  }
}