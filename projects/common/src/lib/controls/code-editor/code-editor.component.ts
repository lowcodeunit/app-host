import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  ElementRef,
  OnDestroy,
  forwardRef,
  HostBinding,
  InjectionToken,
  OnChanges,
  Inject,
  SimpleChanges,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { LCUServiceSettings } from '@lcu/common';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxEditorModel } from 'ngx-monaco-editor';

export const LCU_CODE_EDITOR_CONFIG = new InjectionToken(
  'LCU_CODE_EDITOR_CONFIG'
);

export class LCUCodeEditorConfig {
  public BaseURL?: string;

  public DefaultOptions?: { [key: string]: any };

  public OnMonacoLoad?: Function;
}

export class LCUCodeModel {
  public Code?: string;

  public Language?: string;

  public URI?: string;
}

@Component({
  selector: 'lcu-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeEditorComponent),
      multi: true,
    },
  ],
})
export class CodeEditorComponent
  implements AfterViewInit, OnChanges, OnDestroy, OnInit {
  //  Fields
  // protected get codeEditor(): monacoEditor.IStandaloneCodeEditor {
  //   if (
  //     this.editor &&
  //     (this.editor as monacoEditor.IStandaloneCodeEditor).onDidChangeModel
  //   ) {
  //     return this.editor as monacoEditor.IStandaloneCodeEditor;
  //   }
  // }

  // protected get diffEditor(): monacoEditor.IStandaloneDiffEditor {
  //   if (
  //     this.editor &&
  //     (this.editor as monacoEditor.IStandaloneDiffEditor).onDidUpdateDiff
  //   ) {
  //     return this.editor as monacoEditor.IStandaloneDiffEditor;
  //   }
  // }

  // protected editor:
  //   | monacoEditor.IStandaloneCodeEditor
  //   | monacoEditor.IStandaloneDiffEditor;

  protected loadedMonaco: boolean;

  protected loadPromise: Promise<void>;

  // protected options: monacoEditor.IStandaloneEditorConstructionOptions;

  protected winAny: any;

  protected windowResizeSubscription: Subscription;

  //  Properties
  @Input('code')
  public Code: string;

  @Output('codeChange')
  public CodeChange: EventEmitter<string>;

  public CodeModel: NgxEditorModel;

  @Input('diff-code')
  public DiffCode: string;

  @Input('disabled')
  public Disabled: boolean;

  @Output('init')
  public Init: EventEmitter<any>;

  @Input('language')
  public Language: string;

  @HostBinding('style.opacity')
  public get Opacity(): number {
    return this.Disabled ? 0.25 : 1;
  }

  @Input('options')
  public Options: any;

  //  Constructors
  constructor(
    public EditorEl: ElementRef,
    // @Inject(LCU_CODE_EDITOR_CONFIG) protected config: LCUCodeEditorConfig
  ) {
    this.CodeChange = new EventEmitter();

    this.Init = new EventEmitter();

    this.winAny = window;
  }

  //  Life Cycle
  public ngAfterViewInit(): void {
    // this.configureMonacoEditor();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // const codeChanges = ;

    if (changes.Options || changes.Language || changes.Disabled) {
      // this.configureMonacoEditor();
    }

    if (changes.Code) {
      this.setCode();
    }
  }

  public ngOnDestroy() {
    // if (this.windowResizeSubscription) {
    //   this.windowResizeSubscription.unsubscribe();
    // }

    // if (this.editor) {
    //   this.editor.dispose();

    //   this.editor = undefined;
    // }
  }

  public ngOnInit(): void {}

  //  API Methods

  //  Helpers
  // protected buildMonacoLoader(resolve: any) {
  //   if (!this.winAny.require) {
  //     const loaderScript: HTMLScriptElement = document.createElement('script');

  //     loaderScript.type = 'text/javascript';

  //     loaderScript.src = `${this.config.BaseURL}/loader.js`;

  //     loaderScript.addEventListener('load', () => {
  //       this.onGotAmdLoader(resolve);
  //     });

  //     document.body.appendChild(loaderScript);
  //   } else {
  //     this.onGotAmdLoader(resolve);
  //   }
  // }

  // protected configureMonacoEditor() {
  //   this.establishOptions();

  //   this.establishBaseUrl();

  //   this.loadMonaco();
  // }

  // protected establishBaseUrl() {
  //   this.config.BaseURL = this.config.BaseURL || `/assets/monaco-editor/vs`;
  // }

  protected establishOptions() {
    // this.Options = Object.assign(
    //   {},
    //   // this.config?.DefaultOptions || {},
    //   this.Options
    // );
  }

  // protected initMonaco(): void {
  //   if (this.editor && this.editor.dispose) {
  //     this.ngOnDestroy();
  //   }

  //   console.log('Initializing monaco editor...');

  //   if (!!this.DiffCode) {
  //     this.initMonacoDiffEditor();
  //   } else {
  //     this.initMonacoCodeEditor();
  //   }

  //   this.setupWindowResize();

  //   console.log('Initialized monaco editor');

  //   this.Init.emit(this.Options);
  // }

  // protected initMonacoCodeEditor(): void {
  //   console.log('Initializing monaco code editor...');

  //   const hasModel = !!this.Options.model;

  //   // if (this.Code) {
  //   //   debugger;
  //   //   const model = null; // monacoEditor.getModel(this.options.model.uri || '');

  //   //   if (model) {
  //   //     this.options.model = model;

  //   //     this.options.model.setValue(this.Code);
  //   //   } else {
  //   //     this.options.model = monacoEditor.createModel(
  //   //       this.Code,
  //   //       this.Language
  //   //     );
  //   //   }
  //   // }

  //   this.editor = monacoEditor.create(
  //     this.EditorEl.nativeElement,
  //     this.Options
  //   );

  //   this.setCode();

  //   this.setupChangeHandle();

  //   this.setupTouchHandle();

  //   console.log('Initialized monaco code editor');
  // }

  // protected initMonacoDiffEditor(): void {
  //   console.log('Initializing monaco diff editor...');

  //   if (!this.Code || !this.DiffCode) {
  //     throw new Error(
  //       'originalModel or modifiedModel not found for code editor'
  //     );
  //   }

  //   this.Language = this.Language || this.Options.language;

  //   this.EditorEl.nativeElement.innerHTML = '';

  //   const theme = this.Options.theme;

  //   this.editor = monacoEditor.createDiffEditor(
  //     this.EditorEl.nativeElement,
  //     this.Options
  //   );

  //   this.Options.theme = theme;

  //   this.setCode();

  //   console.log('Initialized monaco diff editor');
  // }

  // protected loadMonaco(): void {
  //   if (this.loadedMonaco) {
  //     // Wait until monaco editor is available
  //     this.loadPromise.then(() => {
  //       this.initMonaco();
  //     });
  //   } else {
  //     this.loadedMonaco = true;

  //     this.loadPromise = new Promise<void>((resolve: any) => {
  //       if (typeof this.winAny.monaco === 'object') {
  //         resolve();

  //         return;
  //       }

  //       this.buildMonacoLoader(resolve);
  //     });
  //   }
  // }

  // protected onGotAmdLoader(resolve: any) {
  //   // Load monaco
  //   this.winAny.require.config({
  //     paths: { vs: `${this.config.BaseURL}` },
  //   });

  //   this.winAny.require(['vs/editor/editor.main'], () => {
  //     if (typeof this.config.OnMonacoLoad === 'function') {
  //       this.config.OnMonacoLoad();
  //     }

  //     this.initMonaco();

  //     resolve();
  //   });
  // }

  protected setCode() {
    this.CodeModel = {
      value: this.Code,
      language: this.Language
    };

    // if (this.codeEditor) {
    //   if (this.codeEditor.getValue() !== this.Code) {
    //     this.codeEditor.setValue(this.Code || '');
    //   }
    // }

    // if (this.diffEditor) {
    //   if (
    //     this.diffEditor.getOriginalEditor().getValue() !== this.Code ||
    //     this.diffEditor.getModifiedEditor().getValue() !== this.DiffCode
    //   ) {
    //     const originalModel = monacoEditor.createModel(
    //       this.Code,
    //       this.Language
    //     );

    //     const modifiedModel = monacoEditor.createModel(
    //       this.DiffCode,
    //       this.Language
    //     );

    //     this.diffEditor.setModel({
    //       original: originalModel,
    //       modified: modifiedModel,
    //     });
    //   }
    // }
  }

  protected setupChangeHandle() {
    // this.codeEditor.onDidChangeModelContent((e: any) => {
    //   const value = this.codeEditor.getValue();

    //   this.CodeChange.emit(value);

    //   this.Code = value;
    // });
  }

  protected setupTouchHandle() {
    // this.codeEditor.onDidBlurEditorWidget(() => {
    //   this.onTouched();
    // });
  }

  protected setupWindowResize() {
    // if (this.windowResizeSubscription) {
    //   this.windowResizeSubscription.unsubscribe();
    // }

    // this.windowResizeSubscription = fromEvent(window, 'resize').subscribe(() =>
    //   this.editor.layout()
    // );
  }
}
