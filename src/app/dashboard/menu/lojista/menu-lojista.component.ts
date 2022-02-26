import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBoxOpen,faSitemap,faUserTie,faHome,faCreditCard,faBullhorn,faClipboardList,faStore } from '@fortawesome/free-solid-svg-icons';
import { ChatService  } from '../../chat/chat.service';

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
  public new_message     = 'none';

  @Output() clicked_menu = new EventEmitter();
  constructor(
    public cs:ChatService
  ) { }

  ngOnInit(): void {
    this.cs.qtdadeMsgNaoLida().subscribe( (qtdade:any) => {
      if (qtdade[0] > 0){
        this.new_message = '';
      }else{
        this.new_message = 'none';
      }
    });
  }
  
  ir(){
    this.clicked_menu.emit();
  }
}