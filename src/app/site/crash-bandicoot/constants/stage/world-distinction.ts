import {
    Crash1WorldConstants,
    Crash2WorldConstants,
    Crash3WorldConstants
} from './world.constants';
import {
    Crash1StageConstants,
    Crash2StageConstants,
    Crash3StageConstants
} from './stage.constants';

export const crash1WorldDistinction = (worldConstant: Crash1WorldConstants): Array<any> => {
    switch (worldConstant) {
        case Crash1WorldConstants.nSanityIsland:
            return [
                Crash1StageConstants.N01_nSanityBeach,
                Crash1StageConstants.N02_jungleRollers,
                Crash1StageConstants.N03_theGreatGate,
                Crash1StageConstants.N04_boulders,
                Crash1StageConstants.N05_upstream,
                Crash1StageConstants.B01_papuPapu,
                Crash1StageConstants.N06_rollingStones,
                Crash1StageConstants.N07_hogWild,
                Crash1StageConstants.N08_nativeFortress
            ];
        case Crash1WorldConstants.wumpaIsland:
            return [
                Crash1StageConstants.N09_upTheCreek,
                Crash1StageConstants.B02_ripperRoo,
                Crash1StageConstants.N10_theLostCity,
                Crash1StageConstants.N11_templeRuins,
                Crash1StageConstants.N12_roadToNowhere,
                Crash1StageConstants.N13_boulderDash,
                Crash1StageConstants.N14_wholeHog,
                Crash1StageConstants.N15_sunsetVista,
                Crash1StageConstants.B03_koalaKong
            ];
        case Crash1WorldConstants.cortexIsland:
            return [
                Crash1StageConstants.N16_heavyMachinery,
                Crash1StageConstants.N17_cortexPower,
                Crash1StageConstants.N18_generatorRoom,
                Crash1StageConstants.N19_toxicWaste,
                Crash1StageConstants.B04_pinstripe,
                Crash1StageConstants.N20_theHighRoad,
                Crash1StageConstants.N21_slipperyClimb,
                Crash1StageConstants.N22_lightsOut,
                Crash1StageConstants.N23_fumblingInTheDark,
                Crash1StageConstants.N24_jawsOfDarkness,
                Crash1StageConstants.N25_castleMachinery,
                Crash1StageConstants.B05_nitrusBrio,
                Crash1StageConstants.N26_theLab,
                Crash1StageConstants.N27_TheGreatHall,
                Crash1StageConstants.B06_drNeoCortex
            ];
        case Crash1WorldConstants.dlc:
            return [
                Crash1StageConstants.N28_stormyAscent
            ];
        default:
            return [];
    }
};

export const crash2WorldDistinction = (worldConstant: Crash2WorldConstants): Array<Crash2StageConstants> => {
    switch (worldConstant) {
        case Crash2WorldConstants.jungleWarpRoom:
            return [
                Crash2StageConstants.N01_turtleWoods,
                Crash2StageConstants.N02_snowGo,
                Crash2StageConstants.N03_hangEight,
                Crash2StageConstants.N04_thePits,
                Crash2StageConstants.N05_crashDash,
                Crash2StageConstants.B01_ripperRoo
            ];
        case Crash2WorldConstants.iceWarpRoom:
            return [
                Crash2StageConstants.N06_snowBiz,
                Crash2StageConstants.N07_airCrash,
                Crash2StageConstants.N08_bearIt,
                Crash2StageConstants.N09_crashCrush,
                Crash2StageConstants.N10_theEelDeal,
                Crash2StageConstants.B02_komodoBrothers
            ];
        case Crash2WorldConstants.sewerWarpRoom:
            return [
                Crash2StageConstants.N11_plantFood,
                Crash2StageConstants.N12_sewerOrLater,
                Crash2StageConstants.N13_bearDown,
                Crash2StageConstants.N14_roadToRuin,
                Crash2StageConstants.N15_unBearable,
                Crash2StageConstants.B03_tinyTiger
            ];
        case Crash2WorldConstants.alpineWarpRoom:
            return [
                Crash2StageConstants.N16_hanginOut,
                Crash2StageConstants.N17_digginIt,
                Crash2StageConstants.N18_coldHardCrash,
                Crash2StageConstants.N19_ruination,
                Crash2StageConstants.N20_beeHaving,
                Crash2StageConstants.B04_drNGin
            ];
        case Crash2WorldConstants.highTechWarpRoom:
            return [
                Crash2StageConstants.N21_pistonItAway,
                Crash2StageConstants.N22_rockIt,
                Crash2StageConstants.N23_nightFight,
                Crash2StageConstants.N24_packAttack,
                Crash2StageConstants.N25_spacedOut,
                Crash2StageConstants.B05_drNeoCortex
            ];
        case Crash2WorldConstants.secretWarpRoom:
            return [
                Crash2StageConstants.S01_airCrash,
                Crash2StageConstants.S02_snowGo,
                Crash2StageConstants.S03_roadToRuin,
                Crash2StageConstants.N26_totallyBear,
                Crash2StageConstants.N27_totallyFly
            ];
        default:
            return [];
    }
};

export const crash3WorldDistinction = (worldConstant: Crash3WorldConstants): Array<Crash3StageConstants> => {
    switch (worldConstant) {
        case Crash3WorldConstants.medieval:
            return [
                Crash3StageConstants.N01_toadVillage,
                Crash3StageConstants.N02_underPressure,
                Crash3StageConstants.N03_orientExpress,
                Crash3StageConstants.N04_boneYard,
                Crash3StageConstants.N05_makinWaves,
                Crash3StageConstants.B01_tinyTiger
            ];
        case Crash3WorldConstants.arabian:
            return [
                Crash3StageConstants.N06_geeWiz,
                Crash3StageConstants.N07_hangEmHigh,
                Crash3StageConstants.N08_hogRide,
                Crash3StageConstants.N09_tombTime,
                Crash3StageConstants.N10_midnightRun,
                Crash3StageConstants.B02_dingodile
            ];
        case Crash3WorldConstants.oriental:
            return [
                Crash3StageConstants.N11_dinoMight,
                Crash3StageConstants.N12_deepTrouble,
                Crash3StageConstants.N13_highTime,
                Crash3StageConstants.N14_roadCrash,
                Crash3StageConstants.N15_doubleHeader,
                Crash3StageConstants.B03_nTropy
            ];
        case Crash3WorldConstants.egyptian:
            return [
                Crash3StageConstants.N16_sphynxinator,
                Crash3StageConstants.N17_byeByeBlimps,
                Crash3StageConstants.N18_tellNoTales,
                Crash3StageConstants.N19_futureFrenzy,
                Crash3StageConstants.N20_tombWader,
                Crash3StageConstants.B04_nGin
            ];
        case Crash3WorldConstants.future:
            return [
                Crash3StageConstants.N21_goneTomorrow,
                Crash3StageConstants.N22_orangeAsphalt,
                Crash3StageConstants.N23_flamingPassion,
                Crash3StageConstants.N24_madBombers,
                Crash3StageConstants.N25_bugLite,
                Crash3StageConstants.B05_neoCortex
            ];
        case Crash3WorldConstants.neoCorSystem:
            return [
                Crash3StageConstants.N26_skiCrazed,
                Crash3StageConstants.N27_hangEmHigh,
                Crash3StageConstants.N28_area51,
                Crash3StageConstants.N29_futureFrenzy,
                Crash3StageConstants.N30_ringsOfPower
            ];
        case Crash3WorldConstants.hiddenLevels:
            return [
                Crash3StageConstants.N31_hotCoco,
                Crash3StageConstants.N32_eggipusRex
            ];
        case Crash3WorldConstants.dlc:
            return [
                Crash3StageConstants.N31_futureStage
            ];
        default:
            return [];
    }
};
