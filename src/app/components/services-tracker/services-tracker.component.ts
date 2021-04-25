import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-tracker',
  templateUrl: './services-tracker.component.html',
  styleUrls: [ './services-tracker.component.scss'
  ]
})
export class ServicesTrackerComponent implements OnInit {

  @Input() title: String = '';
  @Input() percentage: String = '';
  @Input() status: String = '';
  @Input() days_status: Number[];
  

  constructor() { }

  ngOnInit(): void {
  }

}
