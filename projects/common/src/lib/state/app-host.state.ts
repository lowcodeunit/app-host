import { LazyElementConfig } from '@lowcodeunit/lazy-element';
import { LCUActionState } from '../controls/action/action.component';

export class AppHostStateBase {
  public Frame?: AppHostFrameState;

  public Header?: AppHostHeaderState;

  public Loading?: boolean;

  public Nav?: AppHostNavState;

  public SEO?: AppHostSEOState;

  public Theme?: AppHostThemeState;

  public Toolbar?: AppHostToolbarState;
}

export class AppHostState extends AppHostStateBase {
  public ElementConfigs?: { [key: string]: LazyElementConfig };

  public Pages?: AppHostPageState[];
}

export class AppHostFrameState {
  public Collapsed?: boolean;

  public Opened?: boolean;

  public StaticMenuTop?: number;

  public StickyNav?: boolean;
}

export class AppHostHeaderState {
  public BrandTitle?: string;

  public InfoText?: string;

  public InfoTitle?: string;

  public WelcomeTitle?: string;
}

export class AppHostNavState {
  public Actions?: LCUActionState[];

  public CollapseIcon?: boolean;

  public Collapsed?: boolean;

  public ShowCollapse?: boolean;
}

export class AppHostPageState extends AppHostStateBase {
  public ElementConfigs: string[];

  public Route: string;
}

export class AppHostSEOState {
  public Description?: string;

  public Title?: string;
}

export class AppHostThemeState {
  public Name?: string;

  public UsePageMargin?: boolean;
}

export class AppHostToolbarState {
  public Actions?: LCUActionState[];

  public Logo?: string;

  public LogoMobile?: string;

  public Title?: string;
}
