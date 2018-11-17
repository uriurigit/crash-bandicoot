import { Component, Input, ViewEncapsulation } from '@angular/core';
import { isUndefined } from 'lodash';

import { AccordionModeConstants } from './accordion-mode.constants';
import { isBranching, isNormalStage } from '../../modules/stage-type-check';

@Component({
    selector: 'stage-accordion',
    template: `
      <div *ngIf="0 < stageList.length">
          <div id="span-accordion">
              <span id="world-name" class="font-sizeC">{{worldName}}</span>
              <accordion #acc="accordion">
                  <panel
                      *ngFor="let stage of stageList; index as i"
                      class={{getPanelClass(stage)}}
                      defaultOpen="true"
                      id="toggle-{{i}}"
                      subTitle="{{getPanelSubTitle(stage)}}"
                      title="{{getPanelTitle(stage)}}"
                      type="light"
                  >
                      <span *ngIf="stageListMode == accordionMode">
                          <ng-template PanelTitle>
                              <status-area *ngIf="!isBranching(stage)" [stage]="stage">
                              </status-area>
                          </ng-template>
                          <ng-template PanelContent>
                              <stage-capture-accordion [stage]="stage">
                              </stage-capture-accordion>
                          </ng-template>
                      </span>
                      <span *ngIf="stageEvaluationMode == accordionMode">
                          <ng-template PanelContent>
                              <stage-evaluation-accordion [stage]="stage">
                              </stage-evaluation-accordion>
                          </ng-template>
                      </span>
                  </panel>
              </accordion>
          </div>
      </div>
    `,
    styleUrls: ['stage-accordion.scss'],
    encapsulation: ViewEncapsulation.None
})
export default class StageAccordionComponent {
    @Input() worldName: string;
    @Input() stageList: Array<any>;
    @Input() accordionMode: AccordionModeConstants;

    readonly isBranching = isBranching;

    readonly stageEvaluationMode = AccordionModeConstants.stageEvaluation;
    readonly stageListMode = AccordionModeConstants.stageList;

    getPanelClass(stage): string {
        return (isNormalStage(stage) ? 'blue' : 'orange') + ' font-sizeC';
    }

    getPanelSubTitle(stage): string {
        const { branchSourceStage, notationOnTheGame } = stage;

        return (isUndefined(branchSourceStage) ? '' : `(※ステージ${branchSourceStage.no}からぶんき)`)
            + (isUndefined(notationOnTheGame) ? '' : `(※ゲームじょうは「${notationOnTheGame}」)`);
    }

    getPanelTitle(stage): string {
        return this.createNo(stage) + stage.name;
    }

    private createNo(stage): string {
        const no: string = isUndefined(stage.no) ? '--' : String(stage.no);

        return isNormalStage(stage) ? `${no}.` : '';
    }
}
