import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-CJCV5ZLP.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule
} from "./chunk-JG564GD5.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/file-manager/filemanager/filemanager.component.ts
function FilemanagerComponent_For_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "label", 59);
    \u0275\u0275element(4, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61)(6, "div", 62)(7, "a", 63);
    \u0275\u0275element(8, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 65)(10, "a", 66);
    \u0275\u0275element(11, "i", 67);
    \u0275\u0275text(12, " Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 66);
    \u0275\u0275element(14, "i", 68);
    \u0275\u0275text(15, " Share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 66);
    \u0275\u0275element(17, "i", 69);
    \u0275\u0275text(18, " Download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 66);
    \u0275\u0275element(20, "i", 70);
    \u0275\u0275text(21, " Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 71)(23, "div", 72);
    \u0275\u0275element(24, "img", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h6", 74);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 11);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(24);
    \u0275\u0275property("src", item_r1.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.Category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.Size);
  }
}
var FilemanagerComponent = class _FilemanagerComponent {
  constructor() {
    this.FileData = [
      {
        src: "./assets/images/files/file.png",
        Category: "document.pdf",
        Size: "23kb"
      },
      {
        src: "./assets/images/files/folder.png",
        Category: "Images",
        Size: "1.23gb"
      },
      {
        src: "./assets/images/files/folder.png",
        Category: "Music",
        Size: "897mb"
      },
      {
        src: "./assets/images/files/folder.png",
        Category: "Downloads",
        Size: "453kb"
      },
      {
        src: "./assets/images/files/folder.png",
        Category: "Videos",
        Size: "1.5gb"
      },
      {
        src: "./assets/images/files/folder.png",
        Category: "Documents",
        Size: "234mb"
      },
      {
        src: "./assets/images/photos/1.jpg",
        logo: "fa-music",
        Category: "topmp4song.mp4",
        Size: "4kb"
      },
      {
        src: "./assets/images/photos/2.jpg",
        Category: "image.jpg",
        Size: "65kb"
      },
      {
        src: "./assets/images/files/folder.png",
        Category: "File documents",
        Size: "1.23gb"
      },
      {
        src: "./assets/images/files/folder.png",
        Category: "New Folder",
        Size: "897mb"
      },
      {
        src: "./assets/images/files/word.png",
        Category: "Word document",
        Size: "23kb"
      },
      {
        src: "./assets/images/files/file.png",
        Category: "document.pdf",
        Size: "23kb"
      }
    ];
    this.chartOptions = {
      chart: {
        height: 100,
        width: 100,
        type: "radialBar",
        sparkline: {
          enabled: true
        }
      },
      series: [85],
      colors: ["var(--primary-color)"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
            background: "#fff"
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 5,
              color: "#4b9bfa",
              fontSize: "1rem",
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Followers"]
    };
  }
  static {
    this.\u0275fac = function FilemanagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilemanagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilemanagerComponent, selectors: [["app-filemanager"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 108, vars: 6, consts: [["hassub", "apps", "sub", "", "title1", "File Manager", "title", "File Manager", "activeTitle", "File Manager"], [1, "row"], [1, "col-lg-4", "col-xl-3"], [1, "card", "filemanager-list"], [1, "card-body", "d-flex", "align-items-center", "p-0"], [1, "chart-wrapper"], ["id", "filemanager"], [3, "series", "chart", "plotOptions", "stroke", "colors", "fill"], [1, "my-auto"], [1, "mb-1", "fw-bold"], [1, "mb-0"], [1, "text-muted"], [1, "card-body", "px-0", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "file-manger", "px-0"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon", "me-2"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z", "opacity", ".3"], ["d", "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z"], ["d", "M5 8h10v8H5z", "opacity", ".3"], ["d", "M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z"], ["d", "M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z", "opacity", ".3"], ["d", "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"], ["d", "M3 19h18V5H3v14zm8-7c.35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3s1.34-3 3-3z", "opacity", ".3"], ["d", "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-1c1.65 0 2.98-1.33 3-2.97V8h3V6h-5v6.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3z"], ["d", "M4 4h10v16H4z", "opacity", ".3"], ["d", "M14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16zm6.1-12.3l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM17 10.8c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3l-1 1z"], ["d", "M14.17 11H13V5h-2v6H9.83L12 13.17z", "opacity", ".3"], ["d", "M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z"], ["d", "M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z", "opacity", ".3"], ["d", "M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"], ["d", "M0 0h24v24H0V0zm0 0h24v24H0V0z", "fill", "none"], ["d", "M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z", "opacity", ".3"], ["d", "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z"], [1, "card-body", "border-top", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "mail-inbox"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "px-0", "py-2"], [1, "rounded-dot", "bg-primary", "me-2"], [1, "rounded-dot", "bg-secondary", "me-2"], [1, "rounded-dot", "bg-success", "me-2"], [1, "rounded-dot", "bg-info", "me-2"], [1, "rounded-dot", "bg-warning", "me-2"], [1, "rounded-dot", "bg-danger", "me-2"], [1, "col-lg-8", "col-xl-9"], [1, "row", "mb-3", "gap-3"], [1, "col"], [1, "gap-3", "d-sm-flex"], ["href", "javascript:void(0);", 1, "text-nowrap", "btn", "btn-primary", "m-1"], [1, "fe", "fe-plus"], ["href", "javascript:void(0);", 1, "text-nowrap", "btn", "btn-light", "m-1"], [1, "fe", "fe-folder"], [1, "col", "col-auto", "my-auto"], [1, "input-group"], ["type", "text", "placeholder", "Search Files", 1, "form-control", "border-0"], ["aria-label", "button", "type", "button", 1, "btn", "btn-light", "bg-white", "border-0"], [1, "fe", "fe-search"], [1, "col-xl-3", "col-md-4", "col-sm-6"], [1, "card", "border", "p-0", "shadow-none"], [1, "d-flex", "align-items-center", "px-4", "pt-4"], [1, "form-check-label"], ["type", "checkbox", "value", "option2", 1, "form-check-input"], [1, "float-end", "ms-auto"], ["ngbDropdown", "", 1, "btn-group", "ms-3", "mb-0"], ["ngbDropdownToggle", "", "aria-label", "anchor", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "option-dots", "no-caret"], [1, "fa", "fa-ellipsis-v"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "fe", "fe-edit", "d-inline-flex", "me-2"], [1, "fe", "fe-share", "d-inline-flex", "me-2"], [1, "fe", "fe-download", "d-inline-flex", "me-2"], [1, "fe", "fe-trash", "d-inline-flex", "me-2"], [1, "card-body", "pt-0", "text-center"], [1, "file-manger-icon"], ["alt", "img", 1, "br-7", 3, "src"], [1, "mb-1", "fw-semibold", "mt-4"]], template: function FilemanagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275element(7, "apx-chart", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "h5", 9);
        \u0275\u0275text(10, "Storage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 10)(12, "span", 11);
        \u0275\u0275text(13, "13.65gb");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " / ");
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "16gb");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 15);
        \u0275\u0275element(21, "path", 16)(22, "path", 17)(23, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "Images ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 15);
        \u0275\u0275element(27, "path", 16)(28, "path", 19)(29, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Videos ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 15);
        \u0275\u0275element(33, "path", 16)(34, "path", 21)(35, "path", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "Docs ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 15);
        \u0275\u0275element(39, "path", 16)(40, "path", 23)(41, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " Music ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 15);
        \u0275\u0275element(45, "path", 16)(46, "path", 25)(47, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, "APKs ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(50, "svg", 15);
        \u0275\u0275element(51, "path", 16)(52, "path", 27)(53, "path", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, "Downloads ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(55, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(56, "svg", 15);
        \u0275\u0275element(57, "path", 16)(58, "path", 29)(59, "path", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " More ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(61, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(62, "svg", 15);
        \u0275\u0275element(63, "path", 31)(64, "path", 32)(65, "path", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " Hidden Files ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(67, "div", 34)(68, "div", 35)(69, "a", 36);
        \u0275\u0275element(70, "span", 37);
        \u0275\u0275text(71, "Remote Control ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "a", 36);
        \u0275\u0275element(73, "span", 38);
        \u0275\u0275text(74, "Google Drive ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "a", 36);
        \u0275\u0275element(76, "span", 39);
        \u0275\u0275text(77, "FTP Files ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "a", 36);
        \u0275\u0275element(79, "span", 40);
        \u0275\u0275text(80, "Transfer files ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "a", 36);
        \u0275\u0275element(82, "span", 41);
        \u0275\u0275text(83, "Deep Clean ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "a", 36);
        \u0275\u0275element(85, "span", 42);
        \u0275\u0275text(86, "Favourities ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "a", 36);
        \u0275\u0275element(88, "span", 37);
        \u0275\u0275text(89, "Settings ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(90, "div", 43)(91, "div", 44)(92, "div", 45)(93, "div", 46)(94, "a", 47);
        \u0275\u0275element(95, "i", 48);
        \u0275\u0275text(96, " Upload New Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "a", 49);
        \u0275\u0275element(98, "i", 50);
        \u0275\u0275text(99, " New folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 51)(101, "div", 52);
        \u0275\u0275element(102, "input", 53);
        \u0275\u0275elementStart(103, "button", 54);
        \u0275\u0275element(104, "i", 55);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(105, "div", 1);
        \u0275\u0275repeaterCreate(106, FilemanagerComponent_For_107_Template, 29, 3, "div", 56, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("stroke", ctx.chartOptions.stroke)("colors", ctx.chartOptions.colors)("fill", ctx.chartOptions.fill);
        \u0275\u0275advance(99);
        \u0275\u0275repeater(ctx.FileData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgApexchartsModule, ChartComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilemanagerComponent, { className: "FilemanagerComponent", filePath: "src\\app\\components\\apps\\file-manager\\filemanager\\filemanager.component.ts", lineNumber: 23 });
})();
export {
  FilemanagerComponent
};
//# sourceMappingURL=filemanager.component-6IZPB6LE.js.map
