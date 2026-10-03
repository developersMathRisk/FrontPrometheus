import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-PSOT7MFX.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollDispatcher,
  ScrollingModule
} from "./chunk-GXUHRYX3.js";
import "./chunk-GSML466W.js";
import "./chunk-KAPOL4LA.js";
import "./chunk-N74BERQD.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbCollapseModule
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  DecimalPipe,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Output,
  Pipe,
  Subject,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  filter,
  from,
  groupBy,
  mergeMap,
  reduce,
  setClassMetadata,
  takeUntil,
  throttleTime,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// src/app/shared/data/table_data/easy_table.ts
var data = [
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (949) 527-2108",
    age: 36,
    address: { street: "Some street", number: 12 },
    company: "KONGENE",
    name: "Deanne Contreras",
    isActive: true,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (878) 515-3653",
    age: 32,
    address: { street: "Tumblewood street", number: 12 },
    company: "ISOSWITCH",
    name: "Peggy Burke",
    isActive: false,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (844) 593-2360",
    age: 21,
    address: { street: "East street", number: 12 },
    company: "HIVEDOM",
    name: "Josephine Reilly",
    isActive: true,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (800) 413-3813",
    age: 24,
    address: { street: "West street", number: 12 },
    company: "EMERGENT",
    name: "Phillips Fry",
    isActive: false,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (934) 551-2224",
    age: 20,
    address: { street: "North street", number: 12 },
    company: "ZILLANET",
    name: "Valentine Webb",
    isActive: false,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (948) 460-3627",
    age: 31,
    address: { street: "South street", number: 12 },
    company: "KNOWLYSIS",
    name: "Heidi Duncan",
    isActive: true,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (841) 479-3920",
    age: 30,
    address: { street: "Buffalo street", number: 12 },
    company: "TYPHONICA",
    name: "Poole Dodson",
    isActive: false,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (998) 546-2953",
    age: 37,
    address: { street: "Onorato street", number: 12 },
    company: "COLAIRE",
    name: "Marie Molina",
    isActive: false,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (811) 511-2927",
    age: 31,
    address: { street: "Ontario street", number: 12 },
    company: "OMNIGOG",
    name: "Monica Frazier",
    isActive: true,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (967) 504-3593",
    age: 35,
    address: { street: "Canada street", number: 12 },
    company: "ENERVATE",
    name: "Kinney Logan",
    isActive: true,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (902) 500-3665",
    age: 28,
    address: { street: "Southeast street", number: 12 },
    company: "CALCULA",
    name: "Wilson Hatfield",
    isActive: true,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (933) 565-2698",
    age: 29,
    address: { street: "Upper Terrace street", number: 12 },
    company: "GINK",
    name: "Trevino Casey",
    isActive: true,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (939) 530-3189",
    age: 34,
    address: { street: "Dacota street", number: 12 },
    company: "MARKETOID",
    name: "Scott Barker",
    isActive: true,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (949) 600-2827",
    age: 29,
    address: { street: "5th street", number: 12 },
    company: "MATRIXITY",
    name: "Sheree James",
    isActive: true,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (833) 559-2128",
    age: 35,
    address: { street: "EastNorth street", number: 12 },
    company: "LETPRO",
    name: "Kristen Whitehead",
    isActive: true,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (923) 480-2195",
    age: 20,
    address: { street: "Oak street", number: 12 },
    company: "HOMETOWN",
    name: "Norma Rush",
    isActive: false,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (967) 573-3873",
    age: 35,
    address: { street: "Australia street", number: 12 },
    company: "EWEVILLE",
    name: "Merrill Allen",
    isActive: true,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (985) 404-2360",
    age: 30,
    address: { street: "NYC street", number: 12 },
    company: "PORTALINE",
    name: "Claudia Sawyer",
    isActive: true,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (907) 406-2333",
    age: 27,
    address: { street: "Gate street", number: 12 },
    company: "VIRVA",
    name: "Craig Herrera",
    isActive: false,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (954) 412-3881",
    age: 37,
    address: { street: "Southeast", number: 12 },
    company: "VINCH",
    name: "Peterson Johns",
    isActive: false,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (882) 527-2652",
    age: 25,
    address: { street: "Lynn", number: 12 },
    company: "GYNKO",
    name: "Gordon Rutledge",
    isActive: false,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (884) 587-2850",
    age: 20,
    address: { street: "Engine", number: 12 },
    company: "COMCUR",
    name: "Patton Mcbride",
    isActive: false,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (802) 562-2467",
    age: 35,
    address: { street: "Queen street", number: 12 },
    company: "EARTHPURE",
    name: "Trudy Camacho",
    isActive: false,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (873) 421-3625",
    age: 38,
    address: { street: "King street", number: 12 },
    company: "ARCHITAX",
    name: "Myles Blair",
    isActive: true,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (901) 502-3536",
    age: 36,
    address: { street: "First st.", number: 12 },
    company: "CANOPOLY",
    name: "Josefa Foley",
    isActive: true,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (985) 524-3581",
    age: 36,
    address: { street: "Second", number: 12 },
    company: "ENTOGROK",
    name: "Kathy Barr",
    isActive: false,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (948) 492-2881",
    age: 40,
    address: { street: "Third", number: 12 },
    company: "CENTICE",
    name: "Sybil Sears",
    isActive: false,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (815) 412-3123",
    age: 36,
    address: { street: "4th", number: 12 },
    company: "ZANILLA",
    name: "Moody Blevins",
    isActive: true,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (924) 594-3384",
    age: 31,
    address: { street: "5th", number: 12 },
    company: "NAMEGEN",
    name: "Kristine Ratliff",
    isActive: true,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (938) 550-3997",
    age: 30,
    address: { street: "Sixth", number: 12 },
    company: "MAGNEATO",
    name: "Cooley Pitts",
    isActive: false,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (930) 593-3548",
    age: 30,
    address: { street: "7th", number: 12 },
    company: "GEOFORMA",
    name: "Haley Noble",
    isActive: false,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (995) 479-2495",
    age: 26,
    address: { street: "8th", number: 12 },
    company: "LYRIA",
    name: "Garner Owens",
    isActive: true,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (958) 410-2373",
    age: 24,
    address: { street: "9th", number: 12 },
    company: "SOFTMICRO",
    name: "Jody Reyes",
    isActive: true,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (835) 551-3617",
    age: 39,
    address: { street: "10th", number: 12 },
    company: "CORPORANA",
    name: "Patterson Chavez",
    isActive: true,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (872) 561-3479",
    age: 20,
    address: { street: "11th", number: 12 },
    company: "BOINK",
    name: "Ellen Nielsen",
    isActive: true,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (935) 535-2958",
    age: 26,
    address: { street: "12th", number: 12 },
    company: "PETICULAR",
    name: "Serena Graves",
    isActive: false,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (921) 426-2277",
    age: 24,
    address: { street: "13th", number: 12 },
    company: "SHOPABOUT",
    name: "Emily Bruce",
    isActive: false,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (875) 474-3800",
    age: 29,
    address: { street: "14th", number: 12 },
    company: "COMCUBINE",
    name: "Fanny Swanson",
    isActive: true,
    level: "Medium"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (893) 536-2201",
    age: 31,
    address: { street: "15th", number: 12 },
    company: "ZEDALIS",
    name: "Sellers Velez",
    isActive: false,
    level: "High"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (927) 460-3553",
    age: 23,
    address: { street: "16th", number: 12 },
    company: "SUREMAX",
    name: "M\xF3nica Glover",
    isActive: false,
    level: "Low"
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    phone: "+1 (949) 528-2108",
    age: 31,
    address: { street: "Some street", number: 12 },
    company: "DOE",
    name: "John Doe",
    isActive: true,
    level: "Low"
  }
];

// node_modules/ngx-pagination/fesm2020/ngx-pagination.mjs
function PaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("keyup.enter", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext(3);
      const p_r3 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(p_r3.previous());
    })("click", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext(3);
      const p_r3 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(p_r3.previous());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.previousLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.previousLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9);
    \u0275\u0275template(1, PaginationControlsComponent_ul_3_li_1_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_1_span_2_Template, 4, 2, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const p_r3 = \u0275\u0275reference(1);
    \u0275\u0275classProp("disabled", p_r3.isFirstPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", 1 < p_r3.getCurrent());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.isFirstPage());
  }
}
function PaginationControlsComponent_ul_3_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("keyup.enter", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const page_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275nextContext(2);
      const p_r3 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(p_r3.setCurrent(page_r6.value));
    })("click", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const page_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275nextContext(2);
      const p_r3 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(p_r3.setCurrent(page_r6.value));
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.screenReaderPageLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r6.label === "..." ? page_r6.label : \u0275\u0275pipeBind2(5, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 16)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.screenReaderCurrentLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r6.label === "..." ? page_r6.label : \u0275\u0275pipeBind2(6, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, PaginationControlsComponent_ul_3_li_4_a_1_Template, 6, 5, "a", 10)(2, PaginationControlsComponent_ul_3_li_4_ng_container_2_Template, 7, 5, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const p_r3 = \u0275\u0275reference(1);
    \u0275\u0275classProp("current", p_r3.getCurrent() === page_r6.value)("ellipsis", page_r6.label === "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.getCurrent() !== page_r6.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.getCurrent() === page_r6.value);
  }
}
function PaginationControlsComponent_ul_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("keyup.enter", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext(3);
      const p_r3 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(p_r3.next());
    })("click", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext(3);
      const p_r3 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(p_r3.next());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.nextLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.nextLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275template(1, PaginationControlsComponent_ul_3_li_5_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_5_span_2_Template, 4, 2, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const p_r3 = \u0275\u0275reference(1);
    \u0275\u0275classProp("disabled", p_r3.isLastPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r3.isLastPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.isLastPage());
  }
}
function PaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275template(1, PaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 5);
    \u0275\u0275elementStart(2, "li", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PaginationControlsComponent_ul_3_li_4_Template, 3, 6, "li", 7)(5, PaginationControlsComponent_ul_3_li_5_Template, 3, 4, "li", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const p_r3 = \u0275\u0275reference(1);
    \u0275\u0275classProp("responsive", ctx_r3.responsive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.directionLinks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", p_r3.getCurrent(), " / ", p_r3.getLastPage(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", p_r3.pages)("ngForTrackBy", ctx_r3.trackByIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.directionLinks);
  }
}
var PaginationService = class {
  constructor() {
    this.change = new EventEmitter();
    this.instances = {};
    this.DEFAULT_ID = "DEFAULT_PAGINATION_ID";
  }
  defaultId() {
    return this.DEFAULT_ID;
  }
  /**
   * Register a PaginationInstance with this service. Returns a
   * boolean value signifying whether the instance is new or
   * updated (true = new or updated, false = unchanged).
   */
  register(instance) {
    if (instance.id == null) {
      instance.id = this.DEFAULT_ID;
    }
    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      return true;
    } else {
      return this.updateInstance(instance);
    }
  }
  /**
   * Check each property of the instance and update any that have changed. Return
   * true if any changes were made, else return false.
   */
  updateInstance(instance) {
    let changed = false;
    for (let prop in this.instances[instance.id]) {
      if (instance[prop] !== this.instances[instance.id][prop]) {
        this.instances[instance.id][prop] = instance[prop];
        changed = true;
      }
    }
    return changed;
  }
  /**
   * Returns the current page number.
   */
  getCurrentPage(id) {
    if (this.instances[id]) {
      return this.instances[id].currentPage;
    }
    return 1;
  }
  /**
   * Sets the current page number.
   */
  setCurrentPage(id, page) {
    if (this.instances[id]) {
      let instance = this.instances[id];
      let maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
      if (page <= maxPage && 1 <= page) {
        this.instances[id].currentPage = page;
        this.change.emit(id);
      }
    }
  }
  /**
   * Sets the value of instance.totalItems
   */
  setTotalItems(id, totalItems) {
    if (this.instances[id] && 0 <= totalItems) {
      this.instances[id].totalItems = totalItems;
      this.change.emit(id);
    }
  }
  /**
   * Sets the value of instance.itemsPerPage.
   */
  setItemsPerPage(id, itemsPerPage) {
    if (this.instances[id]) {
      this.instances[id].itemsPerPage = itemsPerPage;
      this.change.emit(id);
    }
  }
  /**
   * Returns a clone of the pagination instance object matching the id. If no
   * id specified, returns the instance corresponding to the default id.
   */
  getInstance(id = this.DEFAULT_ID) {
    if (this.instances[id]) {
      return this.clone(this.instances[id]);
    }
    return {};
  }
  /**
   * Perform a shallow clone of an object.
   */
  clone(obj) {
    var target = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        target[i] = obj[i];
      }
    }
    return target;
  }
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = class {
  constructor(service) {
    this.service = service;
    this.state = {};
  }
  transform(collection, args) {
    if (!(collection instanceof Array)) {
      let _id = args.id || this.service.defaultId();
      if (this.state[_id]) {
        return this.state[_id].slice;
      } else {
        return collection;
      }
    }
    let serverSideMode = args.totalItems && args.totalItems !== collection.length;
    let instance = this.createInstance(collection, args);
    let id = instance.id;
    let start, end;
    let perPage = instance.itemsPerPage;
    let emitChange = this.service.register(instance);
    if (!serverSideMode && collection instanceof Array) {
      perPage = +perPage || LARGE_NUMBER;
      start = (instance.currentPage - 1) * perPage;
      end = start + perPage;
      let isIdentical = this.stateIsIdentical(id, collection, start, end);
      if (isIdentical) {
        return this.state[id].slice;
      } else {
        let slice = collection.slice(start, end);
        this.saveState(id, collection, slice, start, end);
        this.service.change.emit(id);
        return slice;
      }
    } else {
      if (emitChange) {
        this.service.change.emit(id);
      }
      this.saveState(id, collection, collection, start, end);
      return collection;
    }
  }
  /**
   * Create an PaginationInstance object, using defaults for any optional properties not supplied.
   */
  createInstance(collection, config) {
    this.checkConfig(config);
    return {
      id: config.id != null ? config.id : this.service.defaultId(),
      itemsPerPage: +config.itemsPerPage || 0,
      currentPage: +config.currentPage || 1,
      totalItems: +config.totalItems || collection.length
    };
  }
  /**
   * Ensure the argument passed to the filter contains the required properties.
   */
  checkConfig(config) {
    const required = ["itemsPerPage", "currentPage"];
    const missing = required.filter((prop) => !(prop in config));
    if (0 < missing.length) {
      throw new Error(`PaginatePipe: Argument is missing the following required properties: ${missing.join(", ")}`);
    }
  }
  /**
   * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
   * array for a given id. This means that the next time the pipe is run on this collection & id, we just
   * need to check that the collection, start and end points are all identical, and if so, return the
   * last sliced array.
   */
  saveState(id, collection, slice, start, end) {
    this.state[id] = {
      collection,
      size: collection.length,
      slice,
      start,
      end
    };
  }
  /**
   * For a given id, returns true if the collection, size, start and end values are identical.
   */
  stateIsIdentical(id, collection, start, end) {
    let state = this.state[id];
    if (!state) {
      return false;
    }
    let isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;
    if (!isMetaDataIdentical) {
      return false;
    }
    return state.slice.every((element, index) => element === collection[start + index]);
  }
};
PaginatePipe.\u0275fac = function PaginatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginatePipe)(\u0275\u0275directiveInject(PaginationService, 16));
};
PaginatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "paginate",
  type: PaginatePipe,
  pure: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatePipe, [{
    type: Pipe,
    args: [{
      name: "paginate",
      pure: false
    }]
  }], function() {
    return [{
      type: PaginationService
    }];
  }, null);
})();
var DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <nav role="navigation" [attr.aria-label]="screenReaderPaginationLabel">
    <ul class="ngx-pagination" 
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> 
            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()" aria-disabled="true">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li> 

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value" 
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages; trackBy: trackByIndex">
            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
              <span aria-live="polite">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> 
              </span>
            </ng-container>
        </li>

        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()" aria-disabled="true">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    </nav>
    </pagination-template>
    `;
var DEFAULT_STYLES = `
.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem; }
  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a; 
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    padding: 0.1875rem 0.625rem;
    background: #2199e8;
    color: #fefefe;
    cursor: default; }
  .ngx-pagination .disabled {
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; } 
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before { 
  content: '\xAB';
  display: inline-block;
  margin-right: 0.5rem; }

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '\xBB';
  display: inline-block;
  margin-left: 0.5rem; }

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; } 
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}
  `;
var PaginationControlsDirective = class {
  constructor(service, changeDetectorRef) {
    this.service = service;
    this.changeDetectorRef = changeDetectorRef;
    this.maxSize = 7;
    this.pageChange = new EventEmitter();
    this.pageBoundsCorrection = new EventEmitter();
    this.pages = [];
    this.changeSub = this.service.change.subscribe((id) => {
      if (this.id === id) {
        this.updatePageLinks();
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  ngOnInit() {
    if (this.id === void 0) {
      this.id = this.service.defaultId();
    }
    this.updatePageLinks();
  }
  ngOnChanges(changes) {
    this.updatePageLinks();
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
  /**
   * Go to the previous page
   */
  previous() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() - 1);
  }
  /**
   * Go to the next page
   */
  next() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() + 1);
  }
  /**
   * Returns true if current page is first page
   */
  isFirstPage() {
    return this.getCurrent() === 1;
  }
  /**
   * Returns true if current page is last page
   */
  isLastPage() {
    return this.getLastPage() === this.getCurrent();
  }
  /**
   * Set the current page number.
   */
  setCurrent(page) {
    this.pageChange.emit(page);
  }
  /**
   * Get the current page number.
   */
  getCurrent() {
    return this.service.getCurrentPage(this.id);
  }
  /**
   * Returns the last page number
   */
  getLastPage() {
    let inst = this.service.getInstance(this.id);
    if (inst.totalItems < 1) {
      return 1;
    }
    return Math.ceil(inst.totalItems / inst.itemsPerPage);
  }
  getTotalItems() {
    return this.service.getInstance(this.id).totalItems;
  }
  checkValidId() {
    if (this.service.getInstance(this.id).id == null) {
      console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`);
    }
  }
  /**
   * Updates the page links and checks that the current page is valid. Should run whenever the
   * PaginationService.change stream emits a value matching the current ID, or when any of the
   * input values changes.
   */
  updatePageLinks() {
    let inst = this.service.getInstance(this.id);
    const correctedCurrentPage = this.outOfBoundCorrection(inst);
    if (correctedCurrentPage !== inst.currentPage) {
      setTimeout(() => {
        this.pageBoundsCorrection.emit(correctedCurrentPage);
        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
      });
    } else {
      this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
    }
  }
  /**
   * Checks that the instance.currentPage property is within bounds for the current page range.
   * If not, return a correct value for currentPage, or the current value if OK.
   */
  outOfBoundCorrection(instance) {
    const totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
    if (totalPages < instance.currentPage && 0 < totalPages) {
      return totalPages;
    } else if (instance.currentPage < 1) {
      return 1;
    }
    return instance.currentPage;
  }
  /**
   * Returns an array of Page objects to use in the pagination controls.
   */
  createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    paginationRange = +paginationRange;
    let pages = [];
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;
    while (i <= totalPages && i <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
      let closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        label = "...";
      } else {
        label = pageNumber;
      }
      pages.push({
        label,
        value: pageNumber
      });
      i++;
    }
    return pages;
  }
  /**
   * Given the position in the sequence of pagination links [i],
   * figure out what page number corresponds to that position.
   */
  calculatePageNumber(i, currentPage, paginationRange, totalPages) {
    let halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
      return totalPages;
    } else if (i === 1) {
      return i;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + i;
      } else {
        return i;
      }
    } else {
      return i;
    }
  }
};
PaginationControlsDirective.\u0275fac = function PaginationControlsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationControlsDirective)(\u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PaginationControlsDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: PaginationControlsDirective,
  selectors: [["pagination-template"], ["", "pagination-template", ""]],
  inputs: {
    id: "id",
    maxSize: "maxSize"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  exportAs: ["paginationApi"],
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationControlsDirective, [{
    type: Directive,
    args: [{
      selector: "pagination-template,[pagination-template]",
      exportAs: "paginationApi"
    }]
  }], function() {
    return [{
      type: PaginationService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    id: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageBoundsCorrection: [{
      type: Output
    }]
  });
})();
function coerceToBoolean(input) {
  return !!input && input !== "false";
}
var PaginationControlsComponent = class {
  constructor() {
    this.maxSize = 7;
    this.previousLabel = "Previous";
    this.nextLabel = "Next";
    this.screenReaderPaginationLabel = "Pagination";
    this.screenReaderPageLabel = "page";
    this.screenReaderCurrentLabel = `You're on page`;
    this.pageChange = new EventEmitter();
    this.pageBoundsCorrection = new EventEmitter();
    this._directionLinks = true;
    this._autoHide = false;
    this._responsive = false;
  }
  get directionLinks() {
    return this._directionLinks;
  }
  set directionLinks(value) {
    this._directionLinks = coerceToBoolean(value);
  }
  get autoHide() {
    return this._autoHide;
  }
  set autoHide(value) {
    this._autoHide = coerceToBoolean(value);
  }
  get responsive() {
    return this._responsive;
  }
  set responsive(value) {
    this._responsive = coerceToBoolean(value);
  }
  trackByIndex(index) {
    return index;
  }
};
PaginationControlsComponent.\u0275fac = function PaginationControlsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationControlsComponent)();
};
PaginationControlsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PaginationControlsComponent,
  selectors: [["pagination-controls"]],
  inputs: {
    id: "id",
    maxSize: "maxSize",
    directionLinks: "directionLinks",
    autoHide: "autoHide",
    responsive: "responsive",
    previousLabel: "previousLabel",
    nextLabel: "nextLabel",
    screenReaderPaginationLabel: "screenReaderPaginationLabel",
    screenReaderPageLabel: "screenReaderPageLabel",
    screenReaderCurrentLabel: "screenReaderCurrentLabel"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  decls: 4,
  vars: 4,
  consts: [["p", "paginationApi"], [3, "pageChange", "pageBoundsCorrection", "id", "maxSize"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]],
  template: function PaginationControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "pagination-template", 1, 0);
      \u0275\u0275listener("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.pageChange.emit($event));
      })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.pageBoundsCorrection.emit($event));
      });
      \u0275\u0275elementStart(2, "nav", 2);
      \u0275\u0275template(3, PaginationControlsComponent_ul_3_Template, 6, 8, "ul", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const p_r3 = \u0275\u0275reference(1);
      \u0275\u0275property("id", ctx.id)("maxSize", ctx.maxSize);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.screenReaderPaginationLabel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.autoHide && p_r3.pages.length <= 1));
    }
  },
  dependencies: [PaginationControlsDirective, NgIf, NgForOf, DecimalPipe],
  styles: ['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationControlsComponent, [{
    type: Component,
    args: [{
      selector: "pagination-controls",
      template: DEFAULT_TEMPLATE,
      styles: [DEFAULT_STYLES],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    id: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    autoHide: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    previousLabel: [{
      type: Input
    }],
    nextLabel: [{
      type: Input
    }],
    screenReaderPaginationLabel: [{
      type: Input
    }],
    screenReaderPageLabel: [{
      type: Input
    }],
    screenReaderCurrentLabel: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageBoundsCorrection: [{
      type: Output
    }]
  });
})();
var NgxPaginationModule = class {
};
NgxPaginationModule.\u0275fac = function NgxPaginationModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxPaginationModule)();
};
NgxPaginationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxPaginationModule
});
NgxPaginationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [PaginationService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
      providers: [PaginationService],
      exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
    }]
  }], null, null);
})();

// node_modules/ngx-easy-table/fesm2022/ngx-easy-table.mjs
var _c0 = ["paginationDirective"];
var _c1 = ["paginationRange"];
function PaginationComponent_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275listener("keyup.enter", function PaginationComponent_li_5_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext(2);
      const paginationDirective_r3 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(paginationDirective_r3.previous());
    })("click", function PaginationComponent_li_5_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext(2);
      const paginationDirective_r3 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(paginationDirective_r3.previous());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r3.previousLabel + " " + ctx_r3.screenReaderPageLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.previousLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationComponent_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.previousLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11);
    \u0275\u0275template(1, PaginationComponent_li_5_a_1_Template, 4, 3, "a", 12)(2, PaginationComponent_li_5_span_2_Template, 4, 2, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paginationDirective_r3 = \u0275\u0275reference(3);
    \u0275\u0275classProp("disabled", paginationDirective_r3.isFirstPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", 1 < paginationDirective_r3.getCurrent());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", paginationDirective_r3.isFirstPage());
  }
}
function PaginationComponent_li_8_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275listener("keyup.enter", function PaginationComponent_li_8_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const page_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275nextContext();
      const paginationDirective_r3 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(paginationDirective_r3.setCurrent(page_r6.value));
    })("click", function PaginationComponent_li_8_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const page_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275nextContext();
      const paginationDirective_r3 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(paginationDirective_r3.setCurrent(page_r6.value));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.screenReaderPageLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r6.label);
  }
}
function PaginationComponent_li_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.screenReaderCurrentLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r6.label);
  }
}
function PaginationComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, PaginationComponent_li_8_a_1_Template, 5, 2, "a", 12)(2, PaginationComponent_li_8_ng_container_2_Template, 5, 2, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    \u0275\u0275nextContext();
    const paginationDirective_r3 = \u0275\u0275reference(3);
    \u0275\u0275classProp("current", paginationDirective_r3.getCurrent() === page_r6.value)("ellipsis", page_r6.label === "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", paginationDirective_r3.getCurrent() !== page_r6.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", paginationDirective_r3.getCurrent() === page_r6.value);
  }
}
function PaginationComponent_li_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275listener("keyup.enter", function PaginationComponent_li_9_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext(2);
      const paginationDirective_r3 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(paginationDirective_r3.next());
    })("click", function PaginationComponent_li_9_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext(2);
      const paginationDirective_r3 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(paginationDirective_r3.next());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r3.nextLabel + " " + ctx_r3.screenReaderPageLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.nextLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationComponent_li_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.nextLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275template(1, PaginationComponent_li_9_a_1_Template, 4, 3, "a", 12)(2, PaginationComponent_li_9_span_2_Template, 4, 2, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paginationDirective_r3 = \u0275\u0275reference(3);
    \u0275\u0275classProp("disabled", paginationDirective_r3.isLastPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !paginationDirective_r3.isLastPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", paginationDirective_r3.isLastPage());
  }
}
function PaginationComponent_div_10_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 25);
    \u0275\u0275listener("click", function PaginationComponent_div_10_ul_7_li_1_Template_li_click_0_listener() {
      const limit_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.changeLimit(limit_r10, false));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const limit_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ngx-pagination-range--selected", limit_r10 === ctx_r3.selectedLimit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(limit_r10);
  }
}
function PaginationComponent_div_10_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 23);
    \u0275\u0275template(1, PaginationComponent_div_10_ul_7_li_1_Template, 3, 3, "li", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.ranges);
  }
}
function PaginationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17, 1)(2, "div", 18)(3, "div", 19)(4, "div", 20);
    \u0275\u0275listener("click", function PaginationComponent_div_10_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showRange = !ctx_r3.showRange);
    });
    \u0275\u0275text(5);
    \u0275\u0275element(6, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PaginationComponent_div_10_ul_7_Template, 2, 1, "ul", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ngx-table__table--dark-pagination-range", ctx_r3.config.tableLayout.theme === "dark");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedLimit, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.showRange);
  }
}
var _c2 = ["th"];
var _c3 = ["additionalActionMenu"];
var _c4 = ["headerDropdown"];
var _c5 = ["table-thead", ""];
var _c6 = (a0) => ({
  $implicit: a0
});
function TableTHeadComponent_tr_0_th_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.selectAllTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, ctx_r0.onSelectAllBinded));
  }
}
function TableTHeadComponent_tr_0_th_1_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 14)(1, "input", 15);
    \u0275\u0275listener("change", function TableTHeadComponent_tr_0_th_1_label_2_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onSelectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "em", 16);
    \u0275\u0275elementEnd();
  }
}
function TableTHeadComponent_tr_0_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275template(1, TableTHeadComponent_tr_0_th_1_ng_container_1_Template, 1, 4, "ng-container", 11)(2, TableTHeadComponent_tr_0_th_1_label_2_Template, 3, 0, "label", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("width", "3%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectAllTemplate && ctx_r0.config.checkboxes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selectAllTemplate && ctx_r0.config.checkboxes);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "em", 25);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "em", 26);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "em", 27);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275elementContainer(1, 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", column_r5.headerActionTemplate);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28, 1)(2, "a", 29);
    \u0275\u0275listener("click", function TableTHeadComponent_tr_0_ng_container_2_div_12_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const column_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showHeaderActionTemplateMenu(column_r5));
    });
    \u0275\u0275element(3, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TableTHeadComponent_tr_0_ng_container_2_div_12_div_4_Template, 2, 1, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", column_r5.key === ctx_r0.openedHeaderActionTemplate);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 17, 0);
    \u0275\u0275listener("mousedown", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const th_r4 = \u0275\u0275reference(2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMouseDown($event, th_r4));
    })("mouseup", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mouseup_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMouseUp($event));
    })("mousemove", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mousemove_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMouseMove($event));
    });
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275listener("click", function TableTHeadComponent_tr_0_ng_container_2_Template_div_click_3_listener() {
      const column_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.orderBy(column_r5));
    });
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TableTHeadComponent_tr_0_ng_container_2_em_8_Template, 1, 0, "em", 20);
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275template(10, TableTHeadComponent_tr_0_ng_container_2_em_10_Template, 1, 0, "em", 21)(11, TableTHeadComponent_tr_0_ng_container_2_em_11_Template, 1, 0, "em", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, TableTHeadComponent_tr_0_ng_container_2_div_12_Template, 5, 1, "div", 23)(13, TableTHeadComponent_tr_0_ng_container_2_div_13_Template, 1, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const colIndex_r7 = ctx.index;
    const last_r8 = ctx.last;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r0.styleService.pinnedWidth(column_r5.pinned, colIndex_r7))("width", ctx_r0.getColumnWidth(column_r5));
    \u0275\u0275classProp("pinned-left", column_r5.pinned);
    \u0275\u0275property("ngClass", column_r5.cssClass && column_r5.cssClass.includeHeader ? column_r5.cssClass.name : "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pointer", ctx_r0.isOrderEnabled(column_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", column_r5.title, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", column_r5.pinned);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r0.config.orderEnabled ? "inline" : "none");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortKey === column_r5.key && ctx_r0.sortState.get(ctx_r0.sortKey) === "asc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortKey === column_r5.key && ctx_r0.sortState.get(ctx_r0.sortKey) === "desc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !!column_r5.headerActionTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.resizeColumn && !last_r8);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 33);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 32);
    \u0275\u0275template(1, TableTHeadComponent_tr_0_th_3_div_1_ul_4_ng_container_1_Template, 1, 1, "ng-container", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28, 2)(2, "a", 29);
    \u0275\u0275listener("click", function TableTHeadComponent_tr_0_th_3_div_1_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.showMenu());
    });
    \u0275\u0275element(3, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TableTHeadComponent_tr_0_th_3_div_1_ul_4_Template, 2, 1, "ul", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.menuActive);
  }
}
function TableTHeadComponent_tr_0_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275template(1, TableTHeadComponent_tr_0_th_3_div_1_Template, 5, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.additionalActions);
  }
}
function TableTHeadComponent_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 8);
    \u0275\u0275template(1, TableTHeadComponent_tr_0_th_1_Template, 3, 4, "th", 9)(2, TableTHeadComponent_tr_0_ng_container_2_Template, 14, 17, "ng-container", 7)(3, TableTHeadComponent_tr_0_th_3_Template, 2, 1, "th", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.checkboxes || ctx_r0.config.radio);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.columns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.additionalActions || ctx_r0.config.detailsTemplate || ctx_r0.config.collapseAllRows || ctx_r0.config.groupRows);
  }
}
function TableTHeadComponent_tr_1_th_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.selectAllTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, ctx_r0.onSelectAllBinded));
  }
}
function TableTHeadComponent_tr_1_th_1_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 14)(1, "input", 39);
    \u0275\u0275listener("change", function TableTHeadComponent_tr_1_th_1_label_2_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onSelectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "em", 40);
    \u0275\u0275elementEnd();
  }
}
function TableTHeadComponent_tr_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275template(1, TableTHeadComponent_tr_1_th_1_ng_container_1_Template, 1, 4, "ng-container", 11)(2, TableTHeadComponent_tr_1_th_1_label_2_Template, 3, 0, "label", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("width", "3%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectAllTemplate && ctx_r0.config.checkboxes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selectAllTemplate && ctx_r0.config.checkboxes);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "em", 25);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "em", 26);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "em", 27);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275elementContainer(1, 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", column_r14.headerActionTemplate);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28, 1)(2, "a", 29);
    \u0275\u0275listener("click", function TableTHeadComponent_tr_1_ng_container_2_div_12_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const column_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showHeaderActionTemplateMenu(column_r14));
    });
    \u0275\u0275element(3, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TableTHeadComponent_tr_1_ng_container_2_div_12_div_4_Template, 2, 1, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", column_r14.key === ctx_r0.openedHeaderActionTemplate);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 41, 0);
    \u0275\u0275listener("mousedown", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const th_r13 = \u0275\u0275reference(2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMouseDown($event, th_r13));
    })("mouseup", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mouseup_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMouseUp($event));
    })("mousemove", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mousemove_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMouseMove($event));
    });
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275listener("click", function TableTHeadComponent_tr_1_ng_container_2_Template_div_click_3_listener() {
      const column_r14 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.orderBy(column_r14));
    });
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TableTHeadComponent_tr_1_ng_container_2_em_8_Template, 1, 0, "em", 20);
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275template(10, TableTHeadComponent_tr_1_ng_container_2_em_10_Template, 1, 0, "em", 21)(11, TableTHeadComponent_tr_1_ng_container_2_em_11_Template, 1, 0, "em", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, TableTHeadComponent_tr_1_ng_container_2_div_12_Template, 5, 1, "div", 23)(13, TableTHeadComponent_tr_1_ng_container_2_div_13_Template, 1, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    const colIndex_r16 = ctx.index;
    const last_r17 = ctx.last;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r0.styleService.pinnedWidth(column_r14.pinned, colIndex_r16))("width", ctx_r0.getColumnWidth(column_r14));
    \u0275\u0275classProp("pinned-left", column_r14.pinned);
    \u0275\u0275property("cdkDragStartDelay", ctx_r0.config.reorderDelay || 0)("ngClass", column_r14.cssClass && column_r14.cssClass.includeHeader ? column_r14.cssClass.name : "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pointer", ctx_r0.isOrderEnabled(column_r14));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", column_r14.title, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", column_r14.pinned);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r0.config.orderEnabled ? "inline" : "none");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortKey === column_r14.key && ctx_r0.sortState.get(ctx_r0.sortKey) === "asc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortKey === column_r14.key && ctx_r0.sortState.get(ctx_r0.sortKey) === "desc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !!column_r14.headerActionTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.resizeColumn && !last_r17);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 33);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 32);
    \u0275\u0275template(1, TableTHeadComponent_tr_1_th_3_div_1_ul_4_ng_container_1_Template, 1, 1, "ng-container", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28, 2)(2, "a", 29);
    \u0275\u0275listener("click", function TableTHeadComponent_tr_1_th_3_div_1_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.showMenu());
    });
    \u0275\u0275element(3, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TableTHeadComponent_tr_1_th_3_div_1_ul_4_Template, 2, 1, "ul", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.menuActive);
  }
}
function TableTHeadComponent_tr_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275template(1, TableTHeadComponent_tr_1_th_3_div_1_Template, 5, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.additionalActions);
  }
}
function TableTHeadComponent_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38);
    \u0275\u0275listener("cdkDropListDropped", function TableTHeadComponent_tr_1_Template_tr_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.columnDrop($event));
    });
    \u0275\u0275template(1, TableTHeadComponent_tr_1_th_1_Template, 3, 4, "th", 9)(2, TableTHeadComponent_tr_1_ng_container_2_Template, 14, 18, "ng-container", 7)(3, TableTHeadComponent_tr_1_th_3_Template, 2, 1, "th", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.checkboxes || ctx_r0.config.radio);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.columns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.additionalActions || ctx_r0.config.detailsTemplate || ctx_r0.config.collapseAllRows || ctx_r0.config.groupRows);
  }
}
function TableTHeadComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function TableTHeadComponent_ng_container_4_table_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table-header", 45);
    \u0275\u0275listener("update", function TableTHeadComponent_ng_container_4_table_header_2_Template_table_header_update_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSearch($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("column", column_r20);
  }
}
function TableTHeadComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 43);
    \u0275\u0275template(2, TableTHeadComponent_ng_container_4_table_header_2_Template, 1, 1, "table-header", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r20 = ctx.$implicit;
    const colIndex_r21 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r0.styleService.pinnedWidth(column_r20.pinned, colIndex_r21));
    \u0275\u0275classProp("pinned-left", column_r20.pinned);
    \u0275\u0275property("ngClass", column_r20.cssClass && column_r20.cssClass.includeHeader ? column_r20.cssClass.name : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getColumnDefinition(column_r20));
  }
}
function TableTHeadComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function TableTHeadComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr");
    \u0275\u0275elementContainer(2, 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.filtersTemplate);
  }
}
var _c7 = ["paginationComponent"];
var _c8 = ["contextMenu"];
var _c9 = ["table"];
var _c10 = (a0, a1) => ({
  position: "absolute",
  top: a0,
  left: a1
});
var _c11 = (a0, a1, a2, a3) => ({
  itemsPerPage: a0,
  currentPage: a1,
  totalItems: a2,
  id: a3
});
var _c12 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _c13 = (a0, a1, a2) => ({
  $implicit: a0,
  rowIndex: a1,
  column: a2
});
var _c14 = (a0, a1, a2, a3, a4) => ({
  total: a0,
  key: a1,
  value: a2,
  group: a3,
  index: a4
});
var _c15 = (a0, a1, a2) => ({
  total: a0,
  limit: a1,
  page: a2
});
function BaseComponent_tbody_4_ng_container_1_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275elementContainer(1, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(3, _c10, ctx_r1.rowContextMenuPosition.top, ctx_r1.rowContextMenuPosition.left));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rowContextMenu)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c6, ctx_r1.rowContextMenuPosition.value));
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const row_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.collapseRow(ctx_r1.data.indexOf(row_r4)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.isRowCollapsed(ctx_r1.data.indexOf(row_r4)) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template, 1, 1, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275elementContainer(2, 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.columns.length + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.detailsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c12, row_r4, ctx_r1.data.indexOf(row_r4)));
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 14, 2);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_click_1_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onClick($event, row_r4, "", null, ctx_r1.data.indexOf(row_r4)));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_contextmenu_1_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRowContextMenu($event, row_r4, "", null, ctx_r1.data.indexOf(row_r4)));
    })("dblclick", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_dblclick_1_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDoubleClick($event, row_r4, "", null, ctx_r1.data.indexOf(row_r4)));
    });
    \u0275\u0275elementContainer(3, 12);
    \u0275\u0275template(4, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_Template, 2, 1, "td", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_tr_5_Template, 3, 6, "tr", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("ngx-table__table-row--selected", ctx_r1.data.indexOf(row_r4) === ctx_r1.selectedRow && !ctx_r1.config.selectCell);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rowTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(6, _c12, row_r4, ctx_r1.data.indexOf(row_r4)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.detailsTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.detailsTemplate && ctx_r1.selectedDetailsTemplateRowId.has(ctx_r1.data.indexOf(row_r4)) || ctx_r1.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template, 6, 9, "ng-container", 13);
    \u0275\u0275pipe(2, "sort");
    \u0275\u0275pipe(3, "search");
    \u0275\u0275pipe(4, "global");
    \u0275\u0275pipe(5, "paginate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(5, 12, \u0275\u0275pipeBind3(4, 8, \u0275\u0275pipeBind3(3, 4, \u0275\u0275pipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject), \u0275\u0275pureFunction4(15, _c11, ctx_r1.limit, ctx_r1.page, ctx_r1.count, ctx_r1.id)));
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const rowIndex_r9 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.collapseRow(rowIndex_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowIndex_r9 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.isRowCollapsed(rowIndex_r9) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template, 1, 1, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275elementContainer(2, 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const row_r8 = ctx_r12.$implicit;
    const rowIndex_r9 = ctx_r12.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.columns.length + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.detailsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c12, row_r8, rowIndex_r9));
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 14, 2);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_click_1_listener($event) {
      const ctx_r6 = \u0275\u0275restoreView(_r6);
      const row_r8 = ctx_r6.$implicit;
      const rowIndex_r9 = ctx_r6.index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onClick($event, row_r8, "", null, rowIndex_r9));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_contextmenu_1_listener($event) {
      const ctx_r9 = \u0275\u0275restoreView(_r6);
      const row_r8 = ctx_r9.$implicit;
      const rowIndex_r9 = ctx_r9.index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRowContextMenu($event, row_r8, "", null, rowIndex_r9));
    })("dblclick", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_dblclick_1_listener($event) {
      const ctx_r10 = \u0275\u0275restoreView(_r6);
      const row_r8 = ctx_r10.$implicit;
      const rowIndex_r9 = ctx_r10.index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDoubleClick($event, row_r8, "", null, rowIndex_r9));
    });
    \u0275\u0275elementContainer(3, 12);
    \u0275\u0275template(4, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_Template, 2, 1, "td", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_tr_5_Template, 3, 6, "tr", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const rowIndex_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("ngx-table__table-row--selected", rowIndex_r9 === ctx_r1.selectedRow && !ctx_r1.config.selectCell);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rowTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(6, _c12, row_r8, rowIndex_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.detailsTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.detailsTemplate && ctx_r1.selectedDetailsTemplateRowId.has(rowIndex_r9) || ctx_r1.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 17);
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template, 6, 9, "ng-container", 18);
    \u0275\u0275pipe(2, "sort");
    \u0275\u0275pipe(3, "search");
    \u0275\u0275pipe(4, "global");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("cdkVirtualForOf", \u0275\u0275pipeBind3(4, 8, \u0275\u0275pipeBind3(3, 4, \u0275\u0275pipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject));
  }
}
function BaseComponent_tbody_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_1_ul_1_Template, 2, 8, "ul", 9)(2, BaseComponent_tbody_4_ng_container_1_ng_container_2_Template, 6, 20, "ng-container", 6)(3, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_Template, 5, 12, "cdk-virtual-scroll-viewport", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rowContextMenuPosition.top);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.config.infiniteScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.infiniteScroll);
  }
}
function BaseComponent_tbody_4_ng_container_2_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275elementContainer(1, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(3, _c10, ctx_r1.rowContextMenuPosition.top, ctx_r1.rowContextMenuPosition.left));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rowContextMenu)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c6, ctx_r1.rowContextMenuPosition.value));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "label", 19)(2, "input", 20);
    \u0275\u0275listener("change", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const row_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onCheckboxSelect($event, row_r15, ctx_r1.data.indexOf(row_r15)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "em", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "checkbox-", ctx_r1.data.indexOf(row_r15), "");
    \u0275\u0275property("checked", ctx_r1.isSelected || ctx_r1.selectedCheckboxes.has(ctx_r1.data.indexOf(row_r15)));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "label")(2, "input", 22);
    \u0275\u0275listener("change", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r16);
      const row_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRadioSelect($event, row_r15, ctx_r1.data.indexOf(row_r15)));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "radio-", ctx_r1.data.indexOf(row_r15), "");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "render");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r19 = \u0275\u0275nextContext().$implicit;
    const row_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r15, column_r19.key));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const column_r19 = \u0275\u0275nextContext().$implicit;
    const row_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", column_r19.cellTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c13, row_r15, ctx_r1.data.indexOf(row_r15), column_r19));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 23, 2);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const ctx_r17 = \u0275\u0275restoreView(_r17);
      const column_r19 = ctx_r17.$implicit;
      const colIndex_r20 = ctx_r17.index;
      const row_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onClick($event, row_r15, column_r19.key, colIndex_r20, ctx_r1.data.indexOf(row_r15)));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_contextmenu_1_listener($event) {
      const ctx_r20 = \u0275\u0275restoreView(_r17);
      const column_r19 = ctx_r20.$implicit;
      const colIndex_r20 = ctx_r20.index;
      const row_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRowContextMenu($event, row_r15, column_r19.key, colIndex_r20, ctx_r1.data.indexOf(row_r15)));
    })("dblclick", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const ctx_r21 = \u0275\u0275restoreView(_r17);
      const column_r19 = ctx_r21.$implicit;
      const colIndex_r20 = ctx_r21.index;
      const row_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDoubleClick($event, row_r15, column_r19.key, colIndex_r20, ctx_r1.data.indexOf(row_r15)));
    });
    \u0275\u0275template(3, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_div_3_Template, 3, 4, "div", 6)(4, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_ng_container_4_Template, 1, 6, "ng-container", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    const colIndex_r20 = ctx.index;
    const row_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r1.styleService.pinnedWidth(column_r19.pinned, colIndex_r20));
    \u0275\u0275classProp("pinned-left", column_r19.pinned)("ngx-table__table-col--selected", colIndex_r20 === ctx_r1.selectedCol && !ctx_r1.config.selectCell)("ngx-table__table-cell--selected", colIndex_r20 === ctx_r1.selectedCol && ctx_r1.data.indexOf(row_r15) === ctx_r1.selectedRow && !ctx_r1.config.selectCol && !ctx_r1.config.selectRow);
    \u0275\u0275property("ngClass", column_r19.cssClass ? column_r19.cssClass.name : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !column_r19.cellTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r19.cellTemplate);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const row_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.collapseRow(ctx_r1.data.indexOf(row_r15)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.isRowCollapsed(ctx_r1.data.indexOf(row_r15)) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template, 1, 1, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_td_1_Template, 1, 0, "td", 6);
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275elementContainer(3, 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.checkboxes || ctx_r1.config.radio);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.columns.length + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.detailsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c12, row_r15, ctx_r1.data.indexOf(row_r15)));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr");
    \u0275\u0275template(2, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template, 4, 3, "td", 6)(3, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template, 3, 2, "td", 6)(4, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template, 5, 11, "ng-container", 13)(5, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_Template, 2, 1, "td", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_Template, 4, 7, "tr", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("ngx-table__table-row--selected", ctx_r1.data.indexOf(row_r15) === ctx_r1.selectedRow && !ctx_r1.config.selectCell);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.checkboxes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.radio);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.columns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.additionalActions || ctx_r1.config.detailsTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.detailsTemplate && ctx_r1.selectedDetailsTemplateRowId.has(ctx_r1.data.indexOf(row_r15)) || ctx_r1.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_Template, 7, 7, "ng-container", 13);
    \u0275\u0275pipe(2, "sort");
    \u0275\u0275pipe(3, "search");
    \u0275\u0275pipe(4, "global");
    \u0275\u0275pipe(5, "paginate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(5, 12, \u0275\u0275pipeBind3(4, 8, \u0275\u0275pipeBind3(3, 4, \u0275\u0275pipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject), \u0275\u0275pureFunction4(15, _c11, ctx_r1.limit, ctx_r1.page, ctx_r1.count, ctx_r1.id)));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "label", 19)(2, "input", 20);
    \u0275\u0275listener("change", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r24 = \u0275\u0275nextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onCheckboxSelect($event, row_r26, rowIndex_r27));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "em", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rowIndex_r27 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "checkbox-infinite-scroll-", rowIndex_r27, "");
    \u0275\u0275property("checked", ctx_r1.isSelected || ctx_r1.selectedCheckboxes.has(rowIndex_r27));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "label")(2, "input", 22);
    \u0275\u0275listener("change", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r24 = \u0275\u0275nextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRadioSelect($event, row_r26, rowIndex_r27));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rowIndex_r27 = \u0275\u0275nextContext().index;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "radio-infinite-scroll-", rowIndex_r27, "");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "render");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r31 = \u0275\u0275nextContext().$implicit;
    const row_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r26, column_r31.key));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const column_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r24 = \u0275\u0275nextContext();
    const row_r26 = ctx_r24.$implicit;
    const rowIndex_r27 = ctx_r24.index;
    \u0275\u0275property("ngTemplateOutlet", column_r31.cellTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c13, row_r26, rowIndex_r27, column_r31));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 23, 2);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const ctx_r29 = \u0275\u0275restoreView(_r29);
      const column_r31 = ctx_r29.$implicit;
      const colIndex_r32 = ctx_r29.index;
      const ctx_r24 = \u0275\u0275nextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onClick($event, row_r26, column_r31.key, colIndex_r32, rowIndex_r27));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_contextmenu_1_listener($event) {
      const ctx_r32 = \u0275\u0275restoreView(_r29);
      const column_r31 = ctx_r32.$implicit;
      const colIndex_r32 = ctx_r32.index;
      const ctx_r24 = \u0275\u0275nextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRowContextMenu($event, row_r26, column_r31.key, colIndex_r32, rowIndex_r27));
    })("dblclick", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const ctx_r33 = \u0275\u0275restoreView(_r29);
      const column_r31 = ctx_r33.$implicit;
      const colIndex_r32 = ctx_r33.index;
      const ctx_r24 = \u0275\u0275nextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDoubleClick($event, row_r26, column_r31.key, colIndex_r32, rowIndex_r27));
    });
    \u0275\u0275template(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_div_3_Template, 3, 4, "div", 6)(4, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_ng_container_4_Template, 1, 6, "ng-container", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r31 = ctx.$implicit;
    const colIndex_r32 = ctx.index;
    const rowIndex_r27 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r1.styleService.pinnedWidth(column_r31.pinned, colIndex_r32));
    \u0275\u0275classProp("pinned-left", column_r31.pinned)("ngx-table__table-col--selected", colIndex_r32 === ctx_r1.selectedCol && !ctx_r1.config.selectCell)("ngx-table__table-cell--selected", colIndex_r32 === ctx_r1.selectedCol && rowIndex_r27 === ctx_r1.selectedRow && !ctx_r1.config.selectCol && !ctx_r1.config.selectRow);
    \u0275\u0275property("ngClass", column_r31.cssClass ? column_r31.cssClass.name : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !column_r31.cellTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r31.cellTemplate);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const rowIndex_r27 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.collapseRow(rowIndex_r27));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowIndex_r27 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.isRowCollapsed(rowIndex_r27) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template, 1, 1, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_td_1_Template, 1, 0, "td", 6);
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275elementContainer(3, 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r24 = \u0275\u0275nextContext();
    const row_r26 = ctx_r24.$implicit;
    const rowIndex_r27 = ctx_r24.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.checkboxes || ctx_r1.config.radio);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.columns.length + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.detailsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c12, row_r26, rowIndex_r27));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr");
    \u0275\u0275template(2, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template, 4, 3, "td", 25)(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template, 3, 2, "td", 25)(4, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template, 5, 11, "ng-container", 13)(5, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_Template, 2, 1, "td", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_Template, 4, 7, "tr", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const rowIndex_r27 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("ngx-table__table-row--selected", rowIndex_r27 === ctx_r1.selectedRow && !ctx_r1.config.selectCell);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.checkboxes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.radio);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.columns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.additionalActions || ctx_r1.config.detailsTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.detailsTemplate && ctx_r1.selectedDetailsTemplateRowId.has(rowIndex_r27) || ctx_r1.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 17);
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_Template, 7, 7, "ng-container", 18);
    \u0275\u0275pipe(2, "sort");
    \u0275\u0275pipe(3, "search");
    \u0275\u0275pipe(4, "global");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("cdkVirtualForOf", \u0275\u0275pipeBind3(4, 8, \u0275\u0275pipeBind3(3, 4, \u0275\u0275pipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject));
  }
}
function BaseComponent_tbody_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_2_ul_1_Template, 2, 8, "ul", 9)(2, BaseComponent_tbody_4_ng_container_2_ng_container_2_Template, 6, 20, "ng-container", 6)(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_Template, 5, 12, "cdk-virtual-scroll-viewport", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rowContextMenuPosition.top);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.config.infiniteScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.infiniteScroll);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td")(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r36 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.columns.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", group_r36[0][ctx_r1.groupRowsBy], " (", group_r36.length, ")");
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const ctx_r36 = \u0275\u0275nextContext();
    const group_r36 = ctx_r36.$implicit;
    const rowIndex_r38 = ctx_r36.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.groupRowsHeaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction5(2, _c14, group_r36.length, ctx_r1.groupRowsBy, group_r36[0] ? group_r36[0][ctx_r1.groupRowsBy] : "", group_r36, rowIndex_r38));
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const rowIndex_r38 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.collapseRow(rowIndex_r38));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowIndex_r38 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.isRowCollapsed(rowIndex_r38) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "render");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r40 = ctx.$implicit;
    const row_r41 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r41, column_r40.key), " ");
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_td_1_Template, 3, 4, "td", 13);
    \u0275\u0275element(2, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.columns);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_Template, 3, 1, "tr", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r36);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr");
    \u0275\u0275template(2, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 6)(3, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_3_Template, 1, 8, "ng-container", 24);
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275template(5, BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template, 1, 1, "span", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const rowIndex_r38 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.groupRowsHeaderTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.groupRowsHeaderTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.arrowDefinition);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedDetailsTemplateRowId.has(rowIndex_r38));
  }
}
function BaseComponent_tbody_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 13);
    \u0275\u0275pipe(2, "sort");
    \u0275\u0275pipe(3, "search");
    \u0275\u0275pipe(4, "global");
    \u0275\u0275pipe(5, "paginate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(5, 14, \u0275\u0275pipeBind3(4, 10, \u0275\u0275pipeBind4(3, 5, \u0275\u0275pipeBind3(2, 1, ctx_r1.grouped, ctx_r1.sortBy, ctx_r1.config), ctx_r1.term, ctx_r1.filteredCountSubject, ctx_r1.config), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject), \u0275\u0275pureFunction4(17, _c11, ctx_r1.limit, ctx_r1.page, ctx_r1.count, ctx_r1.id)));
  }
}
function BaseComponent_tbody_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275template(1, BaseComponent_tbody_4_ng_container_1_Template, 4, 3, "ng-container", 6)(2, BaseComponent_tbody_4_ng_container_2_Template, 4, 3, "ng-container", 6)(3, BaseComponent_tbody_4_ng_container_3_Template, 6, 22, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rowTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rowTemplate && !ctx_r1.config.groupRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rowTemplate && ctx_r1.config.groupRows);
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "label", 19)(2, "input", 20);
    \u0275\u0275listener("change", function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r44);
      const row_r45 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCheckboxSelect($event, row_r45, ctx_r1.data.indexOf(row_r45)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "em", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r45 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "checkbox-draggable-", ctx_r1.data.indexOf(row_r45), "");
    \u0275\u0275property("checked", ctx_r1.isSelected || ctx_r1.selectedCheckboxes.has(ctx_r1.data.indexOf(row_r45)));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "label")(2, "input", 22);
    \u0275\u0275listener("change", function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r46);
      const row_r45 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRadioSelect($event, row_r45, ctx_r1.data.indexOf(row_r45)));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r45 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "radio-draggable-", ctx_r1.data.indexOf(row_r45), "");
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "render");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r49 = \u0275\u0275nextContext().$implicit;
    const row_r45 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r45, column_r49.key));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const column_r49 = \u0275\u0275nextContext().$implicit;
    const row_r45 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", column_r49.cellTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c13, row_r45, ctx_r1.data.indexOf(row_r45), column_r49));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 29);
    \u0275\u0275listener("click", function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const ctx_r47 = \u0275\u0275restoreView(_r47);
      const column_r49 = ctx_r47.$implicit;
      const colIndex_r50 = ctx_r47.index;
      const row_r45 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onClick($event, row_r45, column_r49.key, colIndex_r50, ctx_r1.data.indexOf(row_r45)));
    })("dblclick", function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const ctx_r50 = \u0275\u0275restoreView(_r47);
      const column_r49 = ctx_r50.$implicit;
      const colIndex_r50 = ctx_r50.index;
      const row_r45 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDoubleClick($event, row_r45, column_r49.key, colIndex_r50, ctx_r1.data.indexOf(row_r45)));
    });
    \u0275\u0275template(2, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_div_2_Template, 3, 4, "div", 6)(3, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_ng_container_3_Template, 1, 6, "ng-container", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r49 = ctx.$implicit;
    const colIndex_r50 = ctx.index;
    const row_r45 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("ngx-table__table-col--selected", colIndex_r50 === ctx_r1.selectedCol && !ctx_r1.config.selectCell)("ngx-table__table-cell--selected", colIndex_r50 === ctx_r1.selectedCol && ctx_r1.data.indexOf(row_r45) === ctx_r1.selectedRow && !ctx_r1.config.selectCol && !ctx_r1.config.selectRow);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !column_r49.cellTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r49.cellTemplate);
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 28);
    \u0275\u0275listener("cdkDragStarted", function BaseComponent_tbody_5_ng_container_1_ng_container_1_Template_tr_cdkDragStarted_1_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event));
    });
    \u0275\u0275template(2, BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template, 4, 3, "td", 6)(3, BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template, 3, 2, "td", 6)(4, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template, 4, 6, "ng-container", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDragStartDelay", ctx_r1.config.reorderDelay || 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.checkboxes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.radio);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.columns);
  }
}
function BaseComponent_tbody_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BaseComponent_tbody_5_ng_container_1_ng_container_1_Template, 5, 4, "ng-container", 13);
    \u0275\u0275pipe(2, "sort");
    \u0275\u0275pipe(3, "search");
    \u0275\u0275pipe(4, "global");
    \u0275\u0275pipe(5, "paginate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(5, 12, \u0275\u0275pipeBind3(4, 8, \u0275\u0275pipeBind3(3, 4, \u0275\u0275pipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject), \u0275\u0275pureFunction4(15, _c11, ctx_r1.limit, ctx_r1.page, ctx_r1.count, ctx_r1.id)));
  }
}
function BaseComponent_tbody_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tbody", 27);
    \u0275\u0275listener("cdkDropListDropped", function BaseComponent_tbody_5_Template_tbody_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275template(1, BaseComponent_tbody_5_ng_container_1_Template, 6, 20, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rowTemplate && !ctx_r1.config.groupRows);
  }
}
function BaseComponent_tbody_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.noResultsTemplate);
  }
}
function BaseComponent_tbody_6_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 33);
    \u0275\u0275text(2, "No results");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("colspan", ctx_r1.columns && ctx_r1.columns.length + 1);
  }
}
function BaseComponent_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody")(1, "tr", 30);
    \u0275\u0275template(2, BaseComponent_tbody_6_ng_container_2_Template, 1, 1, "ng-container", 31)(3, BaseComponent_tbody_6_td_3_Template, 3, 1, "td", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.noResultsTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.noResultsTemplate);
  }
}
function BaseComponent_tbody_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingTemplate);
  }
}
function BaseComponent_tbody_7_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 35);
    \u0275\u0275element(2, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("colspan", ctx_r1.columns && ctx_r1.columns.length + 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.loadingHeight, "px");
  }
}
function BaseComponent_tbody_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody")(1, "tr", 34);
    \u0275\u0275template(2, BaseComponent_tbody_7_ng_container_2_Template, 1, 1, "ng-container", 31)(3, BaseComponent_tbody_7_td_3_Template, 3, 3, "td", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingTemplate);
  }
}
function BaseComponent_tfoot_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr");
    \u0275\u0275elementContainer(2, 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.summaryTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c15, ctx_r1.data.length, ctx_r1.limit, ctx_r1.page));
  }
}
var STYLE;
(function(STYLE2) {
  STYLE2["TINY"] = "tiny";
  STYLE2["BIG"] = "big";
  STYLE2["NORMAL"] = "normal";
})(STYLE || (STYLE = {}));
var THEME;
(function(THEME2) {
  THEME2["LIGHT"] = "light";
  THEME2["DARK"] = "dark";
})(THEME || (THEME = {}));
var Event;
(function(Event2) {
  Event2["onPagination"] = "onPagination";
  Event2["onOrder"] = "onOrder";
  Event2["onGlobalSearch"] = "onGlobalSearch";
  Event2["onSearch"] = "onSearch";
  Event2["onClick"] = "onClick";
  Event2["onDoubleClick"] = "onDoubleClick";
  Event2["onCheckboxSelect"] = "onCheckboxSelect";
  Event2["onRadioSelect"] = "onRadioSelect";
  Event2["onCheckboxToggle"] = "onCheckboxToggle";
  Event2["onSelectAll"] = "onSelectAll";
  Event2["onInfiniteScrollEnd"] = "onInfiniteScrollEnd";
  Event2["onColumnResizeMouseDown"] = "onColumnResizeMouseDown";
  Event2["onColumnResizeMouseUp"] = "onColumnResizeMouseUp";
  Event2["onRowDrop"] = "onRowDrop";
  Event2["onReorderStart"] = "onReorderStart";
  Event2["onRowCollapsedShow"] = "onRowCollapsedShow";
  Event2["onRowCollapsedHide"] = "onRowCollapsedHide";
  Event2["onRowContextMenu"] = "onRowContextMenu";
})(Event || (Event = {}));
var API;
(function(API2) {
  API2["rowContextMenuClicked"] = "rowContextMenuClicked";
  API2["setInputValue"] = "setInputValue";
  API2["toggleRowIndex"] = "toggleRowIndex";
  API2["toggleCheckbox"] = "toggleCheckbox";
  API2["onGlobalSearch"] = "onGlobalSearch";
  API2["setPaginationCurrentPage"] = "setPaginationCurrentPage";
  API2["getPaginationCurrentPage"] = "getPaginationCurrentPage";
  API2["getPaginationTotalItems"] = "getPaginationTotalItems";
  API2["getNumberOfRowsPerPage"] = "getNumberOfRowsPerPage";
  API2["getPaginationLastPage"] = "getPaginationLastPage";
  API2["setPaginationRange"] = "setPaginationRange";
  API2["setPaginationPreviousLabel"] = "setPaginationPreviousLabel";
  API2["setPaginationNextLabel"] = "setPaginationNextLabel";
  API2["setPaginationDisplayLimit"] = "setPaginationDisplayLimit";
  API2["setTableClass"] = "setTableClass";
  API2["setRowClass"] = "setRowClass";
  API2["setCellClass"] = "setCellClass";
  API2["setRowStyle"] = "setRowStyle";
  API2["setCellStyle"] = "setCellStyle";
  API2["sortBy"] = "sortBy";
})(API || (API = {}));
var DefaultConfig = {
  searchEnabled: false,
  headerEnabled: true,
  orderEnabled: true,
  orderEventOnly: false,
  paginationEnabled: true,
  clickEvent: true,
  selectRow: false,
  selectCol: false,
  selectCell: false,
  rows: 10,
  additionalActions: false,
  serverPagination: false,
  isLoading: false,
  detailsTemplate: false,
  groupRows: false,
  paginationRangeEnabled: true,
  collapseAllRows: false,
  checkboxes: false,
  radio: false,
  resizeColumn: false,
  fixedColumnWidth: true,
  horizontalScroll: false,
  logger: false,
  showDetailsArrow: false,
  showContextMenu: false,
  persistState: false,
  paginationMaxSize: 5,
  threeWaySort: false,
  onDragOver: false,
  tableLayout: {
    style: STYLE.NORMAL,
    theme: THEME.LIGHT,
    borderless: false,
    hover: true,
    striped: false
  }
};
var DefaultConfigService = class _DefaultConfigService {
  static {
    this.config = DefaultConfig;
  }
  static {
    this.\u0275fac = function DefaultConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultConfigService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultConfigService,
      factory: _DefaultConfigService.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultConfigService, [{
    type: Injectable
  }], null, null);
})();
var GroupRowsService = class _GroupRowsService {
  static doGroupRows(data2, groupRowsBy) {
    const grouped = [];
    from(data2).pipe(groupBy((row) => row[groupRowsBy]), mergeMap((group) => group.pipe(reduce((acc, curr) => [...acc, curr], [])))).subscribe((row) => grouped.push(row));
    return grouped;
  }
  static {
    this.\u0275fac = function GroupRowsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupRowsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _GroupRowsService,
      factory: _GroupRowsService.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupRowsService, [{
    type: Injectable
  }], null, null);
})();
var StyleService = class _StyleService {
  setRowClass(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row = document.querySelector(selector);
    if (row) {
      row.classList.add(val.className);
    }
  }
  setCellClass(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
    const cell = document.querySelector(selector);
    if (cell) {
      cell.classList.add(val.className);
    }
  }
  setRowStyle(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row = document.querySelector(selector);
    if (row) {
      row.style[val.attr] = val.value;
    }
  }
  setCellStyle(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
    const cell = document.querySelector(selector);
    if (cell) {
      cell.style[val.attr] = val.value;
    }
  }
  pinnedWidth(pinned, column) {
    if (pinned) {
      return 150 * column + "px";
    }
  }
  static {
    this.\u0275fac = function StyleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StyleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _StyleService,
      factory: _StyleService.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleService, [{
    type: Injectable
  }], null, null);
})();
var PaginationComponent = class _PaginationComponent {
  constructor() {
    this.updateRange = new EventEmitter();
    this.ranges = [5, 10, 25, 50, 100];
    this.showRange = false;
    this.screenReaderPaginationLabel = "Pagination";
    this.screenReaderPageLabel = "page";
    this.screenReaderCurrentLabel = "You are on page";
    this.previousLabel = "";
    this.nextLabel = "";
    this.directionLinks = true;
  }
  onClick(targetElement) {
    if (this.paginationRange && !this.paginationRange.nativeElement.contains(targetElement)) {
      this.showRange = false;
    }
  }
  ngOnChanges(changes) {
    const {
      config
    } = changes;
    if (config && config.currentValue) {
      this.selectedLimit = this.config.rows;
    }
  }
  onPageChange(page) {
    this.updateRange.emit({
      page,
      limit: this.selectedLimit
    });
  }
  changeLimit(limit, callFromAPI) {
    if (!callFromAPI) {
      this.showRange = !this.showRange;
    }
    this.selectedLimit = limit;
    this.updateRange.emit({
      page: 1,
      limit
    });
  }
  static {
    this.\u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _PaginationComponent,
      selectors: [["pagination"]],
      viewQuery: function PaginationComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
          \u0275\u0275viewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginationDirective = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginationRange = _t.first);
        }
      },
      hostBindings: function PaginationComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function PaginationComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, \u0275\u0275resolveDocument);
        }
      },
      inputs: {
        pagination: "pagination",
        config: "config",
        id: "id"
      },
      outputs: {
        updateRange: "updateRange"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 11,
      vars: 17,
      consts: [["paginationDirective", "paginationApi"], ["paginationRange", ""], [1, "ngx-pagination-wrapper"], [1, "ngx-pagination-steps"], ["id", "pagination-controls", 3, "pageChange", "id", "maxSize"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], ["class", "ngx-pagination-range", 3, "ngx-table__table--dark-pagination-range", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"], [1, "ngx-pagination-range"], ["id", "rowAmount", 1, "ngx-dropdown", "ngx-pagination-range-dropdown"], [1, "ngx-btn-group"], [1, "ngx-pagination-range-dropdown-button", 3, "click"], [1, "ngx-icon", "ngx-icon-arrow-down"], ["class", "ngx-menu", 4, "ngIf"], [1, "ngx-menu"], ["class", "ngx-pagination-range-dropdown-button-item", 3, "ngx-pagination-range--selected", "click", 4, "ngFor", "ngForOf"], [1, "ngx-pagination-range-dropdown-button-item", 3, "click"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "pagination-template", 4, 0);
          \u0275\u0275listener("pageChange", function PaginationComponent_Template_pagination_template_pageChange_2_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onPageChange($event));
          });
          \u0275\u0275elementStart(4, "ul", 5);
          \u0275\u0275template(5, PaginationComponent_li_5_Template, 3, 4, "li", 6);
          \u0275\u0275elementStart(6, "li", 7);
          \u0275\u0275text(7);
          \u0275\u0275elementEnd();
          \u0275\u0275template(8, PaginationComponent_li_8_Template, 3, 6, "li", 8)(9, PaginationComponent_li_9_Template, 3, 4, "li", 9);
          \u0275\u0275elementEnd()()();
          \u0275\u0275template(10, PaginationComponent_div_10_Template, 8, 4, "div", 10);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          const paginationDirective_r3 = \u0275\u0275reference(3);
          \u0275\u0275styleProp("display", ctx.config.paginationEnabled ? "" : "none");
          \u0275\u0275classProp("ngx-table__table--dark-pagination-wrapper", ctx.config.tableLayout.theme === "dark");
          \u0275\u0275advance(2);
          \u0275\u0275classProp("ngx-table__table--dark-pagination", ctx.config.tableLayout.theme === "dark");
          \u0275\u0275property("id", ctx.id)("maxSize", ctx.config.paginationMaxSize || 5);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("responsive", true);
          \u0275\u0275attribute("aria-label", ctx.screenReaderPaginationLabel);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.directionLinks);
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate2(" ", paginationDirective_r3.getCurrent(), " / ", paginationDirective_r3.getLastPage(), " ");
          \u0275\u0275advance();
          \u0275\u0275property("ngForOf", paginationDirective_r3.pages);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.directionLinks);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.config.paginationRangeEnabled);
        }
      },
      dependencies: [NgForOf, NgIf, PaginationControlsDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "pagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="ngx-pagination-wrapper"
  [style.display]="config.paginationEnabled ? '' : 'none'"
  [class.ngx-table__table--dark-pagination-wrapper]="config.tableLayout.theme === 'dark'"
>
  <div class="ngx-pagination-steps">
    <pagination-template
      #paginationDirective="paginationApi"
      id="pagination-controls"
      [id]="id"
      [class.ngx-table__table--dark-pagination]="config.tableLayout.theme === 'dark'"
      [maxSize]="config.paginationMaxSize || 5"
      (pageChange)="onPageChange($event)"
    >
      <ul
        class="ngx-pagination"
        role="navigation"
        [attr.aria-label]="screenReaderPaginationLabel"
        [class.responsive]="true"
      >
        <li
          class="pagination-previous"
          [class.disabled]="paginationDirective.isFirstPage()"
          *ngIf="directionLinks"
        >
          <a
            tabindex="0"
            *ngIf="1 < paginationDirective.getCurrent()"
            (keyup.enter)="paginationDirective.previous()"
            (click)="paginationDirective.previous()"
            [attr.aria-label]="previousLabel + ' ' + screenReaderPageLabel"
          >
            {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </a>
          <span *ngIf="paginationDirective.isFirstPage()">
            {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </span>
        </li>
        <li class="small-screen">
          {{ paginationDirective.getCurrent() }} / {{ paginationDirective.getLastPage() }}
        </li>
        <li
          [class.current]="paginationDirective.getCurrent() === page.value"
          [class.ellipsis]="page.label === '...'"
          *ngFor="let page of paginationDirective.pages"
        >
          <a
            tabindex="0"
            (keyup.enter)="paginationDirective.setCurrent(page.value)"
            (click)="paginationDirective.setCurrent(page.value)"
            *ngIf="paginationDirective.getCurrent() !== page.value"
          >
            <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
            <span>{{ page.label }}</span>
          </a>
          <ng-container *ngIf="paginationDirective.getCurrent() === page.value">
            <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
            <span>{{ page.label }}</span>
          </ng-container>
        </li>
        <li
          class="pagination-next"
          [class.disabled]="paginationDirective.isLastPage()"
          *ngIf="directionLinks"
        >
          <a
            tabindex="0"
            *ngIf="!paginationDirective.isLastPage()"
            (keyup.enter)="paginationDirective.next()"
            (click)="paginationDirective.next()"
            [attr.aria-label]="nextLabel + ' ' + screenReaderPageLabel"
          >
            {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </a>
          <span *ngIf="paginationDirective.isLastPage()">
            {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </span>
        </li>
      </ul>
    </pagination-template>
  </div>
  <div
    class="ngx-pagination-range"
    #paginationRange
    [class.ngx-table__table--dark-pagination-range]="config.tableLayout.theme === 'dark'"
    *ngIf="config.paginationRangeEnabled"
  >
    <div class="ngx-dropdown ngx-pagination-range-dropdown" id="rowAmount">
      <div class="ngx-btn-group">
        <div class="ngx-pagination-range-dropdown-button" (click)="showRange = !showRange">
          {{selectedLimit}} <i class="ngx-icon ngx-icon-arrow-down"></i>
        </div>
        <ul class="ngx-menu" *ngIf="showRange">
          <li
            class="ngx-pagination-range-dropdown-button-item"
            [class.ngx-pagination-range--selected]="limit === selectedLimit"
            (click)="changeLimit(limit, false)"
            *ngFor="let limit of ranges"
          >
            <span>{{limit}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], null, {
    paginationDirective: [{
      type: ViewChild,
      args: ["paginationDirective"]
    }],
    paginationRange: [{
      type: ViewChild,
      args: ["paginationRange"]
    }],
    pagination: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    updateRange: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.update = new EventEmitter();
  }
  unifyKey(key) {
    return key.replace(".", "_");
  }
  onSearch(input) {
    this.update.emit([{
      value: input.value,
      key: this.column.key
    }]);
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _HeaderComponent,
      selectors: [["table-header"]],
      inputs: {
        column: "column"
      },
      outputs: {
        update: "update"
      },
      decls: 3,
      vars: 5,
      consts: [["input", ""], [3, "for"], ["type", "text", "aria-label", "Search", 1, "ngx-table__header-search", 3, "input", "id", "placeholder"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "label", 1)(1, "input", 2, 0);
          \u0275\u0275listener("input", function HeaderComponent_Template_input_input_1_listener() {
            \u0275\u0275restoreView(_r1);
            const input_r2 = \u0275\u0275reference(2);
            return \u0275\u0275resetView(ctx.onSearch(input_r2));
          });
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275propertyInterpolate1("for", "search_", ctx.unifyKey(ctx.column.key), "");
          \u0275\u0275advance();
          \u0275\u0275propertyInterpolate1("id", "search_", ctx.unifyKey(ctx.column.key), "");
          \u0275\u0275propertyInterpolate("placeholder", ctx.column.placeholder ? ctx.column.placeholder : ctx.column.title);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "table-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<label for="search_{{ unifyKey(column.key) }}">\n  <input\n    type="text"\n    id="search_{{ unifyKey(column.key) }}"\n    aria-label="Search"\n    placeholder="{{ column.placeholder ? column.placeholder : column.title }}"\n    class="ngx-table__header-search"\n    #input\n    (input)="onSearch(input)"\n  />\n</label>\n'
    }]
  }], null, {
    column: [{
      type: Input
    }],
    update: [{
      type: Output
    }]
  });
})();
var TableTHeadComponent = class _TableTHeadComponent {
  onClick(targetElement) {
    if (this.additionalActionMenu && !this.additionalActionMenu.nativeElement.contains(targetElement)) {
      this.menuActive = false;
    }
    if (this.openedHeaderActionTemplate && // if no header have the clicked point
    !this.headerDropdown.toArray().some((ref) => ref.nativeElement.contains(targetElement))) {
      this.openedHeaderActionTemplate = null;
    }
  }
  constructor(styleService) {
    this.styleService = styleService;
    this.menuActive = false;
    this.openedHeaderActionTemplate = null;
    this.onSelectAllBinded = this.onSelectAll.bind(this);
    this.filter = new EventEmitter();
    this.order = new EventEmitter();
    this.selectAll = new EventEmitter();
    this.event = new EventEmitter();
  }
  getColumnDefinition(column) {
    return column.searchEnabled || typeof column.searchEnabled === "undefined";
  }
  orderBy(column) {
    this.order.emit(column);
  }
  isOrderEnabled(column) {
    const columnOrderEnabled = column.orderEnabled === void 0 ? true : !!column.orderEnabled;
    return this.config.orderEnabled && columnOrderEnabled;
  }
  columnDrop(event) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
  onSearch($event) {
    this.filter.emit($event);
  }
  getColumnWidth(column) {
    if (column.width) {
      return column.width;
    }
    return this.config.fixedColumnWidth ? 100 / this.columns.length + "%" : null;
  }
  onSelectAll() {
    this.selectAll.emit();
  }
  onMouseDown(event, th) {
    if (!this.config.resizeColumn) {
      return;
    }
    this.th = th;
    this.startOffset = th.offsetWidth - event.pageX;
    this.event.emit({
      event: Event.onColumnResizeMouseDown,
      value: event
    });
  }
  onMouseMove(event) {
    if (!this.config.resizeColumn) {
      return;
    }
    if (this.th && this.th.style) {
      this.th.style.width = this.startOffset + event.pageX + "px";
      this.th.style.cursor = "col-resize";
      this.th.style["user-select"] = "none";
    }
  }
  onMouseUp(event) {
    if (!this.config.resizeColumn) {
      return;
    }
    this.event.emit({
      event: Event.onColumnResizeMouseUp,
      value: event
    });
    this.th.style.cursor = "default";
    this.th = void 0;
  }
  showHeaderActionTemplateMenu(column) {
    if (!column.headerActionTemplate) {
      console.error("Column [headerActionTemplate] property not defined");
    }
    if (this.openedHeaderActionTemplate === column.key) {
      this.openedHeaderActionTemplate = null;
      return;
    }
    this.openedHeaderActionTemplate = column.key;
  }
  showMenu() {
    if (!this.additionalActionsTemplate) {
      console.error("[additionalActionsTemplate] property not defined");
    }
    this.menuActive = !this.menuActive;
  }
  static {
    this.\u0275fac = function TableTHeadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableTHeadComponent)(\u0275\u0275directiveInject(StyleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _TableTHeadComponent,
      selectors: [["", "table-thead", ""]],
      viewQuery: function TableTHeadComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c2, 5);
          \u0275\u0275viewQuery(_c3, 5);
          \u0275\u0275viewQuery(_c4, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.th = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.additionalActionMenu = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerDropdown = _t);
        }
      },
      hostBindings: function TableTHeadComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function TableTHeadComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, \u0275\u0275resolveDocument);
        }
      },
      inputs: {
        config: "config",
        columns: "columns",
        sortKey: "sortKey",
        sortState: "sortState",
        selectAllTemplate: "selectAllTemplate",
        filtersTemplate: "filtersTemplate",
        additionalActionsTemplate: "additionalActionsTemplate"
      },
      outputs: {
        filter: "filter",
        order: "order",
        selectAll: "selectAll",
        event: "event"
      },
      features: [\u0275\u0275ProvidersFeature([StyleService])],
      attrs: _c5,
      decls: 7,
      vars: 8,
      consts: [["th", ""], ["headerDropdown", ""], ["additionalActionMenu", ""], ["class", "ngx-table__header", 4, "ngIf"], ["class", "ngx-table__header ngx-table__header--draggable", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListDropped", 4, "ngIf"], [1, "ngx-table__search-header"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ngx-table__header"], [3, "width", 4, "ngIf"], ["class", "ngx-table__header-cell-additional-actions", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "ngx-form-checkbox", "for", "selectAllCheckboxes", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["for", "selectAllCheckboxes", 1, "ngx-form-checkbox"], ["type", "checkbox", "id", "selectAllCheckboxes", 3, "change"], ["id", "selectAllCheckbox", 1, "ngx-form-icon"], [1, "ngx-table__header-cell", 3, "mousedown", "mouseup", "mousemove", "ngClass"], [2, "display", "inline", 3, "click"], [1, "ngx-table__header-title"], ["class", "ngx-icon ngx-icon-pin", 4, "ngIf"], ["class", "ngx-icon ngx-icon-arrow-up", 4, "ngIf"], ["class", "ngx-icon ngx-icon-arrow-down", 4, "ngIf"], ["class", "ngx-dropdown", 4, "ngIf"], ["class", "ngx-table__column-resizer", 4, "ngIf"], [1, "ngx-icon", "ngx-icon-pin"], [1, "ngx-icon", "ngx-icon-arrow-up"], [1, "ngx-icon", "ngx-icon-arrow-down"], [1, "ngx-dropdown"], [1, "ngx-btn", "ngx-btn-link", 3, "click"], [1, "ngx-icon", "ngx-icon-more"], ["class", "ngx-menu ngx-table__table-menu", 4, "ngIf"], [1, "ngx-menu", "ngx-table__table-menu"], [3, "ngTemplateOutlet"], [1, "ngx-table__column-resizer"], [1, "ngx-table__header-cell-additional-actions"], [1, "ngx-icon", "ngx-icon-menu"], [3, "ngTemplateOutlet", 4, "ngIf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "ngx-table__header", "ngx-table__header--draggable", 3, "cdkDropListDropped"], ["type", "checkbox", "id", "selectAllCheckboxesDrag", 3, "change"], ["id", "selectAllCheckboxDrag", 1, "ngx-form-icon"], ["cdkDragLockAxis", "x", "cdkDrag", "", 1, "ngx-table__header-cell", "ngx-table__header-cell--draggable", 3, "mousedown", "mouseup", "mousemove", "cdkDragStartDelay", "ngClass"], ["cdkDragHandle", "", 2, "display", "inline", 3, "click"], [3, "ngClass"], [3, "column", "update", 4, "ngIf"], [3, "update", "column"]],
      template: function TableTHeadComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, TableTHeadComponent_tr_0_Template, 4, 3, "tr", 3)(1, TableTHeadComponent_tr_1_Template, 4, 3, "tr", 4);
          \u0275\u0275elementStart(2, "tr", 5);
          \u0275\u0275template(3, TableTHeadComponent_th_3_Template, 1, 0, "th", 6)(4, TableTHeadComponent_ng_container_4_Template, 3, 6, "ng-container", 7)(5, TableTHeadComponent_th_5_Template, 1, 0, "th", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275template(6, TableTHeadComponent_ng_container_6_Template, 3, 1, "ng-container", 6);
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.config.headerEnabled && !ctx.config.columnReorder);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.config.headerEnabled && ctx.config.columnReorder);
          \u0275\u0275advance();
          \u0275\u0275styleProp("display", ctx.config.searchEnabled && !ctx.filtersTemplate ? "table-row" : "none");
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.config.checkboxes || ctx.config.radio);
          \u0275\u0275advance();
          \u0275\u0275property("ngForOf", ctx.columns);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.config.additionalActions || ctx.config.detailsTemplate);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.filtersTemplate);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, CdkDropList, CdkDrag, CdkDragHandle, HeaderComponent],
      styles: [".cdk-drag-preview[_ngcontent-%COMP%]{text-align:left;padding-top:9px;padding-left:4px;color:#50596c;border:1px solid #e7e9ed}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableTHeadComponent, [{
    type: Component,
    args: [{
      selector: "[table-thead]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [StyleService],
      template: `<tr class="ngx-table__header" *ngIf="config.headerEnabled && !config.columnReorder">
  <th *ngIf="config.checkboxes || config.radio" [style.width]="'3%'">
    <ng-container
      *ngIf="selectAllTemplate && config.checkboxes"
      [ngTemplateOutlet]="selectAllTemplate"
      [ngTemplateOutletContext]="{ $implicit: onSelectAllBinded }"
    >
    </ng-container>
    <label
      class="ngx-form-checkbox"
      for="selectAllCheckboxes"
      *ngIf="!selectAllTemplate && config.checkboxes"
    >
      <input type="checkbox" id="selectAllCheckboxes" (change)="onSelectAll()" />
      <em class="ngx-form-icon" id="selectAllCheckbox"></em>
    </label>
  </th>
  <ng-container *ngFor="let column of columns; let colIndex = index; let last = last">
    <th
      class="ngx-table__header-cell"
      [class.pinned-left]="column.pinned"
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
      #th
      [style.width]="getColumnWidth(column)"
      (mousedown)="onMouseDown($event, th)"
      (mouseup)="onMouseUp($event)"
      (mousemove)="onMouseMove($event)"
    >
      <div
        (click)="orderBy(column)"
        style="display: inline"
        [class.pointer]="isOrderEnabled(column)"
      >
        <div class="ngx-table__header-title">
          {{ column.title }}<span>&nbsp;</span>
          <em class="ngx-icon ngx-icon-pin" *ngIf="column.pinned"></em>
          <div [style.display]="config.orderEnabled ? 'inline' : 'none'">
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'asc'"
              class="ngx-icon ngx-icon-arrow-up"
            >
            </em>
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'desc'"
              class="ngx-icon ngx-icon-arrow-down"
            >
            </em>
          </div>
        </div>
      </div>
      <div class="ngx-dropdown" *ngIf="!!column.headerActionTemplate" #headerDropdown>
        <a class="ngx-btn ngx-btn-link" (click)="showHeaderActionTemplateMenu(column)">
          <span class="ngx-icon ngx-icon-more"></span>
        </a>
        <div
          class="ngx-menu ngx-table__table-menu"
          *ngIf="column.key === openedHeaderActionTemplate"
        >
          <ng-container [ngTemplateOutlet]="column.headerActionTemplate"> </ng-container>
        </div>
      </div>
      <div class="ngx-table__column-resizer" *ngIf="config.resizeColumn && !last"></div>
    </th>
  </ng-container>
  <th
    *ngIf="
      config.additionalActions ||
      config.detailsTemplate ||
      config.collapseAllRows ||
      config.groupRows
    "
    class="ngx-table__header-cell-additional-actions"
  >
    <div class="ngx-dropdown" #additionalActionMenu *ngIf="config.additionalActions">
      <a class="ngx-btn ngx-btn-link" (click)="showMenu()">
        <span class="ngx-icon ngx-icon-menu"></span>
      </a>
      <ul class="ngx-menu ngx-table__table-menu" *ngIf="menuActive">
        <ng-container
          *ngIf="additionalActionsTemplate"
          [ngTemplateOutlet]="additionalActionsTemplate"
        >
        </ng-container>
      </ul>
    </div>
  </th>
</tr>
<tr
  class="ngx-table__header ngx-table__header--draggable"
  *ngIf="config.headerEnabled && config.columnReorder"
  cdkDropList
  cdkDropListOrientation="horizontal"
  (cdkDropListDropped)="columnDrop($event)"
>
  <th *ngIf="config.checkboxes || config.radio" [style.width]="'3%'">
    <ng-container
      *ngIf="selectAllTemplate && config.checkboxes"
      [ngTemplateOutlet]="selectAllTemplate"
      [ngTemplateOutletContext]="{ $implicit: onSelectAllBinded }"
    >
    </ng-container>
    <label
      class="ngx-form-checkbox"
      for="selectAllCheckboxes"
      *ngIf="!selectAllTemplate && config.checkboxes"
    >
      <input type="checkbox" id="selectAllCheckboxesDrag" (change)="onSelectAll()" />
      <em class="ngx-form-icon" id="selectAllCheckboxDrag"></em>
    </label>
  </th>
  <ng-container *ngFor="let column of columns; let colIndex = index; let last = last">
    <th
      class="ngx-table__header-cell ngx-table__header-cell--draggable"
      cdkDragLockAxis="x"
      cdkDrag
      [cdkDragStartDelay]="config.reorderDelay || 0"
      [class.pinned-left]="column.pinned"
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
      #th
      [style.width]="getColumnWidth(column)"
      (mousedown)="onMouseDown($event, th)"
      (mouseup)="onMouseUp($event)"
      (mousemove)="onMouseMove($event)"
    >
      <div
        (click)="orderBy(column)"
        style="display: inline"
        cdkDragHandle
        [class.pointer]="isOrderEnabled(column)"
      >
        <div class="ngx-table__header-title">
          {{ column.title }}<span>&nbsp;</span>
          <em class="ngx-icon ngx-icon-pin" *ngIf="column.pinned"></em>
          <div [style.display]="config.orderEnabled ? 'inline' : 'none'">
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'asc'"
              class="ngx-icon ngx-icon-arrow-up"
            >
            </em>
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'desc'"
              class="ngx-icon ngx-icon-arrow-down"
            >
            </em>
          </div>
        </div>
      </div>
      <div class="ngx-dropdown" *ngIf="!!column.headerActionTemplate" #headerDropdown>
        <a class="ngx-btn ngx-btn-link" (click)="showHeaderActionTemplateMenu(column)">
          <span class="ngx-icon ngx-icon-more"></span>
        </a>
        <div
          class="ngx-menu ngx-table__table-menu"
          *ngIf="column.key === openedHeaderActionTemplate"
        >
          <ng-container [ngTemplateOutlet]="column.headerActionTemplate"> </ng-container>
        </div>
      </div>
      <div class="ngx-table__column-resizer" *ngIf="config.resizeColumn && !last"></div>
    </th>
  </ng-container>
  <th
    *ngIf="
      config.additionalActions ||
      config.detailsTemplate ||
      config.collapseAllRows ||
      config.groupRows
    "
    class="ngx-table__header-cell-additional-actions"
  >
    <div class="ngx-dropdown" #additionalActionMenu *ngIf="config.additionalActions">
      <a class="ngx-btn ngx-btn-link" (click)="showMenu()">
        <span class="ngx-icon ngx-icon-menu"></span>
      </a>
      <ul class="ngx-menu ngx-table__table-menu" *ngIf="menuActive">
        <ng-container
          *ngIf="additionalActionsTemplate"
          [ngTemplateOutlet]="additionalActionsTemplate"
        >
        </ng-container>
      </ul>
    </div>
  </th>
</tr>
<tr
  [style.display]="config.searchEnabled && !filtersTemplate ? 'table-row' : 'none'"
  class="ngx-table__search-header"
>
  <th *ngIf="config.checkboxes || config.radio"></th>
  <ng-container *ngFor="let column of columns; let colIndex = index">
    <th
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [class.pinned-left]="column.pinned"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
    >
      <table-header
        *ngIf="getColumnDefinition(column)"
        (update)="onSearch($event)"
        [column]="column"
      >
      </table-header>
    </th>
  </ng-container>
  <th *ngIf="config.additionalActions || config.detailsTemplate"></th>
</tr>
<ng-container *ngIf="filtersTemplate">
  <tr>
    <ng-container [ngTemplateOutlet]="filtersTemplate"> </ng-container>
  </tr>
</ng-container>
`,
      styles: [".cdk-drag-preview{text-align:left;padding-top:9px;padding-left:4px;color:#50596c;border:1px solid #e7e9ed}\n"]
    }]
  }], () => [{
    type: StyleService
  }], {
    config: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    sortKey: [{
      type: Input
    }],
    sortState: [{
      type: Input
    }],
    selectAllTemplate: [{
      type: Input
    }],
    filtersTemplate: [{
      type: Input
    }],
    additionalActionsTemplate: [{
      type: Input
    }],
    filter: [{
      type: Output
    }],
    order: [{
      type: Output
    }],
    selectAll: [{
      type: Output
    }],
    event: [{
      type: Output
    }],
    th: [{
      type: ViewChild,
      args: ["th"]
    }],
    headerDropdown: [{
      type: ViewChildren,
      args: ["headerDropdown"]
    }],
    additionalActionMenu: [{
      type: ViewChild,
      args: ["additionalActionMenu"]
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var FiltersService = class _FiltersService {
  static getPath(p, o) {
    const result = p.reduce((xs, x) => xs && typeof xs[x] !== "undefined" ? xs[x] : null, o);
    return result;
  }
  static {
    this.\u0275fac = function FiltersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FiltersService,
      factory: _FiltersService.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersService, [{
    type: Injectable
  }], null, null);
})();
var SearchPipe = class _SearchPipe {
  constructor() {
    this.filters = {};
  }
  transform(array, filter2, filteredCountSubject, config) {
    filteredCountSubject.next(0);
    if (typeof array === "undefined") {
      return;
    }
    if (typeof filter2 === "undefined") {
      filteredCountSubject.next(array.length);
      return array;
    }
    filter2.forEach((f) => {
      this.filters[f.key] = f.value.toString().toLocaleLowerCase();
      if (Object.keys(f).length === 0 || f.value === "") {
        delete this.filters[f.key];
      }
    });
    if (config && config.groupRows) {
      return array.map((arr) => this.filterGroup(arr, filteredCountSubject));
    }
    return this.filterGroup(array, filteredCountSubject);
  }
  filterGroup(array, filteredCountSubject) {
    const arr = array.filter((obj) => {
      return Object.keys(this.filters).every((c) => {
        const split = c.split(".");
        const val = FiltersService.getPath(split, obj);
        const element = typeof val === "object" ? JSON.stringify(val) : val.toString().toLocaleLowerCase();
        const strings = this.filters[c].split(",");
        return strings.some((s) => element.indexOf(s.trim()) > -1);
      });
    });
    filteredCountSubject.next(arr.length);
    return arr;
  }
  static {
    this.\u0275fac = function SearchPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
      name: "search",
      type: _SearchPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPipe, [{
    type: Pipe,
    args: [{
      name: "search"
    }]
  }], null, null);
})();
var RenderPipe = class _RenderPipe {
  transform(row, key) {
    const split = key.split(".");
    return FiltersService.getPath(split, row);
  }
  static {
    this.\u0275fac = function RenderPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RenderPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
      name: "render",
      type: _RenderPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RenderPipe, [{
    type: Pipe,
    args: [{
      name: "render"
    }]
  }], null, null);
})();
var GlobalSearchPipe = class _GlobalSearchPipe {
  transform(array, filter2, filteredCountSubject) {
    filteredCountSubject.next(0);
    if (typeof array === "undefined") {
      return;
    }
    if (typeof filter2 === "undefined" || Object.keys(filter2).length === 0 || filter2 === "") {
      filteredCountSubject.next(array.length);
      return array;
    }
    const arr = array.filter((row) => {
      const element = JSON.stringify(Object.values(row));
      const strings = filter2.split(",");
      return strings.some((s) => element.toLocaleLowerCase().indexOf(s.trim().toLocaleLowerCase()) > -1);
    });
    filteredCountSubject.next(arr.length);
    return arr;
  }
  static {
    this.\u0275fac = function GlobalSearchPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalSearchPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
      name: "global",
      type: _GlobalSearchPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalSearchPipe, [{
    type: Pipe,
    args: [{
      name: "global"
    }]
  }], null, null);
})();
var SortPipe = class _SortPipe {
  constructor() {
    this.defaultArray = [];
  }
  static isNaN(aV, bV) {
    return isNaN(parseFloat(aV)) || !isFinite(aV) || isNaN(parseFloat(bV)) || !isFinite(bV);
  }
  static compare(a, b, key) {
    const split = key.split(".");
    const aPath = FiltersService.getPath(split, a);
    const bPath = FiltersService.getPath(split, b);
    const aValue = (aPath + "").toLowerCase();
    const bValue = (bPath + "").toLowerCase();
    if (_SortPipe.isNaN(aPath, bPath)) {
      return aValue.localeCompare(bValue);
    }
    if (parseFloat(aPath) < parseFloat(bPath)) {
      return -1;
    }
    if (parseFloat(aPath) > parseFloat(bPath)) {
      return 1;
    }
    return 0;
  }
  transform(array, filter2, config) {
    if (this.defaultArray.length === 0) {
      this.defaultArray = array;
    }
    if (!filter2.key || filter2.key === "") {
      return array;
    }
    if (filter2.order === "") {
      return this.defaultArray;
    }
    if (filter2.order === "asc") {
      return this.sortAsc(array, filter2, config);
    }
    return this.sortDesc(array, filter2, config);
  }
  sortAsc(array, filter2, config) {
    if (config && config.groupRows) {
      return array.map((arr) => arr.sort((a, b) => _SortPipe.compare(a, b, filter2.key)));
    }
    return array.sort((a, b) => _SortPipe.compare(a, b, filter2.key));
  }
  sortDesc(array, filter2, config) {
    if (config && config.groupRows) {
      return array.map((arr) => arr.sort((a, b) => _SortPipe.compare(b, a, filter2.key)));
    }
    return array.sort((a, b) => _SortPipe.compare(b, a, filter2.key));
  }
  static {
    this.\u0275fac = function SortPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
      name: "sort",
      type: _SortPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortPipe, [{
    type: Pipe,
    args: [{
      name: "sort"
    }]
  }], null, null);
})();
var BaseComponent = class _BaseComponent {
  onContextMenuClick(targetElement) {
    if (this.contextMenu && !this.contextMenu.nativeElement.contains(targetElement)) {
      this.rowContextMenuPosition = {
        top: null,
        left: null,
        value: null
      };
    }
  }
  constructor(cdr, scrollDispatcher, styleService) {
    this.cdr = cdr;
    this.scrollDispatcher = scrollDispatcher;
    this.styleService = styleService;
    this.unsubscribe = new Subject();
    this.filterCount = -1;
    this.filteredCountSubject = new Subject();
    this.tableClass = null;
    this.grouped = [];
    this.isSelected = false;
    this.page = 1;
    this.count = 0;
    this.sortState = /* @__PURE__ */ new Map();
    this.sortKey = null;
    this.rowContextMenuPosition = {
      top: null,
      left: null,
      value: null
    };
    this.sortBy = {
      key: "",
      order: "asc"
    };
    this.selectedDetailsTemplateRowId = /* @__PURE__ */ new Set();
    this.selectedCheckboxes = /* @__PURE__ */ new Set();
    this.id = "table";
    this.event = new EventEmitter();
    this.filteredCountSubject.pipe(takeUntil(this.unsubscribe)).subscribe((count) => {
      setTimeout(() => {
        this.filterCount = count;
        this.cdr.detectChanges();
      });
    });
  }
  ngOnInit() {
    if (!this.columns) {
      console.error("[columns] property required!");
    }
    if (this.configuration) {
      this.config = this.configuration;
    } else {
      this.config = DefaultConfigService.config;
    }
    this.limit = this.config.rows;
    if (this.groupRowsBy) {
      this.grouped = GroupRowsService.doGroupRows(this.data, this.groupRowsBy);
    }
    this.doDecodePersistedState();
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  ngAfterViewInit() {
    const throttleValue = this.config.infiniteScrollThrottleTime ? this.config.infiniteScrollThrottleTime : 200;
    this.scrollDispatcher.scrolled().pipe(throttleTime(throttleValue), filter((event) => {
      return !!event && this.viewPort && this.viewPort.getRenderedRange().end === this.viewPort.getDataLength();
    }), takeUntil(this.unsubscribe)).subscribe(() => {
      this.emitEvent(Event.onInfiniteScrollEnd, null);
    });
  }
  ngOnChanges(changes) {
    const {
      configuration,
      data: data2,
      pagination,
      groupRowsBy
    } = changes;
    this.toggleRowIndex = changes.toggleRowIndex;
    if (configuration && configuration.currentValue) {
      this.config = configuration.currentValue;
    }
    if (data2 && data2.currentValue) {
      this.doApplyData(data2);
    }
    if (pagination && pagination.currentValue) {
      const {
        count,
        limit,
        offset
      } = pagination.currentValue;
      this.count = count;
      this.limit = limit;
      this.page = offset;
    }
    if (groupRowsBy && groupRowsBy.currentValue) {
      this.grouped = GroupRowsService.doGroupRows(this.data, this.groupRowsBy);
    }
    if (this.toggleRowIndex && this.toggleRowIndex.currentValue) {
      const row = this.toggleRowIndex.currentValue;
      this.collapseRow(row.index);
    }
  }
  orderBy(column) {
    if (typeof column.orderEnabled !== "undefined" && !column.orderEnabled) {
      return;
    }
    this.sortKey = column.key;
    if (!this.config.orderEnabled || this.sortKey === "") {
      return;
    }
    this.setColumnOrder(column);
    if (!this.config.orderEventOnly && !column.orderEventOnly) {
      this.sortBy.key = this.sortKey;
      this.sortBy.order = this.sortState.get(this.sortKey);
    } else {
      this.sortBy.key = "";
      this.sortBy.order = "";
    }
    if (!this.config.serverPagination) {
      this.data = [...this.data];
      this.sortBy = __spreadValues({}, this.sortBy);
    }
    const value = {
      key: this.sortKey,
      order: this.sortState.get(this.sortKey)
    };
    this.emitEvent(Event.onOrder, value);
  }
  onClick($event, row, key, colIndex, rowIndex) {
    if (this.config.selectRow) {
      this.selectedRow = rowIndex;
    }
    if (this.config.selectCol && `${colIndex}`) {
      this.selectedCol = colIndex;
    }
    if (this.config.selectCell && `${colIndex}`) {
      this.selectedRow = rowIndex;
      this.selectedCol = colIndex;
    }
    if (this.config.clickEvent) {
      const value = {
        event: $event,
        row,
        key,
        rowId: rowIndex,
        colId: colIndex
      };
      this.emitEvent(Event.onClick, value);
    }
  }
  onDoubleClick($event, row, key, colIndex, rowIndex) {
    const value = {
      event: $event,
      row,
      key,
      rowId: rowIndex,
      colId: colIndex
    };
    this.emitEvent(Event.onDoubleClick, value);
  }
  onCheckboxSelect($event, row, rowIndex) {
    const value = {
      event: $event,
      row,
      rowId: rowIndex
    };
    this.emitEvent(Event.onCheckboxSelect, value);
  }
  onRadioSelect($event, row, rowIndex) {
    const value = {
      event: $event,
      row,
      rowId: rowIndex
    };
    this.emitEvent(Event.onRadioSelect, value);
  }
  onSelectAll() {
    this.isSelected = !this.isSelected;
    this.emitEvent(Event.onSelectAll, this.isSelected);
  }
  onSearch($event) {
    if (!this.config.serverPagination) {
      this.term = $event;
    }
    this.emitEvent(Event.onSearch, $event);
  }
  onGlobalSearch(value) {
    if (!this.config.serverPagination) {
      this.globalSearchTerm = value;
    }
    this.emitEvent(Event.onGlobalSearch, value);
  }
  onPagination(pagination) {
    this.page = pagination.page;
    this.limit = pagination.limit;
    this.config.rows = pagination.limit;
    this.emitEvent(Event.onPagination, pagination);
  }
  toggleCheckbox(rowIndex) {
    this.selectedCheckboxes.has(rowIndex) ? this.selectedCheckboxes.delete(rowIndex) : this.selectedCheckboxes.add(rowIndex);
  }
  collapseRow(rowIndex) {
    if (this.selectedDetailsTemplateRowId.has(rowIndex)) {
      this.selectedDetailsTemplateRowId.delete(rowIndex);
      this.emitEvent(Event.onRowCollapsedHide, rowIndex);
    } else {
      this.selectedDetailsTemplateRowId.add(rowIndex);
      this.emitEvent(Event.onRowCollapsedShow, rowIndex);
    }
  }
  doDecodePersistedState() {
    if (!this.config.persistState) {
      return;
    }
    const pagination = localStorage.getItem(Event.onPagination);
    const sort = localStorage.getItem(Event.onOrder);
    const search = localStorage.getItem(Event.onSearch);
    if (pagination) {
      this.onPagination(JSON.parse(pagination));
    }
    if (sort) {
      const {
        key,
        order
      } = JSON.parse(sort);
      this.bindApi({
        type: API.sortBy,
        value: {
          column: key,
          order
        }
      });
    }
    if (search) {
      this.bindApi({
        type: API.setInputValue,
        value: JSON.parse(search)
      });
    }
  }
  isRowCollapsed(rowIndex) {
    if (this.config.collapseAllRows) {
      return true;
    }
    return this.selectedDetailsTemplateRowId.has(rowIndex);
  }
  get loadingHeight() {
    const table = document.getElementById(this.id);
    if (table && table.rows && table.rows.length > 3) {
      const searchEnabled = this.config.searchEnabled ? 1 : 0;
      const headerEnabled = this.config.headerEnabled ? 1 : 0;
      const borderTrHeight = 1;
      const borderDivHeight = 2;
      return (table.rows.length - searchEnabled - headerEnabled) * (table.rows[3].offsetHeight - borderTrHeight) - borderDivHeight;
    }
    return 30;
  }
  get arrowDefinition() {
    return this.config.showDetailsArrow || typeof this.config.showDetailsArrow === "undefined";
  }
  onRowContextMenu($event, row, key, colIndex, rowIndex) {
    if (!this.config.showContextMenu) {
      return;
    }
    $event.preventDefault();
    const value = {
      event: $event,
      row,
      key,
      rowId: rowIndex,
      colId: colIndex
    };
    this.rowContextMenuPosition = {
      top: `${$event.pageY - 10}px`,
      left: `${$event.pageX - 10}px`,
      value
    };
    this.emitEvent(Event.onRowContextMenu, value);
  }
  doApplyData(data2) {
    const order = this.columns.find((c) => !!c.orderBy);
    if (order) {
      this.sortState.set(this.sortKey, order.orderBy === "asc" ? "desc" : "asc");
      this.orderBy(order);
    } else {
      this.data = [...data2.currentValue];
    }
  }
  onDragStart(event) {
    this.emitEvent(Event.onReorderStart, event);
  }
  onDrop(event) {
    this.emitEvent(Event.onRowDrop, event);
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
  // DO NOT REMOVE. It is called from parent component. See src/app/demo/api-doc/api-doc.component.ts
  apiEvent(event) {
    return this.bindApi(event);
  }
  /* eslint-disable */
  bindApi(event) {
    switch (event.type) {
      case API.rowContextMenuClicked:
        this.rowContextMenuPosition = {
          top: null,
          left: null,
          value: null
        };
        break;
      case API.toggleRowIndex:
        this.collapseRow(event.value);
        break;
      case API.toggleCheckbox:
        this.toggleCheckbox(event.value);
        break;
      case API.setInputValue:
        if (this.config.searchEnabled) {
          event.value.forEach((input) => {
            const element = document.getElementById(`search_${input.key}`);
            if (!element) {
              console.error(`Column '${input.key}' not available in the DOM. Have you misspelled a name?`);
            } else {
              element.value = input.value;
            }
          });
        }
        this.onSearch(event.value);
        this.cdr.markForCheck();
        break;
      case API.onGlobalSearch:
        this.onGlobalSearch(event.value);
        this.cdr.markForCheck();
        break;
      case API.setRowClass:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setRowClass(val));
          break;
        }
        this.styleService.setRowClass(event.value);
        this.cdr.markForCheck();
        break;
      case API.setCellClass:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setCellClass(val));
          break;
        }
        this.styleService.setCellClass(event.value);
        break;
      case API.setRowStyle:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setRowStyle(val));
          break;
        }
        this.styleService.setRowStyle(event.value);
        break;
      case API.setCellStyle:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setCellStyle(val));
          break;
        }
        this.styleService.setCellStyle(event.value);
        break;
      case API.setTableClass:
        this.tableClass = event.value;
        this.cdr.markForCheck();
        break;
      case API.getPaginationTotalItems:
        return this.paginationComponent.paginationDirective.getTotalItems();
      case API.getPaginationCurrentPage:
        return this.paginationComponent.paginationDirective.getCurrent();
      case API.getPaginationLastPage:
        return this.paginationComponent.paginationDirective.getLastPage();
      case API.getNumberOfRowsPerPage:
        return this.paginationComponent.paginationDirective.isLastPage() ? this.paginationComponent.paginationDirective.getTotalItems() % this.limit : this.limit;
      case API.setPaginationCurrentPage:
        this.paginationComponent.paginationDirective.setCurrent(event.value);
        break;
      case API.setPaginationRange:
        this.paginationComponent.ranges = event.value;
        break;
      case API.setPaginationPreviousLabel:
        this.paginationComponent.previousLabel = event.value;
        break;
      case API.setPaginationNextLabel:
        this.paginationComponent.nextLabel = event.value;
        break;
      case API.setPaginationDisplayLimit:
        this.paginationComponent.changeLimit(event.value, true);
        break;
      case API.sortBy:
        const column = {
          title: "",
          key: event.value.column,
          orderBy: event.value.order
        };
        this.orderBy(column);
        this.cdr.detectChanges();
        break;
      default:
        break;
    }
  }
  setColumnOrder(column) {
    const key = column.key;
    switch (this.sortState.get(key)) {
      case "":
      case void 0:
        this.sortState.set(key, column.orderBy || "desc");
        break;
      case "asc":
        this.config.threeWaySort ? this.sortState.set(key, "") : this.sortState.set(key, "desc");
        break;
      case "desc":
        this.sortState.set(key, "asc");
        break;
    }
    if (this.sortState.size > 1) {
      const temp = this.sortState.get(key);
      this.sortState.clear();
      this.sortState.set(key, temp);
    }
  }
  emitEvent(event, value) {
    this.event.emit({
      event,
      value
    });
    if (this.config.persistState) {
      localStorage.setItem(event, JSON.stringify(value));
    }
    if (this.config.logger) {
      console.log({
        event,
        value
      });
    }
  }
  dragEnter($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  dragOver($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  dragLeave($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  drop($event) {
    $event.preventDefault();
    $event.stopPropagation();
    const file = $event.dataTransfer?.files?.[0];
    if (file?.type !== "application/json") {
      console.log("File not allowed");
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      this.data = JSON.parse(event?.target?.result);
      this.cdr.markForCheck();
    };
    fileReader.readAsText(file);
  }
  static {
    this.\u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(StyleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BaseComponent,
      selectors: [["ngx-table"]],
      contentQueries: function BaseComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rowTemplate = _t.first);
        }
      },
      viewQuery: function BaseComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c7, 5);
          \u0275\u0275viewQuery(_c8, 5);
          \u0275\u0275viewQuery(_c9, 5);
          \u0275\u0275viewQuery(CdkVirtualScrollViewport, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginationComponent = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextMenu = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewPort = _t.first);
        }
      },
      hostBindings: function BaseComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function BaseComponent_click_HostBindingHandler($event) {
            return ctx.onContextMenuClick($event.target);
          }, false, \u0275\u0275resolveDocument);
        }
      },
      inputs: {
        configuration: "configuration",
        data: "data",
        pagination: "pagination",
        groupRowsBy: "groupRowsBy",
        id: "id",
        toggleRowIndex: "toggleRowIndex",
        detailsTemplate: "detailsTemplate",
        summaryTemplate: "summaryTemplate",
        groupRowsHeaderTemplate: "groupRowsHeaderTemplate",
        filtersTemplate: "filtersTemplate",
        selectAllTemplate: "selectAllTemplate",
        noResultsTemplate: "noResultsTemplate",
        loadingTemplate: "loadingTemplate",
        additionalActionsTemplate: "additionalActionsTemplate",
        rowContextMenu: "rowContextMenu",
        columns: "columns"
      },
      outputs: {
        event: "event"
      },
      features: [\u0275\u0275ProvidersFeature([DefaultConfigService, GroupRowsService, StyleService]), \u0275\u0275NgOnChangesFeature],
      decls: 11,
      vars: 38,
      consts: [["table", ""], ["paginationComponent", ""], ["contextMenu", ""], [1, "ngx-container", 3, "dragenter", "dragover", "dragleave", "drop"], [3, "id", "ngClass"], ["table-thead", "", 3, "selectAll", "filter", "order", "event", "config", "sortKey", "sortState", "selectAllTemplate", "filtersTemplate", "additionalActionsTemplate", "columns"], [4, "ngIf"], ["class", "ngx-draggable-row-area", "cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], [3, "updateRange", "id", "config", "pagination"], ["class", "ngx-table__table-row-context-menu", 3, "ngStyle", 4, "ngIf"], ["itemSize", "50", "class", "ngx-infinite-scroll-viewport", 4, "ngIf"], [1, "ngx-table__table-row-context-menu", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [3, "click", "contextmenu", "dblclick"], ["class", "ngx-icon", 3, "ngClass", "click", 4, "ngIf"], [1, "ngx-icon", 3, "click", "ngClass"], ["itemSize", "50", 1, "ngx-infinite-scroll-viewport"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "ngx-form-checkbox"], ["type", "checkbox", 3, "change", "id", "checked"], [1, "ngx-form-icon"], ["type", "radio", "name", "radio", 3, "change", "id"], [3, "click", "contextmenu", "dblclick", "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["width", "3%", 4, "ngIf"], ["width", "3%"], ["cdkDropList", "", 1, "ngx-draggable-row-area", 3, "cdkDropListDropped"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "ngx-draggable-row", 3, "cdkDragStarted", "cdkDragStartDelay"], [3, "click", "dblclick"], [1, "ngx-table__body-empty"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ngx-table__table-no-results"], [1, "ngx-table__body-loading"], [1, "ngx-table__table-loader-wrapper"], [1, "ngx-table__table-loader"]],
      template: function BaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "div", 3);
          \u0275\u0275listener("dragenter", function BaseComponent_Template_div_dragenter_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.dragEnter($event));
          })("dragover", function BaseComponent_Template_div_dragover_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.dragOver($event));
          })("dragleave", function BaseComponent_Template_div_dragleave_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.dragLeave($event));
          })("drop", function BaseComponent_Template_div_drop_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.drop($event));
          });
          \u0275\u0275elementStart(1, "table", 4, 0)(3, "thead", 5);
          \u0275\u0275listener("selectAll", function BaseComponent_Template_thead_selectAll_3_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onSelectAll());
          })("filter", function BaseComponent_Template_thead_filter_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onSearch($event));
          })("order", function BaseComponent_Template_thead_order_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.orderBy($event));
          })("event", function BaseComponent_Template_thead_event_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.emitEvent($event.event, $event.value));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275template(4, BaseComponent_tbody_4_Template, 4, 3, "tbody", 6)(5, BaseComponent_tbody_5_Template, 2, 1, "tbody", 7)(6, BaseComponent_tbody_6_Template, 4, 2, "tbody", 6)(7, BaseComponent_tbody_7_Template, 4, 2, "tbody", 6)(8, BaseComponent_tfoot_8_Template, 3, 6, "tfoot", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "pagination", 8, 1);
          \u0275\u0275listener("updateRange", function BaseComponent_Template_pagination_updateRange_9_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onPagination($event));
          });
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275classProp("ngx-container--dark", ctx.config.tableLayout.theme === "dark");
          \u0275\u0275advance();
          \u0275\u0275classProp("ngx-table__table--tiny", ctx.config.tableLayout.style === "tiny")("ngx-table__table--normal", ctx.config.tableLayout.style === "normal")("ngx-table__table--big", ctx.config.tableLayout.style === "big")("ngx-table__table--borderless", ctx.config.tableLayout.borderless)("ngx-table__table--dark", ctx.config.tableLayout.theme === "dark")("ngx-table__table--hoverable", ctx.config.tableLayout.hover)("ngx-table__table--striped", ctx.config.tableLayout.striped)("ngx-table__horizontal-scroll", ctx.config.horizontalScroll && !ctx.config.isLoading);
          \u0275\u0275property("id", ctx.id)("ngClass", ctx.tableClass === null || ctx.tableClass === "" ? "ngx-table" : ctx.tableClass);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("ngx-infinite-scroll-viewport-thead", ctx.config.infiniteScroll);
          \u0275\u0275property("config", ctx.config)("sortKey", ctx.sortKey)("sortState", ctx.sortState)("selectAllTemplate", ctx.selectAllTemplate)("filtersTemplate", ctx.filtersTemplate)("additionalActionsTemplate", ctx.additionalActionsTemplate)("columns", ctx.columns);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.data && !ctx.config.isLoading && !ctx.config.rowReorder);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.data && !ctx.config.isLoading && ctx.config.rowReorder);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.filterCount === 0);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.config.isLoading);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.summaryTemplate);
          \u0275\u0275advance();
          \u0275\u0275property("id", ctx.id)("config", ctx.config)("pagination", ctx.pagination);
          \u0275\u0275attribute("id", "pagination" + ctx.id);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, CdkDropList, CdkDrag, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, PaginationComponent, TableTHeadComponent, PaginatePipe, SearchPipe, RenderPipe, GlobalSearchPipe, SortPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Component,
    args: [{
      selector: "ngx-table",
      providers: [DefaultConfigService, GroupRowsService, StyleService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="ngx-container"
  [class.ngx-container--dark]="config.tableLayout.theme === 'dark'"
  (dragenter)="dragEnter($event)"
  (dragover)="dragOver($event)"
  (dragleave)="dragLeave($event)"
  (drop)="drop($event)"
>
  <table
    [id]="id"
    #table
    [ngClass]="tableClass === null || tableClass === '' ? 'ngx-table' : tableClass"
    [class.ngx-table__table--tiny]="config.tableLayout.style === 'tiny'"
    [class.ngx-table__table--normal]="config.tableLayout.style === 'normal'"
    [class.ngx-table__table--big]="config.tableLayout.style === 'big'"
    [class.ngx-table__table--borderless]="config.tableLayout.borderless"
    [class.ngx-table__table--dark]="config.tableLayout.theme === 'dark'"
    [class.ngx-table__table--hoverable]="config.tableLayout.hover"
    [class.ngx-table__table--striped]="config.tableLayout.striped"
    [class.ngx-table__horizontal-scroll]="config.horizontalScroll && !config.isLoading"
  >
    <thead
      [class.ngx-infinite-scroll-viewport-thead]="config.infiniteScroll"
      table-thead
      [config]="config"
      [sortKey]="sortKey"
      [sortState]="sortState"
      [selectAllTemplate]="selectAllTemplate"
      [filtersTemplate]="filtersTemplate"
      [additionalActionsTemplate]="additionalActionsTemplate"
      [columns]="columns"
      (selectAll)="onSelectAll()"
      (filter)="onSearch($event)"
      (order)="orderBy($event)"
      (event)="emitEvent($event.event, $event.value)"
    ></thead>
    <tbody *ngIf="data && !config.isLoading && !config.rowReorder">
      <ng-container *ngIf="rowTemplate">
        <ul
          class="ngx-table__table-row-context-menu"
          [ngStyle]="{
            position: 'absolute',
            top: rowContextMenuPosition.top,
            left: rowContextMenuPosition.left
          }"
          *ngIf="rowContextMenuPosition.top"
        >
          <ng-container
            [ngTemplateOutlet]="rowContextMenu"
            [ngTemplateOutletContext]="{ $implicit: rowContextMenuPosition.value }"
          >
          </ng-container>
        </ul>
        <ng-container *ngIf="!config.infiniteScroll">
          <ng-container
            *ngFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject
                | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
            "
          >
            <tr
              (click)="onClick($event, row, '', null, data.indexOf(row))"
              #contextMenu
              (contextmenu)="onRowContextMenu($event, row, '', null, data.indexOf(row))"
              (dblclick)="onDoubleClick($event, row, '', null, data.indexOf(row))"
              [class.ngx-table__table-row--selected]="
                data.indexOf(row) === selectedRow && !config.selectCell
              "
            >
              <ng-container
                [ngTemplateOutlet]="rowTemplate"
                [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
              >
              </ng-container>
              <td *ngIf="config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(data.indexOf(row))
                      ? 'ngx-icon-arrow-down'
                      : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(data.indexOf(row))"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(data.indexOf(row))) ||
                config.collapseAllRows
              "
            >
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </ng-container>
        <cdk-virtual-scroll-viewport
          itemSize="50"
          *ngIf="config.infiniteScroll"
          class="ngx-infinite-scroll-viewport"
        >
          <ng-container
            *cdkVirtualFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject;
              let rowIndex = index
            "
          >
            <tr
              (click)="onClick($event, row, '', null, rowIndex)"
              #contextMenu
              (contextmenu)="onRowContextMenu($event, row, '', null, rowIndex)"
              (dblclick)="onDoubleClick($event, row, '', null, rowIndex)"
              [class.ngx-table__table-row--selected]="
                rowIndex === selectedRow && !config.selectCell
              "
            >
              <ng-container
                [ngTemplateOutlet]="rowTemplate"
                [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
              >
              </ng-container>
              <td *ngIf="config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(rowIndex)"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(rowIndex)) ||
                config.collapseAllRows
              "
            >
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </cdk-virtual-scroll-viewport>
      </ng-container>
      <ng-container *ngIf="!rowTemplate && !config.groupRows">
        <ul
          class="ngx-table__table-row-context-menu"
          [ngStyle]="{
            position: 'absolute',
            top: rowContextMenuPosition.top,
            left: rowContextMenuPosition.left
          }"
          *ngIf="rowContextMenuPosition.top"
        >
          <ng-container
            [ngTemplateOutlet]="rowContextMenu"
            [ngTemplateOutletContext]="{ $implicit: rowContextMenuPosition.value }"
          >
          </ng-container>
        </ul>
        <ng-container *ngIf="!config.infiniteScroll">
          <ng-container
            *ngFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject
                | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
            "
          >
            <tr
              [class.ngx-table__table-row--selected]="
                data.indexOf(row) === selectedRow && !config.selectCell
              "
            >
              <td *ngIf="config.checkboxes">
                <label class="ngx-form-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-{{ data.indexOf(row) }}"
                    [checked]="isSelected || selectedCheckboxes.has(data.indexOf(row))"
                    (change)="onCheckboxSelect($event, row, data.indexOf(row))"
                  />
                  <em class="ngx-form-icon"></em>
                </label>
              </td>
              <td *ngIf="config.radio">
                <label>
                  <input
                    type="radio"
                    id="radio-{{ data.indexOf(row) }}"
                    name="radio"
                    (change)="onRadioSelect($event, row, data.indexOf(row))"
                  />
                </label>
              </td>
              <ng-container *ngFor="let column of columns; let colIndex = index">
                <td
                  (click)="onClick($event, row, column.key, colIndex, data.indexOf(row))"
                  #contextMenu
                  (contextmenu)="
                    onRowContextMenu($event, row, column.key, colIndex, data.indexOf(row))
                  "
                  (dblclick)="onDoubleClick($event, row, column.key, colIndex, data.indexOf(row))"
                  [class.pinned-left]="column.pinned"
                  [ngClass]="column.cssClass ? column.cssClass.name : ''"
                  [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
                  [class.ngx-table__table-col--selected]="
                    colIndex === selectedCol && !config.selectCell
                  "
                  [class.ngx-table__table-cell--selected]="
                    colIndex === selectedCol &&
                    data.indexOf(row) === selectedRow &&
                    !config.selectCol &&
                    !config.selectRow
                  "
                >
                  <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                  <ng-container
                    *ngIf="column.cellTemplate"
                    [ngTemplateOutlet]="column.cellTemplate"
                    [ngTemplateOutletContext]="{
                      $implicit: row,
                      rowIndex: data.indexOf(row),
                      column: column
                    }"
                  >
                  </ng-container>
                </td>
              </ng-container>
              <td *ngIf="config.additionalActions || config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(data.indexOf(row))
                      ? 'ngx-icon-arrow-down'
                      : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(data.indexOf(row))"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(data.indexOf(row))) ||
                config.collapseAllRows
              "
            >
              <td *ngIf="config.checkboxes || config.radio"></td>
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </ng-container>
        <!-- infinite scroll -->
        <cdk-virtual-scroll-viewport
          itemSize="50"
          *ngIf="config.infiniteScroll"
          class="ngx-infinite-scroll-viewport"
        >
          <ng-container
            *cdkVirtualFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject;
              let rowIndex = index
            "
          >
            <tr
              [class.ngx-table__table-row--selected]="
                rowIndex === selectedRow && !config.selectCell
              "
            >
              <td *ngIf="config.checkboxes" width="3%">
                <label class="ngx-form-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-infinite-scroll-{{ rowIndex }}"
                    [checked]="isSelected || selectedCheckboxes.has(rowIndex)"
                    (change)="onCheckboxSelect($event, row, rowIndex)"
                  />
                  <em class="ngx-form-icon"></em>
                </label>
              </td>
              <td *ngIf="config.radio" width="3%">
                <label>
                  <input
                    type="radio"
                    id="radio-infinite-scroll-{{ rowIndex }}"
                    name="radio"
                    (change)="onRadioSelect($event, row, rowIndex)"
                  />
                </label>
              </td>
              <ng-container *ngFor="let column of columns; let colIndex = index">
                <td
                  (click)="onClick($event, row, column.key, colIndex, rowIndex)"
                  #contextMenu
                  (contextmenu)="onRowContextMenu($event, row, column.key, colIndex, rowIndex)"
                  (dblclick)="onDoubleClick($event, row, column.key, colIndex, rowIndex)"
                  [class.pinned-left]="column.pinned"
                  [ngClass]="column.cssClass ? column.cssClass.name : ''"
                  [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
                  [class.ngx-table__table-col--selected]="
                    colIndex === selectedCol && !config.selectCell
                  "
                  [class.ngx-table__table-cell--selected]="
                    colIndex === selectedCol &&
                    rowIndex === selectedRow &&
                    !config.selectCol &&
                    !config.selectRow
                  "
                >
                  <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                  <ng-container
                    *ngIf="column.cellTemplate"
                    [ngTemplateOutlet]="column.cellTemplate"
                    [ngTemplateOutletContext]="{
                      $implicit: row,
                      rowIndex: rowIndex,
                      column: column
                    }"
                  >
                  </ng-container>
                </td>
              </ng-container>
              <td *ngIf="config.additionalActions || config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(rowIndex)"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(rowIndex)) ||
                config.collapseAllRows
              "
            >
              <td *ngIf="config.checkboxes || config.radio"></td>
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </cdk-virtual-scroll-viewport>
      </ng-container>
      <ng-container *ngIf="!rowTemplate && config.groupRows">
        <ng-container
          *ngFor="
            let group of grouped
              | sort: sortBy:config
              | search: term:filteredCountSubject:config
              | global: globalSearchTerm:filteredCountSubject
              | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id };
            let rowIndex = index
          "
        >
          <tr>
            <ng-container *ngIf="!groupRowsHeaderTemplate">
              <td [attr.colspan]="columns.length">
                <div>{{ group[0][groupRowsBy] }} ({{ group.length }})</div>
              </td>
            </ng-container>
            <ng-container
              *ngIf="groupRowsHeaderTemplate"
              [ngTemplateOutlet]="groupRowsHeaderTemplate"
              [ngTemplateOutletContext]="{
                total: group.length,
                key: groupRowsBy,
                value: group[0] ? group[0][groupRowsBy] : '',
                group: group,
                index: rowIndex
              }"
            >
            </ng-container>
            <td>
              <span
                class="ngx-icon"
                *ngIf="arrowDefinition"
                [ngClass]="
                  isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                "
                (click)="collapseRow(rowIndex)"
              >
              </span>
            </td>
          </tr>
          <ng-container *ngIf="selectedDetailsTemplateRowId.has(rowIndex)">
            <tr *ngFor="let row of group">
              <td *ngFor="let column of columns">
                {{ row | render: column.key }}
                <!-- TODO allow users to add groupRowsTemplateRef -->
              </td>
              <td></td>
            </tr>
          </ng-container>
        </ng-container>
      </ng-container>
    </tbody>
    <tbody
      *ngIf="data && !config.isLoading && config.rowReorder"
      class="ngx-draggable-row-area"
      cdkDropList
      (cdkDropListDropped)="onDrop($event)"
    >
      <ng-container *ngIf="!rowTemplate && !config.groupRows">
        <ng-container
          *ngFor="
            let row of data
              | sort: sortBy
              | search: term:filteredCountSubject
              | global: globalSearchTerm:filteredCountSubject
              | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
          "
        >
          <tr
            class="ngx-draggable-row"
            cdkDrag
            (cdkDragStarted)="onDragStart($event)"
            [cdkDragStartDelay]="config.reorderDelay || 0"
            cdkDragLockAxis="y"
          >
            <td *ngIf="config.checkboxes">
              <label class="ngx-form-checkbox">
                <input
                  type="checkbox"
                  id="checkbox-draggable-{{ data.indexOf(row) }}"
                  [checked]="isSelected || selectedCheckboxes.has(data.indexOf(row))"
                  (change)="onCheckboxSelect($event, row, data.indexOf(row))"
                />
                <em class="ngx-form-icon"></em>
              </label>
            </td>
            <td *ngIf="config.radio">
              <label>
                <input
                  type="radio"
                  id="radio-draggable-{{ data.indexOf(row) }}"
                  name="radio"
                  (change)="onRadioSelect($event, row, data.indexOf(row))"
                />
              </label>
            </td>
            <ng-container *ngFor="let column of columns; let colIndex = index">
              <td
                (click)="onClick($event, row, column.key, colIndex, data.indexOf(row))"
                (dblclick)="onDoubleClick($event, row, column.key, colIndex, data.indexOf(row))"
                [class.ngx-table__table-col--selected]="
                  colIndex === selectedCol && !config.selectCell
                "
                [class.ngx-table__table-cell--selected]="
                  colIndex === selectedCol &&
                  data.indexOf(row) === selectedRow &&
                  !config.selectCol &&
                  !config.selectRow
                "
              >
                <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                <ng-container
                  *ngIf="column.cellTemplate"
                  [ngTemplateOutlet]="column.cellTemplate"
                  [ngTemplateOutletContext]="{
                    $implicit: row,
                    rowIndex: data.indexOf(row),
                    column: column
                  }"
                >
                </ng-container>
              </td>
            </ng-container>
          </tr>
        </ng-container>
      </ng-container>
    </tbody>
    <tbody *ngIf="filterCount === 0">
      <tr class="ngx-table__body-empty">
        <ng-container *ngIf="noResultsTemplate" [ngTemplateOutlet]="noResultsTemplate">
        </ng-container>
        <td [attr.colspan]="columns && columns.length + 1" *ngIf="!noResultsTemplate">
          <div class="ngx-table__table-no-results">No results</div>
        </td>
      </tr>
    </tbody>
    <tbody *ngIf="config.isLoading">
      <tr class="ngx-table__body-loading">
        <ng-container *ngIf="loadingTemplate" [ngTemplateOutlet]="loadingTemplate"> </ng-container>
        <td [attr.colspan]="columns && columns.length + 1" *ngIf="!loadingTemplate">
          <div [style.height.px]="loadingHeight" class="ngx-table__table-loader-wrapper">
            <div class="ngx-table__table-loader"></div>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot *ngIf="summaryTemplate">
      <tr>
        <ng-container
          [ngTemplateOutlet]="summaryTemplate"
          [ngTemplateOutletContext]="{ total: data.length, limit: limit, page: page }"
        >
        </ng-container>
      </tr>
    </tfoot>
  </table>
  <pagination
    [attr.id]="'pagination' + id"
    [id]="id"
    #paginationComponent
    [config]="config"
    [pagination]="pagination"
    (updateRange)="onPagination($event)"
  >
  </pagination>
</div>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ScrollDispatcher
  }, {
    type: StyleService
  }], {
    configuration: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    pagination: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    toggleRowIndex: [{
      type: Input
    }],
    detailsTemplate: [{
      type: Input
    }],
    summaryTemplate: [{
      type: Input
    }],
    groupRowsHeaderTemplate: [{
      type: Input
    }],
    filtersTemplate: [{
      type: Input
    }],
    selectAllTemplate: [{
      type: Input
    }],
    noResultsTemplate: [{
      type: Input
    }],
    loadingTemplate: [{
      type: Input
    }],
    additionalActionsTemplate: [{
      type: Input
    }],
    rowContextMenu: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    event: [{
      type: Output
    }],
    rowTemplate: [{
      type: ContentChild,
      args: [TemplateRef]
    }],
    paginationComponent: [{
      type: ViewChild,
      args: ["paginationComponent"]
    }],
    contextMenu: [{
      type: ViewChild,
      args: ["contextMenu"]
    }],
    table: [{
      type: ViewChild,
      args: ["table"]
    }],
    viewPort: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport]
    }],
    onContextMenuClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var BaseModule = class _BaseModule {
  static {
    this.\u0275fac = function BaseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BaseModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModule, [{
    type: NgModule,
    args: [{
      declarations: [
        BaseComponent,
        HeaderComponent,
        PaginationComponent,
        TableTHeadComponent,
        // Pipes
        SearchPipe,
        RenderPipe,
        GlobalSearchPipe,
        SortPipe
      ],
      imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule],
      exports: [BaseComponent]
    }]
  }], null, null);
})();
var TableModule = class _TableModule {
  static {
    this.\u0275fac = function TableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _TableModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, BaseModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, BaseModule],
      exports: [BaseComponent],
      providers: []
    }]
  }], null, null);
})();

// src/app/components/tables/ngx-easy-table/ngx-easy-table.component.ts
var _c02 = ["table"];
var NgxEasyTableComponent = class _NgxEasyTableComponent {
  // data: Company[] = [];
  // public configuration: Config;
  ngOnInit() {
    this.columns = [
      { key: "level", title: "Level" },
      { key: "age", title: "Age" },
      { key: "company", title: "Company" },
      { key: "name", title: "Name" },
      { key: "isActive", title: "STATUS" }
    ];
    this.data = data;
    this.configuration = __spreadValues({}, DefaultConfig);
    this.configuration.paginationEnabled = false;
    this.configuration1 = __spreadValues({}, DefaultConfig);
    this.configuration2 = __spreadValues({}, DefaultConfig);
    this.configuration2.rowReorder = true;
    this.configuration2.columnReorder = true;
    this.configuration2.fixedColumnWidth = false;
  }
  onChange(event) {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: event.target.value
    });
  }
  sortByLastName(asc) {
  }
  sortByLevel(asc) {
  }
  eventEmitted($event) {
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.isCollapsed = false;
    this.data = [];
    this.paginationEnabled = true;
  }
  ngOnInit2() {
    this.columns = [
      { key: "level", title: "Level" },
      { key: "age", title: "Age" },
      { key: "company", title: "Company" },
      { key: "name", title: "Name" },
      { key: "isActive", title: "STATUS" }
    ];
    this.data = data;
    this.configuration = __spreadValues({}, DefaultConfig);
    this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    this.configuration.infiniteScrollThrottleTime = 5;
    this.configuration.rows = 5;
  }
  onEvent($event) {
    if ($event.event === "onInfiniteScrollEnd") {
      this.data = [...this.data, ...this.data];
      this.cdr.detectChanges();
    }
  }
  static {
    this.\u0275fac = function NgxEasyTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxEasyTableComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxEasyTableComponent, selectors: [["app-ngx-easy-table"]], viewQuery: function NgxEasyTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 12, consts: [["table", ""], ["hassub", "", "sub", "Home", "title1", "Tables", "title", "Easy Tables", "activeTitle", "Easy Tables"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table-responsive", "overflow-auto"], ["id", "datatable-basic", 1, "table", "table-bordered", "text-nowrap", "w-100", 3, "configuration", "data", "columns"], [1, "overflow-x-auto"], ["id", "responsiveDataTable", 1, "ngx-tables", "table", "table-bordered", "text-nowrap", "w-100", 3, "configuration", "data", "columns"], ["type", "text", "id", "globalSearch", "placeholder", "Search", 1, "form-input", 3, "input"], ["id", "grid-search", 1, "overflow-auto"], ["id", "responsivemodal-DataTable", 1, "table", "table-bordered", "text-nowrap", "w-100", 3, "configuration", "data", "columns"], ["id", "file-export", 1, "table", "table-bordered", "text-nowrap", "w-100", 3, "data", "configuration", "columns"]], template: function NgxEasyTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
        \u0275\u0275text(6, " Basic Datatable ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
        \u0275\u0275element(9, "ngx-table", 9);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(10, "div", 2)(11, "div", 3)(12, "div", 4)(13, "div", 5)(14, "div", 6);
        \u0275\u0275text(15, " Table with Pagination ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7)(17, "div", 10);
        \u0275\u0275element(18, "ngx-table", 11);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "div", 2)(20, "div", 3)(21, "div", 4)(22, "div", 5)(23, "div", 6);
        \u0275\u0275text(24, " Table With Search ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "input", 12);
        \u0275\u0275listener("input", function NgxEasyTableComponent_Template_input_input_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 13);
        \u0275\u0275element(28, "ngx-table", 14, 0);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "div", 5)(34, "div", 6);
        \u0275\u0275text(35, "Dragable Row and Columns");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 7)(37, "div", 8);
        \u0275\u0275element(38, "ngx-table", 15);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("configuration", ctx.configuration)("data", ctx.data)("columns", ctx.columns);
        \u0275\u0275advance(9);
        \u0275\u0275property("configuration", ctx.configuration1)("data", ctx.data)("columns", ctx.columns);
        \u0275\u0275advance(10);
        \u0275\u0275property("configuration", ctx.configuration)("data", ctx.data)("columns", ctx.columns);
        \u0275\u0275advance(10);
        \u0275\u0275property("data", ctx.data)("configuration", ctx.configuration2)("columns", ctx.columns);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, TableModule, BaseComponent, NgbCollapseModule], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxEasyTableComponent, { className: "NgxEasyTableComponent", filePath: "src\\app\\components\\tables\\ngx-easy-table\\ngx-easy-table.component.ts", lineNumber: 22 });
})();
export {
  NgxEasyTableComponent
};
//# sourceMappingURL=ngx-easy-table.component-6C7EWPJB.js.map
