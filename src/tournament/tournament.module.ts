import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentLeaderboardComponent } from './components/tournament-leaderboard/tournament-leaderboard.component';
import { TournamentPouleComponent } from './components/tournament-poule/tournament-poule.component';
import { TournamentKnockoutComponent } from './components/tournament-knockout/tournament-knockout.component';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        TournamentComponent,
        TournamentLeaderboardComponent,
        TournamentPouleComponent,
        TournamentKnockoutComponent,
    ],
    providers: [],
})
export class TournamentModule { }
