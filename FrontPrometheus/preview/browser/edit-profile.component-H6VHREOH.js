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
  NgbModule
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/profile/edit-profile/edit-profile.component.ts
var _c0 = () => ["/pages/profile/profile-1"];
var EditProfileComponent = class _EditProfileComponent {
  static {
    this.\u0275fac = function EditProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfileComponent, selectors: [["app-edit-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 148, vars: 2, consts: [["hassub", "", "sub", "Pages", "title1", "Profile", "title", "Edit Profile", "activeTitle", "Edit Profile"], [1, "row"], [1, "col-xl-4", "col-lg-5"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-center", "mb-4"], ["alt", "User Avatar", "src", "./assets/images/faces/16.jpg", 1, "rounded-circle"], [1, "mt-4", "ms-0", "ms-sm-auto"], [1, "btn-sm", "btn", "btn-primary", "mb-1", "me-1", 3, "routerLink"], ["href", "javascript:void(0)", 1, "btn-sm", "btn", "btn-danger", "mb-1", "me-1"], [1, "mb-3"], [1, "form-label"], ["type", "password", "value", "password", 1, "form-control"], [1, "card-footer", "text-end"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "me-1"], ["href", "javascript:void(0)", 1, "btn", "btn-danger", "me-1"], [1, "col-xl-8", "col-lg-7"], [1, "card-title", "fw-bold"], [1, "col-sm-6", "col-md-6"], ["type", "text", "placeholder", "First Name", 1, "form-control"], ["type", "text", "placeholder", "Last Name", 1, "form-control"], ["type", "email", "placeholder", "Email", 1, "form-control"], ["type", "number", "placeholder", "Number", 1, "form-control"], [1, "col-md-12"], ["type", "text", "placeholder", "Home Address", 1, "form-control"], [1, "col-sm-6", "col-md-4"], ["type", "text", "placeholder", "City", 1, "form-control"], [1, "col-sm-6", "col-md-3"], ["type", "number", "placeholder", "ZIP Code", 1, "form-control"], [1, "col-md-5"], [1, "mb-3", "countery-select"], ["placeholder", "--Select--", "data-trigger", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], [1, "card-title", "fw-bold", "mt-4"], ["type", "text", "placeholder", "https://www.facebook.com/", 1, "form-control"], ["type", "text", "placeholder", "https://www.google.com/", 1, "form-control"], ["type", "text", "placeholder", "https://twitter.com/", 1, "form-control"], ["type", "text", "placeholder", "https://in.pinterest.com/", 1, "form-control"], ["rows", "5", "placeholder", "Enter About your description", 1, "form-control"], [1, "btn-list"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], ["href", "javascript:void(0)", 1, "btn", "btn-danger"]], template: function EditProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Edit Password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
        \u0275\u0275element(9, "img", 8);
        \u0275\u0275elementStart(10, "div", 9)(11, "a", 10);
        \u0275\u0275text(12, "View profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 11);
        \u0275\u0275text(14, "Delete profile");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "label", 13);
        \u0275\u0275text(17, "Change Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 12)(20, "label", 13);
        \u0275\u0275text(21, "New Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 12)(24, "label", 13);
        \u0275\u0275text(25, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 15)(28, "a", 16);
        \u0275\u0275text(29, "Updated");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 17);
        \u0275\u0275text(31, "Cancel");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 18)(33, "div", 3)(34, "div", 4)(35, "div", 5);
        \u0275\u0275text(36, "Edit Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 6)(38, "div", 19);
        \u0275\u0275text(39, "Basic info:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 1)(41, "div", 20)(42, "div", 12)(43, "label", 13);
        \u0275\u0275text(44, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 20)(47, "div", 12)(48, "label", 13);
        \u0275\u0275text(49, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "input", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 20)(52, "div", 12)(53, "label", 13);
        \u0275\u0275text(54, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "input", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 20)(57, "div", 12)(58, "label", 13);
        \u0275\u0275text(59, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "input", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 25)(62, "div", 12)(63, "label", 13);
        \u0275\u0275text(64, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(65, "input", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 27)(67, "div", 12)(68, "label", 13);
        \u0275\u0275text(69, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "input", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 29)(72, "div", 12)(73, "label", 13);
        \u0275\u0275text(74, "Postal Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(75, "input", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 31)(77, "div", 32)(78, "label", 13);
        \u0275\u0275text(79, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "ng-select", 33)(81, "ng-option");
        \u0275\u0275text(82, "--Select--");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "ng-option", 34);
        \u0275\u0275text(84, "Germany");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "ng-option", 35);
        \u0275\u0275text(86, "Real Estate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "ng-option", 36);
        \u0275\u0275text(88, "Canada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "ng-option", 37);
        \u0275\u0275text(90, "Usa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "ng-option", 38);
        \u0275\u0275text(92, "Afghanistan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "ng-option", 39);
        \u0275\u0275text(94, "Albania");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "ng-option", 40);
        \u0275\u0275text(96, "China");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "ng-option", 41);
        \u0275\u0275text(98, "Denmark");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ng-option", 42);
        \u0275\u0275text(100, "Finland");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "ng-option", 43);
        \u0275\u0275text(102, "India");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "ng-option", 44);
        \u0275\u0275text(104, "Kiribati");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "ng-option", 45);
        \u0275\u0275text(106, "Kuwait");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ng-option", 46);
        \u0275\u0275text(108, "Mexico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "ng-option", 47);
        \u0275\u0275text(110, "Pakistan");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(111, "div", 48);
        \u0275\u0275text(112, "External Links:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 1)(114, "div", 20)(115, "div", 12)(116, "label", 13);
        \u0275\u0275text(117, "Facebook");
        \u0275\u0275elementEnd();
        \u0275\u0275element(118, "input", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 20)(120, "div", 12)(121, "label", 13);
        \u0275\u0275text(122, "Google");
        \u0275\u0275elementEnd();
        \u0275\u0275element(123, "input", 50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "div", 20)(125, "div", 12)(126, "label", 13);
        \u0275\u0275text(127, "Twitter");
        \u0275\u0275elementEnd();
        \u0275\u0275element(128, "input", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 20)(130, "div", 12)(131, "label", 13);
        \u0275\u0275text(132, "Pinterest");
        \u0275\u0275elementEnd();
        \u0275\u0275element(133, "input", 52);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(134, "div", 48);
        \u0275\u0275text(135, "About:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 1)(137, "div", 25)(138, "div", 12)(139, "label", 13);
        \u0275\u0275text(140, "About Me");
        \u0275\u0275elementEnd();
        \u0275\u0275element(141, "textarea", 53);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(142, "div", 15)(143, "div", 54)(144, "a", 55);
        \u0275\u0275text(145, "Updated");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "a", 56);
        \u0275\u0275text(147, "Cancel");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [SharedModule, PageHeaderComponent, RouterModule, RouterLink, NgbModule, NgSelectModule, NgSelectComponent, NgOptionComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfileComponent, { className: "EditProfileComponent", filePath: "src\\app\\components\\pages\\profile\\edit-profile\\edit-profile.component.ts", lineNumber: 14 });
})();
export {
  EditProfileComponent
};
//# sourceMappingURL=edit-profile.component-H6VHREOH.js.map
