import { Component } from '@angular/core';

import { title } from '../../../info/contents-info';
import CrashBandicootRouteInfo from '../../../route/crash-bandicoot-route-info';

@Component({
    selector: 'header',
    template: `
        <div align='center'>
            <img
                [routerLink]="['${CrashBandicootRouteInfo.top}']"
                src='${title.src}'
                style="outline:none;"
            >
        </div>
    `
})
export default class HeaderComponent { }
