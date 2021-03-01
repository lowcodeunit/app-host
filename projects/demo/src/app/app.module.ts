import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FathymSharedModule,
  LCUServiceSettings,
  MaterialModule,
} from '@lcu/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './controls/home/home.component';
import { DocumentationComponent } from './controls/documentation/documentation.component';
import { LcuDocumentationModule } from '@lowcodeunit/lcu-documentation-common';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { environment } from '../environments/environment';

const lcuSettings = FathymSharedModule.DefaultServiceSettings(environment);

@NgModule({
  declarations: [AppComponent, HomeComponent, DocumentationComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    LcuDocumentationModule.forRoot(),
    AppHostModule.forRoot(),
    AppHostModule.forMonaco(lcuSettings.Settings?.Monaco || {}),
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: lcuSettings,
    },
  ],
  bootstrap: [AppComponent],
  exports: [AppHostModule],
})
export class AppModule {}
