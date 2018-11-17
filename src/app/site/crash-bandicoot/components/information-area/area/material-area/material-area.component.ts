import { Component, Input } from '@angular/core';

import { template } from '@common/modules/template-engine/template-engine';

@Component({
    selector: 'material-area',
    template: `
        <div id="material-area">
            <!-- <div id="title-box">
                <span id="title"></span>
            </div> -->
            <div id="detail-box">
                <span class="alike-font font-sizeA">
                    <p id="name" [innerHTML]="template(material.name)"></p>
                    <p id="detail" [innerHTML]="template(material.detail.text)"></p>
                    <content
                        *ngFor="let contentDetail of material.detail.contentList"
                        [contentDetail]="contentDetail"
                    >
                    </content>
                </span>
            </div>
        </div>
    `,
    styleUrls: ['material-area.scss']
})
export default class MaterialAreaComponent {
    @Input() material: string;

    template = template;
}
