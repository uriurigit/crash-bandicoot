import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import GeneralEvaluationComponent from './general-evaluation.component';

@NgModule({
    declarations: [
        GeneralEvaluationComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GeneralEvaluationComponent
    ]
})
export default class GeneralEvaluationModule { }
