import { Component, Input, OnInit } from '@angular/core';
import { LCUActionState } from '../action/action.component';

@Component({
  selector: 'lcu-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})

export class HamburgerMenuComponent implements OnInit {

  private _action: LCUActionState;
  //  Properties
  @Input('action')
    public set Action(val: LCUActionState) {

      this._action = val;
  }

  public get Action(): LCUActionState {
    return this._action;
  }

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Link using 'Path', might need to use router.navigate, but
   * setting it up this way for now - shannon
   * 
   * Also, using the class to link the href, so we
   * can make the entire mat-list-item clickable
   *
   * @param action Model for state action
   */
  public Navigate(action: LCUActionState): void {

    window.location.href = action.Path;
  }

}
