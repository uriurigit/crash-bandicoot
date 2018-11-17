
export const isBossStage = (stage): boolean => stage.typeOfBoss;
export const isNormalStage = (stage): boolean => !isBossStage(stage);

export const isCrash1Stage = (stage): boolean => stage.typeOfCrash1;
export const isCrash2Stage = (stage): boolean => stage.typeOfCrash2;
export const isCrash3Stage = (stage): boolean => stage.typeOfCrash3;

export const isBranching = (stage): boolean => stage.branchSourceStage;
