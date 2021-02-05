import { Component, HostBinding, Injector, Input, OnInit } from '@angular/core';
import { AppHostHeaderState } from '../../../../state/app-host.state';

@Component({
  selector: 'lcu-app-host-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //  Fields

  //  Properties
  @HostBinding('class.lcu-app-host-header')
  public get ClassLCUAppHostHeader(): boolean {
    return true;
  }

  @Input('state')
  public State: AppHostHeaderState;

  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngOnInit() {
  }

  //  API Methods

  //  Helpers
}
