import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  OverlayscrollbarsModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModal
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/user-list/user-list/user-list.component.ts
function UserListComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 19)(2, "label", 20);
    \u0275\u0275element(3, "input", 21)(4, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 19)(6, "div", 23);
    \u0275\u0275element(7, "img", 24);
    \u0275\u0275elementStart(8, "div", 25)(9, "h6", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 28)(16, "div", 29)(17, "h6", 30);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 31);
    \u0275\u0275element(20, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 19)(22, "div", 33)(23, "button", 34);
    \u0275\u0275listener("click", function UserListComponent_For_33_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const content_r3 = \u0275\u0275reference(35);
      return \u0275\u0275resetView(ctx_r1.opencontent(content_r3));
    });
    \u0275\u0275text(24, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 36);
    \u0275\u0275element(27, "path", 37)(28, "path", 38)(29, "path", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("src", item_r4.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.progress);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r4.width, "%");
  }
}
function UserListComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "h5", 41);
    \u0275\u0275text(2, "Create User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_template_34_Template_button_click_3_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43)(5, "div", 44)(6, "form", 45)(7, "div", 2)(8, "div", 46)(9, "div", 2)(10, "div", 46)(11, "div", 47)(12, "label");
    \u0275\u0275text(13, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 46)(16, "div", 47)(17, "label");
    \u0275\u0275text(18, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 2)(21, "div", 46)(22, "div", 47)(23, "label");
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 2)(27, "div", 51)(28, "div", 47)(29, "label");
    \u0275\u0275text(30, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 2)(33, "div", 53)(34, "div", 54)(35, "b");
    \u0275\u0275text(36, "Change Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 2)(38, "div", 46)(39, "div", 47)(40, "label");
    \u0275\u0275text(41, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 2)(44, "div", 46)(45, "div", 47)(46, "label");
    \u0275\u0275text(47, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 46)(50, "div", 47)(51, "label");
    \u0275\u0275text(52, "Confirm ");
    \u0275\u0275elementStart(53, "span", 56);
    \u0275\u0275text(54, "Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(55, "input", 55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 57)(57, "div", 54)(58, "b");
    \u0275\u0275text(59, "Keeping in Touch");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 2)(61, "div", 46)(62, "label", 54);
    \u0275\u0275text(63, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 58)(65, "div", 20);
    \u0275\u0275element(66, "input", 59);
    \u0275\u0275elementStart(67, "label", 60);
    \u0275\u0275text(68, "Blog posts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 20);
    \u0275\u0275element(70, "input", 61);
    \u0275\u0275elementStart(71, "label", 62);
    \u0275\u0275text(72, "Newsletter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 20);
    \u0275\u0275element(74, "input", 63);
    \u0275\u0275elementStart(75, "label", 64);
    \u0275\u0275text(76, "Personal Offers");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(77, "div", 2)(78, "div", 65)(79, "button", 66);
    \u0275\u0275listener("click", function UserListComponent_ng_template_34_Template_button_click_79_listener() {
      const modal_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(modal_r6.dismiss("Cross click"));
    });
    \u0275\u0275text(80, "Save Changes");
    \u0275\u0275elementEnd()()()()();
  }
}
var UserListComponent = class _UserListComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.TableData = [
      {
        image: "./assets/images/faces/2.jpg",
        name: "Nam Guy",
        position: "web designer",
        date: "09 Dec 2017",
        progress: "30%",
        width: "30"
      },
      {
        image: "./assets/images/faces/1.jpg",
        name: "Tracy Lindahl",
        position: "web designer",
        date: "27 Jan 2018",
        progress: "82%",
        width: "82"
      },
      {
        image: "./assets/images/faces/3.jpg",
        name: "Breana Millis",
        position: "Php designer",
        date: "09 Dec 2017",
        progress: "68%",
        width: "68"
      },
      {
        image: "./assets/images/faces/4.jpg",
        name: "Antwan Tramel",
        position: "Hr Manager",
        date: "20 Jan 2018",
        progress: "78%",
        width: "78"
      },
      {
        image: "./assets/images/faces/5.jpg",
        name: "Geraldine Arpin",
        position: "Recriuter",
        date: "13 Jan 2018",
        progress: "45%",
        width: "45"
      },
      {
        image: "./assets/images/faces/6.jpg",
        name: "Clement Niehaus",
        position: "Ceo",
        date: "25 Jan 2018",
        progress: "60%",
        width: "60"
      },
      {
        image: "./assets/images/faces/7.jpg",
        name: "Melinda Mayers",
        position: "Director",
        date: "12 Jan 2018",
        progress: "55%",
        width: "55"
      },
      {
        image: "./assets/images/faces/8.jpg",
        name: "Willodean Monson",
        position: "web designer",
        date: "27 Jan 2018",
        progress: "45%",
        width: "45"
      },
      {
        image: "./assets/images/faces/9.jpg",
        name: "Brenton Moncada",
        position: "web developer",
        date: "12 Dec 2017",
        progress: "40%",
        width: "40"
      },
      {
        image: "./assets/images/faces/10.jpg",
        name: "Cyndy Kirschbaum",
        position: "web designer",
        date: "10 Dec 2017",
        progress: "80%",
        width: "80"
      },
      {
        image: "./assets/images/faces/11.jpg",
        name: "Renna Spino",
        position: "Hr Manager",
        date: "03 Dec 2017",
        progress: "70%",
        width: "70"
      },
      {
        image: "./assets/images/faces/12.jpg",
        name: "Freeman Kozlowski",
        position: "web developer",
        date: "09 Dec 2017",
        progress: "65%",
        width: "65"
      }
    ];
  }
  opencontent(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      modalDialogClass: "modal-lg",
      centered: true
    });
  }
  static {
    this.\u0275fac = function UserListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserListComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 0, consts: [["content", ""], ["hassub", "Apps", "sub", "", "title1", "Userlist", "title", "User List", "activeTitle", "User List"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "userlist-table", "mb-2"], [1, "mb-3", "d-flex", "gap-2", "align-items-center"], ["placeholder", "10", "data-trigger", ""], ["value", "Choice 1"], ["value", "Choice 2"], ["value", "Choice 3"], [1, "table-responsive"], ["id", "userlist-table", 1, "table", "table-bordered", "text-nowrap", "w-100", "mt-4"], ["scope", "row", 1, "align-top", "border-bottom-0", "wd-5"], ["scope", "row", 1, "border-bottom-0", "w-20"], ["scope", "row", 1, "border-bottom-0", "w-15"], ["scope", "row", 1, "border-bottom-0", "w-30"], ["scope", "row", 1, "border-bottom-0", "w-10"], [1, "align-middle"], [1, "form-check-label", "mb-2"], ["type", "checkbox", "value", "option2", 1, "form-check-input"], [1, "custom-control-label"], [1, "d-flex"], ["alt", "", 1, "avatar", "avatar-rounded", "avatar-md", "d-block", 3, "src"], [1, "ms-3", "mt-1"], [1, "mb-0", "fw-bold"], [1, ""], [1, "text-nowrap", "align-middle"], [1, "float-end"], [1, "mb-2", "ms-4", "fw-bold"], [1, "progress", "progress-sm", "mb-0", "mt-1"], [1, "progress-bar", "bg-primary"], [1, "btn-group", "align-top"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#user-form-modal", 1, "btn", "btn-sm", "btn-outline-light", "btn-svg", 3, "click"], ["type", "button", "aria-label", "button", 1, "btn", "btn-sm", "btn-outline-light", "btn-svg"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"], [1, "modal-header"], [1, "modal-title"], ["aria-label", "button", "type", "button", "data-bs-dismiss", "modal", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "py-1"], [1, "form"], [1, "col"], [1, "mb-3"], ["type", "text", "name", "name", "placeholder", "John Smith", "value", "John Smith", 1, "form-control"], ["type", "text", "name", "username", "placeholder", "johnny.s", "value", "johnny.s", 1, "form-control"], ["type", "text", "placeholder", "user@example.com", 1, "form-control"], [1, "col", "mb-3"], ["rows", "5", "placeholder", "My Bio", 1, "form-control"], [1, "col-12", "col-sm-6", "mb-3"], [1, "mb-2"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control"], [1, "d-none", "d-xl-inline"], [1, "col-12", "col-sm-5", "offset-sm-1", "mb-3"], [1, "custom-controls-stacked", "px-2"], ["type", "checkbox", "id", "notifications-blog", "checked", "", 1, "form-check-input", "me-2"], ["for", "notifications-blog", 1, "custom-control-label"], ["type", "checkbox", "id", "notifications-news", "checked", "", 1, "form-check-input", "me-2"], ["for", "notifications-news", 1, "custom-control-label"], ["type", "checkbox", "id", "notifications-offers", "checked", "", 1, "form-check-input", "me-2"], ["for", "notifications-offers", 1, "custom-control-label"], [1, "col", "d-flex", "justify-content-end"], [1, "btn", "btn-primary", 3, "click"]], template: function UserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "label", 7);
        \u0275\u0275text(7, " Show ");
        \u0275\u0275elementStart(8, "ng-select", 8)(9, "ng-option", 9);
        \u0275\u0275text(10, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "ng-option", 10);
        \u0275\u0275text(12, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "ng-option", 11);
        \u0275\u0275text(14, "50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ng-option", 11);
        \u0275\u0275text(16, "100");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(17, " Entries ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 12)(19, "table", 13)(20, "thead")(21, "tr");
        \u0275\u0275element(22, "th", 14);
        \u0275\u0275elementStart(23, "th", 15);
        \u0275\u0275text(24, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th", 16);
        \u0275\u0275text(26, "Date of joining");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th", 17);
        \u0275\u0275text(28, "Performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 18);
        \u0275\u0275text(30, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "tbody");
        \u0275\u0275repeaterCreate(32, UserListComponent_For_33_Template, 30, 7, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(34, UserListComponent_ng_template_34_Template, 81, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(32);
        \u0275\u0275repeater(ctx.TableData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, OverlayscrollbarsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "src\\app\\components\\apps\\user-list\\user-list\\user-list.component.ts", lineNumber: 13 });
})();
export {
  UserListComponent
};
//# sourceMappingURL=user-list.component-KAT3IZJO.js.map
