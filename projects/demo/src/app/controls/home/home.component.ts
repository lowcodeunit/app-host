import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public Code: any;

  public Options: any;

  public OptsStr: string;

  constructor() {}

  public ngOnInit(): void {
  }

  public SetOptions() {
    this.Options = {
      theme: 'vs-dark',
    };

    this.OptsStr = JSON.stringify(this.Options || '');
  }
}
