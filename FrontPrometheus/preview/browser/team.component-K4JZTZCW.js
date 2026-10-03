import {
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModule
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/team/team.component.ts
var TeamComponent = class _TeamComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.teamData = [
      {
        src: "./assets/images/faces/11.jpg",
        name: "NoahFisher",
        mail: "noahfisher041@gmail.com"
      },
      {
        src: "./assets/images/faces/2.jpg",
        name: "Isabella Rose",
        mail: "isabellarose98@gmail.com"
      },
      {
        src: "./assets/images/faces/4.jpg",
        name: "Nitheri Morgan",
        mail: "Nitherimorgan45@gmail.com"
      },
      {
        src: "./assets/images/faces/10.jpg",
        name: "EthanClark",
        mail: "ethanclark111@gmail.com"
      },
      {
        src: "./assets/images/faces/13.jpg",
        name: "Jackson Taylor",
        mail: "jacksontaylor00@gmail.com"
      },
      {
        src: "./assets/images/faces/5.jpg",
        name: "Amelia Grace",
        mail: "ameliagrace16@gmail.com"
      },
      {
        src: "./assets/images/faces/8.jpg",
        name: "Natalie Miller",
        mail: "nataliemiller2135@gmail.com"
      },
      {
        src: "./assets/images/faces/15.jpg",
        name: "Evelyn Anna",
        mail: "liamanderson52@gmail.com"
      }
    ];
  }
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: "dark-modal", centered: true });
  }
  static {
    this.\u0275fac = function TeamComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamComponent, selectors: [["app-team"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 564, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Pages", "title", "Team", "activeTitle", "Team"], [1, "row"], [1, "col-xl-12"], [1, "card", "bg-transparent", "shadow-none", "border-0"], [1, "card-body", "p-0"], [1, "team-header"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "input-group"], ["type", "text", "placeholder", "Search Person Name", "aria-describedby", "search-team-member", 1, "form-control", "bg-white", "border-0"], ["aria-label", "button", "type", "button", "id", "search-team-member", 1, "btn", "btn-light", "bg-white", "border-0"], [1, "ri-search-line", "text-muted"], ["ngbDropdown", "", 1, "dropdown", "ms-2", "mt-2", "mt-sm-0"], ["ngbDropdownToggle", "", "aria-label", "button", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-wave", "waves-effect", "waves-light", "px-2", "no-caret"], [1, "ti", "ti-dots-vertical", "fs-18"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "col-xxl-4", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card", "team-member-card"], [1, "teammember-cover-image"], ["src", "./assets/images/media/team-covers/1.jpg", "alt", "...", 1, "card-img-top"], [1, "avatar", "avatar-xl", "avatar-rounded"], ["src", "./assets/images/faces/11.jpg", "alt", ""], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "team-member-star", "text-warning"], [1, "ri-star-fill", "fs-16"], [1, "d-flex", "flex-wrap", "align-item-center", "mt-sm-0", "mt-5", "justify-content-between", "border-bottom", "border-block-end-dashed", "p-3"], [1, "team-member-details", "flex-fill"], [1, "mb-0", "fw-semibold", "fs-16", "text-truncate"], ["href", "javascript:void(0);"], [1, "mb-0", "fs-12", "text-muted", "text-break"], ["ngbDropdownToggle", "", "aria-label", "button", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-icon", "btn-light", "btn-wave", "no-caret"], [1, "ti", "ti-dots-vertical"], [1, "team-member-stats", "d-sm-flex", "justify-content-evenly"], [1, "text-center", "p-3", "my-auto", "w-100"], [1, "fw-semibold", "mb-0", "text-nowrap"], [1, "text-muted", "fs-12"], [1, "fw-semibold", "mb-0"], [1, "card-footer", "border-block-start-dashed", "text-center"], [1, "btn-list"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-light", "btn-wave", "waves-effect", "waves-light"], [1, "ri-facebook-line", "fw-bold"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-secondary-light", "btn-wave", "waves-effect", "waves-light"], [1, "ri-twitter-x-line", "fw-bold"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-warning-light", "btn-wave", "waves-effect", "waves-light"], [1, "ri-instagram-line", "fw-bold"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-success-light", "btn-wave", "waves-effect", "waves-light"], [1, "ri-github-line", "fw-bold"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-danger-light", "btn-wave", "waves-effect", "waves-light"], [1, "ri-youtube-line", "fw-bold"], ["src", "./assets/images/media/team-covers/2.jpg", "alt", "...", 1, "card-img-top"], ["src", "./assets/images/faces/2.jpg", "alt", ""], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "team-member-star", "text-fixed-white"], ["href", "javsscript:void(0);"], ["type", "button", "aria-label", "button", 1, "btn", "btn-sm", "btn-icon", "btn-light", "btn-wave", "waves-effect", "waves-light"], ["type", "button", "aria-label", "button", 1, "btn", "btn-sm", "btn-icon", "btn-secondary-light", "btn-wave", "waves-effect", "waves-light"], ["type", "button", "aria-label", "button", 1, "btn", "btn-sm", "btn-icon", "btn-warning-light", "btn-wave", "waves-effect", "waves-light"], ["type", "button", "aria-label", "button", 1, "btn", "btn-sm", "btn-icon", "btn-success-light", "btn-wave", "waves-effect", "waves-light"], ["type", "button", "aria-label", "button", 1, "btn", "btn-sm", "btn-icon", "btn-danger-light", "btn-wave", "waves-effect", "waves-light"], ["src", "./assets/images/media/team-covers/3.jpg", "alt", "...", 1, "card-img-top"], ["src", "./assets/images/faces/4.jpg", "alt", ""], ["src", "./assets/images/media/team-covers/4.jpg", "alt", "...", 1, "card-img-top"], ["src", "./assets/images/faces/10.jpg", "alt", ""], ["src", "./assets/images/media/team-covers/5.jpg", "alt", "...", 1, "card-img-top"], ["src", "./assets/images/faces/13.jpg", "alt", ""], ["src", "./assets/images/media/team-covers/6.jpg", "alt", "...", 1, "card-img-top"], ["src", "./assets/images/faces/5.jpg", "alt", ""], ["ngbDropdown", "", 1, "dropdown"], ["src", "./assets/images/media/team-covers/7.jpg", "alt", "...", 1, "card-img-top"], ["src", "./assets/images/faces/8.jpg", "alt", ""], ["src", "./assets/images/media/team-covers/8.jpg", "alt", "...", 1, "card-img-top"], ["src", "./assets/images/faces/14.jpg", "alt", ""], ["src", "./assets/images/media/team-covers/9.jpg", "alt", "...", 1, "card-img-top"], ["src", "./assets/images/faces/15.jpg", "alt", ""], ["aria-label", "..."], [1, "pagination", "justify-content-end"], [1, "page-item", "disabled"], [1, "page-link"], [1, "page-item"], ["href", "javascript:void(0);", 1, "page-link"], ["aria-current", "page", 1, "page-item", "active"]], template: function TeamComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div")(8, "div", 7);
        \u0275\u0275element(9, "input", 8);
        \u0275\u0275elementStart(10, "button", 9);
        \u0275\u0275element(11, "i", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 11)(13, "button", 12);
        \u0275\u0275element(14, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul", 14)(16, "li")(17, "a", 15);
        \u0275\u0275text(18, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li")(20, "a", 15);
        \u0275\u0275text(21, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li")(23, "a", 15);
        \u0275\u0275text(24, "Remove");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18);
        \u0275\u0275element(28, "img", 19);
        \u0275\u0275elementStart(29, "span", 20);
        \u0275\u0275element(30, "img", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "a", 22);
        \u0275\u0275element(32, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 4)(34, "div", 24)(35, "div", 25)(36, "p", 26)(37, "a", 27);
        \u0275\u0275text(38, "Alexander Smith");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "p", 28);
        \u0275\u0275text(40, "alexandersmith2135@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 11)(42, "button", 29);
        \u0275\u0275element(43, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "ul", 14)(45, "li")(46, "a", 15);
        \u0275\u0275text(47, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "li")(49, "a", 15);
        \u0275\u0275text(50, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "li")(52, "a", 15);
        \u0275\u0275text(53, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(54, "div", 31)(55, "div", 32)(56, "p", 33);
        \u0275\u0275text(57, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 34);
        \u0275\u0275text(59, "16 Months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 32)(61, "p", 35);
        \u0275\u0275text(62, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span", 34);
        \u0275\u0275text(64, "45");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 32)(66, "p", 35);
        \u0275\u0275text(67, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 34);
        \u0275\u0275text(69, "Member");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(70, "div", 36)(71, "div", 37)(72, "div", 37)(73, "button", 38);
        \u0275\u0275element(74, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "button", 40);
        \u0275\u0275element(76, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 42);
        \u0275\u0275element(78, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "button", 44);
        \u0275\u0275element(80, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "button", 46);
        \u0275\u0275element(82, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(83, "div", 16)(84, "div", 17)(85, "div", 18);
        \u0275\u0275element(86, "img", 48);
        \u0275\u0275elementStart(87, "span", 20);
        \u0275\u0275element(88, "img", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "a", 50);
        \u0275\u0275element(90, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 4)(92, "div", 24)(93, "div", 25)(94, "p", 26)(95, "a", 51);
        \u0275\u0275text(96, "Alicia Sierra");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "p", 28);
        \u0275\u0275text(98, "aliciasierra1645@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 11)(100, "button", 29);
        \u0275\u0275element(101, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "ul", 14)(103, "li")(104, "a", 15);
        \u0275\u0275text(105, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "li")(107, "a", 15);
        \u0275\u0275text(108, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "li")(110, "a", 15);
        \u0275\u0275text(111, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(112, "div", 31)(113, "div", 32)(114, "p", 33);
        \u0275\u0275text(115, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "span", 34);
        \u0275\u0275text(117, "2 Years");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 32)(119, "p", 35);
        \u0275\u0275text(120, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "span", 34);
        \u0275\u0275text(122, "78");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 32)(124, "p", 35);
        \u0275\u0275text(125, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "span", 34);
        \u0275\u0275text(127, "Associate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(128, "div", 36)(129, "div", 37)(130, "div", 37)(131, "button", 52);
        \u0275\u0275element(132, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "button", 53);
        \u0275\u0275element(134, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "button", 54);
        \u0275\u0275element(136, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "button", 55);
        \u0275\u0275element(138, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "button", 56);
        \u0275\u0275element(140, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(141, "div", 16)(142, "div", 17)(143, "div", 18);
        \u0275\u0275element(144, "img", 57);
        \u0275\u0275elementStart(145, "span", 20);
        \u0275\u0275element(146, "img", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "a", 50);
        \u0275\u0275element(148, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "div", 4)(150, "div", 24)(151, "div", 25)(152, "p", 26)(153, "a", 27);
        \u0275\u0275text(154, "Angelica Hose");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "p", 28);
        \u0275\u0275text(156, "angelica143@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(157, "div", 11)(158, "button", 29);
        \u0275\u0275element(159, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "ul", 14)(161, "li")(162, "a", 15);
        \u0275\u0275text(163, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "li")(165, "a", 15);
        \u0275\u0275text(166, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "li")(168, "a", 15);
        \u0275\u0275text(169, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(170, "div", 31)(171, "div", 32)(172, "p", 33);
        \u0275\u0275text(173, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "span", 34);
        \u0275\u0275text(175, "12 Months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(176, "div", 32)(177, "p", 35);
        \u0275\u0275text(178, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "span", 34);
        \u0275\u0275text(180, "35");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(181, "div", 32)(182, "p", 35);
        \u0275\u0275text(183, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "span", 34);
        \u0275\u0275text(185, "Member");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(186, "div", 36)(187, "div", 37)(188, "div", 37)(189, "button", 52);
        \u0275\u0275element(190, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "button", 53);
        \u0275\u0275element(192, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "button", 54);
        \u0275\u0275element(194, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "button", 55);
        \u0275\u0275element(196, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "button", 56);
        \u0275\u0275element(198, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(199, "div", 16)(200, "div", 17)(201, "div", 18);
        \u0275\u0275element(202, "img", 59);
        \u0275\u0275elementStart(203, "span", 20);
        \u0275\u0275element(204, "img", 60);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "a", 50);
        \u0275\u0275element(206, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "div", 4)(208, "div", 24)(209, "div", 25)(210, "p", 26)(211, "a", 27);
        \u0275\u0275text(212, "Jhope Joseph");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(213, "p", 28);
        \u0275\u0275text(214, "jhope.joseph@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(215, "div", 11)(216, "button", 29);
        \u0275\u0275element(217, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "ul", 14)(219, "li")(220, "a", 15);
        \u0275\u0275text(221, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "li")(223, "a", 15);
        \u0275\u0275text(224, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(225, "li")(226, "a", 15);
        \u0275\u0275text(227, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(228, "div", 31)(229, "div", 32)(230, "p", 33);
        \u0275\u0275text(231, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "span", 34);
        \u0275\u0275text(233, "3 Years");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(234, "div", 32)(235, "p", 35);
        \u0275\u0275text(236, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "span", 34);
        \u0275\u0275text(238, "126");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(239, "div", 32)(240, "p", 35);
        \u0275\u0275text(241, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "span", 34);
        \u0275\u0275text(243, "Team Lead");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(244, "div", 36)(245, "div", 37)(246, "div", 37)(247, "button", 52);
        \u0275\u0275element(248, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "button", 53);
        \u0275\u0275element(250, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "button", 54);
        \u0275\u0275element(252, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "button", 55);
        \u0275\u0275element(254, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(255, "button", 56);
        \u0275\u0275element(256, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(257, "div", 16)(258, "div", 17)(259, "div", 18);
        \u0275\u0275element(260, "img", 61);
        \u0275\u0275elementStart(261, "span", 20);
        \u0275\u0275element(262, "img", 62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "a", 22);
        \u0275\u0275element(264, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "div", 4)(266, "div", 24)(267, "div", 25)(268, "p", 26)(269, "a", 27);
        \u0275\u0275text(270, "King Martin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(271, "p", 28);
        \u0275\u0275text(272, "martinking1998@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(273, "div", 11)(274, "button", 29);
        \u0275\u0275element(275, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(276, "ul", 14)(277, "li")(278, "a", 15);
        \u0275\u0275text(279, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(280, "li")(281, "a", 15);
        \u0275\u0275text(282, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(283, "li")(284, "a", 15);
        \u0275\u0275text(285, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(286, "div", 31)(287, "div", 32)(288, "p", 33);
        \u0275\u0275text(289, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "span", 34);
        \u0275\u0275text(291, "28 Months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(292, "div", 32)(293, "p", 35);
        \u0275\u0275text(294, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(295, "span", 34);
        \u0275\u0275text(296, "114");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(297, "div", 32)(298, "p", 35);
        \u0275\u0275text(299, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(300, "span", 34);
        \u0275\u0275text(301, "Member");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(302, "div", 36)(303, "div", 37)(304, "div", 37)(305, "button", 38);
        \u0275\u0275element(306, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "button", 40);
        \u0275\u0275element(308, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(309, "button", 42);
        \u0275\u0275element(310, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(311, "button", 44);
        \u0275\u0275element(312, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(313, "button", 46);
        \u0275\u0275element(314, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(315, "div", 16)(316, "div", 17)(317, "div", 18);
        \u0275\u0275element(318, "img", 63);
        \u0275\u0275elementStart(319, "span", 20);
        \u0275\u0275element(320, "img", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "a", 50);
        \u0275\u0275element(322, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(323, "div", 4)(324, "div", 24)(325, "div", 25)(326, "p", 26)(327, "a", 27);
        \u0275\u0275text(328, "Susan Sane");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(329, "p", 28);
        \u0275\u0275text(330, "susanasane@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(331, "div", 65)(332, "button", 29);
        \u0275\u0275element(333, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(334, "ul", 14)(335, "li")(336, "a", 15);
        \u0275\u0275text(337, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(338, "li")(339, "a", 15);
        \u0275\u0275text(340, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(341, "li")(342, "a", 15);
        \u0275\u0275text(343, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(344, "div", 31)(345, "div", 32)(346, "p", 33);
        \u0275\u0275text(347, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(348, "span", 34);
        \u0275\u0275text(349, "18 Months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(350, "div", 32)(351, "p", 35);
        \u0275\u0275text(352, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(353, "span", 34);
        \u0275\u0275text(354, "74");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(355, "div", 32)(356, "p", 35);
        \u0275\u0275text(357, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(358, "span", 34);
        \u0275\u0275text(359, "Member");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(360, "div", 36)(361, "div", 37)(362, "div", 37)(363, "button", 38);
        \u0275\u0275element(364, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(365, "button", 40);
        \u0275\u0275element(366, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(367, "button", 42);
        \u0275\u0275element(368, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(369, "button", 44);
        \u0275\u0275element(370, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(371, "button", 46);
        \u0275\u0275element(372, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(373, "div", 16)(374, "div", 17)(375, "div", 18);
        \u0275\u0275element(376, "img", 66);
        \u0275\u0275elementStart(377, "span", 20);
        \u0275\u0275element(378, "img", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(379, "a", 50);
        \u0275\u0275element(380, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(381, "div", 4)(382, "div", 24)(383, "div", 25)(384, "p", 26)(385, "a", 27);
        \u0275\u0275text(386, "Brenda Hops");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(387, "p", 28);
        \u0275\u0275text(388, "brrendahops245@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(389, "div", 65)(390, "button", 29);
        \u0275\u0275element(391, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(392, "ul", 14)(393, "li")(394, "a", 15);
        \u0275\u0275text(395, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(396, "li")(397, "a", 15);
        \u0275\u0275text(398, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(399, "li")(400, "a", 15);
        \u0275\u0275text(401, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(402, "div", 31)(403, "div", 32)(404, "p", 33);
        \u0275\u0275text(405, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(406, "span", 34);
        \u0275\u0275text(407, "16 Months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(408, "div", 32)(409, "p", 35);
        \u0275\u0275text(410, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(411, "span", 34);
        \u0275\u0275text(412, "64");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(413, "div", 32)(414, "p", 35);
        \u0275\u0275text(415, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(416, "span", 34);
        \u0275\u0275text(417, "Member");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(418, "div", 36)(419, "div", 37)(420, "div", 37)(421, "button", 38);
        \u0275\u0275element(422, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(423, "button", 40);
        \u0275\u0275element(424, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(425, "button", 42);
        \u0275\u0275element(426, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(427, "button", 44);
        \u0275\u0275element(428, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(429, "button", 46);
        \u0275\u0275element(430, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(431, "div", 16)(432, "div", 17)(433, "div", 18);
        \u0275\u0275element(434, "img", 68);
        \u0275\u0275elementStart(435, "span", 20);
        \u0275\u0275element(436, "img", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(437, "a", 50);
        \u0275\u0275element(438, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(439, "div", 4)(440, "div", 24)(441, "div", 25)(442, "p", 26)(443, "a", 27);
        \u0275\u0275text(444, "Paul Rudd");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(445, "p", 28);
        \u0275\u0275text(446, "paulrudd143@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(447, "div", 65)(448, "button", 29);
        \u0275\u0275element(449, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(450, "ul", 14)(451, "li")(452, "a", 15);
        \u0275\u0275text(453, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(454, "li")(455, "a", 15);
        \u0275\u0275text(456, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(457, "li")(458, "a", 15);
        \u0275\u0275text(459, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(460, "div", 31)(461, "div", 32)(462, "p", 33);
        \u0275\u0275text(463, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(464, "span", 34);
        \u0275\u0275text(465, "7 Months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(466, "div", 32)(467, "p", 35);
        \u0275\u0275text(468, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(469, "span", 34);
        \u0275\u0275text(470, "17");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(471, "div", 32)(472, "p", 35);
        \u0275\u0275text(473, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(474, "span", 34);
        \u0275\u0275text(475, "Member");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(476, "div", 36)(477, "div", 37)(478, "div", 37)(479, "button", 38);
        \u0275\u0275element(480, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(481, "button", 40);
        \u0275\u0275element(482, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(483, "button", 42);
        \u0275\u0275element(484, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(485, "button", 44);
        \u0275\u0275element(486, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(487, "button", 46);
        \u0275\u0275element(488, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(489, "div", 16)(490, "div", 17)(491, "div", 18);
        \u0275\u0275element(492, "img", 70);
        \u0275\u0275elementStart(493, "span", 20);
        \u0275\u0275element(494, "img", 71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(495, "a", 50);
        \u0275\u0275element(496, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(497, "div", 4)(498, "div", 24)(499, "div", 25)(500, "p", 26)(501, "a", 27);
        \u0275\u0275text(502, "Elisha Jin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(503, "p", 28);
        \u0275\u0275text(504, "elishajin@gmail.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(505, "div", 65)(506, "button", 29);
        \u0275\u0275element(507, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(508, "ul", 14)(509, "li")(510, "a", 15);
        \u0275\u0275text(511, "Move To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(512, "li")(513, "a", 15);
        \u0275\u0275text(514, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(515, "li")(516, "a", 15);
        \u0275\u0275text(517, "Remove");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(518, "div", 31)(519, "div", 32)(520, "p", 33);
        \u0275\u0275text(521, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(522, "span", 34);
        \u0275\u0275text(523, "4 Years");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(524, "div", 32)(525, "p", 35);
        \u0275\u0275text(526, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(527, "span", 34);
        \u0275\u0275text(528, "321");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(529, "div", 32)(530, "p", 35);
        \u0275\u0275text(531, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(532, "span", 34);
        \u0275\u0275text(533, "Manager");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(534, "div", 36)(535, "div", 37)(536, "div", 37)(537, "button", 38);
        \u0275\u0275element(538, "i", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(539, "button", 40);
        \u0275\u0275element(540, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(541, "button", 42);
        \u0275\u0275element(542, "i", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(543, "button", 44);
        \u0275\u0275element(544, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(545, "button", 46);
        \u0275\u0275element(546, "i", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(547, "nav", 72)(548, "ul", 73)(549, "li", 74)(550, "span", 75);
        \u0275\u0275text(551, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(552, "li", 76)(553, "a", 77);
        \u0275\u0275text(554, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(555, "li", 78)(556, "span", 75);
        \u0275\u0275text(557, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(558, "li", 76)(559, "a", 77);
        \u0275\u0275text(560, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(561, "li", 76)(562, "a", 77);
        \u0275\u0275text(563, "Next");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamComponent, { className: "TeamComponent", filePath: "src\\app\\components\\pages\\team\\team.component.ts", lineNumber: 13 });
})();
export {
  TeamComponent
};
//# sourceMappingURL=team.component-K4JZTZCW.js.map
