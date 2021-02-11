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
      this.State.Frame = {
        ...this.State.Frame,
        Opened: false,
      };
    }
  }

  public NavCollapseToggled(collapsed: boolean) {
    // this.NavCollapseToggle.emit(action);
    this.State.Frame = {
      ...this.State.Frame,
      Collapsed: collapsed,
    };
  }

  public ToolbarActionClicked(action: LCUActionState) {
    this.ToolbarActionClick.emit(action);
  }

  //  Helpers
  protected setActivePage(route: string) {
    const page =
      this.State?.Pages?.find((p) => p.Route === route) ||
      this.State?.Pages.find((p) => p);

    this.ActivePage = (page
      ? {
          ...page,
          ...this.State,
        }
      : {}) as AppHostPageState;

    const pageKeys = Object.keys(page);

    pageKeys.forEach((pageKey) => {
      this.ActivePage[pageKey] = {
        ...this.ActivePage[pageKey],
        ...page[pageKey],
      };
    });

    console.log(this.ActivePage);
  }
}
