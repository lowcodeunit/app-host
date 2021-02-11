import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostBinding,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { LCUActionState } from '../../../../controls/action/action.component';
import { AppHostNavState } from '../../../../state/app-host.state';

@Component({
  selector: 'lcu-app-host-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('rotate', [
      state('*', style({ transform: 'rotate(0)' })),
      state('collapsed', style({ transform: 'rotate(180deg)' })),
      transition('collapsed => *', animate('600ms ease-out')),
      transition('* => collapsed', animate('600ms ease-in')),
    ]),
    trigger('collapse', [
      state('*', style({})),
      state('collapsed', style({ width: '0px' })),
      transition('collapsed => *', animate('600ms ease-out')),
      transition('* => collapsed', animate('600ms ease-in')),
    ]),
  ],
})
export class NavComponent implements OnInit {
  //  Fields

  //  Properties
  @Output('action-click')
  public ActionClick: EventEmitter<LCUActionState>;

  @HostBinding('class.lcu-app-host-nav')
  public get ClassLCUAppHostNav(): boolean {
    return true;
  }

  @Output('close')
  public Close: EventEmitter<boolean>;

  @Output('collapse-toggle')
  public CollapseToggle: EventEmitter<boolean>;

  public get CollapsedState(): string {
    return this.State.Collapsed ? 'collapsed' : '';
  }

  @Input('state')
  public State: AppHostNavState;

  //  Constructors
  constructor(protected injector: Injector) {
    this.ActionClick = new EventEmitter();

    this.Close = new EventEmitter();

    this.CollapseToggle = new EventEmitter();
  }

  //  Life Cycle
  public ngOnInit() {}

  //  API Methods
  public ActionClicked(action: LCUActionState) {
    this.ActionClick.emit(action);
  }

  public Closed() {
    this.Close.emit(true);
  }

  public ToggleCollapse() {
    this.CollapseToggle.emit(!this.State.Collapsed);
  }

  //  Helpers
}
