import { Component, Input, OnInit } from '@angular/core';

import {
    Crash1WorldConstants,
    Crash2WorldConstants,
    Crash3WorldConstants,
    crash1WorldConstantsList,
    crash2WorldConstantsList,
    crash3WorldConstantsList
} from '../../constants/stage/world.constants';
import {
    crash1StageData,
    crash2StageData,
    crash3StageData
} from '../../data/stage/stage-list';
import {
    crash1WorldData,
    crash2WorldData,
    crash3WorldData
} from '../../data/stage/world/world-data';

interface StageAccordion {
    worldName: string;
    stageList: Array<any>;
}

const template = `
    <div id="series-information">
        <div id="outer-frame">
            <stage-accordion
                *ngFor="let stageAccordion of stageAccordionList"
                [worldName]="stageAccordion.worldName"
                [stageList]="stageAccordion.stageList"
                [accordionMode]="accordionMode"
            >
            </stage-accordion>
        </div>
    </div>
`;
abstract class BaseSeriesInformationComponent {
    @Input() accordionMode;

    stageAccordionList: Array<StageAccordion> = [];

    constructor(public worldConstantsList,
                public worldData,
                public stageData) {
        this.stageAccordionList = this.createStageAccordionList();
    }

    private createStageAccordionList(): Array<StageAccordion> {
        return this.worldConstantsList.map((constant) => ({
            worldName: this.worldData[constant].name,
            stageList: this.stageData[constant]
        }));
    }
}

@Component({ selector: 'crash1-series-information', template, styleUrls: ['series-information.scss'] })
export class Crash1SeriesInformationComponent extends BaseSeriesInformationComponent {
    constructor() {
        super(crash1WorldConstantsList, crash1WorldData, crash1StageData);
    }
}

@Component({ selector: 'crash2-series-information', template, styleUrls: ['series-information.scss'] })
export class Crash2SeriesInformationComponent extends BaseSeriesInformationComponent {
    constructor() {
        super(crash2WorldConstantsList, crash2WorldData, crash2StageData);
    }
}

@Component({ selector: 'crash3-series-information', template, styleUrls: ['series-information.scss'] })
export class Crash3SeriesInformationComponent extends BaseSeriesInformationComponent {
    constructor() {
        super(crash3WorldConstantsList, crash3WorldData, crash3StageData);
    }
}
