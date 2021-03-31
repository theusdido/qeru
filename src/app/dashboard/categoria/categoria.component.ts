import { Component,  OnInit, EventEmitter, Output } from '@angular/core';
import { faAirFreshener, faCheck, faCar, faCouch, faDesktop, faFutbol, faGamepad, faGift, faLifeRing, faMicrophone, faMobile, faMobileAlt, faScrewdriver, faTshirt, faTv } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  public sel = 0;
  public faCheck = faCheck;
  public categorias:Array<any> = [
    {id:1,texto:"Veículo ( Carro, Moto e Outros )" , icon:faCar,sel:false},
    {id:2,texto:"Beleza e Cuidado Pessoal" , icon:faAirFreshener,sel:false},
    {id:3,texto:"Calçados, Roupas e Bolsas" , icon:faTshirt,sel:false},
    {id:4,texto:"Celulare e Telefone" , icon:faMobileAlt,sel:false},
    {id:5,texto:"Eletrônico, Áudio e Vídeo" , icon:faMicrophone,sel:false},
    {id:6,texto:"Ferramenta e Construção" , icon:faScrewdriver,sel:false},
    {id:7,texto:"Informática" , icon:faDesktop,sel:false},
    {id:8,texto:"Assessórios para Veículo" , icon:faLifeRing,sel:false},
    {id:9,texto:"Brinquedos e Hobbies" , icon:faGift,sel:false},
    {id:10,texto:"Casa, Móveis e Decoração" , icon:faCouch,sel:false},
    {id:11,texto:"Eletrodomésticos" , icon:faTv,sel:false},
    {id:12,texto:"Esportes e Fitness" , icon:faFutbol,sel:false},
    {id:13,texto:"Games" , icon:faGamepad,sel:false},
    {id:14,texto:"Todas as Categorias" , icon:null,sel:false}
  ];

  @Output() getCategorias = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  selecionar(indice:any){
      this.getCategorias.emit(1);
      indice.sel = indice.sel?false:true;
  }
  selecionarCategorias(){
    
  }
}