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
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

const monacoConfig: NgxMonacoEditorConfig = {
  // baseUrl: './assets/monaco', // configure base path for monaco editor default: './assets'
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  // onMonacoLoad: () => {
  //   console.log((<any>window).monaco);
  // }, // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};

@NgModule({
  declarations: [AppComponent, HomeComponent, DocumentationComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    LcuDocumentationModule.forRoot(),
    AppHostModule.forRoot(),
    // AppHostModule.forMonaco((window as any).LCU.Settings?.Monaco || {}),
    MonacoEditorModule.forRoot(monacoConfig),
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment),
    },
  ],
  bootstrap: [AppComponent],
  exports: [AppHostModule],
})
export class AppModule {}
