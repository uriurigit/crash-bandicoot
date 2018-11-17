import { Component } from '@angular/core';

import tabSet from '@common/element-factory/tab-set';

@Component({
    selector: 'tab-controller',
    template: `
        ${tabSet([
            // { title: 'TOP', selector: 'top' },
            { title: 'こうりゃく', selector: 'capture-list' },
            // { title: 'ひょうか', selector: 'evaluation-list' },
            // { title: 'ネタ', selector: 'material-list' }
        ])}
    `
})
export default class TabControllerComponent {　}
