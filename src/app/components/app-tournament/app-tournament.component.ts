import { Component } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
    selector: 'app-tournament',
    templateUrl: './app-tournament.component.html',
    styleUrls: ['./app-tournament.component.scss']
})
export class AppTournamentComponent  {

    constructor(private tournamentService: TournamentService) { }

    ngOnInit() {
        this.tournamentService.getAllTournaments().subscribe(
            tournaments => {
                console.log(tournaments);
            }
        );
    }
}
