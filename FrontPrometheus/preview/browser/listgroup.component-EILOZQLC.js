import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/uielements/listgroup/listgroup.component.ts
var ListgroupComponent = class _ListgroupComponent {
  static {
    this.\u0275fac = function ListgroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListgroupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListgroupComponent, selectors: [["app-listgroup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 636, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Elements", "title", "List Group", "activeTitle", "List Group"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], [1, "list-group"], [1, "list-group-item"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm"], ["src", "./assets/images/faces/1.jpg", "alt", "img"], [1, "ms-2", "fw-semibold"], ["src", "./assets/images/faces/3.jpg", "alt", "img"], ["src", "./assets/images/faces/6.jpg", "alt", "img"], ["src", "./assets/images/faces/15.jpg", "alt", "img"], ["src", "./assets/images/faces/13.jpg", "alt", "img"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["aria-current", "true", 1, "list-group-item", "active"], [1, "fs-15"], [1, "bi", "bi-house-door"], [1, "ms-2"], [1, "bi", "bi-bell"], [1, "bi", "bi-gift"], [1, "bi", "bi-person"], [1, "bi", "bi-trash3"], ["aria-disabled", "true", 1, "list-group-item", "disabled"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "fw-semibold"], [1, "bi", "bi-envelope", "align-middle", "me-2", "text-muted"], [1, "ms-1", "text-muted", "fw-normal", "d-inline-block"], [1, "bi", "bi-tiktok", "align-middle", "me-2", "text-muted"], [1, "bi", "bi-whatsapp", "align-middle", "me-2", "text-muted"], [1, "bi", "bi-facebook", "align-middle", "me-2", "text-muted"], [1, "bi", "bi-instagram", "align-middle", "me-2", "text-muted"], ["href", "javascript:void(0);", "aria-current", "true", 1, "list-group-item", "list-group-item-action", "active"], [1, "avatar", "avatar-xs", "bg-white", "text-default", "avatar-rounded"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action"], [1, "avatar", "avatar-xs", "bg-secondary", "avatar-rounded"], [1, "avatar", "avatar-xs", "bg-info", "avatar-rounded"], [1, "avatar", "avatar-xs", "bg-warning", "avatar-rounded"], [1, "list-group-item", "list-group-item-action", "disabled"], [1, "avatar", "avatar-xs", "bg-success", "avatar-rounded"], ["type", "button", "aria-current", "true", 1, "list-group-item", "list-group-item-action", "active"], [1, "badge", "float-end", "bg-primary"], ["type", "button", 1, "list-group-item", "list-group-item-action"], [1, "badge", "float-end", "bg-secondary-transparent"], [1, "badge", "float-end", "bg-info-transparent"], [1, "badge", "float-end", "bg-success-transparent"], ["type", "button", "disabled", "", 1, "list-group-item", "list-group-item-action"], [1, "badge", "float-end", "bg-danger-transparent"], [1, "col-xl-6"], [1, "list-group-item", "list-group-item-primary"], [1, "list-group-item", "list-group-item-secondary"], [1, "list-group-item", "list-group-item-success"], [1, "list-group-item", "list-group-item-danger"], [1, "list-group-item", "list-group-item-warning"], [1, "list-group-item", "list-group-item-info"], [1, "list-group-item", "list-group-item-light"], [1, "list-group-item", "list-group-item-dark"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-primary"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-secondary"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-success"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-danger"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-warning"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-info"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-light"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-dark"], [1, "list-group-item", "list-item-solid-primary"], [1, "list-group-item", "list-item-solid-secondary"], [1, "list-group-item", "list-item-solid-success"], [1, "list-group-item", "list-item-solid-danger"], [1, "list-group-item", "list-item-solid-warning"], [1, "list-group-item", "list-item-solid-info"], [1, "list-group-item", "list-item-solid-light"], [1, "list-group-item", "list-item-solid-dark", "text-white"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1", "fw-semibold", "text-fixed-white"], [1, "mb-1"], [1, "mb-1", "fw-semibold"], [1, "text-muted"], [1, "col-xxl-4", "col-xl-6"], [1, "list-group", "list-group-numbered"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-start"], [1, "ms-2", "me-auto", "text-muted"], [1, "fw-semibold", "fs-14", "text-default"], [1, "badge", "bg-primary-transparent"], [1, "badge", "bg-secondary-transparent"], [1, "badge", "bg-success-transparent"], [1, "badge", "bg-danger-transparent"], ["type", "checkbox", "value", "", "aria-label", "...", "checked", "", 1, "form-check-input", "me-1", "fw-semibold"], ["type", "checkbox", "value", "", "aria-label", "...", 1, "form-check-input", "me-1", "fw-semibold"], ["type", "radio", "value", "", "name", "list-radio", "checked", "", 1, "form-check-input", "me-1"], ["type", "radio", "value", "", "name", "list-radio", 1, "form-check-input", "me-1"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "fw-semibold"], [1, "badge", "bg-primary"], [1, "badge", "bg-secondary"], [1, "badge", "bg-danger", "rounded-pill"], [1, "badge", "bg-light", "text-default"], [1, "badge", "bg-info-gradient"], [1, "badge", "bg-warning"], [1, "mb-3", "list-group", "list-group-horizontal"], [1, "mb-3", "list-group", "list-group-horizontal-sm"], [1, "mb-3", "list-group", "list-group-horizontal-md"], [1, "mb-3", "list-group", "list-group-horizontal-lg"], [1, "mb-3", "list-group", "list-group-horizontal-xl"], [1, "mb-3", "list-group", "list-group-horizontal-xxl"]], template: function ListgroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Basic List ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "ul", 10)(13, "li", 11)(14, "div", 12)(15, "span", 13);
        \u0275\u0275element(16, "img", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 15);
        \u0275\u0275text(18, " Alicia Sierra ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "li", 11)(20, "div", 12)(21, "span", 13);
        \u0275\u0275element(22, "img", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 15);
        \u0275\u0275text(24, " Samantha Mery ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "li", 11)(26, "div", 12)(27, "span", 13);
        \u0275\u0275element(28, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275text(30, " Juliana Pena ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "li", 11)(32, "div", 12)(33, "span", 13);
        \u0275\u0275element(34, "img", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 15);
        \u0275\u0275text(36, " Adam Smith ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "li", 11)(38, "div", 12)(39, "span", 13);
        \u0275\u0275element(40, "img", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 15);
        \u0275\u0275text(42, " Farhaan Amhed ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "div", 20)(44, "pre", 21)(45, "code", 21);
        \u0275\u0275text(46, '<ul class="list-group">\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<span class="avatar avatar-sm">\n<img src="./assets/images/faces/1.jpg" alt="img">\n</span>\n<div class="ms-2 fw-semibold">\nAlicia Sierra\n</div>\n</div>\n</li>\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<span class="avatar avatar-sm">\n<img src="./assets/images/faces/3.jpg" alt="img">\n</span>\n<div class="ms-2 fw-semibold">\nSamantha Mery\n</div>\n</div>\n</li>\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<span class="avatar avatar-sm">\n<img src="./assets/images/faces/6.jpg" alt="img">\n</span>\n<div class="ms-2 fw-semibold">\nJuliana Pena\n</div>\n</div>\n</li>\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<span class="avatar avatar-sm">\n<img src="./assets/images/faces/15.jpg" alt="img">\n</span>\n<div class="ms-2 fw-semibold">\nAdam Smith\n</div>\n</div>\n</li>\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<span class="avatar avatar-sm">\n<img src="./assets/images/faces/13.jpg" alt="img">\n</span>\n<div class="ms-2 fw-semibold">\nFarhaan Amhed\n</div>\n</div>\n</li>\n</ul>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "div", 2)(48, "div", 3)(49, "div", 4)(50, "div", 5);
        \u0275\u0275text(51, " Active items ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 6)(53, "button", 7);
        \u0275\u0275text(54, "Show Code");
        \u0275\u0275element(55, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 9)(57, "ul", 10)(58, "li", 22)(59, "div", 12)(60, "div")(61, "span", 23);
        \u0275\u0275element(62, "i", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 25);
        \u0275\u0275text(64, " Home ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "li", 11)(66, "div", 12)(67, "div")(68, "span", 23);
        \u0275\u0275element(69, "i", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 25);
        \u0275\u0275text(71, " Notifications ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "li", 11)(73, "div", 12)(74, "div")(75, "span", 23);
        \u0275\u0275element(76, "i", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 25);
        \u0275\u0275text(78, " Sent Messages ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "li", 11)(80, "div", 12)(81, "div")(82, "span", 23);
        \u0275\u0275element(83, "i", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 25);
        \u0275\u0275text(85, " New Requests ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "li", 11)(87, "div", 12)(88, "div")(89, "span", 23);
        \u0275\u0275element(90, "i", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 25);
        \u0275\u0275text(92, " Deleted Messages ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(93, "div", 20)(94, "pre", 21)(95, "code", 21);
        \u0275\u0275text(96, '<ul class="list-group">\n<li class="list-group-item active" aria-current="true">\n<div class="d-flex align-items-center">\n<div>\n<span class="fs-15">\n<i class="bi bi-house-door"></i>\n</span>\n</div>\n<div class="ms-2">\nHome\n</div>\n</div>\n</li>\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<div>\n<span class="fs-15">\n<i class="bi bi-bell"></i>\n</span>\n</div>\n<div class="ms-2">\nNotifications\n</div>\n</div>\n</li>\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<div>\n<span class="fs-15">\n<i class="bi bi-gift"></i>\n</span>\n</div>\n<div class="ms-2">\nSent Messages\n</div>\n</div>\n</li>\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<div>\n<span class="fs-15">\n<i class="bi bi-person"></i>\n</span>\n</div>\n<div class="ms-2">\nNew Requests\n</div>\n</div>\n</li>\n<li class="list-group-item">\n<div class="d-flex align-items-center">\n<div>\n<span class="fs-15">\n<i class="bi bi-trash3"></i>\n</span>\n</div>\n<div class="ms-2">\nDeleted Messages\n</div>\n</div>\n</li>\n</ul>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(97, "div", 2)(98, "div", 3)(99, "div", 4)(100, "div", 5);
        \u0275\u0275text(101, " Disabled items ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 6)(103, "button", 7);
        \u0275\u0275text(104, "Show Code");
        \u0275\u0275element(105, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "div", 9)(107, "ul", 10)(108, "li", 30);
        \u0275\u0275text(109, "A disabled item meant to be disabled ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li", 11);
        \u0275\u0275text(111, "Simply dummy text of the printing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li", 11);
        \u0275\u0275text(113, "There are many variations of passages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li", 11);
        \u0275\u0275text(115, "All the Lorem Ipsum generators");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li", 11);
        \u0275\u0275text(117, "Written in 45 BC. This book is a treatise on the theory");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "div", 20)(119, "pre", 21)(120, "code", 21);
        \u0275\u0275text(121, '<ul class="list-group">\n<li class="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled\n</li>\n<li class="list-group-item">Simply dummy text of the printing</li>\n<li class="list-group-item">There are many variations of passages</li>\n<li class="list-group-item">All the Lorem Ipsum generators</li>\n<li class="list-group-item">Written in 45 BC. This book is a treatise on the theory</li>\n</ul>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(122, "div", 1)(123, "div", 2)(124, "div", 3)(125, "div", 4)(126, "div", 5);
        \u0275\u0275text(127, " Flush ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "div", 6)(129, "button", 7);
        \u0275\u0275text(130, "Show Code");
        \u0275\u0275element(131, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "div", 9)(133, "ul", 31)(134, "li", 32);
        \u0275\u0275element(135, "i", 33);
        \u0275\u0275text(136, "Asish Trivedhi");
        \u0275\u0275elementStart(137, "span", 34);
        \u0275\u0275text(138, "(+1023-84534)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "li", 32);
        \u0275\u0275element(140, "i", 35);
        \u0275\u0275text(141, "Alezander Russo");
        \u0275\u0275elementStart(142, "span", 34);
        \u0275\u0275text(143, "(+7546-12342)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "li", 32);
        \u0275\u0275element(145, "i", 36);
        \u0275\u0275text(146, "Karem Smith");
        \u0275\u0275elementStart(147, "span", 34);
        \u0275\u0275text(148, "(+9944-56632)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "li", 32);
        \u0275\u0275element(150, "i", 37);
        \u0275\u0275text(151, "Melissa Brien");
        \u0275\u0275elementStart(152, "span", 34);
        \u0275\u0275text(153, "(+1023-34323)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "li", 32);
        \u0275\u0275element(155, "i", 38);
        \u0275\u0275text(156, "Kamala Harris");
        \u0275\u0275elementStart(157, "span", 34);
        \u0275\u0275text(158, "(+91-63421)");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(159, "div", 20)(160, "pre", 21)(161, "code", 21);
        \u0275\u0275text(162, '<ul class="list-group list-group-flush">\n<li class="list-group-item fw-semibold"><i class="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span class="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></li>\n<li class="list-group-item fw-semibold"><i class="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span class="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></li>\n<li class="list-group-item fw-semibold"><i class="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span class="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></li>\n<li class="list-group-item fw-semibold"><i class="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span class="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></li>\n<li class="list-group-item fw-semibold"><i class="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span class="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></li>\n</ul>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(163, "div", 2)(164, "div", 3)(165, "div", 4)(166, "div", 5);
        \u0275\u0275text(167, " Links ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "div", 6)(169, "button", 7);
        \u0275\u0275text(170, "Show Code");
        \u0275\u0275element(171, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(172, "div", 9)(173, "div", 10)(174, "a", 39)(175, "div", 12)(176, "div")(177, "span", 40);
        \u0275\u0275text(178, " C ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "div", 25);
        \u0275\u0275text(180, "California");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(181, "a", 41)(182, "div", 12)(183, "div")(184, "span", 42);
        \u0275\u0275text(185, " N ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(186, "div", 25);
        \u0275\u0275text(187, "New Jersey");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(188, "a", 41)(189, "div", 12)(190, "div")(191, "span", 43);
        \u0275\u0275text(192, " L ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(193, "div", 25);
        \u0275\u0275text(194, "Los Angeles");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(195, "a", 41)(196, "div", 12)(197, "div")(198, "span", 44);
        \u0275\u0275text(199, " M ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(200, "div", 25);
        \u0275\u0275text(201, "Miami Florida");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(202, "a", 45)(203, "div", 12)(204, "div")(205, "span", 46);
        \u0275\u0275text(206, " W ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "div", 25);
        \u0275\u0275text(208, "Washington D.C");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(209, "div", 20)(210, "pre", 21)(211, "code", 21);
        \u0275\u0275text(212, '<div class="list-group">\n<a href="javascript:void(0);" class="list-group-item list-group-item-action active"\naria-current="true">\n<div class="d-flex align-items-center">\n<div>\n<span class="avatar avatar-xs bg-white text-default avatar-rounded">\nC\n</span>\n</div>\n<div class="ms-2">California</div>\n</div>\n</a>\n<a href="javascript:void(0);" class="list-group-item list-group-item-action">\n<div class="d-flex align-items-center">\n<div>\n<span class="avatar avatar-xs bg-secondary avatar-rounded">\nN\n</span>\n</div>\n<div class="ms-2">New Jersey</div>\n</div>\n</a>\n<a href="javascript:void(0);" class="list-group-item list-group-item-action">\n<div class="d-flex align-items-center">\n<div>\n<span class="avatar avatar-xs bg-info avatar-rounded">\nL\n</span>\n</div>\n<div class="ms-2">Los Angeles</div>\n</div>\n</a>\n<a href="javascript:void(0);" class="list-group-item list-group-item-action">\n<div class="d-flex align-items-center">\n<div>\n<span class="avatar avatar-xs bg-warning avatar-rounded">\nM\n</span>\n</div>\n<div class="ms-2">Miami Florida</div>\n</div>\n</a>\n<a class="list-group-item list-group-item-action disabled">\n<div class="d-flex align-items-center">\n<div>\n<span class="avatar avatar-xs bg-success avatar-rounded">\nW\n</span>\n</div>\n<div class="ms-2">Washington D.C</div>\n</div>\n</a>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(213, "div", 2)(214, "div", 3)(215, "div", 4)(216, "div", 5);
        \u0275\u0275text(217, " buttons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "div", 6)(219, "button", 7);
        \u0275\u0275text(220, "Show Code");
        \u0275\u0275element(221, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(222, "div", 9)(223, "div", 10)(224, "button", 47);
        \u0275\u0275text(225, "Simply dummy text of the printing");
        \u0275\u0275elementStart(226, "span", 48);
        \u0275\u0275text(227, "243");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(228, "button", 49);
        \u0275\u0275text(229, "There are many variations of passages");
        \u0275\u0275elementStart(230, "span", 50);
        \u0275\u0275text(231, "35");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(232, "button", 49);
        \u0275\u0275text(233, "All the Lorem Ipsum generators");
        \u0275\u0275elementStart(234, "span", 51);
        \u0275\u0275text(235, "132");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(236, "button", 49);
        \u0275\u0275text(237, "All the Lorem Ipsum generators");
        \u0275\u0275elementStart(238, "span", 52);
        \u0275\u0275text(239, "2525");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(240, "button", 53);
        \u0275\u0275text(241, "A disabled item meant to be disabled");
        \u0275\u0275elementStart(242, "span", 54);
        \u0275\u0275text(243, "21");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(244, "div", 20)(245, "pre", 21)(246, "code", 21);
        \u0275\u0275text(247, '<div class="list-group">\n<button type="button" class="list-group-item list-group-item-action active" aria-current="true">Simply dummy text of the printing<span class="badge float-end bg-primary">243</span></button>\n<button type="button" class="list-group-item list-group-item-action">There are many variations of passages<span class="badge float-end bg-secondary-transparent">35</span></button>\n<button type="button" class="list-group-item list-group-item-action">All the Lorem Ipsum generators<span class="badge float-end bg-info-transparent">132</span></button>\n<button type="button" class="list-group-item list-group-item-action">All the Lorem Ipsum generators<span class="badge float-end bg-success-transparent">2525</span></button>\n<button type="button" class="list-group-item list-group-item-action" disabled>A disabled item meant to be disabled<span class="badge float-end bg-danger-transparent">21</span></button>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(248, "div", 1)(249, "div", 55)(250, "div", 3)(251, "div", 4)(252, "div", 5);
        \u0275\u0275text(253, " Contextual classes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "div", 6)(255, "button", 7);
        \u0275\u0275text(256, "Show Code");
        \u0275\u0275element(257, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(258, "div", 9)(259, "ul", 10)(260, "li", 11);
        \u0275\u0275text(261, "A simple default list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(262, "li", 56);
        \u0275\u0275text(263, "A simple primary list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(264, "li", 57);
        \u0275\u0275text(265, "A simple secondary list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "li", 58);
        \u0275\u0275text(267, "A simple success list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "li", 59);
        \u0275\u0275text(269, "A simple danger list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "li", 60);
        \u0275\u0275text(271, "A simple warning list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(272, "li", 61);
        \u0275\u0275text(273, "A simple info list group item ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(274, "li", 62);
        \u0275\u0275text(275, "A simple light list group item ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(276, "li", 63);
        \u0275\u0275text(277, "A simple dark list group item ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(278, "div", 20)(279, "pre", 21)(280, "code", 21);
        \u0275\u0275text(281, '<ul class="list-group">\n<li class="list-group-item">A simple default list group item</li>\n\n<li class="list-group-item list-group-item-primary">A simple primary list\ngroup\nitem</li>\n<li class="list-group-item list-group-item-secondary">A simple secondary\nlist\ngroup item</li>\n<li class="list-group-item list-group-item-success">A simple success list\ngroup\nitem</li>\n<li class="list-group-item list-group-item-danger">A simple danger list\ngroup\nitem</li>\n<li class="list-group-item list-group-item-warning">A simple warning list\ngroup\nitem</li>\n<li class="list-group-item list-group-item-info">A simple info list group\nitem\n</li>\n<li class="list-group-item list-group-item-light">A simple light list group\nitem\n</li>\n<li class="list-group-item list-group-item-dark">A simple dark list group\nitem\n</li>\n</ul>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(282, "div", 55)(283, "div", 3)(284, "div", 4)(285, "div", 5);
        \u0275\u0275text(286, " Contextual classes with hover styles ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(287, "div", 6)(288, "button", 7);
        \u0275\u0275text(289, "Show Code");
        \u0275\u0275element(290, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(291, "div", 9)(292, "div", 10)(293, "a", 41);
        \u0275\u0275text(294, "A simple default list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(295, "a", 64);
        \u0275\u0275text(296, "A simple primary list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(297, "a", 65);
        \u0275\u0275text(298, "A simple secondary list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(299, "a", 66);
        \u0275\u0275text(300, "A simple success list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(301, "a", 67);
        \u0275\u0275text(302, "A simple danger list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(303, "a", 68);
        \u0275\u0275text(304, "A simple warning list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "a", 69);
        \u0275\u0275text(306, "A simple info list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "a", 70);
        \u0275\u0275text(308, "A simple light list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(309, "a", 71);
        \u0275\u0275text(310, "A simple dark list group item");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(311, "div", 20)(312, "pre", 21)(313, "code", 21);
        \u0275\u0275text(314, '<div class="list-group">\n<a href="javascript:void(0);" class="list-group-item list-group-item-action">A simple default\nlist\ngroup item</a>\n\n<a href="javascript:void(0);"\nclass="list-group-item list-group-item-action list-group-item-primary">A\nsimple primary list group item</a>\n<a href="javascript:void(0);"\nclass="list-group-item list-group-item-action list-group-item-secondary">A\nsimple secondary list group item</a>\n<a href="javascript:void(0);"\nclass="list-group-item list-group-item-action list-group-item-success">A\nsimple success list group item</a>\n<a href="javascript:void(0);"\nclass="list-group-item list-group-item-action list-group-item-danger">A\nsimple danger list group item</a>\n<a href="javascript:void(0);"\nclass="list-group-item list-group-item-action list-group-item-warning">A\nsimple warning list group item</a>\n<a href="javascript:void(0);"\nclass="list-group-item list-group-item-action list-group-item-info">A\nsimple\ninfo list group item</a>\n<a href="javascript:void(0);"\nclass="list-group-item list-group-item-action list-group-item-light">A\nsimple light list group item</a>\n<a href="javascript:void(0);"\nclass="list-group-item list-group-item-action list-group-item-dark">A\nsimple\ndark list group item</a>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(315, "div", 1)(316, "div", 55)(317, "div", 3)(318, "div", 4)(319, "div", 5);
        \u0275\u0275text(320, " Solid Colored Lists ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "div", 6)(322, "button", 7);
        \u0275\u0275text(323, "Show Code");
        \u0275\u0275element(324, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(325, "div", 9)(326, "ul", 10)(327, "li", 11);
        \u0275\u0275text(328, "A simple default list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(329, "li", 72);
        \u0275\u0275text(330, "A simple primary list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(331, "li", 73);
        \u0275\u0275text(332, "A simple secondary list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(333, "li", 74);
        \u0275\u0275text(334, "A simple success list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "li", 75);
        \u0275\u0275text(336, "A simple danger list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(337, "li", 76);
        \u0275\u0275text(338, "A simple warning list group item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(339, "li", 77);
        \u0275\u0275text(340, "A simple info list group item ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(341, "li", 78);
        \u0275\u0275text(342, "A simple light list group item ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(343, "li", 79);
        \u0275\u0275text(344, "A simple dark list group item ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(345, "div", 20)(346, "pre", 21)(347, "code", 21);
        \u0275\u0275text(348, '<ul class="list-group">\n<li class="list-group-item">A simple default list group item</li>\n\n<li class="list-group-item list-item-solid-primary">A simple primary list\ngroup\nitem</li>\n<li class="list-group-item list-item-solid-secondary">A simple secondary\nlist\ngroup item</li>\n<li class="list-group-item list-item-solid-success">A simple success list\ngroup\nitem</li>\n<li class="list-group-item list-item-solid-danger">A simple danger list\ngroup\nitem</li>\n<li class="list-group-item list-item-solid-warning">A simple warning list\ngroup\nitem</li>\n<li class="list-group-item list-item-solid-info">A simple info list group\nitem\n</li>\n<li class="list-group-item list-item-solid-light">A simple light list group\nitem\n</li>\n<li class="list-group-item list-item-solid-dark text-white">A simple dark list group\nitem\n</li>\n</ul>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(349, "div", 55)(350, "div", 3)(351, "div", 4)(352, "div", 5);
        \u0275\u0275text(353, " Custom content ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(354, "div", 6)(355, "button", 7);
        \u0275\u0275text(356, "Show Code");
        \u0275\u0275element(357, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(358, "div", 9)(359, "div", 10)(360, "a", 39)(361, "div", 80)(362, "h6", 81);
        \u0275\u0275text(363, "Web page editors now use Lorem Ipsum?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(364, "small");
        \u0275\u0275text(365, "3 days ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(366, "p", 82);
        \u0275\u0275text(367, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(368, "small");
        \u0275\u0275text(369, "24,Nov 2022.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(370, "a", 41)(371, "div", 80)(372, "h6", 83);
        \u0275\u0275text(373, "Richard McClintock, a Latin professor?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(374, "small", 84);
        \u0275\u0275text(375, "4 hrs ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(376, "p", 82);
        \u0275\u0275text(377, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(378, "small", 84);
        \u0275\u0275text(379, "30,Nov 2022.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(380, "a", 41)(381, "div", 80)(382, "h6", 83);
        \u0275\u0275text(383, "It uses a dictionary of over 200 Latin words?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(384, "small", 84);
        \u0275\u0275text(385, "15 hrs ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(386, "p", 82);
        \u0275\u0275text(387, "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(388, "small", 84);
        \u0275\u0275text(389, "4,Nov 2022.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(390, "a", 41)(391, "div", 80)(392, "h6", 83);
        \u0275\u0275text(393, "The standard Lorem Ipsum used since the 1500s?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(394, "small", 84);
        \u0275\u0275text(395, "45 mins ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(396, "p", 82);
        \u0275\u0275text(397, "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(398, "small", 84);
        \u0275\u0275text(399, "28,Oct 2022.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(400, "div", 20)(401, "pre", 21)(402, "code", 21);
        \u0275\u0275text(403, `<div class="list-group">
<a href="javascript:void(0);" class="list-group-item list-group-item-action active"
aria-current="true">
<div class="d-flex w-100 justify-content-between">
<h6 class="mb-1 fw-semibold">Web page editors now use Lorem Ipsum?</h6>
<small>3 days ago</small>
</div>
<p class="mb-1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
<small>24,Nov 2022.</small>
</a>
<a href="javascript:void(0);" class="list-group-item list-group-item-action">
<div class="d-flex w-100 justify-content-between">
<h6 class="mb-1 fw-semibold">Richard McClintock, a Latin professor?</h6>
<small class="text-muted">4 hrs ago</small>
</div>
<p class="mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
<small class="text-muted">30,Nov 2022.</small>
</a>
<a href="javascript:void(0);" class="list-group-item list-group-item-action">
<div class="d-flex w-100 justify-content-between">
<h6 class="mb-1 fw-semibold">It uses a dictionary of over 200 Latin words?</h6>
<small class="text-muted">15 hrs ago</small>
</div>
<p class="mb-1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
<small class="text-muted">4,Nov 2022.</small>
</a>
<a href="javascript:void(0);" class="list-group-item list-group-item-action">
<div class="d-flex w-100 justify-content-between">
<h6 class="mb-1 fw-semibold">The standard Lorem Ipsum used since the 1500s?</h6>
<small class="text-muted">45 mins ago</small>
</div>
<p class="mb-1">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
<small class="text-muted">28,Oct 2022.</small>
</a>
</div>`);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(404, "div", 1)(405, "div", 85)(406, "div", 3)(407, "div", 4)(408, "div", 5);
        \u0275\u0275text(409, " Sub headings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(410, "div", 6)(411, "button", 7);
        \u0275\u0275text(412, "Show Code");
        \u0275\u0275element(413, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(414, "div", 9)(415, "ol", 86)(416, "li", 87)(417, "div", 88)(418, "div", 89);
        \u0275\u0275text(419, "What Happened?");
        \u0275\u0275elementEnd();
        \u0275\u0275text(420, " Many experts have recently suggested may exist. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(421, "span", 90);
        \u0275\u0275text(422, "32 Views");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(423, "li", 87)(424, "div", 88)(425, "div", 89);
        \u0275\u0275text(426, "It Was Amazing!");
        \u0275\u0275elementEnd();
        \u0275\u0275text(427, " His idea involved taking red. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(428, "span", 91);
        \u0275\u0275text(429, "52 Views");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(430, "li", 87)(431, "div", 88)(432, "div", 89);
        \u0275\u0275text(433, "News Is A Great Weapon.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(434, " News can influence in many ways. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(435, "span", 92);
        \u0275\u0275text(436, "1,204 Views");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(437, "li", 87)(438, "div", 88)(439, "div", 89);
        \u0275\u0275text(440, "majority have suffered.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(441, " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(442, "span", 93);
        \u0275\u0275text(443, "14 Views");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(444, "div", 20)(445, "pre", 21)(446, "code", 21);
        \u0275\u0275text(447, `<ol class="list-group list-group-numbered">
<li class="list-group-item d-flex justify-content-between align-items-start">
<div class="ms-2 me-auto text-muted">
<div class="fw-semibold fs-14 text-default">What Happened?</div>
Many experts have recently suggested may exist.
</div>
<span class="badge bg-primary-transparent">32 Views</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-start">
<div class="ms-2 me-auto text-muted">
<div class="fw-semibold fs-14 text-default">It Was Amazing!</div>
His idea involved taking red.
</div>
<span class="badge bg-secondary-transparent">52 Views</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-start">
<div class="ms-2 me-auto text-muted">
<div class="fw-semibold fs-14 text-default">News Is A Great Weapon.</div>
News can influence in many ways.
</div>
<span class="badge bg-success-transparent">1,204 Views</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-start">
<div class="ms-2 me-auto text-muted">
<div class="fw-semibold fs-14 text-default">majority have suffered.</div>
If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
</div>
<span class="badge bg-danger-transparent">14 Views</span>
</li>
</ol>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(448, "div", 85)(449, "div", 3)(450, "div", 4)(451, "div", 5);
        \u0275\u0275text(452, " Numbered Lists ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(453, "div", 6)(454, "button", 7);
        \u0275\u0275text(455, "Show Code");
        \u0275\u0275element(456, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(457, "div", 9)(458, "ol", 86)(459, "li", 11);
        \u0275\u0275text(460, "Simply dummy text of the printing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(461, "li", 11);
        \u0275\u0275text(462, "There are many variations of passages.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(463, "li", 11);
        \u0275\u0275text(464, "All the Lorem Ipsum generators.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(465, "li", 11);
        \u0275\u0275text(466, "Written in 45 BC. This book is a treatise on the theory.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(467, "li", 11);
        \u0275\u0275text(468, "Randomised words which don't look.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(469, "li", 11);
        \u0275\u0275text(470, "Always free from repetition, injected humour.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(471, "div", 20)(472, "pre", 21)(473, "code", 21);
        \u0275\u0275text(474, `<ol class="list-group list-group-numbered">
<li class="list-group-item">Simply dummy text of the printing.</li>
<li class="list-group-item">There are many variations of passages.</li>
<li class="list-group-item">All the Lorem Ipsum generators.</li>
<li class="list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
<li class="list-group-item">Randomised words which don't look.</li>
<li class="list-group-item">Always free from repetition, injected humour.</li>
</ol>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(475, "div", 85)(476, "div", 3)(477, "div", 4)(478, "div", 5);
        \u0275\u0275text(479, " List With Checkboxes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(480, "div", 6)(481, "button", 7);
        \u0275\u0275text(482, "Show Code");
        \u0275\u0275element(483, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(484, "div", 9)(485, "ul", 10)(486, "li", 11);
        \u0275\u0275element(487, "input", 94);
        \u0275\u0275text(488, " Accurate information at any given point. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(489, "li", 11);
        \u0275\u0275element(490, "input", 95);
        \u0275\u0275text(491, " Hearing the information and responding. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(492, "li", 11);
        \u0275\u0275element(493, "input", 94);
        \u0275\u0275text(494, " Setting up and customizing your own sales. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(495, "li", 11);
        \u0275\u0275element(496, "input", 94);
        \u0275\u0275text(497, " New Admin Launched. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(498, "li", 11);
        \u0275\u0275element(499, "input", 95);
        \u0275\u0275text(500, " To maximize profits and improve productivity. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(501, "li", 11);
        \u0275\u0275element(502, "input", 95);
        \u0275\u0275text(503, " To have a complete 360\xB0 overview of sales information, having. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(504, "div", 20)(505, "pre", 21)(506, "code", 21);
        \u0275\u0275text(507, '<ul class="list-group">\n<li class="list-group-item">\n<input class="form-check-input me-1 fw-semibold" type="checkbox" value=""\naria-label="..." checked>\nAccurate information at any given point.\n</li>\n<li class="list-group-item">\n<input class="form-check-input me-1 fw-semibold" type="checkbox" value=""\naria-label="...">\nHearing the information and responding.\n</li>\n<li class="list-group-item">\n<input class="form-check-input me-1 fw-semibold" type="checkbox" value=""\naria-label="..." checked>\nSetting up and customizing your own sales.\n</li>\n<li class="list-group-item">\n<input class="form-check-input me-1 fw-semibold" type="checkbox" value=""\naria-label="..." checked>\nNew Admin Launched.\n</li>\n<li class="list-group-item">\n<input class="form-check-input me-1 fw-semibold" type="checkbox" value=""\naria-label="...">\nTo maximize profits and improve productivity.\n</li>\n<li class="list-group-item">\n<input class="form-check-input me-1 fw-semibold" type="checkbox" value=""\naria-label="...">\nTo have a complete 360\xB0 overview of sales information, having.\n</li>\n</ul>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(508, "div", 85)(509, "div", 3)(510, "div", 4)(511, "div", 5);
        \u0275\u0275text(512, " List With Radios ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(513, "div", 6)(514, "button", 7);
        \u0275\u0275text(515, "Show Code");
        \u0275\u0275element(516, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(517, "div", 9)(518, "div", 10)(519, "label", 11);
        \u0275\u0275element(520, "input", 96);
        \u0275\u0275text(521, " Accurate information at any given point. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(522, "label", 11);
        \u0275\u0275element(523, "input", 96);
        \u0275\u0275text(524, " Hearing the information and responding. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(525, "label", 11);
        \u0275\u0275element(526, "input", 96);
        \u0275\u0275text(527, " Setting up and customizing your own sales. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(528, "label", 11);
        \u0275\u0275element(529, "input", 97);
        \u0275\u0275text(530, " New Admin Launched. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(531, "label", 11);
        \u0275\u0275element(532, "input", 97);
        \u0275\u0275text(533, " To maximize profits and improve productivity. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(534, "label", 11);
        \u0275\u0275element(535, "input", 97);
        \u0275\u0275text(536, " To have a complete 360\xB0 overview of sales information, having. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(537, "div", 20)(538, "pre", 21)(539, "code", 21);
        \u0275\u0275text(540, '<div class="list-group">\n<label class="list-group-item">\n<input class="form-check-input me-1" type="radio" value=""\nname="list-radio" checked>\nAccurate information at any given point.\n</label>\n<label class="list-group-item">\n<input class="form-check-input me-1" type="radio" value=""\nname="list-radio" checked>\nHearing the information and responding.\n</label>\n<label class="list-group-item">\n<input class="form-check-input me-1" type="radio" value=""\nname="list-radio" checked>\nSetting up and customizing your own sales.\n</label>\n<label class="list-group-item">\n<input class="form-check-input me-1" type="radio" value=""\nname="list-radio">\nNew Admin Launched.\n</label>\n<label class="list-group-item">\n<input class="form-check-input me-1" type="radio" value=""\nname="list-radio">\nTo maximize profits and improve productivity.\n</label>\n<label class="list-group-item">\n<input class="form-check-input me-1" type="radio" value=""\nname="list-radio">\nTo have a complete 360\xB0 overview of sales information, having.\n</label>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(541, "div", 85)(542, "div", 3)(543, "div", 4)(544, "div", 5);
        \u0275\u0275text(545, " List With badges ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(546, "div", 6)(547, "button", 7);
        \u0275\u0275text(548, "Show Code");
        \u0275\u0275element(549, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(550, "div", 9)(551, "ul", 10)(552, "li", 98);
        \u0275\u0275text(553, " Groceries ");
        \u0275\u0275elementStart(554, "span", 99);
        \u0275\u0275text(555, "Available");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(556, "li", 98);
        \u0275\u0275text(557, " Furniture ");
        \u0275\u0275elementStart(558, "span", 100);
        \u0275\u0275text(559, "Buy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(560, "li", 98);
        \u0275\u0275text(561, " Beauty ");
        \u0275\u0275elementStart(562, "span", 101);
        \u0275\u0275text(563, "32");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(564, "li", 98);
        \u0275\u0275text(565, " Books ");
        \u0275\u0275elementStart(566, "span", 102);
        \u0275\u0275text(567, "New");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(568, "li", 98);
        \u0275\u0275text(569, " Toys ");
        \u0275\u0275elementStart(570, "span", 103);
        \u0275\u0275text(571, "Hot");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(572, "li", 98);
        \u0275\u0275text(573, " Mobiles ");
        \u0275\u0275elementStart(574, "span", 104);
        \u0275\u0275text(575, "Sold Out");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(576, "div", 20)(577, "pre", 21)(578, "code", 21);
        \u0275\u0275text(579, '<ul class="list-group">\n<li\nclass="list-group-item d-flex justify-content-between align-items-center fw-semibold">\nGroceries\n<span class="badge bg-primary">Available</span>\n</li>\n<li\nclass="list-group-item d-flex justify-content-between align-items-center fw-semibold">\nFurniture\n<span class="badge bg-secondary">Buy</span>\n</li>\n<li\nclass="list-group-item d-flex justify-content-between align-items-center fw-semibold">\nBeauty\n<span class="badge bg-danger rounded-pill">32</span>\n</li>\n<li\nclass="list-group-item d-flex justify-content-between align-items-center fw-semibold">\nBooks\n<span class="badge bg-light text-default">New</span>\n</li>\n<li\nclass="list-group-item d-flex justify-content-between align-items-center fw-semibold">\nToys\n<span class="badge bg-info-gradient">Hot</span>\n</li>\n<li\nclass="list-group-item d-flex justify-content-between align-items-center fw-semibold">\nMobiles\n<span class="badge bg-warning">Sold Out</span>\n</li>\n</ul>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(580, "div", 85)(581, "div", 3)(582, "div", 4)(583, "div", 5);
        \u0275\u0275text(584, " Horizontal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(585, "div", 6)(586, "button", 7);
        \u0275\u0275text(587, "Show Code");
        \u0275\u0275element(588, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(589, "div", 9)(590, "ul", 105)(591, "li", 11);
        \u0275\u0275text(592, "An item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(593, "li", 11);
        \u0275\u0275text(594, "A second item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(595, "li", 11);
        \u0275\u0275text(596, "A third item");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(597, "ul", 106)(598, "li", 11);
        \u0275\u0275text(599, "An item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(600, "li", 11);
        \u0275\u0275text(601, "A second item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(602, "li", 11);
        \u0275\u0275text(603, "A third item");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(604, "ul", 107)(605, "li", 11);
        \u0275\u0275text(606, "An item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(607, "li", 11);
        \u0275\u0275text(608, "A second item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(609, "li", 11);
        \u0275\u0275text(610, "A third item");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(611, "ul", 108)(612, "li", 11);
        \u0275\u0275text(613, "An item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(614, "li", 11);
        \u0275\u0275text(615, "A second item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(616, "li", 11);
        \u0275\u0275text(617, "A third item");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(618, "ul", 109)(619, "li", 11);
        \u0275\u0275text(620, "An item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(621, "li", 11);
        \u0275\u0275text(622, "A second item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(623, "li", 11);
        \u0275\u0275text(624, "A third item");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(625, "ul", 110)(626, "li", 11);
        \u0275\u0275text(627, "An item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(628, "li", 11);
        \u0275\u0275text(629, "A second item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(630, "li", 11);
        \u0275\u0275text(631, "A third item");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(632, "div", 20)(633, "pre", 21)(634, "code", 21);
        \u0275\u0275text(635, '<ul class="mb-3 list-group list-group-horizontal">\n<li class="list-group-item">An item</li>\n<li class="list-group-item">A second item</li>\n<li class="list-group-item">A third item</li>\n</ul>\n<ul class="mb-3 list-group list-group-horizontal-sm">\n<li class="list-group-item">An item</li>\n<li class="list-group-item">A second item</li>\n<li class="list-group-item">A third item</li>\n</ul>\n<ul class="mb-3 list-group list-group-horizontal-md">\n<li class="list-group-item">An item</li>\n<li class="list-group-item">A second item</li>\n<li class="list-group-item">A third item</li>\n</ul>\n<ul class="mb-3 list-group list-group-horizontal-lg">\n<li class="list-group-item">An item</li>\n<li class="list-group-item">A second item</li>\n<li class="list-group-item">A third item</li>\n</ul>\n<ul class="mb-3 list-group list-group-horizontal-xl">\n<li class="list-group-item">An item</li>\n<li class="list-group-item">A second item</li>\n<li class="list-group-item">A third item</li>\n</ul>\n<ul class="mb-3 list-group list-group-horizontal-xxl">\n<li class="list-group-item">An item</li>\n<li class="list-group-item">A second item</li>\n<li class="list-group-item">A third item</li>\n</ul>');
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListgroupComponent, { className: "ListgroupComponent", filePath: "src\\app\\components\\uielements\\listgroup\\listgroup.component.ts", lineNumber: 11 });
})();
export {
  ListgroupComponent
};
//# sourceMappingURL=listgroup.component-EILOZQLC.js.map
