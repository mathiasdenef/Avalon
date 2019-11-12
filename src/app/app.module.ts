import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule, PanelModule } from 'primeng/primeng';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutes } from './app.routes';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppKnockoutComponent } from './components/app-knockout/app-knockout.component';
import { AppLeaderboardComponent } from './components/app-leaderboard/app-leaderboard.component';
import { AppPouleComponent } from './components/app-poule/app-poule.component';
import { AppTournamentComponent } from './components/app-tournament/app-tournament.component';
import { AppComponent } from './components/app/app.component';
import { CalculatorModule } from './modules/calculator/calculator.module';



@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutes,
        CoreModule,
        CalculatorModule,
        //PrimeNG Modules
        PanelModule,
        PaginatorModule,
    ],
    declarations: [
        AppComponent,
        AppTournamentComponent,
        AppDashboardComponent,
        AppLeaderboardComponent,
        AppKnockoutComponent,
        AppPouleComponent,
    ],
    providers: [
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
