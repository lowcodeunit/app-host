import { MetaDefinition } from '@angular/platform-browser';
import { LazyElementConfig, LazyElementToken } from '@lowcodeunit/lazy-element';
import { LCUActionState } from '../controls/action/action.component';

export class AppHostStateBase {
  public Footer?: AppHostFooterState;

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

export class AppHostFooterState {
  public ActionGroups?: AppHostActionGroupState[];

  public Partners?: AppHostActionGroupState;
}

export class AppHostActionGroupState {
  public Actions?: LCUActionState[];

  public Class?: string;

  public Title?: string;
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
  /**
   * Mapping of element config keys to use and the coresponding propert on State to use.
   */
  public ElementConfigs: LazyElementToken[];

  public Route: string;
}

export class AppHostSEOState {
  public MetaTags?: { [tag: string]: string };

  public Title?: string;
}

export class AppHostThemeState {
  public Name?: string;

  public UsePageBackground?: boolean;

  public UsePageMargin?: boolean;
}

export class AppHostToolbarState {
  public Actions?: LCUActionState[];

  public Logo?: string;

  public LogoMobile?: string;

  public Title?: string;
}
