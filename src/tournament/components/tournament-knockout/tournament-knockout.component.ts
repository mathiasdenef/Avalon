import { Component } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';

@Component({
    selector: 'tournament-knockout',
    templateUrl: './tournament-knockout.component.html',
    styleUrls: ['./tournament-knockout.component.scss']
})
export class TournamentKnockoutComponent  {

    constructor(private tournamentService: TournamentService) { }

    ngOnInit() {
        this.tournamentService.getAllTournaments().subscribe(
            tournaments => {
                console.log(tournaments);
            }
        );
    }
}
