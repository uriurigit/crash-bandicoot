import {
    Crash1NormalStageEntity,
    Crash2NormalStageEntity,
    Crash3NormalStageEntity,
    Crash1BossStageEntity,
    Crash2BossStageEntity,
    Crash3BossStageEntity
} from './stage.entity';
import { Crash1DiamondConstants, Crash2DiamondConstants, Crash3DiamondConstants } from '../constants/diamond.constants';

export const crash1NormalStageEntityFactory = (normalStageEntity: any): Crash1NormalStageEntity => {
    return {
        ...baseNormalStageEntityFactory(),
        isSecret: false,
        compensation: {
            typeOfDiamondList: [Crash1DiamondConstants.white],
            presenceOfKey: false,
            presenceOfRelic: true
        },
        tawnaStage: undefined,
        brioStage: undefined,
        cortexStage: undefined,
        diamondCourse: undefined,
        ...normalStageEntity,
        typeOfCrash1: true
    };
};

export const crash2NormalStageEntityFactory = (normalStageEntity: any): Crash2NormalStageEntity => {
    return {
        ...renewalNormalStageEntityFactory(Crash2DiamondConstants.white),
        ...normalStageEntity,
        typeOfCrash2: true
    };
};

export const crash3NormalStageEntityFactory = (normalStageEntity: any): Crash3NormalStageEntity => {
    return {
        ...renewalNormalStageEntityFactory(Crash3DiamondConstants.white),
        ...normalStageEntity,
        typeOfCrash3: true
    };
};

export const crash1BossStageEntityFactory = (bossStageEntity: any): Crash1BossStageEntity => {
    return {
        ...bossStageEntityFactory(),
        ...bossStageEntity,
        typeOfBoss: true,
        typeOfCrash1: true
    };
};

export const crash2BossStageEntityFactory = (bossStageEntity: any): Crash2BossStageEntity => {
    return {
        ...bossStageEntityFactory(),
        ...bossStageEntity,
        typeOfBoss: true,
        typeOfCrash2: true
    };
};

export const crash3BossStageEntityFactory = (bossStageEntity: any): Crash3BossStageEntity => {
    return {
        ...bossStageEntityFactory(),
        physicalFitness2: undefined,
        powerUp: undefined,
        ...bossStageEntity,
        typeOfBoss: true,
        typeOfCrash3: true,
    };
};

const baseStageEntityFactory = (): any => {
    return {
        no: 0,
        name: undefined,
        notationOnTheGame: undefined,
        isPlayable: {
            crash: true,
            coco: true
        },
        description: undefined,
        imageList: []
    };
};

const bossStageEntityFactory = (): any => {
    return {
        ...baseStageEntityFactory(),
        charactor: undefined,
        physicalFitness: 0,
        evaluation: {
            difficulty: undefined,
            conciseEvaluation: undefined,
            description: undefined
        }
    };
};

const baseNormalStageEntityFactory = (): any => {
    return {
        ...baseStageEntityFactory(),
        theme: undefined,
        numberOfBoxes: 0,
        timeAttack: {
            targetTime: {
                sapphire: '',
                gold: '',
                platinum: ''
            },
            developerRecords: ''
        },
        evaluation: {
            difficulty: undefined,
            difficultyOfTimeAttack: undefined,
            conciseEvaluation: undefined,
            description: undefined
        }
    };
};

const renewalNormalStageEntityFactory = (diamondConstants: any): any => {
    return {
        ...baseNormalStageEntityFactory(),
        branchSourceStage: undefined,
        isSecret: false,
        compensation: {
            typeOfDiamondList: [diamondConstants],
            presenceOfPowerStone: true,
            presenceOfRelic: true
        },
        bonusStage: undefined,
        diamondCourse: undefined,
        akullCourse: undefined
    };
};
