import { Component, OnInit } from '@angular/core';
import { faBoxOpen,faSitemap,faUserTie,faHome,faCreditCard,faBullhorn,faClipboardList,faStore } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.scss']
})
export class MenuClienteComponent implements OnInit {
  public faBoxOpen       = faBoxOpen;
  public faSitemap       = faSitemap;
  public faUserTie       = faUserTie;
  public faHome          = faHome;
  public faCreditCard    = faCreditCard;
  public faBullhorn      = faBullhorn;
  public faClipboardList = faClipboardList;
  public faStore         = faStore;
  constructor() { }

  ngOnInit(): void {
  }

}
