import {
  OverlayScrollbarsComponent,
  OverlayscrollbarsModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  NgbTooltip
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/chat/chat-01/chat-01.component.ts
function Chat01Component_ng_template_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 67)(1, "a", 68);
    \u0275\u0275listener("click", function Chat01Component_ng_template_10_For_3_Template_a_click_1_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.handleClick(data_r3));
    });
    \u0275\u0275elementStart(2, "div", 69);
    \u0275\u0275element(3, "img", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 71)(5, "div", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 74);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("src", data_r3.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r3.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.message, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.time, "");
  }
}
function Chat01Component_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "overlay-scrollbars", 65)(1, "ul", 66);
    \u0275\u0275repeaterCreate(2, Chat01Component_ng_template_10_For_3_Template, 11, 4, "li", 67, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.ChatData);
  }
}
function Chat01Component_ng_template_14_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 77)(1, "a", 78);
    \u0275\u0275listener("click", function Chat01Component_ng_template_14_For_3_Template_a_click_1_listener() {
      const data1_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.handleClick(data1_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 69);
    \u0275\u0275element(3, "img", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 71)(5, "div", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 79)(10, "a", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 20);
    \u0275\u0275element(12, "path", 21)(13, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "ul", 42)(15, "li")(16, "a", 44);
    \u0275\u0275text(17, "Call");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 44);
    \u0275\u0275text(20, "Videocall");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "a", 44);
    \u0275\u0275text(23, "New Message");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "a", 44);
    \u0275\u0275text(26, "Settings");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data1_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("src", data1_r6.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data1_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data1_r6.mail);
  }
}
function Chat01Component_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "overlay-scrollbars", 75)(1, "ul", 76);
    \u0275\u0275repeaterCreate(2, Chat01Component_ng_template_14_For_3_Template, 27, 3, "li", 77, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.ContatctData);
  }
}
var Chat01Component = class _Chat01Component {
  constructor() {
    this.active = 1;
    this.ChatData = [
      {
        src: "./assets/images/faces/5.jpg",
        name: "Davil Parnell",
        message: "Fierent fastidii recteque ad pro",
        time: "2 mins"
      },
      {
        src: "./assets/images/faces/2.jpg",
        name: "Ann Watkinson",
        message: "Cum sociis natoque penatibus",
        time: "10 mins"
      },
      {
        src: "./assets/images/faces/7.jpg",
        name: "Marse Walter",
        message: "Suspendisse sapien ligula",
        time: "15 mins"
      },
      {
        src: "./assets/images/faces/3.jpg",
        name: "Jeremy Robbins",
        message: "Phasellus porttitor tellus nec",
        time: "30 mins"
      },
      {
        src: "./assets/images/faces/9.jpg",
        name: "Reginald Horace",
        message: "Quisque consequat arcu eget",
        time: "50 mins"
      },
      {
        src: "./assets/images/faces/6.jpg",
        name: "Shark Henry",
        message: "Nam lobortis odio et leo maximu",
        time: "1 day"
      },
      {
        src: "./assets/images/faces/7.jpg",
        name: "Paul Van Dack",
        message: "Nam posuere purus sed velit auctor sodales",
        time: "2 day"
      },
      {
        src: "./assets/images/faces/5.jpg",
        name: "James Anderson",
        message: "Vivamus imperdietsag",
        time: "2 day "
      }
    ];
    this.ContatctData = [
      {
        src: "./assets/images/faces/5.jpg",
        name: "Davil Parnell",
        mail: "davilparnell@gmail.com"
      },
      {
        src: "./assets/images/faces/2.jpg",
        name: "Ann Watkinson",
        mail: "annwatkinso@gmail.com"
      },
      {
        src: "./assets/images/faces/7.jpg",
        name: "Marse Walter",
        mail: "marsewalter@gmail.com"
      },
      {
        src: "./assets/images/faces/3.jpg",
        name: "Jeremy Robbins",
        mail: "jeremyrobbins@gmail.com"
      },
      {
        src: "./assets/images/faces/9.jpg",
        name: "Reginald Horace",
        mail: "reginaldhorace@gmail.com"
      },
      {
        src: "./assets/images/faces/6.jpg",
        name: "Shark Henry",
        mail: "sharkhenry@gmail.com"
      },
      {
        src: "./assets/images/faces/7.jpg",
        name: "Paul Van Dack",
        mail: "paulvandack@gmail.com"
      },
      {
        src: "./assets/images/faces/5.jpg",
        name: "James Anderson",
        mail: "jamesanderson@gmail.com"
      }
    ];
    this.activeUser = this.ChatData[0];
  }
  handleClick(activeUser) {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector(".main-chart-wrapper")?.classList.add("responsive-chat-open");
    }
  }
  removeChat() {
    document.querySelector(".main-chart-wrapper")?.classList.remove("responsive-chat-open");
  }
  static {
    this.\u0275fac = function Chat01Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Chat01Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Chat01Component, selectors: [["app-chat-01"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 135, vars: 9, consts: [["nav", "ngbNav"], ["hassub", "apps", "sub", "", "title1", "Chat", "title", "Chat", "activeTitle", "Chat"], [1, "row"], [1, "col-md-12"], ["id", "chat-1", 1, "card", "overflow-hidden", "bg-transparent", "main-chart-wrapper", "d-lg-flex", "flex-row", "responsive-chat-open"], [1, "chat-info", "border-end"], ["ngbNav", "", "id", "myTab1", "role", "tablist", 1, "nav", "nav-tabs", "mb-0", "nav-justified", "d-sm-flex", "d-block", "border-bottom-0", 3, "activeIdChange", "activeId"], ["role", "presentation", 1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "id", "users-tab", "data-bs-toggle", "tab", "data-bs-target", "#users-tab-pane", "href", "javascript:void(0);", "role", "tab", "aria-controls", "users-tab-pane", "aria-selected", "true", 1, "nav-link"], ["ngbNavContent", ""], ["ngbNavLink", "", "id", "groups-tab", "data-bs-toggle", "tab", "data-bs-target", "#groups-tab-pane", "href", "javascript:void(0);", "role", "tab", "aria-controls", "groups-tab-pane", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content", 3, "ngbNavOutlet"], [1, "main-chat-area"], [1, "action-header", "d-sm-flex", "clearfix"], [1, "d-flex", "chat-user"], ["alt", "", 1, "chatimageperson", "avatar", "avatar-md", "avatar-rounded", "me-2", 3, "src"], [1, "align-items-center", "mt-2"], [1, "fw-bold", "chatnameperson", "responsive-userinfo-open"], [1, "ah-actions", "d-flex", "gap-3", "align-items-center", "list-unstyled", "ms-auto", "my-auto"], ["aria-label", "anchor", "placement", "top", "ngbTooltip", "Call", "href", "javascript:void(0);"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z", "opacity", ".3"], ["d", "M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59L5.79 8.8z"], ["aria-label", "anchor", "placement", "top", "href", "javascript:void(0);", "ngbTooltip", "Archive"], ["d", "M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z", "opacity", ".3"], ["d", "M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"], ["aria-label", "anchor", "placement", "top", "href", "javascript:void(0);", "ngbTooltip", "Trash"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"], ["aria-label", "anchor", "placement", "top", "href", "javascript:void(0);", "ngbTooltip", "View Info"], ["d", "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z", "opacity", ".3"], ["d", "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"], [1, "responsive-chat-close"], ["aria-label", "anchor", "href", "javascript:void(0);", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none", "opacity", ".87"], ["d", "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z", "opacity", ".3"], ["d", "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"], ["ngbDropdown", "", 1, "dropdown"], ["ngbDropdownToggle", "", "aria-label", "anchor", "data-bs-toggle", "dropdown", "href", "javascript:void(0);", 1, "py-4", "no-caret"], ["d", "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item"], ["href", "javascript:void(0);"], ["id", "main-chat-content", 1, "chat-content", 3, "defer"], [1, "list-unstyled", "mb-5"], [1, "chat-item-start"], [1, "chat-list-inner"], [1, "chat-user-profile"], [1, "avatar", "avatar-md", "avatar-rounded", "chatstatusperson"], ["alt", "img", 1, "chatimageperson", 3, "src"], [1, "ms-3"], [1, "main-chat-msg"], [1, "d-block", "text-muted", "mt-2"], [1, "fa", "fa-clock-o"], [1, "chat-item-end"], [1, "me-3"], [1, "avatar", "avatar-md", "avatar-rounded"], ["src", "./assets/images/faces/5.jpg", "alt", "img"], [1, "chat-footer", "h-auto", "px-0"], ["placeholder", "What's on your mind..."], ["aria-label", "button", "type", "button"], ["d", "M4 8.25l7.51 1-7.5-3.22zm.01 9.72l7.5-3.22-7.51 1z", "opacity", ".3"], ["d", "M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z"], ["id", "users-tab-pane", "role", "tabpanel", "aria-labelledby", "users-tab", "tabindex", "0", 1, "fade", "show", "active", "border-top-0", "chat-users-tab", 3, "defer"], ["id", "ChatList", 1, "list-group", "lg-alt", "chat-conatct-list"], [1, "list-group-item", "p-3", "border-bottom", "border-0", "mt-0", "checkforactive"], ["href", "javascript:void(0);", 1, "media", 3, "click"], [1, "pe-2", "my-auto"], ["alt", "", 1, "avatar", "avatar-md", "avatar-rounded", 3, "src"], [1, "media-body"], [1, "list-group-item-heading", "text-default", "fw-semibold"], [1, "list-group-item-text", "text-muted"], [1, "chat-time", "text-muted"], ["id", "groups-tab-pane", "role", "tabpanel", "aria-labelledby", "groups-tab", "tabindex", "0", 1, "fade", "show", "chat-groups-tab", "border-top-0", 3, "defer"], ["id", "ChatList2", 1, "list-group", "lg-alt", "chat-conatct-list"], [1, "list-group-item", "media", "p-3", "border-top", "border-0", "mt-0"], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "anchor-link", 3, "click"], ["ngbDropdown", "", 1, "ms-auto"], ["ngbDropdownToggle", "", "aria-label", "anchor", "data-bs-toggle", "dropdown", "href", "javascript:void(0);", 1, "option-dots", "no-caret"]], template: function Chat01Component_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "ul", 6, 0);
        \u0275\u0275twoWayListener("activeIdChange", function Chat01Component_Template_ul_activeIdChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(7, "li", 7)(8, "a", 8);
        \u0275\u0275text(9, "Chat");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, Chat01Component_ng_template_10_Template, 4, 0, "ng-template", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "li", 7)(12, "a", 10);
        \u0275\u0275text(13, "Contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, Chat01Component_ng_template_14_Template, 4, 0, "ng-template", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(15, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "div", 14);
        \u0275\u0275element(19, "img", 15);
        \u0275\u0275elementStart(20, "div", 16)(21, "span", 17);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "ul", 18)(24, "li")(25, "a", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 20);
        \u0275\u0275element(27, "path", 21)(28, "path", 22)(29, "path", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "li")(31, "a", 24);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 20);
        \u0275\u0275element(33, "path", 21)(34, "path", 25)(35, "path", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "li")(37, "a", 27);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 20);
        \u0275\u0275element(39, "path", 21)(40, "path", 28)(41, "path", 29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(42, "li")(43, "a", 30);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 20);
        \u0275\u0275element(45, "path", 21)(46, "path", 31)(47, "path", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "li", 33)(49, "a", 34);
        \u0275\u0275listener("click", function Chat01Component_Template_a_click_49_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.removeChat());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(50, "svg", 35);
        \u0275\u0275element(51, "path", 36)(52, "path", 37)(53, "path", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "li", 39)(55, "a", 40);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(56, "svg", 20);
        \u0275\u0275element(57, "path", 21)(58, "path", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(59, "ul", 42)(60, "li", 43)(61, "a", 44);
        \u0275\u0275text(62, "Refresh");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "li", 43)(64, "a", 44);
        \u0275\u0275text(65, "Message Settings");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(66, "overlay-scrollbars", 45)(67, "ul", 46)(68, "li", 47)(69, "div", 48)(70, "div", 49)(71, "span", 50);
        \u0275\u0275element(72, "img", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 52)(74, "div", 53)(75, "div");
        \u0275\u0275text(76, " Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "small", 54);
        \u0275\u0275element(78, "i", 55);
        \u0275\u0275text(79, " 20/05/2020 at 09:00");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(80, "li", 56)(81, "div", 48)(82, "div", 57)(83, "div", 53)(84, "div");
        \u0275\u0275text(85, " Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "small", 54);
        \u0275\u0275element(87, "i", 55);
        \u0275\u0275text(88, " 20/05/2020 at 09:30");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 49)(90, "span", 58);
        \u0275\u0275element(91, "img", 59);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(92, "li", 47)(93, "div", 48)(94, "div", 49)(95, "span", 50);
        \u0275\u0275element(96, "img", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 52)(98, "div", 53)(99, "div");
        \u0275\u0275text(100, " Etiam ex arcumentum ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "small", 54);
        \u0275\u0275element(102, "i", 55);
        \u0275\u0275text(103, " 20/05/2020 at 09:30");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(104, "li", 56)(105, "div", 48)(106, "div", 57)(107, "div", 53)(108, "div");
        \u0275\u0275text(109, " Etiam nec facilisis lacus. Nulla imperdiet augue ullamcorper dui ullamcorper, eu laoreet sem consectetur. Aenean et ligula risus. Praesent sed posuere sem. Cum sociis natoque penatibus et magnis dis parturient montes, ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "small", 54);
        \u0275\u0275element(111, "i", 55);
        \u0275\u0275text(112, " 20/05/2020 at 10:10");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 49)(114, "span", 58);
        \u0275\u0275element(115, "img", 59);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(116, "li", 47)(117, "div", 48)(118, "div", 49)(119, "span", 50);
        \u0275\u0275element(120, "img", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 52)(122, "div", 53)(123, "div");
        \u0275\u0275text(124, " Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac tortor ut elit sodales varius. Mauris id ipsum id mauris malesuada tincidunt. Vestibulum elit massa, pulvinar at sapien sed, luctus vestibulum eros. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "small", 54);
        \u0275\u0275element(126, "i", 55);
        \u0275\u0275text(127, " 20/05/2020 at 10:24");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(128, "div", 60);
        \u0275\u0275element(129, "textarea", 61);
        \u0275\u0275elementStart(130, "button", 62);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(131, "svg", 20);
        \u0275\u0275element(132, "path", 21)(133, "path", 63)(134, "path", 64);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        const nav_r7 = \u0275\u0275reference(6);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("activeId", ctx.active);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngbNavItem", 1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 2);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavOutlet", nav_r7);
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.activeUser.name);
        \u0275\u0275advance(50);
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(24);
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(24);
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, NgbTooltip, OverlayscrollbarsModule, OverlayScrollbarsComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Chat01Component, { className: "Chat01Component", filePath: "src\\app\\components\\apps\\chat\\chat-01\\chat-01.component.ts", lineNumber: 13 });
})();
export {
  Chat01Component
};
//# sourceMappingURL=chat-01.component-NM55IZIV.js.map
