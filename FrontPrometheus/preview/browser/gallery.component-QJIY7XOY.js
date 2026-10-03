import {
  LightgalleryModule
} from "./chunk-ATT2GAFS.js";
import {
  GallerizeDirective,
  Gallery,
  ImageItem,
  LightboxModule
} from "./chunk-KMVUC57N.js";
import "./chunk-Z7KJ7TUU.js";
import "./chunk-GXUHRYX3.js";
import "./chunk-PMHS5H4F.js";
import "./chunk-GSML466W.js";
import "./chunk-KAPOL4LA.js";
import "./chunk-N74BERQD.js";
import "./chunk-HWBKIOGC.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/apps/gallery/gallery.component.ts
function GalleryComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "a", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", img_r1.srcUrl, \u0275\u0275sanitizeUrl);
  }
}
var GalleryComponent = class _GalleryComponent {
  constructor(gallery) {
    this.gallery = gallery;
    this.imageData = data;
  }
  ngOnInit() {
    this.items = this.imageData.map((item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }
  static {
    this.\u0275fac = function GalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryComponent)(\u0275\u0275directiveInject(Gallery));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [["title1", "Apps", "title", "Gallery", "activeTitle", "Gallery"], ["gallerize", "", 1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-6"], ["href", "javascript:void(0);", "data-gallery", "gallery1", 1, "glightbox", "card"], ["alt", "image", 3, "src"]], template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275repeaterCreate(2, GalleryComponent_For_3_Template, 3, 1, "div", 2, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.imageData);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, LightgalleryModule, LightboxModule, GallerizeDirective], styles: ['@import "https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css";\n@import "https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css";\n\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.gallery-item[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=gallery.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src\\app\\components\\apps\\gallery\\gallery.component.ts", lineNumber: 14 });
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
  GalleryComponent
};
//# sourceMappingURL=gallery.component-QJIY7XOY.js.map
