import { Component, Input } from '@angular/core';

@Component({
    selector: 'evaluation-area',
    template: `
        <span id="evaluation-area">
            <div>
                -----
            </div>
            <div>
                {{description}}
            </div>
        </span>
    `,
    styleUrls: ['evaluation-area.scss']
})
export default class EvaluationAreaComponent {
    @Input() description: string;
}
