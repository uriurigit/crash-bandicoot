import { ConciseEvaluationConstants } from '../../../constants/concise-evaluation.constants';
import { DifficultyConstants } from '../../../constants/difficulty.constants';
import { Crash2StageConstants } from '../../../constants/stage/stage.constants';
import {
    BossStageEvaluationEntity,
    NormalStageEvaluationEntity
} from '../../../entity/stage.entity';

const { first, second, third, fourth, fifth } = DifficultyConstants;
const { veryGood, good, soso, bad, veryBad } = ConciseEvaluationConstants;

const evaluationData = {
    [Crash2StageConstants.N01_turtleWoods]: {
        difficulty: first,
        difficultyOfTimeAttack: first,
        conciseEvaluation: good,
        description: 'あめ'
    },
    [Crash2StageConstants.B01_ripperRoo]: {
        difficulty: first,
        conciseEvaluation: good,
        description: 'いかれた'
    }
};
export default evaluationData;
