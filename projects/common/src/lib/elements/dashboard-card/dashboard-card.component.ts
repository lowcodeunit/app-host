import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class AppHostDashboardCardElementState {}

export class AppHostDashboardCardContext extends LCUElementContext<AppHostDashboardCardElementState> {}

export const SELECTOR_APP_HOST_DASHBOARD_CARD_ELEMENT = 'app-host-dashboard-card-element';

@Component({
  selector: SELECTOR_APP_HOST_DASHBOARD_CARD_ELEMENT,
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class AppHostDashboardCardElementComponent extends LcuElementComponent<AppHostDashboardCardContext> implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
