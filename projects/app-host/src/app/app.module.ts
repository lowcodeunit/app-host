import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FathymSharedModule,
  LCUServiceSettings,
  MaterialModule,
} from '@lcu/common';
import { environment } from '../environments/environment';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FathymSharedModule.forRoot(),
    AppHostModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
