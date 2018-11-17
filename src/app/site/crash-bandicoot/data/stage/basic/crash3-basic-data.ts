import { CharactorConstants } from '../../../constants/charactor.constants';
import { Crash3DiamondConstants } from '../../../constants/diamond.constants';
import { Crash3StageConstants } from '../../../constants/stage/stage.constants';
import { Crash3StageThemeConstants } from '../../../constants/stage/stage-theme.constants';
import { PowerUpConstants } from '../../../constants/power-up.constants';
import {
    Crash3BossStageEntity,
    Crash3NormalStageEntity
} from '../../../entity/stage.entity';
import {
    crash3BossStageEntityFactory,
    crash3NormalStageEntityFactory
} from '../../../entity/stage-factory';

let index = 0;
let bossIndex = 0;

const normalFactory = (data) => {
    data.no = ++index;
    return crash3NormalStageEntityFactory(data);
};

const bossFactory = (data) => {
    data.no = ++bossIndex;
    return crash3BossStageEntityFactory(data);
};

const secretFactory = (data) => {
    data.isSecret = true;
    return crash3NormalStageEntityFactory(data);
};

let n07;
let n19;

const stageData = {
    [Crash3StageConstants.N01_toadVillage]: normalFactory({
        name: 'ケロッパの じょうかまち',
        description: `
            英国の城下町を舞台とした、剣と魔法のファンタジー。
            ケロッパにやられると熱いキスを交わされる。
        `,
        theme: Crash3StageThemeConstants.englandCastleTown,
        numberOfBoxes: 42,
        timeAttack: {
            targetTime: {
                sapphire: '1:03:00',
                gold: '0:57:50',
                platinum: '0:44:03'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 7 }
    }),
    [Crash3StageConstants.N02_underPressure]: normalFactory({
        name: 'かいてい たからさがし',
        description: `
            水中ステージ。
            基本操作は泳ぐorスピンのみ。
            移動のまどろっこしさに苦手意識のある人も多いだろう。
        `,
        theme: Crash3StageThemeConstants.atlantisSeafloor,
        numberOfBoxes: 92,
        timeAttack: {
            targetTime: {
                sapphire: '1:39:00',
                gold: '1:10:90',
                platinum: '1:03:50'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N03_orientExpress]: normalFactory({
        name: 'ばんりの ちょうとっきゅう',
        description: `
            万里の長城を子虎に乗って駆け抜ける。
            旧作ではココの初プレイアブルステージだった。
            転がってくるタルはダッシュで壊せる。
        `,
        theme: Crash3StageThemeConstants.greatWallOfChina,
        numberOfBoxes: 51,
        timeAttack: {
            targetTime: {
                sapphire: '0:41:00',
                gold: '0:27:80',
                platinum: '0:18:10'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: false,
            coco: true
        }
    }),
    [Crash3StageConstants.N04_boneYard]: normalFactory({
        name: 'どたばた ジャラシックぬま',
        description: `
            古代ジュラ紀にタイムスリップ。
            トリケラトプスやプテラノドンが登場する。
            手前、奥、横と方向転換の多いステージ。
        `,
        theme: Crash3StageThemeConstants.jurassic,
        numberOfBoxes: 66,
        timeAttack: {
            targetTime: {
                sapphire: '1:45:00',
                gold: '1:40:20',
                platinum: '1:21:00'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 14 },
        diamondCourse: { typeOfDiamondList: [Crash3DiamondConstants.red] }
    }),
    [Crash3StageConstants.N05_makinWaves]: normalFactory({
        name: 'かいぞくじまを めざせ！',
        description: `
            水上バイクに乗って海の上を走る。
            操作はダッシュのみとシンプル。
            空中の箱はジャンプ台を利用する。
        `,
        theme: Crash3StageThemeConstants.caribbeanSea,
        numberOfBoxes: 37,
        timeAttack: {
            targetTime: {
                sapphire: '1:11:00',
                gold: '1:03:23',
                platinum: '0:56:23'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: false,
            coco: true
        }
    }),
    [Crash3StageConstants.B01_tinyTiger]: bossFactory({
        // name: 'けんとうし タイニータイガー',
        name: 'タイニータイガー',
        description: `
            ローマの闘技場でタイニーと決闘。
            周りの観客はよく見ると全て研究員であり、
            タイニーにダメージを与える度にブーイングしてくる。
        `,
        charactor: CharactorConstants.tinyTiger,
        physicalFitness: 3,
        powerUp: PowerUpConstants.superBodyPress,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N06_geeWiz]: normalFactory({
        name: 'けんとまほうの けんきゅういん',
        description: `
            魔法使い登場。
            魔法にあたるとカエルに変えられてしまう。
        `,
        theme: Crash3StageThemeConstants.englandCastleTown,
        numberOfBoxes: 100,
        timeAttack: {
            targetTime: {
                sapphire: '1:35:00',
                gold: '1:22:73',
                platinum: '1:05:90'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 18 }
    }),
    [Crash3StageConstants.N07_hangEmHigh]: normalFactory(n07 = {
        name: 'アラビアの あついぶらさがり',
        description: `
            アラビアの街並み。
            絨毯に乗ったり金網にぶら下がったり。
            ツボを持った敵はスライディングで倒そう。
        `,
        theme: Crash3StageThemeConstants.arabianTownscape,
        numberOfBoxes: 95,
        timeAttack: {
            targetTime: {
                sapphire: '1:24:00',
                gold: '0:52:63',
                platinum: '0:43:80'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.yellow],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 20 }
    }),
    [Crash3StageConstants.N08_hogRide]: normalFactory({
        name: 'こうやの キメキメハイウェイ',
        description: `
            サーキットでレーシング。
            １位になるとパワーストーンがもらえる。
            慣性がかかる為、旧作に慣れているとはじめは難しく感じるかも。
        `,
        theme: Crash3StageThemeConstants.americanCircuit,
        numberOfBoxes: 13,
        timeAttack: {
            targetTime: {
                sapphire: '0:48:00',
                gold: '0:44:43',
                platinum: '0:38:06'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N09_tombTime]: normalFactory({
        name: 'ピラミッド けんせつちゅう',
        description: `
            エジプトのピラミッド。
        `,
        theme: Crash3StageThemeConstants.egyptianPyramid,
        numberOfBoxes: 95,
        timeAttack: {
            targetTime: {
                sapphire: '1:42:00',
                gold: '1:10:00',
                platinum: '0:53:90'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 19 },
        diamondCourse: { typeOfDiamondList: [Crash3DiamondConstants.purple] }
    }),
    [Crash3StageConstants.N10_midnightRun]: normalFactory({
        name: 'つきよの ちょうとっきゅう',
        description: `
            月夜の万里を駆け抜ける。
            全ての箱を壊すにはダッシュが必須。
        `,
        theme: Crash3StageThemeConstants.greatWallOfChina,
        numberOfBoxes: 35,
        timeAttack: {
            targetTime: {
                sapphire: '0:51:00',
                gold: '0:38:23',
                platinum: '0:18:20'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: false,
            coco: true
        }
    }),
    [Crash3StageConstants.B02_dingodile]: bossFactory({
        // name: 'ディンゴダイル とうじょう',
        name: 'ディンゴダイル',
        description: `
            ディンゴダイル初登場。
            上空に撃ち出す火炎弾は影を良く見よう。
        `,
        charactor: CharactorConstants.dingodile,
        physicalFitness: 3,
        powerUp: PowerUpConstants.doubleJump,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N11_dinoMight]: normalFactory({
        name: 'ベイビーＴで つっぱしれ！',
        description: `
            ベイビーＴ初登場。
            旧作ではパッケージを飾ったものの、
            通常ステージの出番はここだけ。
            ポーラやプーラと違い利用に必然性が無い上、
            場合によっては利用しないほうが良い事も・・・。
        `,
        theme: Crash3StageThemeConstants.jurassic,
        numberOfBoxes: 112,
        timeAttack: {
            targetTime: {
                sapphire: '1:34:00',
                gold: '1:25:76',
                platinum: '1:03:00'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 25 },
        diamondCourse: { typeOfDiamondList: [Crash3DiamondConstants.yellow] }
    }),
    [Crash3StageConstants.N12_deepTrouble]: normalFactory({
        name: 'かいていの うずうずマシーン',
        description: `
            ステージが大きく２つに分かれており、
            最深部まで進むと赤ダイヤが手に入る。
            うずうずマシーンは近くにいると引き込まれてしまう。
        `,
        theme: Crash3StageThemeConstants.atlantisSeafloor,
        numberOfBoxes: 83,
        timeAttack: {
            targetTime: {
                sapphire: '1:37:00',
                gold: '1:15:12',
                platinum: '1:08:33'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.red],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N13_highTime]: normalFactory({
        name: 'アラビアの ねったいや',
        description: `
            アラビアの夜。
            窓からおばさんが火炎瓶を投げてくる。
        `,
        theme: Crash3StageThemeConstants.arabianTownscape,
        numberOfBoxes: 85,
        timeAttack: {
            targetTime: {
                sapphire: '2:12:00',
                gold: '1:04:10',
                platinum: '0:56:93'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.purple],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 19 },
        akullCourse: { presence: true }
    }),
    [Crash3StageConstants.N14_roadCrash]: normalFactory({
        name: 'じわれのハイウェイを ゴー！',
        description: `
            バイクステージ。
            コースを１周する構造になっている為、
            カーブが多く、ダッシュが維持しづらい。
            途中で見かける青い鳥は追いかけると良い事がある。
        `,
        theme: Crash3StageThemeConstants.americanCircuit,
        numberOfBoxes: 25,
        timeAttack: {
            targetTime: {
                sapphire: '1:31:00',
                gold: '1:26:70',
                platinum: '1:23:10'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N15_doubleHeader]: normalFactory({
        name: 'きょじんさぎょういん でんせつ',
        description: `
            巨人登場。
            巨人の腹でトランポリンが出来るが、攻略には一切関係ない。
        `,
        theme: Crash3StageThemeConstants.englandCastleTown,
        numberOfBoxes: 91,
        timeAttack: {
            targetTime: {
                sapphire: '1:27:00',
                gold: '1:21:12',
                platinum: '0:59:40'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 30 }
    }),
    [Crash3StageConstants.B03_nTropy]: bossFactory({
        // name: 'じかんはかせ エヌ・トロピー',
        name: 'DR.エヌ・トロピー',
        description: `
            博士自らが戦力として登場。
            その名の通り、時空間を移動して戦う。
        `,
        charactor: CharactorConstants.doctorNefariousTropy,
        physicalFitness: 3,
        powerUp: PowerUpConstants.tornadoSpinAttack,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N16_sphynxinator]: normalFactory({
        name: 'のろいの ピラミッド',
        description: `
            青ダイヤを持っているとダイヤコースが開く。
            全面タール床となっており、とても落下しやすい。
        `,
        theme: Crash3StageThemeConstants.egyptianPyramid,
        numberOfBoxes: 105,
        timeAttack: {
            targetTime: {
                sapphire: '1:42:00',
                gold: '1:22:63',
                platinum: '0:56:70'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 28 },
        diamondCourse: { typeOfDiamondList: [Crash3DiamondConstants.blue] }
    }),
    [Crash3StageConstants.N17_byeByeBlimps]: normalFactory({
        name: 'コルテックスの ひこうせん',
        description: `
            ヨーロッパの戦線。
            全ての飛行船を打ち落とすとパワーストーンがもらえる。
        `,
        theme: Crash3StageThemeConstants.frontOfEurope,
        numberOfBoxes: 11,
        timeAttack: {
            targetTime: {
                sapphire: '0:49:00',
                gold: '0:38:40',
                platinum: '0:31:50'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: false,
            coco: true
        }
    }),
    [Crash3StageConstants.N18_tellNoTales]: normalFactory({
        name: 'ゴーゴー ココマリン',
        description: `
            行動範囲が広く、箱を取り逃しやすい。
            島の周り等に箱が残っていないか注意しながら進もう。
        `,
        theme: Crash3StageThemeConstants.caribbeanSea,
        numberOfBoxes: 61,
        timeAttack: {
            targetTime: {
                sapphire: '2:12:00',
                gold: '1:35:63',
                platinum: '1:15:23'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: false,
            coco: true
        }
    }),
    [Crash3StageConstants.N19_futureFrenzy]: normalFactory(n19 = {
        name: 'まてんロードの ベルトウェイ',
        description: `
            未来都市。
            パーフェクトを狙うには分岐コースから逆走する必要がある。
        `,
        theme: Crash3StageThemeConstants.futureCity,
        numberOfBoxes: 133,
        timeAttack: {
            targetTime: {
                sapphire: '2:01:00',
                gold: '1:34:00',
                platinum: '1:19:62'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 19 },
        diamondCourse: { typeOfDiamondList: [Crash3DiamondConstants.blue] }
    }),
    [Crash3StageConstants.N20_tombWader]: normalFactory({
        name: 'きょうふ！ ナイルがわはんらん',
        description: `
            水没中のピラミッド。
            水がせりあがっている間は足場に退避しないと溺れてしまう。
        `,
        theme: Crash3StageThemeConstants.egyptianPyramid,
        numberOfBoxes: 88,
        timeAttack: {
            targetTime: {
                sapphire: '2:44:00',
                gold: '1:45:03',
                platinum: '1:24:00'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.blue],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 25 },
        akullCourse: { presence: true }
    }),
    [Crash3StageConstants.B04_nGin]: bossFactory({
        // name: 'エヌ・ジンの おニューなマシン',
        name: 'DR.エヌ・ジン',
        description: `
            マシンをひと際パワーアップさせて帰ってきた。
            ２部構成になっており、体力も多い。
            黄色く点滅している部分が弱点。
        `,
        charactor: CharactorConstants.doctorNGin,
        physicalFitness: 5,
        physicalFitness2: 7,
        powerUp: PowerUpConstants.bazooka,
        isPlayable: {
            crash: false,
            coco: true
        }
    }),
    [Crash3StageConstants.N21_goneTomorrow]: normalFactory({
        name: 'ハイテクみらいで ブッぱなせ！',
        description: `
            リンゴバズーカを試すには持って来いのステージ。
            仕掛け自体は「まてんロード」とあまり差が無い。
        `,
        theme: Crash3StageThemeConstants.futureCity,
        numberOfBoxes: 87,
        timeAttack: {
            targetTime: {
                sapphire: '2:05:00',
                gold: '1:25:60',
                platinum: '1:02:10'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 17 },
        diamondCourse: { typeOfDiamondList: [Crash3DiamondConstants.green] }
    }),
    [Crash3StageConstants.N22_orangeAsphalt]: normalFactory({
        name: 'クラッシュ とりしまりちゅう',
        description: `
            再びバイクステージ。
            「じわれのハイウェイを ゴー！」ほど急なカーブは無いが、
            タクシーの妨害行為が凶悪化している。
        `,
        theme: Crash3StageThemeConstants.americanCircuit,
        numberOfBoxes: 20,
        timeAttack: {
            targetTime: {
                sapphire: '1:38:00',
                gold: '1:33:30',
                platinum: '1:23:80'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N23_flamingPassion]: normalFactory({
        name: 'もえろ！ アラビアンナイト',
        description: `
            アラビアステージの集大成。
            緑！ブロックが無い為、ニトロ箱は自身で壊す必要がある。
        `,
        theme: Crash3StageThemeConstants.arabianTownscape,
        numberOfBoxes: 75,
        timeAttack: {
            targetTime: {
                sapphire: '1:43:00',
                gold: '1:13:10',
                platinum: '0:59:40'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.green],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 28 },
        akullCourse: { presence: true }
    }),
    [Crash3StageConstants.N24_madBombers]: normalFactory({
        name: 'げきついおう オレンジバロン',
        description: `
            旧作ではクラッシュ版飛行機ステージ。
            今作ではクラッシュ・ココのどちらでも遊べる。
            ・・・のだが、なぜか「コルテックスの ひこうせん」ではココしか選べない。
            完全にクラッシュが割りを食っている。
        `,
        theme: Crash3StageThemeConstants.frontOfEurope,
        numberOfBoxes: 11,
        timeAttack: {
            targetTime: {
                sapphire: '2:18:00',
                gold: '1:15:23',
                platinum: '0:58:13'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined
    }),
    [Crash3StageConstants.N25_bugLite]: normalFactory({
        name: 'まっクラいせき たんけんたい',
        description: `
            ピカール再登場。
            暗闇のピラミッドを進む。
        `,
        theme: Crash3StageThemeConstants.egyptianPyramid,
        numberOfBoxes: 121,
        timeAttack: {
            targetTime: {
                sapphire: '1:49:00',
                gold: '1:34:86',
                platinum: '1:14:90'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 40 },
        diamondCourse: {
            typeOfDiamondList: [
                Crash3DiamondConstants.blue,
                Crash3DiamondConstants.green,
                Crash3DiamondConstants.purple,
                Crash3DiamondConstants.yellow,
                Crash3DiamondConstants.red
            ]
        }
    }),
    [Crash3StageConstants.B05_neoCortex]: bossFactory({
        // name: 'でたぞ ネオ・コルテックス',
        name: 'DR.ネオ・コルテックス',
        description: `
            クラッシュＶＳコルテックス、アクアクＶＳウカウカの構成。
            その為、アクアクの補助は受けられない。
            仮面同士の戦いに巻き込まれないように注意しよう。
        `,
        charactor: CharactorConstants.doctorNeoCortex,
        physicalFitness: 3,
        powerUp: PowerUpConstants.speedShoes,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N26_skiCrazed]: normalFactory({
        name: 'カリブのうみは まっかっか',
        description: `
            真っ赤に染まったカリブ海。
            とにかく浮遊爆弾の数が多い。
        `,
        theme: Crash3StageThemeConstants.caribbeanSea,
        numberOfBoxes: 100,
        timeAttack: {
            targetTime: {
                sapphire: '1:19:00',
                gold: '0:53:50',
                platinum: '0:36:30'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: false,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: false,
            coco: true
        }
    }),
    [Crash3StageConstants.N27_hangEmHigh]: normalFactory({
        ...n07,
        description: `-`,
        branchSourceStage: {
            no: 7
        }
    }),
    [Crash3StageConstants.N28_area51]: normalFactory({
        name: 'なぞの えんばんＵＳＡ',
        description: `
            ＵＦＯとレース。
            今までと違い、こちらが近づくと邪魔してくる。
            タクシーもさらに凶悪化しており、クラッシュめがけて突っ込んでくる。
            視界も悪い為、タイムアタックはおおよそ覚えゲーになるだろう。
        `,
        theme: Crash3StageThemeConstants.americanCircuit,
        numberOfBoxes: 24,
        timeAttack: {
            targetTime: {
                sapphire: '2:01:00',
                gold: '1:57:80',
                platinum: '1:52:50'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: false,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash3StageConstants.N29_futureFrenzy]: normalFactory({
        ...n19,
        description: `-`,
        branchSourceStage: {
            no: 19
        }
    }),
    [Crash3StageConstants.N30_ringsOfPower]: normalFactory({
        name: 'くぐれ！ クラッシュ',
        description: `
            飛行機レース。
            全ての輪をくぐりつつ１位を目指す。
        `,
        theme: Crash3StageThemeConstants.skyRace,
        numberOfBoxes: 33,
        timeAttack: {
            targetTime: {
                sapphire: '1:30:00',
                gold: '1:11:46',
                platinum: '1:01:73'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: false,
            presenceOfRelic: true
        },
        bonusStage: undefined
    }),
    [Crash3StageConstants.N31_futureStage]: normalFactory({
        name: 'きんみらいステージ',
        description: `
            とにかく難しい。パーフェクトを目指すなら、周りをよく見よう。
        `,
        theme: Crash3StageThemeConstants.futureCity,
        numberOfBoxes: 145,
        timeAttack: {
            targetTime: {
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white, Crash3DiamondConstants.white],
            presenceOfPowerStone: false,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: true
        }
    }),
    [Crash3StageConstants.N31_hotCoco]: secretFactory({
        no: 'かくし：1',
        name: 'はっけん！ カリブのだいじけん',
        description: `
            だだっ広いカリブ海。
            決まった方向は無く、コース取りはプレイヤー自身が考える。
            スタート地点のすぐ近くにゴールがあるが、ニトロの壁に阻まれて進めない。
            ステージのどこかにある緑！ブロックを作動させて戻ってこよう。
        `,
        theme: Crash3StageThemeConstants.caribbeanSea,
        numberOfBoxes: 0,
        timeAttack: {
            targetTime: {
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: false,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: false,
            coco: true
        }
    }),
    [Crash3StageConstants.N32_eggipusRex]: secretFactory({
        no: 'かくし：2',
        name: 'はっけん！ たんけんベイビーＴ',
        description: `
            ベイビーＴのジャンプ力が活かされるステージ。
        `,
        theme: Crash3StageThemeConstants.jurassic,
        numberOfBoxes: 70,
        timeAttack: {
            targetTime: {
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash3DiamondConstants.white],
            presenceOfPowerStone: false,
            presenceOfRelic: true
        },
        bonusStage: undefined
    })
};
export default stageData;
