import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import AccordionModule from '@common/components/accordion/accordion.module';
import InformationAreaModule from '../information-area/information-area.module';

import StageAccordionComponent from './stage-accordion.component';
import StageEvaluationAccordionComponent from './accordion-mode/stage-evaluation-accordion.component';
import StageCaptureAccordionComponent from './accordion-mode/stage-capture-accordion.component';

@NgModule({
    declarations: [
        StageAccordionComponent,
        StageEvaluationAccordionComponent,
        StageCaptureAccordionComponent
    ],
    imports: [
        AccordionModule,
        CommonModule,
        InformationAreaModule
    ],
    exports: [
        StageAccordionComponent
    ]
})
export default class StageAccordionModule { }
