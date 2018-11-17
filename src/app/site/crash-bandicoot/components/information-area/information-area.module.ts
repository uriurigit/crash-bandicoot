import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import ContentModule from '@common/components/content/content.module';
import ImagePanelModule from '@common/components/image-panel/image-panel.module';
import StarRateModule from '@common/components/star-rate/star-rate.module';
import BoxesAreaComponent from './area/boxes-area.component';
import DescriptionAreaComponent from './area/description-area/description-area.component';
import DifficultyAreaComponent from './area/difficulty-area.component';
import EvaluationAreaComponent from './area/evaluation-area/evaluation-area.component';
import MaterialAreaComponent from './area/material-area/material-area.component';
import StatusAreaComponent from './area/status-area/status-area.component';
import PlayableAreaComponent from './area/playable-area.component';
import TimeAttackAreaComponent from './area/time-attack-area/time-attack-area.component';

@NgModule({
    declarations: [
        BoxesAreaComponent,
        DescriptionAreaComponent,
        DifficultyAreaComponent,
        EvaluationAreaComponent,
        MaterialAreaComponent,
        StatusAreaComponent,
        PlayableAreaComponent,
        TimeAttackAreaComponent
    ],
    imports: [
        CommonModule,
        ContentModule,
        ImagePanelModule,
        StarRateModule
    ],
    exports: [
        BoxesAreaComponent,
        DescriptionAreaComponent,
        DifficultyAreaComponent,
        EvaluationAreaComponent,
        MaterialAreaComponent,
        StatusAreaComponent,
        PlayableAreaComponent,
        TimeAttackAreaComponent
    ]
})
export default class InformationAreaModule { }
