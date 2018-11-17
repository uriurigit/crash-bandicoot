import { Component } from '@angular/core';

import tabSet from '@common/element-factory/tab-set';
import { AccordionModeConstants } from '../../stage-accordion/accordion-mode.constants';

const stageListProps = { accordionMode: AccordionModeConstants.stageList };
@Component({
  selector: 'capture-list',
  template: `
      ${tabSet([
          { title: 'クラッシュ・バンディクー', selector: 'crash1-series-information', props: stageListProps },
          { title: 'クラッシュ・バンディクー2', selector: 'crash2-series-information', props: stageListProps },
          { title: 'クラッシュ・バンディクー3', selector: 'crash3-series-information', props: stageListProps }
      ])}
  `
})
export class CaptureListComponent { }

const evaluationProps = { accordionMode: AccordionModeConstants.stageEvaluation };
@Component({
  selector: 'evaluation-list',
  template: `
      ${tabSet([
          { title: 'そうひょう', selector: 'general-evaluation' },
          { title: 'クラッシュ・バンディクー', selector: 'crash1-series-information', props: evaluationProps },
          { title: 'クラッシュ・バンディクー2', selector: 'crash2-series-information', props: evaluationProps },
          { title: 'クラッシュ・バンディクー3', selector: 'crash3-series-information', props: evaluationProps }
      ])}
  `
})
export class EvaluationListComponent { }
