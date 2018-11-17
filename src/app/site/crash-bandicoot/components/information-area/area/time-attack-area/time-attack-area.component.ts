import { Component, Input } from '@angular/core';
import { isEmpty } from 'lodash';

import { TimeAttackOfStageEntity } from '../../../../entity/stage.entity';

@Component({
    selector: 'time-attack-area',
    template: `
        <span id="time-attack-area" *ngIf="timeAttackOfStage">
            <span class="reric-icon sapphire"></span>{{getTime(timeAttackOfStage.targetTime.sapphire)}}
            <span class="reric-icon gold"></span>{{getTime(timeAttackOfStage.targetTime.gold)}}
            <span class="reric-icon platinum"></span>{{getTime(timeAttackOfStage.targetTime.platinum)}}
            <!-- <span class="reric-icon crimson"></span>{{getTime(timeAttackOfStage.developerRecords)}} -->
        </span>
    `,
    styleUrls: ['time-attack-area.scss']
})
export default class TimeAttackAreaComponent {
    @Input() timeAttackOfStage: TimeAttackOfStageEntity;

    getTime(time: string): string {
        return isEmpty(time) ? '--:--:--' : time;
    }
}
