import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { AppHostState } from './app-host.state';

@Injectable({
  providedIn: 'root',
})
export class AppHostStateContext extends StateContext<AppHostState> {
  // Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  // API Methods
  public GetLcuById(id: number): void {
    this.Execute({
      Arguments: {
        LcuId: id,
      },
      Type: 'GetLcuById',
    });
  }

  //  Helpers
  protected defaultValue() {
    return { Loading: true } as AppHostState;
  }

  protected loadStateKey(): string {
    return 'main';
  }

  protected loadStateName(): string {
    return 'apphost';
  }
}
