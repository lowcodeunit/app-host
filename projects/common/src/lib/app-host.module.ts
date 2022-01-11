import { ThemeBuilderModule } from '@lowcodeunit/lcu-theme-builder-common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { DataGridModule } from '@lowcodeunit/data-grid';
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
// import { SwaggerUIComponent } from './controls/swagger-ui/swagger-ui.component';
import { SEOServiceService } from './services/seo-service.service';
import {
  CodeEditorComponent,
  LCU_CODE_EDITOR_CONFIG,
} from './controls/code-editor/code-editor.component';
import { HamburgerMenuComponent } from './controls/hamburger-menu/hamburger-menu.component';

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
    // SwaggerUIComponent,
    CodeEditorComponent,
    HamburgerMenuComponent,
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    LazyElementModule,
    DataGridModule,
    ThemeBuilderModule
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
    DataGridModule,
    // SwaggerUIComponent,
    CodeEditorComponent,
    HamburgerMenuComponent,
    ThemeBuilderModule
  ],
  entryComponents: [
    LCUAppHostElementComponent,
    AppHostDashboardCardElementComponent,
    HamburgerMenuComponent,
  ],
})
export class AppHostModule {
  static forMonaco(config: any): ModuleWithProviders<AppHostModule> {
    return {
      ngModule: AppHostModule,
      providers: [
        {
          provide: LCU_CODE_EDITOR_CONFIG,
          useValue: config,
        },
      ],
    };
  }

  static forRoot(): ModuleWithProviders<AppHostModule> {
    return {
      ngModule: AppHostModule,
      providers: [AppHostStateContext, SEOServiceService],
    };
  }
}
