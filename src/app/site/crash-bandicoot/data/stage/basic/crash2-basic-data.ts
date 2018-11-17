import { CharactorConstants } from '../../../constants/charactor.constants';
import { Crash2DiamondConstants } from '../../../constants/diamond.constants';
import { Crash2StageConstants } from '../../../constants/stage/stage.constants';
import { Crash2StageThemeConstants } from '../../../constants/stage/stage-theme.constants';
import {
    Crash2BossStageEntity,
    Crash2NormalStageEntity
} from '../../../entity/stage.entity';
import {
    crash2BossStageEntityFactory,
    crash2NormalStageEntityFactory
} from '../../../entity/stage-factory';

let index = 0;
let bossIndex = 0;

const normalFactory = (data) => {
    data.no = ++index;
    return crash2NormalStageEntityFactory(data);
};

const bossFactory = (data) => {
    data.no = ++bossIndex;
    return crash2BossStageEntityFactory(data);
};

let n02;
let n07;
let n14;

const stageData = {
    [Crash2StageConstants.N01_turtleWoods]: normalFactory({
        name: 'あめの ジャングル',
        description: '',
        theme: Crash2StageThemeConstants.jungle,
        numberOfBoxes: 62,
        timeAttack: {
            targetTime: {
                sapphire: '1:15:00',
                gold: '0:56:87',
                platinum: '0:45:47'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.blue],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 5 }
    }),
    [Crash2StageConstants.N02_snowGo]: normalFactory(n02 = {
        name: 'ツルピカの ゆきやま',
        theme: Crash2StageThemeConstants.snow,
        numberOfBoxes: 74,
        timeAttack: {
            targetTime: {
                sapphire: '1:10:00',
                gold: '0:49:64',
                platinum: '0:42:88'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.red],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 10 }
    }),
    [Crash2StageConstants.N03_hangEight]: normalFactory({
        name: 'テケテケ かわのぼり',
        theme: Crash2StageThemeConstants.stream,
        numberOfBoxes: 74,
        timeAttack: {
            targetTime: {
                sapphire: '1:20:00',
                gold: '1:02:93',
                platinum: '0:56:24'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 11 },
        diamondCourse: { typeOfDiamondList: [Crash2DiamondConstants.blue] }
    }),
    [Crash2StageConstants.N04_thePits]: normalFactory({
        name: 'とりが やってくる',
        theme: Crash2StageThemeConstants.jungle,
        numberOfBoxes: 53,
        timeAttack: {
            targetTime: {
                sapphire: '1:40:00',
                gold: '1:11:51',
                platinum: '1:00:34'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 23 }
    }),
    [Crash2StageConstants.N05_crashDash]: normalFactory({
        name: 'ゆきだま ゴロゴロ',
        theme: Crash2StageThemeConstants.chase,
        numberOfBoxes: 44,
        timeAttack: {
            targetTime: {
                sapphire: '1:33:00',
                gold: '1:07:22',
                platinum: '0:59:68'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 17 }
    }),
    [Crash2StageConstants.B01_ripperRoo]: bossFactory({
        name: 'リパー・ルー',
        description: '',
        charactor: CharactorConstants.ripperRoo,
        physicalFitness: 3,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N06_snowBiz]: normalFactory({
        name: 'ゆきやまに えんばん！？',
        theme: Crash2StageThemeConstants.snow,
        numberOfBoxes: 125,
        timeAttack: {
            targetTime: {
                sapphire: '1:31:00',
                gold: '1:09:82',
                platinum: '0:51:97'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 18 },
        diamondCourse: { typeOfDiamondList: [Crash2DiamondConstants.red] }
    }),
    [Crash2StageConstants.N07_airCrash]: normalFactory(n07 = {
        name: 'ぶっとび サーフィン',
        theme: Crash2StageThemeConstants.stream,
        numberOfBoxes: 102,
        timeAttack: {
            targetTime: {
                sapphire: '1:27:00',
                gold: '1:01:01',
                platinum: '0:52:75'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 8 },
        akullCourse: { presence: true }
    }),
    [Crash2StageConstants.N08_bearIt]: normalFactory({
        name: 'しろくま ダッシュ',
        theme: Crash2StageThemeConstants.polar,
        numberOfBoxes: 45,
        timeAttack: {
            targetTime: {
                sapphire: '1:05:00',
                gold: '0:48:07',
                platinum: '0:44:82'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N09_crashCrush]: normalFactory({
        name: 'ゆきだま スライディン',
        theme: Crash2StageThemeConstants.chase,
        numberOfBoxes: 57,
        timeAttack: {
            targetTime: {
                sapphire: '1:57:00',
                gold: '1:19:83',
                platinum: '1:07:87'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 13 },
    }),
    [Crash2StageConstants.N10_theEelDeal]: normalFactory({
        name: 'ジャブジャブ ちかどう',
        theme: Crash2StageThemeConstants.sewer,
        numberOfBoxes: 79,
        timeAttack: {
            targetTime: {
                sapphire: '1:48:00',
                gold: '1:08:46',
                platinum: '0:58:90'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.green],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 14 },
    }),
    [Crash2StageConstants.B02_komodoBrothers]: bossFactory({
        name: 'コモドきょうだい',
        description: '',
        charactor: CharactorConstants.komodoBrothers,
        physicalFitness: 3,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N11_plantFood]: normalFactory({
        name: 'ひとくいばな ちたい',
        theme: Crash2StageThemeConstants.stream,
        numberOfBoxes: 53,
        timeAttack: {
            targetTime: {
                sapphire: '1:59:00',
                gold: '1:03:31',
                platinum: '0:57:28'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.yellow],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 12 },
    }),
    [Crash2StageConstants.N12_sewerOrLater]: normalFactory({
        name: 'ボワボワ さぎょういん',
        theme: Crash2StageThemeConstants.sewer,
        numberOfBoxes: 57,
        timeAttack: {
            targetTime: {
                sapphire: '1:04:00',
                gold: '0:41:29',
                platinum: '0:34:00'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 16 },
        diamondCourse: { typeOfDiamondList: [Crash2DiamondConstants.yellow] }
    }),
    [Crash2StageConstants.N13_bearDown]: normalFactory({
        name: 'しろくま だいジャンプ',
        theme: Crash2StageThemeConstants.polar,
        numberOfBoxes: 42,
        timeAttack: {
            targetTime: {
                sapphire: '1:03:00',
                gold: '0:49:85',
                platinum: '0:46:14'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N14_roadToRuin]: normalFactory(n14 = {
        name: 'まよいの はいきょ',
        theme: Crash2StageThemeConstants.ruins,
        numberOfBoxes: 89,
        timeAttack: {
            targetTime: {
                sapphire: '1:13:00',
                gold: '0:51:78',
                platinum: '0:39:04'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 13 },
        akullCourse: { presence: true }
    }),
    [Crash2StageConstants.N15_unBearable]: normalFactory({
        name: 'にげろや パパぐま',
        theme: Crash2StageThemeConstants.chase,
        numberOfBoxes: 58,
        timeAttack: {
            targetTime: {
                sapphire: '2:24:00',
                gold: '1:35:53',
                platinum: '1:26:10'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 12 },
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.B03_tinyTiger]: bossFactory({
        name: 'タイニータイガー',
        description: '',
        charactor: CharactorConstants.tinyTiger,
        physicalFitness: 3,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N16_hanginOut]: normalFactory({
        name: 'ぶらさがりん ちかどう',
        theme: Crash2StageThemeConstants.sewer,
        numberOfBoxes: 93,
        timeAttack: {
            targetTime: {
                sapphire: '1:25:00',
                gold: '1:03:82',
                platinum: '0:56:23'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 35 },
    }),
    [Crash2StageConstants.N17_digginIt]: normalFactory({
        name: 'ばくふん ちゅういほう',
        theme: Crash2StageThemeConstants.mountain,
        numberOfBoxes: 95,
        timeAttack: {
            targetTime: {
                sapphire: '2:40:00',
                gold: '1:48:12',
                platinum: '1:36:77'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 26 },
        akullCourse: { presence: true }
    }),
    [Crash2StageConstants.N18_coldHardCrash]: normalFactory({
        name: 'ゆきやまは つづくよ',
        theme: Crash2StageThemeConstants.snow,
        numberOfBoxes: 155,
        timeAttack: {
            targetTime: {
                sapphire: '2:36:00',
                gold: '2:06:07',
                platinum: '1:35:99'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 31 },
        akullCourse: { presence: true }
    }),
    [Crash2StageConstants.N19_ruination]: normalFactory({
        name: 'からくりの はいきょ',
        theme: Crash2StageThemeConstants.ruins,
        numberOfBoxes: 84,
        timeAttack: {
            targetTime: {
                sapphire: '1:58:00',
                gold: '1:19:36',
                platinum: '1:04:36'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 49 },
        diamondCourse: { typeOfDiamondList: [Crash2DiamondConstants.green] }
    }),
    [Crash2StageConstants.N20_beeHaving]: normalFactory({
        name: 'もぐれ！ クラッシュ',
        theme: Crash2StageThemeConstants.mountain,
        numberOfBoxes: 94,
        timeAttack: {
            targetTime: {
                sapphire: '2:00:00',
                gold: '1:22:00',
                platinum: '1:13:42'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.purple],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 34 },
    }),
    [Crash2StageConstants.B04_drNGin]: bossFactory({
        name: 'DR.エヌ・ジン',
        description: '',
        charactor: CharactorConstants.doctorNGin,
        physicalFitness: 5,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N21_pistonItAway]: normalFactory({
        name: 'ピストン はつでんしょ',
        theme: Crash2StageThemeConstants.machinery,
        numberOfBoxes: 69,
        timeAttack: {
            targetTime: {
                sapphire: '1:57:00',
                gold: '1:23:33',
                platinum: '1:16:03'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 24 },
        akullCourse: { presence: true }
    }),
    [Crash2StageConstants.N22_rockIt]: normalFactory({
        name: 'ロケットで いこう',
        theme: Crash2StageThemeConstants.jetPack,
        numberOfBoxes: 39,
        timeAttack: {
            targetTime: {
                sapphire: '1:15:00',
                gold: '0:59:55',
                platinum: '0:53:44'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N23_nightFight]: normalFactory({
        name: 'まっくら クラッシュ',
        theme: Crash2StageThemeConstants.jungle,
        numberOfBoxes: 46,
        timeAttack: {
            targetTime: {
                sapphire: '1:45:00',
                gold: '1:10:98',
                platinum: '1:04:49'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 29 },
        akullCourse: { presence: true }
    }),
    [Crash2StageConstants.N24_packAttack]: normalFactory({
        name: 'むじゅうりょくで ゴー',
        theme: Crash2StageThemeConstants.jetPack,
        numberOfBoxes: 45,
        timeAttack: {
            targetTime: {
                sapphire: '1:22:00',
                gold: '1:08:29',
                platinum: '0:58:25'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N25_spacedOut]: normalFactory({
        name: 'カラーダイヤの しれん',
        theme: Crash2StageThemeConstants.machinery,
        numberOfBoxes: 60,
        timeAttack: {
            targetTime: {
                sapphire: '2:03:00',
                gold: '1:09:24',
                platinum: '0:56:95'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white, Crash2DiamondConstants.white],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: { numberOfBoxes: 31 },
        diamondCourse: {
            typeOfDiamondList: [
                Crash2DiamondConstants.blue,
                Crash2DiamondConstants.green,
                Crash2DiamondConstants.yellow,
                Crash2DiamondConstants.red,
                Crash2DiamondConstants.purple
            ]
        }
    }),
    [Crash2StageConstants.B05_drNeoCortex]: bossFactory({
        name: 'DR.ネオ・コルテックス',
        description: '',
        charactor: CharactorConstants.doctorNeoCortex,
        physicalFitness: 3,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.S01_airCrash]: crash2NormalStageEntityFactory({
        ...n07,
        no: undefined,
        branchSourceStage: {
            no: 7
        }
    }),
    [Crash2StageConstants.S02_snowGo]: crash2NormalStageEntityFactory({
        ...n02,
        no: undefined,
        branchSourceStage: {
            no: 2
        }
    }),
    [Crash2StageConstants.S03_roadToRuin]: crash2NormalStageEntityFactory({
        ...n14,
        no: undefined,
        branchSourceStage: {
            no: 14
        }
    }),
    [Crash2StageConstants.N26_totallyBear]: normalFactory({
        name: 'ばくそう オールナイト',
        theme: Crash2StageThemeConstants.polar,
        numberOfBoxes: 38,
        timeAttack: {
            targetTime: {
                sapphire: '0:58:00',
                gold: '0:47:36',
                platinum: '0:41:63'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: false,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        isPlayable: {
            crash: true,
            coco: false
        }
    }),
    [Crash2StageConstants.N27_totallyFly]: normalFactory({
        name: 'まっくらクラッシュ ２',
        theme: Crash2StageThemeConstants.jungle,
        numberOfBoxes: 44,
        timeAttack: {
            targetTime: {
                sapphire: '1:21:00',
                gold: '1:02:08',
                platinum: '0:54:75'
            },
            topRecords: '44:44:44',
            developerRecords: '44:44:44',
        },
        compensation: {
            typeOfDiamondList: [Crash2DiamondConstants.white],
            presenceOfPowerStone: false,
            presenceOfRelic: true
        },
        bonusStage: undefined
    }),
};
export default stageData;
