import {
  LabelType,
  NgxSliderModule
} from "./chunk-U7COLLIU.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/ecommerce/products/products.component.ts
var _c0 = () => ["/pages/ecommerce/product-details"];
var _c1 = () => ["/pages/ecommerce/cart"];
function ProductsComponent_For_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 69)(2, "div", 4)(3, "div", 70);
    \u0275\u0275element(4, "img", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 72)(6, "div", 73)(7, "div")(8, "a", 74);
    \u0275\u0275element(9, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 74);
    \u0275\u0275element(11, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 74);
    \u0275\u0275element(13, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 74);
    \u0275\u0275element(15, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 74);
    \u0275\u0275element(17, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 78);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 79);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 80)(23, "span", 81);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 82)(28, "a", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 84);
    \u0275\u0275element(30, "path", 85)(31, "path", 86)(32, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " View More");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "a", 88);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 84);
    \u0275\u0275element(36, "path", 85)(37, "path", 89)(38, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Add to cart");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", data_r1.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1(" (", data_r1.rating, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.offerprice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.price);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c1));
  }
}
var ProductsComponent = class _ProductsComponent {
  constructor() {
    this.isCollapsed = true;
    this.isCollapsed1 = true;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.minValue = 100;
    this.maxValue = 400;
    this.options = {
      floor: 0,
      ceil: 500,
      translate: (value, label) => {
        switch (label) {
          case LabelType.Low:
            return "<b></b> $" + value;
          case LabelType.High:
            return "<b></b> $" + value;
          default:
            return "$" + value;
        }
      }
    };
    this.productData = [
      {
        src: "./assets/images/products/7.jpg",
        name: "Flower Pot",
        rating: "48",
        offerprice: "$750",
        price: "$974"
      },
      {
        src: "./assets/images/products/1.jpg",
        name: "Flower Pot",
        rating: "32",
        offerprice: "$1,457",
        price: "$986"
      },
      {
        src: "./assets/images/products/6.jpg",
        name: "Teddy Bear",
        rating: "14",
        offerprice: "$538",
        price: "$538"
      },
      {
        src: "./assets/images/products/2.jpg",
        name: "Office Chair",
        rating: "14",
        offerprice: "$974",
        price: "$750"
      },
      {
        src: "./assets/images/products/4.jpg",
        name: "Cup",
        rating: "22",
        offerprice: "$1,457",
        price: "$986"
      },
      {
        src: "./assets/images/products/8.jpg",
        name: "Headset",
        rating: "25",
        offerprice: "$1,678",
        price: "$1,346"
      },
      {
        src: "./assets/images/products/3.jpg",
        name: "Earphones",
        rating: "23",
        offerprice: "$2,498",
        price: "$1,967"
      },
      {
        src: "./assets/images/products/5.jpg",
        name: "Stool",
        rating: "22",
        offerprice: "$2,678",
        price: "$1,489"
      },
      {
        src: "./assets/images/products/9.jpg",
        name: "Chain with Heart shape pendent",
        rating: "64",
        offerprice: "$18,967",
        price: "$12,724"
      }
    ];
  }
  static {
    this.\u0275fac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 146, vars: 0, consts: [["hassub", "", "sub", "Pages", "title1", "Ecommerce", "title", "Products", "activeTitle", "Products"], [1, "row"], [1, "col-xl-3"], [1, "card"], [1, "card-body"], [1, "row", "row-sm"], [1, "col-sm-12"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "card-header"], [1, "card-title"], [1, "custom-controls-stacked"], [1, "form-check", "mb-2"], ["type", "checkbox", "value", "", "id", "example-checkbox", "checked", "", 1, "form-check-input"], ["for", "example-checkbox", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "example-checkbox2", 1, "form-check-input"], ["for", "example-checkbox2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "example-checkbox3", 1, "form-check-input"], ["for", "example-checkbox3", 1, "form-check-label"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "example-checkbox4", 1, "form-check-input"], ["for", "example-checkbox4", 1, "form-check-label"], [1, "form-group", "mb-3"], [1, "form-label", "tx-medium"], ["name", "occasion", "placeholder", "Party Wear", "data-trigger", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "form-group", "mb-0"], ["name", "type", "placeholder", "Western wear", "data-trigger", ""], ["value", "5"], ["value", "6"], [1, "d-flex", "flex-wrap"], [1, ""], [1, "colorinput"], ["name", "color", "type", "checkbox", "value", "azure", "checked", "", 1, "colorinput-input"], [1, "colorinput-color", "bg-primary", "me-1"], ["name", "color1", "type", "checkbox", "value", "indigo", 1, "colorinput-input"], [1, "colorinput-color", "bg-indigo", "me-1"], ["name", "color2", "type", "checkbox", "value", "teal", 1, "colorinput-input"], [1, "colorinput-color", "bg-teal", "me-1"], ["name", "color3", "type", "checkbox", "value", "pink", 1, "colorinput-input"], [1, "colorinput-color", "bg-pink", "me-1"], ["name", "color4", "type", "checkbox", "value", "red", 1, "colorinput-input"], [1, "colorinput-color", "bg-danger", "me-1"], ["name", "color5", "type", "checkbox", "value", "orange", 1, "colorinput-input"], [1, "colorinput-color", "bg-orange", "me-1"], ["name", "color6", "type", "checkbox", "value", "warning", 1, "colorinput-input"], [1, "colorinput-color", "bg-warning"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault3", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault3", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault4", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault4", 1, "form-check-label"], [1, "col-xl-9"], [1, "col-xl-4", "col-lg-6", "col-sm-6"], [1, "d-flex", "justify-content-end"], [1, "pagination"], [1, "page-item", "page-prev", "disabled"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "page-next"], [1, "card", "item-card"], [1, "text-center", "pb-4"], ["alt", "img", 1, "img-fluid", "w-100", "product-img", "br-7", 3, "src"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "cardtitle"], ["aria-label", "anchor", "href", "javascript:void(0)"], [1, "fa", "fa-star", "text-warning", "fs-16"], [1, "fa", "fa-star-half-o", "text-warning", "fs-16"], [1, "fa", "fa-star-o", "text-warning", "fs-16"], ["href", "javascript:void(0)"], [1, "shop-title"], [1, "cardprice"], [1, "type--strikethrough"], [1, "text-center", "card-footer"], [1, "btn", "btn-light", "btn-sm", "mt-1", "mb-1", "me-2", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z", "opacity", ".3"], ["d", "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"], [1, "btn", "btn-primary", "btn-sm", "mt-1", "mb-1", 3, "routerLink"], ["d", "M15.55 11l2.76-5H6.16l2.37 5z", "opacity", ".3"], ["d", "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"]], template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "input", 8);
        \u0275\u0275elementStart(9, "button", 9);
        \u0275\u0275text(10, "Search");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(11, "div", 3)(12, "div", 10)(13, "h3", 11);
        \u0275\u0275text(14, "Categories & Filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "div", 12)(17, "div", 13);
        \u0275\u0275element(18, "input", 14);
        \u0275\u0275elementStart(19, "label", 15);
        \u0275\u0275text(20, "Men");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 13);
        \u0275\u0275element(22, "input", 16);
        \u0275\u0275elementStart(23, "label", 17);
        \u0275\u0275text(24, "Women");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 13);
        \u0275\u0275element(26, "input", 18);
        \u0275\u0275elementStart(27, "label", 19);
        \u0275\u0275text(28, "Kids");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 20);
        \u0275\u0275element(30, "input", 21);
        \u0275\u0275elementStart(31, "label", 22);
        \u0275\u0275text(32, "Others");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(33, "div", 3)(34, "div", 10)(35, "h3", 11);
        \u0275\u0275text(36, "Category");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 4)(38, "div", 23)(39, "label", 24);
        \u0275\u0275text(40, "Occasion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "ng-select", 25)(42, "ng-option", 26);
        \u0275\u0275text(43, "Party Wear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "ng-option", 27);
        \u0275\u0275text(45, "Casual Wear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "ng-option", 28);
        \u0275\u0275text(47, "Wedding");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "ng-option", 29);
        \u0275\u0275text(49, "Festive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 30)(51, "label", 24);
        \u0275\u0275text(52, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "ng-select", 31)(54, "ng-option", 26);
        \u0275\u0275text(55, "Western wear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "ng-option", 27);
        \u0275\u0275text(57, "Foot wear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "ng-option", 28);
        \u0275\u0275text(59, "Top wear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "ng-option", 29);
        \u0275\u0275text(61, "Bootom wear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "ng-option", 32);
        \u0275\u0275text(63, "Beauty Groming");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "ng-option", 33);
        \u0275\u0275text(65, "Accessories");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(66, "div", 3)(67, "div", 10)(68, "h3", 11);
        \u0275\u0275text(69, "Color");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 4)(71, "div", 34)(72, "div", 35)(73, "label", 36);
        \u0275\u0275element(74, "input", 37)(75, "span", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 35)(77, "label", 36);
        \u0275\u0275element(78, "input", 39)(79, "span", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 35)(81, "label", 36);
        \u0275\u0275element(82, "input", 41)(83, "span", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 35)(85, "label", 36);
        \u0275\u0275element(86, "input", 43)(87, "span", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 35)(89, "label", 36);
        \u0275\u0275element(90, "input", 45)(91, "span", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 35)(93, "label", 36);
        \u0275\u0275element(94, "input", 47)(95, "span", 48);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 35)(97, "label", 36);
        \u0275\u0275element(98, "input", 49)(99, "span", 50);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(100, "div", 3)(101, "div", 10)(102, "h3", 11);
        \u0275\u0275text(103, "Price");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "div", 4)(105, "div", 30)(106, "div", 13);
        \u0275\u0275element(107, "input", 51);
        \u0275\u0275elementStart(108, "label", 52);
        \u0275\u0275text(109, " Under $25 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 13);
        \u0275\u0275element(111, "input", 53);
        \u0275\u0275elementStart(112, "label", 54);
        \u0275\u0275text(113, " $25 to $50 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 13);
        \u0275\u0275element(115, "input", 55);
        \u0275\u0275elementStart(116, "label", 56);
        \u0275\u0275text(117, " $50 to $100 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 20);
        \u0275\u0275element(119, "input", 57);
        \u0275\u0275elementStart(120, "label", 58);
        \u0275\u0275text(121, " Other (specify) ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(122, "div", 59)(123, "div", 1);
        \u0275\u0275repeaterCreate(124, ProductsComponent_For_125_Template, 40, 9, "div", 60, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 61)(127, "ul", 62)(128, "li", 63)(129, "a", 64);
        \u0275\u0275text(130, "Prev");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "li", 65)(132, "a", 66);
        \u0275\u0275text(133, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "li", 67)(135, "a", 66);
        \u0275\u0275text(136, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "li", 67)(138, "a", 66);
        \u0275\u0275text(139, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "li", 67)(141, "a", 66);
        \u0275\u0275text(142, "4");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "li", 68)(144, "a", 66);
        \u0275\u0275text(145, "Next");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(124);
        \u0275\u0275repeater(ctx.productData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, RouterModule, RouterLink, NgxSliderModule, NgSelectModule, NgSelectComponent, NgOptionComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src\\app\\components\\pages\\ecommerce\\products\\products.component.ts", lineNumber: 15 });
})();
export {
  ProductsComponent
};
//# sourceMappingURL=products.component-3OORDWUB.js.map
