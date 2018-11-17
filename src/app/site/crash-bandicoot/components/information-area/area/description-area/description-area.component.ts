import { Component, Input } from '@angular/core';

import { template } from '@common/modules/template-engine/template-engine';

@Component({
    selector: 'description-area',
    template: `
        <span id="description-area">
            <div>
                <p [innerHTML]="template(description)"></p>
            </div>
        </span>
    `,
    styleUrls: ['description-area.scss']
})
export default class DescriptionAreaComponent {
    @Input() description: string;

    template = template;
}
