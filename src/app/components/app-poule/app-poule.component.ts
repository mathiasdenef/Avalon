import { Component } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';


@Component({
    selector: 'app-poule',
    templateUrl: './app-poule.component.html',
    styleUrls: ['./app-poule.component.scss']
})
export class AppPouleComponent  {

    constructor(private tournamentService: TournamentService) { }

    ngOnInit() {
        this.tournamentService.getAllTournaments().subscribe(
            tournaments => {
                console.log(tournaments);
            }
        );
    }
}
