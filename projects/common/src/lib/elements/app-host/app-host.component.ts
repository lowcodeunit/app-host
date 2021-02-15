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
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LazyElementConfig } from '@lowcodeunit/lazy-element';
import { filter } from 'rxjs/operators';
import { LCUActionState } from '../../controls/action/action.component';
import { AppHostPageState, AppHostState } from '../../state/app-host.state';

export class LCUAppHostElementState {}

export class LCUAppHostContext extends LCUElementContext<LCUAppHostElementState> {}

export const SELECTOR_LCU_APP_HOST_ELEMENT = 'lcu-app-host-element';

@Component({
  selector: SELECTOR_LCU_APP_HOST_ELEMENT,
  templateUrl: './app-host.component.html',
  styleUrls: ['./app-host.component.scss'],
})
export class LCUAppHostElementComponent
  extends LcuElementComponent<LCUAppHostContext>
  implements OnChanges, OnInit {
  //  Fields

  //  Properties
  public ActivePage: AppHostPageState;

  @HostBinding('class.lcu-app-host-element')
  public get ClassLCUAppHostElement(): boolean {
    return true;
  }

  @Output('nav-action-click')
  public NavActionClick: EventEmitter<LCUActionState>;

  @Input('state')
  public State: AppHostState;

  @Output('toolbar-action-click')
  public ToolbarActionClick: EventEmitter<LCUActionState>;

  //  Constructors
  constructor(protected injector: Injector, private router: Router) {
    super(injector);

    this.ToolbarActionClick = new EventEmitter();

    this.NavActionClick = new EventEmitter();
  }

  //  Life Cycle
  public ngOnChanges() {
    this.setActivePage(this.router.routerState.snapshot.url);
  }

  public ngOnInit() {
    super.ngOnInit();

    console.log(this.State);

    this.State.Frame = {
      ...this.State.Frame,
      Collapsed: this.State.Nav.Collapsed,
    };

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActivePage(event.url);
      });

    this.setActivePage(this.router.routerState.snapshot.url);
  }

  //  API Methods
  public NavActionClicked(action: LCUActionState) {
    this.NavActionClick.emit(action);
  }

  public NavClosed(closed: boolean) {
    if (closed) {
      this.State.Frame = this.ActivePage.Frame = {
        ...this.ActivePage.Frame,
        Opened: false,
      };
    }
  }

  public NavCollapseToggled(collapsed: boolean) {
    // this.NavCollapseToggle.emit(action);

    this.State.Frame = this.ActivePage.Frame = {
      ...this.ActivePage.Frame,
      Collapsed: collapsed,
    };

    this.State.Nav = this.ActivePage.Nav = {
      ...this.ActivePage.Nav,
      Collapsed: collapsed,
    };
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
    const page =
      this.State?.Pages?.find((p) => p.Route === route) ||
      this.State?.Pages.find((p) => p);

    this.ActivePage = this.processObjectForStrAdd(page, {
      ...this.State,
    });

    console.log(this.ActivePage);
  }
}
