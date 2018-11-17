import { ConciseEvaluationConstants } from '../../../constants/concise-evaluation.constants';
import { DifficultyConstants } from '../../../constants/difficulty.constants';
import { Crash3StageConstants } from '../../../constants/stage/stage.constants';
import {
    BossStageEvaluationEntity,
    NormalStageEvaluationEntity
} from '../../../entity/stage.entity';

const { first, second, third, fourth, fifth } = DifficultyConstants;
const { veryGood, good, soso, bad, veryBad } = ConciseEvaluationConstants;

const evaluationData = {
    [Crash3StageConstants.N01_toadVillage]: {
        difficulty: first,
        difficultyOfTimeAttack: first,
        conciseEvaluation: good,
        description: 'こけこけ'
    },
    [Crash3StageConstants.B01_tinyTiger]: {
        difficulty: first,
        conciseEvaluation: good,
        description: 'ライオン'
    }
};
export default evaluationData;
