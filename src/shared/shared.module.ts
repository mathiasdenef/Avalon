import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,

        // PrimeNG
        DialogModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        CheckboxModule,
    ],
    declarations: [

    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,

        // PrimeNG
        DialogModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        CheckboxModule,
    ],
    providers: [
    ]
})
export class SharedModule { }
