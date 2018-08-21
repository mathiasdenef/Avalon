import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,

        // PrimeNG
        DialogModule,
        TableModule,
        ButtonModule,
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
    ],
    providers: [
    ]
})
export class SharedModule { }
