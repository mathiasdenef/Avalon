import { Component } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';

@Component({
    selector: 'tournament-poule',
    templateUrl: './tournament-poule.component.html',
    styleUrls: ['./tournament-poule.component.scss']
})
export class TournamentPouleComponent  {

    constructor(private tournamentService: TournamentService) { }

    ngOnInit() {
        this.tournamentService.getAllTournaments().subscribe(
            tournaments => {
                console.log(tournaments);
            }
        );
    }
}
