import { Component,  OnInit, AfterViewInit, EventEmitter, Output , Input, ViewChild, ViewChildren } from '@angular/core';
import { RequisicaoMiles } from '../../miles/src/requisicao';
import { faAirFreshener, faCheck, faCar, faCouch, faDesktop, faFutbol, faGamepad, faGift, faLifeRing, faMicrophone, faMobile, faMobileAlt, faScrewdriver, faTshirt, faTv } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SubcategoriaComponent } from '../subcategoria/subcategoria.component';
import { PedidoService } from 'src/app/service/pedido.service';
import { Sessao } from '../../service/sessao.service';
import { RequisicaoService } from '../../service/requisicao.service';
import { ActivatedRoute } from '@angular/router';
import { ambiente,categorias,ls,environment } from 'src/environments/environment';
import { ProdutoComponent } from '../../dashboard/produto/produto.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit,AfterViewInit {
  public sel = 0;
  public faCheck = faCheck;
  public categorias:Array<any> = [];  
  public icons:any = [];
  public current:number = 0;
  public perfil:string = "";  

  @Input() loja             = 0;
  @Input() contexto:string = "";
  @Input() multiple:boolean = true;
  @Output() getCategorias = new EventEmitter<any>();
  @Output() getCategoria = new EventEmitter<number>();

  constructor(
    public rm:RequisicaoMiles,
    public pedido:PedidoService,
    public sessao:Sessao,
    public rs:RequisicaoService,
    public route:ActivatedRoute
  ) {
      this.icons["faCar"]           = faCar;
      this.icons["faAirFreshener"]  = faAirFreshener;
      this.icons["faTshirt"]        = faTshirt;
      this.icons["faMobileAlt"]     = faMobileAlt;
      this.icons["faMicrophone"]    = faMicrophone;
      this.icons["faScrewdriver"]   = faScrewdriver;
      this.icons["faDesktop"]       = faDesktop;
      this.icons["faLifeRing"]      = faLifeRing;
      this.icons["faGift"]          = faGift;
      this.icons["faCouch"]         = faCouch;
      this.icons["faTv"]            = faTv;
      this.icons["faFutbol"]        = faFutbol;
      this.icons["faGamepad"]       = faGamepad;
   }
   ngAfterViewInit(){
    
  }
  ngOnInit(): void {    
    this.rs.get("categoria",{
      op:'load',
      loja:this.loja > 0 ? ls.get("loja") : null
    }).subscribe( 
      (response:any) => {
        this.categorias.splice(0,this.categorias.length);
       
        for(let r of response){

          let id        = r.id;
          let descricao = r.descricao;
          let icon      = this.icons[r.icon] as IconProp;

          this.categorias.push({id:id,texto: descricao , icon:icon, sel:false});
        }

        if (!environment.global.production && this.contexto == "cadastro"){
          this.setar(categorias);
        }
      
        if (this.categorias[0] != undefined && this.contexto == "dashboard-lojista"){
          this.selecionar(this.categorias[0]);
        }
      }
    );    
  }

  selecionar(indice:any){
    if (!this.multiple){
      for(let c of this.categorias){
        c.sel = false;
      }
    }
    indice.sel = indice.sel?false:true;
    this.getCategorias.emit(this.categorias);
    this.getCategoria.emit(indice.id);
  }

  setar(categorias:Array<number>){
    for(let c of categorias){
      for (let i of this.categorias){
        if (c == i.id){
          this.selecionar(i);
        }
      }
    }
  }
}