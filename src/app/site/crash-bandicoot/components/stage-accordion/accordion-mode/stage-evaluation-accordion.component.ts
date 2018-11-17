import { Component, Input } from '@angular/core';

import { isNormalStage } from '../../../modules/stage-type-check';

@Component({
    selector: 'stage-evaluation-accordion',
    template: `
        <div class="font-sizeB">
            <difficulty-area
                title="むずかしさ"
                [difficulty]=stage.evaluation.difficulty
            ></difficulty-area>
            <difficulty-area
                *ngIf="isNormalStage(stage)"
                title="タイムアタック"
                [difficulty]=stage.evaluation.difficultyOfTimeAttack
            ></difficulty-area>
            <evaluation-area
                [description]="stage.evaluation.description"
            >
            </evaluation-area>
        </div>
    `
})
export default class StageEvaluationAccordionComponent {
    @Input() stage;
    isNormalStage = isNormalStage;
}
