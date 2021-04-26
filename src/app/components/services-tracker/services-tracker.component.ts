import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-tracker',
  templateUrl: './services-tracker.component.html',
  styleUrls: [ './services-tracker.component.scss'
  ]
})
export class ServicesTrackerComponent {

  @Input() title: String = '';
  @Input() percentage: String = '';
  @Input() status: String = '';
  @Input() days_status: Number[];

}
