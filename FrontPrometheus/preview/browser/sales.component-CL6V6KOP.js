import {
  LeafletDirective,
  LeafletModule,
  require_leaflet_src
} from "./chunk-KGDAYGJC.js";
import {
  EarningRevenueData,
  ExpensesChartData,
  TotalRevenueChartData,
  UniqueVisitorsChartData
} from "./chunk-CXIYJZQQ.js";
import {
  NgxEchartsModule
} from "./chunk-CCUPFDJS.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-CJCV5ZLP.js";
import {
  DashboardHeaderComponent,
  OverlayScrollbarsComponent,
  OverlayscrollbarsModule,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownModule,
  NgbDropdownToggle
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
import {
  RouterModule
} from "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/components/dashboards/sales/sales.component.ts
var import_leaflet = __toESM(require_leaflet_src());
function SalesComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275listener("leafletMapReady", function SalesComponent_Conditional_62_Template_div_leafletMapReady_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMapReady($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("leafletOptions", ctx_r1.options)("leafletCenter", ctx_r1.center);
  }
}
var SalesComponent = class _SalesComponent {
  constructor() {
    this.ApexData1 = TotalRevenueChartData;
    this.ApexData2 = UniqueVisitorsChartData;
    this.ApexData3 = ExpensesChartData;
    this.chartOptions4 = EarningRevenueData;
    this.center = (0, import_leaflet.latLng)([46.879966, -121.726909]);
    this.options = {
      layers: [
        (0, import_leaflet.tileLayer)("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution: "Open Street Map"
        })
      ],
      zoom: 5,
      center: (0, import_leaflet.latLng)(this.center)
    };
  }
  generateData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      series.push([x, y, z]);
      baseval += 864e5;
      i++;
    }
    return series;
  }
  get width() {
    return window.innerWidth;
  }
  onMapReady(map) {
    setTimeout(() => map.invalidateSize(), 1);
  }
  static {
    this.\u0275fac = function SalesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesComponent, selectors: [["app-sales"]], hostBindings: function SalesComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function SalesComponent_resize_HostBindingHandler() {
          return ctx.onMapReady();
        });
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 731, vars: 30, consts: [["title", "Sales Dashboard"], [1, "row"], [1, "col-xl-9", "col-md-12", "col-lg-12"], [1, "col-xl-4", "col-lg-4", "col-md-12"], [1, "card"], [1, "card-body"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "card-custom-icon", "text-success"], ["opacity", ".0", "d", "M3.31,11 L5.51,19.01 L18.5,19 L20.7,11 L3.31,11 Z M12,17 C10.9,17 10,16.1 10,15 C10,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z"], ["d", "M22,9 L17.21,9 L12.83,2.44 C12.64,2.16 12.32,2.02 12,2.02 C11.68,2.02 11.36,2.16 11.17,2.45 L6.79,9 L2,9 C1.45,9 1,9.45 1,10 C1,10.09 1.01,10.18 1.04,10.27 L3.58,19.54 C3.81,20.38 4.58,21 5.5,21 L18.5,21 C19.42,21 20.19,20.38 20.43,19.54 L22.97,10.27 L23,10 C23,9.45 22.55,9 22,9 Z M12,4.8 L14.8,9 L9.2,9 L12,4.8 Z M18.5,19 L5.51,19.01 L3.31,11 L20.7,11 L18.5,19 Z M12,13 C10.9,13 10,13.9 10,15 C10,16.1 10.9,17 12,17 C13.1,17 14,16.1 14,15 C14,13.9 13.1,13 12,13 Z"], [1, "mb-1"], [1, "mb-1", "fw-semibold"], [1, "mb-1", "text-muted"], [1, "text-danger"], [1, "fa", "fa-caret-down", "me-1"], [1, "progress", "progress-sm", "mt-3", "bg-success-transparent"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-success", 2, "width", "78%"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "card-custom-icon", "text-secondary"], ["opacity", ".0", "d", "M12.07,6.01 C8.2,6.01 5.07,9.14 5.07,13.01 C5.07,16.88 8.2,20.01 12.07,20.01 C15.94,20.01 19.07,16.88 19.07,13.01 C19.07,9.14 15.94,6.01 12.07,6.01 Z M13.07,14.01 L11.07,14.01 L11.07,8.01 L13.07,8.01 L13.07,14.01 Z"], ["d", "M9.07,1.01 L15.07,1.01 L15.07,3.01 L9.07,3.01 L9.07,1.01 Z M11.07,8.01 L13.07,8.01 L13.07,14.01 L11.07,14.01 L11.07,8.01 Z M19.1,7.39 L20.52,5.97 C20.09,5.46 19.62,4.98 19.11,4.56 L17.69,5.98 C16.14,4.74 14.19,4 12.07,4 C7.1,4 3.07,8.03 3.07,13 C3.07,17.97 7.09,22 12.07,22 C17.05,22 21.07,17.97 21.07,13 C21.07,10.89 20.33,8.93 19.1,7.39 Z M12.07,20.01 C8.2,20.01 5.07,16.88 5.07,13.01 C5.07,9.14 8.2,6.01 12.07,6.01 C15.94,6.01 19.07,9.14 19.07,13.01 C19.07,16.88 15.94,20.01 12.07,20.01 Z"], [1, "text-success"], [1, "fa", "fa-caret-up", "me-1"], [1, "progress", "progress-sm", "mt-3", "bg-secondary-transparent"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-secondary", 2, "width", "58%"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "card-custom-icon", "text-primary"], ["d", "M17.65,6.35 C16.2,4.9 14.21,4 12,4 C7.58,4 4.01,7.58 4.01,12 C4.01,16.42 7.58,20 12,20 C15.73,20 18.84,17.45 19.73,14 L17.65,14 C16.83,16.33 14.61,18 12,18 C8.69,18 6,15.31 6,12 C6,8.69 8.69,6 12,6 C13.66,6 15.14,6.69 16.22,7.78 L13,11 L20,11 L20,4 L17.65,6.35 Z"], [1, "progress", "progress-sm", "mt-3", "bg-primary-transparent"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "58%"], [1, "col-xl-12", "col-md-12", "col-lg-12"], [1, "card", "overflow-hidden"], [1, "row", "g-0"], [1, "col-xl-8", "col-md-12", "col-lg-7", "pb-4"], [1, "card-header", "border-bottom-0"], [1, "card-title"], ["id", "vmap", 1, "vmap-width"], ["id", "vmap", "leaflet", "", 1, "vmap-width", 2, "height", "320px", 3, "leafletOptions", "leafletCenter"], [1, "col-xl-4", "col-md-12", "col-lg-5", "country-profit"], ["id", "countryscroll", 1, "countryscroll"], [1, "table", "countrytable"], [1, "w-1", "text-center"], ["alt", "img-flag", "src", "./assets/images/flags/us_flag.jpg", 1, ""], [1, "text-end"], [1, "fw-bold"], ["alt", "img-flag", "src", "./assets/images/flags/china_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/germany_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/russia_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/india_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/argentina_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/mexico_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/canada_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/french_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/italy_flag.jpg", 1, ""], ["alt", "img-flag", "src", "./assets/images/flags/singapore_flag.jpg", 1, ""], [1, "col-xl-3", "col-md-12", "col-lg-6"], [1, "d-block", "mt-4", "card-header", "text-center", "border-bottom-0"], [1, "text-center"], [1, "card-body", "pt-0"], [1, "row", "text-center"], [1, "col-md-12"], ["src", "./assets/images/photos/18.png", "alt", "img", 1, "sales-img", "w-100"], [1, "mb-0", "mt-3", "fs-30", "counter", "fw-bold"], [1, "text-muted"], [1, "text-green", "me-1"], [1, "fe", "fe-arrow-up", "ms-1"], [1, "mt-4", "mb-2", "text-muted", "fs-18"], [1, "mt-1", "text-muted"], [1, "col-xl-12", "col-lg-6"], [1, "col-xl-4", "col-md-12", "col-lg-12"], [1, "col"], [1, "mb-0", "fw-bold"], [1, "col", "col-auto"], ["id", "spark1"], [3, "chart", "stroke", "fill", "series", "yaxis", "colors"], ["id", "spark2"], ["id", "spark3"], [1, "col-xxl-4", "col-xl-5", "col-lg-12"], [1, "card-header"], [1, "card-body", "p-0"], ["id", "products-scrollbar", 1, "products-scrollbar"], [1, "d-flex", "mb-4", "px-4", "pt-4"], ["href", "javascript:void(0);", 1, "me-4"], ["src", "./assets/images/orders/1.jpg", "alt", "media1", 1, ""], [1, "mt-3"], [1, "d-flex", "mb-4", "px-4"], ["src", "./assets/images/orders/2.jpg", "alt", "media1", 1, ""], ["src", "./assets/images/orders/3.jpg", "alt", "media1", 1, ""], ["src", "./assets/images/orders/4.jpg", "alt", "media1", 1, ""], ["src", "./assets/images/orders/5.jpg", "alt", "media1", 1, ""], [1, "d-flex", "mb-4", "px-4", "pb-4"], [1, "col-xxl-8", "col-xl-7", "col-lg-12"], [1, "card", "card-block"], [1, "card-header", "d-sm-flex", "d-block"], [1, "ms-auto", "mt-4", "mt-sm-0"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "me-1", "btn-outline-light"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "me-1", "btn-primary"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-outline-light"], ["ngbDropdown", "", 1, "btn-group", "ms-3", "mb-0"], ["ngbDropdownToggle", "", "aria-label", "anchor", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "option-dots", "no-caret"], [1, "fa", "fa-ellipsis-v"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "p-0"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "fa", "fa-download", "me-2"], [1, "fa", "fa-cog", "me-2"], [1, "chart-container"], ["id", "leads", 1, "chart-dropshadow-primary", 3, "series", "chart", "xaxis", "colors", "fill", "stroke", "tooltip", "legend", "dataLabels", "grid", "yaxis"], [1, "col-xxl-8", "col-xl-8", "col-lg-12"], [1, "card-options"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-divider"], ["id", "transactions-scroll", 1, "transactions-scroll"], [1, "table-responsive"], [1, "table", "transaction-table", "mb-0", "text-nowrap"], [1, ""], ["scope", "col", 1, "w-200", "d-block"], ["scope", "col", 1, ""], ["src", "./assets/images/orders/6.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], [1, "badge", "bg-primary", "rounded-pill"], ["src", "./assets/images/orders/7.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], [1, "badge", "bg-warning", "rounded-pill"], ["src", "./assets/images/orders/8.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/orders/9.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], [1, "badge", "bg-danger", "rounded-pill"], ["src", "./assets/images/orders/10.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/orders/11.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/orders/12.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/orders/13.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/orders/5.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], [1, "col-xxl-4", "col-xl-4", "col-lg-12"], ["id", "customers-scroll", 1, "customers-scroll"], [1, "table", "transaction-table", "mb-0"], [1, "d-flex"], ["src", "./assets/images/faces/1.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], [1, "mt-2"], ["src", "./assets/images/faces/4.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/faces/5.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/faces/2.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/faces/10.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], ["src", "./assets/images/faces/12.jpg", "alt", "media1", 1, "avatar", "avatar-lg", "me-3"], [1, "col-xl-12", "col-lg-12", "col-md-12"], ["ngbDropdown", "", 1, "btn-group", "mb-0"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-light", "dropdown-toggle"], [1, "fe", "fe-plus"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "dropdown-item"], [1, "fa", "fa-plus", "me-2"], [1, "fa", "fa-eye", "me-2"], [1, "fa", "fa-edit", "me-2"], [1, "seller-table-sort"], [1, "mb-3", "d-flex", "gap-2", "align-items-center"], ["placeholder", "10", "data-trigger", "", 1, ""], ["value", "Choice 1"], ["value", "Choice 2"], ["value", "Choice 3"], ["id", "SellersTable", 1, "table", "table-striped", "table-bordered", "text-nowrap", "w-100"], ["scope", "col", 1, "border-bottom-0"], [1, "fa", "fa-caret-up", "text-danger", "me-1"], [1, "fa", "fa-caret-down", "text-success", "me-1"], ["id", "grid-container"], ["id", "vmap", "leaflet", "", 1, "vmap-width", 2, "height", "320px", 3, "leafletMapReady", "leafletOptions", "leafletCenter"]], template: function SalesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-dashboard-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 6);
        \u0275\u0275element(8, "path", 7)(9, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "p", 9);
        \u0275\u0275text(11, "All Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h3", 10);
        \u0275\u0275text(13, "3257");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 11)(15, "span", 12);
        \u0275\u0275element(16, "i", 13);
        \u0275\u0275text(17, " 43.2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 14);
        \u0275\u0275element(20, "div", 15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 3)(22, "div", 4)(23, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 16);
        \u0275\u0275element(25, "path", 17)(26, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(27, "p", 9);
        \u0275\u0275text(28, "Pending Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h3", 10);
        \u0275\u0275text(30, "1658");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 11)(32, "span", 19);
        \u0275\u0275element(33, "i", 20);
        \u0275\u0275text(34, " 19.8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 21);
        \u0275\u0275element(37, "div", 22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 3)(39, "div", 4)(40, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 23);
        \u0275\u0275element(42, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "p", 9);
        \u0275\u0275text(44, "Refund Request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h3", 10);
        \u0275\u0275text(46, "168");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 11)(48, "span", 19);
        \u0275\u0275element(49, "i", 20);
        \u0275\u0275text(50, " 0.8%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " than last month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 25);
        \u0275\u0275element(53, "div", 26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "div", 27)(55, "div", 28)(56, "div", 29)(57, "div", 30)(58, "div", 31)(59, "h4", 32);
        \u0275\u0275text(60, "Country Base Profit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 33);
        \u0275\u0275template(62, SalesComponent_Conditional_62_Template, 1, 2, "div", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 35)(64, "overlay-scrollbars", 36)(65, "table", 37)(66, "tbody")(67, "tr")(68, "td", 38);
        \u0275\u0275element(69, "img", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "td");
        \u0275\u0275text(71, "USA ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "td", 40)(73, "span", 41);
        \u0275\u0275text(74, "$519.75");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "tr")(76, "td", 38);
        \u0275\u0275element(77, "img", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "td");
        \u0275\u0275text(79, "China ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "td", 40)(81, "span", 41);
        \u0275\u0275text(82, "$248.07");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "tr")(84, "td", 38);
        \u0275\u0275element(85, "img", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "td");
        \u0275\u0275text(87, "Germany ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "td", 40)(89, "span", 41);
        \u0275\u0275text(90, "$190.57");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "tr")(92, "td", 38);
        \u0275\u0275element(93, "img", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "td");
        \u0275\u0275text(95, "Russia ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "td", 40)(97, "span", 41);
        \u0275\u0275text(98, "$173.25");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(99, "tr")(100, "td", 38);
        \u0275\u0275element(101, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "td");
        \u0275\u0275text(103, "India ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "td", 40)(105, "span", 41);
        \u0275\u0275text(106, "$63.00");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "tr")(108, "td", 38);
        \u0275\u0275element(109, "img", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "td");
        \u0275\u0275text(111, "Argentina");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "td", 40)(113, "span", 41);
        \u0275\u0275text(114, "$13.00");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(115, "tr")(116, "td", 38);
        \u0275\u0275element(117, "img", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "td");
        \u0275\u0275text(119, "Mexico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "td", 40)(121, "span", 41);
        \u0275\u0275text(122, "$43.19");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(123, "tr")(124, "td", 38);
        \u0275\u0275element(125, "img", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "td");
        \u0275\u0275text(127, "Canada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "td", 40)(129, "span", 41);
        \u0275\u0275text(130, "$56.19");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(131, "tr")(132, "td", 38);
        \u0275\u0275element(133, "img", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "td");
        \u0275\u0275text(135, "French");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "td", 40)(137, "span", 41);
        \u0275\u0275text(138, "$49.00");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "tr")(140, "td", 38);
        \u0275\u0275element(141, "img", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "td");
        \u0275\u0275text(143, "Italy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "td", 40)(145, "span", 41);
        \u0275\u0275text(146, "$519.75");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "tr")(148, "td", 38);
        \u0275\u0275element(149, "img", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "td");
        \u0275\u0275text(151, "Singapore");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "td", 40)(153, "span", 41);
        \u0275\u0275text(154, "$248.07");
        \u0275\u0275elementEnd()()()()()()()()()()()();
        \u0275\u0275elementStart(155, "div", 52)(156, "div", 4)(157, "div", 53)(158, "h3", 54);
        \u0275\u0275text(159, "Congratulations ");
        \u0275\u0275elementStart(160, "b");
        \u0275\u0275text(161, "John!");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(162, "div", 55)(163, "div", 56)(164, "div", 57);
        \u0275\u0275element(165, "img", 58);
        \u0275\u0275elementStart(166, "h3", 59);
        \u0275\u0275text(167, "$1000k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "span", 60)(169, "span", 61);
        \u0275\u0275element(170, "i", 62);
        \u0275\u0275text(171, "0.82%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(172, " since last year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "p", 63);
        \u0275\u0275text(174, "You have done 99.9% target sales reached today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "small", 64);
        \u0275\u0275text(176, "Today 20 minutes ago");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(177, "div", 65)(178, "div", 1)(179, "div", 66)(180, "div", 4)(181, "div", 5)(182, "div", 1)(183, "div", 67)(184, "p", 9);
        \u0275\u0275text(185, "Today Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "h2", 68);
        \u0275\u0275text(187, "$897k");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "div", 69)(189, "div", 70);
        \u0275\u0275element(190, "apx-chart", 71);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(191, "div", 66)(192, "div", 4)(193, "div", 5)(194, "div", 1)(195, "div", 67)(196, "p", 9);
        \u0275\u0275text(197, "Unique Visitors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "h2", 68);
        \u0275\u0275text(199, "5,896");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(200, "div", 69)(201, "div", 72);
        \u0275\u0275element(202, "apx-chart", 71);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(203, "div", 66)(204, "div", 4)(205, "div", 5)(206, "div", 1)(207, "div", 67)(208, "p", 9);
        \u0275\u0275text(209, "Expenses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "h2", 68);
        \u0275\u0275text(211, "$1,678");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(212, "div", 69)(213, "div", 73);
        \u0275\u0275element(214, "apx-chart", 71);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(215, "div", 1)(216, "div", 74)(217, "div", 28)(218, "div", 75)(219, "h3", 32);
        \u0275\u0275text(220, "Top Products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(221, "div", 76)(222, "overlay-scrollbars", 77)(223, "div", 78)(224, "a", 79);
        \u0275\u0275element(225, "img", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "div", 81)(227, "h5", 10);
        \u0275\u0275text(228, "Latest Books");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "small", 60);
        \u0275\u0275text(230, "2,30,400 times");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(231, "div", 82)(232, "a", 79);
        \u0275\u0275element(233, "img", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "div", 81)(235, "h5", 10);
        \u0275\u0275text(236, "New Branded Shoes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "small", 60);
        \u0275\u0275text(238, "3,45,675 times");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(239, "div", 82)(240, "a", 79);
        \u0275\u0275element(241, "img", 84);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "div", 81)(243, "h5", 10);
        \u0275\u0275text(244, "Beauty Makeup kit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(245, "small", 60);
        \u0275\u0275text(246, "5,23,324 times");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(247, "div", 82)(248, "a", 79);
        \u0275\u0275element(249, "img", 85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "div", 81)(251, "h5", 10);
        \u0275\u0275text(252, "Headset");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "small", 60);
        \u0275\u0275text(254, "1,42,400 times");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(255, "div", 82)(256, "a", 79);
        \u0275\u0275element(257, "img", 86);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "div", 81)(259, "h5", 10);
        \u0275\u0275text(260, "New Modal Shoes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "small", 60);
        \u0275\u0275text(262, "3,30,400 times");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(263, "div", 82)(264, "a", 79);
        \u0275\u0275element(265, "img", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "div", 81)(267, "h5", 10);
        \u0275\u0275text(268, "Latest Books");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "small", 60);
        \u0275\u0275text(270, "2,30,400 times");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(271, "div", 87)(272, "a", 79);
        \u0275\u0275element(273, "img", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(274, "div", 81)(275, "h5", 10);
        \u0275\u0275text(276, "New Branded Shoes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "small", 60);
        \u0275\u0275text(278, "3,45,675 times");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(279, "div", 88)(280, "div", 89)(281, "div", 90)(282, "h3", 32);
        \u0275\u0275text(283, "Earning Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(284, "div", 91)(285, "a", 92);
        \u0275\u0275text(286, "Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(287, "a", 93);
        \u0275\u0275text(288, "Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(289, "a", 94);
        \u0275\u0275text(290, "Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "div", 95)(292, "a", 96);
        \u0275\u0275element(293, "i", 97);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "div", 98)(295, "a", 99);
        \u0275\u0275element(296, "i", 100);
        \u0275\u0275text(297, " Download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "a", 99);
        \u0275\u0275element(299, "i", 101);
        \u0275\u0275text(300, " Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(301, "div", 5)(302, "div", 102);
        \u0275\u0275element(303, "apx-chart", 103);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(304, "div", 1)(305, "div", 104)(306, "div", 28)(307, "div", 75)(308, "h3", 32);
        \u0275\u0275text(309, "New Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(310, "div", 105)(311, "div", 95)(312, "a", 96);
        \u0275\u0275element(313, "i", 97);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "div", 106)(315, "a", 99);
        \u0275\u0275text(316, "Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(317, "a", 99);
        \u0275\u0275text(318, "Last Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(319, "a", 99);
        \u0275\u0275text(320, "Last Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "a", 99);
        \u0275\u0275text(322, "Last Year");
        \u0275\u0275elementEnd();
        \u0275\u0275element(323, "div", 107);
        \u0275\u0275elementStart(324, "a", 99);
        \u0275\u0275element(325, "i", 101);
        \u0275\u0275text(326, " Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(327, "div", 76)(328, "overlay-scrollbars", 108)(329, "div", 109)(330, "table", 110)(331, "thead")(332, "tr", 111)(333, "th", 112);
        \u0275\u0275text(334, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "th", 113);
        \u0275\u0275text(336, "Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(337, "th", 113);
        \u0275\u0275text(338, "Date & Time ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(339, "th", 113);
        \u0275\u0275text(340, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(341, "th", 113);
        \u0275\u0275text(342, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(343, "tbody")(344, "tr")(345, "td", 41);
        \u0275\u0275element(346, "img", 114);
        \u0275\u0275text(347, " New Book");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(348, "td");
        \u0275\u0275text(349, "#12323423");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(350, "td");
        \u0275\u0275text(351, "11th July, 10am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(352, "td", 41);
        \u0275\u0275text(353, "$13,206");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(354, "td")(355, "span", 115);
        \u0275\u0275text(356, "Completed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(357, "tr")(358, "td", 41);
        \u0275\u0275element(359, "img", 116);
        \u0275\u0275text(360, " New Bowl");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(361, "td");
        \u0275\u0275text(362, "#26762768");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(363, "td");
        \u0275\u0275text(364, "13th July, 12am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(365, "td", 41);
        \u0275\u0275text(366, "$20,250");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(367, "td")(368, "span", 117);
        \u0275\u0275text(369, "Pending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(370, "tr")(371, "td", 41);
        \u0275\u0275element(372, "img", 118);
        \u0275\u0275text(373, " Modal Car");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(374, "td");
        \u0275\u0275text(375, "#76273277");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(376, "td");
        \u0275\u0275text(377, "17th July, 09am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(378, "td", 41);
        \u0275\u0275text(379, "$12,226");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(380, "td")(381, "span", 115);
        \u0275\u0275text(382, "Completed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(383, "tr")(384, "td", 41);
        \u0275\u0275element(385, "img", 119);
        \u0275\u0275text(386, " Headset");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(387, "td");
        \u0275\u0275text(388, "#67237267");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(389, "td");
        \u0275\u0275text(390, "10th Aug, 11am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(391, "td", 41);
        \u0275\u0275text(392, "$18,200");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(393, "td")(394, "span", 120);
        \u0275\u0275text(395, "Declined");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(396, "tr")(397, "td", 41);
        \u0275\u0275element(398, "img", 121);
        \u0275\u0275text(399, " Earbuds");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(400, "td");
        \u0275\u0275text(401, "#561527167");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(402, "td");
        \u0275\u0275text(403, "15th Aug, 11am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(404, "td", 41);
        \u0275\u0275text(405, "$11,206");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(406, "td")(407, "span", 120);
        \u0275\u0275text(408, "Declined");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(409, "tr")(410, "td", 41);
        \u0275\u0275element(411, "img", 122);
        \u0275\u0275text(412, " Watch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(413, "td");
        \u0275\u0275text(414, "#12323423");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(415, "td");
        \u0275\u0275text(416, "17th Aug, 11am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(417, "td", 41);
        \u0275\u0275text(418, "$10,236");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(419, "td")(420, "span", 115);
        \u0275\u0275text(421, "Completed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(422, "tr")(423, "td", 41);
        \u0275\u0275element(424, "img", 123);
        \u0275\u0275text(425, " Branded Shoes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(426, "td");
        \u0275\u0275text(427, "18th Aug, 11am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(428, "td");
        \u0275\u0275text(429, "11th July, 10am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(430, "td", 41);
        \u0275\u0275text(431, "$13,285");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(432, "td")(433, "span", 117);
        \u0275\u0275text(434, "Pending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(435, "tr")(436, "td", 41);
        \u0275\u0275element(437, "img", 124);
        \u0275\u0275text(438, " New Modal shoe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(439, "td");
        \u0275\u0275text(440, "20th Aug, 11am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(441, "td");
        \u0275\u0275text(442, "11th July, 10am");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(443, "td", 41);
        \u0275\u0275text(444, "$13,206");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(445, "td")(446, "span", 115);
        \u0275\u0275text(447, "Completed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(448, "tr")(449, "td", 41);
        \u0275\u0275element(450, "img", 125);
        \u0275\u0275text(451, " Branded Shoes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(452, "td");
        \u0275\u0275text(453, "#26762768");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(454, "td");
        \u0275\u0275text(455, "20th Aug, 05pm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(456, "td", 41);
        \u0275\u0275text(457, "$15,206");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(458, "td")(459, "span", 117);
        \u0275\u0275text(460, "Pending");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(461, "div", 126)(462, "div", 4)(463, "div", 75)(464, "h3", 32);
        \u0275\u0275text(465, "Recent Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(466, "div", 105)(467, "div", 95)(468, "a", 96);
        \u0275\u0275element(469, "i", 97);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(470, "div", 106)(471, "a", 99);
        \u0275\u0275text(472, "Last Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(473, "a", 99);
        \u0275\u0275text(474, "Last Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(475, "a", 99);
        \u0275\u0275text(476, "Yearly");
        \u0275\u0275elementEnd();
        \u0275\u0275element(477, "div", 107);
        \u0275\u0275elementStart(478, "a", 99);
        \u0275\u0275element(479, "i", 101);
        \u0275\u0275text(480, " Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(481, "div", 76)(482, "overlay-scrollbars", 127)(483, "div", 109)(484, "table", 128)(485, "tbody")(486, "tr")(487, "td", 129);
        \u0275\u0275element(488, "img", 130);
        \u0275\u0275elementStart(489, "div", 131)(490, "h6", 10);
        \u0275\u0275text(491, "John Wisely");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(492, "small", 60);
        \u0275\u0275text(493, "1340 Gills Rd, VA, 23139");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(494, "tr")(495, "td", 129);
        \u0275\u0275element(496, "img", 132);
        \u0275\u0275elementStart(497, "div", 131)(498, "h6", 10);
        \u0275\u0275text(499, "Nicki Fanning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(500, "small", 60);
        \u0275\u0275text(501, "408 1st St, NC, 28468");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(502, "tr")(503, "td", 129);
        \u0275\u0275element(504, "img", 133);
        \u0275\u0275elementStart(505, "div", 131)(506, "h6", 10);
        \u0275\u0275text(507, "Lula Malone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(508, "small", 60);
        \u0275\u0275text(509, "104 Jefferson Ln, TN, 37643");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(510, "tr")(511, "td", 129);
        \u0275\u0275element(512, "img", 134);
        \u0275\u0275elementStart(513, "div", 131)(514, "h6", 10);
        \u0275\u0275text(515, "Rina Summa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(516, "small", 60);
        \u0275\u0275text(517, "49 Scott Dr, NY, 10941");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(518, "tr")(519, "td", 129);
        \u0275\u0275element(520, "img", 135);
        \u0275\u0275elementStart(521, "div", 131)(522, "h6", 10);
        \u0275\u0275text(523, "Yadira Acklin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(524, "small", 60);
        \u0275\u0275text(525, "507 E 22nd St S, IA, 50208");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(526, "tr")(527, "td", 129);
        \u0275\u0275element(528, "img", 136);
        \u0275\u0275elementStart(529, "div", 131)(530, "h6", 10);
        \u0275\u0275text(531, "Joanna Latta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(532, "small", 60);
        \u0275\u0275text(533, "511 N Walnut St, LA, 71082");
        \u0275\u0275elementEnd()()()()()()()()()()()();
        \u0275\u0275elementStart(534, "div", 1)(535, "div", 137)(536, "div", 4)(537, "div", 75)(538, "h3", 32);
        \u0275\u0275text(539, "Best Sellers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(540, "div", 105)(541, "div", 138)(542, "button", 139);
        \u0275\u0275element(543, "i", 140);
        \u0275\u0275text(544, " Add New Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(545, "div", 106)(546, "a", 141);
        \u0275\u0275element(547, "i", 142);
        \u0275\u0275text(548, "Add new Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(549, "a", 141);
        \u0275\u0275element(550, "i", 143);
        \u0275\u0275text(551, "View all new tab");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(552, "a", 141);
        \u0275\u0275element(553, "i", 144);
        \u0275\u0275text(554, "Edit Page");
        \u0275\u0275elementEnd();
        \u0275\u0275element(555, "div", 107);
        \u0275\u0275elementStart(556, "a", 141);
        \u0275\u0275element(557, "i", 101);
        \u0275\u0275text(558, " Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(559, "div", 5)(560, "div", 145)(561, "label", 146);
        \u0275\u0275text(562, " Show ");
        \u0275\u0275elementStart(563, "ng-select", 147)(564, "ng-option", 148);
        \u0275\u0275text(565, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(566, "ng-option", 149);
        \u0275\u0275text(567, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(568, "ng-option", 150);
        \u0275\u0275text(569, "50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(570, "ng-option", 150);
        \u0275\u0275text(571, "100");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(572, " Entries ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(573, "div", 109)(574, "table", 151)(575, "thead")(576, "tr", 111)(577, "th", 152);
        \u0275\u0275text(578, "Seller ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(579, "th", 152);
        \u0275\u0275text(580, "Total Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(581, "th", 152);
        \u0275\u0275text(582, "Active Stocks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(583, "th", 152);
        \u0275\u0275text(584, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(585, "th", 152);
        \u0275\u0275text(586, "Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(587, "th", 152);
        \u0275\u0275text(588, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(589, "tbody")(590, "tr")(591, "td", 41);
        \u0275\u0275text(592, "SREE Enrprices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(593, "td");
        \u0275\u0275text(594, "20,125");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(595, "td");
        \u0275\u0275text(596, "10513.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(597, "td");
        \u0275\u0275text(598, "Watch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(599, "td", 41);
        \u0275\u0275text(600, "$13,206");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(601, "td");
        \u0275\u0275element(602, "i", 153);
        \u0275\u0275text(603, ".01%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(604, "tr")(605, "td", 41);
        \u0275\u0275text(606, "Granite Cake");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(607, "td");
        \u0275\u0275text(608, "1,250,103");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(609, "td");
        \u0275\u0275text(610, "425.25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(611, "td");
        \u0275\u0275text(612, "Medical");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(613, "td", 41);
        \u0275\u0275text(614, "$21,762");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(615, "td");
        \u0275\u0275element(616, "i", 154);
        \u0275\u0275text(617, ".05%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(618, "tr")(619, "td", 41);
        \u0275\u0275text(620, "GOODS Best");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(621, "td");
        \u0275\u0275text(622, "425.25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(623, "td");
        \u0275\u0275text(624, "1.2029");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(625, "td");
        \u0275\u0275text(626, "Cake");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(627, "td", 41);
        \u0275\u0275text(628, "$42,282");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(629, "td");
        \u0275\u0275element(630, "i", 154);
        \u0275\u0275text(631, ".05%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(632, "tr")(633, "td", 41);
        \u0275\u0275text(634, "Multi Shop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(635, "td");
        \u0275\u0275text(636, "28,470");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(637, "td");
        \u0275\u0275text(638, "1547.67");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(639, "td");
        \u0275\u0275text(640, "Electronics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(641, "td", 41);
        \u0275\u0275text(642, "$86,334");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(643, "td");
        \u0275\u0275element(644, "i", 153);
        \u0275\u0275text(645, ".01%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(646, "tr")(647, "td", 41);
        \u0275\u0275text(648, "Sagar Limited");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(649, "td");
        \u0275\u0275text(650, "24,983");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(651, "td");
        \u0275\u0275text(652, "723.48");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(653, "td");
        \u0275\u0275text(654, "Mobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(655, "td", 41);
        \u0275\u0275text(656, "$24,983");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(657, "td");
        \u0275\u0275element(658, "i", 154);
        \u0275\u0275text(659, ".05%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(660, "tr")(661, "td", 41);
        \u0275\u0275text(662, "Indo Allinone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(663, "td");
        \u0275\u0275text(664, "81,865");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(665, "td");
        \u0275\u0275text(666, "149.18");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(667, "td");
        \u0275\u0275text(668, "Fashion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(669, "td", 41);
        \u0275\u0275text(670, "$86,334");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(671, "td");
        \u0275\u0275element(672, "i", 154);
        \u0275\u0275text(673, ".05%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(674, "tr")(675, "td", 41);
        \u0275\u0275text(676, "Spark Limited");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(677, "td");
        \u0275\u0275text(678, "32,309");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(679, "td");
        \u0275\u0275text(680, "149.18");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(681, "td");
        \u0275\u0275text(682, "Gift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(683, "td", 41);
        \u0275\u0275text(684, "$25,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(685, "td");
        \u0275\u0275element(686, "i", 153);
        \u0275\u0275text(687, ".01%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(688, "tr")(689, "td", 41);
        \u0275\u0275text(690, "Stranger Seller");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(691, "td");
        \u0275\u0275text(692, "149.18");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(693, "td");
        \u0275\u0275text(694, "25,000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(695, "td");
        \u0275\u0275text(696, "Manufacture");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(697, "td", 41);
        \u0275\u0275text(698, "$58.39");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(699, "td");
        \u0275\u0275element(700, "i", 153);
        \u0275\u0275text(701, ".01%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(702, "tr")(703, "td", 41);
        \u0275\u0275text(704, "Altanta Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(705, "td");
        \u0275\u0275text(706, "149.18");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(707, "td");
        \u0275\u0275text(708, "10,120");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(709, "td");
        \u0275\u0275text(710, "Clothes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(711, "td", 41);
        \u0275\u0275text(712, "$2,167.83");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(713, "td");
        \u0275\u0275element(714, "i", 153);
        \u0275\u0275text(715, ".01%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(716, "tr")(717, "td", 41);
        \u0275\u0275text(718, "Suprtmarket Online");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(719, "td");
        \u0275\u0275text(720, "2,142");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(721, "td");
        \u0275\u0275text(722, "149.18");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(723, "td");
        \u0275\u0275text(724, "Electronics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(725, "td", 41);
        \u0275\u0275text(726, "$5,196");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(727, "td");
        \u0275\u0275element(728, "i", 153);
        \u0275\u0275text(729, ".01%");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(730, "div", 155);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(62);
        \u0275\u0275conditional(ctx.width > 200 ? 62 : -1);
        \u0275\u0275advance(128);
        \u0275\u0275property("chart", ctx.ApexData1.chart)("stroke", ctx.ApexData1.stroke)("fill", ctx.ApexData1.fill)("series", ctx.ApexData1.series)("yaxis", ctx.ApexData1.yaxis)("colors", ctx.ApexData1.colors);
        \u0275\u0275advance(12);
        \u0275\u0275property("chart", ctx.ApexData2.chart)("stroke", ctx.ApexData2.stroke)("fill", ctx.ApexData2.fill)("series", ctx.ApexData2.series)("yaxis", ctx.ApexData2.yaxis)("colors", ctx.ApexData2.colors);
        \u0275\u0275advance(12);
        \u0275\u0275property("chart", ctx.ApexData3.chart)("stroke", ctx.ApexData3.stroke)("fill", ctx.ApexData3.fill)("series", ctx.ApexData3.series)("yaxis", ctx.ApexData3.yaxis)("colors", ctx.ApexData3.colors);
        \u0275\u0275advance(89);
        \u0275\u0275property("series", ctx.chartOptions4.series)("chart", ctx.chartOptions4.chart)("xaxis", ctx.chartOptions4.xaxis)("colors", ctx.chartOptions4.colors)("fill", ctx.chartOptions4.fill)("stroke", ctx.chartOptions4.stroke)("tooltip", ctx.chartOptions4.tooltip)("legend", ctx.chartOptions4.legend)("dataLabels", ctx.chartOptions4.dataLabels)("grid", ctx.chartOptions4.grid)("yaxis", ctx.chartOptions4.yaxis);
      }
    }, dependencies: [RouterModule, SharedModule, DashboardHeaderComponent, NgbDropdownModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, FormsModule, ReactiveFormsModule, NgxEchartsModule, NgApexchartsModule, ChartComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, LeafletModule, LeafletDirective, OverlayscrollbarsModule, OverlayScrollbarsComponent], styles: ["\n\n  .leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive {\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n  #leaflet2 {\n  -ms-touch-action: none;\n  touch-action: none;\n}\n  .chart-container {\n  max-width: 100%;\n  width: 100%;\n  margin: 0 auto;\n}\n.apexcharts-toolbar[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=sales.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesComponent, { className: "SalesComponent", filePath: "src\\app\\components\\dashboards\\sales\\sales.component.ts", lineNumber: 21 });
})();
export {
  SalesComponent
};
//# sourceMappingURL=sales.component-CL6V6KOP.js.map
