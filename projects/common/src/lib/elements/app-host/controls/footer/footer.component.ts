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
import { AppHostFooterState } from '../../../../state/app-host.state';

@Component({
  selector: 'lcu-app-host-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  //  Fields

  //  Properties
  @Output('action-click')
  public ActionClick: EventEmitter<LCUActionState>;

  @HostBinding('class.lcu-app-host-footer')
  public get ClassLCUAppHostFooter(): boolean {
    return true;
  }

  @Input('state')
  public State: AppHostFooterState;

  public Year: number;

  //  Constructors
  constructor(protected injector: Injector) {
    this.ActionClick = new EventEmitter();
  }

  //  Life Cycle
  public ngOnInit() {
    this.Year = new Date().getFullYear();
  }

  //  API Methods
  public ActionClicked(action: LCUActionState) {
    this.ActionClick.emit(action);
  }

  //  Helpers
}
