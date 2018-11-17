import {
    Crash1StageThemeConstants,
    Crash2StageThemeConstants,
    Crash3StageThemeConstants
} from '../../constants/stage/stage-theme.constants';
import {
    isCrash1Stage,
    isCrash2Stage,
    isCrash3Stage,
    isNormalStage
} from '../../modules/stage-type-check';

export const stageThemeData = (stage) => {
    if (isNormalStage(stage)) {
        if (isCrash1Stage(stage)) { return crash1StageThemeData[stage.theme]; }
        if (isCrash2Stage(stage)) { return crash2StageThemeData[stage.theme]; }
        if (isCrash3Stage(stage)) { return crash3StageThemeData[stage.theme]; }
    }

    return undefined;
};

export const crash1StageThemeData = {
    [Crash1StageThemeConstants.beach]: { name: 'ビーチ' },
    [Crash1StageThemeConstants.jungle]: { name: 'ジャングル' },
    [Crash1StageThemeConstants.nativeVillageWall]: { name: '原住民の砦' },
    [Crash1StageThemeConstants.boulderChase]: { name: '大岩' },
    [Crash1StageThemeConstants.river]: { name: '川' },
    [Crash1StageThemeConstants.hog]: { name: 'イノシシ' },
    [Crash1StageThemeConstants.ancientRuins]: { name: '遺跡' },
    [Crash1StageThemeConstants.darkTemple]: { name: '神殿' },
    [Crash1StageThemeConstants.bridge]: { name: '吊り橋' },
    [Crash1StageThemeConstants.factory]: { name: '工場' },
    [Crash1StageThemeConstants.electricPipes]: { name: '発電所' },
    [Crash1StageThemeConstants.poweringStation]: { name: '発電室' },
    [Crash1StageThemeConstants.toxicPlant]: { name: 'ドラム缶' },
    [Crash1StageThemeConstants.castleExterior]: { name: '古城' },
    [Crash1StageThemeConstants.darkHallway]: { name: '暗闇' },
    [Crash1StageThemeConstants.castleInterior]: { name: '研究所' },
    [Crash1StageThemeConstants.pentHouse]: { name: 'ダイヤ' }
};
export const crash2StageThemeData = {
    [Crash2StageThemeConstants.jungle]: { name: 'ジャングル' },
    [Crash2StageThemeConstants.snow]: { name: '雪山' },
    [Crash2StageThemeConstants.stream]: { name: '川' },
    [Crash2StageThemeConstants.chase]: { name: '雪玉' },
    [Crash2StageThemeConstants.polar]: { name: 'しろくま' },
    [Crash2StageThemeConstants.sewer]: { name: '下水道' },
    [Crash2StageThemeConstants.ruins]: { name: '廃墟' },
    [Crash2StageThemeConstants.mountain]: { name: '山岳' },
    [Crash2StageThemeConstants.machinery]: { name: '発電所' },
    [Crash2StageThemeConstants.jetPack]: { name: '無重力' }
};
export const crash3StageThemeData = {
    [Crash3StageThemeConstants.englandCastleTown]: { name: 'イギリスの城下町' },
    [Crash3StageThemeConstants.atlantisSeafloor]: { name: 'アトランティスの海底' },
    [Crash3StageThemeConstants.greatWallOfChina]: { name: '中国の万里の長城' },
    [Crash3StageThemeConstants.jurassic]: { name: 'ジュラ紀' },
    [Crash3StageThemeConstants.caribbeanSea]: { name: 'カリブ海' },
    [Crash3StageThemeConstants.arabianTownscape]: { name: 'アラビアの街並み' },
    [Crash3StageThemeConstants.americanCircuit]: { name: 'アメリカのサーキット' },
    [Crash3StageThemeConstants.egyptianPyramid]: { name: 'エジプトのピラミッド' },
    [Crash3StageThemeConstants.frontOfEurope]: { name: 'ヨーロッパの戦線' },
    [Crash3StageThemeConstants.futureCity]: { name: '未来都市' },
    [Crash3StageThemeConstants.skyRace]: { name: 'スカイレース' }
};
