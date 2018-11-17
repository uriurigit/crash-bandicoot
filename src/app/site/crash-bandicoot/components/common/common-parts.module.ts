import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import HeaderComponent from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        RouterModule
    ],
    exports: [
        HeaderComponent
    ]
})
export default class CommonPartsModule { }
