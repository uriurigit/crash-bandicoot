import { CharactorConstants } from '../../../constants/charactor.constants';
import { Crash1DiamondConstants } from '../../../constants/diamond.constants';
import { Crash1StageConstants } from '../../../constants/stage/stage.constants';
import { Crash1StageThemeConstants } from '../../../constants/stage/stage-theme.constants';
import {
    Crash1BossStageEntity,
    Crash1NormalStageEntity
} from '../../../entity/stage.entity';
import {
    crash1BossStageEntityFactory,
    crash1NormalStageEntityFactory
} from '../../../entity/stage-factory';
import { n001 } from '../../../info/contents-info';

let index = 0;
let bossIndex = 0;

const normalFactory = (data) => {
    data.no = ++index;
    return crash1NormalStageEntityFactory(data);
};

const bossFactory = (data) => {
    data.no = ++bossIndex;
    return crash1BossStageEntityFactory(data);
};

const stageData = {
    [Crash1StageConstants.N01_nSanityBeach]: normalFactory({
        name: 'めざめのビーチ',
        description: `
            記念すべき最初のステージ。
            スタート地点から座礁した船が見える。
            大きく２部構成となっており、前半はビーチ、後半はジャングルとなっている。
            箱の橋はアクアクの無敵を利用すると安全に壊せる。
        `,
        theme: Crash1StageThemeConstants.beach,
        numberOfBoxes: 49,
        timeAttack: {
            targetTime: {
                sapphire: '0:34:00',
                gold: '0:28:26',
                platinum: '0:25:76'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        imageList: [n001.src]
    }),
    [Crash1StageConstants.N02_jungleRollers]: normalFactory({
        name: 'えんばんいわのジャングル',
        description: `
            おなじみのえんばんいわ初登場。
            爆弾箱も初登場。
            他にもボーナスステージやダイヤコース等、
            基本的な要素は大体このあたりで学べる。
        `,
        theme: Crash1StageThemeConstants.jungle,
        numberOfBoxes: 43,
        timeAttack: {
            targetTime: {
                sapphire: '1:03:00',
                gold: '0:48:12',
                platinum: '0:46:89'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 5 },
        diamondCourse: { typeOfDiamondList: [Crash1DiamondConstants.green] }
    }),
    [Crash1StageConstants.N03_theGreatGate]: normalFactory({
        name: 'のぼれ！クラッシュ',
        description: `
            原住民の砦。
            奥スクロールから転じてひたすら上に進む。
            途中に出てくる熊手のようなものは、一定時間が立つと元に戻る。
            いかに止まらずにジャンプし続けられるかがカギとなる。
        `,
        theme: Crash1StageThemeConstants.nativeVillageWall,
        numberOfBoxes: 38,
        timeAttack: {
            targetTime: {
                sapphire: '1:05:00',
                gold: '0:53:29',
                platinum: '0:48:07'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 11 },
        diamondCourse: { typeOfDiamond: Crash1DiamondConstants.yellow }
    }),
    [Crash1StageConstants.N04_boulders]: normalFactory({
        name: 'おおいわごろごろ',
        description: `
            クラッシュの顔ともいうべきステージ。
            転がる大岩から逃げまくる。
            旧作ではパッケージを飾った。
        `,
        theme: Crash1StageThemeConstants.boulderChase,
        numberOfBoxes: 16,
        timeAttack: {
            targetTime: {
                sapphire: '1:04:00',
                gold: '0:49:44',
                platinum: '0:47:48'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
    }),
    [Crash1StageConstants.N05_upstream]: normalFactory({
        name: 'さかなにきをつけろ',
        description: `
            かわのぼり。
            さかなより注意すべきは足場の狭さ。
            ジャンプの制御に不慣れな内は滑りやすい為、
            しっかり距離感をつかもう。
        `,
        theme: Crash1StageThemeConstants.river,
        numberOfBoxes: 36,
        timeAttack: {
            targetTime: {
                sapphire: '1:03:00',
                gold: '0:49:95',
                platinum: '0:46:51'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 22 },
        diamondCourse: { typeOfDiamondList: [Crash1DiamondConstants.orange] }
    }),
    [Crash1StageConstants.B01_papuPapu]: bossFactory({
        // name: 'ふとっちょの パプパプ',
        name: 'パプパプ',
        description: `
            村の長パプパプ。
            クラッシュを侵入者と勘違いして襲ってくる。
            腹に刺青を入れていたり、旧作よりもより厳つくなっている。
        `,
        charactor: CharactorConstants.papuPapu,
        physicalFitness: 5,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.N06_rollingStones]: normalFactory({
        name: 'えんばんいわのはて',
        description: `
            えんばんいわの集大成(?)。
            ブリオの顔を３つ集めるとブリオステージに挑戦できる。
            パーフェクトクリアを目指す場合は攻略必須。
        `,
        theme: Crash1StageThemeConstants.jungle,
        numberOfBoxes: 87,
        timeAttack: {
            targetTime: {
                sapphire: '1:04:00',
                gold: '0:50:35',
                platinum: '0:46:49'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 21 },
        brioStage: { numberOfBoxes: 17 },
        diamondCourse: { typeOfDiamondList: [Crash1DiamondConstants.blue] }
    }),
    [Crash1StageConstants.N07_hogWild]: normalFactory({
        name: 'イノシシダッシュ！',
        description: `
            おなじみの強制スクロールステージ。
            原住民の村をイノシシに乗って駆け抜ける。
            妨害しているように見える原住民はだた踊っているだけ。
        `,
        theme: Crash1StageThemeConstants.hog,
        numberOfBoxes: 24,
        timeAttack: {
            targetTime: {
                sapphire: '0:55:00',
                gold: '0:47:53',
                platinum: '0:43:42'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.N08_nativeFortress]: normalFactory({
        name: 'とりでのてっぺんへ',
        description: `
            ひたすら上を目指す。
            砦のてっぺんにはシンボルともいえる太陽が描かれている。
            背景には次に目指す「いせきのしま」が見える。
        `,
        theme: Crash1StageThemeConstants.nativeVillageWall,
        numberOfBoxes: 48,
        timeAttack: {
            targetTime: {
                sapphire: '2:55:00',
                gold: '2:25:87',
                platinum: '2:05:80'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 5 },
        diamondCourse: { typeOfDiamondList: [Crash1DiamondConstants.red] }
    }),
    [Crash1StageConstants.N09_upTheCreek]: normalFactory({
        name: 'じょうりゅうをめざせ',
        description: `
            かわのぼりその２。
            途中に現れる！ブロックは、作動させるとりんごの道しるべが現れる。
        `,
        theme: Crash1StageThemeConstants.river,
        numberOfBoxes: 48,
        timeAttack: {
            targetTime: {
                sapphire: '1:42:00',
                gold: '1:20:25',
                platinum: '1:16:31'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 30 },
    }),
    [Crash1StageConstants.B02_ripperRoo]: bossFactory({
        // name: 'いかれた リパー・ルー',
        name: 'リパー・ルー',
        description: `
            旧作のタイトルは「いかれた リパー・ルー」。
            イカれパワーによって通常攻撃ではダメージを与えられない。
            どこからともなく流れてくる爆弾箱を、タイミング良く作動させる。
        `,
        charactor: CharactorConstants.ripperRoo,
        physicalFitness: 3,
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.N10_theLostCity]: normalFactory({
        name: 'とかげでだいジャンプ',
        description: `
            廃墟ステージ。
            中盤という事もあり、このあたりからどんどん難易度が上がってくる。
            ３種類のとかげはそれぞれ異なった特性を持ち、
            時には避けたり、足場として利用したりする。
        `,
        theme: Crash1StageThemeConstants.ancientRuins,
        numberOfBoxes: 82,
        timeAttack: {
            targetTime: {
                sapphire: '2:35:00',
                gold: '1:56:12',
                platinum: '1:40:52'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.green],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 33 },
        brioStage: { numberOfBoxes: 21 }
    }),
    [Crash1StageConstants.N11_templeRuins]: normalFactory({
        name: 'こだいのしんでん',
        description: `
            神殿ステージ。
            古代の仕掛けが未だに動いている。
            敵もクモやヘビといった毒々しいものが多いが、
            旧作と比べて全体的に雰囲気が明るくなっている。
        `,
        theme: Crash1StageThemeConstants.darkTemple,
        numberOfBoxes: 67,
        timeAttack: {
            targetTime: {
                sapphire: '2:11:00',
                gold: '1:32:61',
                platinum: '1:25:34'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: undefined
    }),
    [Crash1StageConstants.N12_roadToNowhere]: normalFactory({
        name: 'きりのつりばしで',
        description: `
            入り口に「危険」と書かれた吊り橋を渡る。
            原住民の村ではお世話になったイノシシも、ここではお邪魔キャラとして登場する。
            少々難しいが、左右のロープを伝って進む事も出来る。
            中々攻略できない場合はチャレンジしてみてもいいだろう。
        `,
        theme: Crash1StageThemeConstants.bridge,
        numberOfBoxes: 42,
        timeAttack: {
            targetTime: {
                sapphire: '1:24:00',
                gold: '1:03:26',
                platinum: '0:57:85'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 9 },
        diamondCourse: { typeOfDiamondList: [Crash1DiamondConstants.red] }
    }),
    [Crash1StageConstants.N13_boulderDash]: normalFactory({
        name: 'またおおいわだ！',
        description: `
            タイトル通り再び大岩ステージ。
            以前よりステージが長く集中力を要するものの、
            ギミック自体は前回と変わらない。
        `,
        theme: Crash1StageThemeConstants.boulderChase,
        numberOfBoxes: 35,
        timeAttack: {
            targetTime: {
                sapphire: '1:45:00',
                gold: '1:24:61',
                platinum: '1:18:08'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        diamondCourse: { typeOfDiamondList: [Crash1DiamondConstants.purple] }
    }),
    [Crash1StageConstants.N14_wholeHog]: normalFactory({
        name: 'イノシシ チャレンジ',
        description: `
            隠しステージその１。
            原住民の動きを良く見る事。
        `,
        theme: Crash1StageThemeConstants.hog,
        numberOfBoxes: 24,
        timeAttack: {
            targetTime: {
                sapphire: '0:48:00',
                gold: '0:30:44',
                platinum: '0:26:87'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        isSecret: true,
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.N15_sunsetVista]: normalFactory({
        name: 'ゆうやけのはいきょ',
        notationOnTheGame: 'あらしのこじょう',
        description: `
            夕暮れに焼かれた廃墟。
            今作中、おそらく最も長いステージ。
            パーフェクトはあせらずゆっくり。
        `,
        theme: Crash1StageThemeConstants.ancientRuins,
        numberOfBoxes: 90,
        timeAttack: {
            targetTime: {
                sapphire: '5:30:00',
                gold: '4:10:04',
                platinum: '3:41:85'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: true,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 16 },
        cortexStage: { numberOfBoxes: 23 },
    }),
    [Crash1StageConstants.B03_koalaKong]: bossFactory({
        // name: 'コアラコングは ちからもち',
        name: 'コアラコング',
        description: `
            投げてくる岩をスピンで当てる。
            トロッコに当てないように注意しよう。
        `,
        charactor: CharactorConstants.koalaKong,
        physicalFitness: 4,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.N16_heavyMachinery]: normalFactory({
        name: 'きかいかけいかく',
        description: `
            機械化ステージ。
            宙を浮くロボットは通常アクションでは倒せない。
            熱いパイプに触ってはいけない。
        `,
        theme: Crash1StageThemeConstants.factory,
        numberOfBoxes: 86,
        timeAttack: {
            targetTime: {
                sapphire: '2:20:00',
                gold: '1:57:52',
                platinum: '1:36:29'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 19 },
        brioStage: { numberOfBoxes: 30 },
    }),
    [Crash1StageConstants.N17_cortexPower]: normalFactory({
        name: 'コルテックスのはつでんしょ',
        description: `
            分岐の多い厄介なステージ。
            更にパーフェクトには青ダイヤが必要。
            ルート取りをしっかり考えよう。
        `,
        theme: Crash1StageThemeConstants.electricPipes,
        numberOfBoxes: 42,
        timeAttack: {
            targetTime: {
                sapphire: '1:05:00',
                gold: '0:43:98',
                platinum: '0:39:70'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: undefined,
        diamondCourse: { typeOfDiamondList: [Crash1DiamondConstants.blue] }
    }),
    [Crash1StageConstants.N18_generatorRoom]: normalFactory({
        name: 'はつでんしつしんにゅう',
        description: `
            そこら中のＴＶにコルテックスの顔が映し出されている、
            少々不気味なステージ。
            ステージ外には謎のバリアがあり、触れるとビリビリ痺れる。
        `,
        theme: Crash1StageThemeConstants.poweringStation,
        numberOfBoxes: 52,
        timeAttack: {
            targetTime: {
                sapphire: '1:22:00',
                gold: '1:08:37',
                platinum: '0:59:72'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.orange],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 8 },
    }),
    [Crash1StageConstants.N19_toxicWaste]: normalFactory({
        name: 'ドラムかんステップ',
        description: `
            転がってくるドラム缶をひたすら避けながら進む。
            ドラム缶は２種類。跳ねるのが苦手な場合は、横を回り込むようにジャンプするといい。
        `,
        theme: Crash1StageThemeConstants.toxicPlant,
        numberOfBoxes: 39,
        timeAttack: {
            targetTime: {
                sapphire: '1:16:00',
                gold: '1:03:47',
                platinum: '0:55:75'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.blue],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 13 },
    }),
    [Crash1StageConstants.B04_pinstripe]: bossFactory({
        // name: 'クールな ピンストライプ',
        name: 'ピンストライプ',
        description: `
            機関銃をぶっ放す危険人(?)物。
            撃っている間は無敵。移動中か、弾切れを狙う。
        `,
        charactor: CharactorConstants.pinstripePotoroo,
        physicalFitness: 6,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.N20_theHighRoad]: normalFactory({
        name: 'カメカメジャンプ',
        description: `
            カメを利用してジャンプしつつ、穴だらけの吊り橋を進む。
            旧作日本版では難易度調整によりステージ自体が短くなっていたが、
            今作はフルで遊べる。
        `,
        theme: Crash1StageThemeConstants.bridge,
        numberOfBoxes: 45,
        timeAttack: {
            targetTime: {
                sapphire: '1:28:00',
                gold: '1:13:29',
                platinum: '1:04:61'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 27 },
    }),
    [Crash1StageConstants.N21_slipperyClimb]: normalFactory({
        name: 'あらしのこじょう',
        notationOnTheGame: 'ゆうやけのはいきょ',
        description: `
            古城ステージ。
            とにかく滑りやすく、足場のタイミングもつかみづらい。
            旧作では救済措置だったトゲトゲも、ジャンプ力の変化か復帰できなくなっている為、
            意味をなさない。
        `,
        theme: Crash1StageThemeConstants.castleExterior,
        numberOfBoxes: 51,
        timeAttack: {
            targetTime: {
                sapphire: '3:30:00',
                gold: '3:00:47',
                platinum: '2:26:08'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.red],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        brioStage: { numberOfBoxes: 19 },
    }),
    [Crash1StageConstants.N22_lightsOut]: normalFactory({
        name: 'くらやみでドッキリ',
        description: `
            恒例の暗闇ステージ。
            アクアクが発する明かりを頼りに暗闇の中を進む。
            時間がたつと明かりが消えてしまうが、実はほんのり見える。
        `,
        theme: Crash1StageThemeConstants.darkHallway,
        numberOfBoxes: 15,
        timeAttack: {
            targetTime: {
                sapphire: '1:31:00',
                gold: '1:20:67',
                platinum: '1:06:87'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.purple],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: undefined,
        diamondCourse: { typeOfDiamondList: [Crash1DiamondConstants.yellow] }
    }),
    [Crash1StageConstants.N23_fumblingInTheDark]: normalFactory({
        name: 'ふかい くらやみの なかで',
        description: `
            隠しステージその２。
            暗闇ステージの凶悪版。普通に進むのも難しい。
        `,
        theme: Crash1StageThemeConstants.darkHallway,
        numberOfBoxes: 18,
        isSecret: true,
        timeAttack: {
            targetTime: {
                sapphire: '2:28:00',
                gold: '1:57:68',
                platinum: '1:41:59'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
    }),
    [Crash1StageConstants.N24_jawsOfDarkness]: normalFactory({
        name: 'しんでんのおくふかく',
        description: `
            神殿ステージ。
            宙に浮くりんごを頼りに上下左右、縦横無尽に進む。
            一見わからない場所に箱が隠れていたりするので、
            色々探してみよう。
        `,
        theme: Crash1StageThemeConstants.darkTemple,
        numberOfBoxes: 112,
        timeAttack: {
            targetTime: {
                sapphire: '2:21:00',
                gold: '1:59:21',
                platinum: '1:36:26'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: true,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 23 },
        cortexStage: { numberOfBoxes: 24 },
        diamondCourse: { typeOfDiamond: Crash1DiamondConstants.blue }
    }),
    [Crash1StageConstants.N25_castleMachinery]: normalFactory({
        name: 'きかいかはすすむ',
        description: `
            残機補充でとてもお世話になるステージ。
            緑ダイヤがあるとステージの仕掛けをスキップできる。
        `,
        theme: Crash1StageThemeConstants.factory,
        numberOfBoxes: 27,
        timeAttack: {
            targetTime: {
                sapphire: '3:15:00',
                gold: '2:37:61',
                platinum: '2:09:89'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: undefined,
        diamondCourse: { typeOfDiamond: Crash1DiamondConstants.green }
    }),
    [Crash1StageConstants.B05_nitrusBrio]: bossFactory({
        // name: 'かがくの ニトラス・ブリオ',
        name: 'DR.ニトラス・ブリオ',
        description: `
            コルテックスの参謀ブリオ登場。
            使役するスライムは、自身の魂を具現化したもの。
            倒すとブリオ本体にダメージがフィードバックする。
        `,
        charactor: CharactorConstants.doctorNitrusBrio,
        physicalFitness: 7,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.N26_theLab]: normalFactory({
        name: 'ビリビリけんきゅういん',
        description: `
            とにかくタイミングが重要。
            ビリビリ研究員は、横をカーブするようにジャンプすれば無視できる。
        `,
        theme: Crash1StageThemeConstants.castleInterior,
        numberOfBoxes: 36,
        timeAttack: {
            targetTime: {
                sapphire: '1:20:00',
                gold: '0:56:22',
                platinum: '0:44:92'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.yellow],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: { numberOfBoxes: 12 }
    }),
    [Crash1StageConstants.N27_TheGreatHall]: normalFactory({
        name: 'しろダイヤのいきさきは？',
        description: `
            しろダイヤを全て集めたら再びここにこよう。
        `,
        theme: Crash1StageThemeConstants.pentHouse,
        timeAttack: undefined,
        compensation: {
            typeOfDiamondList: [],
            presenceOfKey: false,
            presenceOfRelic: false
        },
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.B06_drNeoCortex]: bossFactory({
        // name: 'コルテックスと いっきうち',
        name: 'DR.ネオ・コルテックス',
        description: `
            ＶＳコルテックス。
            シリーズ中最も多彩な攻撃を仕掛けてくる。
        `,
        charactor: CharactorConstants.doctorNeoCortex,
        physicalFitness: 5,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash1StageConstants.N28_stormyAscent]: normalFactory({
        name: 'あらしのしろ',
        description: `
            とにかく長い & 難しい。
            事前に残機だけは十分に確保しておこう。
            タイムアタックは精神との戦い。
            ミスしやすい場所はあえて時計を取らずに進み、
            Ｃ箱を拠点としながら練習するのもアリ。
        `,
        theme: Crash1StageThemeConstants.castleExterior,
        timeAttack: {
            targetTime: {
                sapphire: '7:00:00',
                gold: '4:30:00',
                platinum: '3:10:00'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        }
    })
};
export default stageData;
