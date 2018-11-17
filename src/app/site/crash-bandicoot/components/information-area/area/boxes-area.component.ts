import { Component, Input, OnInit } from '@angular/core';
import { get } from 'lodash';

import { isCrash1Stage, isCrash2Stage, isCrash3Stage } from '../../../modules/stage-type-check';

@Component({
    selector: 'boxes-area',
    template: `
        <span id="boxes-area">
            <table>
            <tr>
                <td>はこ：</td>
                <td>{{stageBoxes}}{{bonusBoxes}}</td>
            </tr>
            </table>
        </span>
    `
})
export default class BoxesAreaComponent implements OnInit {
    @Input() stage;

    stageBoxes: string;
    bonusBoxes: string;

    ngOnInit() {
        this.stageBoxes = this.getStageBoxes();
        this.bonusBoxes = this.getBonusBoxes();
    }

    private getStageBoxes(): string {
        const numberOfBoxes: number = this.stage.numberOfBoxes;

        return (0 >= numberOfBoxes) ? '-' : String(numberOfBoxes);
    }

    private getBonusBoxes(): string {
        let numberOfBoxes = 0;

        if (isCrash1Stage(this.stage)) {
            numberOfBoxes =
                get(this.stage, 'tawnaStage.numberOfBoxes', 0) +
                get(this.stage, 'brioStage.numberOfBoxes', 0) +
                get(this.stage, 'cortexStage.numberOfBoxes', 0);
        } else if (isCrash2Stage(this.stage) || isCrash3Stage(this.stage)) {
            numberOfBoxes = get(this.stage, 'bonusStage.numberOfBoxes', 0);
        }

        return (0 >= numberOfBoxes) ? '' : `(${numberOfBoxes})`;
    }
}
