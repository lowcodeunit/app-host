import { LCUElementContext } from '@lcu/common';
import { AppHostState } from '../../state/app-host.state';

export class LCUAppHostElementState {}

export class LCUAppHostContext extends LCUElementContext<LCUAppHostElementState> {
  public AppHost?: AppHostState
  ;
}
