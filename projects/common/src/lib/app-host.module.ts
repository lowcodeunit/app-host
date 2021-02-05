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

@NgModule({
  declarations: [
    LCUAppHostElementComponent,
    ToolbarComponent,
    HeaderComponent,
    FrameComponent,
    AppHostDashboardCardElementComponent,
    ActionComponent,
    NavComponent,
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
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
