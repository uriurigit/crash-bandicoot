import { Component, Input, OnInit } from '@angular/core';
import { isUndefined } from 'lodash';

import {
    crash1DiamondData,
    crash2DiamondData,
    crash3DiamondData
} from '../../../../data/diamond/diamond-data';
import { powerUpData } from '../../../../data/power-up/power-up-data';
import {
    isBossStage,
    isCrash1Stage,
    isCrash2Stage,
    isCrash3Stage
} from '../../../../modules/stage-type-check';
import { powerStone } from '../../../../info/contents-info';

@Component({
    selector: 'status-area',
    template: `
        <span id="status-area">
            <span *ngIf="powerStone">
                <img src='${powerStone.src}' width='30' height='40'>：{{powerStone}}
            </span>
            <span *ngIf="diamondClassList">
                ダイヤ：
                <span *ngIf="0 < diamondClassList.length; else notDiamond">
                    <div
                        *ngFor="let diamondClass of diamondClassList"
                        class={{diamondClass}}
                    >
                    </div>
                </span>
                <ng-template #notDiamond>
                -
                </ng-template>
            </span>
            <span *ngIf="key">カギ：{{key}}</span>
            <span *ngIf="relic">レリック：{{relic}}</span>
            <span *ngIf="physicalFitness">パワー：{{physicalFitness}}</span>
            <span *ngIf="powerUp">(↑)：{{powerUp}}</span>
        </span>
    `,
    styleUrls: ['status-area.scss']
})
export default class StatusAreaComponent implements OnInit {
    @Input() stage;

    diamondClassList: Array<string>;
    key: string;
    powerStone: string;
    relic: string;
    physicalFitness: string;
    powerUp: string;

    ngOnInit() {
        if (isCrash1Stage(this.stage)) {
            if (isBossStage(this.stage)) {
                this.bossStageInit();
            } else {
                this.crash1StageInit();
            }
        }
        if (isCrash2Stage(this.stage)) {
            if (isBossStage(this.stage)) {
                this.bossStageInit();
            } else {
                this.crash2StageInit();
            }
        }
        if (isCrash3Stage(this.stage)) {
            if (isBossStage(this.stage)) {
                this.crash3BossStageInit();
            } else {
                this.crash3StageInit();
            }
        }
    }

    private crash1StageInit() {
        this.diamondClassList = this.getDiamondClassList(this.stage, crash1DiamondData);
        this.key = this.getKey(this.stage);
        this.relic = this.getRelic(this.stage);
    }

    private crash2StageInit() {
        this.diamondClassList = this.getDiamondClassList(this.stage, crash2DiamondData);
        this.powerStone = this.getPowerStone(this.stage);
        this.relic = this.getRelic(this.stage);
    }

    private crash3StageInit() {
        this.diamondClassList = this.getDiamondClassList(this.stage, crash3DiamondData);
        this.powerStone = this.getPowerStone(this.stage);
        this.relic = this.getRelic(this.stage);
    }

    private bossStageInit() {
        this.physicalFitness = this.getPhysicalFitness(this.stage);
    }

    private crash3BossStageInit() {
        this.physicalFitness = this.getPhysicalFitness(this.stage);
        this.powerUp = this.getPowerUp(this.stage);
    }

    private getPowerStone(stage) { return stage.compensation.presenceOfPowerStone ? String(1) : String(0); }
    private getDiamondClassList(stage, diamondData): Array<string> {
        return 0 < (stage.compensation.typeOfDiamondList || []).length
            ? stage.compensation.typeOfDiamondList
                .map((diamond) => `diamond-icon ${(diamondData[diamond] || {}).class}`)
            : [];
    }
    private getKey(stage) { return stage.compensation.presenceOfKey ? String(1) : String(0); }
    private getRelic(stage) { return stage.compensation.presenceOfRelic ? String(1) : String(0); }
    private getPhysicalFitness(stage) {
        return String(stage.physicalFitness) +
            (isUndefined(stage.physicalFitness2) ? '' : ` → ${stage.physicalFitness2}`);
    }
    private getPowerUp(stage) {
        return powerUpData[stage.powerUp].name;
    }
}
