import {
  LeafletDirective,
  LeafletModule,
  require_leaflet_src
} from "./chunk-KGDAYGJC.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  HttpClient,
  HttpClientModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/components/maps/leafletmaps/leafletmaps.component.ts
var L = __toESM(require_leaflet_src());
var LeafletmapsComponent = class _LeafletmapsComponent {
  constructor(http) {
    this.http = http;
    this.options5 = {
      layers: [
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: ""
        }),
        L.circle([21.4537, 78.9629], {
          color: "red",
          fillColor: "#f03",
          fillOpacity: 0.5,
          radius: 100
        })
      ],
      zoom: 5,
      center: L.latLng(21.4537, 78.9629)
    };
    this.layers = [
      L.circle([46.95, -122], { radius: 5e3 }),
      L.polygon([
        [46.8, -121.85],
        [46.92, -121.92],
        [46.87, -121.8]
      ]),
      L.marker([46.879966, -121.726909])
    ];
  }
  ngOnInit() {
    const map2 = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "\xA9 OpenStreetMap"
    }).addTo(map2);
    const shapesmap = L.map("map1").setView([51.505, -0.09], 13);
    const markerIcon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconRetinaUrl: "./assets/images/maps/marker-icon-2x.png",
      iconUrl: "./assets/images/maps/marker-icon.png",
      shadowUrl: "./assets/images/maps/marker-shadow.png"
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "\xA9 OpenStreetMap"
    }).addTo(shapesmap);
    const marker2 = L.marker([51.5, -0.09], { icon: markerIcon }).addTo(shapesmap);
    const circle2 = L.circle([51.508, -0.11], {
      color: "#00b9ff",
      fillColor: "#00b9ff",
      fillOpacity: 0.5,
      radius: 500
    }).addTo(shapesmap);
    const polygon2 = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ], {
      color: "#ee335e",
      fillColor: "#ee335e"
    }).addTo(shapesmap);
    const popupmap = L.map("map-popup").setView([51.505, -0.09], 13);
    const markerIcon1 = L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconRetinaUrl: "./assets/images/maps/marker-icon-2x.png",
      iconUrl: "./assets/images/maps/marker-icon.png",
      shadowUrl: "./assets/images/maps/marker-shadow.png"
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "\xA9 OpenStreetMap"
    }).addTo(popupmap);
    const marker3 = L.marker([51.5, -0.09], { icon: markerIcon1 }).addTo(popupmap);
    const circle3 = L.circle([51.508, -0.11], {
      color: "#ffc102",
      fillColor: "#ffc102",
      fillOpacity: 0.5,
      radius: 500
    }).addTo(popupmap);
    const polygon3 = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ], {
      color: "#5b67c7",
      fillColor: "#5b67c7"
    }).addTo(popupmap);
    marker2.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle2.bindPopup("I am a circle.");
    polygon2.bindPopup("I am a polygon.");
    const standalonePopup = L.popup().setLatLng([51.513, -0.09]).setContent("I am a standalone popup.").openOn(popupmap);
    const customicon = L.map("map-custom-icon").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "\xA9 OpenStreetMap"
    }).addTo(customicon);
    const greenIcon = L.icon({
      iconUrl: "./assets/images/brand-logos/desktop-logo.png",
      iconSize: [80, 25],
      // size of the icon
      iconAnchor: [22, 94],
      // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76]
      // point from which the popup should open relative to the iconAnchor
    });
    L.marker([51.5, -0.09], { icon: greenIcon }).addTo(customicon);
  }
  static {
    this.\u0275fac = function LeafletmapsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeafletmapsComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeafletmapsComponent, selectors: [["app-leafletmaps"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 1, consts: [["hassub", "", "sub", "Home", "title1", "Maps", "title", "Leaflet Maps", "activeTitle", "Leaflet Maps"], [1, "row"], [1, "col-xl-6"], [1, "card", "custom-card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "map"], ["id", "map1"], ["id", "map-popup"], ["id", "map-custom-icon"], ["id", "interactive-map", "leaflet", "", 3, "leafletOptions"]], template: function LeafletmapsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Leaflet Map");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "div", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 2)(10, "div", 3)(11, "div", 4)(12, "div", 5);
        \u0275\u0275text(13, "Map With Markers,circles and Polygons");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6);
        \u0275\u0275element(15, "div", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div", 5);
        \u0275\u0275text(20, "Map With Popup");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 6);
        \u0275\u0275element(22, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 2)(24, "div", 3)(25, "div", 4)(26, "div", 5);
        \u0275\u0275text(27, "Map With Custom Icon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 6);
        \u0275\u0275element(29, "div", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "div", 5);
        \u0275\u0275text(34, "Interactive Choropleth Map");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 6);
        \u0275\u0275element(36, "div", 11);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(36);
        \u0275\u0275property("leafletOptions", ctx.options5);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, LeafletModule, LeafletDirective, HttpClientModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeafletmapsComponent, { className: "LeafletmapsComponent", filePath: "src\\app\\components\\maps\\leafletmaps\\leafletmaps.component.ts", lineNumber: 13 });
})();
export {
  LeafletmapsComponent
};
//# sourceMappingURL=leafletmaps.component-HA6E7F6L.js.map
