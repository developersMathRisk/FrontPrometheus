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
  FilePondComponent,
  FilePondModule
} from "./chunk-NJNQMACQ.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  FlatpickrDirective,
  FlatpickrModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/ecommerce/addproduct/addproduct.component.ts
var _c0 = ["myPond"];
function AddproductComponent_For_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275property("value", product_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r2.name);
  }
}
var AddproductComponent = class _AddproductComponent {
  constructor() {
    this.basicDemoValue = "2017-01-01";
    this.timePicker = null;
    this.files2 = [];
    this.selectedSimpleItem = "Category";
    this.simpleItems = [
      "Clothings",
      "Accesories",
      "Dining",
      "Athnic & Festive",
      "Festive Gift",
      "Grooming",
      "Footwear",
      "Jewellery",
      "Stationary",
      "Toys & BabyCare"
    ];
    this.selectedSimpleItem1 = "select";
    this.simpleItems1 = [
      "All",
      "Male",
      "Female",
      "Others"
    ];
    this.selectedSimpleItem2 = "select";
    this.simpleItems2 = [
      "Extra Small",
      "Small",
      "Medium",
      "Extra Large",
      "Large"
    ];
    this.selectedSimpleItem3 = "select";
    this.simpleItems3 = [
      "Armani",
      "Lacoste",
      "Puma",
      "Spykar",
      "Mufti",
      "Arrabi"
    ];
    this.selectedSimpleItem4 = "select";
    this.simpleItems4 = [
      "White",
      "Orange",
      "Purple",
      "Pink",
      "Blue",
      "Yellow"
    ];
    this.selectedSimpleItem5 = "select";
    this.simpleItems5 = [
      "Published",
      "Scheduled"
    ];
    this.selectedSimpleItem6 = "select";
    this.simpleItems6 = [
      "In Stock",
      "Out of stock"
    ];
    this.selectedProducts = ["Plain", "Relaxed"];
    this.Products = [
      { id: 1, name: "Plain" },
      { id: 2, name: "Relaxed" },
      { id: 3, name: "Washed" },
      { id: 4, name: "Solid" }
    ];
    this.pondOptions = {
      allowMultiple: true,
      labelIdle: "Drop files here to Upload..."
    };
    this.singlepondOptions = {
      allowMultiple: false,
      labelIdle: "Drop files here to Upload..."
    };
    this.pondFiles = [];
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
  }
  OnSelect2(event) {
    this.files2.push(...event.addedFiles);
  }
  OnRemove2(event) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  pondHandleInit() {
  }
  pondHandleAddFile(event) {
  }
  pondHandleActivateFile(event) {
  }
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static {
    this.\u0275fac = function AddproductComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddproductComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddproductComponent, selectors: [["app-addproduct"]], viewQuery: function AddproductComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.myPond = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 124, vars: 32, consts: [["myPond", ""], ["hassub", "", "sub", "Pages", "title1", "Ecommerce", "title", "Add Products", "activeTitle", "Add Products"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body", "add-products", "p-0"], [1, "p-4"], [1, "row", "gx-5"], [1, "col-xxl-6", "col-xl-12", "col-lg-12", "col-md-6"], [1, "card", "shadow-none", "mb-0", "border-0"], [1, "card-body", "p-0"], [1, "row", "gy-3"], ["for", "product-name-add", 1, "form-label"], ["type", "text", "id", "product-name-add", "placeholder", "Name", 1, "form-control"], ["for", "product-name-add", 1, "form-label", "mt-1", "fs-12", "op-5", "text-muted", "mb-0"], [1, "col-xl-6"], ["for", "product-category-add", 1, "form-label"], [3, "ngModelChange", "items", "ngModel"], ["for", "product-gender-add", 1, "form-label"], ["for", "product-size-add", 1, "form-label"], ["for", "product-brand-add", 1, "form-label"], [1, "col-xl-6", "color-selection"], ["for", "product-color-add", 1, "form-label"], [3, "ngModelChange", "items", "multiple", "ngModel"], ["for", "product-cost-add", 1, "form-label"], ["type", "text", "id", "product-cost-add", "placeholder", "Cost", 1, "form-control"], ["for", "product-cost-add", 1, "form-label", "mt-1", "fs-12", "op-5", "text-muted", "mb-0"], ["for", "product-description-add", 1, "form-label"], ["id", "product-description-add", "rows", "2", 1, "form-control"], ["for", "product-description-add", 1, "form-label", "mt-1", "fs-12", "op-5", "text-muted", "mb-0"], [1, "form-label"], ["id", "product-features"], [3, "formGroup"], [1, "NgxEditor__Wrapper"], [3, "editor", "toolbar"], ["formControlName", "editorContent", 3, "editor"], [1, "row", "gy-4"], [1, "col-xl-4"], ["for", "product-actual-price", 1, "form-label"], ["type", "text", "id", "product-actual-price", "placeholder", "Actual Price", 1, "form-control"], ["for", "product-dealer-price", 1, "form-label"], ["type", "text", "id", "product-dealer-price", "placeholder", "Dealer Price", 1, "form-control"], ["for", "product-discount", 1, "form-label"], ["type", "text", "id", "product-discount", "placeholder", "Discount in %", 1, "form-control"], ["for", "product-type", 1, "form-label"], ["type", "text", "id", "product-type", "placeholder", "Type", 1, "form-control"], ["type", "text", "id", "product-discount1", "placeholder", "Weight in gms", 1, "form-control"], [1, "col-xl-12", "product-documents-container"], [1, "fw-semibold", "mb-2", "fs-14"], [1, "multiple-filepond", "box-container", "flex-col", 3, "oninit", "onaddfile", "onactivatefile", "options", "files"], [1, "form-label", "op-5", "mt-3"], ["for", "publish-date", 1, "form-label"], ["type", "text", "id", "publish-date", "placeholder", "Choose date", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "publish-time", 1, "form-label"], ["type", "text", "id", "publish-time", "placeholder", "Choose time", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "noCalendar", "enableTime", "dateFormat"], ["for", "product-status-add", 1, "form-label"], ["for", "product-tags", 1, "form-label"], [3, "ngModelChange", "multiple", "ngModel", "hideSelected"], [3, "value"], ["for", "product-status-add1", 1, "form-label"], [1, "px-4", "py-3", "border-top", "border-block-start-dashed", "d-sm-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-primary-light", "m-1"], [1, "bi", "bi-plus-lg", "ms-2"], ["type", "button", 1, "btn", "btn-success-light", "m-1"], [1, "bi", "bi-download", "ms-2"]], template: function AddproductComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "div", 3)(12, "label", 12);
        \u0275\u0275text(13, "Product Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 13);
        \u0275\u0275elementStart(15, "label", 14);
        \u0275\u0275text(16, "*Product Name should not exceed 30 characters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 15)(18, "label", 16);
        \u0275\u0275text(19, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_ng_select_ngModelChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem, $event) || (ctx.selectedSimpleItem = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 15)(22, "label", 18);
        \u0275\u0275text(23, "Gender");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_ng_select_ngModelChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem1, $event) || (ctx.selectedSimpleItem1 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 15)(26, "label", 19);
        \u0275\u0275text(27, "Size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_ng_select_ngModelChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem2, $event) || (ctx.selectedSimpleItem2 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "label", 20);
        \u0275\u0275text(31, "Brand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_ng_select_ngModelChange_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem3, $event) || (ctx.selectedSimpleItem3 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 21)(34, "label", 22);
        \u0275\u0275text(35, "Colors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ng-select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_ng_select_ngModelChange_36_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem4, $event) || (ctx.selectedSimpleItem4 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 15)(38, "label", 24);
        \u0275\u0275text(39, "Enter Cost");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 25);
        \u0275\u0275elementStart(41, "label", 26);
        \u0275\u0275text(42, "*Mention final price of the product");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 3)(44, "label", 27);
        \u0275\u0275text(45, "Product Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "textarea", 28);
        \u0275\u0275elementStart(47, "label", 29);
        \u0275\u0275text(48, "*Description should not exceed 500 letters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 3)(50, "label", 30);
        \u0275\u0275text(51, "Product Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 31)(53, "form", 32)(54, "div", 33);
        \u0275\u0275element(55, "ngx-editor-menu", 34)(56, "ngx-editor", 35);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(57, "div", 8)(58, "div", 9)(59, "div", 10)(60, "div", 36)(61, "div", 37)(62, "label", 38);
        \u0275\u0275text(63, "Actual Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "input", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 37)(66, "label", 40);
        \u0275\u0275text(67, "Dealer Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(68, "input", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 37)(70, "label", 42);
        \u0275\u0275text(71, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275element(72, "input", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 15)(74, "label", 44);
        \u0275\u0275text(75, "Product Type");
        \u0275\u0275elementEnd();
        \u0275\u0275element(76, "input", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 15)(78, "label", 42);
        \u0275\u0275text(79, "Item Weight");
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "input", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 47)(82, "p", 48);
        \u0275\u0275text(83, "Product Images :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "file-pond", 49, 0);
        \u0275\u0275listener("oninit", function AddproductComponent_Template_file_pond_oninit_84_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleInit());
        })("onaddfile", function AddproductComponent_Template_file_pond_onaddfile_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleAddFile($event));
        })("onactivatefile", function AddproductComponent_Template_file_pond_onactivatefile_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleActivateFile($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "label", 50);
        \u0275\u0275text(87, "Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 47)(89, "p", 48);
        \u0275\u0275text(90, "Warrenty Documents :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "file-pond", 49, 0);
        \u0275\u0275listener("oninit", function AddproductComponent_Template_file_pond_oninit_91_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleInit());
        })("onaddfile", function AddproductComponent_Template_file_pond_onaddfile_91_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleAddFile($event));
        })("onactivatefile", function AddproductComponent_Template_file_pond_onactivatefile_91_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleActivateFile($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 15)(94, "label", 51);
        \u0275\u0275text(95, "Publish Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "input", 52);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_input_ngModelChange_96_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.basicDemoValue, $event) || (ctx.basicDemoValue = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 15)(98, "label", 53);
        \u0275\u0275text(99, "Publish Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "input", 54);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_input_ngModelChange_100_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.timePicker, $event) || (ctx.timePicker = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "div", 15)(102, "label", 55);
        \u0275\u0275text(103, "Published Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_ng_select_ngModelChange_104_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem5, $event) || (ctx.selectedSimpleItem5 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 15)(106, "label", 56);
        \u0275\u0275text(107, "Product Tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "ng-select", 57);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_ng_select_ngModelChange_108_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedProducts, $event) || (ctx.selectedProducts = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(109, AddproductComponent_For_110_Template, 2, 2, "ng-option", 58, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(111, "ng-option", 58);
        \u0275\u0275text(112, "Custom");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(113, "div", 3)(114, "label", 59);
        \u0275\u0275text(115, "Availability");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function AddproductComponent_Template_ng_select_ngModelChange_116_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem6, $event) || (ctx.selectedSimpleItem6 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(117, "div", 60)(118, "button", 61);
        \u0275\u0275text(119, "Add Product");
        \u0275\u0275element(120, "i", 62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "button", 63);
        \u0275\u0275text(122, "Save Product");
        \u0275\u0275element(123, "i", 64);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275property("items", ctx.simpleItems);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem);
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.simpleItems1);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem1);
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.simpleItems2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem2);
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.simpleItems3);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem3);
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.simpleItems4)("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem4);
        \u0275\u0275advance(17);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
        \u0275\u0275advance();
        \u0275\u0275property("editor", ctx.editor);
        \u0275\u0275advance(28);
        \u0275\u0275property("options", ctx.pondOptions)("files", ctx.pondFiles);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.pondOptions)("files", ctx.pondFiles);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.basicDemoValue);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.timePicker);
        \u0275\u0275property("noCalendar", true)("enableTime", true)("dateFormat", "h:i");
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.simpleItems5);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem5);
        \u0275\u0275advance(4);
        \u0275\u0275property("multiple", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedProducts);
        \u0275\u0275property("hideSelected", true);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.Products);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "custom");
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.simpleItems6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem6);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, NgxEditorModule, NgxEditorComponent, MenuComponent, HttpClientModule, FilePondModule, FilePondComponent, FlatpickrModule, FlatpickrDirective], styles: ["\n\n  .NgxEditor__Content {\n  height: 10rem;\n}\n/*# sourceMappingURL=addproduct.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddproductComponent, { className: "AddproductComponent", filePath: "src\\app\\components\\pages\\ecommerce\\addproduct\\addproduct.component.ts", lineNumber: 21 });
})();
export {
  AddproductComponent
};
//# sourceMappingURL=addproduct.component-GCHD3RGY.js.map
