import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() feturedSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.feturedSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
