import { ThemeBuilderService, ThemePickerModel, ThemeBuilderConstants } from '@lowcodeunit/lcu-theme-builder-common';
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

  public MenuAction: LCUActionState;

  @Input('state')
  public State: AppHostToolbarState;

  //  Constructors
  constructor(
    protected injector: Injector, 
    protected themeBuilderService: ThemeBuilderService) {
    this.ActionClick = new EventEmitter();
  }

  //  Life Cycle
  public ngOnInit() {
    this.buildMenuAction();
    this.themeBuilderService.MaterialTheme = 'https://www.iot-ensemble.com/assets/theming/theming.scss';
    this.setupThemes();
  }

  //  API Methods
  public ActionClicked(action: LCUActionState) {

    this.ActionClick.emit(action);
  }

  //  Helpers

    /**
     * Setup array of themes
     */
    protected setupThemes(): void {
      const themes: Array<ThemePickerModel> = [
        new ThemePickerModel(
          {
            ID: 'Fathym Brand',
            Primary: ThemeBuilderConstants.document.getPropertyValue('--initial-primary'),
            Accent: ThemeBuilderConstants.document.getPropertyValue('--initial-accent'),
            Warn: ThemeBuilderConstants.document.getPropertyValue('--initial-warn'),
            DarkMode: true
          }
        ),
        new ThemePickerModel(
          {
            ID: 'Yellow', 
            Primary: '#ffcc11',
            Accent: '#06a5ff',
            Warn: '#990000',
            DarkMode: false
          }
        ),
        new ThemePickerModel(
          {
            ID: 'Pink',
            Primary: '#a83271',
            Accent: '#6103ff',
            Warn: '#b9f013',
            DarkMode: true
          }
        )
      ];

      this.themeBuilderService.SetThemes(themes);
    }

  protected buildMenuAction() {
    this.MenuAction = {
      Icon: 'menu',
      IsMobile: true,
      Actions: this.State?.Actions,
    };
  }
}
