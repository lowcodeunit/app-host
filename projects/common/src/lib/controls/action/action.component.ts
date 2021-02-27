import {
  Component,
  EventEmitter,
  HostBinding,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';

export class LCUActionState {
  public Actions?: LCUActionState[];

  public Align?: 'start' | 'end';

  public BypassClick?: boolean;

  public ByRoute?: boolean;

  public Color?: string;

  public Icon?: string;

  public Image?: string;

  public IsMenu?: boolean;

  public Path?: string;

  public Raised?: boolean;

  public Target?: string;

  public Text?: string;
}

@Component({
  selector: 'lcu-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnChanges, OnInit {
  //  Fields

  //  Properties
  @Input('action')
  public Action: LCUActionState;

  @ViewChild('actionMenu')
  public ActionMenu: MatMenu;

  public ActionType: string;

  @HostBinding('class.lcu-action')
  public get ClassLCUAction(): boolean {
    return true;
  }

  @Output('action-click')
  public Click: EventEmitter<LCUActionState>;

  //  Constructors
  constructor(protected injector: Injector, protected router: Router) {
    this.Click = new EventEmitter();
  }

  //  Life Cycle
  public ngOnChanges() {
    this.setActiontype();
  }

  public ngOnInit() {
    this.setActiontype();
  }

  //  API Methods
  public Clicked(e: MouseEvent) {
    if (this.Action.BypassClick) {
      // e.preventDefault();
    } else if (this.Action.ByRoute && this.Action.Path) {
      this.router.navigateByUrl(this.Action.Path);

      e.preventDefault();
    } else if (!this.Action.Path) {
      this.Click.emit(this.Action);
    } else if (this.Action.Path) {
      //  Do nothing and let anchor handle
    }
  }

  //  Helpers
  protected setActiontype() {
    // this.ActionType = '';

    // if (this.Action.IsMenuItem) {
    //   this.ActionType = 'menu-item';
    // } else if (this.Action.Raised) {
    //   this.ActionType = 'raised';
    // }
  }
}
