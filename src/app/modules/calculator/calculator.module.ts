import { NgModule } from "@angular/core";
import { SharedModule } from "src/shared/shared.module";
import { CalculatorComponent } from "./components/calculator/calculator.component";


@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        CalculatorComponent,
    ],
    providers: [
    ]
})
export class CalculatorModule { }
