import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    WeatherComponent,
  ],

})
export class WeatherModule { }
