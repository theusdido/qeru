import { Component, OnInit } from '@angular/core';
import { faBoxOpen,faSitemap,faUserTie,faHome,faCreditCard,faBullhorn,faClipboardList,faStore } from '@fortawesome/free-solid-svg-icons';
import { ChatService } from '../../chat/chat.service';


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
  public new_message     = 'none';

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

}
