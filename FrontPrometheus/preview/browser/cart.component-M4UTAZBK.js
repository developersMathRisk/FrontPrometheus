import {
  require_sweetalert_min
} from "./chunk-QGSLPD7W.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule,
  NgbTooltip
} from "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/components/pages/ecommerce/cart/cart.component.ts
var import_sweetalert = __toESM(require_sweetalert_min());
var _c0 = () => ["/pages/ecommerce/products"];
var _c1 = () => ["/pages/ecommerce/checkout"];
var _c2 = () => ["/pages/ecommerce/wishlist"];
function CartComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 48)(3, "div");
    \u0275\u0275element(4, "img", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h6", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 51)(8, "div", 52)(9, "button", 53);
    \u0275\u0275element(10, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_For_24_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.quantity, $event) || (ctx_r1.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 56);
    \u0275\u0275element(13, "i", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td", 58);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 59)(19, "a", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 61);
    \u0275\u0275element(21, "path", 62)(22, "path", 63)(23, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "a", 65);
    \u0275\u0275listener("click", function CartComponent_For_24_Template_a_click_24_listener() {
      const product_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ConformAlert(product_r3.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 66);
    \u0275\u0275element(26, "path", 62)(27, "path", 67)(28, "path", 68);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", product_r3.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r3.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.subtotal);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c2));
  }
}
var cartData = [
  {
    id: "1",
    img: "./assets/images/products/1.jpg",
    name: "Flower Pot",
    price: "$122.21",
    subtotal: "$122.21",
    quantity: "2"
  },
  {
    id: "2",
    img: "./assets/images/products/2.jpg",
    name: "Office Chair",
    price: "$ 20.63",
    subtotal: "$20.63",
    quantity: "2"
  },
  {
    id: "3",
    img: "./assets/images/products/9.jpg",
    name: "Chain with Heart shape pendent",
    price: "$ 41.63",
    subtotal: "$41.63",
    quantity: "2"
  },
  {
    id: "4",
    img: "./assets/images/products/4.jpg",
    name: "Cup",
    price: "$ 40.63",
    subtotal: "$ 40.63",
    quantity: "2"
  },
  {
    id: "5",
    img: "./assets/images/products/6.jpg",
    name: "Teddy Bear",
    price: "$ 60.63",
    subtotal: "$ 60.63",
    quantity: "2"
  }
];
var CartComponent = class _CartComponent {
  constructor() {
    this.items = [];
    this.products = cartData;
    this.quantity = 2;
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
  ngAfterViewInit() {
    const plus = document.querySelectorAll(".plus");
    const minus = document.querySelectorAll(".minus");
    function perfectChart() {
      plus.forEach((element) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener("click", () => {
          parentDiv.children[0].children[1].value++;
        });
      });
      minus.forEach((element) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener("click", () => {
          if (parentDiv.children[0].children[1].value > 0) {
            parentDiv.children[0].children[1].value--;
          }
        });
      });
    }
    perfectChart();
  }
  static {
    this.\u0275fac = function CartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 100, vars: 4, consts: [["hassub", "", "sub", "Pages", "title1", "Ecommerce", "title", "Cart", "activeTitle", "Cart"], [1, "row"], [1, "col-xxl-9"], ["id", "cart-container-delete", 1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered", "text-nowrap", "border-top"], [1, ""], ["scope", "col"], ["scope", "col", 1, "w-200"], ["scope", "col", 1, "w-5"], ["colspan", "3"], ["colspan", "2", 1, "total", "h4", "mb-0", "fw-bold"], [1, "card-footer", "d-sm-flex", "justify-content-between"], [1, "btn", "btn-info", "mt-2", 3, "routerLink"], [1, "ms-auto"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "mt-2"], ["id", "cart-empty-cart", 1, "card", "d-none"], [1, "cart-empty", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewbox", "0 0 24 24", 1, "svg-muted"], ["d", "M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z"], ["d", "M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z"], ["d", "M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z"], ["d", "M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z"], [1, "fw-bold", "mb-1"], [1, "mb-3"], ["href", "products.html", "data-abc", "true", 1, "btn", "btn-primary", "btn-wave", "m-3"], [1, "bi", "bi-arrow-right", "ms-1"], [1, "col-xxl-3"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "input-group"], ["type", "text", "placeholder", "Coupon Code", "aria-label", "coupon-code", "aria-describedby", "coupons", 1, "form-control", "form-control-sm"], ["type", "button", "id", "coupons", 1, "btn", "btn-primary", "input-group-text"], [1, "card-body", "p-0"], [1, "p-4", "border-bottom", "border-block-end-dashed"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "text-muted"], [1, "fw-semibold", "fs-14"], [1, "fw-semibold", "fs-14", "text-success"], [1, "fw-semibold", "fs-14", "text-danger"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "py-3", "px-4"], [1, "fw-semibold", "fs-18"], [1, "p-3", "border-top", "text-center"], [1, "btn", "btn-secondary", "m-1", 3, "routerLink"], [1, "d-flex"], ["alt", "img", "title", "", 1, "avatar", "avatar-lg", 3, "src"], [1, "mb-0", "mt-4", "fw-bold", "ms-4"], [1, "product-quantity-container"], [1, "input-group", "border", "rounded", "flex-nowrap"], ["aria-label", "button", "type", "button", 1, "btn", "btn-icon", "btn-light", "input-group-text", "flex-fill", "product-quantity-minus", "border-0", "minus"], [1, "ri-subtract-line"], ["type", "text", "aria-label", "quantity", "id", "product-quantity", "value", "2", 1, "form-control", "form-control-sm", "border-0", "text-center", "w-100", 3, "ngModelChange", "ngModel"], ["aria-label", "button", "type", "button", 1, "btn", "btn-icon", "btn-light", "input-group-text", "flex-fill", "product-quantity-plus", "border-0", "plus"], [1, "ri-add-line"], [1, "price"], [1, "text-center"], ["aria-label", "anchor", "placement", "top", "ngbTooltip", "Add To wishlist", 1, "btn", "remove_cart", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "height", "18", "viewBox", "0 0 24 24", "width", "18", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z", "opacity", ".3"], ["d", "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"], ["aria-label", "anchor", "href", "javascript:void(0)", "placement", "top", "ngbTooltip", "Remove From cart", 1, "btn", "remove_cart", "btn-delete", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        \u0275\u0275text(6, "Shopping Cart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "table", 8)(10, "thead", 9)(11, "tr")(12, "th", 10);
        \u0275\u0275text(13, "Product Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th", 11);
        \u0275\u0275text(15, "Quantity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th", 10);
        \u0275\u0275text(17, "Unit Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th", 10);
        \u0275\u0275text(19, "Sub Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th", 12);
        \u0275\u0275text(21, " Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, CartComponent_For_24_Template, 29, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(25, "tr")(26, "td", 13);
        \u0275\u0275text(27, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "td", 14);
        \u0275\u0275text(29, "$45,795.16");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(30, "div", 15)(31, "a", 16);
        \u0275\u0275text(32, "Continue Shopping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 17)(34, "a", 18);
        \u0275\u0275text(35, "Update Cart");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 19)(37, "div", 4)(38, "div", 5);
        \u0275\u0275text(39, " Empty Cart ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 6)(41, "div", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(42, "svg", 21);
        \u0275\u0275element(43, "path", 22)(44, "path", 23)(45, "path", 24)(46, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(47, "h3", 26);
        \u0275\u0275text(48, "Your Cart is Empty");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h5", 27);
        \u0275\u0275text(50, "Add some items to make me happy \uF600");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "a", 28);
        \u0275\u0275text(52, "continue shopping ");
        \u0275\u0275element(53, "i", 29);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(54, "div", 30)(55, "div", 31)(56, "div", 32)(57, "div", 5);
        \u0275\u0275text(58, " Have a coupon..? ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 6)(60, "div", 9)(61, "div", 33);
        \u0275\u0275element(62, "input", 34);
        \u0275\u0275elementStart(63, "button", 35);
        \u0275\u0275text(64, "Apply");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(65, "div", 31)(66, "div", 32)(67, "div", 5);
        \u0275\u0275text(68, " Price Details ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 36)(70, "div", 37)(71, "div", 38)(72, "div", 39);
        \u0275\u0275text(73, "Sub Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 40);
        \u0275\u0275text(75, "$45,795.16");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 38)(77, "div", 39);
        \u0275\u0275text(78, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 41);
        \u0275\u0275text(80, "10% - $129");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 38)(82, "div", 39);
        \u0275\u0275text(83, "Delivery Charges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 42);
        \u0275\u0275text(85, "- $49");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 43)(87, "div", 39);
        \u0275\u0275text(88, "Service Tax (18%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 40);
        \u0275\u0275text(90, "- $169");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "div", 44)(92, "div", 43)(93, "div", 45);
        \u0275\u0275text(94, "Total :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 45);
        \u0275\u0275text(96, "$46,900.16");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 46)(98, "a", 47);
        \u0275\u0275text(99, "Proceed To Checkout");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.products);
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
        \u0275\u0275advance(67);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
      }
    }, dependencies: [
      SharedModule,
      PageHeaderComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      RouterModule,
      RouterLink,
      NgbModule,
      NgbTooltip
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\components\\pages\\ecommerce\\cart\\cart.component.ts", lineNumber: 66 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-M4UTAZBK.js.map
