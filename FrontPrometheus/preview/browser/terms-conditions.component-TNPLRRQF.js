import {
  OverlayScrollbarsComponent,
  OverlayscrollbarsModule,
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
  ɵɵlistener,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/terms-conditions/terms-conditions.component.ts
var TermsConditionsComponent = class _TermsConditionsComponent {
  fullScreenToggle() {
    document.querySelector(".fullScreenToggle")?.classList.toggle("card-fullscreen");
  }
  static {
    this.\u0275fac = function TermsConditionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TermsConditionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermsConditionsComponent, selectors: [["app-terms-conditions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 101, vars: 0, consts: [["hassub", "", "sub", "Home", "title1", "Pages", "title", "Terms & Conditions", "activeTitle", "Terms & Conditions"], [1, "container-lg"], [1, "row", "justify-content-center"], [1, "col-xl-8"], [1, "card", "custom-card", "overflow-hidden", "fullScreenToggle"], [1, "card-body", "p-0"], [1, "p-3", "terms-heading-cover", "d-flex", "align-items-center", "text-fixed-white", "bg-primary", "h5", "fw-semibold", "mb-0"], [1, "avatar", "avatar-md", "me-3"], ["src", "./assets/images/media/media-54.png", "alt", ""], ["aria-label", "anchor", "href", "javascript:void(0);", "data-bs-toggle", "card-fullscreen", 1, "ms-auto", "text-fixed-white", 3, "click"], [1, "ri-fullscreen-line"], ["id", "terms-scroll", 1, "p-4", "text-muted", "terms-conditions"], [1, "mb-5"], [1, "mb-3", "op-7"], [1, "fw-bold", "text-default", "op-8"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mb-0", "op-7"], [1, "fw-bold", "pb-3", "text-default", "op-7"], [1, "terms-heading"], [1, "mb-4"], [1, "fw-semibold", "text-muted", "mb-2", "fs-14"], [1, "op-7", "mb-0"], [1, "op-7", "mb-2"], [1, "op-7"], [1, "mb-0"], [1, "card-footer", "d-sm-flex", "d-block", "align-items-center", "justify-content-between", "shadow-lg"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "privacy-policy", 1, "form-check-input"], ["for", "privacy-policy", 1, "form-check-label", "text-muted"], ["href", "javascript:void(0);", 1, "fw-semibold", "text-muted", "ms-1"], [1, "form-check", "d-block"], ["type", "checkbox", "value", "", "id", "terms_conditions", 1, "form-check-input"], ["for", "terms_conditions", 1, "form-check-label", "text-muted"], [1, "btn-list", "mt-sm-0", "mt-2"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-wave"], ["type", "button", 1, "btn", "btn-primary", "btn-wave"]], template: function TermsConditionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
        \u0275\u0275element(8, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Dashtic - Terms & Conditions ");
        \u0275\u0275elementStart(10, "a", 9);
        \u0275\u0275listener("click", function TermsConditionsComponent_Template_a_click_10_listener() {
          return ctx.fullScreenToggle();
        });
        \u0275\u0275element(11, "i", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "overlay-scrollbars", 11)(13, "div", 12)(14, "p", 13)(15, "span", 14);
        \u0275\u0275text(16, "If you stay in the USA ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "the Dashtic ");
        \u0275\u0275elementStart(18, "a", 15)(19, "u");
        \u0275\u0275text(20, "Terms and Conditions");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(21, " consists of below rules and ");
        \u0275\u0275elementStart(22, "a", 15)(23, "u");
        \u0275\u0275text(24, "User Agreements");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(25, " consists of below policies ");
        \u0275\u0275elementStart(26, "a", 15)(27, "u");
        \u0275\u0275text(28, "Dashtic Rules & Privacy Policies");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(29, " incorporated with the below conditions. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 16)(31, "span", 14);
        \u0275\u0275text(32, "If you stay any where in the world other than USA ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "the Dashtic ");
        \u0275\u0275elementStart(34, "a", 15)(35, "u");
        \u0275\u0275text(36, "Terms and Conditions");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(37, " consists of below rules and ");
        \u0275\u0275elementStart(38, "a", 15)(39, "u");
        \u0275\u0275text(40, "User Agreements");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(41, " consists of below policies ");
        \u0275\u0275elementStart(42, "a", 15)(43, "u");
        \u0275\u0275text(44, "Dashtic Rules & Privacy Policies");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(45, " incorporated with the below conditions. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "h6", 17)(47, "span", 18);
        \u0275\u0275text(48, "Terms & Services :");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 19)(50, "p", 20);
        \u0275\u0275text(51, "1 - Lorem ipsum dolor sit amet.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p", 21);
        \u0275\u0275text(53, " Note that you'll sometimes see this agreement referred to as a Terms of Use, User Agreement or Terms of Service agreement. These terms are interchangeable and refer to the same type of agreement ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 19)(55, "p", 20);
        \u0275\u0275text(56, "2 - Consectetur adipisicing elit.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 22);
        \u0275\u0275text(58, " While they are not legally required, terms and conditions set the stage for any successful business relationship. By making it clear and putting these guidelines in writing, business owners can avoid misunderstandings with their customers. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 23);
        \u0275\u0275text(60, " It also allows you to decide what you consider acceptable and which type of conduct could lead you to terminate a relationship with a user. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 19)(62, "p", 20);
        \u0275\u0275text(63, "3 - There are many variations.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p", 23);
        \u0275\u0275text(65, " Limitation of liability disclaimers is one of the main reasons why business owners take the time to include terms and conditions on their websites. When reasonable and drafted adequately, such clauses can help protect your business against claims and lawsuits and limit the amount of money that you would have to pay in damages. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 19)(67, "p", 20);
        \u0275\u0275text(68, "4 - If you allow your users to share.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p", 22);
        \u0275\u0275text(70, " If you allow your users to share comments or photos on your website or leave reviews of the products that you sell, you will want to have a section in your terms that governs their conduct and sets out what is acceptable and what isn\u2019t. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p", 22);
        \u0275\u0275text(72, " In this clause, you could reserve the right to monitor the user-generated content shared on your website and remove anything that goes against your guidelines. You could expressly ask your users not to post anything that contains obscene language or any material that could be considered harmful or violent or infringes on someone else\u2019s copyright. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 24)(74, "p", 20);
        \u0275\u0275text(75, "5 - You could also make it clear.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p", 22);
        \u0275\u0275text(77, " You could also make it clear that you reserve the right to suspend or delete the accounts of repeat infringers. This will help you make your website a safe space where people can feel comfortable sharing their opinions, which is especially important if you operate a news site, blog, or forum. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p", 21);
        \u0275\u0275text(79, " From a business point of view, you could reserve the right to use the submitted content for marketing purposes which a lot of big box stores and eCommerce retailers do in order to promote products that get rave reviews. It\u2019s important for your customers to know that you plan on doing so, otherwise they could be surprised to see their words or photo used in a commercial! ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(80, "div", 25)(81, "div")(82, "div", 26);
        \u0275\u0275element(83, "input", 27);
        \u0275\u0275elementStart(84, "label", 28);
        \u0275\u0275text(85, " I agree with the ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "a", 29)(87, "u");
        \u0275\u0275text(88, "Privacy Policy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "div", 30);
        \u0275\u0275element(90, "input", 31);
        \u0275\u0275elementStart(91, "label", 32);
        \u0275\u0275text(92, " I agree with the ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "a", 29)(94, "u");
        \u0275\u0275text(95, "Terms & Conditions");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(96, "div", 33)(97, "button", 34);
        \u0275\u0275text(98, "DECLINE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "button", 35);
        \u0275\u0275text(100, "ACCEPT");
        \u0275\u0275elementEnd()()()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent, OverlayscrollbarsModule, OverlayScrollbarsComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermsConditionsComponent, { className: "TermsConditionsComponent", filePath: "src\\app\\components\\pages\\terms-conditions\\terms-conditions.component.ts", lineNumber: 11 });
})();
export {
  TermsConditionsComponent
};
//# sourceMappingURL=terms-conditions.component-TNPLRRQF.js.map
