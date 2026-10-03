import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbCarousel,
  NgbCarouselConfig,
  NgbCollapseModule,
  NgbModule,
  NgbSlide,
  NgbSlideEventSource
} from "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/advancedui/carousel/carousel.component.ts
var _c0 = ["carousel"];
function CarouselComponent_Conditional_13_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const image_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", image_r1, \u0275\u0275sanitizeUrl);
  }
}
function CarouselComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CarouselComponent_Conditional_13_For_2_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function CarouselComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngb-carousel", 11);
    \u0275\u0275repeaterCreate(1, CarouselComponent_Conditional_13_For_2_Template, 1, 0, null, 24, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("interval", 2e3)("showNavigationArrows", false)("showNavigationIndicators", false);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.images4);
  }
}
function CarouselComponent_Conditional_29_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", image_r3, \u0275\u0275sanitizeUrl);
  }
}
function CarouselComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CarouselComponent_Conditional_29_For_2_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function CarouselComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngb-carousel", 11);
    \u0275\u0275repeaterCreate(1, CarouselComponent_Conditional_29_For_2_Template, 1, 0, null, 24, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("interval", 2500)("showNavigationArrows", true)("showNavigationIndicators", false);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.images3);
  }
}
function CarouselComponent_Conditional_45_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const image_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", image_r4, \u0275\u0275sanitizeUrl);
  }
}
function CarouselComponent_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CarouselComponent_Conditional_45_For_2_ng_template_0_Template, 1, 1, "ng-template", 19);
  }
}
function CarouselComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngb-carousel", 11);
    \u0275\u0275repeaterCreate(1, CarouselComponent_Conditional_45_For_2_Template, 1, 0, null, 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("interval", 1e3)("showNavigationArrows", false)("showNavigationIndicators", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.images);
  }
}
function CarouselComponent_Conditional_61_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
    \u0275\u0275elementStart(1, "div", 27)(2, "h5", 28);
    \u0275\u0275text(3, "First slide label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Some representative placeholder content for the first slide. ");
    \u0275\u0275elementEnd()();
  }
}
function CarouselComponent_Conditional_61_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
    \u0275\u0275elementStart(1, "div", 27)(2, "h5", 28);
    \u0275\u0275text(3, "Second slide label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Some representative placeholder content for the second slide. ");
    \u0275\u0275elementEnd()();
  }
}
function CarouselComponent_Conditional_61_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
    \u0275\u0275elementStart(1, "div", 27)(2, "h5", 28);
    \u0275\u0275text(3, "Third slide label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Some representative placeholder content for the third slide. ");
    \u0275\u0275elementEnd()();
  }
}
function CarouselComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngb-carousel", 11);
    \u0275\u0275template(1, CarouselComponent_Conditional_61_ng_template_1_Template, 6, 0, "ng-template", 19)(2, CarouselComponent_Conditional_61_ng_template_2_Template, 6, 0, "ng-template", 19)(3, CarouselComponent_Conditional_61_ng_template_3_Template, 6, 0, "ng-template", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("interval", 2800)("showNavigationArrows", true)("showNavigationIndicators", false);
  }
}
function CarouselComponent_Conditional_77_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", image_r5, \u0275\u0275sanitizeUrl);
  }
}
function CarouselComponent_Conditional_77_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CarouselComponent_Conditional_77_For_2_ng_template_0_Template, 1, 1, "ng-template", 19);
  }
}
function CarouselComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngb-carousel", 11);
    \u0275\u0275repeaterCreate(1, CarouselComponent_Conditional_77_For_2_Template, 1, 0, null, 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("interval", 3200)("showNavigationArrows", true)("showNavigationIndicators", false);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.images2);
  }
}
function CarouselComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
}
function CarouselComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
}
function CarouselComponent_ng_template_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
}
function CarouselComponent_Conditional_113_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const image_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", image_r6, \u0275\u0275sanitizeUrl);
  }
}
function CarouselComponent_Conditional_113_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CarouselComponent_Conditional_113_For_2_ng_template_0_Template, 1, 1, "ng-template", 19);
  }
}
function CarouselComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngb-carousel", 11);
    \u0275\u0275repeaterCreate(1, CarouselComponent_Conditional_113_For_2_Template, 1, 0, null, 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("interval", 2800)("showNavigationArrows", true)("showNavigationIndicators", false);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.images1);
  }
}
function CarouselComponent_ng_template_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
    \u0275\u0275elementStart(1, "div", 27)(2, "h5", 28);
    \u0275\u0275text(3, "First slide label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, " Some representative placeholder content for the first slide. ");
    \u0275\u0275elementEnd()();
  }
}
function CarouselComponent_ng_template_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 36);
    \u0275\u0275elementStart(1, "div", 27)(2, "h5", 28);
    \u0275\u0275text(3, "Second slide label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, " Some representative placeholder content for the second slide. ");
    \u0275\u0275elementEnd()();
  }
}
function CarouselComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
    \u0275\u0275elementStart(1, "div", 27)(2, "h5", 28);
    \u0275\u0275text(3, "Third slide label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, " Some representative placeholder content for the third slide. ");
    \u0275\u0275elementEnd()();
  }
}
var CarouselComponent = class _CarouselComponent {
  constructor(config) {
    this.showNavigationArrows = true;
    this.showNavigationIndicators = false;
    this.showArrow = false;
    this.showIndicator = false;
    this.carouselImages = [
      { img: "./assets/img/photos/1.jpg", slide: "1" },
      { img: "./assets/img/photos/2.jpg", slide: "2" },
      { img: "./assets/img/photos/3.jpg", slide: "3" },
      { img: "./assets/img/photos/4.jpg", slide: "4" },
      { img: "./assets/img/photos/5.jpg", slide: "5" },
      { img: "./assets/img/photos/6.jpg", slide: "6" },
      { img: "./assets/img/photos/7.jpg", slide: "7" },
      { img: "./assets/img/photos/8.jpg", slide: "8" }
    ];
    this.paused = false;
    this.unpauseOnArrow = false;
    this.pauseOnIndicator = false;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.images = [
      "./assets/images/media/media-12.jpg",
      "./assets/images/media/media-16.jpg",
      "./assets/images/media/media-17.jpg"
    ];
    this.images1 = [
      "./assets/images/media/media-4.jpg",
      "./assets/images/media/media-5.jpg",
      "./assets/images/media/media-7.jpg"
    ];
    this.images2 = [
      "./assets/images/media/media-30.jpg",
      "./assets/images/media/media-31.jpg",
      "./assets/images/media/media-32.jpg"
    ];
    this.darkimg = [
      "./assets/images/media/media-63.jpg",
      "./assets/images/media/media-62.jpg",
      "./assets/images/media/media-64.jpg"
    ];
    this.images3 = [
      "./assets/images/media/media-15.jpg",
      "./assets/images/media/media-18.jpg",
      "./assets/images/media/media-19.jpg"
    ];
    this.images4 = [
      "./assets/images/media/media-13.jpg",
      "./assets/images/media/media-14.jpg",
      "./assets/images/media/media-20.jpg"
    ];
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit() {
  }
  showArrows() {
    this.showArrow = !this.showArrow;
  }
  showIndicators() {
    this.showIndicator = !this.showIndicator;
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  static {
    this.\u0275fac = function CarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CarouselComponent)(\u0275\u0275directiveInject(NgbCarouselConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.carousel = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 137, vars: 11, consts: [["hassub", "", "sub", "Home", "title1", "Advanced Ui", "title", "Carousels", "activeTitle", "Carousels"], [1, "row"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], ["id", "carouselExampleSlidesOnly", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner", 3, "interval", "showNavigationArrows", "showNavigationIndicators"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["id", "carouselExampleCaptions", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["id", "carouselExampleFade", "data-bs-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["ngbSlide", "", 1, "carousel-item"], [1, "col-xxl-4", "col-md-6"], ["id", "carouselExampleControlsNoTouching", "data-bs-touch", "false", "data-bs-interval", "false", 1, "carousel", "slide"], ["id", "carouselExampleDark", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", "", 1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], ["src", "./assets/images/media/media-36.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "text-fixed-white"], ["src", "./assets/images/media/media-37.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "./assets/images/media/media-38.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "./assets/images/media/media-27.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "./assets/images/media/media-28.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "./assets/images/media/media-29.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "./assets/images/media/media-40.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "op-7"], ["src", "./assets/images/media/media-41.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "./assets/images/media/media-39.jpg", "alt", "...", 1, "d-block", "w-100"]], template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Slides Only");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
        \u0275\u0275template(13, CarouselComponent_Conditional_13_Template, 3, 3, "ngb-carousel", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 12)(15, "pre", 13)(16, "code", 13);
        \u0275\u0275text(17, '<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">\n<div class="carousel-inner">\n<div class="carousel-item active">\n<img src="./assets/images/media/media-13.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-14.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-20.jpg" class="d-block w-100" alt="...">\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(18, "div", 2)(19, "div", 3)(20, "div", 4)(21, "div", 5);
        \u0275\u0275text(22, "With controls");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 6)(24, "button", 7);
        \u0275\u0275text(25, "Show Code");
        \u0275\u0275element(26, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 9)(28, "div", 14);
        \u0275\u0275template(29, CarouselComponent_Conditional_29_Template, 3, 3, "ngb-carousel", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 12)(31, "pre", 13)(32, "code", 13);
        \u0275\u0275text(33, '<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">\n<div class="carousel-inner">\n<div class="carousel-item active">\n<img src="./assets/images/media/media-15.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-18.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-19.jpg" class="d-block w-100" alt="...">\n</div>\n</div>\n<button class="carousel-control-prev" type="button"\ndata-bs-target="#carouselExampleControls" data-bs-slide="prev">\n<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button"\ndata-bs-target="#carouselExampleControls" data-bs-slide="next">\n<span class="carousel-control-next-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Next</span>\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(34, "div", 2)(35, "div", 3)(36, "div", 4)(37, "div", 5);
        \u0275\u0275text(38, "With indicators");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 6)(40, "button", 7);
        \u0275\u0275text(41, "Show Code");
        \u0275\u0275element(42, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 9)(44, "div", 15);
        \u0275\u0275template(45, CarouselComponent_Conditional_45_Template, 3, 3, "ngb-carousel", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 12)(47, "pre", 13)(48, "code", 13);
        \u0275\u0275text(49, '<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">\n<div class="carousel-indicators">\n<button type="button" data-bs-target="#carouselExampleIndicators"\ndata-bs-slide-to="0" class="active" aria-current="true"\naria-label="Slide 1"></button>\n<button type="button" data-bs-target="#carouselExampleIndicators"\ndata-bs-slide-to="1" aria-label="Slide 2"></button>\n<button type="button" data-bs-target="#carouselExampleIndicators"\ndata-bs-slide-to="2" aria-label="Slide 3"></button>\n</div>\n<div class="carousel-inner">\n<div class="carousel-item active">\n<img src="./assets/images/media/media-12.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-16.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-17.jpg" class="d-block w-100" alt="...">\n</div>\n</div>\n<button class="carousel-control-prev" type="button"\ndata-bs-target="#carouselExampleIndicators" data-bs-slide="prev">\n<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button"\ndata-bs-target="#carouselExampleIndicators" data-bs-slide="next">\n<span class="carousel-control-next-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Next</span>\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(50, "div", 2)(51, "div", 3)(52, "div", 4)(53, "div", 5);
        \u0275\u0275text(54, "With captions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 6)(56, "button", 7);
        \u0275\u0275text(57, "Show Code");
        \u0275\u0275element(58, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "div", 9)(60, "div", 16);
        \u0275\u0275template(61, CarouselComponent_Conditional_61_Template, 4, 3, "ngb-carousel", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 12)(63, "pre", 13)(64, "code", 13);
        \u0275\u0275text(65, '<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">\n<div class="carousel-indicators">\n<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"\nclass="active" aria-current="true" aria-label="Slide 1"></button>\n<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"\naria-label="Slide 2"></button>\n<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"\naria-label="Slide 3"></button>\n</div>\n<div class="carousel-inner">\n<div class="carousel-item active">\n<img src="./assets/images/media/media-36.jpg" class="d-block w-100" alt="...">\n<div class="carousel-caption d-none d-md-block">\n<h5>First slide label</h5>\n<p>Some representative placeholder content for the first slide.</p>\n</div>\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-37.jpg" class="d-block w-100" alt="...">\n<div class="carousel-caption d-none d-md-block">\n<h5>Second slide label</h5>\n<p>Some representative placeholder content for the second slide.</p>\n</div>\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-38.jpg" class="d-block w-100" alt="...">\n<div class="carousel-caption d-none d-md-block">\n<h5>Third slide label</h5>\n<p>Some representative placeholder content for the third slide.</p>\n</div>\n</div>\n</div>\n<button class="carousel-control-prev" type="button"\ndata-bs-target="#carouselExampleCaptions" data-bs-slide="prev">\n<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button"\ndata-bs-target="#carouselExampleCaptions" data-bs-slide="next">\n<span class="carousel-control-next-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Next</span>\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(66, "div", 2)(67, "div", 3)(68, "div", 4)(69, "div", 5);
        \u0275\u0275text(70, "Crossfade");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 6)(72, "button", 7);
        \u0275\u0275text(73, "Show Code");
        \u0275\u0275element(74, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "div", 9)(76, "div", 17);
        \u0275\u0275template(77, CarouselComponent_Conditional_77_Template, 3, 3, "ngb-carousel", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 12)(79, "pre", 13)(80, "code", 13);
        \u0275\u0275text(81, '<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">\n<div class="carousel-inner">\n<div class="carousel-item active">\n<img src="./assets/images/media/media-30.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-31.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-32.jpg" class="d-block w-100" alt="...">\n</div>\n</div>\n<button class="carousel-control-prev" type="button"\ndata-bs-target="#carouselExampleFade" data-bs-slide="prev">\n<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button"\ndata-bs-target="#carouselExampleFade" data-bs-slide="next">\n<span class="carousel-control-next-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Next</span>\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(82, "div", 2)(83, "div", 3)(84, "div", 4)(85, "div", 5);
        \u0275\u0275text(86, "Individual .carousel-item interval");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 6)(88, "button", 7);
        \u0275\u0275text(89, "Show Code");
        \u0275\u0275element(90, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "div", 9)(92, "div", 18)(93, "ngb-carousel", 11);
        \u0275\u0275template(94, CarouselComponent_ng_template_94_Template, 1, 0, "ng-template", 19)(95, CarouselComponent_ng_template_95_Template, 1, 0, "ng-template", 19)(96, CarouselComponent_ng_template_96_Template, 1, 0, "ng-template", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 12)(98, "pre", 13)(99, "code", 13);
        \u0275\u0275text(100, '<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">\n<div class="carousel-inner">\n<div class="carousel-item active" data-bs-interval="10000">\n<img src="./assets/images/media/media-27.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item" data-bs-interval="2000">\n<img src="./assets/images/media/media-28.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-29.jpg" class="d-block w-100" alt="...">\n</div>\n</div>\n<button class="carousel-control-prev" type="button"\ndata-bs-target="#carouselExampleInterval" data-bs-slide="prev">\n<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button"\ndata-bs-target="#carouselExampleInterval" data-bs-slide="next">\n<span class="carousel-control-next-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Next</span>\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(101, "div", 1)(102, "div", 20)(103, "div", 3)(104, "div", 4)(105, "div", 5);
        \u0275\u0275text(106, "Disable touch swiping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 6)(108, "button", 7);
        \u0275\u0275text(109, "Show Code");
        \u0275\u0275element(110, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div", 9)(112, "div", 21);
        \u0275\u0275template(113, CarouselComponent_Conditional_113_Template, 3, 3, "ngb-carousel", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 12)(115, "pre", 13)(116, "code", 13);
        \u0275\u0275text(117, '<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"\ndata-bs-interval="false">\n<div class="carousel-inner">\n<div class="carousel-item active">\n<img src="./assets/images/media/media-4.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-5.jpg" class="d-block w-100" alt="...">\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-7.jpg" class="d-block w-100" alt="...">\n</div>\n</div>\n<button class="carousel-control-prev" type="button"\ndata-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">\n<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button"\ndata-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">\n<span class="carousel-control-next-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Next</span>\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(118, "div", 20)(119, "div", 3)(120, "div", 4)(121, "div", 5);
        \u0275\u0275text(122, "Dark variant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 6)(124, "button", 7);
        \u0275\u0275text(125, "Show Code");
        \u0275\u0275element(126, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(127, "div", 9)(128, "div", 22)(129, "ngb-carousel", 23);
        \u0275\u0275template(130, CarouselComponent_ng_template_130_Template, 6, 0, "ng-template", 19)(131, CarouselComponent_ng_template_131_Template, 6, 0, "ng-template", 19)(132, CarouselComponent_ng_template_132_Template, 6, 0, "ng-template", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(133, "div", 12)(134, "pre", 13)(135, "code", 13);
        \u0275\u0275text(136, '<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">\n<div class="carousel-indicators">\n<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"\nclass="active" aria-current="true" aria-label="Slide 1"></button>\n<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"\naria-label="Slide 2"></button>\n<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"\naria-label="Slide 3"></button>\n</div>\n<div class="carousel-inner">\n<div class="carousel-item active" data-bs-interval="10000">\n<img src="./assets/images/media/media-40.jpg" class="d-block w-100"\nalt="...">\n<div class="carousel-caption d-none d-md-block">\n<h5>First slide label</h5>\n<p class="op-7">Some representative placeholder content for the first slide.</p>\n</div>\n</div>\n<div class="carousel-item" data-bs-interval="2000">\n<img src="./assets/images/media/media-41.jpg" class="d-block w-100"\nalt="...">\n<div class="carousel-caption d-none d-md-block">\n<h5>Second slide label</h5>\n<p class="op-7">Some representative placeholder content for the second slide.</p>\n</div>\n</div>\n<div class="carousel-item">\n<img src="./assets/images/media/media-39.jpg" class="d-block w-100"\nalt="...">\n<div class="carousel-caption d-none d-md-block">\n<h5>Third slide label</h5>\n<p class="op-7">Some representative placeholder content for the third slide.</p>\n</div>\n</div>\n</div>\n<button class="carousel-control-prev" type="button"\ndata-bs-target="#carouselExampleDark" data-bs-slide="prev">\n<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button"\ndata-bs-target="#carouselExampleDark" data-bs-slide="next">\n<span class="carousel-control-next-icon" aria-hidden="true"></span>\n<span class="visually-hidden">Next</span>\n</button>\n</div>');
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.images4 ? 13 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.images3 ? 29 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.images ? 45 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.images ? 61 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.images2 ? 77 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275property("interval", 2800)("showNavigationArrows", true)("showNavigationIndicators", false);
        \u0275\u0275advance(20);
        \u0275\u0275conditional(ctx.images1 ? 113 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275property("showNavigationArrows", true)("showNavigationIndicators", true);
      }
    }, dependencies: [NgbCollapseModule, NgbModule, NgbCarousel, NgbSlide, SharedModule, PageHeaderComponent, AppShowCodeDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarouselComponent, { className: "CarouselComponent", filePath: "src\\app\\components\\advancedui\\carousel\\carousel.component.ts", lineNumber: 12 });
})();
export {
  CarouselComponent
};
//# sourceMappingURL=carousel.component-LKCKPO3S.js.map
