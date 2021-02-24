import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lcu-svg-background',
  templateUrl: './svg-background.component.svg',
  styleUrls: ['./svg-background.component.scss'],
})
export class SvgBackgroundComponent implements OnInit {
  //  Fields

  //  Properties
  @Input('end-color')
  public EndColor: string;

  @Input('path')
  public Path: string;

  @Input('start-color')
  public StartColor: string;

  //  Constructors
  constructor() {
    this.StartColor = '#fff';

    this.StartColor = '#000';
  }

  //  Life Cycle
  public ngOnInit(): void {}

  //  API Methods

  //  Helpers
}
