import {
  FilePondComponent,
  FilePondModule
} from "./chunk-NJNQMACQ.js";
import {
  AngularEditorComponent,
  AngularEditorModule
} from "./chunk-YMML7LXJ.js";
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
import {
  NgbModule
} from "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  HttpClientModule,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵrepeaterTrackByIdentity,
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

// src/app/components/pages/ecommerce/editproducts/editproducts.component.ts
var _c0 = ["myPond"];
function EditproductsComponent_For_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275property("value", tag_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r2.name);
  }
}
var EditproductsComponent = class _EditproductsComponent {
  OnSelect2(event) {
    this.files2.push(...event.addedFiles);
  }
  OnRemove2(event) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  OnSelect3(event) {
    this.files3.push(...event.addedFiles);
  }
  OnRemove3(event) {
    this.files2.splice(this.files3.indexOf(event), 1);
  }
  constructor() {
    this.basicDemoValue = "2017-01-01";
    this.timePicker = null;
    this.files2 = [];
    this.files3 = [];
    this.type = "component";
    this.disabled = false;
    this.selectedSimpleItem = "select";
    this.simpleItems = [];
    this.selectedSimpleItem1 = "select";
    this.simpleItems1 = [];
    this.selectedSimpleItem2 = "select";
    this.simpleItems2 = [];
    this.selectedSimpleItem3 = "select";
    this.simpleItems3 = [];
    this.selectedSimpleItem4 = "select";
    this.simpleItems4 = [];
    this.selectedSimpleItem5 = "select";
    this.simpleItems5 = [];
    this.producttags = ["Plain"];
    this.tags = [
      { id: 1, name: "Plain" },
      { id: 2, name: "Relaxed" },
      { id: 3, name: "Washed" },
      { id: 4, name: "solid" }
    ];
    this.selectedcolortag = ["White"];
    this.colortag = [
      { id: 1, name: "Red" },
      { id: 2, name: "Pink" },
      { id: 3, name: "Yellow" },
      { id: 4, name: "Orange" },
      { id: 5, name: "Green" }
    ];
    this.selectedSimpleItem6 = "select";
    this.simpleItems6 = [];
    this.htmlContent = ` <ul>
  <li>Care Instructions: Wipe clean with a soft, dry cloth.</li>
  <li>Neckband Type: Equipped with a comfortable neckband design.</li>
  <li>Fit Type: Designed for a secure and comfortable fit.</li>
  <li>Long Sleeves: The pullover is designed with Long Sleeves.</li>
  <li>Playtime: Enjoy extended usage with long-lasting battery life.</li>
  <li>Sound Quality: Delivers exceptional audio quality for an immersive experience.</li>
  <li>Design: Sleek and modern design with adjustable components for a customized fit.</li>
</ul>`;
    this.config = {
      editable: true,
      spellcheck: true,
      height: "15rem",
      minHeight: "5rem",
      placeholder: "Enter text here...",
      translate: "no",
      defaultParagraphSeparator: "p",
      defaultFontName: "Arial",
      toolbarHiddenButtons: [["bold"]],
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
    this.pondOptions = {
      allowMultiple: true,
      labelIdle: "Drop files here to Upload..."
    };
    this.singlepondOptions = {
      allowMultiple: false,
      labelIdle: "Drop files here to Upload..."
    };
    this.pondFiles = [];
  }
  toggleType() {
    this.type = this.type === "component" ? "directive" : "component";
  }
  toggleDisabled1() {
    this.disabled = !this.disabled;
  }
  onUploadInit(args) {
    console.log("onUploadInit:", args);
  }
  onUploadError(args) {
    console.log("onUploadError:", args);
  }
  onUploadSuccess(args) {
    console.log("onUploadSuccess:", args);
  }
  ngOnInit() {
    this.simpleItems = [
      "Jewellery",
      "Ethnic & Festive",
      "Grooming",
      "Accesories",
      "Footwear",
      "Category",
      "Clothing"
    ];
    this.simpleItems1 = ["Male", "All", "Female", "Others"];
    this.simpleItems2 = ["Small", "Medium", "Extra Large", "Large"];
    this.simpleItems3 = ["Armani", "Lacoste", "Arrrabi", "Mufti"];
    this.simpleItems4 = ["Black", "Orange", "Yellow", "Green", "Pink", "purple"];
    this.simpleItems5 = ["Publish", "Scheduled"];
    this.simpleItems6 = ["In Stock", "Out Of Stock"];
  }
  pondHandleInit() {
  }
  pondHandleAddFile(event) {
  }
  pondHandleActivateFile(event) {
  }
  static {
    this.\u0275fac = function EditproductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditproductsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditproductsComponent, selectors: [["app-editproducts"]], viewQuery: function EditproductsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.myPond = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275StandaloneFeature], decls: 122, vars: 32, consts: [["myPond", ""], ["hassub", "", "sub", "Pages", "title1", "Ecommerce", "title", "Edit Products", "activeTitle", "Edit Products"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body", "add-products", "p-0"], [1, "p-4"], [1, "row", "gx-5"], [1, "col-xxl-6", "col-xl-12", "col-lg-12", "col-md-6"], [1, "card", "shadow-none", "mb-0"], [1, "card-body", "p-0"], [1, "row", "gy-3"], ["for", "product-name-add", 1, "form-label"], ["type", "text", "id", "product-name-add", "placeholder", "Name", "value", "Light Blue Sweat Shirt", 1, "form-control"], ["for", "product-name-add", 1, "form-label", "mt-1", "fs-12", "op-5", "text-muted", "mb-0"], [1, "col-xl-6"], ["for", "product-category-add", 1, "form-label"], [3, "ngModelChange", "items", "ngModel"], ["for", "product-gender-add", 1, "form-label"], ["for", "product-size-add", 1, "form-label"], ["for", "product-brand-add", 1, "form-label"], [1, "col-xl-6", "color-selection"], ["for", "product-color-add", 1, "form-label"], ["placeholder", "select", 3, "ngModelChange", "items", "ngModel", "multiple", "hideSelected", "closeOnSelect", "selectableGroup"], ["for", "product-cost-add", 1, "form-label"], ["type", "text", "id", "product-cost-add", "placeholder", "Cost", "value", "$1299.99", 1, "form-control"], ["for", "product-cost-add", 1, "form-label", "mt-1", "fs-12", "op-5", "text-muted", "mb-0"], ["for", "product-description-add", 1, "form-label"], ["id", "product-description-add", "rows", "2", 1, "form-control"], ["for", "product-description-add", 1, "form-label", "mt-1", "fs-12", "op-5", "text-muted", "mb-0"], [1, "form-label"], ["id", "product-features"], [3, "ngModel", "config"], [1, "row", "gy-4"], [1, "col-xl-4"], ["for", "product-actual-price", 1, "form-label"], ["type", "text", "id", "product-actual-price", "placeholder", "Actual Price", "value", "$1,499.90", 1, "form-control"], ["for", "product-dealer-price", 1, "form-label"], ["type", "text", "id", "product-dealer-price", "placeholder", "Dealer Price", "value", "$1,299.99", 1, "form-control"], ["for", "product-discount", 1, "form-label"], ["type", "text", "id", "product-discount", "placeholder", "Discount in %", "value", "0.75%", 1, "form-control"], ["for", "product-type", 1, "form-label"], ["type", "text", "id", "product-type", "placeholder", "Type", "value", "Watch", 1, "form-control"], ["for", "product-weight", 1, "form-label"], ["type", "text", "id", "product-weight", "placeholder", "Weight in gms", "value", "180gms", 1, "form-control"], [1, "col-xl-12", "product-documents-container"], [1, "fw-semibold", "mb-2", "fs-14"], [1, "multiple-filepond", "box-container", "flex-col", "product-Images", 3, "oninit", "onaddfile", "onactivatefile", "options", "files"], [1, "form-label", "op-5", "mt-3"], [1, "multiple-filepond", "box-container", "flex-col", "product-documents", 3, "oninit", "onaddfile", "onactivatefile", "options", "files"], ["for", "publish-date", 1, "form-label"], ["type", "text", "id", "publish-date", "placeholder", "Choose date", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "publish-time", 1, "form-label"], ["type", "text", "id", "publish-time", "placeholder", "Choose time", "mwlFlatpickr", "", 1, "form-control", 3, "ngModelChange", "ngModel", "noCalendar", "enableTime", "dateFormat"], ["for", "product-status-add", 1, "form-label"], ["for", "product-tags", 1, "form-label"], [3, "ngModelChange", "multiple", "ngModel"], [3, "value"], ["for", "product-availability", 1, "form-label"], [1, "px-4", "py-3", "border-top", "border-block-start-dashed", "d-sm-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-primary-light", "m-1"], [1, "bi", "bi-plus-lg", "ms-2"], ["type", "button", 1, "btn", "btn-success-light", "m-1"], [1, "bi", "bi-download", "ms-2"]], template: function EditproductsComponent_Template(rf, ctx) {
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
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_ng_select_ngModelChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem, $event) || (ctx.selectedSimpleItem = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 15)(22, "label", 18);
        \u0275\u0275text(23, "Gender");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_ng_select_ngModelChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem1, $event) || (ctx.selectedSimpleItem1 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 15)(26, "label", 19);
        \u0275\u0275text(27, "Size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_ng_select_ngModelChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem2, $event) || (ctx.selectedSimpleItem2 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "label", 20);
        \u0275\u0275text(31, "Brand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_ng_select_ngModelChange_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem3, $event) || (ctx.selectedSimpleItem3 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 21)(34, "label", 22);
        \u0275\u0275text(35, "Colors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ng-select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_ng_select_ngModelChange_36_listener($event) {
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
        \u0275\u0275elementStart(46, "textarea", 28);
        \u0275\u0275text(47, "Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "label", 29);
        \u0275\u0275text(49, "*Description should not exceed 500 letters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 3)(51, "label", 30);
        \u0275\u0275text(52, "Product Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 31);
        \u0275\u0275element(54, "angular-editor", 32);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(55, "div", 8)(56, "div", 9)(57, "div", 10)(58, "div", 33)(59, "div", 34)(60, "label", 35);
        \u0275\u0275text(61, "Actual Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "input", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 34)(64, "label", 37);
        \u0275\u0275text(65, "Dealer Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(66, "input", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 34)(68, "label", 39);
        \u0275\u0275text(69, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "input", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 15)(72, "label", 41);
        \u0275\u0275text(73, "Product Type");
        \u0275\u0275elementEnd();
        \u0275\u0275element(74, "input", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 15)(76, "label", 43);
        \u0275\u0275text(77, "Item Weight");
        \u0275\u0275elementEnd();
        \u0275\u0275element(78, "input", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 45)(80, "p", 46);
        \u0275\u0275text(81, "Product Images :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "file-pond", 47, 0);
        \u0275\u0275listener("oninit", function EditproductsComponent_Template_file_pond_oninit_82_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleInit());
        })("onaddfile", function EditproductsComponent_Template_file_pond_onaddfile_82_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleAddFile($event));
        })("onactivatefile", function EditproductsComponent_Template_file_pond_onactivatefile_82_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleActivateFile($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "label", 48);
        \u0275\u0275text(85, "Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 45)(87, "p", 46);
        \u0275\u0275text(88, "Warrenty Documents :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "file-pond", 49, 0);
        \u0275\u0275listener("oninit", function EditproductsComponent_Template_file_pond_oninit_89_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleInit());
        })("onaddfile", function EditproductsComponent_Template_file_pond_onaddfile_89_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleAddFile($event));
        })("onactivatefile", function EditproductsComponent_Template_file_pond_onactivatefile_89_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pondHandleActivateFile($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 15)(92, "label", 50);
        \u0275\u0275text(93, "Publish Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "input", 51);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_input_ngModelChange_94_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.basicDemoValue, $event) || (ctx.basicDemoValue = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 15)(96, "label", 52);
        \u0275\u0275text(97, "Publish Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "input", 53);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_input_ngModelChange_98_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.timePicker, $event) || (ctx.timePicker = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 15)(100, "label", 54);
        \u0275\u0275text(101, "Published Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_ng_select_ngModelChange_102_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem5, $event) || (ctx.selectedSimpleItem5 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 15)(104, "label", 55);
        \u0275\u0275text(105, "Product Tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "ng-select", 56);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_ng_select_ngModelChange_106_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.producttags, $event) || (ctx.producttags = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(107, EditproductsComponent_For_108_Template, 2, 2, "ng-option", 57, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(109, "ng-option", 57);
        \u0275\u0275text(110, "Custom");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div", 3)(112, "label", 58);
        \u0275\u0275text(113, "Availability");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "ng-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EditproductsComponent_Template_ng_select_ngModelChange_114_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem6, $event) || (ctx.selectedSimpleItem6 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(115, "div", 59)(116, "button", 60);
        \u0275\u0275text(117, "Add Product");
        \u0275\u0275element(118, "i", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "button", 62);
        \u0275\u0275text(120, "Save Product");
        \u0275\u0275element(121, "i", 63);
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
        \u0275\u0275property("items", ctx.simpleItems4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem4);
        \u0275\u0275property("multiple", true)("hideSelected", true)("closeOnSelect", false)("selectableGroup", true);
        \u0275\u0275advance(18);
        \u0275\u0275property("ngModel", ctx.htmlContent)("config", ctx.config);
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
        \u0275\u0275twoWayProperty("ngModel", ctx.producttags);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.tags);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "custom");
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.simpleItems6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem6);
      }
    }, dependencies: [
      SharedModule,
      PageHeaderComponent,
      FilePondModule,
      FilePondComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      NgSelectModule,
      NgSelectComponent,
      NgOptionComponent,
      NgbModule,
      AngularEditorModule,
      AngularEditorComponent,
      HttpClientModule,
      FlatpickrModule,
      FlatpickrDirective
    ], styles: ["\n\n  .NgxEditor__Content {\n  height: 12rem;\n}\n/*# sourceMappingURL=editproducts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditproductsComponent, { className: "EditproductsComponent", filePath: "src\\app\\components\\pages\\ecommerce\\editproducts\\editproducts.component.ts", lineNumber: 37 });
})();
export {
  EditproductsComponent
};
//# sourceMappingURL=editproducts.component-EH7F4CSG.js.map
