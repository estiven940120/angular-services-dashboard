import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../components/service/services.service';
import { environment } from '../../environment/environment';

const _MIN_INTERVAL = environment.refreshIntervalMin;
console.log(_MIN_INTERVAL);

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: [ './principal.component.scss',
  ]
})
export class PrincipalComponent  implements OnInit {
  public lastUpdated: String;
  public service1: any;
  public service2: any;
  public services: Array<any> = [];
  public percentage1: number;
  public percentage2: number;
  public day_status1: Number[];
  public day_status2: Number[];
  public overallUt1: Number;
  public overallUt7: Number;
  public overallUt30: Number;

  constructor (
    private serviciosService: ServicesService
  ) { }
    getAllServices(){

    
    this.serviciosService.getServices().subscribe( res => {

      //Transform date into time UTC-0500 (For Colombia)
      let curDate = (new Date(res.last_updated))
                            .toLocaleString("en-US", {timeZone: 'america/bogota'});
      let curDate2 = curDate.split(' '); 
      this.lastUpdated = `${curDate2[1]} ${curDate2[2]}`
      //console.log(this.lastUpdated);

      //services data
      this.service1 = res.status.apis[0].tracking;
      this.service2 = res.status.apis[1].authenticacion;

      //Percentages
      let porcentaje1 = this.service1.days;
      porcentaje1 = porcentaje1.reduce( (acc, value) => acc + value);
      this.percentage1 = Math.round(porcentaje1/ this.service1.days.length);
    
      let porcentaje2 = this.service2.days;
      porcentaje2 = porcentaje2.reduce( (acc, value) => acc + value);
      this.percentage2 = Math.round(porcentaje2/ this.service2.days.length);

      //Status Arrays
      this.day_status1 = [...this.service1.days];
      this.day_status2 = [...this.service2.days];

      //Overall uptimes
      let reversedServices1: any = [...this.day_status1].reverse();
      let reversedServices2: any = [...this.day_status2].reverse();

      this.overallUt1 = (reversedServices1[0] + reversedServices2[0])/2;

      let accumulator7Days = 0;
      let accumulator30Days = 0;

      for (let i = 0; i < 30; i++){
        if(i <7){
          accumulator7Days += (reversedServices2[i] + reversedServices1[i]);
        }
        accumulator30Days += (reversedServices2[i] + reversedServices1[i]);
      }

      this.overallUt7 = Math.round(accumulator7Days/14);
      this.overallUt30 = Math.round(accumulator30Days/60);

    })
    }

    ngOnInit(): void {
      this.getAllServices();
      setInterval( () => this.getAllServices(), _MIN_INTERVAL*60*1000);
    }

}
