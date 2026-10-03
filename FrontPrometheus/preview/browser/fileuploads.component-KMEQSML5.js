import {
  FilePondComponent,
  FilePondModule
} from "./chunk-NJNQMACQ.js";
import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/forms/form-elements/fileuploads/fileuploads.component.ts
var _c0 = ["myPond"];
var FileuploadsComponent = class _FileuploadsComponent {
  constructor() {
    this.pondOptions = {
      allowMultiple: true,
      labelIdle: "Drop files here to Upload..."
    };
    this.singlepondOptions = {
      allowMultiple: false,
      labelIdle: "Drop files here to Upload..."
    };
    this.dropzoneOptions = {
      allowMultiple: false,
      labelIdle: "Drop files here to Upload..."
    };
    this.pondFiles = [];
  }
  pondHandleInit() {
  }
  pondHandleAddFile(event) {
  }
  pondHandleActivateFile(event) {
  }
  static {
    this.\u0275fac = function FileuploadsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileuploadsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileuploadsComponent, selectors: [["app-fileuploads"]], viewQuery: function FileuploadsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.myPond = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 6, consts: [["myPond", ""], ["hassub", "", "sub", "Forms", "title1", "Form Elements", "title", "File Uploads", "activeTitle", "File Uploads"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "mb-3"], ["for", "formFile", 1, "form-label"], ["type", "file", "id", "formFile", 1, "form-control"], ["for", "formFileMultiple", 1, "form-label"], ["type", "file", "id", "formFileMultiple", "multiple", "", 1, "form-control"], ["for", "formFileDisabled", 1, "form-label"], ["type", "file", "id", "formFileDisabled", "disabled", "", 1, "form-control"], ["for", "formFileSm", 1, "form-label"], ["id", "formFileSm", "type", "file", 1, "form-control", "form-control-sm"], ["for", "formFileLg", 1, "form-label"], ["id", "formFileLg", "type", "file", 1, "form-control", "form-control-lg"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], [1, "col-xl-12"], [1, "card-header"], [1, "multiple-filepond", 3, "oninit", "onaddfile", "onactivatefile", "options", "files"], [1, "single-fileupload", 3, "oninit", "onaddfile", "onactivatefile", "options", "files"], [3, "oninit", "onaddfile", "onactivatefile", "options", "files"]], template: function FileuploadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
        \u0275\u0275text(6, " Bootstrap File Input ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "button", 8);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "label", 12);
        \u0275\u0275text(14, "Default file input example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "label", 14);
        \u0275\u0275text(18, "Multiple files input example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11)(21, "label", 16);
        \u0275\u0275text(22, "Disabled file input example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 11)(25, "label", 18);
        \u0275\u0275text(26, "Small file input example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div")(29, "label", 20);
        \u0275\u0275text(30, "Large file input example");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 22)(33, "pre", 23)(34, "code", 23);
        \u0275\u0275text(35, '<div class="mb-3">\n<label for="formFile" class="form-label">Default file input example</label>\n<input class="form-control" type="file" id="formFile">\n</div>\n<div class="mb-3">\n<label for="formFileMultiple" class="form-label">Multiple files input\nexample</label>\n<input class="form-control" type="file" id="formFileMultiple" multiple="">\n</div>\n<div class="mb-3">\n<label for="formFileDisabled" class="form-label">Disabled file input\nexample</label>\n<input class="form-control" type="file" id="formFileDisabled" disabled>\n</div>\n<div class="mb-3">\n<label for="formFileSm" class="form-label">Small file input example</label>\n<input class="form-control form-control-sm" id="formFileSm" type="file">\n</div>\n<div>\n<label for="formFileLg" class="form-label">Large file input example</label>\n<input class="form-control form-control-lg" id="formFileLg" type="file">\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(36, "div", 3)(37, "h6", 11);
        \u0275\u0275text(38, "Filepond:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 2)(40, "div", 24)(41, "div", 4)(42, "div", 25)(43, "div", 6);
        \u0275\u0275text(44, " Multiple Upload ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 10)(46, "file-pond", 26, 0);
        \u0275\u0275listener("oninit", function FileuploadsComponent_Template_file_pond_oninit_46_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleInit());
        })("onaddfile", function FileuploadsComponent_Template_file_pond_onaddfile_46_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleAddFile($event));
        })("onactivatefile", function FileuploadsComponent_Template_file_pond_onactivatefile_46_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleActivateFile($event));
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 24)(49, "div", 4)(50, "div", 25)(51, "div", 6);
        \u0275\u0275text(52, " Single Upload ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 10)(54, "file-pond", 27, 0);
        \u0275\u0275listener("oninit", function FileuploadsComponent_Template_file_pond_oninit_54_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleInit());
        })("onaddfile", function FileuploadsComponent_Template_file_pond_onaddfile_54_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleAddFile($event));
        })("onactivatefile", function FileuploadsComponent_Template_file_pond_onactivatefile_54_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleActivateFile($event));
        });
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(56, "div", 2)(57, "div", 24)(58, "div", 4)(59, "div", 25)(60, "div", 6);
        \u0275\u0275text(61, " Dropzone ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 10)(63, "file-pond", 28, 0);
        \u0275\u0275listener("oninit", function FileuploadsComponent_Template_file_pond_oninit_63_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleInit());
        })("onaddfile", function FileuploadsComponent_Template_file_pond_onaddfile_63_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleAddFile($event));
        })("onactivatefile", function FileuploadsComponent_Template_file_pond_onactivatefile_63_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleActivateFile($event));
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(46);
        \u0275\u0275property("options", ctx.pondOptions)("files", ctx.pondFiles);
        \u0275\u0275advance(8);
        \u0275\u0275property("options", ctx.singlepondOptions)("files", ctx.pondFiles);
        \u0275\u0275advance(9);
        \u0275\u0275property("options", ctx.dropzoneOptions)("files", ctx.pondFiles);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, FilePondModule, FilePondComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileuploadsComponent, { className: "FileuploadsComponent", filePath: "src\\app\\components\\forms\\form-elements\\fileuploads\\fileuploads.component.ts", lineNumber: 13 });
})();
export {
  FileuploadsComponent
};
//# sourceMappingURL=fileuploads.component-KMEQSML5.js.map
