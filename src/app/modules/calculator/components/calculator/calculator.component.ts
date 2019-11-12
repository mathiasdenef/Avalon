import { Component } from '@angular/core';

@Component({
    selector: 'calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

    valueString: string = "";
    result: number = 0;
    ngOnInit() {

    }

    constructor() { }

    add(string: string) {
        if (string == '-1') {
            this.valueString = '';
            this.result = 0;
        } else {
            this.valueString += string;
        }
    }

    calculate() {
        this.result = eval(this.valueString);
    }
}
