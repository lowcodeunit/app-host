import { MaterialModule, PipeModule } from '@lcu/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { PagesRoutingModule } from './pages-routing.module';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [DynamicComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    AppHostModule,
    PipeModule,
  ],
  exports: [DynamicComponent],
  providers: [],
  entryComponents: [DynamicComponent],
})
export class PagesModule {}
