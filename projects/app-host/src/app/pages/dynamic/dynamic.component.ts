import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { LCUServiceSettings } from '@lcu/common';
import { AppHostState } from '@lowcodeunit/app-host-common';

@Component({
  selector: 'lcu-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  animations: [],
})
export class DynamicComponent implements OnInit {
  //  Fields

  //  Properties
  public State: AppHostState;

  //  Constructors
  constructor(protected settings: LCUServiceSettings) {
    this.State = {};
  }

  //  Life Cycle
  public ngOnInit(): void {
    this.setupStateHandler();
  }

  //  API Methods

  //  Helpers
  protected handleStateChanged() {
    console.log(this.State);
  }

  protected setupStateHandler() {
    this.State = this.settings.State.AppHost;

    // this.iotEnsCtxt.Context.subscribe((state) => {
    //   this.State = Object.assign(this.State, state);

    //   this.handleStateChanged();
    // });
  }
}
