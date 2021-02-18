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
  constructor() {}

  //  Life Cycle
  public ngOnInit(): void {
    this.AppHostContext = {
      AppHost: {
        Toolbar: {
          Title: 'IoT Ensemble Beta',
          Logo: './assets/logo.svg',
          Actions: [
            {
              Text: 'Docs',
              Path: '/docs',
              Align: 'start',
              Target: '_blank',
            },
            {
              Text: 'Upgrade',
              Path: '/billing/iot',
              Align: 'end',
            },
            {
              Text: 'Sign Out',
              Path: '/.oauth/logout',
              Align: 'end',
            },
          ],
        },
        SEO: {
          Title: 'IoT Ensemble',
          Description: 'IoT Made Easy',
        },
        ElementConfigs: {
          'landing-pages-blocks-element': {
            Assets: null,
            Scripts: [
              'https://www.iot-ensemble.com/_lcu/lcu-landing-pages-lcu/wc/landing-pages.lcu.js',
            ],
            Styles: [
              'https://www.iot-ensemble.com/_lcu/lcu-landing-pages-lcu/wc/landing-pages.lcu.css',
            ],
            ElementName: 'landing-pages-blocks-element',
          },
        },
        Pages: [
          {
            Route: '/',
            ElementConfigs: ['landing-pages-blocks-element'],
          },
        ],
      },
    };
  }

  //  API Methods

  //  Helpers
}
