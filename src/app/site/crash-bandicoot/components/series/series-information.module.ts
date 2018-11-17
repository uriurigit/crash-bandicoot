import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import StageAccordionModule from '../stage-accordion/stage-accordion.module';

import {
    Crash1SeriesInformationComponent,
    Crash2SeriesInformationComponent,
    Crash3SeriesInformationComponent
} from './series-information.component';
import StageAccordionComponent from '../../components/stage-accordion/stage-accordion.component';

@NgModule({
    declarations: [
        Crash1SeriesInformationComponent,
        Crash2SeriesInformationComponent,
        Crash3SeriesInformationComponent
    ],
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        StageAccordionModule
    ],
    exports: [
        Crash1SeriesInformationComponent,
        Crash2SeriesInformationComponent,
        Crash3SeriesInformationComponent
    ]
})
export default class SeriesInformationModule { }
