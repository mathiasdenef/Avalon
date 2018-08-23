import { Component } from '@angular/core';
import { Knockout } from '../../classes/knockout';
import { KnockoutService } from '../../services/knockout.service';

@Component({
    selector: 'tournament-knockout',
    templateUrl: './tournament-knockout.component.html',
    styleUrls: ['./tournament-knockout.component.scss']
})
export class TournamentKnockoutComponent  {

    knockouts: Knockout[];

    constructor(private knockoutService: KnockoutService) { }

    ngOnInit() {
        this.knockoutService.getAllKnockOutsByTournamentIdAndUserId(1, 1).subscribe(
            knockouts => {
                this.knockouts = knockouts;
                console.log(knockouts);
            }
        );
    }
}
