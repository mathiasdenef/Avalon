import { Component } from '@angular/core';
import { Knockout } from '../../models/knockout';
import { KnockoutService } from 'src/app/services/knockout.service';

@Component({
    selector: 'app-knockout',
    templateUrl: './app-knockout.component.html',
    styleUrls: ['./app-knockout.component.scss']
})
export class AppKnockoutComponent  {

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
