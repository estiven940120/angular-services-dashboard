import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-uptime',
  templateUrl: './overall-uptime.component.html',
  styleUrls: [ './overall-uptime.component.css',
  ]
})
export class OverallUptimeComponent implements OnInit {

  @Input() overallUt1: number;
  @Input() overallUt7: number;
  @Input() overallUt30: number;

  constructor() { }

  ngOnInit(): void {
  }

}
