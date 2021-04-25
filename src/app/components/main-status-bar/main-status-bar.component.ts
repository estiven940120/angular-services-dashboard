import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-status-bar',
  templateUrl: './main-status-bar.component.html',
  styleUrls: [  './main-status-bar.component.scss'
  ]
})
export class MainStatusBarComponent implements OnInit {

  @Input() lastUpdated: String = "";
  constructor() { }

  ngOnInit(): void {
  }

}
