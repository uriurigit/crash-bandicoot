import { ConciseEvaluationConstants } from '../../../constants/concise-evaluation.constants';
import { DifficultyConstants } from '../../../constants/difficulty.constants';
import { Crash1StageConstants } from '../../../constants/stage/stage.constants';
import {
    BossStageEvaluationEntity,
    NormalStageEvaluationEntity
} from '../../../entity/stage.entity';

const { first, second, third, fourth, fifth } = DifficultyConstants;
const { veryGood, good, soso, bad, veryBad } = ConciseEvaluationConstants;

const evaluationData = {
    [Crash1StageConstants.N01_nSanityBeach]: {
        difficulty: first,
        difficultyOfTimeAttack: first,
        conciseEvaluation: good,
        description: 'いい'
    },
    [Crash1StageConstants.B01_papuPapu]: {
        difficulty: first,
        conciseEvaluation: good,
        description: 'ふとってる'
    }
};
export default evaluationData;
