import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { UtilsDemoComponent } from './demo/view/utilsdemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppTournamentComponent } from './components/app-tournament/app-tournament.component';
import { AppPouleComponent } from './components/app-poule/app-poule.component';
import { AppKnockoutComponent } from './components/app-knockout/app-knockout.component';
import { AppLeaderboardComponent } from './components/app-leaderboard/app-leaderboard.component';

export const routes: Routes = [
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
