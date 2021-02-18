import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { LCUServiceSettings } from '@lcu/common';
import { LCUAppHostContext } from '@lowcodeunit/app-host-common';

@Component({
  selector: 'lcu-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  animations: [],
})
export class DynamicComponent implements OnInit {
  //  Fields

  //  Properties
  public AppHostContext: LCUAppHostContext;

  //  Constructors
  constructor() {
  }

  //  Life Cycle
  public ngOnInit(): void {
    // this.AppHostContext = {};
  }

  //  API Methods

  //  Helpers
}
