import {
  GallerizeDirective,
  Gallery,
  GalleryModule,
  LightboxModule
} from "./chunk-KMVUC57N.js";
import "./chunk-Z7KJ7TUU.js";
import "./chunk-GXUHRYX3.js";
import "./chunk-PMHS5H4F.js";
import "./chunk-GSML466W.js";
import "./chunk-KAPOL4LA.js";
import "./chunk-N74BERQD.js";
import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective
} from "./chunk-324JUJYR.js";
import "./chunk-HWBKIOGC.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/file-manager/file-manager-details/file-manager-details.component.ts
var _c0 = () => ["/pages/blog/blog/blog-03"];
function FileManagerDetailsComponent_For_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "a", 29);
    \u0275\u0275element(4, "img", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31)(6, "div", 32)(7, "div")(8, "h6", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 34)(11, "h6", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const slide_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", slide_r1.src, \u0275\u0275sanitizeUrl)("alt", slide_r1.alt);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(slide_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", slide_r1.size, " ");
  }
}
function FileManagerDetailsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileManagerDetailsComponent_For_11_ng_template_1_Template, 13, 4, "ng-template", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", slide_r1.id);
  }
}
function FileManagerDetailsComponent_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "a", 36);
    \u0275\u0275element(2, "img", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", img_r2.srcUrl, \u0275\u0275sanitizeUrl);
  }
}
var FileManagerDetailsComponent = class _FileManagerDetailsComponent {
  constructor(gallery) {
    this.gallery = gallery;
    this.imageData = data;
    this.customOptions = {
      loop: true,
      margin: 1,
      rtl: false,
      navText: [
        '<i class="swiper-button-prev"></i>',
        '<i class="swiper-button-next"></i>'
      ],
      mouseDrag: true,
      autoplay: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      responsive: {
        0: {
          items: 4
        },
        400: {
          items: 4
        },
        740: {
          items: 4
        },
        940: {
          items: 4
        }
      },
      nav: true
    };
    this.slidesStore = [
      {
        id: "1",
        src: "./assets/images/photos/25.jpg",
        alt: "img",
        size: "120kb",
        title: "221.jpg"
      },
      {
        id: "2",
        src: "./assets/images/photos/22.jpg",
        alt: "img",
        size: "256kb",
        title: "222.jpg"
      },
      {
        id: "3",
        src: "./assets/images/photos/23.jpg",
        alt: "img",
        size: "500kb",
        title: "223.jpg"
      },
      {
        id: "4",
        src: "./assets/images/photos/24.jpg",
        alt: "img",
        size: "1.2mb",
        title: "224.jpg"
      },
      {
        id: "5",
        src: "./assets/images/photos/26.jpg",
        alt: "img",
        size: "1.8mb",
        title: "225.jpg"
      },
      {
        id: "6",
        src: "./assets/images/photos/22.jpg",
        alt: "img",
        size: "1.4mb",
        title: "226.jpg"
      },
      {
        id: "7",
        src: "./assets/images/photos/26.jpg",
        alt: "img",
        size: "1.6mb",
        title: "227.jpg"
      },
      {
        id: "8",
        src: "./assets/images/photos/24.jpg",
        alt: "img",
        size: "1.5mb",
        title: "228.jpg"
      }
    ];
  }
  static {
    this.\u0275fac = function FileManagerDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileManagerDetailsComponent)(\u0275\u0275directiveInject(Gallery));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileManagerDetailsComponent, selectors: [["app-file-manager-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 3, consts: [["hassub", "apps", "sub", "", "title1", "File Manager", "title", "File Manager Details", "activeTitle", "File Manager Details"], [1, "row"], [1, "col-xl-8", "col-lg-12", "col-md-12"], [1, "card", "overflow-hidden"], [1, "card-body", "px-4", "pt-4"], [3, "routerLink"], ["src", "./assets/images/photos/20.jpg", "alt", "img", 1, "cover-image", "br-5", "w-100"], [1, "card", "overflow-hidden", "filedetails-slider"], [1, "card-body", "h-100"], [1, "swiper", 3, "options"], [1, "col-xl-4", "col-lg-12", "col-md-12"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, ""], [1, "col-xl-12"], [1, "table-responsive"], [1, "table", "mb-0", "border-top", "table-bordered", "text-nowrap"], ["scope", "row"], [1, "border-bottom"], [1, "card-header"], [1, "card-title"], [1, "text-center", "demo-gallery"], ["id", "lightgallery", "gallerize", "", 1, "list-unstyled", "row", "row-sm", "gy-3", "gx-3", "mb-0"], ["data-responsive", "./assets/images/photos/1.jpg", "data-src", "./assets/images/photos/1.jpg", 1, "col-sm-6", "col-lg-3"], ["carouselSlide", "", 3, "id"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "card", "border", "custom-card", "overflow-hidden", "mb-0", "shadow-none", "file-details-card", "m-2"], ["routerLink", "/apps/file-manager/file-manager-details"], ["alt", "img", 3, "src", "alt"], [1, "card-footer", "bd-t-0", "py-3"], [1, "d-flex"], [1, "mb-0", "fs-14"], [1, "ms-auto"], [1, "text-muted", "mb-0", "fs-14"], ["data-gallery", "gallery1", 1, "glightbox"], ["alt", "image", 1, "img-responsive", "br-5", "w-100", 3, "src"]], template: function FileManagerDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        \u0275\u0275element(6, "img", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "owl-carousel-o", 9);
        \u0275\u0275repeaterCreate(10, FileManagerDetailsComponent_For_11_Template, 2, 1, "ng-container", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "h5", 13);
        \u0275\u0275text(16, "File details :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14)(18, "div", 1)(19, "div", 15)(20, "div", 16)(21, "table", 17)(22, "tbody")(23, "tr")(24, "th", 18);
        \u0275\u0275text(25, "File-name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "td");
        \u0275\u0275text(27, "image.jpg");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "tr")(29, "th", 18);
        \u0275\u0275text(30, "File-size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "td");
        \u0275\u0275text(32, "12.45mb");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "tr")(34, "th", 18);
        \u0275\u0275text(35, "uploaded-date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "td");
        \u0275\u0275text(37, "01-12-2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "tr")(39, "th", 18);
        \u0275\u0275text(40, "uploaded-by");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "td");
        \u0275\u0275text(42, "prityy abodh");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "tr")(44, "th", 18);
        \u0275\u0275text(45, "image-width");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "td");
        \u0275\u0275text(47, "1000");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "tr")(49, "th", 18);
        \u0275\u0275text(50, "image-height");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "td");
        \u0275\u0275text(52, "600");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "tr")(54, "th", 18);
        \u0275\u0275text(55, "File-formate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "td");
        \u0275\u0275text(57, "jpg");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "tr", 19)(59, "th", 18);
        \u0275\u0275text(60, "File-location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "td");
        \u0275\u0275text(62, "storage/photos/image.jpg");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(63, "div", 11)(64, "div", 20)(65, "div", 21);
        \u0275\u0275text(66, " Recent Files ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 12)(68, "div", 22)(69, "ul", 23);
        \u0275\u0275repeaterCreate(70, FileManagerDetailsComponent_For_71_Template, 3, 1, "li", 24, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.customOptions);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.slidesStore);
        \u0275\u0275advance(60);
        \u0275\u0275repeater(ctx.imageData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, RouterModule, RouterLink, CarouselModule, CarouselComponent, CarouselSlideDirective, LightboxModule, GallerizeDirective, GalleryModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileManagerDetailsComponent, { className: "FileManagerDetailsComponent", filePath: "src\\app\\components\\apps\\file-manager\\file-manager-details\\file-manager-details.component.ts", lineNumber: 15 });
})();
var data = [
  {
    srcUrl: "./assets/images/photos/1.jpg",
    previewUrl: "./assets/images/photos/1.jpg"
  },
  {
    srcUrl: "./assets/images/photos/2.jpg",
    previewUrl: "./assets/images/photos/2.jpg"
  },
  {
    srcUrl: "./assets/images/photos/3.jpg",
    previewUrl: "./assets/images/photos/3.jpg"
  },
  {
    srcUrl: "./assets/images/photos/4.jpg",
    previewUrl: "./assets/images/photos/4.jpg"
  },
  {
    srcUrl: "./assets/images/photos/5.jpg",
    previewUrl: "./assets/images/photos/5.jpg"
  },
  {
    srcUrl: "./assets/images/photos/6.jpg",
    previewUrl: "./assets/images/photos/6.jpg"
  },
  {
    srcUrl: "./assets/images/photos/7.jpg",
    previewUrl: "./assets/images/photos/7.jpg"
  },
  {
    srcUrl: "./assets/images/photos/8.jpg",
    previewUrl: "./assets/images/photos/8.jpg"
  }
];
export {
  FileManagerDetailsComponent
};
//# sourceMappingURL=file-manager-details.component-6CJCV37I.js.map
