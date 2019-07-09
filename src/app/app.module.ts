import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routes';

import { AppComponent } from './components/app/app.component';

import { CarService } from './demo/service/carservice';
import { CountryService } from './demo/service/countryservice';
import { EventService } from './demo/service/eventservice';
import { NodeService } from './demo/service/nodeservice';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { CoreModule } from '../core/core.module';
import { AppCustomerComponent } from './components/app-customer/app-customer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutes,
        CoreModule,
    ],
    declarations: [
        AppComponent,
        AppDashboardComponent,
        AppCustomerComponent,
    ],
    providers: [
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
        CarService, CountryService, EventService, NodeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
