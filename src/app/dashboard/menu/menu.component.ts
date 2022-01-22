import { Component, OnInit } from '@angular/core';
import { faBoxOpen,faSitemap, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faBoxOpen     = faBoxOpen;
  faSitemap     = faSitemap;
  faPlusCircle  = faPlusCircle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
