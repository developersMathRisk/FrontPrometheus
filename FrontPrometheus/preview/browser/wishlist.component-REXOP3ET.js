import {
  require_sweetalert_min
} from "./chunk-QGSLPD7W.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/components/pages/ecommerce/wishlist/wishlist.component.ts
var import_sweetalert = __toESM(require_sweetalert_min());
var _c0 = () => ["/pages/ecommerce/cart"];
function WishlistComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 12)(2, "div", 13)(3, "div", 14);
    \u0275\u0275element(4, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "div", 17)(7, "div")(8, "a", 18);
    \u0275\u0275element(9, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 18);
    \u0275\u0275element(11, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 18);
    \u0275\u0275element(13, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 18);
    \u0275\u0275element(15, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 18);
    \u0275\u0275element(17, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 22);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 23);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 24)(23, "span", 25);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 26)(28, "div", 27)(29, "a", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 29);
    \u0275\u0275element(31, "path", 30)(32, "path", 31)(33, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "Add to cart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "a", 33);
    \u0275\u0275listener("click", function WishlistComponent_For_5_Template_a_click_36_listener() {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ConformAlert(data_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 34);
    \u0275\u0275element(38, "path", 30)(39, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Remove");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", data_r2.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1(" (", data_r2.rating, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.offerprice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.price);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
  }
}
var DATA = [
  {
    id: "1",
    src: "./assets/images/products/7.jpg",
    name: "Flower Pot",
    rating: "48",
    offerprice: "$750",
    price: "$974"
  },
  {
    id: "2",
    src: "./assets/images/products/1.jpg",
    name: "Flower Pot",
    rating: "32",
    offerprice: "$1,457",
    price: "$986"
  },
  {
    id: "3",
    src: "./assets/images/products/6.jpg",
    name: "Teddy Bear",
    rating: "14",
    offerprice: "$538",
    price: "$538"
  },
  {
    id: "4",
    src: "./assets/images/products/2.jpg",
    name: "Office Chair",
    rating: "14",
    offerprice: "$974",
    price: "$750"
  },
  {
    id: "5",
    src: "./assets/images/products/4.jpg",
    name: "Cup",
    rating: "22",
    offerprice: "$1,457",
    price: "$986"
  },
  {
    id: "6",
    src: "./assets/images/products/8.jpg",
    name: "Headset",
    rating: "25",
    offerprice: "$1,678",
    price: "$1,346"
  },
  {
    id: "7",
    src: "./assets/images/products/3.jpg",
    name: "Earphones",
    rating: "23",
    offerprice: "$2,498",
    price: "$1,967"
  },
  {
    id: "8",
    src: "./assets/images/products/5.jpg",
    name: "Stool",
    rating: "22",
    offerprice: "$2,678",
    price: "$1,489"
  }
];
var WishlistComponent = class _WishlistComponent {
  constructor() {
    this.products = DATA;
  }
  ConformAlert(id) {
    (0, import_sweetalert.default)({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Yes,Delete it!"]
    }).then((willDelete) => {
      if (willDelete) {
        const data = this.products.filter((x) => x.id !== id);
        this.products = data;
        (0, import_sweetalert.default)("Deleted!", "Your imaginary file has been deleted!", "success");
      } else {
        (0, import_sweetalert.default)("Cancelled", "Your item is safe :)", "info");
      }
    });
  }
  static {
    this.\u0275fac = function WishlistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishlistComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 0, consts: [["hassub", "", "sub", "Pages", "title1", "Ecommerce", "title", "Wishlist", "activeTitle", "Wishlist"], [1, "row"], [1, "col-xl-12"], [1, "col-xl-3", "col-lg-6", "col-sm-6"], [1, "d-flex", "justify-content-end"], [1, "pagination"], [1, "page-item", "page-prev", "disabled"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "page-next"], [1, "card", "item-card", "product-card"], [1, "card-body"], [1, "text-center", "pb-4"], ["alt", "img", 1, "img-fluid", "w-100", "product-img", "br-7", 3, "src"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "cardtitle"], ["aria-label", "anchor", "href", "javascript:void(0)"], [1, "fa", "fa-star", "text-warning", "fs-16"], [1, "fa", "fa-star-half-o", "text-warning", "fs-16"], [1, "fa", "fa-star-o", "text-warning", "fs-16"], ["href", "javascript:void(0)"], [1, "shop-title"], [1, "cardprice"], [1, "type--strikethrough"], [1, "text-center", "card-footer"], [1, "btn-list"], [1, "btn", "btn-primary", "btn-svgs", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M15.55 11l2.76-5H6.16l2.37 5z", "opacity", ".3"], ["d", "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"], ["href", "javascript:void(0)", 1, "btn", "btn-light", "btn-svgs", "btn-delete", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "svg-icon"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"]], template: function WishlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 1);
        \u0275\u0275repeaterCreate(4, WishlistComponent_For_5_Template, 42, 7, "div", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "ul", 5)(8, "li", 6)(9, "a", 7);
        \u0275\u0275text(10, "Prev");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "li", 8)(12, "a", 9);
        \u0275\u0275text(13, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "li", 10)(15, "a", 9);
        \u0275\u0275text(16, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "li", 10)(18, "a", 9);
        \u0275\u0275text(19, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "li", 10)(21, "a", 9);
        \u0275\u0275text(22, "4");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li", 11)(24, "a", 9);
        \u0275\u0275text(25, "Next");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.products);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent", filePath: "src\\app\\components\\pages\\ecommerce\\wishlist\\wishlist.component.ts", lineNumber: 80 });
})();
export {
  WishlistComponent
};
//# sourceMappingURL=wishlist.component-REXOP3ET.js.map
