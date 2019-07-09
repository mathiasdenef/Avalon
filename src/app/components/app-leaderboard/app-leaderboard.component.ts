import { Component } from '@angular/core';
import { DropdownOption } from 'src/app/models/dropdown-option';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './app-leaderboard.component.html',
    styleUrls: ['./app-leaderboard.component.scss']
})
export class AppLeaderboardComponent {

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
