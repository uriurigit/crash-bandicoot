import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import TopNavigationModule from '@common/components/top-navigation/top-navigation.module';
import SiteFrameModule from '@site-information/site-frame/site-frame.module';
import CommonPartsModule from './components/common/common-parts.module';
import SeriesInformationModule from './components/series/series-information.module';
import StageAccordionModule from './components/stage-accordion/stage-accordion.module';
import TabControllerModule from './components/tab-controller/tab-controller.module';

import CrashBandicootComponent from './components/crash-bandicoot.component';
import CrashFontComponent from './components/font/crash-font.component';
import TweetComponent from './components/tweet/tweet.component';

@NgModule({
    declarations: [
        CrashBandicootComponent,
        CrashFontComponent,
        TweetComponent
    ],
    imports: [
        CommonModule,
        CommonPartsModule,
        NgbModule.forRoot(),
        RouterModule,
        SeriesInformationModule,
        SiteFrameModule,
        StageAccordionModule,
        TabControllerModule,
        TopNavigationModule
    ],
    exports: [
        CrashBandicootComponent
    ]
})
export default class CrashBandicootModule { }
