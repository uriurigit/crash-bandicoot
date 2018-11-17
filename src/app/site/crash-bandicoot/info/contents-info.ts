import { ContentConstants } from '@common/constants/content.constants';
import ContentInfo from '@common/contents/content-info';
import SiteInfo from '@site-information/site-info';

const { crashBandicoot } = SiteInfo;
const { image, video } = ContentConstants;

export class SuperContentInfo extends ContentInfo {
    constructor(
        contentType: ContentConstants,
        hierarchy: string,
        name: string
    ) {
        super({
            type: contentType,
            root: crashBandicoot.meta.assetsDirName,
            hierarchy,
            name
        });
    }
}

export const title = new SuperContentInfo(image, 'title', 'title');

class StageInfo extends SuperContentInfo {
    constructor(protected name: string) {
        super(image, 'stage', name);
    }
}
export const n001 = new StageInfo('001.jpg');

class PartsInfo extends SuperContentInfo {
    constructor(protected name: string) {
        super(image, 'parts', name);
    }
}
export const up = new PartsInfo('up');
export const powerStone = new PartsInfo('power-stone');

class MaterialInfo extends SuperContentInfo {
    constructor(protected contentType: ContentConstants, protected name: string) {
        super(contentType, 'material', name);
    }
}
export class Material {
    public static readonly reflect = new MaterialInfo(video, 'reflect/reflect');

    public static readonly warpMiss = new MaterialInfo(video, 'warp/warp-miss');

    public static readonly scaffoldPlay1 = new MaterialInfo(video, 'scaffold/scaffold-play1');
    public static readonly scaffoldPlay2 = new MaterialInfo(video, 'scaffold/scaffold-play2');

    public static readonly pressNose = new MaterialInfo(video, 'press/press-nose');

    public static readonly blue = Material.diamondScaffold('blue');
    public static readonly green1 = Material.diamondScaffold('green-1');
    public static readonly green2 = Material.diamondScaffold('green-2');
    public static readonly red = Material.diamondScaffold('red');
    public static readonly yellow1 = Material.diamondScaffold('yellow-1');
    public static readonly yellow2 = Material.diamondScaffold('yellow-2');
    public static readonly finalBlue = Material.diamondScaffold('final-blue');
    public static readonly finalGreen = Material.diamondScaffold('final-green');
    public static readonly finalPurple = Material.diamondScaffold('final-purple');
    public static readonly finalRed = Material.diamondScaffold('final-red');
    public static readonly finalYellow = Material.diamondScaffold('final-yellow');

    public static readonly gorogoro1 = new MaterialInfo(image, 'gorogoro/title1');
    public static readonly gorogoro2 = new MaterialInfo(image, 'gorogoro/title2');

    public static readonly kikaikaCamera = new MaterialInfo(image, 'camera/kikaika');

    public static readonly floatingHog1 = new MaterialInfo(image, 'floating-hog/floating-hog1');

    public static readonly makkura1 = new MaterialInfo(image, 'makkura/makkura1');
    public static readonly makkura2 = new MaterialInfo(image, 'makkura/makkura2');

    public static readonly niseBeach = new MaterialInfo(image, 'nise/beach');
    public static readonly niseFactory = new MaterialInfo(image, 'nise/factory');
    public static readonly niseRuins = new MaterialInfo(image, 'nise/ruins');
    public static readonly niseEngland = new MaterialInfo(image, 'nise/england');

    public static readonly ridePipe = new MaterialInfo(image, 'ride/ride-pipe');
    public static readonly rideTv = new MaterialInfo(image, 'ride/ride-tv');
    public static readonly rideBlockTower = new MaterialInfo(image, 'ride/ride-block-tower');

    public static readonly nTropyBack = new MaterialInfo(image, 'doctor-nefarious-tropy/back');

    private static diamondScaffold(name: string): MaterialInfo {
        return new MaterialInfo(image, `diamond-scaffold/${name}`);
    }
}
