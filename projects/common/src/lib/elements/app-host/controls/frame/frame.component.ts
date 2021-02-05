import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  HostBinding,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { AppHostFrameState } from '../../../../state/app-host.state';

@Component({
  selector: 'lcu-app-host-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  animations: [
    trigger('stretch', [
      state('*', style({ 'margin-left': 'calc(308px + .5em)' })),
      state('collapsed', style({ 'margin-left': 'calc(88px + .5em)' })),
      state('full', style({ 'margin-left': '0' })),
      transition('collapsed => *', animate('600ms ease-out')),
      transition('* => collapsed', animate('600ms ease-in')),
      transition('full => *', animate('600ms ease-out')),
      transition('* => full', animate('600ms ease-in')),
    ]),
  ],
})
export class FrameComponent implements OnChanges, OnDestroy, OnInit {
  //  Fields
  protected mediaWatcher: Subscription;

  //  Properties
  @HostBinding('class.lcu-app-host-frame')
  public get ClassLCUAppHostFrame(): boolean {
    return true;
  }

  public CollapsedState: string;

  public LessThanMD: boolean;

  public LessThanSM: boolean;

  @ViewChild('navDrawer')
  public NavDrawer: MatDrawer;

  public get NavDrawerMode(): string {
    return this.LessThanMD ? 'over' : 'side';
  }

  @Input('state')
  public State: AppHostFrameState;

  //  Constructors
  constructor(protected injector: Injector, protected media: MediaObserver) {}

  //  Life Cycle
  public ngOnChanges() {
    this.setCollapsedState();
  }

  public ngOnDestroy() {
    this.mediaWatcher.unsubscribe();
  }

  public ngOnInit() {
    this.mediaWatcher = this.media
      .asObservable()
      .subscribe((changes: MediaChange[]) => {
        this.LessThanMD = this.media.isActive('lt-md');

        this.LessThanSM = this.media.isActive('lt-sm');

        this.setCollapsedState();
      });

    this.setCollapsedState();
  }

  //  API Methods
  public ToggleNavDrawer() {
    this.NavDrawer.toggle();

    this.State.Opened = this.NavDrawer.opened;
  }

  //  Helpers
  protected setCollapsedState() {
    let colState = '';

    if (this.LessThanMD || !this.NavDrawer?.opened) {
      colState = 'full';
    } else if (this.State.Collapsed && this.NavDrawer?.opened) {
      colState = 'collapsed';
    }

    this.CollapsedState = colState;
  }
}
