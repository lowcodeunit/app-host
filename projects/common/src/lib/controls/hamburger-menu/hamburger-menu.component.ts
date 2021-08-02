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

}
