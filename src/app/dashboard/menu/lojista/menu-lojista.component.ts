import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBoxOpen,faSitemap,faUserTie,faHome,faCreditCard,faBullhorn,faClipboardList,faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-lojista',
  templateUrl: './menu-lojista.component.html',
  styleUrls: ['./menu-lojista.component.scss']
})
export class MenuLojistaComponent implements OnInit {
  public faBoxOpen       = faBoxOpen;
  public faSitemap       = faSitemap;
  public faUserTie       = faUserTie;
  public faHome          = faHome;
  public faCreditCard    = faCreditCard;
  public faBullhorn      = faBullhorn;
  public faClipboardList = faClipboardList;
  public faStore         = faStore;

  @Output() clicked_menu = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  ir(){
    this.clicked_menu.emit();
  }
}
