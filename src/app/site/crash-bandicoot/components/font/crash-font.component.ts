import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '[crashFont]',
    template: `
        <p class="crash-font">
            <ng-content></ng-content>
        </p>
    `,
    styleUrls: ['crash-font.scss'],
    encapsulation: ViewEncapsulation.None
})
export default class CrashFontComponent { }
