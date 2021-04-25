import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainStatusBarComponent } from './components/main-status-bar/main-status-bar.component';
import { ServicesTrackerComponent } from './components/services-tracker/services-tracker.component';
import { ServiceComponent } from './components/service/service.component';
import { OverallUptimeComponent } from './components/overall-uptime/overall-uptime.component';
import { PrincipalComponent } from './pages/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainStatusBarComponent,
    ServicesTrackerComponent,
    ServiceComponent,
    OverallUptimeComponent,
    PrincipalComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
