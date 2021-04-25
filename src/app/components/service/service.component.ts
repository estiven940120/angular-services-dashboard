import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environment/environment';

const _LOW_STATUS = environment.lowStatus;
const _HIGH_STATUS = environment.highStatus;
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: [ './service.component.scss',
  ]
})
export class ServiceComponent implements OnInit {

  public low_status: number;
  public high_status: number;

  @Input() status: number;

  constructor() {
    this.low_status =  _LOW_STATUS;
    this.high_status = _HIGH_STATUS;
   }

  

  ngOnInit(): void {
  }

}
