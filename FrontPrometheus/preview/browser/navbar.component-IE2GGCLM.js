import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbCollapse,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule,
  NgbOffcanvas,
  OffcanvasDismissReasons
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/advancedui/navbar/navbar.component.ts
function NavbarComponent_ng_template_598_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "h5", 120);
    \u0275\u0275text(2, " Offcanvas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 121);
    \u0275\u0275listener("click", function NavbarComponent_ng_template_598_Template_button_click_3_listener() {
      const offcanvas_r20 = \u0275\u0275restoreView(_r19).$implicit;
      return \u0275\u0275resetView(offcanvas_r20.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 122)(5, "ul", 123)(6, "li", 32)(7, "a", 124);
    \u0275\u0275text(8, " Home ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li", 32)(10, "a", 125);
    \u0275\u0275text(11, " Link ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 126)(13, "a", 127);
    \u0275\u0275text(14, " Dropdown ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul", 37)(16, "li")(17, "a", 38);
    \u0275\u0275text(18, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "a", 38);
    \u0275\u0275text(21, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275element(23, "hr", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "a", 38);
    \u0275\u0275text(26, "Something else here");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "form", 41);
    \u0275\u0275element(28, "input", 42);
    \u0275\u0275elementStart(29, "button", 43);
    \u0275\u0275text(30, " Search ");
    \u0275\u0275elementEnd()()();
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor(offcanvasService) {
    this.offcanvasService = offcanvasService;
    this.isCollapsed1 = true;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
    this.isCollapsed6 = true;
    this.isCollapsed7 = true;
    this.isCollapsed8 = true;
    this.isCollapsed9 = true;
    this.isCollapsed10 = true;
    this.isCollapsed11 = true;
    this.isCollapsed12 = true;
    this.isCollapsed13 = true;
    this.isCollapsed14 = true;
    this.isCollapsed15 = true;
    this.isCollapsed16 = true;
    this.closeResult = "";
  }
  open(content) {
    this.offcanvasService.open(content, { ariaLabelledBy: "offcanvas-basic-title" }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openRight(content) {
    this.offcanvasService.open(content, { position: "end" });
  }
  getDismissReason(reason) {
    if (reason === OffcanvasDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return "by clicking on the backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(NgbOffcanvas));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 600, vars: 32, consts: [["collapse", "ngbCollapse"], ["collapse13", "ngbCollapse"], ["collapse12", "ngbCollapse"], ["collapse11", "ngbCollapse"], ["collapse10", "ngbCollapse"], ["collapse9", "ngbCollapse"], ["collapse8", "ngbCollapse"], ["collapse7", "ngbCollapse"], ["collapse6", "ngbCollapse"], ["collapse5", "ngbCollapse"], ["collapse4", "ngbCollapse"], ["collapse3", "ngbCollapse"], ["collapse2", "ngbCollapse"], ["collapse16", "ngbCollapse"], ["collapse15", "ngbCollapse"], ["collapse14", "ngbCollapse"], ["content", ""], ["hassub", "", "sub", "Home", "title1", "Advanced Ui", "title", "Navbar", "activeTitle", "Navbar"], [1, "row"], [1, "col-xl-12"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "navbar", "navbar-expand-lg", "bg-light"], [1, "container-fluid"], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "navbar-brand"], ["src", "./assets/images/brand-logos/toggle-logo.png", "alt", "", 1, "d-inline-block", "align-text-top"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active"], ["href", "javascript:void(0);", 1, "nav-link"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "navbarDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "nav-link", "disabled"], ["role", "search", 1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], [1, "navbar", "bg-light", "mb-3"], ["src", "./assets/images/brand-logos/toggle-logo.png", "alt", ""], [1, "navbar", "bg-light"], [1, "navbar-brand", "mb-0", "h1"], ["href", "javascript:void(0);", 1, "navbar-brand", "text-default"], [1, "navbar", "navbar-expand-lg", "bg-light", "mb-3"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "navbar-nav"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], ["aria-label", "anchor", 1, "navbar-brand"], [1, "mb-3", "fw-semibold"], [1, "input-group"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "container-fluid", "justify-content-start"], ["type", "submit", 1, "btn", "btn-primary", "m-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "m-1"], [1, "navbar-text"], ["href", "javascript:void(0);", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarText", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "navbar", "navbar-expand-lg", "navbar-primary-transparent", "mb-3"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor01", "aria-controls", "navbarColor01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarColor01", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "navbar", "navbar-expand-lg", "navbar-secondary-transparent", "mb-3"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor02", "aria-controls", "navbarColor02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], ["type", "submit", 1, "btn", "btn-secondary"], [1, "navbar", "navbar-expand-lg", "navbar-dark-transparent"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor03", "aria-controls", "navbarColor03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarColor03", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], ["type", "submit", 1, "btn", "btn-dark"], [1, "navbar", "navbar-expand-lg", "navbar-primary", "mb-3"], ["src", "./assets/images/brand-logos/toggle-dark.png", "alt", ""], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor04", "aria-controls", "navbarColor04", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarColor04", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2", "border-0"], ["type", "submit", 1, "btn", "btn-light"], [1, "navbar", "navbar-expand-lg", "navbar-secondary", "mb-3"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor05", "aria-controls", "navbarColor05", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarColor05", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "navbar", "navbar-expand-lg", "navbar-dark"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarColor06", "aria-controls", "navbarColor06", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarColor06", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "container"], [1, "container-md"], [1, "navbar", "fixed-top", "bg-light"], [1, "'col-xl-12"], [1, "navbar", "fixed-bottom", "navbar-light", "bg-light"], [1, "navbar", "sticky-top", "navbar-light", "bg-light"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarScroll", "aria-controls", "navbarScroll", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarScroll", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "navbar-nav", "me-auto", "my-2", "my-lg-0", "navbar-nav-scroll", 2, "--bs-scroll-height", "100px"], ["href", "javascript:void(0);", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "d-flex", "mt-3"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "mb-3"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "d-flex"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], ["id", "navbarToggleExternalContent", 1, "collapse", 3, "ngbCollapseChange", "ngbCollapse"], [1, "bg-dark", "p-4"], [1, "text-white", "h4"], [1, "text-white", "op-7"], [1, "navbar", "navbar-dark", "bg-dark", "rounded-0"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarToggleExternalContent", "aria-controls", "navbarToggleExternalContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar", "bg-light", "fixed-top"], ["aria-label", "button", "type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbar", "aria-controls", "offcanvasNavbar", 1, "navbar-toggler", 3, "click"], ["tabindex", "-1", "id", "offcanvasNavbar", "aria-labelledby", "offcanvasNavbarLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "offcanvas-body"], [1, "navbar-nav", "justify-content-end", "flex-grow-1", "pe-3"], ["aria-current", "page", "href", "javascript:void(0);", 1, "nav-link", "active", "p-2"], ["href", "javascript:void(0);", 1, "nav-link", "p-2"], ["ngbDropdown", "", 1, "nav-item", "dropdown", "mb-3"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "navbarDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "p-2"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 17);
        \u0275\u0275elementStart(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "div", 22);
        \u0275\u0275text(6, "Navbar with sub-component");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 23)(8, "nav", 24)(9, "div", 25)(10, "a", 26);
        \u0275\u0275element(11, "img", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 28);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse_r2 = \u0275\u0275reference(15);
          return \u0275\u0275resetView(collapse_r2.toggle());
        });
        \u0275\u0275element(13, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 30, 0);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed1, $event) || (ctx.isCollapsed1 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(16, "ul", 31)(17, "li", 32)(18, "a", 33);
        \u0275\u0275text(19, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "li", 32)(21, "a", 34);
        \u0275\u0275text(22, "Link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li", 35)(24, "a", 36);
        \u0275\u0275text(25, " Dropdown ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "ul", 37)(27, "li")(28, "a", 38);
        \u0275\u0275text(29, "Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li")(31, "a", 38);
        \u0275\u0275text(32, "Another action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "li");
        \u0275\u0275element(34, "hr", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "li")(36, "a", 38);
        \u0275\u0275text(37, "Something else here");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "li", 32)(39, "a", 40);
        \u0275\u0275text(40, "Disabled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "form", 41);
        \u0275\u0275element(42, "input", 42);
        \u0275\u0275elementStart(43, "button", 43);
        \u0275\u0275text(44, "Search");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(45, "div", 18)(46, "div", 19)(47, "div", 20)(48, "div", 21)(49, "div", 22);
        \u0275\u0275text(50, "Brand With And Without Links");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 23)(52, "nav", 44)(53, "div", 25)(54, "a", 26);
        \u0275\u0275element(55, "img", 45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "nav", 46)(57, "div", 25)(58, "span", 47);
        \u0275\u0275element(59, "img", 45);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(60, "div", 18)(61, "div", 19)(62, "div", 20)(63, "div", 21)(64, "div", 22);
        \u0275\u0275text(65, "Image and text");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 23)(67, "nav", 46)(68, "div", 25)(69, "a", 48);
        \u0275\u0275element(70, "img", 27);
        \u0275\u0275text(71, " Bootstrap ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(72, "div", 18)(73, "div", 19)(74, "div", 20)(75, "div", 21)(76, "div", 22);
        \u0275\u0275text(77, "Nav with lists, links and dropdowns");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 23)(79, "nav", 49)(80, "div", 25)(81, "a", 26);
        \u0275\u0275element(82, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "button", 50);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_83_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse13_r3 = \u0275\u0275reference(86);
          return \u0275\u0275resetView(collapse13_r3.toggle());
        });
        \u0275\u0275element(84, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 51, 1);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_85_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed14, $event) || (ctx.isCollapsed14 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(87, "ul", 52)(88, "li", 32)(89, "a", 33);
        \u0275\u0275text(90, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "li", 32)(92, "a", 34);
        \u0275\u0275text(93, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "li", 32)(95, "a", 34);
        \u0275\u0275text(96, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "li", 32)(98, "a", 40);
        \u0275\u0275text(99, "Disabled");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(100, "nav", 49)(101, "div", 25)(102, "a", 26);
        \u0275\u0275element(103, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "button", 53);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_104_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse12_r4 = \u0275\u0275reference(107);
          return \u0275\u0275resetView(collapse12_r4.toggle());
        });
        \u0275\u0275element(105, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 54, 2);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_106_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed13, $event) || (ctx.isCollapsed13 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(108, "div", 52)(109, "a", 33);
        \u0275\u0275text(110, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "a", 34);
        \u0275\u0275text(112, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "a", 34);
        \u0275\u0275text(114, "Pricing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "a", 40);
        \u0275\u0275text(116, "Disabled");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(117, "nav", 24)(118, "div", 25)(119, "a", 26);
        \u0275\u0275element(120, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "button", 55);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_121_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse11_r5 = \u0275\u0275reference(124);
          return \u0275\u0275resetView(collapse11_r5.toggle());
        });
        \u0275\u0275element(122, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 56, 3);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_123_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed12, $event) || (ctx.isCollapsed12 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(125, "ul", 52)(126, "li", 32)(127, "a", 33);
        \u0275\u0275text(128, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "li", 32)(130, "a", 34);
        \u0275\u0275text(131, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "li", 32)(133, "a", 34);
        \u0275\u0275text(134, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "li", 35)(136, "a", 36);
        \u0275\u0275text(137, " Dropdown ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "ul", 37)(139, "li")(140, "a", 38);
        \u0275\u0275text(141, "Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "li")(143, "a", 38);
        \u0275\u0275text(144, "Another action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "li");
        \u0275\u0275element(146, "hr", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "li")(148, "a", 38);
        \u0275\u0275text(149, "Something else here");
        \u0275\u0275elementEnd()()()()()()()()()()()();
        \u0275\u0275elementStart(150, "div", 18)(151, "div", 19)(152, "div", 20)(153, "div", 21)(154, "div", 22);
        \u0275\u0275text(155, "Forms In Navbar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "div", 23)(157, "nav", 44)(158, "div", 25)(159, "form", 41);
        \u0275\u0275element(160, "input", 42);
        \u0275\u0275elementStart(161, "button", 43);
        \u0275\u0275text(162, "Search");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(163, "nav", 44)(164, "div", 25)(165, "a", 57);
        \u0275\u0275element(166, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "form", 41);
        \u0275\u0275element(168, "input", 42);
        \u0275\u0275elementStart(169, "button", 43);
        \u0275\u0275text(170, "Search");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(171, "h6", 58);
        \u0275\u0275text(172, "Input groups in navbar forms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "nav", 44)(174, "div", 25)(175, "div", 59)(176, "span", 60);
        \u0275\u0275text(177, "@");
        \u0275\u0275elementEnd();
        \u0275\u0275element(178, "input", 61);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(179, "h6", 58);
        \u0275\u0275text(180, " Variation buttons are supported as part of the navbar forms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "nav", 46)(182, "form", 62)(183, "button", 63);
        \u0275\u0275text(184, " Main button ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "button", 64);
        \u0275\u0275text(186, " Smaller button ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(187, "div", 18)(188, "div", 19)(189, "div", 20)(190, "div", 21)(191, "div", 22);
        \u0275\u0275text(192, "Navbar With Text");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(193, "div", 23)(194, "nav", 44)(195, "div", 25)(196, "span", 65);
        \u0275\u0275text(197, " Navbar text with an inline element ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(198, "nav", 24)(199, "div", 25)(200, "a", 66);
        \u0275\u0275text(201, "Navbar with text");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "button", 67);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_202_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse10_r6 = \u0275\u0275reference(205);
          return \u0275\u0275resetView(collapse10_r6.toggle());
        });
        \u0275\u0275element(203, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "div", 68, 4);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_204_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed11, $event) || (ctx.isCollapsed11 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(206, "ul", 31)(207, "li", 32)(208, "a", 33);
        \u0275\u0275text(209, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(210, "li", 32)(211, "a", 34);
        \u0275\u0275text(212, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(213, "li", 32)(214, "a", 34);
        \u0275\u0275text(215, "Pricing");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(216, "span", 65);
        \u0275\u0275text(217, " Navbar text with an inline element ");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(218, "div", 18)(219, "div", 19)(220, "div", 20)(221, "div", 21)(222, "div", 22);
        \u0275\u0275text(223, "Transparent Color Schemes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(224, "div", 23)(225, "nav", 69)(226, "div", 25)(227, "a", 26);
        \u0275\u0275element(228, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "button", 70);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_229_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse9_r7 = \u0275\u0275reference(232);
          return \u0275\u0275resetView(collapse9_r7.toggle());
        });
        \u0275\u0275element(230, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "div", 71, 5);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_231_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed10, $event) || (ctx.isCollapsed10 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(233, "ul", 31)(234, "li", 32)(235, "a", 33);
        \u0275\u0275text(236, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(237, "li", 32)(238, "a", 34);
        \u0275\u0275text(239, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(240, "li", 32)(241, "a", 34);
        \u0275\u0275text(242, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(243, "li", 32)(244, "a", 34);
        \u0275\u0275text(245, "About");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(246, "form", 41);
        \u0275\u0275element(247, "input", 42);
        \u0275\u0275elementStart(248, "button", 43);
        \u0275\u0275text(249, "Search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(250, "nav", 72)(251, "div", 25)(252, "a", 26);
        \u0275\u0275element(253, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "button", 73);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_254_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse8_r8 = \u0275\u0275reference(257);
          return \u0275\u0275resetView(collapse8_r8.toggle());
        });
        \u0275\u0275element(255, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "div", 74, 6);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_256_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed9, $event) || (ctx.isCollapsed9 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(258, "ul", 31)(259, "li", 32)(260, "a", 33);
        \u0275\u0275text(261, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(262, "li", 32)(263, "a", 34);
        \u0275\u0275text(264, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "li", 32)(266, "a", 34);
        \u0275\u0275text(267, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(268, "li", 32)(269, "a", 34);
        \u0275\u0275text(270, "About");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(271, "form", 41);
        \u0275\u0275element(272, "input", 42);
        \u0275\u0275elementStart(273, "button", 75);
        \u0275\u0275text(274, "Search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(275, "nav", 76)(276, "div", 25)(277, "a", 26);
        \u0275\u0275element(278, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "button", 77);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_279_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse7_r9 = \u0275\u0275reference(282);
          return \u0275\u0275resetView(collapse7_r9.toggle());
        });
        \u0275\u0275element(280, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "div", 78, 7);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_281_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed8, $event) || (ctx.isCollapsed8 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(283, "ul", 31)(284, "li", 32)(285, "a", 33);
        \u0275\u0275text(286, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(287, "li", 32)(288, "a", 34);
        \u0275\u0275text(289, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(290, "li", 32)(291, "a", 34);
        \u0275\u0275text(292, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(293, "li", 32)(294, "a", 34);
        \u0275\u0275text(295, "About");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(296, "form", 41);
        \u0275\u0275element(297, "input", 42);
        \u0275\u0275elementStart(298, "button", 79);
        \u0275\u0275text(299, "Search");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(300, "div", 19)(301, "div", 20)(302, "div", 21)(303, "div", 22);
        \u0275\u0275text(304, "Solid Color Schemes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(305, "div", 23)(306, "nav", 80)(307, "div", 25)(308, "a", 26);
        \u0275\u0275element(309, "img", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(310, "button", 82);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_310_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse6_r10 = \u0275\u0275reference(313);
          return \u0275\u0275resetView(collapse6_r10.toggle());
        });
        \u0275\u0275element(311, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "div", 83, 8);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_312_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed7, $event) || (ctx.isCollapsed7 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(314, "ul", 31)(315, "li", 32)(316, "a", 33);
        \u0275\u0275text(317, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(318, "li", 32)(319, "a", 34);
        \u0275\u0275text(320, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(321, "li", 32)(322, "a", 34);
        \u0275\u0275text(323, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(324, "li", 32)(325, "a", 34);
        \u0275\u0275text(326, "About");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(327, "form", 41);
        \u0275\u0275element(328, "input", 84);
        \u0275\u0275elementStart(329, "button", 85);
        \u0275\u0275text(330, "Search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(331, "nav", 86)(332, "div", 25)(333, "a", 26);
        \u0275\u0275element(334, "img", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "button", 87);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_335_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse5_r11 = \u0275\u0275reference(338);
          return \u0275\u0275resetView(collapse5_r11.toggle());
        });
        \u0275\u0275element(336, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(337, "div", 88, 9);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_337_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed6, $event) || (ctx.isCollapsed6 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(339, "ul", 31)(340, "li", 32)(341, "a", 33);
        \u0275\u0275text(342, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(343, "li", 32)(344, "a", 34);
        \u0275\u0275text(345, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(346, "li", 32)(347, "a", 34);
        \u0275\u0275text(348, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(349, "li", 32)(350, "a", 34);
        \u0275\u0275text(351, "About");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(352, "form", 41);
        \u0275\u0275element(353, "input", 84);
        \u0275\u0275elementStart(354, "button", 85);
        \u0275\u0275text(355, "Search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(356, "nav", 89)(357, "div", 25)(358, "a", 26);
        \u0275\u0275element(359, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(360, "button", 90);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_360_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse4_r12 = \u0275\u0275reference(363);
          return \u0275\u0275resetView(collapse4_r12.toggle());
        });
        \u0275\u0275element(361, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(362, "div", 91, 10);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_362_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed5, $event) || (ctx.isCollapsed5 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(364, "ul", 31)(365, "li", 32)(366, "a", 33);
        \u0275\u0275text(367, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(368, "li", 32)(369, "a", 34);
        \u0275\u0275text(370, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(371, "li", 32)(372, "a", 34);
        \u0275\u0275text(373, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(374, "li", 32)(375, "a", 34);
        \u0275\u0275text(376, "About");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(377, "form", 41);
        \u0275\u0275element(378, "input", 84);
        \u0275\u0275elementStart(379, "button", 85);
        \u0275\u0275text(380, "Search");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(381, "div", 18)(382, "div", 19)(383, "div", 20)(384, "div", 21)(385, "div", 22);
        \u0275\u0275text(386, "Containers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(387, "div", 23)(388, "h6");
        \u0275\u0275text(389, "Too center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(390, "div", 92)(391, "nav", 49)(392, "div", 25)(393, "a", 66);
        \u0275\u0275text(394, "Navbar");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(395, "h6");
        \u0275\u0275text(396, "Change the responsive container to how to wide the content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(397, "nav", 24)(398, "div", 93)(399, "a", 66);
        \u0275\u0275text(400, "Navbar");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(401, "div", 18)(402, "div", 19)(403, "div", 20)(404, "div", 21)(405, "div", 22);
        \u0275\u0275text(406, "Placement");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(407, "div", 23)(408, "nav", 46)(409, "div", 25)(410, "a", 66);
        \u0275\u0275text(411, "Default");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(412, "div", 18)(413, "div", 19)(414, "div", 20)(415, "div", 21)(416, "div", 22);
        \u0275\u0275text(417, "Placement");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(418, "div", 23)(419, "nav", 94)(420, "div", 25)(421, "a", 66);
        \u0275\u0275text(422, "Fixed top");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(423, "div", 18)(424, "div", 95)(425, "div", 20)(426, "div", 21)(427, "div", 22);
        \u0275\u0275text(428, "Placement");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(429, "div", 23)(430, "nav", 96)(431, "div", 25)(432, "a", 66);
        \u0275\u0275text(433, "Fixed bottom");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(434, "div", 18)(435, "div", 19)(436, "div", 20)(437, "div", 21)(438, "div", 22);
        \u0275\u0275text(439, "Placement");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(440, "div", 23)(441, "nav", 97)(442, "div", 25)(443, "a", 66);
        \u0275\u0275text(444, "Sticky top");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(445, "div", 18)(446, "div", 19)(447, "div", 20)(448, "div", 21)(449, "div", 22);
        \u0275\u0275text(450, "Scrolling");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(451, "div", 23)(452, "nav", 98)(453, "div", 25)(454, "a", 66);
        \u0275\u0275text(455, "Navbar scroll");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(456, "button", 99);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_456_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse3_r13 = \u0275\u0275reference(459);
          return \u0275\u0275resetView(collapse3_r13.toggle());
        });
        \u0275\u0275element(457, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(458, "div", 100, 11);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_458_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed4, $event) || (ctx.isCollapsed4 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(460, "ul", 101)(461, "li", 32)(462, "a", 33);
        \u0275\u0275text(463, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(464, "li", 32)(465, "a", 34);
        \u0275\u0275text(466, "Link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(467, "li", 35)(468, "a", 36);
        \u0275\u0275text(469, " Dropdown ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(470, "ul", 37)(471, "li")(472, "a", 38);
        \u0275\u0275text(473, "Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(474, "li")(475, "a", 38);
        \u0275\u0275text(476, "Another action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(477, "li");
        \u0275\u0275element(478, "hr", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(479, "li")(480, "a", 38);
        \u0275\u0275text(481, "Something else here");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(482, "li", 32)(483, "a", 102);
        \u0275\u0275text(484, "Link");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(485, "form", 103);
        \u0275\u0275element(486, "input", 42);
        \u0275\u0275elementStart(487, "button", 43);
        \u0275\u0275text(488, "Search");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(489, "div", 18)(490, "div", 19)(491, "div", 20)(492, "div", 21)(493, "div", 22);
        \u0275\u0275text(494, "Responsive behaviors Toggler");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(495, "div", 23)(496, "nav", 104)(497, "div", 25)(498, "button", 105);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_498_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse2_r14 = \u0275\u0275reference(501);
          return \u0275\u0275resetView(collapse2_r14.toggle());
        });
        \u0275\u0275element(499, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(500, "div", 106, 12);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_500_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed3, $event) || (ctx.isCollapsed3 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(502, "a", 48);
        \u0275\u0275text(503, "Hidden brand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(504, "ul", 31)(505, "li", 32)(506, "a", 33);
        \u0275\u0275text(507, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(508, "li", 32)(509, "a", 34);
        \u0275\u0275text(510, "Link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(511, "li", 32)(512, "a", 102);
        \u0275\u0275text(513, "Disabled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(514, "form", 107);
        \u0275\u0275element(515, "input", 42);
        \u0275\u0275elementStart(516, "button", 43);
        \u0275\u0275text(517, "Search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(518, "h6");
        \u0275\u0275text(519, "With a brand name shown on the left and toggler on the right:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(520, "nav", 104)(521, "div", 25)(522, "a", 48);
        \u0275\u0275text(523, "Navbar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(524, "button", 105);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_524_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse16_r15 = \u0275\u0275reference(527);
          return \u0275\u0275resetView(collapse16_r15.toggle());
        });
        \u0275\u0275element(525, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(526, "div", 106, 13);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_526_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed16, $event) || (ctx.isCollapsed16 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(528, "ul", 31)(529, "li", 32)(530, "a", 33);
        \u0275\u0275text(531, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(532, "li", 32)(533, "a", 34);
        \u0275\u0275text(534, "Link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(535, "li", 32)(536, "a", 102);
        \u0275\u0275text(537, "Disabled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(538, "form", 107);
        \u0275\u0275element(539, "input", 42);
        \u0275\u0275elementStart(540, "button", 43);
        \u0275\u0275text(541, "Search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(542, "h6");
        \u0275\u0275text(543, "With a toggler on the left and brand name on the right:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(544, "nav", 98)(545, "div", 25)(546, "button", 108);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_546_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse15_r16 = \u0275\u0275reference(551);
          return \u0275\u0275resetView(collapse15_r16.toggle());
        });
        \u0275\u0275element(547, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(548, "a", 48);
        \u0275\u0275text(549, "Navbar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(550, "div", 109, 14);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_550_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed15, $event) || (ctx.isCollapsed15 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(552, "ul", 31)(553, "li", 32)(554, "a", 33);
        \u0275\u0275text(555, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(556, "li", 32)(557, "a", 34);
        \u0275\u0275text(558, "Link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(559, "li", 32)(560, "a", 102);
        \u0275\u0275text(561, "Disabled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(562, "form", 107);
        \u0275\u0275element(563, "input", 42);
        \u0275\u0275elementStart(564, "button", 43);
        \u0275\u0275text(565, "Search");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(566, "div", 18)(567, "div", 19)(568, "div", 20)(569, "div", 21)(570, "div", 22);
        \u0275\u0275text(571, "External content");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(572, "div", 23)(573, "div", 110, 15);
        \u0275\u0275twoWayListener("ngbCollapseChange", function NavbarComponent_Template_div_ngbCollapseChange_573_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isCollapsed14, $event) || (ctx.isCollapsed14 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(575, "div", 111)(576, "h5", 112);
        \u0275\u0275text(577, "Collapsed content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(578, "span", 113);
        \u0275\u0275text(579, "Toggleable via the navbar brand.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(580, "nav", 114)(581, "div", 25)(582, "button", 115);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_582_listener() {
          \u0275\u0275restoreView(_r1);
          const collapse14_r17 = \u0275\u0275reference(574);
          return \u0275\u0275resetView(collapse14_r17.toggle());
        });
        \u0275\u0275element(583, "span", 29);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(584, "div", 18)(585, "div", 19)(586, "div", 20)(587, "div", 21)(588, "div", 22);
        \u0275\u0275text(589, "Offcanvas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(590, "div", 23)(591, "nav", 116)(592, "div", 25)(593, "a", 66);
        \u0275\u0275text(594, "Offcanvas navbar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(595, "button", 117);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_595_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r18 = \u0275\u0275reference(599);
          return \u0275\u0275resetView(ctx.openRight(content_r18));
        });
        \u0275\u0275element(596, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(597, "div", 118);
        \u0275\u0275template(598, NavbarComponent_ng_template_598_Template, 31, 0, "ng-template", null, 16, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed1);
        \u0275\u0275advance(69);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed14);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed14);
        \u0275\u0275advance(19);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed13);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed13);
        \u0275\u0275advance(15);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed12);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed12);
        \u0275\u0275advance(79);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed11);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed11);
        \u0275\u0275advance(25);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed10);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed10);
        \u0275\u0275advance(23);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed9);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed9);
        \u0275\u0275advance(23);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed8);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed8);
        \u0275\u0275advance(29);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed7);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed7);
        \u0275\u0275advance(23);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed6);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed6);
        \u0275\u0275advance(23);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed5);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed5);
        \u0275\u0275advance(94);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed4);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed4);
        \u0275\u0275advance(40);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed3);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed3);
        \u0275\u0275advance(24);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed16);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed16);
        \u0275\u0275advance(20);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed15);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed15);
        \u0275\u0275advance(23);
        \u0275\u0275twoWayProperty("ngbCollapse", ctx.isCollapsed14);
        \u0275\u0275advance(9);
        \u0275\u0275attribute("aria-expanded", !ctx.isCollapsed14);
      }
    }, dependencies: [NgbModule, NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, SharedModule, PageHeaderComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\advancedui\\navbar\\navbar.component.ts", lineNumber: 11 });
})();
export {
  NavbarComponent
};
//# sourceMappingURL=navbar.component-IE2GGCLM.js.map
