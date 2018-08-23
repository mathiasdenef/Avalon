import { Component } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';
import { DropdownOption } from '../../../app/classes/dropdown-option';

@Component({
    selector: 'tournament-leaderboard',
    templateUrl: './tournament-leaderboard.component.html',
    styleUrls: ['./tournament-leaderboard.component.scss']
})
export class TournamentLeaderboardComponent {

    departments: DropdownOption[];

    constructor(private tournamentService: TournamentService) { }

    ngOnInit() {
        // this.tournamentService.getLeaderboardByTournamentId(1).subscribe(
        //     leaderboardUsers => {
        //         console.log(leaderboardUsers);
        //     }
        // );

        this.departments = [
            { label: 'Select Department', value: null },
            { label: 'GTPA', value: 1 },
            { label: 'Not GTPA', value: 2 },
            { label: 'Random Department Nobody Heard Of', value: 3 },
        ]

    }
}
