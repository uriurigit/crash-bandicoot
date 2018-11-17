import { getRouteName } from '@site-information/modules/site-info-modules';

export default class CrashBandicootRouteInfo {
    public static readonly root = getRouteName(CrashBandicootRouteInfo);
    public static readonly top = 'top';
}
