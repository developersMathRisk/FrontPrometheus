import {
  ngxeditor_default
} from "./chunk-CUDY5JTK.js";
import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule,
  Validators
} from "./chunk-LK7N2SI6.js";
import {
  AngularEditorComponent,
  AngularEditorModule
} from "./chunk-YMML7LXJ.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  HttpClientModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/forms/form-editors/angular-editor/angular-editor.component.ts
var AngularEditorComponent2 = class _AngularEditorComponent {
  constructor() {
    this.editordoc = ngxeditor_default;
    this.toolbar = [
      ["bold", "italic"],
      ["underline", "strike"],
      ["code", "blockquote"],
      ["ordered_list", "bullet_list"],
      [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
      ["link", "image"],
      ["text_color", "background_color"],
      ["align_left", "align_center", "align_right", "align_justify"]
    ];
    this.form = new FormGroup({
      editorContent: new FormControl({ value: ngxeditor_default, disabled: false }, Validators.required())
    });
    this.htmlContent = "";
    this.config = {
      editable: true,
      spellcheck: true,
      height: "15rem",
      minHeight: "5rem",
      placeholder: "Enter text here...",
      translate: "no",
      defaultParagraphSeparator: "p",
      defaultFontName: "Arial",
      toolbarHiddenButtons: [
        ["bold"]
      ],
      customClasses: [
        {
          name: "quote",
          class: "quote"
        },
        {
          name: "redText",
          class: "redText"
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1"
        }
      ]
    };
  }
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static {
    this.\u0275fac = function AngularEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AngularEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AngularEditorComponent, selectors: [["app-angular-editor"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 6, consts: [["hassub", "", "sub", "Forms", "title1", "Forms Editors", "title", "Angular Editor", "activeTitle", "Angular Editor"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "formGroup"], [1, "NgxEditor__Wrapper"], [3, "editor", "toolbar"], ["formControlName", "editorContent", 3, "editor"], ["id", "editor1"], [3, "ngModel", "config"]], template: function AngularEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Quill Snow Editor ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "form", 7)(9, "div", 8);
        \u0275\u0275element(10, "ngx-editor-menu", 9)(11, "ngx-editor", 10);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(12, "div", 1)(13, "div", 2)(14, "div", 3)(15, "div", 4)(16, "div", 5);
        \u0275\u0275text(17, " Quill Bubble Editor ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "div", 11);
        \u0275\u0275element(20, "angular-editor", 12);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
        \u0275\u0275advance();
        \u0275\u0275property("editor", ctx.editor);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngModel", ctx.htmlContent)("config", ctx.config);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgxEditorModule, NgxEditorComponent, MenuComponent, AngularEditorModule, AngularEditorComponent, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, HttpClientModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AngularEditorComponent2, { className: "AngularEditorComponent", filePath: "src\\app\\components\\forms\\form-editors\\angular-editor\\angular-editor.component.ts", lineNumber: 18 });
})();
export {
  AngularEditorComponent2 as AngularEditorComponent
};
//# sourceMappingURL=angular-editor.component-HSMNZTQ5.js.map
