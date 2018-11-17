import { MaterialEntity } from './material.entity';

export const materialEntityFactory = (materialEntity: any): MaterialEntity => {
    return {
        name: undefined,
        detail: {
            text: undefined,
            contentList: []
        },
        type: undefined,
        ...materialEntity,
    };
};
