import { Component, Input } from '@angular/core';

import { isBranching, isNormalStage } from '../../../modules/stage-type-check';

@Component({
    selector: 'stage-capture-accordion',
    template: `
        <div id="stage-capture-accordion">
            <div id="time-attack-area">
                <time-attack-area
                    *ngIf="isNormalStage(stage) && !isBranching(stage)"
                    [timeAttackOfStage]="stage.timeAttack"
                ></time-attack-area>
            </div>
            <div id="boxes-area">
                <boxes-area
                    *ngIf="isNormalStage(stage)"
                    [stage]="stage"
                ></boxes-area>
                <playable-area [stage]="stage"></playable-area>
            </div>
            <div id="clear">
            <div id="description-area">
                <description-area [description]="stage.description"></description-area>
            </div>
            <div id="clear">
        </div>
    `,
    styleUrls: ['stage-capture-accordion.scss']
})
export default class StageCaptureAccordionComponent {
    @Input() stage;
    readonly isBranching = isBranching;
    readonly isNormalStage = isNormalStage;
}
