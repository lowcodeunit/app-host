import {
  Component,
  OnInit,
  Injector,
  Input,
  ViewEncapsulation,
  EventEmitter,
  Output,
  HostBinding,
} from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LCUActionState } from '../../controls/action/action.component';
import { AppHostState } from '../../state/app-host.state';

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
  implements OnInit {
  //  Fields

  //  Properties
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
  constructor(protected injector: Injector) {
    super(injector);

    this.ToolbarActionClick = new EventEmitter();

    this.NavActionClick = new EventEmitter();
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    console.log(this.State);

    this.State.Frame = {
      ...this.State.Frame,
      Collapsed: this.State.Nav.Collapsed
    };
  }

  //  API Methods
  public NavActionClicked(action: LCUActionState) {
    this.NavActionClick.emit(action);
  }

  public NavClosed(closed: boolean) {
    if (closed) {
      this.State.Frame = {
        ...this.State.Frame,
        Opened: false
      };
    }
  }

  public NavCollapseToggled(collapsed: boolean) {
    // this.NavCollapseToggle.emit(action);
    this.State.Frame = {
      ...this.State.Frame,
      Collapsed: collapsed
    };
  }

  public ToolbarActionClicked(action: LCUActionState) {
    this.ToolbarActionClick.emit(action);
  }

  //  Helpers
}
