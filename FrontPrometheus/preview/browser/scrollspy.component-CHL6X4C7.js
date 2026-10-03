import {
  AppShowCodeDirective,
  OverlayscrollbarsModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule,
  NgbScrollSpy,
  NgbScrollSpyFragment,
  NgbScrollSpyItem,
  NgbScrollSpyMenu
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/advancedui/scrollspy/scrollspy.component.ts
var _c0 = (a0) => [a0, "items-1"];
var ScrollspyComponent = class _ScrollspyComponent {
  static {
    this.\u0275fac = function ScrollspyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollspyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrollspyComponent, selectors: [["app-scrollspy"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 233, vars: 17, consts: [["s", "ngbScrollSpy"], ["spy", "ngbScrollSpy"], ["spy1", "ngbScrollSpy"], ["spy2", "ngbScrollSpy"], ["hassub", "", "sub", "Home", "title1", "Advanced Ui", "title", "ScrollSpy", "activeTitle", "ScrollSpy"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "prism-toggle"], ["appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "navbarline", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], ["id", "navbar-example2", 1, "navbar", "navbar-light", "bg-light", "px-3", "mb-3"], [1, "nav", "nav-pills", "d-sm-flex", "d-block", 3, "ngbScrollSpyMenu"], [1, "nav-item", "mb-1", "mb-sm-0"], ["ngbScrollSpyItem", "basic-1", 1, "nav-link"], ["ngbScrollSpyItem", "basic-2", 1, "nav-link"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "ngbScrollSpyItem", "basic-p1", "data-bs-toggle", "dropdown", "role", "button", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", "ngbScrollSpyItem", "basic-3", "parent", "basic-p1", 1, "dropdown-item"], ["ngbDropdownItem", "", "ngbScrollSpyItem", "basic-4", "parent", "basic-p1", 1, "dropdown-item"], [1, "dropdown-divider"], ["ngbDropdownItem", "", "ngbScrollSpyItem", "basic-5", "parent", "basic-p1", 1, "dropdown-item"], ["ngbScrollSpy", "", "rootMargin", "0px 0px -40%", "data-bs-spy", "scroll", "data-bs-target", "#navbar-example2", "data-bs-offset", "0", "data-bs-root-margin", "0px 0px -40%", "data-bs-smooth-scroll", "true", "tabindex", "0", 1, "scrollspy-example", "bg-light", "p-3", "rounded-2"], ["ngbScrollSpyFragment", "basic-1", "id", "scrollspyHeading1", 1, "fw-semibold"], [1, "text-muted"], ["ngbScrollSpyFragment", "basic-2", "id", "scrollspyHeading2", 1, "fw-semibold"], ["ngbScrollSpyFragment", "basic-3", "id", "scrollspyHeading3", 1, "fw-semibold"], ["ngbScrollSpyFragment", "basic-4", "id", "scrollspyHeading4", 1, "fw-semibold"], ["ngbScrollSpyFragment", "basic-5", "id", "scrollspyHeading5", 1, "fw-semibold"], [1, "card-footer", "navbarfooter", "d-none", "border-top-0"], [1, "language-html"], [1, "ri-code-line", "nestedline", "ms-2", "d-inline-block", "align-middle"], [1, "card-body", "nestedbody"], [1, "col-md-3", "col-sm-4"], ["id", "navbar-example3", 1, "navbar", "bg-light", "flex-column", "align-items-stretch", "p-3", 3, "ngbScrollSpyMenu"], ["href", "javascript:void(0);", 1, "nav", "nav-pills", "flex-column"], ["ngbScrollSpyItem", "nested-1", 1, "nav-link"], [1, "nav", "nav-pills", "flex-column"], ["href", "javascript:void(0);", "ngbScrollSpyItem", "nested-1-1", "parent", "nested-1", 1, "nav-link", "ms-3", "my-1"], ["href", "javascript:void(0);", "ngbScrollSpyItem", "nested-1-2", "parent", "nested-1", 1, "nav-link", "ms-3", "my-1"], ["href", "javascript:void(0);", "ngbScrollSpyItem", "nested-2", 1, "nav-link"], ["href", "javascript:void(0);", "ngbScrollSpyItem", "nested-3", 1, "nav-link"], ["href", "javascript:void(0);", "ngbScrollSpyItem", "nested-3-1", "parent", "nested-3", 1, "nav-link", "ms-3", "my-1"], ["href", "javascript:void(0);", "ngbScrollSpyItem", "nested-3-2", "parent", "nested-3", 1, "nav-link", "ms-3", "my-1"], [1, "col-md-9", "col-sm-8"], ["ngbScrollSpy", "", "data-bs-spy", "scroll", "data-bs-target", "#navbar-example3", "data-bs-smooth-scroll", "true", "tabindex", "0", 1, "scrollspy-example-2"], ["id", "item-1"], ["ngbScrollSpy", "", 1, "fw-semibold"], ["id", "item-1-1"], ["ngbScrollSpyFragment", "nested-1-1", 1, "fw-semibold"], ["id", "item-1-2"], ["ngbScrollSpyFragment", "nested-1-2", 1, "fw-semibold"], ["id", "item-2"], ["ngbScrollSpyFragment", "nested-2", 1, "fw-semibold"], ["id", "item-3"], ["ngbScrollSpyFragment", "nested-3", 1, "fw-semibold"], ["id", "item-3-1"], ["ngbScrollSpyFragment", "nested-3-1", 1, "fw-semibold"], ["id", "item-3-2"], ["ngbScrollSpyFragment", "nested-3-2", 1, "fw-semibold"], [1, "card-footer", "nestedfooter", "d-none", "border-top-0"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "bd-example"], [1, "col-md-2", "col-12"], ["id", "list-example", 1, "list-group", 3, "ngbScrollSpyMenu"], [1, "list-group-item", "list-group-item-action", 3, "ngbScrollSpyItem"], ["fragment", "items-2", 1, "list-group-item", "list-group-item-action", 3, "ngbScrollSpyItem"], ["fragment", "items-3", 1, "list-group-item", "list-group-item-action", 3, "ngbScrollSpyItem"], ["routerLink", ".", "fragment", "items-4", 1, "list-group-item", "list-group-item-action", 3, "ngbScrollSpyItem"], [1, "col-md-10", "col-12"], ["ngbScrollSpy", "", "data-bs-spy", "scroll", "data-bs-target", "#list-example", "data-bs-smooth-scroll", "true", "tabindex", "0", 1, "scrollspy-example-3"], ["id", "list-item-01", "ngbScrollSpyFragment", "items-1", 1, "fw-semibold"], ["id", "list-item-02", "ngbScrollSpyFragment", "items-2", 1, "fw-semibold"], ["id", "list-item-03", "ngbScrollSpyFragment", "items-3", 1, "fw-semibold"], ["id", "list-item-04", "ngbScrollSpyFragment", "items-4", 1, "fw-semibold"], [1, "card-footer", "d-none", "border-top-0"], [1, "ri-code-line", "anchorsline", "ms-2", "d-inline-block", "align-middle"], [1, "card-body", "anchorsbody"], ["id", "simple-list-example", 1, "d-flex", "flex-column", "gap-2", "simple-list-example-scrollspy", "text-center", 3, "ngbScrollSpyMenu"], [1, "p-2", "rounded", 3, "ngbScrollSpyItem"], ["fragment", "items-2", 1, "p-2", "rounded", 3, "ngbScrollSpyItem"], ["fragment", "items-3", 1, "p-2", "rounded", 3, "ngbScrollSpyItem"], ["fragment", "items-4", 1, "p-2", "rounded", 3, "ngbScrollSpyItem"], ["fragment", "items-5", 1, "p-2", "rounded", 3, "ngbScrollSpyItem"], ["ngbScrollSpy", "", "data-bs-spy", "scroll", "data-bs-target", "#simple-list-example", "data-bs-offset", "0", "data-bs-smooth-scroll", "true", "tabindex", "0", 1, "scrollspy-example-4"], ["id", "simple-list-item-1", "ngbScrollSpyFragment", "items-1", 1, "fw-semibold"], ["id", "simple-list-item-2", "ngbScrollSpyFragment", "items-2", 1, "fw-semibold"], ["id", "simple-list-item-3", "ngbScrollSpyFragment", "items-3", 1, "fw-semibold"], ["id", "simple-list-item-4", "ngbScrollSpyFragment", "items-4", 1, "fw-semibold"], ["id", "simple-list-item-5", "ngbScrollSpyFragment", "items-5", 1, "fw-semibold"], [1, "card-footer", "anchorsfooter", "d-none", "border-top-0"]], template: function ScrollspyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 4);
        \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9);
        \u0275\u0275text(6, "Example in navbar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 10)(8, "button", 11);
        \u0275\u0275text(9, " Show Code");
        \u0275\u0275element(10, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 13)(12, "nav", 14)(13, "ul", 15)(14, "li", 16)(15, "a", 17);
        \u0275\u0275text(16, "First");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "li", 16)(18, "a", 18);
        \u0275\u0275text(19, "Second");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "li", 19)(21, "a", 20);
        \u0275\u0275text(22, "Dropdown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "ul", 21)(24, "li")(25, "a", 22);
        \u0275\u0275text(26, "Third");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "li")(28, "a", 23);
        \u0275\u0275text(29, "Fourth");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li");
        \u0275\u0275element(31, "hr", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "li")(33, "a", 25);
        \u0275\u0275text(34, "Fifth");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(35, "div", 26, 0)(37, "h6", 27);
        \u0275\u0275text(38, "First heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p", 28);
        \u0275\u0275text(40, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "h6", 29);
        \u0275\u0275text(42, "Second heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p", 28);
        \u0275\u0275text(44, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h6", 30);
        \u0275\u0275text(46, "Third heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p", 28);
        \u0275\u0275text(48, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis et quaerat asperiores fugit dignissimos rerum qui minus vitae nesciunt nisi aspernatur aperiam quidem magnam, cumque repudiandae quod aliquid quo? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h6", 31);
        \u0275\u0275text(50, "Fourth heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p", 28);
        \u0275\u0275text(52, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora pariatur modi corporis aspernatur eveniet? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "h6", 32);
        \u0275\u0275text(54, "Fifth heading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 28);
        \u0275\u0275text(56, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates consequuntur ipsum eos, magni vitae tempore suscipit excepturi blanditiis! ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 33)(58, "pre", 34)(59, "code", 34);
        \u0275\u0275text(60, '<nav id="navbar-example2" class="navbar navbar-light bg-light px-3 mb-3">\n      <ul class="nav nav-pills d-sm-flex d-block">\n          <li class="nav-item">\n              <a class="nav-link" href="#scrollspyHeading1">First</a>\n          </li>\n          <li class="nav-item">\n              <a class="nav-link" href="#scrollspyHeading2">Second</a>\n          </li>\n          <li class="nav-item dropdown">\n              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"\n                  role="button" aria-expanded="false">Dropdown</a>\n              <ul class="dropdown-menu">\n                  <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a>\n                  </li>\n                  <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a>\n                  </li>\n                  <li>\n                      <hr class="dropdown-divider">\n                  </li>\n                  <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a>\n                  </li>\n              </ul>\n          </li>\n      </ul>\n  </nav>\n  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"\n      class="scrollspy-example bg-light p-3 rounded-2"\n      data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">\n      <h6 class="fw-semibold" id="scrollspyHeading1">First heading</h6>\n      <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa\n          alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas suntLorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio\n          magni,Lorem\n          ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas suntLorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio\n          magni,Lorem\n          ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas suntLorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio\n          magni,Lorem\n          ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas suntLorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio\n          magni,Lorem\n          ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas suntLorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio\n          magni,Lorem\n          ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas suntLorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio\n          magni,Lorem\n          ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n          reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit\n          illum\n          vero veniam harum quas suntLorem ipsum dolor sit amet consectetur\n          adipisicing elit. Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,\n      </p>\n      <h6 class="fw-semibold" id="scrollspyHeading2">Second heading</h6>\n      <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam\n          ullam\n          perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum\n          fugit\n          sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing\n          elit.\n          Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing\n          elit.\n          Aliquam veniam ullam\n          perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum\n          fugit\n          sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing\n          elit.\n          Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing\n          elit.\n          Aliquam veniam ullam\n          perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum\n          fugit\n          sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing\n          elit.\n          Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing\n          elit.\n          Aliquam veniam ullam\n          perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum\n          fugit\n          sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing\n          elit.\n          Quidem culpa alias,\n          illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni\n      </p>\n      <h6 class="fw-semibold" id="scrollspyHeading3">Third heading</h6>\n      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis\n          et\n          quaerat asperiores fugit dignissimos rerum qui minus vitae nesciunt nisi\n          aspernatur aperiam quidem magnam, cumque repudiandae quod aliquid quo?\n      </p>\n      <h6 class="fw-semibold" id="scrollspyHeading4">Fourth heading</h6>\n      <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora\n          pariatur modi corporis aspernatur eveniet?</p>\n      <h6 class="fw-semibold" id="scrollspyHeading5">Fifth heading</h6>\n      <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates\n          consequuntur ipsum eos, magni vitae tempore suscipit excepturi\n          blanditiis!\n      </p>\n  </div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(61, "div", 5)(62, "div", 6)(63, "div", 7)(64, "div", 8)(65, "div", 9);
        \u0275\u0275text(66, "Nested nav");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 10)(68, "button", 11);
        \u0275\u0275text(69, " Show Code");
        \u0275\u0275element(70, "i", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 36)(72, "div", 5)(73, "div", 37)(74, "nav", 38)(75, "nav", 39)(76, "a", 40);
        \u0275\u0275text(77, "Item 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "nav", 41)(79, "a", 42);
        \u0275\u0275text(80, "Item 1-1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "a", 43);
        \u0275\u0275text(82, "Item 1-2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "a", 44);
        \u0275\u0275text(84, "Item 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "a", 45);
        \u0275\u0275text(86, "Item 3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "nav", 41)(88, "a", 46);
        \u0275\u0275text(89, "Item 3-1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "a", 47);
        \u0275\u0275text(91, "Item 3-2");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(92, "div", 48)(93, "div", 49, 1)(95, "div", 50)(96, "h6", 51, 1);
        \u0275\u0275text(98, " Item 1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "p", 28);
        \u0275\u0275text(100, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo in delectus nostrum aut ab quasi placeat facilis? Laborum corporis eaque ipsum laboriosam animi possimus. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "div", 52)(102, "h6", 53);
        \u0275\u0275text(103, " Item 1-1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "p", 28);
        \u0275\u0275text(105, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat minus distinctio itaque odit magnam voluptate quos ipsam ab provident! Facere minus aperiam non architecto sequi, temporibus aspernatur harum consequatur, laboriosam nam ratione adipisci? Doloremque sed ducimus aliquid dicta beatae! Quasi voluptas aliquam aliquid error reiciendis enim! Iure obcaecati consequatur harum suscipit delectus. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div", 54)(107, "h6", 55);
        \u0275\u0275text(108, " Item 1-2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "p", 28);
        \u0275\u0275text(110, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius consectetur quae modi iste voluptatibus a quidem amet ea corporis neque non quasi nesciunt sunt numquam minima maiores eveniet ratione soluta temporibus, quam harum nostrum. Laudantium repellat, dolores blanditiis iusto tempora corrupti. Distinctio, nesciunt. Tenetur sapiente cumque, totam veniam repellat alias quasi, beatae eveniet quas eos, ea aperiam! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "div", 56)(112, "h6", 57);
        \u0275\u0275text(113, " Item 2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p", 28);
        \u0275\u0275text(115, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, itaque debitis. Numquam facere sunt adipisci dolores ratione quo magni. Non, officiis minima deserunt consequatur, repellendus nihil laudantium aperiam laborum eaque animi maxime porro saepe nisi quos. Corporis hic tempore illo reiciendis autem, necessitatibus debitis sed molestias. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 58)(117, "h6", 59);
        \u0275\u0275text(118, " Item 3 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "p", 28);
        \u0275\u0275text(120, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptate sequi exercitationem voluptatem, commodi dicta nostrum atque, praesentium consequatur eos at vero animi neque deleniti ipsa. Aliquid facere saepe pariatur porro nihil blanditiis recusandae dolor fuga? Iusto et omnis neque doloremque, cum modi officia facilis placeat repellendus obcaecati mollitia! Id aperiam officiis vitae. Fugit quo id veritatis commodi maiores numquam nostrum necessitatibus eaque, quia exercitationem distinctio ipsa eum, nihil atque perferendis dicta, mollitia sed dignissimos incidunt voluptas ab tempore laborum? Fugiat, deserunt. Harum, repellat praesentium! Fuga! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 60)(122, "h6", 61);
        \u0275\u0275text(123, " Item 3-1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "p", 28);
        \u0275\u0275text(125, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam non deleniti saepe voluptate, est praesentium ducimus sapiente aut dignissimos voluptas blanditiis reiciendis earum accusantium id ex! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptate sequi exercitationem voluptatem, commodi dicta nostrum atque, praesentium consequatur eos at vero animi neque deleniti ipsa. Aliquid facere saepe pariatur porro nihil blanditiis recusandae dolor fuga? Iusto et omnis neque doloremque, cum modi officia facilis placeat repellendus obcaecati mollitia! Id aperiam officiis vitae. Fugit quo id veritatis commodi maiores numquam nostrum necessitatibus eaque, quia exercitationem distinctio ipsa eum, nihil atque perferendis dicta, mollitia sed dignissimos incidunt voluptas ab tempore laborum? Fugiat, deserunt. Harum, repellat praesentium! Fuga! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "div", 62)(127, "h6", 63);
        \u0275\u0275text(128, " Item 3-2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "p", 28);
        \u0275\u0275text(130, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est. Blanditiis cupiditate voluptate obcaecati eligendi iusto amet. Cupiditate laborum, itaque laboriosam culpa sunt eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptate sequi exercitationem voluptatem, commodi dicta nostrum atque, praesentium consequatur eos at vero animi neque deleniti ipsa. Aliquid facere saepe pariatur porro nihil blanditiis recusandae dolor fuga? Iusto et omnis neque doloremque, cum modi officia facilis placeat repellendus obcaecati mollitia! Id aperiam officiis vitae. Fugit quo id veritatis commodi maiores numquam nostrum necessitatibus eaque, quia exercitationem distinctio ipsa eum, nihil atque perferendis dicta, mollitia sed dignissimos incidunt voluptas ab tempore laborum? Fugiat, deserunt. Harum, repellat praesentium! Fuga! ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(131, "div", 64)(132, "pre", 34)(133, "code", 34);
        \u0275\u0275text(134, '<div class="row">\n      <div class="col-md-3 col-sm-4">\n          <nav id="navbar-example3"\n              class="navbar bg-light flex-column align-items-stretch p-3">\n              <nav class="nav nav-pills flex-column">\n                  <a class="nav-link" href="#item-1">Item 1</a>\n                  <nav class="nav nav-pills flex-column">\n                      <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>\n                      <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>\n                  </nav>\n                  <a class="nav-link" href="#item-2">Item 2</a>\n                  <a class="nav-link" href="#item-3">Item 3</a>\n                  <nav class="nav nav-pills flex-column">\n                      <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>\n                      <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>\n                  </nav>\n              </nav>\n          </nav>\n      </div>\n      <div class="col-md-9 col-sm-8">\n          <div data-bs-spy="scroll" data-bs-target="#navbar-example3"\n              data-bs-smooth-scroll="true" tabindex="0" class="scrollspy-example-2">\n              <div id="item-1">\n                  <h6 class="fw-semibold">Item 1</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Asperiores\n                      explicabo in delectus nostrum aut ab quasi placeat facilis?\n                      Laborum\n                      corporis eaque ipsum laboriosam animi possimus.</p>\n              </div>\n              <div id="item-1-1">\n                  <h6 class="fw-semibold">Item 1-1</h6>\n                  <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n                      Placeat\n                      minus\n                      distinctio itaque odit magnam voluptate quos ipsam ab\n                      provident!\n                      Facere\n                      minus aperiam non architecto sequi, temporibus aspernatur\n                      harum\n                      consequatur, laboriosam nam ratione adipisci? Doloremque sed\n                      ducimus\n                      aliquid dicta beatae! Quasi voluptas aliquam aliquid error\n                      reiciendis\n                      enim! Iure obcaecati consequatur harum suscipit delectus.\n                  </p>\n              </div>\n              <div id="item-1-2">\n                  <h6 class="fw-semibold">Item 1-2</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Tempore\n                      eius\n                      consectetur quae modi iste voluptatibus a quidem amet ea\n                      corporis neque\n                      non quasi nesciunt sunt numquam minima maiores eveniet\n                      ratione\n                      soluta\n                      temporibus, quam harum nostrum. Laudantium repellat, dolores\n                      blanditiis\n                      iusto tempora corrupti. Distinctio, nesciunt. Tenetur\n                      sapiente\n                      cumque,\n                      totam veniam repellat alias quasi, beatae eveniet quas eos,\n                      ea\n                      aperiam!\n                  </p>\n              </div>\n              <div id="item-2">\n                  <h6 class="fw-semibold">Item 2</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                      Eius,\n                      itaque\n                      debitis. Numquam facere sunt adipisci dolores ratione quo\n                      magni.\n                      Non,\n                      officiis minima deserunt consequatur, repellendus nihil\n                      laudantium\n                      aperiam laborum eaque animi maxime porro saepe nisi quos.\n                      Corporis hic\n                      tempore illo reiciendis autem, necessitatibus debitis sed\n                      molestias.</p>\n              </div>\n              <div id="item-3">\n                  <h6 class="fw-semibold">Item 3</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                      Fuga\n                      voluptate\n                      sequi exercitationem voluptatem, commodi dicta nostrum\n                      atque,\n                      praesentium consequatur eos at vero animi neque deleniti\n                      ipsa.\n                      Aliquid\n                      facere saepe pariatur porro nihil blanditiis recusandae\n                      dolor\n                      fuga?\n                      Iusto et omnis neque doloremque, cum modi officia facilis\n                      placeat\n                      repellendus obcaecati mollitia! Id aperiam officiis vitae.\n                      Fugit\n                      quo id\n                      veritatis commodi maiores numquam nostrum necessitatibus\n                      eaque,\n                      quia\n                      exercitationem distinctio ipsa eum, nihil atque perferendis\n                      dicta,\n                      mollitia sed dignissimos incidunt voluptas ab tempore\n                      laborum?\n                      Fugiat,\n                      deserunt. Harum, repellat praesentium! Fuga!</p>\n              </div>\n              <div id="item-3-1">\n                  <h6 class="fw-semibold">Item 3-1</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                      Numquam\n                      non\n                      deleniti saepe voluptate, est praesentium ducimus sapiente\n                      aut\n                      dignissimos voluptas blanditiis reiciendis earum accusantium\n                      id\n                      ex!</p>\n              </div>\n              <div id="item-3-2">\n                  <h6 class="fw-semibold">Item 3-2</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,\n                      est.\n                      Blanditiis cupiditate voluptate obcaecati eligendi iusto\n                      amet.\n                      Cupiditate laborum, itaque laboriosam culpa sunt eligendi.\n                  </p>\n              </div>\n          </div>\n      </div>\n  </div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(135, "div", 5)(136, "div", 6)(137, "div", 7)(138, "div", 8)(139, "div", 9);
        \u0275\u0275text(140, "List group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "div", 10)(142, "button", 11);
        \u0275\u0275text(143, " Show Code");
        \u0275\u0275element(144, "i", 65);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(145, "div", 13)(146, "div", 66)(147, "div", 5)(148, "div", 67)(149, "div", 68)(150, "a", 69);
        \u0275\u0275text(151, "Item 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "a", 70);
        \u0275\u0275text(153, "Item 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "a", 71);
        \u0275\u0275text(155, "Item 3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "a", 72);
        \u0275\u0275text(157, "Item 4");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(158, "div", 73)(159, "div", 74, 2)(161, "h6", 75);
        \u0275\u0275text(162, " Item 1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "p", 28);
        \u0275\u0275text(164, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "h6", 76);
        \u0275\u0275text(166, " Item 2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "p", 28);
        \u0275\u0275text(168, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "h6", 77);
        \u0275\u0275text(170, " Item 3 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "p", 28);
        \u0275\u0275text(172, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. fugiat numquam saepe incidunt perferendis. Aliquid, quas. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "h6", 78);
        \u0275\u0275text(174, " Item 4 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "p", 28);
        \u0275\u0275text(176, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(177, "div", 79)(178, "pre", 34)(179, "code", 34);
        \u0275\u0275text(180, '<div class="bd-example">\n      <div class="row">\n          <div class="col-md-2 col-12">\n              <div id="list-example" class="list-group">\n                  <a class="list-group-item list-group-item-action"\n                      href="#list-item-01">Item 1</a>\n                  <a class="list-group-item list-group-item-action"\n                      href="#list-item-02">Item\n                      2</a>\n                  <a class="list-group-item list-group-item-action"\n                      href="#list-item-03">Item\n                      3</a>\n                  <a class="list-group-item list-group-item-action"\n                      href="#list-item-04">Item\n                      4</a>\n              </div>\n          </div>\n          <div class="col-md-10 col-12">\n              <div data-bs-spy="scroll" data-bs-target="#list-example"\n                  data-bs-smooth-scroll="true" class="scrollspy-example-3"\n                  tabindex="0">\n                  <h6 class="fw-semibold" id="list-item-01">Item 1</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                      Vel,\n                      laborum\n                      reiciendis sunt officia doloribus, soluta ratione id\n                      reprehenderit\n                      autem\n                      temporibus cupiditate necessitatibus atque similique quam ex\n                      minus,\n                      sint\n                      ipsum deleniti sed assumenda fugiat numquam saepe incidunt\n                      perferendis.\n                      Aliquid, quas.</p>\n                  <h6 class="fw-semibold" id="list-item-02">Item 2</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                      Vel,\n                      laborum\n                      reiciendis sunt officia doloribus, soluta ratione id\n                      reprehenderit\n                      autem\n                      temporibus cupiditate necessitatibus atque similique quam ex\n                      minus,\n                      sint\n                      ipsum deleniti sed assumenda fugiat numquam saepe incidunt\n                      perferendis.\n                      Aliquid, quas.</p>\n                  <h6 class="fw-semibold" id="list-item-03">Item 3</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                      Vel,\n                      laborum\n                      reiciendis sunt officia doloribus, soluta ratione id\n                      reprehenderit\n                      autem\n                      temporibus cupiditate necessitatibus atque similique quam ex\n                      minus,\n                      sint\n                      ipsum deleniti sed assumenda fugiat numquam saepe incidunt\n                      perferendis.\n                      Aliquid, quas.</p>\n                  <h6 class="fw-semibold" id="list-item-04">Item 4</h6>\n                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                      Vel,\n                      laborum\n                      reiciendis sunt officia doloribus, soluta ratione id\n                      reprehenderit\n                      autem\n                      temporibus cupiditate necessitatibus atque similique quam ex\n                      minus,\n                      sint\n                      ipsum deleniti sed assumenda fugiat numquam saepe incidunt\n                      perferendis.\n                      Aliquid, quas.</p>\n              </div>\n          </div>\n      </div>\n  </div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(181, "div", 5)(182, "div", 6)(183, "div", 7)(184, "div", 8)(185, "div", 9);
        \u0275\u0275text(186, "Simple anchors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "div", 10)(188, "button", 11);
        \u0275\u0275text(189, " Show Code");
        \u0275\u0275element(190, "i", 80);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(191, "div", 81)(192, "div", 66)(193, "div", 5)(194, "div", 67)(195, "div", 82)(196, "a", 83);
        \u0275\u0275text(197, "Item 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "a", 84);
        \u0275\u0275text(199, "Item 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "a", 85);
        \u0275\u0275text(201, "Item 3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "a", 86);
        \u0275\u0275text(203, "Item 4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "a", 87);
        \u0275\u0275text(205, "Item 5");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(206, "div", 73)(207, "div", 88, 3)(209, "h6", 89);
        \u0275\u0275text(210, " Item 1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "p", 28);
        \u0275\u0275text(212, " This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "h6", 90);
        \u0275\u0275text(214, " Item 2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "p", 28);
        \u0275\u0275text(216, " This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "h6", 91);
        \u0275\u0275text(218, " Item 3 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "p", 28);
        \u0275\u0275text(220, " This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "h6", 92);
        \u0275\u0275text(222, " Item 4 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "p", 28);
        \u0275\u0275text(224, " This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "h6", 93);
        \u0275\u0275text(226, " Item 5 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(227, "p", 28);
        \u0275\u0275text(228, " This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(229, "div", 94)(230, "pre", 34)(231, "code", 34);
        \u0275\u0275text(232, `<div class="bd-example">
      <div class="row">
          <div class="col-md-2 col-12">
              <div id="simple-list-example"
                  class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
                  <a class="p-2 rounded" href="#simple-list-item-1">Item 1</a>
                  <a class="p-2 rounded" href="#simple-list-item-2">Item 2</a>
                  <a class="p-2 rounded" href="#simple-list-item-3">Item 3</a>
                  <a class="p-2 rounded" href="#simple-list-item-4">Item 4</a>
                  <a class="p-2 rounded" href="#simple-list-item-5">Item 5</a>
              </div>
          </div>
          <div class="col-md-10 col-12">
              <div data-bs-spy="scroll" data-bs-target="#simple-list-example"
                  data-bs-offset="0" data-bs-smooth-scroll="true"
                  class="scrollspy-example-4" tabindex="0">
                  <h6 class="fw-semibold" id="simple-list-item-1">Item 1</h6>
                  <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                      that as you scroll down the page, the appropriate navigation
                      link is highlighted. It's repeated throughout the component
                      example. We keep adding some more example copy here to
                      emphasize
                      the scrolling and highlighting.</p>
                  <h6 class="fw-semibold" id="simple-list-item-2">Item 2</h6>
                  <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                      that as you scroll down the page, the appropriate navigation
                      link is highlighted. It's repeated throughout the component
                      example. We keep adding some more example copy here to
                      emphasize
                      the scrolling and highlighting.</p>
                  <h6 class="fw-semibold" id="simple-list-item-3">Item 3</h6>
                  <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                      that as you scroll down the page, the appropriate navigation
                      link is highlighted. It's repeated throughout the component
                      example. We keep adding some more example copy here to
                      emphasize
                      the scrolling and highlighting.</p>
                  <h6 class="fw-semibold" id="simple-list-item-4">Item 4</h6>
                  <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                      that as you scroll down the page, the appropriate navigation
                      link is highlighted. It's repeated throughout the component
                      example. We keep adding some more example copy here to
                      emphasize
                      the scrolling and highlighting.</p>
                  <h6 class="fw-semibold" id="simple-list-item-5">Item 5</h6>
                  <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                      that as you scroll down the page, the appropriate navigation
                      link is highlighted. It's repeated throughout the component
                      example. We keep adding some more example copy here to
                      emphasize
                      the scrolling and highlighting.</p>
              </div>
          </div>
      </div>
  </div>`);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const s_r1 = \u0275\u0275reference(36);
        const spy_r2 = \u0275\u0275reference(94);
        const spy1_r3 = \u0275\u0275reference(160);
        const spy2_r4 = \u0275\u0275reference(208);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngbScrollSpyMenu", s_r1);
        \u0275\u0275advance(61);
        \u0275\u0275property("ngbScrollSpyMenu", spy_r2);
        \u0275\u0275advance(75);
        \u0275\u0275property("ngbScrollSpyMenu", spy1_r3);
        \u0275\u0275advance();
        \u0275\u0275property("ngbScrollSpyItem", \u0275\u0275pureFunction1(13, _c0, spy1_r3));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbScrollSpyItem", spy1_r3);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbScrollSpyItem", spy1_r3);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbScrollSpyItem", spy1_r3);
        \u0275\u0275advance(39);
        \u0275\u0275property("ngbScrollSpyMenu", spy2_r4);
        \u0275\u0275advance();
        \u0275\u0275property("ngbScrollSpyItem", \u0275\u0275pureFunction1(15, _c0, spy2_r4));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbScrollSpyItem", spy2_r4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbScrollSpyItem", spy2_r4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbScrollSpyItem", spy2_r4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbScrollSpyItem", spy2_r4);
      }
    }, dependencies: [NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu, SharedModule, PageHeaderComponent, AppShowCodeDirective, OverlayscrollbarsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrollspyComponent, { className: "ScrollspyComponent", filePath: "src\\app\\components\\advancedui\\scrollspy\\scrollspy.component.ts", lineNumber: 14 });
})();
export {
  ScrollspyComponent
};
//# sourceMappingURL=scrollspy.component-CHL6X4C7.js.map
