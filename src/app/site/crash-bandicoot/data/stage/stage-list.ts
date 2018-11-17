import crash1BasicData from './basic/crash1-basic-data';
import crash2BasicData from './basic/crash2-basic-data';
import crash3BasicData from './basic/crash3-basic-data';
import crash1EvaluationData from './evaluation/crash1-evaluation-data';
import crash2EvaluationData from './evaluation/crash2-evaluation-data';
import crash3EvaluationData from './evaluation/crash3-evaluation-data';
import {
    Crash1StageConstants,
    Crash2StageConstants,
    Crash3StageConstants
} from '../../constants/stage/stage.constants';
import {
    Crash1WorldConstants,
    Crash2WorldConstants,
    Crash3WorldConstants,
    crash1WorldConstantsList,
    crash2WorldConstantsList,
    crash3WorldConstantsList
} from '../../constants/stage/world.constants';
import {
    crash1WorldDistinction,
    crash2WorldDistinction,
    crash3WorldDistinction
} from '../../constants/stage/world-distinction';
import {
    Crash1NormalStageEntity,
    Crash2NormalStageEntity,
    Crash3NormalStageEntity,
    Crash1BossStageEntity,
    Crash2BossStageEntity,
    Crash3BossStageEntity
} from '../../entity/stage.entity';

const mergeEvaluationToBasicData = (basicData, evaluationData, filter: (key) => {} = () => true) => {
    return Object.keys(basicData)
        .filter(filter)
        .map((key) => {
            const basic = basicData[key];
            const evaluation = evaluationData[key];
            if (evaluation) basic.evaluation = evaluation;

            return basic;
        });
};

const crash1MergeEvaluationToBasicData = (worldList, basicData, evaluationData, worldDistinction: (worldConstant) => Array<any>) => {
    const stageData = {};

    worldList.forEach((worldKey) => {
        stageData[worldKey] = mergeEvaluationToBasicData(
            basicData,
            evaluationData,
            (stageKey) => 0 <= worldDistinction(worldKey).indexOf(Number(stageKey))
        );
    });

    return stageData;
};

export const crash1StageData = crash1MergeEvaluationToBasicData(
    crash1WorldConstantsList as Array<Crash1WorldConstants>,
    crash1BasicData,
    crash1EvaluationData,
    crash1WorldDistinction
);

export const crash2StageData = crash1MergeEvaluationToBasicData(
    crash2WorldConstantsList as Array<Crash2WorldConstants>,
    crash2BasicData,
    crash2EvaluationData,
    crash2WorldDistinction
);

export const crash3StageData = crash1MergeEvaluationToBasicData(
    crash3WorldConstantsList as Array<Crash3WorldConstants>,
    crash3BasicData,
    crash3EvaluationData,
    crash3WorldDistinction
);

export const stageList = [
    mergeEvaluationToBasicData(crash1BasicData, crash1EvaluationData),
    mergeEvaluationToBasicData(crash2BasicData, crash2EvaluationData),
    mergeEvaluationToBasicData(crash3BasicData, crash3EvaluationData)
];
