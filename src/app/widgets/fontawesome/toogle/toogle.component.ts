import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';
import { faToggleOn,faToggleOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fontawesome-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss']
})
export class ToogleComponent implements OnInit {
  faToggle = faToggleOn;
  isLeft = true;
  constructor() { }

  ngOnInit(): void {
  }
}
