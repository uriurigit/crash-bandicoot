import { CharactorConstants } from '../constants/charactor.constants';
import { ConciseEvaluationConstants } from '../constants/concise-evaluation.constants';
import { Crash1DiamondConstants, Crash2DiamondConstants, Crash3DiamondConstants } from '../constants/diamond.constants';
import { DifficultyConstants } from '../constants/difficulty.constants';
import { Crash1StageThemeConstants, Crash2StageThemeConstants, Crash3StageThemeConstants } from '../constants/stage/stage-theme.constants';
import { PowerUpConstants } from '../constants/power-up.constants';

interface BaseStageEntity {
    /** ステージNo. */
    no: number;
    /** ステージ名 */
    name: string;
    /** ゲーム上の表記 */
    notationOnTheGame: string;
    /** 操作可能か */
    isPlayable: {
        /** クラッシュが操作可能か */
        crash: boolean;
        /** ココが操作可能か */
        coco: boolean;
    };
    /** 説明 */
    description: string;
    /** イメージ一覧 */
    imageList: Array<string>;
}

interface BaseNormalStageEntity<ThemeConstants> extends BaseStageEntity {
    /** テーマ */
    theme: ThemeConstants;
    /** 箱の数 */
    numberOfBoxes: number;
    /** タイムアタック */
    timeAttack: TimeAttackOfStageEntity;
    /** 評価 */
    evaluation: NormalStageEvaluationEntity;
}

interface BaseBossStageEntity extends BaseStageEntity {
    /** タイプ：ボス */
    typeOfBoss: boolean;

    /** ボスキャラクター */
    charactor: CharactorConstants;
    /** 体力 */
    physicalFitness: number;
    /** 評価 */
    evaluation: BossStageEvaluationEntity;
}

export interface NormalStageEvaluationEntity {
    /** 難易度 */
    difficulty: DifficultyConstants;
    /** タイムアタックの難易度 */
    difficultyOfTimeAttack: DifficultyConstants;
    /** 簡潔な評価 */
    conciseEvaluation: ConciseEvaluationConstants;
    /** 説明 */
    description: string;
}

export interface BossStageEvaluationEntity {
    /** 難易度 */
    difficulty: DifficultyConstants;
    /** 簡潔な評価 */
    conciseEvaluation: ConciseEvaluationConstants;
    /** 説明 */
    description: string;
}

export interface Crash1NormalStageEntity extends BaseNormalStageEntity<Crash1StageThemeConstants> {
    /** タイプ：クラッシュ1 */
    typeOfCrash1: boolean;

    /** 隠しステージか否か */
    isSecret: boolean;

    /** 報酬 */
    compensation: {
        /** ダイヤの種類 */
        typeOfDiamondList: Array<Crash1DiamondConstants>;
        /** 鍵の有無 */
        presenceOfKey: boolean;
        /** レリックの有無 */
        presenceOfRelic: boolean;
    };

    /** タウナステージ */
    tawnaStage: BonusStageEntity;
    /** ブリオステージ */
    brioStage: BonusStageEntity;
    /** コルテックスステージ */
    cortexStage: BonusStageEntity;

    /** ダイヤコース */
    diamondCourse: DiamondCourseEntity<Crash1DiamondConstants>;
}

interface RenewalNormalStageEntity<StageThemeConstants, DiamondConstants> extends BaseNormalStageEntity<StageThemeConstants> {
    /** 分岐元ステージ */
    branchSourceStage: {
        /** ステージNo. */
        no: number;
    };
    /** 隠しステージか否か */
    isSecret: boolean;

    /** 報酬 */
    compensation: {
        /** ダイヤの種類 */
        typeOfDiamondList: Array<DiamondConstants>;
        /** パワーストーンの有無 */
        presenceOfPowerStone: boolean;
        /** レリックの有無 */
        presenceOfRelic: boolean;
    };

    /** ボーナスステージ */
    bonusStage: BonusStageEntity;

    /** ダイヤコース */
    diamondCourse: DiamondCourseEntity<DiamondConstants>;

    /** ドクロコース */
    akullCourse: SkullCourseEntity;
}

export interface Crash2NormalStageEntity
    extends RenewalNormalStageEntity<Crash2StageThemeConstants, Crash2DiamondConstants> {
    /** タイプ：クラッシュ2 */
    typeOfCrash2: boolean;
}

export interface Crash3NormalStageEntity
    extends RenewalNormalStageEntity<Crash3StageThemeConstants, Crash3DiamondConstants> {
    /** タイプ：クラッシュ3 */
    typeOfCrash3: boolean;
}

export interface Crash1BossStageEntity extends BaseBossStageEntity {
    /** タイプ：クラッシュ1 */
    typeOfCrash1: boolean;
}

export interface Crash2BossStageEntity extends BaseBossStageEntity {
    /** タイプ：クラッシュ2 */
    typeOfCrash2: boolean;
}

export interface Crash3BossStageEntity extends BaseBossStageEntity {
    /** タイプ：クラッシュ3 */
    typeOfCrash3: boolean;

    /** 体力(第２形態) */
    physicalFitness2: number;
    /** パワーアップ */
    powerUp: PowerUpConstants;
}

export interface TimeAttackOfStageEntity {
    /** 目標時間 */
    targetTime: {
        /** サファイアの目標時間 */
        sapphire: string;
        /** ゴールドの目標時間 */
        gold: string;
        /** プラチナの目標時間 */
        platinum: string;
    };
    /** 開発者の記録 */
    developerRecords: string;
}

interface BonusStageEntity {
    /** (ボーナスステージ内の)箱の数 */
    numberOfBoxes: number;
}

interface DiamondCourseEntity<DiamondConstants> {
    /** ダイヤの種類 */
    typeOfDiamondList: Array<DiamondConstants>;
}

interface SkullCourseEntity {
    presence: boolean;
}
