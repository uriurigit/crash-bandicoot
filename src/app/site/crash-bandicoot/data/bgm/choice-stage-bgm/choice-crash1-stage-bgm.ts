import { Crash1BGMThemeConstants as BGMTheme } from '../../../constants/bgm-theme.constants';
import { CharactorConstants as charactor } from '../../../constants/charactor.constants';
import { Crash1StageThemeConstants as stageTheme } from '../../../constants/stage/stage-theme.constants';
import { Crash1NormalStageEntity, Crash1BossStageEntity } from '../../../entity/stage.entity';

export const choiceCrash1NormalStageBgm = (stage: Crash1NormalStageEntity): Array<BGMTheme> => {
    switch (stage.theme) {
        case stageTheme.beach: return [ BGMTheme.nSanityBeachNearBeach,
                                        BGMTheme.nSanityBeach,
                                        BGMTheme.nSanityBeachInterior ];
        case stageTheme.jungle: return [BGMTheme.jungleRollersRollingStones];
        case stageTheme.nativeVillageWall: return [BGMTheme.theGreatGateNativeFortress];
        case stageTheme.boulderChase: return [BGMTheme.bouldersBoulderDash];
        case stageTheme.river: return [BGMTheme.upstreamUpTheCreek];
        case stageTheme.hog: return [BGMTheme.hogWildWholeHog];
        case stageTheme.ancientRuins: return [BGMTheme.theLostCitySunsetVista];
        case stageTheme.darkTemple: return [BGMTheme.templeRuins];
        case stageTheme.bridge: return [BGMTheme.roadToNowhereTheHighRoad];
        case stageTheme.factory: return [BGMTheme.heavyMachinery];
        case stageTheme.electricPipes: return [BGMTheme.cortexPower];
        case stageTheme.poweringStation: return [BGMTheme.generatorRoom];
        case stageTheme.toxicPlant: return [BGMTheme.toxicWaste];
        case stageTheme.castleExterior: return [BGMTheme.slipperyClimb];
        case stageTheme.darkHallway: return [BGMTheme.lightsOutJawsOfDarknessFumblingInTheDark];
        case stageTheme.castleInterior: return [BGMTheme.theLab];
        case stageTheme.pentHouse: return [BGMTheme.theGreatHallAlternateEndingTheme];
    }

    return [];
};

export const choiceCrash1BossStageBgm = (stage: Crash1BossStageEntity): Array<BGMTheme> => {
    switch (stage.charactor) {
        case charactor.papuPapu: return [BGMTheme.papuPapu];
        case charactor.ripperRoo: return [BGMTheme.ripperRoo];
        case charactor.koalaKong: return [BGMTheme.koalaKong];
        case charactor.pinstripePotoroo: return [BGMTheme.pinstripe];
        case charactor.doctorNitrusBrio: return [BGMTheme.nitrusBrio];
        case charactor.doctorNeoCortex: return [BGMTheme.drNeoCortex];
    }

    return [];
};
