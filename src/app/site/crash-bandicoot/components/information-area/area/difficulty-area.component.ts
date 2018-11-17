import { Component, Input } from '@angular/core';

import { DifficultyConstants } from '../../../constants/difficulty.constants';

@Component({
    selector: 'difficulty-area',
    template: `
        {{title}}：
        <star-rate [rate]=difficulty>
        </star-rate>
    `
})
export default class DifficultyAreaComponent {
    @Input() title: string;
    @Input() difficulty: DifficultyConstants;
}
