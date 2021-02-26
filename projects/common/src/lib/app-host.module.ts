import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { AppHostStateContext } from './state/app-host-state.context';
import { LCUAppHostElementComponent } from './elements/app-host/app-host.component';
import { ToolbarComponent } from './controls/toolbar/toolbar.component';
import { HeaderComponent } from './elements/app-host/controls/header/header.component';
import { FrameComponent } from './elements/app-host/controls/frame/frame.component';
import { AppHostDashboardCardElementComponent } from './elements/dashboard-card/dashboard-card.component';
import { ActionComponent } from './controls/action/action.component';
import { NavComponent } from './elements/app-host/controls/nav/nav.component';
import { LazyElementModule } from '@lowcodeunit/lazy-element';
import { LoaderComponent } from './controls/loader/loader.component';
import { FooterComponent } from './elements/app-host/controls/footer/footer.component';
import { SvgBackgroundComponent } from './controls/svg-background/svg-background.component';
import { ApiAccessComponent } from './controls/api-access/api-access.component';

@NgModule({
  declarations: [
    LCUAppHostElementComponent,
    ToolbarComponent,
    HeaderComponent,
    FrameComponent,
    AppHostDashboardCardElementComponent,
    ActionComponent,
    NavComponent,
    LoaderComponent,
    FooterComponent,
    SvgBackgroundComponent,
    ApiAccessComponent,
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    LazyElementModule,
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    LCUAppHostElementComponent,
    ToolbarComponent,
    HeaderComponent,
    FrameComponent,
    AppHostDashboardCardElementComponent,
    ActionComponent,
    NavComponent,
    LoaderComponent,
    FooterComponent,
    SvgBackgroundComponent,
    ApiAccessComponent,
  ],
  entryComponents: [
    LCUAppHostElementComponent,
    AppHostDashboardCardElementComponent,
  ],
})
export class AppHostModule {
  static forRoot(): ModuleWithProviders<AppHostModule> {
    return {
      ngModule: AppHostModule,
      providers: [AppHostStateContext],
    };
  }
}
