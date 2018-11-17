import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import CommonPartsModule from '../common/common-parts.module';
import GeneralEvaluationModule from '../general-evaluation/general-evaluation.module';
import InformationAreaModule from '../information-area/information-area.module';
import SeriesInformationModule from '../series/series-information.module';
import StageAccordionModule from '../stage-accordion/stage-accordion.module';

import TabControllerComponent from './tab-controller.component';
import MaterialListComponent from './child/material-list.component';
import { CaptureListComponent, EvaluationListComponent } from './child/stage-list.component';
import TopComponent from '../top/top.component';

@NgModule({
    declarations: [
        CaptureListComponent,
        EvaluationListComponent,
        MaterialListComponent,
        TabControllerComponent,
        TopComponent
    ],
    imports: [
        CommonModule,
        CommonPartsModule,
        GeneralEvaluationModule,
        InformationAreaModule,
        NgbModule.forRoot(),
        RouterModule,
        SeriesInformationModule,
        StageAccordionModule
    ],
    exports: [
        TabControllerComponent
    ]
})
export default class TabControllerModule { }
