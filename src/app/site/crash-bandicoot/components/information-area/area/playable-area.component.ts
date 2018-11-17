import { Component, Input } from '@angular/core';

import { CharactorConstants } from '../../../constants/charactor.constants';
import { charactorData } from '../../../data/charactor/charactor-data';

@Component({
    selector: 'playable-area',
    template: `
        <span id="playable-area">
            <table>
            <tr>
                <td>{{crash}}：</td>
                <td>{{test(stage.isPlayable.crash)}}</td>
            </tr>
            <tr>
                <td>{{coco}}：</td>
                <td>{{test(stage.isPlayable.coco)}}</td>
            </tr>
            </table>
        </span>
    `
})
export default class PlayableAreaComponent {
    @Input() stage;
    readonly crash = charactorData[CharactorConstants.crashBandicoot].alias;
    readonly coco = charactorData[CharactorConstants.cocoBandicoot].alias;

    test(playable) {
        return (playable) ? '○' : '×';
    }
}
