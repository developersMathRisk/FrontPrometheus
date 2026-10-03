import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  FlatpickrDirective,
  FlatpickrModule,
  PageHeaderComponent,
  SharedModule,
  esm_default
} from "./chunk-RADZCKPS.js";
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/todo-list/todo-list-04/todo-list-04.component.ts
function TodoList04Component_ng_template_81_For_3_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275element(1, "img", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const assign_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", assign_r3.img, \u0275\u0275sanitizeUrl);
  }
}
function TodoList04Component_ng_template_81_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "div", 63)(4, "div")(5, "p", 64)(6, "a", 65);
    \u0275\u0275element(7, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 66);
    \u0275\u0275text(10, "Assigned On : ");
    \u0275\u0275elementStart(11, "span", 67);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 66);
    \u0275\u0275text(14, "Target Date : ");
    \u0275\u0275elementStart(15, "span", 67);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 68);
    \u0275\u0275text(18, "Assigned To : ");
    \u0275\u0275elementStart(19, "span", 69);
    \u0275\u0275repeaterCreate(20, TodoList04Component_ng_template_81_For_3_For_21_Template, 2, 1, "span", 70, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "div", 71)(24, "button", 72);
    \u0275\u0275element(25, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 74);
    \u0275\u0275element(27, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classMapInterpolate1("ri-star-s-fill fs-16 op-5 me-1 text-", data_r4.rate, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r4.title, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r4.assigned);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r4.targetDate);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(data_r4.assignedTo);
    \u0275\u0275advance(8);
    \u0275\u0275classMapInterpolate1("badge bg-", data_r4.badge, "-transparent d-block");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4.prieority);
  }
}
function TodoList04Component_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59);
    \u0275\u0275repeaterCreate(2, TodoList04Component_ng_template_81_For_3_Template, 30, 10, "div", 60, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.AllTask);
  }
}
function TodoList04Component_ng_template_85_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 61)(2, "div", 62)(3, "div", 63)(4, "div")(5, "p", 64)(6, "a", 65);
    \u0275\u0275element(7, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 66);
    \u0275\u0275text(10, "Assigned On : ");
    \u0275\u0275elementStart(11, "span", 67);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 66);
    \u0275\u0275text(14, "Target Date : ");
    \u0275\u0275elementStart(15, "span", 67);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 68);
    \u0275\u0275text(18, "Assigned To : ");
    \u0275\u0275elementStart(19, "span", 69)(20, "span", 70);
    \u0275\u0275element(21, "img", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 70);
    \u0275\u0275element(23, "img", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 70);
    \u0275\u0275element(25, "img", 81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div")(27, "div", 71)(28, "button", 82);
    \u0275\u0275element(29, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 83);
    \u0275\u0275element(31, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classMapInterpolate1("ri-star-s-fill fs-16 op-5 me-1 text-", data_r6.rate, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r6.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r6.assigned);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r6.targetDate);
    \u0275\u0275advance(16);
    \u0275\u0275classMapInterpolate1("badge bg-", data_r6.badge, "-transparent d-block");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r6.prieority);
  }
}
function TodoList04Component_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 3);
    \u0275\u0275repeaterCreate(2, TodoList04Component_ng_template_85_For_3_Template, 34, 10, "div", 78, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.Pending);
  }
}
function TodoList04Component_ng_template_89_For_3_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275element(1, "img", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const assign_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", assign_r7.img, \u0275\u0275sanitizeUrl);
  }
}
function TodoList04Component_ng_template_89_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 85)(2, "div", 62)(3, "div", 63)(4, "div")(5, "p", 64)(6, "a", 65);
    \u0275\u0275element(7, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 66);
    \u0275\u0275text(10, "Assigned On : ");
    \u0275\u0275elementStart(11, "span", 67);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 66);
    \u0275\u0275text(14, "Target Date : ");
    \u0275\u0275elementStart(15, "span", 67);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 68);
    \u0275\u0275text(18, "Assigned To : ");
    \u0275\u0275elementStart(19, "span", 69);
    \u0275\u0275repeaterCreate(20, TodoList04Component_ng_template_89_For_3_For_21_Template, 2, 1, "span", 70, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "div", 71)(24, "button", 82);
    \u0275\u0275element(25, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 83);
    \u0275\u0275element(27, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275classMapInterpolate1("ri-star-s-fill fs-16 me-1 text-", data_r8.rate, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r8.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r8.assigned);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r8.targetDate);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(data_r8.assignedTo);
    \u0275\u0275advance(8);
    \u0275\u0275classMapInterpolate1("badge bg-", data_r8.badge, "-transparent d-block");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r8.prieority);
  }
}
function TodoList04Component_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 3);
    \u0275\u0275repeaterCreate(2, TodoList04Component_ng_template_89_For_3_Template, 30, 10, "div", 78, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.InProgress);
  }
}
function TodoList04Component_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 3)(2, "div", 78)(3, "div", 87)(4, "div", 62)(5, "div", 63)(6, "div")(7, "p", 64)(8, "a", 65);
    \u0275\u0275element(9, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "New Plugin Development");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 66);
    \u0275\u0275text(12, "Assigned On : ");
    \u0275\u0275elementStart(13, "span", 67);
    \u0275\u0275text(14, "28,Oct 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 66);
    \u0275\u0275text(16, "Target Date : ");
    \u0275\u0275elementStart(17, "span", 67);
    \u0275\u0275text(18, "28,Nov 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 68);
    \u0275\u0275text(20, "Assigned To : ");
    \u0275\u0275elementStart(21, "span", 69)(22, "span", 70);
    \u0275\u0275element(23, "img", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 70);
    \u0275\u0275element(25, "img", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 70);
    \u0275\u0275element(27, "img", 90);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div")(29, "div", 71)(30, "button", 82);
    \u0275\u0275element(31, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 83);
    \u0275\u0275element(33, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "span", 91);
    \u0275\u0275text(35, "Low");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(36, "div", 78)(37, "div", 87)(38, "div", 62)(39, "div", 63)(40, "div")(41, "p", 64)(42, "a", 65);
    \u0275\u0275element(43, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "Documentation For New Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 66);
    \u0275\u0275text(46, "Assigned On : ");
    \u0275\u0275elementStart(47, "span", 67);
    \u0275\u0275text(48, "25,Nov 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "p", 66);
    \u0275\u0275text(50, "Target Date : ");
    \u0275\u0275elementStart(51, "span", 67);
    \u0275\u0275text(52, "10,Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "p", 68);
    \u0275\u0275text(54, "Assigned To : ");
    \u0275\u0275elementStart(55, "span", 69)(56, "span", 70);
    \u0275\u0275element(57, "img", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 70);
    \u0275\u0275element(59, "img", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 70);
    \u0275\u0275element(61, "img", 92);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div")(63, "div", 71)(64, "button", 82);
    \u0275\u0275element(65, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 83);
    \u0275\u0275element(67, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "span", 93);
    \u0275\u0275text(69, "Critical");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(70, "div", 78)(71, "div", 87)(72, "div", 62)(73, "div", 63)(74, "div")(75, "p", 64)(76, "a", 65);
    \u0275\u0275element(77, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "Developing New Events in Plugin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 66);
    \u0275\u0275text(80, "Assigned On : ");
    \u0275\u0275elementStart(81, "span", 67);
    \u0275\u0275text(82, "5,Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "p", 66);
    \u0275\u0275text(84, "Target Date : ");
    \u0275\u0275elementStart(85, "span", 67);
    \u0275\u0275text(86, "10,Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "p", 68);
    \u0275\u0275text(88, "Assigned To : ");
    \u0275\u0275elementStart(89, "span", 69)(90, "span", 70);
    \u0275\u0275element(91, "img", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 70);
    \u0275\u0275element(93, "img", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span", 70);
    \u0275\u0275element(95, "img", 92);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(96, "div")(97, "div", 71)(98, "button", 82);
    \u0275\u0275element(99, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "button", 83);
    \u0275\u0275element(101, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "span", 95);
    \u0275\u0275text(103, "Medium");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(104, "div", 78)(105, "div", 87)(106, "div", 62)(107, "div", 63)(108, "div")(109, "p", 64)(110, "a", 65);
    \u0275\u0275element(111, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "Designing Of New Ecommerce Pages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "p", 66);
    \u0275\u0275text(114, "Assigned On : ");
    \u0275\u0275elementStart(115, "span", 67);
    \u0275\u0275text(116, "1,Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "p", 66);
    \u0275\u0275text(118, "Target Date : ");
    \u0275\u0275elementStart(119, "span", 67);
    \u0275\u0275text(120, "15,Dec 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "p", 68);
    \u0275\u0275text(122, "Assigned To : ");
    \u0275\u0275elementStart(123, "span", 69)(124, "span", 70);
    \u0275\u0275element(125, "img", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span", 70);
    \u0275\u0275element(127, "img", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "span", 70);
    \u0275\u0275element(129, "img", 97);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(130, "div")(131, "div", 71)(132, "button", 82);
    \u0275\u0275element(133, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "button", 83);
    \u0275\u0275element(135, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "span", 91);
    \u0275\u0275text(137, "Low");
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function TodoList04Component_ng_template_125_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asign_r11 = ctx.$implicit;
    \u0275\u0275property("value", asign_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(asign_r11.name);
  }
}
function TodoList04Component_ng_template_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "h6", 99);
    \u0275\u0275text(2, "Create Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 100);
    \u0275\u0275listener("click", function TodoList04Component_ng_template_125_Template_button_click_3_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 101)(5, "div", 102)(6, "div", 39)(7, "label", 103);
    \u0275\u0275text(8, "Task Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 39)(11, "label", 105);
    \u0275\u0275text(12, "Assigned To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-select", 106);
    \u0275\u0275twoWayListener("ngModelChange", function TodoList04Component_ng_template_125_Template_ng_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.selectedasigned, $event) || (ctx_r4.selectedasigned = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(14, TodoList04Component_ng_template_125_For_15_Template, 2, 2, "ng-option", 107, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 108)(17, "label", 105);
    \u0275\u0275text(18, "Assigned Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 109)(20, "div", 110)(21, "div", 111);
    \u0275\u0275element(22, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 113);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 108)(25, "label", 105);
    \u0275\u0275text(26, "Target Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 109)(28, "div", 110)(29, "div", 111);
    \u0275\u0275element(30, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 114);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 39)(33, "label", 105);
    \u0275\u0275text(34, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "ng-select", 115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 116)(37, "button", 117);
    \u0275\u0275listener("click", function TodoList04Component_ng_template_125_Template_button_click_37_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("Close click"));
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 118);
    \u0275\u0275text(40, "Create");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("multiple", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.selectedasigned);
    \u0275\u0275property("hideSelected", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.Asigned);
    \u0275\u0275advance(9);
    \u0275\u0275property("enableTime", true)("convertModelValue", true)("dateFormat", "Y-m-d H:i");
    \u0275\u0275advance(8);
    \u0275\u0275property("altInput", true)("convertModelValue", true)("enableTime", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r4.simpleItems);
  }
}
var TodoList04Component = class _TodoList04Component {
  constructor(modalService) {
    this.modalService = modalService;
    this.simpleItems = ["Select"];
    this.selectedasigned = [4];
    this.Asigned = [
      { id: 1, name: "Hercules Jhon" },
      { id: 2, name: "Kiara Advain", disabled: true },
      { id: 3, name: "Mayour kim" },
      { id: 4, name: "Angellin may" }
    ];
    this.flatpickrOptions = {
      inline: true
    };
    this.AllTask = [
      {
        title: "New Project Blueprint",
        rate: "muted",
        assigned: "13,Nov 2022",
        targetDate: "20,Nov 2022",
        badge: "warning",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/10.jpg" }
        ],
        prieority: "High"
      },
      {
        title: "Design New Landing Pages",
        rate: "warning",
        assigned: "21,Nov 2022",
        targetDate: "28,Nov 2022",
        badge: "primary",
        assignedTo: [
          { img: "./assets/images/faces/1.jpg" },
          { img: "./assets/images/faces/5.jpg" },
          { img: "./assets/images/faces/12.jpg" }
        ],
        prieority: "Medium"
      },
      {
        title: "Updating Old Ui",
        rate: "warning",
        assigned: "31,Nov 2022",
        targetDate: "02,Dec 2023",
        badge: "warning",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/10.jpg" }
        ],
        prieority: "High"
      },
      {
        title: "New Plugin Development",
        rate: "muted",
        assigned: "28,Oct 2022",
        targetDate: "28,Nov 2022",
        badge: "success",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" }
        ],
        prieority: "Low"
      },
      {
        title: "Designing Of Ecommerce Pages",
        rate: "muted",
        assigned: " 1,Dec 2022",
        targetDate: " 15,Dec 2022",
        badge: "success",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" }
        ],
        prieority: "Low"
      },
      {
        title: "Designing Of Ecommerce Pages",
        rate: "muted",
        assigned: " 11,Dec 2022",
        targetDate: "28,Dec 2022",
        badge: "success",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" }
        ],
        prieority: "Low"
      },
      {
        title: "Improving Ui Of Templates",
        rate: "muted",
        assigned: "4,Dec 2022",
        targetDate: "20,Dec 2022",
        badge: "primary",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" }
        ],
        prieority: "Medium"
      },
      {
        title: "Designing Authentication Pages",
        rate: "muted",
        assigned: "26,Nov 2022",
        targetDate: "12,Dec 2022",
        badge: "danger",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" }
        ],
        prieority: "critical"
      },
      {
        title: "Documentation For New Template",
        rate: "muted",
        assigned: "25,Nov 2022",
        targetDate: " 10,Dec 2022",
        badge: "primary",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" }
        ],
        prieority: "Medium"
      }
    ];
    this.Pending = [
      {
        title: "New Project Blueprint",
        rate: "muted",
        assigned: "13,Nov 2022",
        targetDate: "20,Nov 2022",
        badge: "warning",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/10.jpg" }
        ],
        prieority: "High"
      },
      {
        title: "Updating Old Ui",
        rate: "warning",
        assigned: "31,Nov 2022",
        targetDate: "02,Dec 2023",
        badge: "warning",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/10.jpg" }
        ],
        prieority: "High"
      }
    ];
    this.InProgress = [
      {
        title: "Design New Landing Pages",
        rate: "warning",
        assigned: "21,Nov 2022",
        targetDate: "28,Nov 2022",
        badge: "primary",
        assignedTo: [
          { img: "./assets/images/faces/1.jpg" },
          { img: "./assets/images/faces/5.jpg" },
          { img: "./assets/images/faces/12.jpg" }
        ],
        prieority: "Medium"
      },
      {
        title: "Designing Authentication Pages",
        rate: "muted",
        assigned: "26,Nov 2022",
        targetDate: "12,Dec 2022",
        badge: "success",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" }
        ],
        prieority: "Low"
      },
      {
        title: "Improving Ui Of Templates",
        rate: "muted",
        assigned: "4,Dec 2022",
        targetDate: "20,Dec 2022",
        badge: "primary",
        assignedTo: [
          { img: "./assets/images/faces/2.jpg" },
          { img: "./assets/images/faces/8.jpg" },
          { img: "./assets/images/faces/2.jpg" }
        ],
        prieority: "Medium"
      }
    ];
  }
  opencontent(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      centered: true
    });
  }
  ngOnInit() {
    this.simpleItems = ["Critical", "High", "Medium", "low"];
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i"
    };
    esm_default("#inlinetime", this.flatpickrOptions);
    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      // Specify the format you want
      defaultDate: "2023-11-07 14:30"
      // Set the default/preloaded time (adjust this to your desired time)
    };
    esm_default("#pretime", this.flatpickrOptions);
  }
  static {
    this.\u0275fac = function TodoList04Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TodoList04Component)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodoList04Component, selectors: [["app-todo-list-04"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 127, vars: 5, consts: [["nav", "ngbNav"], ["content", ""], ["hassub", "Apps", "sub", "", "title1", "Todo list", "title", "Todo list4", "activeTitle", "Todo List4"], [1, "row"], [1, "col-md-12", "col-xl-3", "col-lg-4"], [1, "card", "filemanager-list"], [1, "card-header", "p-3"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#addtask", 1, "btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center", "w-100", 3, "click"], [1, "ri-add-circle-line", "fs-16", "align-middle", "me-1"], [1, "card-body", "px-0", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "file-manger", "px-0"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "active"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon", "me-2"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 10h3.13c.21.78.67 1.47 1.27 2H5v-2zm14 2h-4.4c.6-.53 1.06-1.22 1.27-2H19v2zm0-4h-5v1c0 1.07-.93 2-2 2s-2-.93-2-2V8H5V5h14v3zm-5 7v1c0 .47-.19.9-.48 1.25-.37.45-.92.75-1.52.75s-1.15-.3-1.52-.75c-.29-.35-.48-.78-.48-1.25v-1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-7zm-9 2h3.13c.02.09.06.17.09.25.24.68.65 1.28 1.18 1.75H5v-2zm14 2h-4.4c.54-.47.95-1.07 1.18-1.75.03-.08.07-.16.09-.25H19v2z"], ["d", "M8.13 10H5v2h4.4c-.6-.53-1.06-1.22-1.27-2zm6.47 2H19v-2h-3.13c-.21.78-.67 1.47-1.27 2zm-6.38 5.25c-.03-.08-.06-.16-.09-.25H5v2h4.4c-.53-.47-.94-1.07-1.18-1.75zm7.65-.25c-.02.09-.06.17-.09.25-.23.68-.64 1.28-1.18 1.75H19v-2h-3.13z", "opacity", ".3"], [1, "ms-auto", "badge", "bg-success"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center"], ["d", "M18.49 9.89l.26-2.79-2.74-.62-1.43-2.41L12 5.18 9.42 4.07 7.99 6.48l-2.74.62.26 2.78L3.66 12l1.85 2.11-.26 2.8 2.74.62 1.43 2.41L12 18.82l2.58 1.11 1.43-2.41 2.74-.62-.26-2.79L20.34 12l-1.85-2.11zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z", "opacity", ".3"], ["d", "M20.9 5.54l-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12l-2.44-2.78.34-3.68zM18.75 16.9l-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11.26 2.79zM11 15h2v2h-2zm0-8h2v6h-2z"], [1, "ms-auto", "badge", "bg-danger"], ["d", "M17.11 10.83l-2.47-.21-1.2-.1-.47-1.11L12 7.13l-.97 2.28-.47 1.11-1.2.1-2.47.21 1.88 1.63.91.79-.27 1.17-.57 2.42 2.13-1.28 1.03-.63 1.03.63 2.13 1.28-.57-2.42-.27-1.17.91-.79z", "opacity", ".3"], ["d", "M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zm-7.41 5.18l.56 2.41-2.12-1.28-1.03-.62-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.16z"], ["d", "M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z", "opacity", ".3"], ["d", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"], ["d", "M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z", "opacity", ".3"], ["d", "M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"], [1, "card-body", "border-top", "py-3"], [1, "list-group", "list-group-transparent", "mb-0", "mail-inbox"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "px-0", "py-2"], [1, "rounded-dot", "bg-primary-transparent", "me-2"], [1, "rounded-dot", "bg-secondary-transparent", "me-2"], [1, "rounded-dot", "bg-success-transparent", "me-2"], [1, "rounded-dot", "bg-info-transparent", "me-2"], [1, "rounded-dot", "bg-warning-transparent", "me-2"], [1, "rounded-dot", "bg-danger-transparent", "me-2"], [1, "col-md-12", "col-lg-8", "col-xl-9"], [1, "col-xl-12"], [1, "card"], [1, "card-body", "p-0"], [1, "d-flex", "p-3", "align-items-center", "justify-content-between"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-header", "mb-0", "d-sm-flex", "d-block"], [1, "nav-item", "m-1", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", "aria-current", "page", "aria-selected", "true", 1, "nav-link"], ["ngbNavContent", ""], ["ngbDropdown", "", 1, "dropdown"], ["ngbDropdownToggle", "", "aria-label", "button", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-wave", "waves-light", "waves-effect", "no-caret"], [1, "ti", "ti-dots-vertical"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "tab-content", "task-tabs-container", 3, "ngbNavOutlet"], [1, "pagination", "justify-content-end"], [1, "page-item", "disabled"], [1, "page-link"], [1, "page-item"], ["href", "javascript:void(0);", 1, "page-link"], ["id", "all-tasks", "role", "tabpanel", 1, "tab-pane", "show", "p-0"], ["id", "tasks-container", 1, "row"], [1, "col-xl-4", "task-card"], [1, "card", "task-pending-card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "flex-wrap", "gap-2"], [1, "fw-semibold", "mb-3", "d-flex", "align-items-center"], ["aria-label", "anchor", "href", "javascript:void(0);"], [1, "mb-3"], [1, "fs-12", "mb-1", "text-muted"], [1, "mb-0"], [1, "avatar-list-stacked", "ms-1"], [1, "avatar", "avatar-sm", "avatar-rounded"], [1, "btn-list"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-wave", "btn-primary-light"], [1, "ri-edit-line"], ["aria-label", "button", "type", "button", 1, "btn", "btn-sm", "btn-icon", "btn-wave", "btn-danger-light", "me-0"], [1, "ri-delete-bin-line"], ["alt", "img", 3, "src"], ["id", "pending", "role", "tabpanel", 1, "tab-pane", "p-0"], [1, "col-xl-4"], ["src", "./assets/images/faces/2.jpg", "alt", "img"], ["src", "./assets/images/faces/8.jpg", "alt", "img"], ["src", "./assets/images/faces/10.jpg", "alt", "img"], ["type", "button", "aria-label", "button", 1, "btn", "btn-sm", "btn-icon", "btn-wave", "btn-primary-light"], ["type", "button", "aria-label", "button", 1, "btn", "btn-sm", "btn-icon", "btn-wave", "btn-danger-light", "me-0"], ["id", "in-progress", "role", "tabpanel", 1, "tab-pane", "p-0"], [1, "card", "task-inprogress-card"], ["id", "completed", "role", "tabpanel", 1, "tab-pane", "p-0"], [1, "card", "task-completed-card"], [1, "ri-star-s-fill", "fs-16", "op-5", "me-1", "text-muted"], ["src", "./assets/images/faces/3.jpg", "alt", "img"], ["src", "./assets/images/faces/9.jpg", "alt", "img"], [1, "badge", "bg-success-transparent", "d-block"], ["src", "./assets/images/faces/11.jpg", "alt", "img"], [1, "badge", "bg-danger-transparent", "d-block"], ["src", "./assets/images/faces/5.jpg", "alt", "img"], [1, "badge", "bg-primary-transparent", "d-block"], ["src", "./assets/images/faces/1.jpg", "alt", "img"], ["src", "./assets/images/faces/6.jpg", "alt", "img"], [1, "modal-header"], ["id", "mail-ComposeLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4"], [1, "row", "gy-2"], ["for", "task-name", 1, "form-label"], ["type", "text", "id", "task-name", "placeholder", "Task Name", 1, "form-control"], [1, "form-label"], [3, "ngModelChange", "multiple", "ngModel", "hideSelected"], [3, "value"], [1, "col-xl-6"], [1, "form-group"], [1, "input-group"], [1, "input-group-text", "text-muted"], [1, "ri-calendar-line"], ["type", "text", "id", "addignedDate", "placeholder", "Choose date and time", "mwlFlatpickr", "", 1, "form-control", 3, "enableTime", "convertModelValue", "dateFormat"], ["type", "text", "id", "targetDate", "placeholder", "Choose date and time", "mwlFlatpickr", "", "dateFormat", "Y-m-dTH:i", 1, "form-control", 3, "altInput", "convertModelValue", "enableTime"], ["placeholder", "High", 3, "items"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function TodoList04Component_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "button", 7);
        \u0275\u0275listener("click", function TodoList04Component_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          const content_r2 = \u0275\u0275reference(126);
          return \u0275\u0275resetView(ctx.opencontent(content_r2));
        });
        \u0275\u0275element(6, "i", 8);
        \u0275\u0275text(7, "Create New Task ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 9)(9, "div", 10)(10, "a", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 12);
        \u0275\u0275element(12, "path", 13)(13, "path", 14)(14, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "All Tasks");
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "span", 16);
        \u0275\u0275text(17, "12");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "a", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(19, "svg", 12);
        \u0275\u0275element(20, "path", 13)(21, "path", 18)(22, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Important ");
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "span", 20);
        \u0275\u0275text(25, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "a", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 12);
        \u0275\u0275element(28, "path", 13)(29, "path", 21)(30, "path", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " Starred ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(32, "a", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(33, "svg", 12);
        \u0275\u0275element(34, "path", 23)(35, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " Spam ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "a", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 12);
        \u0275\u0275element(39, "path", 13)(40, "path", 25)(41, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " Archive ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "a", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 12);
        \u0275\u0275element(45, "path", 13)(46, "path", 27)(47, "path", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " Trash ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "div", 29)(50, "div", 30)(51, "a", 31);
        \u0275\u0275element(52, "span", 32);
        \u0275\u0275text(53, " Pending Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "a", 31);
        \u0275\u0275element(55, "span", 33);
        \u0275\u0275text(56, "Unassigned Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "a", 31);
        \u0275\u0275element(58, "span", 34);
        \u0275\u0275text(59, " Completed Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "a", 31);
        \u0275\u0275element(61, "span", 35);
        \u0275\u0275text(62, " Hold Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "a", 31);
        \u0275\u0275element(64, "span", 36);
        \u0275\u0275text(65, " Task Issue ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "a", 31);
        \u0275\u0275element(67, "span", 37);
        \u0275\u0275text(68, " Settings ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(69, "div", 38)(70, "div", 3)(71, "div", 39)(72, "div", 40)(73, "div", 41)(74, "div", 42)(75, "div")(76, "ul", 43, 0)(78, "li", 44)(79, "a", 45);
        \u0275\u0275text(80, "All Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275template(81, TodoList04Component_ng_template_81_Template, 4, 0, "ng-template", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "li", 44)(83, "a", 45);
        \u0275\u0275text(84, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275template(85, TodoList04Component_ng_template_85_Template, 4, 0, "ng-template", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "li", 44)(87, "a", 45);
        \u0275\u0275text(88, "In Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275template(89, TodoList04Component_ng_template_89_Template, 4, 0, "ng-template", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "li", 44)(91, "a", 45);
        \u0275\u0275text(92, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275template(93, TodoList04Component_ng_template_93_Template, 138, 0, "ng-template", 46);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div")(95, "div", 47)(96, "button", 48);
        \u0275\u0275element(97, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "ul", 50)(99, "li")(100, "a", 51);
        \u0275\u0275text(101, "Select All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "li")(103, "a", 51);
        \u0275\u0275text(104, "Share All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "li")(106, "a", 51);
        \u0275\u0275text(107, "Delete All");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275element(108, "div", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "ul", 53)(110, "li", 54)(111, "a", 55);
        \u0275\u0275text(112, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "li", 56)(114, "a", 57);
        \u0275\u0275text(115, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "li", 56)(117, "a", 57);
        \u0275\u0275text(118, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "li", 56)(120, "a", 57);
        \u0275\u0275text(121, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "li", 56)(123, "a", 57);
        \u0275\u0275text(124, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(125, TodoList04Component_ng_template_125_Template, 41, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const nav_r12 = \u0275\u0275reference(77);
        \u0275\u0275advance(78);
        \u0275\u0275property("ngbNavItem", 1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 2);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 3);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 4);
        \u0275\u0275advance(18);
        \u0275\u0275property("ngbNavOutlet", nav_r12);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, FlatpickrModule, FlatpickrDirective, NgSelectModule, NgSelectComponent, NgOptionComponent, FormsModule, NgControlStatus, NgModel] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodoList04Component, { className: "TodoList04Component", filePath: "src\\app\\components\\apps\\todo-list\\todo-list-04\\todo-list-04.component.ts", lineNumber: 16 });
})();
export {
  TodoList04Component
};
//# sourceMappingURL=todo-list-04.component-C7KLJBTX.js.map
