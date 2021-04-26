import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overall-uptime',
  templateUrl: './overall-uptime.component.html',
  styleUrls: [ './overall-uptime.component.scss',
  ]
})
export class OverallUptimeComponent {

  @Input() overallUt1: number;
  @Input() overallUt7: number;
  @Input() overallUt30: number;

}
