import { Component } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';

@Component({
    selector: 'tournament-leaderboard',
    templateUrl: './tournament-leaderboard.component.html',
    styleUrls: ['./tournament-leaderboard.component.scss']
})
export class TournamentLeaderboardComponent  {

    constructor(private tournamentService: TournamentService) { }

    ngOnInit() {
        this.tournamentService.getLeaderboardByTournamentId(1).subscribe(
            leaderboardUsers => {
                console.log(leaderboardUsers);
            }
        );
    }
}
