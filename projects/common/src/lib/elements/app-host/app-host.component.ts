import {
  Component,
  OnInit,
  Injector,
  Input,
  ViewEncapsulation,
  EventEmitter,
  Output,
  HostBinding,
  OnChanges,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  LCUElementContext,
  LcuElementComponent,
  LCUServiceSettings,
} from '@lcu/common';
import { LazyElementConfig } from '@lowcodeunit/lazy-element';
import {
  SVGToMatIconModel,
  SvgToMatIconService,
} from '@lowcodeunit/lcu-icons-common';
import { filter } from 'rxjs/operators';
import { LCUActionState } from '../../controls/action/action.component';
import { SEOServiceService } from '../../services/seo-service.service';
import { AppHostPageState, AppHostState } from '../../state/app-host.state';
import { LCUAppHostContext } from './app-host.models';

export const SELECTOR_LCU_APP_HOST_ELEMENT = 'lcu-app-host-element';

@Component({
  selector: SELECTOR_LCU_APP_HOST_ELEMENT,
  templateUrl: './app-host.component.html',
  styleUrls: ['./app-host.component.scss'],
})
export class LCUAppHostElementComponent
  extends LcuElementComponent<LCUAppHostContext>
  implements OnChanges, OnInit
{
  //  Fields

  //  Properties
  public ActivePage: AppHostPageState;

  @HostBinding('class.lcu-app-host-element')
  public get ClassLCUAppHostElement(): boolean {
    return true;
  }

  @Output('footer-action-click')
  public FooterActionClick: EventEmitter<LCUActionState>;

  @Output('nav-action-click')
  public NavActionClick: EventEmitter<LCUActionState>;

  public get State(): AppHostState {
    return this.Context?.AppHost;
  }

  @Output('toolbar-action-click')
  public ToolbarActionClick: EventEmitter<LCUActionState>;

  //  Constructors
  constructor(
    protected injector: Injector,
    private router: Router,
    protected settings: LCUServiceSettings,
    protected seoSvc: SEOServiceService,
    protected svgToMatIconService: SvgToMatIconService
  ) {
    super(injector);

    this.FooterActionClick = new EventEmitter();

    this.NavActionClick = new EventEmitter();

    this.ToolbarActionClick = new EventEmitter();
  }

  //  Life Cycle
  public ngOnChanges() {
    this.setActivePage(this.router.routerState.snapshot.url);
  }

  public ngOnInit() {
    super.ngOnInit();

    if (!this.Context) {
      this.setContext();
    }

    // const icons: Array<SVGToMatIconModel> =
    // [
    //   { Name: 'svghome', IconPath: 'homepage.svg' },
    //   { Name: 'svgdownload', IconPath: 'download.svg' },
    //   { Name: 'svgphone', IconPath: 'phone.svg' },
    //   { Name: 'accelerate', IconPath: 'accelerate.svg' },
    // ];

    // const path: string = '/assets/images/svgs/';
    // this.svgToMatIconService.SetIcons(icons, path);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActivePage(event.url);
        console.log('Set Active Page in subscribe' + event.url);
      });

    this.setActivePage(this.router.routerState.snapshot.url);
    console.log(
      'Set Active Page outside subscribe' + this.router.routerState.snapshot.url
    );
  }

  //  API Methods
  public FooterActionClicked(action: LCUActionState) {
    this.FooterActionClick.emit(action);
  }

  public NavActionClicked(action: LCUActionState) {
    this.NavActionClick.emit(action);
  }

  public NavClosed(closed: boolean) {
    if (closed && this.ActivePage.Frame) {
      this.State.Frame = this.ActivePage.Frame = {
        ...this.ActivePage.Frame,
        Opened: false,
      };
    }
  }

  public NavCollapseToggled(collapsed: boolean) {
    // this.NavCollapseToggle.emit(action);

    if (this.ActivePage.Frame) {
      this.State.Frame = this.ActivePage.Frame = {
        ...this.ActivePage.Frame,
        Collapsed: collapsed,
      };
    }

    if (this.ActivePage.Nav) {
      this.State.Nav = this.ActivePage.Nav = {
        ...this.ActivePage.Nav,
        Collapsed: collapsed,
      };
    }
  }

  public ToolbarActionClicked(action: LCUActionState) {
    this.ToolbarActionClick.emit(action);
  }

  //  Helpers
  protected processForStrAdd(val: any, parentStr: string) {
    if (typeof val === 'string' && val?.startsWith('++')) {
      return `${parentStr || ''}${val.replace('++', '')}`;
    } else {
      return val;
    }
  }

  protected processObjectForStrAdd(val: any, parent: any) {
    const valKeys = Object.keys(val);

    valKeys.forEach((valKey) => {
      if (valKey == 'Header') {
        console.log(valKey);
      }
      const valProp = val[valKey];

      if (
        valProp instanceof Object &&
        !(valProp instanceof Array) &&
        valProp != null
      ) {
        val[valKey] = this.processObjectForStrAdd(valProp, parent[valKey]);
      } else {
        val[valKey] = this.processForStrAdd(val[valKey], parent[valKey]);
      }
    });

    return {
      ...parent,
      ...val,
    };
  }

  protected setActivePage(route: string) {
    if (this.State) {
      const page =
        this.State?.Pages?.find((p) => p.Route === route) ||
        this.State?.Pages?.find((p) => p);

      if (this.State.Frame) {
        this.State.Frame = {
          ...this.State.Frame,
          Collapsed: this.State.Nav?.Collapsed,
        };
      }

      this.ActivePage = this.processObjectForStrAdd(page, {
        ...this.State,
      });
      console.log('Set SEO' + this.ActivePage.SEO);
      this.seoSvc.SetSEO(this.ActivePage.SEO);
    }
  }

  protected setContext(): void {
    if (this.settings.State.AppHost) {
      this.Context = {
        AppHost: this.settings.State.AppHost,
      };
    }
  }
}
