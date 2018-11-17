import {
    ContentConstants,
    ImageVisualTypeConstants,
    VideoVisualTypeConstants
} from '@common/constants/content.constants';
import { MaterialConstants } from '../../constants/material.constants';
import { MaterialEntity } from '../../entity/material.entity';
import { materialEntityFactory } from '../../entity/material-factory';
import { Material } from '../../info/contents-info';

const { image, video } = ContentConstants;
const {
    fullImageToConpact
} = ImageVisualTypeConstants;
const {
    fullVideoToConpact
} = VideoVisualTypeConstants;

export const materialList: Array<MaterialEntity> = [
    materialEntityFactory({
        name: `「おおいわごろごろ」と「ゆきだま ゴロゴロ」`,
        detail: {
            text:
                `旧作のステージ名はそれぞれ
                ・おおいわ ゴロゴロ
                ・ゆきだま ゴロゴロ
                なのに、何故かリメイク版は
                ・おおいわごろごろ
                ・ゆきだま ゴロゴロ
                `,
            contentList: [{
                content: Material.gorogoro1,
                visualType: undefined
            },
            {
                content: Material.gorogoro2,
                visualType: undefined
            }],
        },
    }),
    materialEntityFactory({
        name: `死してなお`,
        detail: {
            text:
                `トカゲをスピンで吹っ飛ばしてもタイミングによっては反射の判定が残っており、
                着地後に吹っ飛ばされる事がある。
            `,
            contentList: [{
                content: Material.reflect,
                visualType: fullVideoToConpact
            }]
        }
    }),
    materialEntityFactory({
        name: `忖度する足場`,
        detail: {
            text:
                `できるだけ不都合の無いように、
                最大限クラッシュ君の行動を尊重してくれる。
            `,
            contentList: [{
                content: Material.scaffoldPlay1,
                visualType: fullVideoToConpact
            },
            {
                content: Material.scaffoldPlay2,
                visualType: fullVideoToConpact,
                annotation: {
                    up: '↓こっちの足場は厳しかったようだ・・・。'
                }
            }]
        },
    }),
    materialEntityFactory({
        name: `鼻はセーフ`,
        detail: {
            text:
                `プレスする扉の罠に密着していると、鼻ごと持っていかれる。
            `,
            contentList: [{
                content: Material.pressNose,
                visualType: fullVideoToConpact
            }]
        }
    }),
    materialEntityFactory({
        name: `乗ってみた`,
        detail: {
            text: '',
            contentList: [{
                content: Material.ridePipe,
                visualType: fullImageToConpact,
                annotation: {
                    up: '「きかいかけいかく」パイプの間'
                }
            },
            {
                content: Material.rideTv,
                visualType: fullImageToConpact,
                annotation: {
                    up: '「はつでんしつしんにゅう」TV画面の上'
                }
            },
            {
                content: Material.rideBlockTower,
                visualType: fullImageToConpact,
                annotation: {
                    up:
                        `「ベイビーＴで つっぱしれ！」高いブロックの上
                        (※これ以上右へは進めない)
                        `
                }
            }]
        }
    }),
    materialEntityFactory({
        name: `仕事しないカメラ`,
        detail: {
            text:
                `「きかいかけいかく」にて緑ダイヤに乗らずに端にジャンプすると、
                カメラが移動しない。
            `,
            contentList: [{
                content: Material.kikaikaCamera,
                visualType: fullImageToConpact,
                annotation: {
                    bottom: '(※実は端っこにクラッシュがいる↑)'
                }
            }]
        },
    }),
    materialEntityFactory({
        name: `浮遊するイノシシその１`,
        detail: {
            text:
                `イノシシは穴に落ちる事が無い為、
                足場が崩れても平気。
            `,
            contentList: [{
                content: Material.floatingHog1,
                visualType: fullImageToConpact
            }]
        },
    }),
    materialEntityFactory({
        name: `浮遊するイノシシその２`,
        detail: {
            text:
                `アクアクを利用してイノシシを吹っ飛ばすと、
                コース外まで吹っ飛ばずに浮遊するイノシシが見れる。
            `,
            contentList: []
        },
    }),
    materialEntityFactory({
        name: `隙間はひとつだけ？`,
        detail: {
            text:
                `・「まっくら クラッシュ」
                ・「まっくらクラッシュ ２」
                ２は「まっくら」と「クラッシュ」の間に隙間がない。
                おそらく「２」との間に隙間がある分、全体の文字バランスを考慮しての事だと思われるが、
                １の「ふかい くらやみの なかで」は隙間が２つ・・・。
            `,
            contentList: [{
                content: Material.makkura1,
                visualType: fullImageToConpact
            },
            {
                content: Material.makkura2,
                visualType: fullImageToConpact
            }]
        },
    }),
    materialEntityFactory({
        name: `謎の押し出し`,
        detail: {
            text:
            `お分かりいただけたであろうか・・・(黄色ダイヤ)
            `,
            contentList: []
        },
    }),
    materialEntityFactory({
        name: `背後から・・・`,
        detail: {
            text:
                `エヌ・トロピーの背後に入れば一切の攻撃は当たらない。
                ただし疲労状態でないとダメージが入らない上、
                状態が変わる瞬間に周囲に一撃死の攻撃を繰り出してくる為、
                避難所としては微妙。。
            `,
            contentList: [{
                content: Material.nTropyBack,
                visualType: fullImageToConpact
            }]
        },
    }),
    materialEntityFactory({
        name: `無理やりネジ込みワープ`,
        detail: {
            text:
                `キャラクター変更時に上手い事ワープゲートの範囲内に入り込めば、
                プレイアブルでないキャラでもワープできる。
                ただし、残念ながらステージ内では正規のキャラクターに
                置き換えられてしまうようだ。
            `,
            contentList: [{
                content: Material.warpMiss,
                visualType: fullVideoToConpact
            }]
        },
    }),
    materialEntityFactory({
        name: `ニセクラッシュ`,
        detail: {
            text: ``,
            contentList: [{
                content: Material.niseBeach,
                visualType: fullImageToConpact,
                annotation: {
                    up: '「めざめのビーチ」階段左'
                }
            },
            {
                content: Material.niseFactory,
                visualType: fullImageToConpact,
                annotation: {
                    up: '「きかいかけいかく」パイプの中'
                }
            },
            {
                content: Material.niseRuins,
                visualType: fullImageToConpact,
                annotation: {
                    up: '「からくりの はいきょ」ボーナス手前あたり'
                }
            },
            {
                content: Material.niseEngland,
                visualType: fullImageToConpact,
                annotation: {
                    up: '「ケロッパの じょうかまち」小屋の前'
                }
            }]
        },
    }),
/*
{
    name: `ダイヤ格差`,
    detail:
        `ダイヤの足場の大きさがちぐはぐ
        <img src='${MaterialImagesInfo.yellow1}'><img src='${MaterialImagesInfo.yellow2}'>
        <img src='${MaterialImagesInfo.red}'>
        <img src='${MaterialImagesInfo.blue}'>
        <img src='${MaterialImagesInfo.green1}'><img src='${MaterialImagesInfo.green2}'>
    `,
    type: undefined
},
{
    name: `ニセクラッシュ`,
    detail:
        `「めざめのビーチ」階段左
        「きかいかけいかく」パイプの中
        「からくりの はいきょ」ボーナス移動中
    `,
    type: undefined
},
*/
];
