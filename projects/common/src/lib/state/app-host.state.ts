import { LCUActionState } from '../controls/action/action.component';

export class AppHostState {
  public Loading?: boolean;

  public Frame?: AppHostFrameState;

  public Header?: AppHostHeaderState;

  public Nav?: AppHostNavState;

  public Theme?: AppHostThemeState;

  public Toolbar?: AppHostToolbarState;
}

export class AppHostFrameState {
  public Collapsed?: boolean;

  public Opened?: boolean;

  public StaticMenuTop?: number;

  public StickyNav?: boolean;
}

export class AppHostNavState {
  public Actions?: LCUActionState[];

  public CollapseIcon?: boolean;

  public Collapsed?: boolean;

  public ShowCollapse?: boolean;
}

export class AppHostHeaderState {
  public BrandTitle?: string;

  public InfoText?: string;

  public InfoTitle?: string;

  public WelcomeTitle?: string;
}

export class AppHostThemeState {
  public Name?: string;
}

export class AppHostToolbarState {
  public Actions?: LCUActionState[];

  public Logo?: string;

  public LogoMobile?: string;

  public Title?: string;
}
