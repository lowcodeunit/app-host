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
              // Icon: "upgrade",
              Align: 'end',
            },
            {
              Text: 'Sign Out',
              Path: '/.oauth/logout',
              Align: 'end',
            },
          ],
        },
        Frame: {
          Collapsed: true,
          Opened: true,
          StaticMenuTop: 250,
          StickyNav: true,
        },
        Header: {
          BrandTitle: 'IoT Ensemble',
          InfoText:
            'Emulate, simulate, and connect your devices to unlock the power of your IoT applications.',
          InfoTitle: 'Device Dashboard',
          WelcomeTitle: 'Welcome to',
        },
        Nav: {
          ShowCollapse: true,
          Actions: [
            {
              Text: 'Dashboard',
              Path: '/',
              Icon: 'dashboard',
            },
            {
              Text: 'Landing Page',
              Path: '/landing-page',
              Icon: 'cloud',
            },
          ],
        },
        SEO: {
          Title: 'IoT Ensemble',
          Description: 'IoT Made Easy',
        },
        ElementConfigs: {
          'lcu-device-data-flow-manage-element': {
            Scripts: [
              // "/assets/lcu-device-data-flow.lcu.js",
              'https://www.iot-ensemble.com/_lcu/lcu-device-data-flow-lcu/wc/lcu-device-data-flow.lcu.js',
            ],
            Styles: [
              // "/assets/lcu-device-data-flow.lcu.css",
              'https://www.iot-ensemble.com/_lcu/lcu-device-data-flow-lcu/wc/lcu-device-data-flow.lcu.css',
            ],
            ElementName: 'lcu-device-data-flow-manage-element',
          },
          'landing-pages-blocks-element': {
            Scripts: [
              '/assets/landing-pages.lcu.js',
              // "https://www.iot-ensemble.com/_lcu/lcu-landing-pages-lcu/wc/landing-pages.lcu.js",
            ],
            Styles: [
              '/assets/landing-pages.lcu.css',
              // "https://www.iot-ensemble.com/_lcu/lcu-landing-pages-lcu/wc/landing-pages.lcu.css",
            ],
            ElementName: 'landing-pages-blocks-element',
          },
        },
        Pages: [
          {
            Route: '/',
            ElementConfigs: ['lcu-device-data-flow-manage-element'],
            SEO: {
              Title: '++Do It!',
              Description: 'IoT Made Easy-ish',
            }
          },
          {
            Route: '/landing-page',
            ElementConfigs: ['landing-pages-blocks-element'],
            Frame: null,
            Nav: null,
            Header: null,
          },
        ],
      },
    };
  }

  //  API Methods

  //  Helpers
}
