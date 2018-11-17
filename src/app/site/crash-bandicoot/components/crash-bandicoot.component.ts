import { Component } from '@angular/core';

import { getSelector, getContentsPath } from '@site-information/modules/site-info-modules';

@Component({
    selector: getSelector(CrashBandicootComponent),
    template: `
        <site-frame [parent]="this" #siteFrame>
            <ng-template Header>
                <header></header>
            </ng-template>
            <ng-template Body>
                <div align="center" crashFont>
                    <tab-controller></tab-controller>
                    <top-navigation [imgSrc]="getNavigationImagePath(siteFrame.siteInfo)"></top-navigation>
                </div>
            </ng-template>
        </site-frame>
    `,
    styleUrls: ['crash-bandicoot.scss']
})
export default class CrashBandicootComponent {
    getNavigationImagePath(siteInfo) {
        return getContentsPath(siteInfo, 'parts/up.png');
    }
}
