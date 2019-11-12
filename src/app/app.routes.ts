import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppTournamentComponent } from './components/app-tournament/app-tournament.component';
import { AppPouleComponent } from './components/app-poule/app-poule.component';
import { AppKnockoutComponent } from './components/app-knockout/app-knockout.component';
import { AppLeaderboardComponent } from './components/app-leaderboard/app-leaderboard.component';
import { CalculatorComponent } from './modules/calculator/components/calculator/calculator.component';

export const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    {
        path: 'tournaments', children: [
            { path: '', component: AppTournamentComponent },
            { path: 'poules', component: AppPouleComponent },
            { path: 'knockouts', component: AppKnockoutComponent },
            { path: 'leaderboard', component: AppLeaderboardComponent },
        ]
    },



    // Demo Routing
    // {path: '', component: DashboardDemoComponent},
    // {path: 'sample', component: SampleDemoComponent},
    // {path: 'forms', component: FormsDemoComponent},
    // {path: 'data', component: DataDemoComponent},
    // {path: 'panels', component: PanelsDemoComponent},
    // {path: 'overlays', component: OverlaysDemoComponent},
    // {path: 'menus', component: MenusDemoComponent},
    // {path: 'messages', component: MessagesDemoComponent},
    // {path: 'misc', component: MiscDemoComponent},
    // {path: 'empty', component: EmptyDemoComponent},
    // {path: 'charts', component: ChartsDemoComponent},
    // {path: 'file', component: FileDemoComponent},
    // {path: 'utils', component: UtilsDemoComponent},
    // {path: 'documentation', component: DocumentationComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
