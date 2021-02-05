import {
  Component,
  EventEmitter,
  HostBinding,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AppHostToolbarState } from '../../state/app-host.state';
import { LCUActionState } from '../action/action.component';

@Component({
  selector: 'lcu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  //  Fields

  //  Properties
  @Output('action-click')
  public ActionClick: EventEmitter<LCUActionState>;

  @HostBinding('class.lcu-toolbar')
  public get ClassLCUToolbar(): boolean {
    return true;
  }

  @Input('state')
  public State: AppHostToolbarState;

  //  Constructors
  constructor(protected injector: Injector) {
    this.ActionClick = new EventEmitter();
  }

  //  Life Cycle
  public ngOnInit() {}

  //  API Methods
  public ActionClicked(action: LCUActionState) {
    this.ActionClick.emit(action);
  }

  //  Helpers
}
