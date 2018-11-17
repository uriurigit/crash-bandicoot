import ContentDetailEntity from '@common/entity/content-detail.entity';
import { MaterialConstants } from '../constants/material.constants';

export interface MaterialEntity {
    name: string;
    detail: {
        text: string;
        contentList: Array<ContentDetailEntity>;
    };
    type: MaterialConstants;
}
