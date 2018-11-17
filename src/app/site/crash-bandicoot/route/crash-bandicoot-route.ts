import CrashBandicootRouteInfo from './crash-bandicoot-route-info';

import CrashBandicootComponent from '../components/crash-bandicoot.component';
import TopComponent from '../components/top/top.component';

const childRoute = [
    {
        path: '',
        redirectTo: CrashBandicootRouteInfo.top,
        pathMatch: 'full'
    },
    {
        path: CrashBandicootRouteInfo.top,
        component: TopComponent
    }
];
export default {
    path: CrashBandicootRouteInfo.root,
    component: CrashBandicootComponent,
    children: childRoute
};
