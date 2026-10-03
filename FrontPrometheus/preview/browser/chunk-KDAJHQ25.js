import {
  NgOptionComponent,
  NgSelectComponent,
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
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavModule,
  NgbNavOutlet
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";

// src/app/components/pages/email/mailsettings/mailsettings.component.ts
function MailsettingsComponent_ng_template_10_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.name);
  }
}
function MailsettingsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h6", 19);
    \u0275\u0275text(3, " Photo : ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21)(6, "span", 22);
    \u0275\u0275element(7, "img", 23);
    \u0275\u0275elementStart(8, "a", 24);
    \u0275\u0275listener("change", function MailsettingsComponent_ng_template_10_Template_a_change_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFileInput($event));
    });
    \u0275\u0275element(9, "input", 25)(10, "i", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 27)(12, "button", 28);
    \u0275\u0275text(13, "Change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 29);
    \u0275\u0275text(15, "Remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "h6", 19);
    \u0275\u0275text(17, " Profile : ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 30)(19, "div", 31)(20, "label", 32);
    \u0275\u0275text(21, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 31)(24, "label", 34);
    \u0275\u0275text(25, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 3)(28, "label", 36);
    \u0275\u0275text(29, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 37)(31, "span", 38);
    \u0275\u0275text(32, "user2413@gmail.com");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "h6", 19);
    \u0275\u0275text(35, " Personal information : ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 30)(37, "div", 31)(38, "label", 40);
    \u0275\u0275text(39, "Email Address :");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 31)(42, "label", 42);
    \u0275\u0275text(43, "Contact Details :");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 31)(46, "label", 44);
    \u0275\u0275text(47, "Language :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ng-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function MailsettingsComponent_ng_template_10_Template_ng_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLanguage, $event) || (ctx_r1.selectedLanguage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(49, MailsettingsComponent_ng_template_10_For_50_Template, 2, 2, "ng-option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 31)(52, "label", 36);
    \u0275\u0275text(53, "Country :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ng-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function MailsettingsComponent_ng_template_10_Template_ng_select_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedSimpleItem, $event) || (ctx_r1.selectedSimpleItem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 3)(56, "label", 48);
    \u0275\u0275text(57, "Bio :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "textarea", 49);
    \u0275\u0275text(59, "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r1.url1 ? ctx_r1.url1 : "./assets/images/faces/9.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(41);
    \u0275\u0275property("multiple", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLanguage);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.Languages);
    \u0275\u0275advance(5);
    \u0275\u0275property("items", ctx_r1.simpleItems);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedSimpleItem);
  }
}
function MailsettingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "div", 53)(4, "div", 11)(5, "div", 54)(6, "div")(7, "p", 55);
    \u0275\u0275text(8, "Two Step Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 56);
    \u0275\u0275text(10, "Two step verificatoin is very secured and restricts in happening faulty practices.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 57);
    \u0275\u0275element(12, "input", 58)(13, "label", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 54)(15, "div", 60)(16, "p", 61);
    \u0275\u0275text(17, "Authentication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 62)(19, "div", 63);
    \u0275\u0275element(20, "input", 64);
    \u0275\u0275elementStart(21, "label", 65);
    \u0275\u0275element(22, "i", 66);
    \u0275\u0275text(23, "Pin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 67);
    \u0275\u0275elementStart(25, "label", 68);
    \u0275\u0275element(26, "i", 69);
    \u0275\u0275text(27, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 70);
    \u0275\u0275elementStart(29, "label", 71);
    \u0275\u0275element(30, "i", 72);
    \u0275\u0275text(31, "Finger Print");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 57);
    \u0275\u0275element(33, "input", 73)(34, "label", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 54)(36, "div")(37, "p", 55);
    \u0275\u0275text(38, "Recovery Mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 56);
    \u0275\u0275text(40, "Incase of forgetting password mails are sent to heifo@gmail.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 57);
    \u0275\u0275element(42, "input", 75)(43, "label", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 54)(45, "div")(46, "p", 55);
    \u0275\u0275text(47, "SMS Recovery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 56);
    \u0275\u0275text(49, "SMS are sent to 9102312xx in case of recovery");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 57);
    \u0275\u0275element(51, "input", 77)(52, "label", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 79)(54, "div")(55, "p", 55);
    \u0275\u0275text(56, "Reset Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 80);
    \u0275\u0275text(58, "Password should be min of ");
    \u0275\u0275elementStart(59, "b", 81);
    \u0275\u0275text(60, "8 digits");
    \u0275\u0275elementStart(61, "sup");
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(63, ",atleast ");
    \u0275\u0275elementStart(64, "b", 81);
    \u0275\u0275text(65, "One Capital letter");
    \u0275\u0275elementStart(66, "sup");
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(68, " and ");
    \u0275\u0275elementStart(69, "b", 81);
    \u0275\u0275text(70, "One Special Character");
    \u0275\u0275elementStart(71, "sup");
    \u0275\u0275text(72, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(73, " included.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 82)(75, "label", 83);
    \u0275\u0275text(76, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 82)(79, "label", 85);
    \u0275\u0275text(80, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 87)(83, "label", 88);
    \u0275\u0275text(84, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "input", 89);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(86, "div", 90)(87, "div", 91)(88, "div", 92)(89, "div", 93);
    \u0275\u0275text(90, "Registered Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 94)(92, "button", 95);
    \u0275\u0275text(93, "Signout from all devices");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 11)(95, "ul", 96)(96, "li", 97)(97, "div", 98)(98, "div", 99);
    \u0275\u0275element(99, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 101)(101, "p", 102)(102, "span", 103);
    \u0275\u0275text(103, "Mobile-LG-1023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "p", 87)(105, "span", 104);
    \u0275\u0275text(106, "Manchester, UK-Nov 30, 04:45PM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 105)(108, "a", 106);
    \u0275\u0275element(109, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ul", 108)(111, "li")(112, "a", 109);
    \u0275\u0275text(113, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "li")(115, "a", 109);
    \u0275\u0275text(116, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "li")(118, "a", 109);
    \u0275\u0275text(119, "Something else here");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(120, "li", 97)(121, "div", 98)(122, "div", 99);
    \u0275\u0275element(123, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 101)(125, "p", 102)(126, "span", 103);
    \u0275\u0275text(127, "Lenovo-1291203");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "p", 87)(129, "span", 104);
    \u0275\u0275text(130, "England, UK-Aug 12, 12:25PM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "div", 105)(132, "a", 106);
    \u0275\u0275element(133, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "ul", 108)(135, "li")(136, "a", 109);
    \u0275\u0275text(137, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "li")(139, "a", 109);
    \u0275\u0275text(140, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "li")(142, "a", 109);
    \u0275\u0275text(143, "Something else here");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(144, "li", 97)(145, "div", 98)(146, "div", 99);
    \u0275\u0275element(147, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "div", 101)(149, "p", 102)(150, "span", 103);
    \u0275\u0275text(151, "Macbook-Suzika");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "p", 87)(153, "span", 104);
    \u0275\u0275text(154, "Brightoon, UK-Jul 18, 8:34AM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(155, "div", 105)(156, "a", 106);
    \u0275\u0275element(157, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "ul", 108)(159, "li")(160, "a", 109);
    \u0275\u0275text(161, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "li")(163, "a", 109);
    \u0275\u0275text(164, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "li")(166, "a", 109);
    \u0275\u0275text(167, "Something else here");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(168, "li", 97)(169, "div", 98)(170, "div", 99);
    \u0275\u0275element(171, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "div", 101)(173, "p", 102)(174, "span", 103);
    \u0275\u0275text(175, "Apple-Desktop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "p", 87)(177, "span", 104);
    \u0275\u0275text(178, "Darlington, UK-Jan 14, 11:14AM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(179, "div", 105)(180, "a", 106);
    \u0275\u0275element(181, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "ul", 108)(183, "li")(184, "a", 109);
    \u0275\u0275text(185, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "li")(187, "a", 109);
    \u0275\u0275text(188, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "li")(190, "a", 109);
    \u0275\u0275text(191, "Something else here");
    \u0275\u0275elementEnd()()()()()()()()()()()();
  }
}
function MailsettingsComponent_ng_template_18_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.name);
  }
}
function MailsettingsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "ul", 113)(2, "li", 97)(3, "div", 114)(4, "div", 115)(5, "span", 116);
    \u0275\u0275text(6, "Menu View :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 90)(8, "div", 117);
    \u0275\u0275element(9, "input", 118);
    \u0275\u0275elementStart(10, "label", 119);
    \u0275\u0275text(11, " Default View ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 117);
    \u0275\u0275element(13, "input", 120);
    \u0275\u0275elementStart(14, "label", 121);
    \u0275\u0275text(15, " Advanced View ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 122)(17, "div", 123);
    \u0275\u0275element(18, "input", 124)(19, "label", 125);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "li", 97)(21, "div", 126)(22, "div", 127)(23, "span", 116);
    \u0275\u0275text(24, "Language :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 90)(26, "label", 128);
    \u0275\u0275text(27, "Languages :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ng-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function MailsettingsComponent_ng_template_18_Template_ng_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLanguage, $event) || (ctx_r1.selectedLanguage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(29, MailsettingsComponent_ng_template_18_For_30_Template, 2, 2, "ng-option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(31, "ng-option", 46);
    \u0275\u0275text(32, "Custom");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 122)(34, "div", 123);
    \u0275\u0275element(35, "input", 129)(36, "label", 130);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "li", 97)(38, "div", 114)(39, "div", 127)(40, "span", 116);
    \u0275\u0275text(41, "Images :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 90)(43, "div", 117);
    \u0275\u0275element(44, "input", 131);
    \u0275\u0275elementStart(45, "label", 132);
    \u0275\u0275text(46, " Always Open Images ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 117);
    \u0275\u0275element(48, "input", 133);
    \u0275\u0275elementStart(49, "label", 134);
    \u0275\u0275text(50, " Ask For Permission ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 122)(52, "div", 123);
    \u0275\u0275element(53, "input", 135)(54, "label", 136);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "li", 97)(56, "div", 114)(57, "div", 127)(58, "span", 116);
    \u0275\u0275text(59, "Keyboard Shortcuts :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 90)(61, "div", 117);
    \u0275\u0275element(62, "input", 137);
    \u0275\u0275elementStart(63, "label", 138);
    \u0275\u0275text(64, " Keyboard Shortcuts Enable ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 117);
    \u0275\u0275element(66, "input", 139);
    \u0275\u0275elementStart(67, "label", 140);
    \u0275\u0275text(68, " Keyboard Shortcuts Disable ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 122)(70, "div", 123);
    \u0275\u0275element(71, "input", 141)(72, "label", 142);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "li", 97)(74, "div", 114)(75, "div", 127)(76, "span", 116);
    \u0275\u0275text(77, "Notifications :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 90)(79, "div", 117);
    \u0275\u0275element(80, "input", 143);
    \u0275\u0275elementStart(81, "label", 144);
    \u0275\u0275text(82, " Desktop Notifications ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 117);
    \u0275\u0275element(84, "input", 145);
    \u0275\u0275elementStart(85, "label", 146);
    \u0275\u0275text(86, " Mobile Notifications ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div", 122)(88, "div", 147)(89, "a", 148);
    \u0275\u0275text(90, "Learn-more");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(91, "li", 97)(92, "div", 126)(93, "div", 127)(94, "span", 116);
    \u0275\u0275text(95, "Maximum Mails Per Page :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 90)(97, "ng-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function MailsettingsComponent_ng_template_18_Template_ng_select_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedSimpleItem3, $event) || (ctx_r1.selectedSimpleItem3 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 122)(99, "div", 123);
    \u0275\u0275element(100, "input", 149)(101, "label", 150);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(102, "li", 97)(103, "div", 114)(104, "div", 127)(105, "span", 116);
    \u0275\u0275text(106, "Mail Composer :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 90)(108, "div", 117);
    \u0275\u0275element(109, "input", 151);
    \u0275\u0275elementStart(110, "label", 152);
    \u0275\u0275text(111, " Mail Composer On ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 117);
    \u0275\u0275element(113, "input", 153);
    \u0275\u0275elementStart(114, "label", 154);
    \u0275\u0275text(115, " Mail Composer Off ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 122)(117, "div", 123);
    \u0275\u0275element(118, "input", 155)(119, "label", 156);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(120, "li", 97)(121, "div", 114)(122, "div", 127)(123, "span", 116);
    \u0275\u0275text(124, "Auto Correct :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 90)(126, "div", 117);
    \u0275\u0275element(127, "input", 157);
    \u0275\u0275elementStart(128, "label", 158);
    \u0275\u0275text(129, " Auto Correct On ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 117);
    \u0275\u0275element(131, "input", 159);
    \u0275\u0275elementStart(132, "label", 160);
    \u0275\u0275text(133, " Auto Correct Off ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(134, "div", 122)(135, "div", 123);
    \u0275\u0275element(136, "input", 161)(137, "label", 162);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(138, "li", 97)(139, "div", 114)(140, "div", 127)(141, "span", 116);
    \u0275\u0275text(142, "Mail Send Action :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 90)(144, "div", 117);
    \u0275\u0275element(145, "input", 163);
    \u0275\u0275elementStart(146, "label", 164);
    \u0275\u0275text(147, " On Keyboard Action ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "div", 117);
    \u0275\u0275element(149, "input", 165);
    \u0275\u0275elementStart(150, "label", 166);
    \u0275\u0275text(151, " On Button Click ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(152, "div", 122)(153, "div", 147)(154, "a", 148);
    \u0275\u0275text(155, "Learn-more");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(28);
    \u0275\u0275property("multiple", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLanguage);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.Languages);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "custom");
    \u0275\u0275advance(66);
    \u0275\u0275property("items", ctx_r1.simpleItems3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedSimpleItem3);
  }
}
function MailsettingsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "p", 168);
    \u0275\u0275text(2, "Mail Labels :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 169)(4, "div", 127)(5, "div", 170)(6, "div", 171)(7, "div", 172)(8, "span", 103);
    \u0275\u0275text(9, "All Mails");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "div", 173);
    \u0275\u0275element(12, "input", 174);
    \u0275\u0275elementStart(13, "label", 175);
    \u0275\u0275text(14, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 176);
    \u0275\u0275elementStart(16, "label", 177);
    \u0275\u0275text(17, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(18, "div", 127)(19, "div", 170)(20, "div", 171)(21, "div", 172)(22, "span", 103);
    \u0275\u0275text(23, "Inbox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "div", 173);
    \u0275\u0275element(26, "input", 178);
    \u0275\u0275elementStart(27, "label", 179);
    \u0275\u0275text(28, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 180);
    \u0275\u0275elementStart(30, "label", 181);
    \u0275\u0275text(31, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(32, "div", 127)(33, "div", 170)(34, "div", 171)(35, "div", 172)(36, "span", 103);
    \u0275\u0275text(37, "Sent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "div", 173);
    \u0275\u0275element(40, "input", 182);
    \u0275\u0275elementStart(41, "label", 183);
    \u0275\u0275text(42, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 184);
    \u0275\u0275elementStart(44, "label", 185);
    \u0275\u0275text(45, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(46, "div", 127)(47, "div", 170)(48, "div", 171)(49, "div", 172)(50, "span", 103);
    \u0275\u0275text(51, "Drafts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div")(53, "div", 173);
    \u0275\u0275element(54, "input", 186);
    \u0275\u0275elementStart(55, "label", 187);
    \u0275\u0275text(56, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 188);
    \u0275\u0275elementStart(58, "label", 189);
    \u0275\u0275text(59, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(60, "div", 127)(61, "div", 170)(62, "div", 171)(63, "div", 172)(64, "span", 103);
    \u0275\u0275text(65, "Spam");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div")(67, "div", 173);
    \u0275\u0275element(68, "input", 190);
    \u0275\u0275elementStart(69, "label", 191);
    \u0275\u0275text(70, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 192);
    \u0275\u0275elementStart(72, "label", 193);
    \u0275\u0275text(73, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(74, "div", 127)(75, "div", 170)(76, "div", 171)(77, "div", 172)(78, "span", 103);
    \u0275\u0275text(79, "Important");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div")(81, "div", 173);
    \u0275\u0275element(82, "input", 194);
    \u0275\u0275elementStart(83, "label", 195);
    \u0275\u0275text(84, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "input", 196);
    \u0275\u0275elementStart(86, "label", 197);
    \u0275\u0275text(87, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(88, "div", 127)(89, "div", 170)(90, "div", 171)(91, "div", 172)(92, "span", 103);
    \u0275\u0275text(93, "Trash");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div")(95, "div", 173);
    \u0275\u0275element(96, "input", 198);
    \u0275\u0275elementStart(97, "label", 199);
    \u0275\u0275text(98, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 200);
    \u0275\u0275elementStart(100, "label", 201);
    \u0275\u0275text(101, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(102, "div", 127)(103, "div", 170)(104, "div", 171)(105, "div", 172)(106, "span", 103);
    \u0275\u0275text(107, "Archive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div")(109, "div", 173);
    \u0275\u0275element(110, "input", 202);
    \u0275\u0275elementStart(111, "label", 203);
    \u0275\u0275text(112, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "input", 204);
    \u0275\u0275elementStart(114, "label", 205);
    \u0275\u0275text(115, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(116, "div", 127)(117, "div", 170)(118, "div", 171)(119, "div", 172)(120, "span", 103);
    \u0275\u0275text(121, "Starred");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div")(123, "div", 173);
    \u0275\u0275element(124, "input", 206);
    \u0275\u0275elementStart(125, "label", 207);
    \u0275\u0275text(126, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(127, "input", 208);
    \u0275\u0275elementStart(128, "label", 209);
    \u0275\u0275text(129, "Disable");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(130, "p", 168);
    \u0275\u0275text(131, "Settings :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 169)(133, "div", 127)(134, "div", 170)(135, "div", 171)(136, "div", 172)(137, "span", 103);
    \u0275\u0275text(138, "Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div")(140, "div", 173);
    \u0275\u0275element(141, "input", 210);
    \u0275\u0275elementStart(142, "label", 211);
    \u0275\u0275text(143, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(144, "input", 212);
    \u0275\u0275elementStart(145, "label", 213);
    \u0275\u0275text(146, "Disable");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(147, "p", 168);
    \u0275\u0275text(148, "Custom Labels :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 169)(150, "div", 127)(151, "div", 170)(152, "div", 171)(153, "div", 172)(154, "span", 103);
    \u0275\u0275text(155, "Mail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div")(157, "div", 173);
    \u0275\u0275element(158, "input", 214);
    \u0275\u0275elementStart(159, "label", 215);
    \u0275\u0275text(160, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(161, "input", 216);
    \u0275\u0275elementStart(162, "label", 217);
    \u0275\u0275text(163, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(164, "div", 127)(165, "div", 170)(166, "div", 171)(167, "div", 172)(168, "span", 103);
    \u0275\u0275text(169, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(170, "div")(171, "div", 173);
    \u0275\u0275element(172, "input", 218);
    \u0275\u0275elementStart(173, "label", 219);
    \u0275\u0275text(174, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(175, "input", 220);
    \u0275\u0275elementStart(176, "label", 221);
    \u0275\u0275text(177, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(178, "div", 127)(179, "div", 170)(180, "div", 171)(181, "div", 172)(182, "span", 103);
    \u0275\u0275text(183, "Work");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "div")(185, "div", 173);
    \u0275\u0275element(186, "input", 222);
    \u0275\u0275elementStart(187, "label", 223);
    \u0275\u0275text(188, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(189, "input", 224);
    \u0275\u0275elementStart(190, "label", 225);
    \u0275\u0275text(191, "Disable");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(192, "div", 127)(193, "div", 170)(194, "div", 171)(195, "div", 172)(196, "span", 103);
    \u0275\u0275text(197, "Friends");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "div")(199, "div", 173);
    \u0275\u0275element(200, "input", 226);
    \u0275\u0275elementStart(201, "label", 227);
    \u0275\u0275text(202, "Enable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(203, "input", 228);
    \u0275\u0275elementStart(204, "label", 229);
    \u0275\u0275text(205, "Disable");
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function MailsettingsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230)(1, "ul", 231)(2, "li", 97)(3, "div", 232)(4, "div", 122)(5, "p", 233);
    \u0275\u0275text(6, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 234);
    \u0275\u0275text(8, "Email notifications are the notifications you will receeive when you are offline, you can customize them by enabling or disabling them.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 52)(10, "div", 235)(11, "div", 236)(12, "p", 55);
    \u0275\u0275text(13, "Updates & Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 234);
    \u0275\u0275text(15, "Notifications about new updates and their features.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "div", 123);
    \u0275\u0275element(18, "input", 237)(19, "label", 238);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 239)(21, "div", 236)(22, "p", 55);
    \u0275\u0275text(23, "Early Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 234);
    \u0275\u0275text(25, "Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "div", 123);
    \u0275\u0275element(28, "input", 240)(29, "label", 241);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 239)(31, "div", 236)(32, "p", 55);
    \u0275\u0275text(33, "Email Shortcuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 234);
    \u0275\u0275text(35, "Shortcut notifications for email.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "div", 123);
    \u0275\u0275element(38, "input", 242)(39, "label", 243);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 239)(41, "div", 236)(42, "p", 55);
    \u0275\u0275text(43, "New Mails");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 234);
    \u0275\u0275text(45, "Notifications related to new mails received.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "div", 123);
    \u0275\u0275element(48, "input", 244)(49, "label", 245);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 239)(51, "div", 236)(52, "p", 55);
    \u0275\u0275text(53, "Mail Chat Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 234);
    \u0275\u0275text(55, "Any of new messages are received will be updated through notifications.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div")(57, "div", 123);
    \u0275\u0275element(58, "input", 246)(59, "label", 247);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(60, "li", 97)(61, "div", 232)(62, "div", 122)(63, "p", 233);
    \u0275\u0275text(64, "Push Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 234);
    \u0275\u0275text(66, "Push notifications are recieved when you are online, you can customize them by enabling or disabling them.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 52)(68, "div", 235)(69, "div", 236)(70, "p", 55);
    \u0275\u0275text(71, "New Mails");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p", 234);
    \u0275\u0275text(73, "Notifications related to new mails received.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div")(75, "div", 123);
    \u0275\u0275element(76, "input", 248)(77, "label", 249);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 239)(79, "div", 236)(80, "p", 55);
    \u0275\u0275text(81, "Mail Chat Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p", 234);
    \u0275\u0275text(83, "Any of new messages are received will be updated through notifications.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div")(85, "div", 123);
    \u0275\u0275element(86, "input", 250)(87, "label", 251);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "div", 239)(89, "div", 236)(90, "p", 55);
    \u0275\u0275text(91, "Mail Extensions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "p", 234);
    \u0275\u0275text(93, "Notifications related to the extensions received by new emails and thier propertied also been displayed.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div")(95, "div", 123);
    \u0275\u0275element(96, "input", 252)(97, "label", 253);
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function MailsettingsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 254)(1, "ul", 231)(2, "li", 97)(3, "div", 232)(4, "div", 127)(5, "p", 233);
    \u0275\u0275text(6, "Logging In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 234);
    \u0275\u0275text(8, "Security settings related to logging into our email account and taking down account if any mischevious action happended.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 255)(10, "div", 256)(11, "div", 257)(12, "p", 55);
    \u0275\u0275text(13, "Max Limit for login attempts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 234);
    \u0275\u0275text(15, "Account will freeze for 24hrs while attempt to login with wrong credentials for selected number of times");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "ng-select", 258);
    \u0275\u0275twoWayListener("ngModelChange", function MailsettingsComponent_ng_template_30_Template_ng_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedSimpleItem1, $event) || (ctx_r1.selectedSimpleItem1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 259)(19, "div")(20, "p", 55);
    \u0275\u0275text(21, "Account Freeze time management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 234);
    \u0275\u0275text(23, "You can change the time for the account freeze when attempts for ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "ng-select", 260);
    \u0275\u0275twoWayListener("ngModelChange", function MailsettingsComponent_ng_template_30_Template_ng_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedSimpleItem2, $event) || (ctx_r1.selectedSimpleItem2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(26, "li", 97)(27, "div", 232)(28, "div", 127)(29, "p", 233);
    \u0275\u0275text(30, "Password Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 234);
    \u0275\u0275text(32, "Security settings related to password strength.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 255)(34, "div", 261)(35, "div", 257)(36, "p", 55);
    \u0275\u0275text(37, "Minimum number of characters in the password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 234);
    \u0275\u0275text(39, "There should be a minimum number of characters for a password to be validated that shouls be set here.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275element(41, "input", 262);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 259)(43, "div")(44, "p", 55);
    \u0275\u0275text(45, "Contain A Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 234);
    \u0275\u0275text(47, "Password should contain a number.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "div", 123);
    \u0275\u0275element(50, "input", 263)(51, "label", 264);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 259)(53, "div")(54, "p", 55);
    \u0275\u0275text(55, "Contain A Special Character");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 234);
    \u0275\u0275text(57, "Password should contain a special Character.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div")(59, "div", 123);
    \u0275\u0275element(60, "input", 265)(61, "label", 266);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 259)(63, "div")(64, "p", 55);
    \u0275\u0275text(65, "Atleast One Capital Letter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 234);
    \u0275\u0275text(67, "Password should contain atleast one capital letter.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div")(69, "div", 123);
    \u0275\u0275element(70, "input", 267)(71, "label", 268);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 259)(73, "div")(74, "p", 55);
    \u0275\u0275text(75, "Maximum Password Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 234);
    \u0275\u0275text(77, "Maximum password lenth should be selected here.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div");
    \u0275\u0275element(79, "input", 269);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(80, "li", 97)(81, "div", 232)(82, "div", 127)(83, "p", 233);
    \u0275\u0275text(84, "Unknown Chats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 234);
    \u0275\u0275text(86, "Security settings related to unknown chats.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 255)(88, "div")(89, "div", 117);
    \u0275\u0275element(90, "input", 270);
    \u0275\u0275elementStart(91, "label", 271);
    \u0275\u0275text(92, " Show ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 117);
    \u0275\u0275element(94, "input", 272);
    \u0275\u0275elementStart(95, "label", 273);
    \u0275\u0275text(96, " Hide ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("items", ctx_r1.simpleItems1);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedSimpleItem1);
    \u0275\u0275advance(8);
    \u0275\u0275property("items", ctx_r1.simpleItems2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedSimpleItem2);
  }
}
var MailsettingsComponent = class _MailsettingsComponent {
  constructor() {
    this.selectedSimpleItem = "Dubai";
    this.simpleItems = [];
    this.selectedSimpleItem1 = "3 Attempts";
    this.simpleItems1 = [];
    this.selectedSimpleItem2 = "1 Hour";
    this.simpleItems2 = [];
    this.selectedSimpleItem3 = "10";
    this.simpleItems3 = [];
    this.selectedLanguage = ["English", "French"];
    this.Languages = [
      { id: 1, name: "Arabic" },
      { id: 2, name: "French" },
      { id: 3, name: "Hindi" }
    ];
    this.url1 = "";
  }
  toggleDisabled() {
    const Language = this.Languages[1];
    Language.disabled = !Language.disabled;
  }
  ngOnInit() {
    this.simpleItems = ["Australia", "Dubai", "USA"];
    this.simpleItems1 = [
      "3 Attempts",
      "5 Attempts",
      "10 Attempts",
      "20 Attempt"
    ];
    this.simpleItems2 = ["1 Hour", "1 Day", "1 Month", "1 year"];
    this.simpleItems3 = ["10", "50", "100", "200"];
  }
  handleFileInput(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.url1 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  static {
    this.\u0275fac = function MailsettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MailsettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailsettingsComponent, selectors: [["app-mailsettings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 7, consts: [["nav", "ngbNav"], ["hassub", "", "sub", "Pages", "title1", "Mail", "title", "Mail Settings", "activeTitle", "Mail Settings"], [1, "row", "mb-5"], [1, "col-xl-12"], [1, "card", "mail-setting"], [1, "card-header", "d-sm-flex", "d-block"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-header", "mb-0", "d-sm-flex", "d-block"], [1, "nav-item", "m-1", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", "aria-current", "page", "aria-selected", "true", 1, "nav-link"], ["ngbNavContent", ""], ["ngbNavContent", "", 1, "p-0"], [1, "card-body"], [1, "tab-content", 3, "ngbNavOutlet"], [1, "card-footer"], [1, "float-end"], ["type", "button", 1, "btn", "btn-light", "m-1"], ["type", "button", 1, "btn", "btn-primary", "m-1"], ["id", "personal-info", "role", "tabpanel", 1, "show"], [1, "p-sm-3", "p-0"], [1, "fw-semibold", "mb-3"], [1, "mb-4", "d-sm-flex", "align-items-center"], [1, "mb-0", "me-5"], [1, "avatar", "avatar-xxl", "avatar-rounded"], ["alt", "", "id", "profile-img", 3, "src"], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "badge", "rounded-pill", "bg-primary", "avatar-badge", 3, "change"], ["type", "file", "name", "photo", "id", "profile-change", 1, "position-absolute", "w-100", "h-100", "op-0"], [1, "fe", "fe-camera"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-light"], [1, "row", "gy-4", "mb-4"], [1, "col-xl-6"], ["for", "first-name", 1, "form-label"], ["type", "text", "id", "first-name", "placeholder", "First Name", 1, "form-control"], ["for", "last-name", 1, "form-label"], ["type", "text", "id", "last-name", "placeholder", "Last Name", 1, "form-control"], [1, "form-label"], [1, "input-group", "mb-3"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], ["for", "email-address", 1, "form-label"], ["type", "text", "id", "email-address", "placeholder", "xyz@gmail.com", 1, "form-control"], ["for", "Contact-Details", 1, "form-label"], ["type", "text", "id", "Contact-Details", "placeholder", "contact details", 1, "form-control"], ["for", "language", 1, "form-label"], [3, "ngModelChange", "multiple", "ngModel"], [3, "value"], [3, "ngModelChange", "items", "ngModel"], ["for", "bio", 1, "form-label"], ["id", "bio", "rows", "5", 1, "form-control"], ["id", "account-settings", "role", "tabpanel", 1, ""], [1, "row", "gap-3", "justify-content-between"], [1, "col-xl-7"], [1, "card", "shadow-none", "mb-0"], [1, "d-sm-flex", "d-block", "align-items-top", "mb-4", "justify-content-between"], [1, "fs-14", "mb-1", "fw-semibold"], [1, "fs-12", "text-muted", "mb-0"], [1, "custom-toggle-switch", "ms-sm-2", "ms-0"], ["id", "two-step", "type", "checkbox", "checked", ""], ["for", "two-step", 1, "label-primary", "mb-1"], [1, "mb-sm-0", "mb-2"], [1, "fs-14", "mb-2", "fw-semibold"], [1, "mb-0", "authentication-btn-group"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group", "d-sm-flex", "d-block"], ["type", "radio", "name", "btnradio", "id", "btnradio1", "checked", "", 1, "btn-check"], ["for", "btnradio1", 1, "btn", "btn-outline-primary"], [1, "ri-lock-unlock-line", "me-1", "align-middle", "d-inline-block"], ["type", "radio", "name", "btnradio", "id", "btnradio2", 1, "btn-check"], ["for", "btnradio2", 1, "btn", "btn-outline-primary", "mt-sm-0", "mt-1"], [1, "ri-lock-password-line", "me-1", "align-middle", "d-inline-block"], ["type", "radio", "name", "btnradio", "id", "btnradio3", 1, "btn-check"], ["for", "btnradio3", 1, "btn", "btn-outline-primary", "mt-sm-0", "mt-1"], [1, "ri-fingerprint-line", "me-1", "align-middle", "d-inline-block"], ["id", "authentication", "type", "checkbox", "checked", ""], ["for", "authentication", 1, "label-primary", "mb-1"], ["id", "recovery-mail", "type", "checkbox", "checked", ""], ["for", "recovery-mail", 1, "label-primary", "mb-1"], ["id", "sms-recovery", "type", "checkbox", "checked", ""], ["for", "sms-recovery", 1, "label-primary", "mb-1"], [1, "d-flex", "align-items-top", "justify-content-between"], [1, "fs-12", "text-muted"], [1, "text-success"], [1, "mb-2"], ["for", "current-password", 1, "form-label"], ["type", "text", "id", "current-password", "placeholder", "Current Password", 1, "form-control"], ["for", "new-password", 1, "form-label"], ["type", "text", "id", "new-password", "placeholder", "New Password", 1, "form-control"], [1, "mb-0"], ["for", "confirm-password", 1, "form-label"], ["type", "text", "id", "confirm-password", "placeholder", "Confirm Password", 1, "form-control"], [1, "col-xl-4"], [1, "card", "shadow-none", "mb-0", "border"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "mt-sm-0", "mt-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary"], [1, "list-group"], [1, "list-group-item"], [1, "d-sm-flex", "d-block", "align-items-top"], [1, "lh-1", "mb-sm-0", "mb-2"], [1, "bi", "bi-phone", "me-2", "fs-16", "align-middle", "text-muted"], [1, "lh-1", "flex-fill"], [1, "mb-1"], [1, "fw-semibold"], [1, "text-muted", "fs-11"], ["ngbDropdown", "", 1, "dropdown", "mt-sm-0", "mt-2"], ["ngbDropdownToggle", "", "aria-label", "anchor", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "btn-sm", "btn-light", "no-caret"], [1, "fe", "fe-more-vertical"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "bi", "bi-laptop", "me-2", "fs-16", "align-middle", "text-muted"], [1, "bi", "bi-pc-display-horizontal", "me-2", "fs-16", "align-middle", "text-muted"], ["id", "email-settings", "role", "tabpanel", 1, ""], [1, "list-group", "list-group-flush", "rounded-3"], [1, "row", "gy-2", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "col-xl-3", "col-lg-3", "col-md-3", "col-sm-12"], [1, "fs-14", "fw-semibold", "mb-0"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "col-xl-5"], [1, "custom-toggle-switch", "float-sm-end"], ["id", "menu-view", "type", "checkbox", "checked", ""], ["for", "menu-view", 1, "label-danger", "mb-1"], [1, "row", "gy-3", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "col-xl-3"], ["for", "mail-language", 1, "form-label"], ["id", "mail-languages", "type", "checkbox"], ["for", "mail-languages", 1, "label-danger", "mb-1"], ["type", "radio", "name", "images-open", "id", "images-open1", 1, "form-check-input"], ["for", "images-open1", 1, "form-check-label"], ["type", "radio", "name", "images-open", "id", "images-hide2", "checked", "", 1, "form-check-input"], ["for", "images-hide2", 1, "form-check-label"], ["id", "mails-images", "type", "checkbox"], ["for", "mails-images", 1, "label-danger", "mb-1"], ["type", "radio", "name", "keyboard-enable", "id", "keyboard-enable1", 1, "form-check-input"], ["for", "keyboard-enable1", 1, "form-check-label"], ["type", "radio", "name", "keyboard-enable", "id", "keyboard-disable2", "checked", "", 1, "form-check-input"], ["for", "keyboard-disable2", 1, "form-check-label"], ["id", "keyboard-shortcuts", "type", "checkbox"], ["for", "keyboard-shortcuts", 1, "label-danger", "mb-1"], ["type", "checkbox", "value", "", "id", "desktop-notifications", "checked", "", 1, "form-check-input"], ["for", "desktop-notifications", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "mobile-notifications", 1, "form-check-input"], ["for", "mobile-notifications", 1, "form-check-label"], [1, "float-sm-end"], ["href", "javascript:void(0)", 1, "btn", "btn-success-ghost", "btn-sm"], ["id", "mails-per-page", "type", "checkbox"], ["for", "mails-per-page", 1, "label-danger", "mb-1"], ["type", "radio", "name", "mail-composer", "id", "mail-composeron1", 1, "form-check-input"], ["for", "mail-composeron1", 1, "form-check-label"], ["type", "radio", "name", "mail-composer", "id", "mail-composeroff2", "checked", "", 1, "form-check-input"], ["for", "mail-composeroff2", 1, "form-check-label"], ["id", "mail-composer", "type", "checkbox"], ["for", "mail-composer", 1, "label-danger", "mb-1"], ["type", "radio", "name", "auto-correct", "id", "auto-correcton1", 1, "form-check-input"], ["for", "auto-correcton1", 1, "form-check-label"], ["type", "radio", "name", "auto-correct", "id", "auto-correctoff2", "checked", "", 1, "form-check-input"], ["for", "auto-correctoff2", 1, "form-check-label"], ["id", "auto-correct", "type", "checkbox"], ["for", "auto-correct", 1, "label-danger", "mb-1"], ["type", "checkbox", "value", "", "id", "on-keyboard", "checked", "", 1, "form-check-input"], ["for", "on-keyboard", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "on-buttonclick", 1, "form-check-input"], ["for", "on-buttonclick", 1, "form-check-label"], ["id", "labels", "role", "tabpanel", 1, ""], [1, "fs-14", "fw-semibold", "mb-3"], [1, "row", "gy-2"], [1, "card", "shadow-none", "border"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, ""], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group"], ["type", "radio", "name", "label-allmails", "id", "all-mails-enable", "checked", "", 1, "btn-check"], ["for", "all-mails-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-allmails", "id", "all-mails-disable", 1, "btn-check"], ["for", "all-mails-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-inbox", "id", "inbox-enable", "checked", "", 1, "btn-check"], ["for", "inbox-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-inbox", "id", "inbox-disable", 1, "btn-check"], ["for", "inbox-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-sent", "id", "sent-enable", "checked", "", 1, "btn-check"], ["for", "sent-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-sent", "id", "sent-disable", 1, "btn-check"], ["for", "sent-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-drafts", "id", "drafts-enable", "checked", "", 1, "btn-check"], ["for", "drafts-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-drafts", "id", "drafts-disable", 1, "btn-check"], ["for", "drafts-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-spam", "id", "spam-enable", "checked", "", 1, "btn-check"], ["for", "spam-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-spam", "id", "spam-disable", 1, "btn-check"], ["for", "spam-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-important", "id", "important-enable", "checked", "", 1, "btn-check"], ["for", "important-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-important", "id", "important-disable", 1, "btn-check"], ["for", "important-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-trash", "id", "trash-enable", "checked", "", 1, "btn-check"], ["for", "trash-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-trash", "id", "trash-disable", 1, "btn-check"], ["for", "trash-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-archive", "id", "archive-enable", "checked", "", 1, "btn-check"], ["for", "archive-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-archive", "id", "archive-disable", 1, "btn-check"], ["for", "archive-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-starred", "id", "starred-enable", "checked", "", 1, "btn-check"], ["for", "starred-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-starred", "id", "starred-disable", 1, "btn-check"], ["for", "starred-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-settings", "id", "settings-enable", "checked", "", 1, "btn-check"], ["for", "settings-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-settings", "id", "settings-disable", 1, "btn-check"], ["for", "settings-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-custom-mail", "id", "custom-mail-enable", "checked", "", 1, "btn-check"], ["for", "custom-mail-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-custom-mail", "id", "custom-mail-disable", 1, "btn-check"], ["for", "custom-mail-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-home", "id", "home-enable", "checked", "", 1, "btn-check"], ["for", "home-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-home", "id", "home-disable", 1, "btn-check"], ["for", "home-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-work", "id", "work-enable", "checked", "", 1, "btn-check"], ["for", "work-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-work", "id", "work-disable", 1, "btn-check"], ["for", "work-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-friends", "id", "friends-enable", "checked", "", 1, "btn-check"], ["for", "friends-enable", 1, "btn", "btn-sm", "btn-outline-primary"], ["type", "radio", "name", "label-friends", "id", "friends-disable", 1, "btn-check"], ["for", "friends-disable", 1, "btn", "btn-sm", "btn-outline-primary"], ["id", "notification-settings", "role", "tabpanel", 1, "p-0"], [1, "list-group", "list-group-flush", "list-unstyled", "rounded-3"], [1, "row", "gx-5", "gy-3"], [1, "fs-16", "mb-1", "fw-semibold"], [1, "fs-12", "mb-0", "text-muted"], [1, "d-flex", "align-items-top", "justify-content-between", "mt-sm-0", "mt-3"], [1, "mail-notification-settings"], ["id", "update-features", "type", "checkbox", "checked", ""], ["for", "update-features", 1, "label-success", "mb-1"], [1, "d-flex", "align-items-top", "justify-content-between", "mt-3"], ["id", "early-access", "type", "checkbox"], ["for", "early-access", 1, "label-success", "mb-1"], ["id", "email-shortcut", "type", "checkbox", "checked", ""], ["for", "email-shortcut", 1, "label-success", "mb-1"], ["id", "new-mails", "type", "checkbox", "checked", ""], ["for", "new-mails", 1, "label-success", "mb-1"], ["id", "mail-chat-messages", "type", "checkbox", "checked", ""], ["for", "mail-chat-messages", 1, "label-success", "mb-1"], ["id", "push-new-mails", "type", "checkbox", "checked", ""], ["for", "push-new-mails", 1, "label-success", "mb-1"], ["id", "push-mail-chat-messages", "type", "checkbox", "checked", ""], ["for", "push-mail-chat-messages", 1, "label-success", "mb-1"], ["id", "mail-extensions", "type", "checkbox"], ["for", "mail-extensions", 1, "label-success", "mb-1"], ["id", "security", "role", "tabpanel", 1, "p-0"], [1, "col-xl-9"], [1, "d-sm-flex", "d-block", "align-items-top", "justify-content-between", "mt-sm-0", "mt-3"], [1, "mail-security-settings"], ["placeholder", "3 Attempts", 3, "ngModelChange", "items", "ngModel"], [1, "d-sm-flex", "d-block", "align-items-top", "justify-content-between", "mt-3"], ["placeholder", "1 Day", 3, "ngModelChange", "items", "ngModel"], [1, "d-sm-flex", "d-block", "align-items-top", "justify-content-between", "mt-sm-0", "mt-3", "gap-3"], ["type", "text", "value", "8", 1, "form-control"], ["id", "password-number", "type", "checkbox"], ["for", "password-number", 1, "label-success", "mb-1"], ["id", "password-special-character", "type", "checkbox", "checked", ""], ["for", "password-special-character", 1, "label-success", "mb-1"], ["id", "password-capital", "type", "checkbox", "checked", ""], ["for", "password-capital", 1, "label-success", "mb-1"], ["type", "text", "value", "16", 1, "form-control"], ["type", "radio", "name", "unknown-messages", "id", "unknown-messages-show1", 1, "form-check-input"], ["for", "unknown-messages-show1", 1, "form-check-label"], ["type", "radio", "name", "unknown-messages", "id", "unknown-messages-hide2", "checked", "", 1, "form-check-input"], ["for", "unknown-messages-hide2", 1, "form-check-label"]], template: function MailsettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "ul", 6, 0)(7, "li", 7)(8, "a", 8);
        \u0275\u0275text(9, "Personal Information");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, MailsettingsComponent_ng_template_10_Template, 60, 5, "ng-template", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "li", 7)(12, "a", 8);
        \u0275\u0275text(13, "Account Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, MailsettingsComponent_ng_template_14_Template, 192, 0, "ng-template", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "li", 7)(16, "a", 8);
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, MailsettingsComponent_ng_template_18_Template, 156, 5, "ng-template", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li", 7)(20, "a", 8);
        \u0275\u0275text(21, "Labels");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, MailsettingsComponent_ng_template_22_Template, 206, 0, "ng-template", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li", 7)(24, "a", 8);
        \u0275\u0275text(25, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, MailsettingsComponent_ng_template_26_Template, 98, 0, "ng-template", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "li", 7)(28, "a", 8);
        \u0275\u0275text(29, "Security");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, MailsettingsComponent_ng_template_30_Template, 97, 4, "ng-template", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 11);
        \u0275\u0275element(32, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 13)(34, "div", 14)(35, "button", 15);
        \u0275\u0275text(36, " Restore Defaults ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 16);
        \u0275\u0275text(38, " Save Changes ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const nav_r7 = \u0275\u0275reference(6);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngbNavItem", 1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 2);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 3);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 4);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 5);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngbNavItem", 6);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngbNavOutlet", nav_r7);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgSelectModule, NgSelectComponent, NgOptionComponent, FormsModule, NgControlStatus, NgModel, ReactiveFormsModule, NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu], styles: ["\n\n#max-login-attempts[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=mailsettings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailsettingsComponent, { className: "MailsettingsComponent", filePath: "src\\app\\components\\pages\\email\\mailsettings\\mailsettings.component.ts", lineNumber: 15 });
})();

export {
  MailsettingsComponent
};
//# sourceMappingURL=chunk-KDAJHQ25.js.map
