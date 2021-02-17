import {
  Component,
  EventEmitter,
  HostBinding,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export class LCUActionState {
  public Align?: 'start' | 'end';

  public Icon?: string;

  public Path?: string;

  public Target?: string;

  public Text?: string;
}

@Component({
  selector: 'lcu-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  //  Fields

  //  Properties
  @Input('action')
  public Action: LCUActionState;

  @HostBinding('class.lcu-action')
  public get ClassLCUAction(): boolean {
    return true;
  }

  @Output('action-click')
  public Click: EventEmitter<LCUActionState>;

  //  Constructors
  constructor(protected injector: Injector) {
    this.Click = new EventEmitter();
  }

  //  Life Cycle
  public ngOnInit() {}

  //  API Methods
  public Clicked() {
    this.Click.emit(this.Action);
  }

  //  Helpers
}
