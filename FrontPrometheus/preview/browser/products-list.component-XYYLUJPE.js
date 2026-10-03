import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule,
  NgbTooltip
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
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/pages/ecommerce/products-list/products-list.component.ts
var _c0 = () => ["/pages/ecommerce/edit-products"];
var DATA = [
  {
    id: "1",
    img: "./assets/images/ecommerce/png/11.png",
    name: "Full Sleeves T-shirt",
    category: "Clothing",
    price: "$1,356 ",
    stock: "457",
    gender: "Male",
    seller: "PrimeFlare Products",
    published: "24,Nov 2023 - 04:42PM"
  },
  {
    id: "2",
    img: "./assets/images/ecommerce/png/14.png",
    name: "Nikkis Digital Camera",
    category: "Gadgets",
    price: "$895 ",
    stock: "451",
    gender: "Male",
    seller: "SparkShift Co.",
    published: "14, Dec 2023 - 02:45AM"
  },
  {
    id: "3",
    img: "./assets/images/ecommerce/png/15.png",
    name: "Easy Chair",
    category: "Furniture",
    price: "$475 ",
    stock: "2,487",
    gender: "Male,Female",
    seller: "Tech Company",
    published: "26,Sep 2023 - 12:23AM"
  },
  {
    id: "4",
    img: "./assets/images/ecommerce/png/16.png",
    name: "Smart Watch(30mm) Pink",
    category: "Watches",
    price: "$1,566 ",
    stock: "475",
    gender: "Female",
    seller: "NexaSync.in.com",
    published: "08,Aug 2023 - 12:15PM"
  },
  {
    id: "5",
    img: "./assets/images/ecommerce/png/10.png",
    name: "Slings chairs",
    category: "Furniture",
    price: "$457",
    stock: "245",
    gender: "Everyone",
    seller: "OmniWave.in",
    published: "18,Aug 2023 - 06:12AM"
  },
  {
    id: "6",
    img: "./assets/images/ecommerce/png/13.png",
    name: " Long lengthy Chair",
    category: "Furniture",
    price: "$895",
    stock: "454",
    gender: "Anyone",
    seller: "Furniture.co.in",
    published: "12,Jul 2023 - 03:45PM"
  },
  {
    id: "7",
    img: "./assets/images/ecommerce/png/12.png",
    name: "Hang bag For Women",
    category: "Accessories",
    price: "$1,298",
    stock: "Out of Stock",
    stockbg: "text-warning",
    gender: "Female",
    seller: "Anthony Lanes",
    published: "02,Jan 2024 - 02:55PM"
  },
  {
    id: "8",
    img: "./assets/images/ecommerce/png/4.png",
    name: "Rounded Ball Chair",
    category: "Furniture",
    price: "$3,499",
    stock: "346",
    gender: "Anyone",
    seller: "SwiftSphere.co.in",
    published: "19,Oct 2023 - 05:47AM"
  },
  {
    id: "9",
    img: "./assets/images/ecommerce/png/23.png",
    name: "Watches with Stripe",
    category: "Watches",
    price: "$1,999",
    stock: "216",
    gender: "Everyone",
    seller: "Ninnan's Corporation",
    published: "04,Aug 2023 - 06:32PM"
  }
];
var ProductsListComponent = class _ProductsListComponent {
  constructor() {
    this.click = (id) => {
      const data = this.products.filter((x) => {
        return x.id != id;
      });
      this.products = data;
    };
    this.products = DATA;
  }
  DeleteClick(ProductsData) {
    let filterData = this.products.filter((ele) => {
      return ele.id != ProductsData;
    });
    this.products = filterData;
  }
  static {
    this.\u0275fac = function ProductsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsListComponent, selectors: [["app-products-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 346, vars: 18, consts: [["hassub", "", "sub", "Pages", "title1", "Ecommerce", "title", "Products List", "activeTitle", "Products List"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table-responsive", "mb-4"], [1, "table", "text-nowrap", "table-bordered"], ["scope", "col"], ["type", "checkbox", "id", "all-products", "value", "", "aria-label", "...", 1, "form-check-input", "check-all"], [1, "product-list"], [1, "product-checkbox"], ["type", "checkbox", "id", "product1", "value", "", "aria-label", "...", 1, "form-check-input"], [1, "d-flex", "align-items-center"], [1, "me-2"], [1, "avatar", "avatar-md", "avatar-rounded"], ["src", "./assets/images/products/1.jpg", "alt", ""], [1, "fw-semibold"], [1, "badge", "bg-light", "text-default"], [1, "d-flex", "gap-3"], ["aria-label", "anchor", "placement", "top", "ngbTooltip", "Edit", 1, "", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M5 18.08V19h.92l9.06-9.06-.92-.92z", "opacity", ".3"], ["d", "M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"], ["aria-label", "anchor", "href", "javascript:void(0)", "placement", "top", "ngbTooltip", "Remove", 1, "btn-delete"], ["d", "M8 9h8v10H8z", "opacity", ".3"], ["d", "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"], ["type", "checkbox", "id", "product2", "value", "", "aria-label", "...", 1, "form-check-input"], ["src", "./assets/images/products/2.jpg", "alt", ""], ["type", "checkbox", "id", "product3", "value", "", "aria-label", "...", 1, "form-check-input"], ["src", "./assets/images/products/5.jpg", "alt", ""], ["type", "checkbox", "id", "product4", "value", "", "aria-label", "...", 1, "form-check-input"], ["src", "./assets/images/products/3.jpg", "alt", ""], ["type", "checkbox", "id", "product5", "value", "", "aria-label", "...", 1, "form-check-input"], ["src", "./assets/images/products/4.jpg", "alt", ""], ["type", "checkbox", "id", "product6", "value", "", "aria-label", "...", 1, "form-check-input"], ["src", "./assets/images/products/6.jpg", "alt", ""], ["type", "checkbox", "id", "product7", "value", "", "aria-label", "...", 1, "form-check-input"], ["src", "./assets/images/products/7.jpg", "alt", ""], ["type", "checkbox", "id", "product8", "value", "", "aria-label", "...", 1, "form-check-input"], ["src", "./assets/images/products/8.jpg", "alt", ""], ["type", "checkbox", "id", "product9", "value", "", "aria-label", "...", 1, "form-check-input"], ["src", "./assets/images/products/9.jpg", "alt", ""], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], ["aria-label", "..."], [1, "pagination", "mb-0"], [1, "page-item", "disabled"], [1, "page-link"], [1, "page-item"], ["href", "javascript:void(0);", 1, "page-link"], ["aria-current", "page", 1, "page-item", "active"], ["type", "button", 1, "btn", "btn-danger", "btn-wave", "m-1"]], template: function ProductsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Products List ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "table", 8)(10, "thead")(11, "tr")(12, "th", 9);
        \u0275\u0275element(13, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th", 9);
        \u0275\u0275text(15, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th", 9);
        \u0275\u0275text(17, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th", 9);
        \u0275\u0275text(19, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th", 9);
        \u0275\u0275text(21, "Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th", 9);
        \u0275\u0275text(23, "Seller");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th", 9);
        \u0275\u0275text(25, "Published");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th", 9);
        \u0275\u0275text(27, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "tbody")(29, "tr", 11)(30, "td", 12);
        \u0275\u0275element(31, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "td")(33, "div", 14)(34, "div", 15)(35, "span", 16);
        \u0275\u0275element(36, "img", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 18);
        \u0275\u0275text(38, " Metal Flower Pot ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "td")(40, "span", 19);
        \u0275\u0275text(41, "Furniture");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "td");
        \u0275\u0275text(43, "$1,299");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "td");
        \u0275\u0275text(45, "283");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "td");
        \u0275\u0275text(47, "Apilla.co.in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "td");
        \u0275\u0275text(49, "24,Nov 2023- 04:42PM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "td")(51, "div", 20)(52, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(53, "svg", 22);
        \u0275\u0275element(54, "path", 23)(55, "path", 24)(56, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(57, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(58, "svg", 22);
        \u0275\u0275element(59, "path", 23)(60, "path", 27)(61, "path", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(62, "tr", 11)(63, "td", 12);
        \u0275\u0275element(64, "input", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "td")(66, "div", 14)(67, "div", 15)(68, "span", 16);
        \u0275\u0275element(69, "img", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 18);
        \u0275\u0275text(71, " Office Chair ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "td")(73, "span", 19);
        \u0275\u0275text(74, "Furniture");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "td");
        \u0275\u0275text(76, "$799");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "td");
        \u0275\u0275text(78, "98");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "td");
        \u0275\u0275text(80, "Donzo Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "td");
        \u0275\u0275text(82, "18,Nov 2023- 06:53AM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "td")(84, "div", 20)(85, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(86, "svg", 22);
        \u0275\u0275element(87, "path", 23)(88, "path", 24)(89, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(90, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(91, "svg", 22);
        \u0275\u0275element(92, "path", 23)(93, "path", 27)(94, "path", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(95, "tr", 11)(96, "td", 12);
        \u0275\u0275element(97, "input", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "td")(99, "div", 14)(100, "div", 15)(101, "span", 16);
        \u0275\u0275element(102, "img", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 18);
        \u0275\u0275text(104, " Dazem Stool ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "td")(106, "span", 19);
        \u0275\u0275text(107, "Furniture");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "td");
        \u0275\u0275text(109, "$349");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "td");
        \u0275\u0275text(111, "1,293");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "td");
        \u0275\u0275text(113, "SlowTrack Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "td");
        \u0275\u0275text(115, "21,Oct 2023- 11:36AM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "td")(117, "div", 20)(118, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(119, "svg", 22);
        \u0275\u0275element(120, "path", 23)(121, "path", 24)(122, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(123, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(124, "svg", 22);
        \u0275\u0275element(125, "path", 23)(126, "path", 27)(127, "path", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(128, "tr", 11)(129, "td", 12);
        \u0275\u0275element(130, "input", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "td")(132, "div", 14)(133, "div", 15)(134, "span", 16);
        \u0275\u0275element(135, "img", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "div", 18);
        \u0275\u0275text(137, " Daxem Wireless Earpods ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(138, "td")(139, "span", 19);
        \u0275\u0275text(140, "Electrical");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(141, "td");
        \u0275\u0275text(142, "$189");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "td");
        \u0275\u0275text(144, "322");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "td");
        \u0275\u0275text(146, "WoodHill.co.in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "td");
        \u0275\u0275text(148, "16,Oct 2023- 12:45AM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "td")(150, "div", 20)(151, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(152, "svg", 22);
        \u0275\u0275element(153, "path", 23)(154, "path", 24)(155, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(156, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(157, "svg", 22);
        \u0275\u0275element(158, "path", 23)(159, "path", 27)(160, "path", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(161, "tr", 11)(162, "td", 12);
        \u0275\u0275element(163, "input", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "td")(165, "div", 14)(166, "div", 15)(167, "span", 16);
        \u0275\u0275element(168, "img", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "div", 18);
        \u0275\u0275text(170, " Vintage Tea Cup ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "td")(172, "span", 19);
        \u0275\u0275text(173, "Accesories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "td");
        \u0275\u0275text(175, "$2,499");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "td");
        \u0275\u0275text(177, "194");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "td");
        \u0275\u0275text(179, "Ultra .co.in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "td");
        \u0275\u0275text(181, "12,Aug 2023- 11:21AM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "td")(183, "div", 20)(184, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(185, "svg", 22);
        \u0275\u0275element(186, "path", 23)(187, "path", 24)(188, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(189, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(190, "svg", 22);
        \u0275\u0275element(191, "path", 23)(192, "path", 27)(193, "path", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(194, "tr", 11)(195, "td", 12);
        \u0275\u0275element(196, "input", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "td")(198, "div", 14)(199, "div", 15)(200, "span", 16);
        \u0275\u0275element(201, "img", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(202, "div", 18);
        \u0275\u0275text(203, " Orange TeddyBear ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(204, "td")(205, "span", 19);
        \u0275\u0275text(206, "Toys");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "td");
        \u0275\u0275text(208, "$899");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "td");
        \u0275\u0275text(210, "267");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "td");
        \u0275\u0275text(212, "Ultra .co.in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "td");
        \u0275\u0275text(214, "05,Sep 2023- 10:14AM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "td")(216, "div", 20)(217, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(218, "svg", 22);
        \u0275\u0275element(219, "path", 23)(220, "path", 24)(221, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(222, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(223, "svg", 22);
        \u0275\u0275element(224, "path", 23)(225, "path", 27)(226, "path", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(227, "tr", 11)(228, "td", 12);
        \u0275\u0275element(229, "input", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "td")(231, "div", 14)(232, "div", 15)(233, "span", 16);
        \u0275\u0275element(234, "img", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(235, "div", 18);
        \u0275\u0275text(236, " Artifical Flowerpot ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(237, "td")(238, "span", 19);
        \u0275\u0275text(239, "Furniture");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(240, "td");
        \u0275\u0275text(241, "$499");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "td");
        \u0275\u0275text(243, "143");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "td");
        \u0275\u0275text(245, "Louie Philippe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "td");
        \u0275\u0275text(247, "18,Nov 2023- 14:35PM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "td")(249, "div", 20)(250, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(251, "svg", 22);
        \u0275\u0275element(252, "path", 23)(253, "path", 24)(254, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(255, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(256, "svg", 22);
        \u0275\u0275element(257, "path", 23)(258, "path", 27)(259, "path", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(260, "tr", 11)(261, "td", 12);
        \u0275\u0275element(262, "input", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "td")(264, "div", 14)(265, "div", 15)(266, "span", 16);
        \u0275\u0275element(267, "img", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(268, "div", 18);
        \u0275\u0275text(269, " Ikonic Headphones ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(270, "td")(271, "span", 19);
        \u0275\u0275text(272, "Electrical");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(273, "td");
        \u0275\u0275text(274, "$999");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "td");
        \u0275\u0275text(276, "365");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "td");
        \u0275\u0275text(278, "Kohino.zaps.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "td");
        \u0275\u0275text(280, "27,Nov 2023- 05:12AM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "td")(282, "div", 20)(283, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(284, "svg", 22);
        \u0275\u0275element(285, "path", 23)(286, "path", 24)(287, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(288, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(289, "svg", 22);
        \u0275\u0275element(290, "path", 23)(291, "path", 27)(292, "path", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(293, "tr", 11)(294, "td", 12);
        \u0275\u0275element(295, "input", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "td")(297, "div", 14)(298, "div", 15)(299, "span", 16);
        \u0275\u0275element(300, "img", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(301, "div", 18);
        \u0275\u0275text(302, " Chain with Heart shape pendent ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(303, "td")(304, "span", 19);
        \u0275\u0275text(305, "Jewellery");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(306, "td");
        \u0275\u0275text(307, "$1,499");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(308, "td");
        \u0275\u0275text(309, "257");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(310, "td");
        \u0275\u0275text(311, "Apple Corporation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "td");
        \u0275\u0275text(313, "29,Nov 2023- 16:32PM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "td")(315, "div", 20)(316, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(317, "svg", 22);
        \u0275\u0275element(318, "path", 23)(319, "path", 24)(320, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(321, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(322, "svg", 22);
        \u0275\u0275element(323, "path", 23)(324, "path", 27)(325, "path", 28);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(326, "div", 45)(327, "nav", 46)(328, "ul", 47)(329, "li", 48)(330, "span", 49);
        \u0275\u0275text(331, "Previous");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(332, "li", 50)(333, "a", 51);
        \u0275\u0275text(334, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(335, "li", 52)(336, "span", 49);
        \u0275\u0275text(337, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(338, "li", 50)(339, "a", 51);
        \u0275\u0275text(340, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(341, "li", 50)(342, "a", 51);
        \u0275\u0275text(343, "Next");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(344, "button", 53);
        \u0275\u0275text(345, "Delete All");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(52);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c0));
        \u0275\u0275advance(33);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c0));
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, NgbTooltip, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsListComponent, { className: "ProductsListComponent", filePath: "src\\app\\components\\pages\\ecommerce\\products-list\\products-list.component.ts", lineNumber: 115 });
})();
export {
  ProductsListComponent
};
//# sourceMappingURL=products-list.component-XYYLUJPE.js.map
