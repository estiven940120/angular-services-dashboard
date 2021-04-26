import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-status-bar',
  templateUrl: './main-status-bar.component.html',
  styleUrls: [  './main-status-bar.component.scss'
  ]
})
export class MainStatusBarComponent {

  @Input() lastUpdated: String = "";
  @Input() operationalUp: String = "";

}
