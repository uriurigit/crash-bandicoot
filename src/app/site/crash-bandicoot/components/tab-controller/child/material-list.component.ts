import { Component } from '@angular/core';

import { materialList } from '../../../data/material/material-data';

@Component({
    selector: 'material-list',
    template: `
        <div id="material-list">
            <material-area
                *ngFor="let material of materialList"
                [material]="material"
            >
            </material-area>
        </div>
    `
})
export default class MaterialListComponent {
    readonly materialList = materialList;
}
