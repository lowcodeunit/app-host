import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { AppHostModule, LCUAppHostElementComponent, SELECTOR_LCU_APP_HOST_ELEMENT, AppHostDashboardCardElementComponent, SELECTOR_APP_HOST_DASHBOARD_CARD_ELEMENT } from '@lowcodeunit/app-host-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
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
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [AppHostModule]
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const appHost = createCustomElement(LCUAppHostElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_APP_HOST_ELEMENT, appHost);
	
		const dashboardCard = createCustomElement(AppHostDashboardCardElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_APP_HOST_DASHBOARD_CARD_ELEMENT, dashboardCard);
	}
}
