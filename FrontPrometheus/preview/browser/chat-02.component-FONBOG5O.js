import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  SwiperComponent,
  SwiperModule,
  SwiperSlideDirective,
  Thumb,
  Virtual,
  Zoom,
  core_default
} from "./chunk-DSY7OWZO.js";
import {
  OverlayScrollbarsComponent,
  OverlayscrollbarsModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule,
  NgbTooltip
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/chat/chat-02/chat-02.component.ts
var _c0 = () => ({ clickable: true });
function Chat02Component_For_19_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "img", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", user_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.name);
  }
}
function Chat02Component_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chat02Component_For_19_ng_template_0_Template, 4, 2, "ng-template", 16);
  }
}
function Chat02Component_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275listener("click", function Chat02Component_For_23_Template_a_click_0_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.handleClick(data_r3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "img", 67);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 69)(6, "div", 70)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("main-img-user ", data_r3.status, "");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("src", data_r3.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.count);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.message);
  }
}
core_default.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumb
]);
var Chat02Component = class _Chat02Component {
  constructor() {
    this.imageData = [
      {
        image: "./assets/images/faces/12.jpg",
        name: "Kecia"
      },
      {
        image: "./assets/images/faces/2.jpg",
        name: "Copp"
      },
      {
        image: "./assets/images/faces/14.jpg",
        name: "Edwina"
      },
      {
        image: "./assets/images/faces/2.jpg",
        name: "Uriarte"
      },
      {
        image: "./assets/images/faces/8.jpg",
        name: "Ambrose Cawthon"
      },
      {
        image: "./assets/images/faces/3.jpg",
        name: "Cawthon"
      },
      {
        image: "./assets/images/faces/11.jpg",
        name: "Celesta"
      },
      {
        image: "./assets/images/faces/1.jpg",
        name: "Briones"
      },
      {
        image: "./assets/images/faces/14.jpg",
        name: "Copp"
      },
      {
        image: "./assets/images/faces/8.jpg",
        name: "Edwina"
      },
      {
        image: "./assets/images/faces/2.jpg",
        name: "Uriarte"
      }
    ];
    this.ChatData = [
      {
        status: "online",
        src: "./assets/images/faces/14.jpg",
        name: "Melodi Maul",
        message: "culpa qui officia deserunt...",
        time: "2 hours",
        count: "2"
      },
      {
        status: "offline",
        src: "./assets/images/faces/8.jpg",
        name: "Ann Watkinson",
        message: "Cum sociis natoque penatibus",
        time: "3 hours",
        count: "1"
      },
      {
        status: "online",
        src: "./assets/images/faces/3.jpg",
        name: "Zofia Mccutcheon",
        message: "Nam libero tempore, cum soluta nobis",
        time: "10 Hours ",
        count: "3"
      },
      {
        status: "offline",
        src: "./assets/images/faces/13.jpg",
        name: "Erlinda Leeder",
        message: "omnis voluptas assumenda es",
        time: "2 days",
        count: "1"
      },
      {
        status: "offline",
        src: "./assets/images/faces/14.jpg",
        name: "Randy Booze",
        message: "Temporibus autem quibusdam et",
        time: "2 days",
        count: "2"
      },
      {
        status: "offline",
        src: "./assets/images/faces/2.jpg",
        name: "Camelia Kimber",
        message: "saepe eveniet ut et voluptates",
        time: "3 day",
        count: "1"
      },
      {
        status: "offline",
        src: "./assets/images/faces/7.jpg",
        name: "Jerome Vowell",
        message: "reiciendis voluptatibus maiores",
        time: "4 day",
        count: "3"
      },
      {
        status: "offline",
        src: "./assets/images/faces/5.jpg",
        name: "Regine Mccrystal",
        message: "we denounce with righteous indignation",
        time: "5 day ",
        count: "1"
      },
      {
        status: "offline",
        src: "./assets/images/faces/6.jpg",
        name: "Nigel Knarr",
        message: "certain circumstances and owing to the claims",
        time: "5 day ",
        count: "1"
      },
      {
        status: "offline",
        src: "./assets/images/faces/12.jpg",
        name: "Marva Constante",
        message: "Mae cenas tempus, tellus eget co ndimen",
        time: "6 day ",
        count: "3"
      },
      {
        status: "offline",
        src: "./assets/images/faces/6.jpg",
        name: "Twila Hammers",
        message: "certain circumstances and owing to the claims",
        time: "5 day ",
        count: "2"
      },
      {
        status: "offline",
        src: "./assets/images/faces/7.jpg",
        name: "Vertie Raap",
        message: "certain circumstances and owing to the claims",
        time: "6 day ",
        count: "1"
      },
      {
        status: "offline",
        src: "./assets/images/faces/7.jpg",
        name: "Cory Gardenhire",
        message: "certain circumstances and owing to the claims...",
        time: "7 day ",
        count: "2"
      }
    ];
    this.activeUser = this.ChatData[0];
  }
  handleClick(activeUser) {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
    }
  }
  static {
    this.\u0275fac = function Chat02Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Chat02Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Chat02Component, selectors: [["app-chat-02"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 224, vars: 45, consts: [["hassub", "apps", "sub", "", "title1", "Chat", "title", "Chat2", "activeTitle", "Chat2"], [1, "row"], [1, "col-md-12"], ["id", "chat-2", 1, "card", "overflow-hidden", "row", "g-0", "main-chart-wrapper"], [1, "row", "g-0"], [1, "col-lg-5", "col-xl-4"], [1, "chat-info2", "border-end"], [1, "p-3"], [1, "input-group"], ["type", "text", "placeholder", "Search friends...", 1, "form-control"], ["aria-label", "button", "type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "align-items-center", "justify-content-between", "w-100", "p-3", "border-top", "border-bottom"], [1, "fw-semibold", "mb-0"], ["id", "chatActiveContacts", 1, "main-chat-contacts", "mt-3", "swiper", "pagination-dynamic", "text-start", "swiper-initialized", "swiper-horizontal", "swiper-pointer-events"], [3, "slidesPerView", "autoplay", "pagination", "spaceBetween"], ["swiperSlide", ""], ["id", "users-tab-pane", 1, "chat-users-tab", 3, "defer"], ["id", "ChatList", 1, "chat-conatct-list"], ["href", "javascript:void(0);", 1, "media", "new", "checkforactive"], [1, "col-xl-8", "col-lg-7"], [1, "main-chat-area"], [1, "action-header", "d-sm-flex", "clearfix"], [1, "d-flex", "chat-user"], ["alt", "img", 1, "chatimageperson", 3, "src"], [1, "align-items-center", "mt-2"], [1, "fw-bold", "chatnameperson", "responsive-userinfo-open", "mb-0"], [1, "ah-actions", "d-flex", "gap-3", "align-items-center", "list-unstyled", "ms-auto", "my-auto"], ["aria-label", "anchor", "placement", "auto", "ngbTooltip", "Call", "href", "javascript:void(0);"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z", "opacity", ".3"], ["d", "M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59L5.79 8.8z"], ["aria-label", "anchor", "placement", "auto", "href", "javascript:void(0);", "ngbTooltip", "Archive"], ["d", "M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z", "opacity", ".3"], ["d", "M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"], ["aria-label", "anchor", "placement", "auto", "href", "javascript:void(0);", "ngbTooltip", "Trash"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"], ["aria-label", "anchor", "placement", "auto", "href", "javascript:void(0);", "ngbTooltip", "View Info"], ["d", "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z", "opacity", ".3"], ["d", "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"], [1, "responsive-chat-close"], ["aria-label", "anchor", "href", "javascript:void(0);"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none", "opacity", ".87"], ["d", "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z", "opacity", ".3"], ["d", "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"], ["id", "main-chat-content", 1, "chat-content", 3, "defer"], [1, "list-unstyled", "mb-5"], [1, "chat-day-label", "mb-3"], [1, "chat-item-end"], [1, "chat-list-inner"], [1, "me-3"], [1, "main-chat-msg"], [1, "chat-user-profile"], [1, "d-block", "text-muted", "mt-2"], [1, "chat-item-start"], [1, "avatar", "avatar-md", "avatar-rounded", "online"], ["src", "./assets/images/faces/2.jpg", "alt", "img"], [1, "ms-3"], [1, "chat-footer", "h-auto", "px-0"], ["placeholder", "What's on your mind..."], ["aria-label", "button", "type", "button"], ["d", "M4 8.25l7.51 1-7.5-3.22zm.01 9.72l7.5-3.22-7.51 1z", "opacity", ".3"], ["d", "M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z"], [1, "main-img-user", "online"], ["alt", "", 1, "avatar", "avatar-md", "avatar-rounded", 3, "src"], ["href", "javascript:void(0);", 1, "media", "new", "checkforactive", 3, "click"], [1, "media-body"], [1, "media-contact-name"]], template: function Chat02Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        \u0275\u0275element(9, "input", 9);
        \u0275\u0275elementStart(10, "button", 10);
        \u0275\u0275element(11, "i", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 12)(13, "div")(14, "h6", 13);
        \u0275\u0275text(15, "Active Contacts (28)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 14)(17, "swiper", 15);
        \u0275\u0275repeaterCreate(18, Chat02Component_For_19_Template, 1, 0, null, 16, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "overlay-scrollbars", 17)(21, "div", 18);
        \u0275\u0275repeaterCreate(22, Chat02Component_For_23_Template, 13, 8, "a", 19, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 20)(25, "div", 21)(26, "div", 22)(27, "div", 23)(28, "span");
        \u0275\u0275element(29, "img", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 25)(31, "h6", 26);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "small");
        \u0275\u0275text(34, "Online");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "ul", 27)(36, "li")(37, "a", 28);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 29);
        \u0275\u0275element(39, "path", 30)(40, "path", 31)(41, "path", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(42, "li")(43, "a", 33);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 29);
        \u0275\u0275element(45, "path", 30)(46, "path", 34)(47, "path", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "li")(49, "a", 36);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(50, "svg", 29);
        \u0275\u0275element(51, "path", 30)(52, "path", 37)(53, "path", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "li")(55, "a", 39);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(56, "svg", 29);
        \u0275\u0275element(57, "path", 30)(58, "path", 40)(59, "path", 41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(60, "li", 42)(61, "a", 43);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(62, "svg", 44);
        \u0275\u0275element(63, "path", 45)(64, "path", 46)(65, "path", 47);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(66, "overlay-scrollbars", 48)(67, "ul", 49)(68, "li", 50)(69, "span");
        \u0275\u0275text(70, "3 Days Ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "li", 51)(72, "div", 52)(73, "div", 53)(74, "div", 54)(75, "div");
        \u0275\u0275text(76, " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 55)(78, "span");
        \u0275\u0275element(79, "img", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(80, "li", 51)(81, "div", 52)(82, "div", 53)(83, "div", 54)(84, "div");
        \u0275\u0275text(85, " sed quia non numquam eius modi tempora incidunt ut labore ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "div", 55)(87, "span");
        \u0275\u0275element(88, "img", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(89, "li", 51)(90, "div", 52)(91, "div", 53)(92, "div", 54)(93, "div");
        \u0275\u0275text(94, " sed quia non numquam eius modi tempora incidunt ut labore ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "small", 56);
        \u0275\u0275text(96, "9:48 am");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 55)(98, "span");
        \u0275\u0275element(99, "img", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "li", 57)(101, "div", 52)(102, "div", 55)(103, "span", 58);
        \u0275\u0275element(104, "img", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 60)(106, "div", 54)(107, "div");
        \u0275\u0275text(108, " Nor again is there anyone who loves or pursues or desires to obtain pain of itself ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(109, "li", 57)(110, "div", 52)(111, "div", 55)(112, "span", 58);
        \u0275\u0275element(113, "img", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 60)(115, "div", 54)(116, "div");
        \u0275\u0275text(117, " pursues or desires to obtain pain of itself ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(118, "li", 57)(119, "div", 52)(120, "div", 55)(121, "span", 58);
        \u0275\u0275element(122, "img", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 60)(124, "div", 54)(125, "div");
        \u0275\u0275text(126, " who loves or pursues or Nor again is there anyone ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "small", 56);
        \u0275\u0275text(128, " 09:30 am");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(129, "li", 51)(130, "div", 52)(131, "div", 53)(132, "div", 54)(133, "div");
        \u0275\u0275text(134, " Nullam dictum felis eu pede mollis pretium ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "small", 56);
        \u0275\u0275text(136, "11:22 am");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 55)(138, "span");
        \u0275\u0275element(139, "img", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(140, "li", 50)(141, "span");
        \u0275\u0275text(142, "YESTERDAY");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "li", 57)(144, "div", 52)(145, "div", 55)(146, "span");
        \u0275\u0275element(147, "img", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 60)(149, "div", 54)(150, "div");
        \u0275\u0275text(151, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "small", 56);
        \u0275\u0275text(153, " 9:32 am");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(154, "li", 51)(155, "div", 52)(156, "div", 53)(157, "div", 54)(158, "div");
        \u0275\u0275text(159, " To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(160, "div", 55)(161, "span");
        \u0275\u0275element(162, "img", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(163, "li", 51)(164, "div", 52)(165, "div", 53)(166, "div", 54)(167, "div");
        \u0275\u0275text(168, " Et harum quidem rerum facilis est et expedita distinctio ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "small", 56);
        \u0275\u0275text(170, "9:48 am");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(171, "div", 55)(172, "span");
        \u0275\u0275element(173, "img", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "li", 50)(175, "span");
        \u0275\u0275text(176, "TODAY");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "li", 57)(178, "div", 52)(179, "div", 55)(180, "span", 58);
        \u0275\u0275element(181, "img", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "div", 60)(183, "div", 54)(184, "div");
        \u0275\u0275text(185, " Et harum quidem rerum facilis est et expedita distinctio ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(186, "li", 57)(187, "div", 52)(188, "div", 55)(189, "span", 58);
        \u0275\u0275element(190, "img", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "div", 60)(192, "div", 54)(193, "div");
        \u0275\u0275text(194, " To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(195, "small", 56);
        \u0275\u0275text(196, "10:12 am");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(197, "li", 51)(198, "div", 52)(199, "div", 53)(200, "div", 54)(201, "div");
        \u0275\u0275text(202, " Et harum quidem rerum facilis est et expedita distinctio ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(203, "div", 55)(204, "span");
        \u0275\u0275element(205, "img", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(206, "li", 51)(207, "div", 52)(208, "div", 53)(209, "div", 54)(210, "div");
        \u0275\u0275text(211, " To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(212, "small", 56);
        \u0275\u0275text(213, "09:40 am");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(214, "div", 55)(215, "span");
        \u0275\u0275element(216, "img", 24);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(217, "div", 61);
        \u0275\u0275element(218, "textarea", 62);
        \u0275\u0275elementStart(219, "button", 63);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(220, "svg", 29);
        \u0275\u0275element(221, "path", 30)(222, "path", 64)(223, "path", 65);
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("slidesPerView", 6)("autoplay", true)("pagination", \u0275\u0275pureFunction0(44, _c0))("spaceBetween", 2);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.imageData);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.ChatData);
        \u0275\u0275advance(6);
        \u0275\u0275classMapInterpolate1("avatar avatar-lg me-2 avatar-rounded chatstatusperson ", ctx.activeUser.status, "");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.activeUser.name);
        \u0275\u0275advance(46);
        \u0275\u0275classMapInterpolate1("avatar avatar-md  ", ctx.activeUser.status, " avatar-rounded chatstatusperson");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(8);
        \u0275\u0275classMapInterpolate1("avatar avatar-md  ", ctx.activeUser.status, " avatar-rounded chatstatusperson");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(10);
        \u0275\u0275classMapInterpolate1("avatar avatar-md  ", ctx.activeUser.status, " avatar-rounded chatstatusperson");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(39);
        \u0275\u0275classMapInterpolate1("avatar avatar-md  ", ctx.activeUser.status, " avatar-rounded chatstatusperson");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(7);
        \u0275\u0275classMapInterpolate1("avatar avatar-md avatar-rounded  ", ctx.activeUser.status, "");
        \u0275\u0275advance(15);
        \u0275\u0275classMapInterpolate1("avatar avatar-md  ", ctx.activeUser.status, " avatar-rounded chatstatusperson");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(10);
        \u0275\u0275classMapInterpolate1("avatar avatar-md  ", ctx.activeUser.status, " avatar-rounded chatstatusperson");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(31);
        \u0275\u0275classMapInterpolate1("avatar avatar-md  ", ctx.activeUser.status, " avatar-rounded chatstatusperson");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(10);
        \u0275\u0275classMapInterpolate1("avatar avatar-md  ", ctx.activeUser.status, " avatar-rounded chatstatusperson");
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.activeUser.src, \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, SwiperModule, SwiperComponent, SwiperSlideDirective, OverlayscrollbarsModule, OverlayScrollbarsComponent, NgbModule, NgbTooltip] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Chat02Component, { className: "Chat02Component", filePath: "src\\app\\components\\apps\\chat\\chat-02\\chat-02.component.ts", lineNumber: 35 });
})();
export {
  Chat02Component
};
//# sourceMappingURL=chat-02.component-FONBOG5O.js.map
