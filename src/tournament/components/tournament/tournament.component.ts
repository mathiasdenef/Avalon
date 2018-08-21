import { Component } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';

@Component({
    selector: 'tournament',
    templateUrl: './tournament.component.html',
    styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent  {

    constructor(private tournamentService: TournamentService) { }

    ngOnInit() {
        this.tournamentService.getAllTournaments().subscribe(
            tournaments => {
                console.log(tournaments);
            }
        );
    }
}
