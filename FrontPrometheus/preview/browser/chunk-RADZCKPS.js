import {
  ModalDismissReasons,
  NgbActiveOffcanvas,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavOutlet,
  NgbOffcanvas,
  NgbTooltip
} from "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-EXZMHBSY.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportScroller,
  debounceTime,
  filter,
  forwardRef,
  fromEvent,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import {
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/ngx-color-picker/fesm2022/ngx-color-picker.mjs
var _c0 = ["dialogPopup"];
var _c1 = ["hueSlider"];
var _c2 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("arrow arrow-", ctx_r1.cpUsePosition, "");
    \u0275\u0275styleProp("left", ctx_r1.cpArrowPosition)("top", ctx_r1.arrowTop, "px");
  }
}
function ColorPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragStart("saturation-lightness"));
    })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd("saturation-lightness"));
    });
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.hueSliderColor);
    \u0275\u0275property("rgX", 1)("rgY", 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("top", ctx_r1.slider == null ? null : ctx_r1.slider.v, "px")("left", ctx_r1.slider == null ? null : ctx_r1.slider.s, "px");
  }
}
function ColorPickerComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29);
    \u0275\u0275element(1, "path", 30)(2, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ColorPickerComponent_button_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddPresetColor($event, ctx_r1.selectedColor));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cpAddColorButtonClass);
    \u0275\u0275property("disabled", ctx_r1.cpPresetColors && ctx_r1.cpPresetColors.length >= ctx_r1.cpMaxPresetColorsLength);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cpAddColorButtonText, " ");
  }
}
function ColorPickerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function ColorPickerComponent_div_21_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_input_6_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_input_6_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.a);
  }
}
function ColorPickerComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCyanInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMagentaInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onYellowInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlackInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ColorPickerComponent_div_21_input_6_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "div");
    \u0275\u0275text(9, "C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13, "Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15, "K");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ColorPickerComponent_div_21_div_16_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 3 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.c);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.m);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.y);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.k);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 35)(2, "input", 41);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaturationInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLightnessInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "H");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 2 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 360)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.h);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.s);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_23_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.a);
  }
}
function ColorPickerComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 35)(2, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRedInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGreenInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_23_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "R");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "G");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_23_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 1 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.r);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.g);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.b);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hexAlpha);
  }
}
function ColorPickerComponent_div_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 35)(2, "input", 45);
    \u0275\u0275listener("blur", function ColorPickerComponent_div_24_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput(null));
    })("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "Hex");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ColorPickerComponent_div_24_div_7_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 0 ? "none" : "block");
    \u0275\u0275classProp("hex-alpha", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.hexText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
  }
}
function ColorPickerComponent_div_25_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onValueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_25_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8, "A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(-1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(1));
    });
    \u0275\u0275elementEnd()();
  }
}
function ColorPickerComponent_div_27_div_4_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const color_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemovePresetColor($event, color_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cpRemoveColorButtonClass);
  }
}
function ColorPickerComponent_div_27_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_Template_div_click_0_listener() {
      const color_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setColorFromString(color_r17));
    });
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_span_1_Template, 1, 3, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", color_r17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_Template, 2, 3, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetColorsClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cpPresetColors);
  }
}
function ColorPickerComponent_div_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetEmptyMessageClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpPresetEmptyMessage);
  }
}
function ColorPickerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "hr");
    \u0275\u0275elementStart(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ColorPickerComponent_div_27_div_4_Template, 2, 4, "div", 51)(5, ColorPickerComponent_div_27_div_5_Template, 2, 4, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cpPresetLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length) && ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancelColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpCancelButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpCancelButtonText);
  }
}
function ColorPickerComponent_div_28_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpOKButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpOKButtonText);
  }
}
function ColorPickerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, ColorPickerComponent_div_28_button_1_Template, 2, 4, "button", 57)(2, ColorPickerComponent_div_28_button_2_Template, 2, 4, "button", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpCancelButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpOKButton);
  }
}
function ColorPickerComponent_div_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorPickerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, ColorPickerComponent_div_29_ng_container_1_Template, 1, 0, "ng-container", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cpExtraTemplate);
  }
}
var ColorFormats;
(function(ColorFormats2) {
  ColorFormats2[ColorFormats2["HEX"] = 0] = "HEX";
  ColorFormats2[ColorFormats2["RGBA"] = 1] = "RGBA";
  ColorFormats2[ColorFormats2["HSLA"] = 2] = "HSLA";
  ColorFormats2[ColorFormats2["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));
var Rgba = class {
  r;
  g;
  b;
  a;
  constructor(r2, g2, b2, a2) {
    this.r = r2;
    this.g = g2;
    this.b = b2;
    this.a = a2;
  }
};
var Hsva = class {
  h;
  s;
  v;
  a;
  constructor(h2, s2, v2, a2) {
    this.h = h2;
    this.s = s2;
    this.v = v2;
    this.a = a2;
  }
};
var Hsla = class {
  h;
  s;
  l;
  a;
  constructor(h2, s2, l2, a2) {
    this.h = h2;
    this.s = s2;
    this.l = l2;
    this.a = a2;
  }
};
var Cmyk = class {
  c;
  m;
  y;
  k;
  a;
  constructor(c2, m2, y2, k2, a2 = 1) {
    this.c = c2;
    this.m = m2;
    this.y = y2;
    this.k = k2;
    this.a = a2;
  }
};
function calculateAutoPositioning(elBounds, triggerElBounds) {
  let usePositionX = "right";
  let usePositionY = "bottom";
  const {
    height,
    width
  } = elBounds;
  const {
    top,
    left
  } = triggerElBounds;
  const bottom = top + triggerElBounds.height;
  const right = left + triggerElBounds.width;
  const collisionTop = top - height < 0;
  const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
  const collisionLeft = left - width < 0;
  const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
  const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight;
  if (collisionBottom) {
    usePositionY = "top";
  }
  if (collisionTop) {
    usePositionY = "bottom";
  }
  if (collisionLeft) {
    usePositionX = "right";
  }
  if (collisionRight) {
    usePositionX = "left";
  }
  if (collisionAll) {
    const postions = ["left", "right", "top", "bottom"];
    return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
  }
  if (collisionLeft && collisionRight) {
    if (collisionTop) {
      return "bottom";
    }
    if (collisionBottom) {
      return "top";
    }
    return top > bottom ? "top" : "bottom";
  }
  if (collisionTop && collisionBottom) {
    if (collisionLeft) {
      return "right";
    }
    if (collisionRight) {
      return "left";
    }
    return left > right ? "left" : "right";
  }
  return `${usePositionY}-${usePositionX}`;
}
function detectIE() {
  let ua = "";
  if (typeof navigator !== "undefined") {
    ua = navigator.userAgent.toLowerCase();
  }
  const msie = ua.indexOf("msie ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  return false;
}
var TextDirective = class _TextDirective {
  rg;
  text;
  newValue = new EventEmitter();
  inputChange(event) {
    const value = event.target.value;
    if (this.rg === void 0) {
      this.newValue.emit(value);
    } else {
      const numeric = parseFloat(value);
      this.newValue.emit({
        v: numeric,
        rg: this.rg
      });
    }
  }
  static \u0275fac = function TextDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TextDirective,
    selectors: [["", "text", ""]],
    hostBindings: function TextDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function TextDirective_input_HostBindingHandler($event) {
          return ctx.inputChange($event);
        });
      }
    },
    inputs: {
      rg: "rg",
      text: "text"
    },
    outputs: {
      newValue: "newValue"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextDirective, [{
    type: Directive,
    args: [{
      selector: "[text]"
    }]
  }], null, {
    rg: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    newValue: [{
      type: Output
    }],
    inputChange: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var SliderDirective = class _SliderDirective {
  elRef;
  listenerMove;
  listenerStop;
  rgX;
  rgY;
  slider;
  dragEnd = new EventEmitter();
  dragStart = new EventEmitter();
  newValue = new EventEmitter();
  mouseDown(event) {
    this.start(event);
  }
  touchStart(event) {
    this.start(event);
  }
  constructor(elRef) {
    this.elRef = elRef;
    this.listenerMove = (event) => this.move(event);
    this.listenerStop = () => this.stop();
  }
  move(event) {
    event.preventDefault();
    this.setCursor(event);
  }
  start(event) {
    this.setCursor(event);
    event.stopPropagation();
    document.addEventListener("mouseup", this.listenerStop);
    document.addEventListener("touchend", this.listenerStop);
    document.addEventListener("mousemove", this.listenerMove);
    document.addEventListener("touchmove", this.listenerMove);
    this.dragStart.emit();
  }
  stop() {
    document.removeEventListener("mouseup", this.listenerStop);
    document.removeEventListener("touchend", this.listenerStop);
    document.removeEventListener("mousemove", this.listenerMove);
    document.removeEventListener("touchmove", this.listenerMove);
    this.dragEnd.emit();
  }
  getX(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageX = event.pageX !== void 0 ? event.pageX : event.touches[0].pageX;
    return pageX - position.left - window.pageXOffset;
  }
  getY(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageY = event.pageY !== void 0 ? event.pageY : event.touches[0].pageY;
    return pageY - position.top - window.pageYOffset;
  }
  setCursor(event) {
    const width = this.elRef.nativeElement.offsetWidth;
    const height = this.elRef.nativeElement.offsetHeight;
    const x2 = Math.max(0, Math.min(this.getX(event), width));
    const y2 = Math.max(0, Math.min(this.getY(event), height));
    if (this.rgX !== void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        s: x2 / width,
        v: 1 - y2 / height,
        rgX: this.rgX,
        rgY: this.rgY
      });
    } else if (this.rgX === void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        v: y2 / height,
        rgY: this.rgY
      });
    } else if (this.rgX !== void 0 && this.rgY === void 0) {
      this.newValue.emit({
        v: x2 / width,
        rgX: this.rgX
      });
    }
  }
  static \u0275fac = function SliderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SliderDirective,
    selectors: [["", "slider", ""]],
    hostBindings: function SliderDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
          return ctx.mouseDown($event);
        })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
          return ctx.touchStart($event);
        });
      }
    },
    inputs: {
      rgX: "rgX",
      rgY: "rgY",
      slider: "slider"
    },
    outputs: {
      dragEnd: "dragEnd",
      dragStart: "dragStart",
      newValue: "newValue"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderDirective, [{
    type: Directive,
    args: [{
      selector: "[slider]"
    }]
  }], () => [{
    type: ElementRef
  }], {
    rgX: [{
      type: Input
    }],
    rgY: [{
      type: Input
    }],
    slider: [{
      type: Input
    }],
    dragEnd: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    newValue: [{
      type: Output
    }],
    mouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    touchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }]
  });
})();
var SliderPosition = class {
  h;
  s;
  v;
  a;
  constructor(h2, s2, v2, a2) {
    this.h = h2;
    this.s = s2;
    this.v = v2;
    this.a = a2;
  }
};
var SliderDimension = class {
  h;
  s;
  v;
  a;
  constructor(h2, s2, v2, a2) {
    this.h = h2;
    this.s = s2;
    this.v = v2;
    this.a = a2;
  }
};
var ColorPickerService = class _ColorPickerService {
  active = null;
  setActive(active) {
    if (this.active && this.active !== active && this.active.cpDialogDisplay !== "inline") {
      this.active.closeDialog();
    }
    this.active = active;
  }
  hsva2hsla(hsva) {
    const h2 = hsva.h, s2 = hsva.s, v2 = hsva.v, a2 = hsva.a;
    if (v2 === 0) {
      return new Hsla(h2, 0, 0, a2);
    } else if (s2 === 0 && v2 === 1) {
      return new Hsla(h2, 1, 1, a2);
    } else {
      const l2 = v2 * (2 - s2) / 2;
      return new Hsla(h2, v2 * s2 / (1 - Math.abs(2 * l2 - 1)), l2, a2);
    }
  }
  hsla2hsva(hsla) {
    const h2 = Math.min(hsla.h, 1), s2 = Math.min(hsla.s, 1);
    const l2 = Math.min(hsla.l, 1), a2 = Math.min(hsla.a, 1);
    if (l2 === 0) {
      return new Hsva(h2, 0, 0, a2);
    } else {
      const v2 = l2 + s2 * (1 - Math.abs(2 * l2 - 1)) / 2;
      return new Hsva(h2, 2 * (v2 - l2) / v2, v2, a2);
    }
  }
  hsvaToRgba(hsva) {
    let r2, g2, b2;
    const h2 = hsva.h, s2 = hsva.s, v2 = hsva.v, a2 = hsva.a;
    const i2 = Math.floor(h2 * 6);
    const f2 = h2 * 6 - i2;
    const p2 = v2 * (1 - s2);
    const q2 = v2 * (1 - f2 * s2);
    const t2 = v2 * (1 - (1 - f2) * s2);
    switch (i2 % 6) {
      case 0:
        r2 = v2, g2 = t2, b2 = p2;
        break;
      case 1:
        r2 = q2, g2 = v2, b2 = p2;
        break;
      case 2:
        r2 = p2, g2 = v2, b2 = t2;
        break;
      case 3:
        r2 = p2, g2 = q2, b2 = v2;
        break;
      case 4:
        r2 = t2, g2 = p2, b2 = v2;
        break;
      case 5:
        r2 = v2, g2 = p2, b2 = q2;
        break;
      default:
        r2 = 0, g2 = 0, b2 = 0;
    }
    return new Rgba(r2, g2, b2, a2);
  }
  cmykToRgb(cmyk) {
    const r2 = (1 - cmyk.c) * (1 - cmyk.k);
    const g2 = (1 - cmyk.m) * (1 - cmyk.k);
    const b2 = (1 - cmyk.y) * (1 - cmyk.k);
    return new Rgba(r2, g2, b2, cmyk.a);
  }
  rgbaToCmyk(rgba) {
    const k2 = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k2 === 1) {
      return new Cmyk(0, 0, 0, 1, rgba.a);
    } else {
      const c2 = (1 - rgba.r - k2) / (1 - k2);
      const m2 = (1 - rgba.g - k2) / (1 - k2);
      const y2 = (1 - rgba.b - k2) / (1 - k2);
      return new Cmyk(c2, m2, y2, k2, rgba.a);
    }
  }
  rgbaToHsva(rgba) {
    let h2, s2;
    const r2 = Math.min(rgba.r, 1), g2 = Math.min(rgba.g, 1);
    const b2 = Math.min(rgba.b, 1), a2 = Math.min(rgba.a, 1);
    const max = Math.max(r2, g2, b2), min = Math.min(r2, g2, b2);
    const v2 = max, d2 = max - min;
    s2 = max === 0 ? 0 : d2 / max;
    if (max === min) {
      h2 = 0;
    } else {
      switch (max) {
        case r2:
          h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h2 = (b2 - r2) / d2 + 2;
          break;
        case b2:
          h2 = (r2 - g2) / d2 + 4;
          break;
        default:
          h2 = 0;
      }
      h2 /= 6;
    }
    return new Hsva(h2, s2, v2, a2);
  }
  rgbaToHex(rgba, allowHex8) {
    let hex = "#" + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);
    if (allowHex8) {
      hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
    }
    return hex;
  }
  normalizeCMYK(cmyk) {
    return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
  }
  denormalizeCMYK(cmyk) {
    return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
  }
  denormalizeRGBA(rgba) {
    return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
  }
  stringToHsva(colorString = "", allowHex8 = false) {
    let hsva = null;
    colorString = (colorString || "").toLowerCase();
    const stringParsers = [{
      re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }, {
      re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }];
    if (allowHex8) {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || "FF", 16) / 255);
        }
      });
    } else {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
        }
      });
    }
    stringParsers.push({
      re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
      }
    });
    for (const key in stringParsers) {
      if (stringParsers.hasOwnProperty(key)) {
        const parser = stringParsers[key];
        const match = parser.re.exec(colorString), color = match && parser.parse(match);
        if (color) {
          if (color instanceof Rgba) {
            hsva = this.rgbaToHsva(color);
          } else if (color instanceof Hsla) {
            hsva = this.hsla2hsva(color);
          }
          return hsva;
        }
      }
    }
    return hsva;
  }
  outputFormat(hsva, outputFormat, alphaChannel) {
    if (outputFormat === "auto") {
      outputFormat = hsva.a < 1 ? "rgba" : "hex";
    }
    switch (outputFormat) {
      case "hsla":
        const hsla = this.hsva2hsla(hsva);
        const hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        if (hsva.a < 1 || alphaChannel === "always") {
          return "hsla(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%," + hslaText.a + ")";
        } else {
          return "hsl(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%)";
        }
      case "rgba":
        const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
        if (hsva.a < 1 || alphaChannel === "always") {
          return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + Math.round(rgba.a * 100) / 100 + ")";
        } else {
          return "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
        }
      default:
        const allowHex8 = alphaChannel === "always" || alphaChannel === "forced";
        return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
    }
  }
  static \u0275fac = function ColorPickerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorPickerService,
    factory: _ColorPickerService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SUPPORTS_TOUCH = typeof window !== "undefined" && "ontouchstart" in window;
var ColorPickerComponent = class _ColorPickerComponent {
  ngZone;
  elRef;
  cdRef;
  document;
  platformId;
  service;
  isIE10 = false;
  cmyk;
  hsva;
  width;
  height;
  cmykColor;
  outputColor;
  initialColor;
  fallbackColor;
  listenerResize;
  listenerMouseDown;
  directiveInstance;
  sliderH;
  sliderDimMax;
  directiveElementRef;
  dialogArrowSize = 10;
  dialogArrowOffset = 15;
  dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
  useRootViewContainer = false;
  show;
  hidden;
  top;
  left;
  position;
  format;
  slider;
  hexText;
  hexAlpha;
  cmykText;
  hslaText;
  rgbaText;
  arrowTop;
  selectedColor;
  hueSliderColor;
  alphaSliderColor;
  cpWidth;
  cpHeight;
  cpColorMode;
  cpCmykEnabled;
  cpAlphaChannel;
  cpOutputFormat;
  cpDisableInput;
  cpDialogDisplay;
  cpIgnoredElements;
  cpSaveClickOutside;
  cpCloseClickOutside;
  cpPosition;
  cpUsePosition;
  cpPositionOffset;
  cpOKButton;
  cpOKButtonText;
  cpOKButtonClass;
  cpCancelButton;
  cpCancelButtonText;
  cpCancelButtonClass;
  cpEyeDropper;
  eyeDropperSupported;
  cpPresetLabel;
  cpPresetColors;
  cpPresetColorsClass;
  cpMaxPresetColorsLength;
  cpPresetEmptyMessage;
  cpPresetEmptyMessageClass;
  cpAddColorButton;
  cpAddColorButtonText;
  cpAddColorButtonClass;
  cpRemoveColorButtonClass;
  cpArrowPosition;
  cpTriggerElement;
  cpExtraTemplate;
  dialogElement;
  hueSlider;
  alphaSlider;
  handleEsc(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onCancelColor(event);
    }
  }
  handleEnter(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onAcceptColor(event);
    }
  }
  constructor(ngZone, elRef, cdRef, document2, platformId, service) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.document = document2;
    this.platformId = platformId;
    this.service = service;
    this.eyeDropperSupported = isPlatformBrowser(this.platformId) && "EyeDropper" in this.document.defaultView;
  }
  ngOnInit() {
    this.slider = new SliderPosition(0, 0, 0, 0);
    const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
    const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
    this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
    if (this.cpCmykEnabled) {
      this.format = ColorFormats.CMYK;
    } else if (this.cpOutputFormat === "rgba") {
      this.format = ColorFormats.RGBA;
    } else if (this.cpOutputFormat === "hsla") {
      this.format = ColorFormats.HSLA;
    } else {
      this.format = ColorFormats.HEX;
    }
    this.listenerMouseDown = (event) => {
      this.onMouseDown(event);
    };
    this.listenerResize = () => {
      this.onResize();
    };
    this.openDialog(this.initialColor, false);
  }
  ngOnDestroy() {
    this.closeDialog();
  }
  ngAfterViewInit() {
    if (this.cpWidth !== 230 || this.cpDialogDisplay === "inline") {
      const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
      this.updateColorPicker(false);
      this.cdRef.detectChanges();
    }
  }
  openDialog(color, emit = true) {
    this.service.setActive(this);
    if (!this.width) {
      this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
    }
    if (!this.height) {
      this.height = 320;
    }
    this.setInitialColor(color);
    this.setColorFromString(color, emit);
    this.openColorPicker();
  }
  closeDialog() {
    this.closeColorPicker();
  }
  setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpEyeDropper, cpTriggerElement, cpExtraTemplate) {
    this.setInitialColor(color);
    this.setColorMode(cpColorMode);
    this.isIE10 = detectIE() === 10;
    this.directiveInstance = instance;
    this.directiveElementRef = elementRef;
    this.cpDisableInput = cpDisableInput;
    this.cpCmykEnabled = cpCmykEnabled;
    this.cpAlphaChannel = cpAlphaChannel;
    this.cpOutputFormat = cpOutputFormat;
    this.cpDialogDisplay = cpDialogDisplay;
    this.cpIgnoredElements = cpIgnoredElements;
    this.cpSaveClickOutside = cpSaveClickOutside;
    this.cpCloseClickOutside = cpCloseClickOutside;
    this.useRootViewContainer = cpUseRootViewContainer;
    this.width = this.cpWidth = parseInt(cpWidth, 10);
    this.height = this.cpHeight = parseInt(cpHeight, 10);
    this.cpPosition = cpPosition;
    this.cpPositionOffset = parseInt(cpPositionOffset, 10);
    this.cpOKButton = cpOKButton;
    this.cpOKButtonText = cpOKButtonText;
    this.cpOKButtonClass = cpOKButtonClass;
    this.cpCancelButton = cpCancelButton;
    this.cpCancelButtonText = cpCancelButtonText;
    this.cpCancelButtonClass = cpCancelButtonClass;
    this.cpEyeDropper = cpEyeDropper;
    this.fallbackColor = cpFallbackColor || "#fff";
    this.setPresetConfig(cpPresetLabel, cpPresetColors);
    this.cpPresetColorsClass = cpPresetColorsClass;
    this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
    this.cpPresetEmptyMessage = cpPresetEmptyMessage;
    this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
    this.cpAddColorButton = cpAddColorButton;
    this.cpAddColorButtonText = cpAddColorButtonText;
    this.cpAddColorButtonClass = cpAddColorButtonClass;
    this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
    this.cpTriggerElement = cpTriggerElement;
    this.cpExtraTemplate = cpExtraTemplate;
    if (!cpPositionRelativeToArrow) {
      this.dialogArrowOffset = 0;
    }
    if (cpDialogDisplay === "inline") {
      this.dialogArrowSize = 0;
      this.dialogArrowOffset = 0;
    }
    if (cpOutputFormat === "hex" && cpAlphaChannel !== "always" && cpAlphaChannel !== "forced") {
      this.cpAlphaChannel = "disabled";
    }
  }
  setColorMode(mode) {
    switch (mode.toString().toUpperCase()) {
      case "1":
      case "C":
      case "COLOR":
        this.cpColorMode = 1;
        break;
      case "2":
      case "G":
      case "GRAYSCALE":
        this.cpColorMode = 2;
        break;
      case "3":
      case "P":
      case "PRESETS":
        this.cpColorMode = 3;
        break;
      default:
        this.cpColorMode = 1;
    }
  }
  setInitialColor(color) {
    this.initialColor = color;
  }
  setPresetConfig(cpPresetLabel, cpPresetColors) {
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
  }
  setColorFromString(value, emit = true, update = true) {
    let hsva;
    if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "forced") {
      hsva = this.service.stringToHsva(value, true);
      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(value, false);
      }
    } else {
      hsva = this.service.stringToHsva(value, false);
    }
    if (!hsva && !this.hsva) {
      hsva = this.service.stringToHsva(this.fallbackColor, false);
    }
    if (hsva) {
      this.hsva = hsva;
      this.sliderH = this.hsva.h;
      if (this.cpOutputFormat === "hex" && this.cpAlphaChannel === "disabled") {
        this.hsva.a = 1;
      }
      this.updateColorPicker(emit, update);
    }
  }
  onResize() {
    if (this.position === "fixed") {
      this.setDialogPosition();
    } else if (this.cpDialogDisplay !== "inline") {
      this.closeColorPicker();
    }
  }
  onDragEnd(slider) {
    this.directiveInstance.sliderDragEnd({
      slider,
      color: this.outputColor
    });
  }
  onDragStart(slider) {
    this.directiveInstance.sliderDragStart({
      slider,
      color: this.outputColor
    });
  }
  onMouseDown(event) {
    if (this.show && !this.isIE10 && this.cpDialogDisplay === "popup" && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter((item) => item === event.target).length === 0) {
      this.ngZone.run(() => {
        if (this.cpSaveClickOutside) {
          this.directiveInstance.colorSelected(this.outputColor);
        } else {
          this.hsva = null;
          this.setColorFromString(this.initialColor, false);
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }
          this.directiveInstance.colorChanged(this.initialColor);
          this.directiveInstance.colorCanceled();
        }
        if (this.cpCloseClickOutside) {
          this.closeColorPicker();
        }
      });
    }
  }
  onAcceptColor(event) {
    event.stopPropagation();
    if (this.outputColor) {
      this.directiveInstance.colorSelected(this.outputColor);
    }
    if (this.cpDialogDisplay === "popup") {
      this.closeColorPicker();
    }
  }
  onCancelColor(event) {
    this.hsva = null;
    event.stopPropagation();
    this.directiveInstance.colorCanceled();
    this.setColorFromString(this.initialColor, true);
    if (this.cpDialogDisplay === "popup") {
      if (this.cpCmykEnabled) {
        this.directiveInstance.cmykChanged(this.cmykColor);
      }
      this.directiveInstance.colorChanged(this.initialColor, true);
      this.closeColorPicker();
    }
  }
  onEyeDropper() {
    if (!this.eyeDropperSupported) return;
    const eyeDropper = new window.EyeDropper();
    eyeDropper.open().then((eyeDropperResult) => {
      this.setColorFromString(eyeDropperResult.sRGBHex, true);
    });
  }
  onFormatToggle(change) {
    const availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
    const nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
    this.format = this.dialogInputFields[nextFormat];
  }
  onColorChange(value) {
    this.hsva.s = value.s / value.rgX;
    this.hsva.v = value.v / value.rgY;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "lightness",
      value: this.hsva.v,
      color: this.outputColor
    });
    this.directiveInstance.sliderChanged({
      slider: "saturation",
      value: this.hsva.s,
      color: this.outputColor
    });
  }
  onHueChange(value) {
    this.hsva.h = value.v / value.rgX;
    this.sliderH = this.hsva.h;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "hue",
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueChange(value) {
    this.hsva.v = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "value",
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaChange(value) {
    this.hsva.a = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "alpha",
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onHexInput(value) {
    if (value === null) {
      this.updateColorPicker();
    } else {
      if (value && value[0] !== "#") {
        value = "#" + value;
      }
      let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
      if (this.cpAlphaChannel === "always") {
        validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
      }
      const valid = validHex.test(value);
      if (valid) {
        if (value.length < 5) {
          value = "#" + value.substring(1).split("").map((c2) => c2 + c2).join("");
        }
        if (this.cpAlphaChannel === "forced") {
          value += Math.round(this.hsva.a * 255).toString(16);
        }
        this.setColorFromString(value, true, false);
      }
      this.directiveInstance.inputChanged({
        input: "hex",
        valid,
        value,
        color: this.outputColor
      });
    }
  }
  onRedInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.r = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "red",
      valid,
      value: rgba.r,
      color: this.outputColor
    });
  }
  onBlueInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.b = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "blue",
      valid,
      value: rgba.b,
      color: this.outputColor
    });
  }
  onGreenInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.g = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "green",
      valid,
      value: rgba.g,
      color: this.outputColor
    });
  }
  onHueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.h = value.v / value.rg;
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "hue",
      valid,
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.v = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "value",
      valid,
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.a = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "alpha",
      valid,
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onLightnessInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.l = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "lightness",
      valid,
      value: hsla.l,
      color: this.outputColor
    });
  }
  onSaturationInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.s = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "saturation",
      valid,
      value: hsla.s,
      color: this.outputColor
    });
  }
  onCyanInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.c = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "cyan",
      valid: true,
      value: this.cmyk.c,
      color: this.outputColor
    });
  }
  onMagentaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.m = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "magenta",
      valid: true,
      value: this.cmyk.m,
      color: this.outputColor
    });
  }
  onYellowInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.y = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "yellow",
      valid: true,
      value: this.cmyk.y,
      color: this.outputColor
    });
  }
  onBlackInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.k = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "black",
      valid: true,
      value: this.cmyk.k,
      color: this.outputColor
    });
  }
  onAddPresetColor(event, value) {
    event.stopPropagation();
    if (!this.cpPresetColors.filter((color) => color === value).length) {
      this.cpPresetColors = this.cpPresetColors.concat(value);
      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
  }
  onRemovePresetColor(event, value) {
    event.stopPropagation();
    this.cpPresetColors = this.cpPresetColors.filter((color) => color !== value);
    this.directiveInstance.presetColorsChanged(this.cpPresetColors);
  }
  // Private helper functions for the color picker dialog status
  openColorPicker() {
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(() => {
        this.hidden = false;
        this.setDialogPosition();
        this.cdRef.detectChanges();
      }, 0);
      this.directiveInstance.stateChanged(true);
      if (!this.isIE10) {
        this.ngZone.runOutsideAngular(() => {
          if (SUPPORTS_TOUCH) {
            document.addEventListener("touchstart", this.listenerMouseDown);
          } else {
            document.addEventListener("mousedown", this.listenerMouseDown);
          }
        });
      }
      window.addEventListener("resize", this.listenerResize);
    }
  }
  closeColorPicker() {
    if (this.show) {
      this.show = false;
      this.directiveInstance.stateChanged(false);
      if (!this.isIE10) {
        if (SUPPORTS_TOUCH) {
          document.removeEventListener("touchstart", this.listenerMouseDown);
        } else {
          document.removeEventListener("mousedown", this.listenerMouseDown);
        }
      }
      window.removeEventListener("resize", this.listenerResize);
      if (!this.cdRef["destroyed"]) {
        this.cdRef.detectChanges();
      }
    }
  }
  updateColorPicker(emit = true, update = true, cmykInput = false) {
    if (this.sliderDimMax) {
      if (this.cpColorMode === 2) {
        this.hsva.s = 0;
      }
      let hue, hsla, rgba;
      const lastOutput = this.outputColor;
      hsla = this.service.hsva2hsla(this.hsva);
      if (!this.cpCmykEnabled) {
        rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
      } else {
        if (!cmykInput) {
          rgba = this.service.hsvaToRgba(this.hsva);
          this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
        } else {
          rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
          this.hsva = this.service.rgbaToHsva(rgba);
        }
        rgba = this.service.denormalizeRGBA(rgba);
        this.sliderH = this.hsva.h;
      }
      hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
      if (update) {
        this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
        if (this.cpCmykEnabled) {
          this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
        }
        const allowHex8 = this.cpAlphaChannel === "always";
        this.hexText = this.service.rgbaToHex(rgba, allowHex8);
        this.hexAlpha = this.rgbaText.a;
      }
      if (this.cpOutputFormat === "auto") {
        if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK && this.format !== ColorFormats.HSLA) {
          if (this.hsva.a < 1) {
            this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
          }
        }
      }
      this.hueSliderColor = "rgb(" + hue.r + "," + hue.g + "," + hue.b + ")";
      this.alphaSliderColor = "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
      this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
      this.selectedColor = this.service.outputFormat(this.hsva, "rgba", null);
      if (this.format !== ColorFormats.CMYK) {
        this.cmykColor = "";
      } else {
        if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "enabled" || this.cpAlphaChannel === "forced") {
          const alpha = Math.round(this.cmyk.a * 100) / 100;
          this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
        } else {
          this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
        }
      }
      this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
      if (emit && lastOutput !== this.outputColor) {
        if (this.cpCmykEnabled) {
          this.directiveInstance.cmykChanged(this.cmykColor);
        }
        this.directiveInstance.colorChanged(this.outputColor);
      }
    }
  }
  // Private helper functions for the color picker dialog positioning
  setDialogPosition() {
    if (this.cpDialogDisplay === "inline") {
      this.position = "relative";
    } else {
      let position = "static", transform = "", style;
      let parentNode = null, transformNode = null;
      let node = this.directiveElementRef.nativeElement.parentNode;
      const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
      while (node !== null && node.tagName !== "HTML") {
        style = window.getComputedStyle(node);
        position = style.getPropertyValue("position");
        transform = style.getPropertyValue("transform");
        if (position !== "static" && parentNode === null) {
          parentNode = node;
        }
        if (transform && transform !== "none" && transformNode === null) {
          transformNode = node;
        }
        if (position === "fixed") {
          parentNode = transformNode;
          break;
        }
        node = node.parentNode;
      }
      const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== "fixed");
      if (this.useRootViewContainer || position === "fixed" && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
        this.top = boxDirective.top;
        this.left = boxDirective.left;
      } else {
        if (parentNode === null) {
          parentNode = node;
        }
        const boxParent = this.createDialogBox(parentNode, position !== "fixed");
        this.top = boxDirective.top - boxParent.top;
        this.left = boxDirective.left - boxParent.left;
      }
      if (position === "fixed") {
        this.position = "fixed";
      }
      let usePosition = this.cpPosition;
      const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
      if (this.cpPosition === "auto") {
        const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
        usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
      }
      this.arrowTop = usePosition === "top" ? dialogHeight - 1 : void 0;
      this.cpArrowPosition = void 0;
      switch (usePosition) {
        case "top":
          this.top -= dialogHeight + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          break;
        case "bottom":
          this.top += boxDirective.height + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          break;
        case "top-left":
        case "left-top":
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          break;
        case "top-right":
        case "right-top":
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          break;
        case "left":
        case "bottom-left":
        case "left-bottom":
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left -= this.cpWidth + this.dialogArrowSize - 2;
          break;
        case "right":
        case "bottom-right":
        case "right-bottom":
        default:
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left += boxDirective.width + this.dialogArrowSize - 2;
          break;
      }
      const windowInnerHeight = window.innerHeight;
      const windowInnerWidth = window.innerWidth;
      const elRefClientRect = this.elRef.nativeElement.getBoundingClientRect();
      const bottom = this.top + dialogBounds.height;
      if (bottom > windowInnerHeight) {
        this.top = windowInnerHeight - dialogBounds.height;
        this.cpArrowPosition = elRefClientRect.x / 2 - 20;
      }
      const right = this.left + dialogBounds.width;
      if (right > windowInnerWidth) {
        this.left = windowInnerWidth - dialogBounds.width;
        this.cpArrowPosition = elRefClientRect.x / 2 - 20;
      }
      this.cpUsePosition = usePosition;
    }
  }
  // Private helper functions for the color picker dialog positioning and opening
  isDescendant(parent2, child) {
    let node = child.parentNode;
    while (node !== null) {
      if (node === parent2) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  createDialogBox(element, offset) {
    const {
      top,
      left
    } = element.getBoundingClientRect();
    return {
      top: top + (offset ? window.pageYOffset : 0),
      left: left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  static \u0275fac = function ColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ColorPickerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPickerComponent,
    selectors: [["color-picker"]],
    viewQuery: function ColorPickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
        \u0275\u0275viewQuery(_c1, 7);
        \u0275\u0275viewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.dialogElement = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.hueSlider = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.alphaSlider = _t2.first);
      }
    },
    hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
          return ctx.handleEsc($event);
        }, false, \u0275\u0275resolveDocument)("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
          return ctx.handleEnter($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    decls: 30,
    vars: 51,
    consts: [["dialogPopup", ""], ["hueSlider", ""], ["valueSlider", ""], ["alphaSlider", ""], [1, "color-picker", 3, "click"], [3, "left", "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color", 3, "click"], ["class", "eyedropper-icon", "xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 4, "ngIf"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "cursor"], [1, "value", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "alpha", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], ["class", "extra-template", 4, "ngIf"], [1, "saturation-lightness", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX", "rgY"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "eyedropper-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"], ["type", "button", 3, "click", "disabled"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "keyup.enter", "newValue", "text", "rg", "value"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hex-text"], [3, "blur", "keyup.enter", "newValue", "text", "value"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "extra-template"], [4, "ngTemplateOutlet"]],
    template: function ColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4, 0);
        \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275template(2, ColorPickerComponent_div_2_Template, 1, 7, "div", 5)(3, ColorPickerComponent_div_3_Template, 2, 8, "div", 6);
        \u0275\u0275elementStart(4, "div", 7)(5, "div", 8);
        \u0275\u0275element(6, "div", 9);
        \u0275\u0275elementStart(7, "div", 10);
        \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.eyeDropperSupported && ctx.cpEyeDropper && ctx.onEyeDropper());
        });
        \u0275\u0275template(8, ColorPickerComponent__svg_svg_8_Template, 3, 0, "svg", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ColorPickerComponent_button_9_Template, 2, 5, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 13);
        \u0275\u0275template(11, ColorPickerComponent_div_11_Template, 1, 0, "div", 14);
        \u0275\u0275elementStart(12, "div", 15, 1);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onHueChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("hue"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("hue"));
        });
        \u0275\u0275element(14, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 17, 2);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onValueChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("value"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("value"));
        });
        \u0275\u0275element(17, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 18, 3);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAlphaChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("alpha"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("alpha"));
        });
        \u0275\u0275element(20, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(21, ColorPickerComponent_div_21_Template, 17, 12, "div", 19)(22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20)(23, ColorPickerComponent_div_23_Template, 14, 10, "div", 21)(24, ColorPickerComponent_div_24_Template, 8, 7, "div", 22)(25, ColorPickerComponent_div_25_Template, 9, 3, "div", 23)(26, ColorPickerComponent_div_26_Template, 3, 0, "div", 24)(27, ColorPickerComponent_div_27_Template, 6, 3, "div", 25)(28, ColorPickerComponent_div_28_Template, 3, 2, "div", 26)(29, ColorPickerComponent_div_29_Template, 2, 1, "div", 27);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
        \u0275\u0275classProp("open", ctx.show);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.cpDialogDisplay === "popup");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("background-color", ctx.selectedColor)("cursor", ctx.eyeDropperSupported && ctx.cpEyeDropper ? "pointer" : null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.eyeDropperSupported && ctx.cpEyeDropper);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpAddColorButton);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.cpAlphaChannel === "disabled");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.h, "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("right", ctx.slider == null ? null : ctx.slider.v, "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.a, "px");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpExtraTemplate);
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet, TextDirective, SliderDirective],
    styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;-webkit-flex:1;-ms-flex:1;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{
      selector: "color-picker",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div #dialogPopup class="color-picker" [class.open]="show" [style.display]="!show ? 'none' : 'block'" [style.visibility]="hidden ? 'hidden' : 'visible'" [style.top.px]="top" [style.left.px]="left" [style.position]="position" [style.height.px]="cpHeight" [style.width.px]="cpWidth" (click)="$event.stopPropagation()">
  <div *ngIf="cpDialogDisplay === 'popup'" [style.left]="cpArrowPosition" class="arrow arrow-{{cpUsePosition}}" [style.top.px]="arrowTop"></div>

  <div *ngIf="(cpColorMode ||\xA01) === 1" class="saturation-lightness" [slider] [rgX]="1" [rgY]="1" [style.background-color]="hueSliderColor" (newValue)="onColorChange($event)" (dragStart)="onDragStart('saturation-lightness')" (dragEnd)="onDragEnd('saturation-lightness')">
    <div class="cursor" [style.top.px]="slider?.v" [style.left.px]="slider?.s"></div>
  </div>

  <div class="hue-alpha box">
    <div class="left">
      <div class="selected-color-background"></div>

      <div class="selected-color" [style.background-color]="selectedColor" [style.cursor]="eyeDropperSupported && cpEyeDropper ? 'pointer' : null" (click)="eyeDropperSupported && cpEyeDropper && onEyeDropper()">
        <svg *ngIf="eyeDropperSupported && cpEyeDropper" class="eyedropper-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/></svg>
      </div>

      <button *ngIf="cpAddColorButton" type="button" class="{{cpAddColorButtonClass}}" [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength" (click)="onAddPresetColor($event, selectedColor)">
        {{cpAddColorButtonText}}
      </button>
    </div>

    <div class="right">
      <div *ngIf="cpAlphaChannel==='disabled'" style="height: 16px;"></div>

      <div #hueSlider class="hue" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 1 ? 'block' : 'none'" (newValue)="onHueChange($event)" (dragStart)="onDragStart('hue')" (dragEnd)="onDragEnd('hue')">
        <div class="cursor" [style.left.px]="slider?.h"></div>
      </div>

      <div #valueSlider class="value" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 2 ? 'block': 'none'" (newValue)="onValueChange($event)" (dragStart)="onDragStart('value')" (dragEnd)="onDragEnd('value')">
        <div class="cursor" [style.right.px]="slider?.v"></div>
      </div>

      <div #alphaSlider class="alpha" [slider] [rgX]="1" [style.display]="cpAlphaChannel === 'disabled' ? 'none' : 'block'" [style.background-color]="alphaSliderColor" (newValue)="onAlphaChange($event)" (dragStart)="onDragStart('alpha')" (dragEnd)="onDragEnd('alpha')">
        <div class="cursor" [style.left.px]="slider?.a"></div>
      </div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="cmyk-text" [style.display]="format !== 3 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.c" (keyup.enter)="onAcceptColor($event)" (newValue)="onCyanInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.m" (keyup.enter)="onAcceptColor($event)" (newValue)="onMagentaInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.y" (keyup.enter)="onAcceptColor($event)" (newValue)="onYellowInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.k" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlackInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="cmykText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

     <div class="box">
      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " class="hsla-text" [style.display]="format !== 2 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="360" [text] [rg]="360" [value]="hslaText?.h" (keyup.enter)="onAcceptColor($event)" (newValue)="onHueInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.s" (keyup.enter)="onAcceptColor($event)" (newValue)="onSaturationInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onLightnessInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>H</div><div>S</div><div>L</div><div *ngIf="cpAlphaChannel!=='disabled'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " [style.display]="format !== 1 ? 'none' : 'block'" class="rgba-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.r" (keyup.enter)="onAcceptColor($event)" (newValue)="onRedInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.g" (keyup.enter)="onAcceptColor($event)" (newValue)="onGreenInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.b" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="rgbaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>R</div><div>G</div><div>B</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="hex-text" [class.hex-alpha]="cpAlphaChannel==='forced'"
    [style.display]="format !== 0 ? 'none' : 'block'">
    <div class="box">
      <input [text] [value]="hexText" (blur)="onHexInput(null)" (keyup.enter)="onAcceptColor($event)" (newValue)="onHexInput($event)"/>
      <input *ngIf="cpAlphaChannel==='forced'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hexAlpha" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)"/>
    </div>

    <div class="box">
      <div>Hex</div>
      <div *ngIf="cpAlphaChannel==='forced'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 2" class="value-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onValueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1"  [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>V</div><div>A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="type-policy">
    <span class="type-policy-arrow" (click)="onFormatToggle(-1)"></span>
    <span class="type-policy-arrow" (click)="onFormatToggle(1)"></span>
  </div>

  <div *ngIf="cpPresetColors?.length || cpAddColorButton" class="preset-area">
    <hr>

    <div class="preset-label">{{cpPresetLabel}}</div>

    <div *ngIf="cpPresetColors?.length" class="{{cpPresetColorsClass}}">
      <div *ngFor="let color of cpPresetColors" class="preset-color" [style.backgroundColor]="color" (click)="setColorFromString(color)">
        <span *ngIf="cpAddColorButton" class="{{cpRemoveColorButtonClass}}" (click)="onRemovePresetColor($event, color)"></span>
      </div>
    </div>

    <div *ngIf="!cpPresetColors?.length && cpAddColorButton" class="{{cpPresetEmptyMessageClass}}">{{cpPresetEmptyMessage}}</div>
  </div>

  <div *ngIf="cpOKButton || cpCancelButton" class="button-area">
    <button *ngIf="cpCancelButton" type="button" class="{{cpCancelButtonClass}}" (click)="onCancelColor($event)">{{cpCancelButtonText}}</button>

    <button *ngIf="cpOKButton" type="button" class="{{cpOKButtonClass}}" (click)="onAcceptColor($event)">{{cpOKButtonText}}</button>
  </div>

  <div class="extra-template" *ngIf="cpExtraTemplate">
    <ng-container *ngTemplateOutlet="cpExtraTemplate"></ng-container>
  </div>
</div>
`,
      styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;-webkit-flex:1;-ms-flex:1;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n']
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ColorPickerService
  }], {
    dialogElement: [{
      type: ViewChild,
      args: ["dialogPopup", {
        static: true
      }]
    }],
    hueSlider: [{
      type: ViewChild,
      args: ["hueSlider", {
        static: true
      }]
    }],
    alphaSlider: [{
      type: ViewChild,
      args: ["alphaSlider", {
        static: true
      }]
    }],
    handleEsc: [{
      type: HostListener,
      args: ["document:keyup.esc", ["$event"]]
    }],
    handleEnter: [{
      type: HostListener,
      args: ["document:keyup.enter", ["$event"]]
    }]
  });
})();
var NG_DEV_MODE = typeof ngDevMode === "undefined" || !!ngDevMode;
var ColorPickerDirective = class _ColorPickerDirective {
  injector;
  cfr;
  appRef;
  vcRef;
  elRef;
  _service;
  dialog;
  dialogCreated = false;
  ignoreChanges = false;
  cmpRef;
  viewAttachedToAppRef = false;
  colorPicker;
  cpWidth = "230px";
  cpHeight = "auto";
  cpToggle = false;
  cpDisabled = false;
  cpIgnoredElements = [];
  cpFallbackColor = "";
  cpColorMode = "color";
  cpCmykEnabled = false;
  cpOutputFormat = "auto";
  cpAlphaChannel = "enabled";
  cpDisableInput = false;
  cpDialogDisplay = "popup";
  cpSaveClickOutside = true;
  cpCloseClickOutside = true;
  cpUseRootViewContainer = false;
  cpPosition = "auto";
  cpPositionOffset = "0%";
  cpPositionRelativeToArrow = false;
  cpOKButton = false;
  cpOKButtonText = "OK";
  cpOKButtonClass = "cp-ok-button-class";
  cpCancelButton = false;
  cpCancelButtonText = "Cancel";
  cpCancelButtonClass = "cp-cancel-button-class";
  cpEyeDropper = false;
  cpPresetLabel = "Preset colors";
  cpPresetColors;
  cpPresetColorsClass = "cp-preset-colors-class";
  cpMaxPresetColorsLength = 6;
  cpPresetEmptyMessage = "No colors added";
  cpPresetEmptyMessageClass = "preset-empty-message";
  cpAddColorButton = false;
  cpAddColorButtonText = "Add color";
  cpAddColorButtonClass = "cp-add-color-button-class";
  cpRemoveColorButtonClass = "cp-remove-color-button-class";
  cpArrowPosition = 0;
  cpExtraTemplate;
  cpInputChange = new EventEmitter(true);
  cpToggleChange = new EventEmitter(true);
  cpSliderChange = new EventEmitter(true);
  cpSliderDragEnd = new EventEmitter(true);
  cpSliderDragStart = new EventEmitter(true);
  colorPickerOpen = new EventEmitter(true);
  colorPickerClose = new EventEmitter(true);
  colorPickerCancel = new EventEmitter(true);
  colorPickerSelect = new EventEmitter(true);
  colorPickerChange = new EventEmitter(false);
  cpCmykColorChange = new EventEmitter(true);
  cpPresetColorsChange = new EventEmitter(true);
  handleClick() {
    this.inputFocus();
  }
  handleFocus() {
    this.inputFocus();
  }
  handleInput(event) {
    this.inputChange(event);
  }
  constructor(injector, cfr, appRef, vcRef, elRef, _service) {
    this.injector = injector;
    this.cfr = cfr;
    this.appRef = appRef;
    this.vcRef = vcRef;
    this.elRef = elRef;
    this._service = _service;
  }
  ngOnDestroy() {
    if (this.cmpRef != null) {
      if (this.viewAttachedToAppRef) {
        this.appRef.detachView(this.cmpRef.hostView);
      }
      this.cmpRef.destroy();
      this.cmpRef = null;
      this.dialog = null;
    }
  }
  ngOnChanges(changes) {
    if (changes.cpToggle && !this.cpDisabled) {
      if (changes.cpToggle.currentValue) {
        this.openDialog();
      } else if (!changes.cpToggle.currentValue) {
        this.closeDialog();
      }
    }
    if (changes.colorPicker) {
      if (this.dialog && !this.ignoreChanges) {
        if (this.cpDialogDisplay === "inline") {
          this.dialog.setInitialColor(changes.colorPicker.currentValue);
        }
        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      }
      this.ignoreChanges = false;
    }
    if (changes.cpPresetLabel || changes.cpPresetColors) {
      if (this.dialog) {
        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
      }
    }
  }
  openDialog() {
    if (!this.dialogCreated) {
      let vcRef = this.vcRef;
      this.dialogCreated = true;
      this.viewAttachedToAppRef = false;
      if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
        const classOfRootComponent = this.appRef.componentTypes[0];
        const appInstance = this.injector.get(classOfRootComponent, Injector.NULL);
        if (appInstance !== Injector.NULL) {
          vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
          if (NG_DEV_MODE && vcRef === this.vcRef) {
            console.warn("You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef!Please expose it by adding 'public vcRef: ViewContainerRef' to the constructor.");
          }
        } else {
          this.viewAttachedToAppRef = true;
        }
      }
      const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
      if (this.viewAttachedToAppRef) {
        this.cmpRef = compFactory.create(this.injector);
        this.appRef.attachView(this.cmpRef.hostView);
        document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
      } else {
        const injector = Injector.create({
          providers: [],
          // We shouldn't use `vcRef.parentInjector` since it's been deprecated long time ago and might be removed
          // in newer Angular versions: https://github.com/angular/angular/pull/25174.
          parent: vcRef.injector
        });
        this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      }
      this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.cpEyeDropper, this.elRef, this.cpExtraTemplate);
      this.dialog = this.cmpRef.instance;
      if (this.vcRef !== vcRef) {
        this.cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.cmpRef.instance.cpAlphaChannel = this.cpAlphaChannel;
      this.dialog.openDialog(this.colorPicker);
    }
  }
  closeDialog() {
    if (this.dialog && this.cpDialogDisplay === "popup") {
      this.dialog.closeDialog();
    }
  }
  cmykChanged(value) {
    this.cpCmykColorChange.emit(value);
  }
  stateChanged(state) {
    this.cpToggleChange.emit(state);
    if (state) {
      this.colorPickerOpen.emit(this.colorPicker);
    } else {
      this.colorPickerClose.emit(this.colorPicker);
    }
  }
  colorChanged(value, ignore = true) {
    this.ignoreChanges = ignore;
    this.colorPickerChange.emit(value);
  }
  colorSelected(value) {
    this.colorPickerSelect.emit(value);
  }
  colorCanceled() {
    this.colorPickerCancel.emit();
  }
  inputFocus() {
    const element = this.elRef.nativeElement;
    const ignored = this.cpIgnoredElements.filter((item) => item === element);
    if (!this.cpDisabled && !ignored.length) {
      if (typeof document !== "undefined" && element === document.activeElement) {
        this.openDialog();
      } else if (!this.dialog || !this.dialog.show) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }
  inputChange(event) {
    if (this.dialog) {
      this.dialog.setColorFromString(event.target.value, true);
    } else {
      this.colorPicker = event.target.value;
      this.colorPickerChange.emit(this.colorPicker);
    }
  }
  inputChanged(event) {
    this.cpInputChange.emit(event);
  }
  sliderChanged(event) {
    this.cpSliderChange.emit(event);
  }
  sliderDragEnd(event) {
    this.cpSliderDragEnd.emit(event);
  }
  sliderDragStart(event) {
    this.cpSliderDragStart.emit(event);
  }
  presetColorsChanged(value) {
    this.cpPresetColorsChange.emit(value);
  }
  static \u0275fac = function ColorPickerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ColorPickerService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ColorPickerDirective,
    selectors: [["", "colorPicker", ""]],
    hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ColorPickerDirective_click_HostBindingHandler() {
          return ctx.handleClick();
        })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
          return ctx.handleFocus();
        })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        });
      }
    },
    inputs: {
      colorPicker: "colorPicker",
      cpWidth: "cpWidth",
      cpHeight: "cpHeight",
      cpToggle: "cpToggle",
      cpDisabled: "cpDisabled",
      cpIgnoredElements: "cpIgnoredElements",
      cpFallbackColor: "cpFallbackColor",
      cpColorMode: "cpColorMode",
      cpCmykEnabled: "cpCmykEnabled",
      cpOutputFormat: "cpOutputFormat",
      cpAlphaChannel: "cpAlphaChannel",
      cpDisableInput: "cpDisableInput",
      cpDialogDisplay: "cpDialogDisplay",
      cpSaveClickOutside: "cpSaveClickOutside",
      cpCloseClickOutside: "cpCloseClickOutside",
      cpUseRootViewContainer: "cpUseRootViewContainer",
      cpPosition: "cpPosition",
      cpPositionOffset: "cpPositionOffset",
      cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
      cpOKButton: "cpOKButton",
      cpOKButtonText: "cpOKButtonText",
      cpOKButtonClass: "cpOKButtonClass",
      cpCancelButton: "cpCancelButton",
      cpCancelButtonText: "cpCancelButtonText",
      cpCancelButtonClass: "cpCancelButtonClass",
      cpEyeDropper: "cpEyeDropper",
      cpPresetLabel: "cpPresetLabel",
      cpPresetColors: "cpPresetColors",
      cpPresetColorsClass: "cpPresetColorsClass",
      cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
      cpPresetEmptyMessage: "cpPresetEmptyMessage",
      cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
      cpAddColorButton: "cpAddColorButton",
      cpAddColorButtonText: "cpAddColorButtonText",
      cpAddColorButtonClass: "cpAddColorButtonClass",
      cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
      cpArrowPosition: "cpArrowPosition",
      cpExtraTemplate: "cpExtraTemplate"
    },
    outputs: {
      cpInputChange: "cpInputChange",
      cpToggleChange: "cpToggleChange",
      cpSliderChange: "cpSliderChange",
      cpSliderDragEnd: "cpSliderDragEnd",
      cpSliderDragStart: "cpSliderDragStart",
      colorPickerOpen: "colorPickerOpen",
      colorPickerClose: "colorPickerClose",
      colorPickerCancel: "colorPickerCancel",
      colorPickerSelect: "colorPickerSelect",
      colorPickerChange: "colorPickerChange",
      cpCmykColorChange: "cpCmykColorChange",
      cpPresetColorsChange: "cpPresetColorsChange"
    },
    exportAs: ["ngxColorPicker"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerDirective, [{
    type: Directive,
    args: [{
      selector: "[colorPicker]",
      exportAs: "ngxColorPicker"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: ApplicationRef
  }, {
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: ColorPickerService
  }], {
    colorPicker: [{
      type: Input
    }],
    cpWidth: [{
      type: Input
    }],
    cpHeight: [{
      type: Input
    }],
    cpToggle: [{
      type: Input
    }],
    cpDisabled: [{
      type: Input
    }],
    cpIgnoredElements: [{
      type: Input
    }],
    cpFallbackColor: [{
      type: Input
    }],
    cpColorMode: [{
      type: Input
    }],
    cpCmykEnabled: [{
      type: Input
    }],
    cpOutputFormat: [{
      type: Input
    }],
    cpAlphaChannel: [{
      type: Input
    }],
    cpDisableInput: [{
      type: Input
    }],
    cpDialogDisplay: [{
      type: Input
    }],
    cpSaveClickOutside: [{
      type: Input
    }],
    cpCloseClickOutside: [{
      type: Input
    }],
    cpUseRootViewContainer: [{
      type: Input
    }],
    cpPosition: [{
      type: Input
    }],
    cpPositionOffset: [{
      type: Input
    }],
    cpPositionRelativeToArrow: [{
      type: Input
    }],
    cpOKButton: [{
      type: Input
    }],
    cpOKButtonText: [{
      type: Input
    }],
    cpOKButtonClass: [{
      type: Input
    }],
    cpCancelButton: [{
      type: Input
    }],
    cpCancelButtonText: [{
      type: Input
    }],
    cpCancelButtonClass: [{
      type: Input
    }],
    cpEyeDropper: [{
      type: Input
    }],
    cpPresetLabel: [{
      type: Input
    }],
    cpPresetColors: [{
      type: Input
    }],
    cpPresetColorsClass: [{
      type: Input
    }],
    cpMaxPresetColorsLength: [{
      type: Input
    }],
    cpPresetEmptyMessage: [{
      type: Input
    }],
    cpPresetEmptyMessageClass: [{
      type: Input
    }],
    cpAddColorButton: [{
      type: Input
    }],
    cpAddColorButtonText: [{
      type: Input
    }],
    cpAddColorButtonClass: [{
      type: Input
    }],
    cpRemoveColorButtonClass: [{
      type: Input
    }],
    cpArrowPosition: [{
      type: Input
    }],
    cpExtraTemplate: [{
      type: Input
    }],
    cpInputChange: [{
      type: Output
    }],
    cpToggleChange: [{
      type: Output
    }],
    cpSliderChange: [{
      type: Output
    }],
    cpSliderDragEnd: [{
      type: Output
    }],
    cpSliderDragStart: [{
      type: Output
    }],
    colorPickerOpen: [{
      type: Output
    }],
    colorPickerClose: [{
      type: Output
    }],
    colorPickerCancel: [{
      type: Output
    }],
    colorPickerSelect: [{
      type: Output
    }],
    colorPickerChange: [{
      type: Output
    }],
    cpCmykColorChange: [{
      type: Output
    }],
    cpPresetColorsChange: [{
      type: Output
    }],
    handleClick: [{
      type: HostListener,
      args: ["click"]
    }],
    handleFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    handleInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ColorPickerDirective],
      declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective]
    }]
  }], null, null);
})();

// node_modules/overlayscrollbars/overlayscrollbars.mjs
var createCache = (t2, n2) => {
  const {
    o: o2,
    i: s2,
    u: e2
  } = t2;
  let c2 = o2;
  let r2;
  const cacheUpdateContextual = (t3, n3) => {
    const o3 = c2;
    const l2 = t3;
    const i2 = n3 || (s2 ? !s2(o3, l2) : o3 !== l2);
    if (i2 || e2) {
      c2 = l2;
      r2 = o3;
    }
    return [c2, i2, r2];
  };
  const cacheUpdateIsolated = (t3) => cacheUpdateContextual(n2(c2, r2), t3);
  const getCurrentCache = (t3) => [c2, !!t3, r2];
  return [n2 ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
};
var t = typeof window !== "undefined" && typeof HTMLElement !== "undefined" && !!window.document;
var n = t ? window : {};
var o = Math.max;
var s = Math.min;
var e = Math.round;
var c = Math.abs;
var r = Math.sign;
var l = n.cancelAnimationFrame;
var i = n.requestAnimationFrame;
var a = n.setTimeout;
var u = n.clearTimeout;
var getApi = (t2) => typeof n[t2] !== "undefined" ? n[t2] : void 0;
var _ = getApi("MutationObserver");
var d = getApi("IntersectionObserver");
var f = getApi("ResizeObserver");
var v = getApi("ScrollTimeline");
var isUndefined = (t2) => t2 === void 0;
var isNull = (t2) => t2 === null;
var isNumber = (t2) => typeof t2 === "number";
var isString = (t2) => typeof t2 === "string";
var isBoolean = (t2) => typeof t2 === "boolean";
var isFunction = (t2) => typeof t2 === "function";
var isArray = (t2) => Array.isArray(t2);
var isObject = (t2) => typeof t2 === "object" && !isArray(t2) && !isNull(t2);
var isArrayLike = (t2) => {
  const n2 = !!t2 && t2.length;
  const o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
  return isArray(t2) || !isFunction(t2) && o2 ? n2 > 0 && isObject(t2) ? n2 - 1 in t2 : true : false;
};
var isPlainObject = (t2) => !!t2 && t2.constructor === Object;
var isHTMLElement = (t2) => t2 instanceof HTMLElement;
var isElement = (t2) => t2 instanceof Element;
function each(t2, n2) {
  if (isArrayLike(t2)) {
    for (let o2 = 0; o2 < t2.length; o2++) {
      if (n2(t2[o2], o2, t2) === false) {
        break;
      }
    }
  } else if (t2) {
    each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
  }
  return t2;
}
var inArray = (t2, n2) => t2.indexOf(n2) >= 0;
var concat = (t2, n2) => t2.concat(n2);
var push = (t2, n2, o2) => {
  !o2 && !isString(n2) && isArrayLike(n2) ? Array.prototype.push.apply(t2, n2) : t2.push(n2);
  return t2;
};
var from = (t2) => Array.from(t2 || []);
var createOrKeepArray = (t2) => {
  if (isArray(t2)) {
    return t2;
  }
  return !isString(t2) && isArrayLike(t2) ? from(t2) : [t2];
};
var isEmptyArray = (t2) => !!t2 && !t2.length;
var deduplicateArray = (t2) => from(new Set(t2));
var runEachAndClear = (t2, n2, o2) => {
  const runFn = (t3) => t3 ? t3.apply(void 0, n2 || []) : true;
  each(t2, runFn);
  !o2 && (t2.length = 0);
};
var p = "paddingTop";
var h = "paddingRight";
var g = "paddingLeft";
var b = "paddingBottom";
var w = "marginLeft";
var y = "marginRight";
var S = "marginBottom";
var m = "overflowX";
var O = "overflowY";
var $ = "width";
var C = "height";
var x = "visible";
var H = "hidden";
var E = "scroll";
var capitalizeFirstLetter = (t2) => {
  const n2 = String(t2 || "");
  return n2 ? n2[0].toUpperCase() + n2.slice(1) : "";
};
var equal = (t2, n2, o2, s2) => {
  if (t2 && n2) {
    let e2 = true;
    each(o2, (o3) => {
      const c2 = s2 ? s2(t2[o3]) : t2[o3];
      const r2 = s2 ? s2(n2[o3]) : n2[o3];
      if (c2 !== r2) {
        e2 = false;
      }
    });
    return e2;
  }
  return false;
};
var equalWH = (t2, n2) => equal(t2, n2, ["w", "h"]);
var equalXY = (t2, n2) => equal(t2, n2, ["x", "y"]);
var equalTRBL = (t2, n2) => equal(t2, n2, ["t", "r", "b", "l"]);
var noop = () => {
};
var bind = (t2, ...n2) => t2.bind(0, ...n2);
var selfClearTimeout = (t2) => {
  let n2;
  const o2 = t2 ? a : i;
  const s2 = t2 ? u : l;
  return [(e2) => {
    s2(n2);
    n2 = o2(() => e2(), isFunction(t2) ? t2() : t2);
  }, () => s2(n2)];
};
var debounce = (t2, n2) => {
  const {
    _: o2,
    v: s2,
    p: e2,
    S: c2
  } = n2 || {};
  let r2;
  let _2;
  let d2;
  let f2;
  let v2 = noop;
  const p2 = function invokeFunctionToDebounce(n3) {
    v2();
    u(r2);
    f2 = r2 = _2 = void 0;
    v2 = noop;
    t2.apply(this, n3);
  };
  const mergeParms = (t3) => c2 && _2 ? c2(_2, t3) : t3;
  const flush = () => {
    if (v2 !== noop) {
      p2(mergeParms(d2) || d2);
    }
  };
  const h2 = function debouncedFn() {
    const t3 = from(arguments);
    const n3 = isFunction(o2) ? o2() : o2;
    const c3 = isNumber(n3) && n3 >= 0;
    if (c3) {
      const o3 = isFunction(s2) ? s2() : s2;
      const c4 = isNumber(o3) && o3 >= 0;
      const h3 = n3 > 0 ? a : i;
      const g2 = n3 > 0 ? u : l;
      const b2 = mergeParms(t3);
      const w2 = b2 || t3;
      const y2 = p2.bind(0, w2);
      let S2;
      v2();
      if (e2 && !f2) {
        y2();
        f2 = true;
        S2 = h3(() => f2 = void 0, n3);
      } else {
        S2 = h3(y2, n3);
        if (c4 && !r2) {
          r2 = a(flush, o3);
        }
      }
      v2 = () => g2(S2);
      _2 = d2 = w2;
    } else {
      p2(t3);
    }
  };
  h2.m = flush;
  return h2;
};
var hasOwnProperty = (t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2);
var keys = (t2) => t2 ? Object.keys(t2) : [];
var assignDeep = (t2, n2, o2, s2, e2, c2, r2) => {
  const l2 = [n2, o2, s2, e2, c2, r2];
  if ((typeof t2 !== "object" || isNull(t2)) && !isFunction(t2)) {
    t2 = {};
  }
  each(l2, (n3) => {
    each(n3, (o3, s3) => {
      const e3 = n3[s3];
      if (t2 === e3) {
        return true;
      }
      const c3 = isArray(e3);
      if (e3 && isPlainObject(e3)) {
        const n4 = t2[s3];
        let o4 = n4;
        if (c3 && !isArray(n4)) {
          o4 = [];
        } else if (!c3 && !isPlainObject(n4)) {
          o4 = {};
        }
        t2[s3] = assignDeep(o4, e3);
      } else {
        t2[s3] = c3 ? e3.slice() : e3;
      }
    });
  });
  return t2;
};
var removeUndefinedProperties = (t2, n2) => each(assignDeep({}, t2), (t3, o2, s2) => {
  if (t3 === void 0) {
    delete s2[o2];
  } else if (n2 && t3 && isPlainObject(t3)) {
    s2[o2] = removeUndefinedProperties(t3, n2);
  }
});
var isEmptyObject = (t2) => !keys(t2).length;
var capNumber = (t2, n2, e2) => o(t2, s(n2, e2));
var getDomTokensArray = (t2) => deduplicateArray((isArray(t2) ? t2 : (t2 || "").split(" ")).filter((t3) => t3));
var getAttr = (t2, n2) => t2 && t2.getAttribute(n2);
var hasAttr = (t2, n2) => t2 && t2.hasAttribute(n2);
var setAttrs = (t2, n2, o2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.setAttribute(n3, String(o2 || ""));
  });
};
var removeAttrs = (t2, n2) => {
  each(getDomTokensArray(n2), (n3) => t2 && t2.removeAttribute(n3));
};
var domTokenListAttr = (t2, n2) => {
  const o2 = getDomTokensArray(getAttr(t2, n2));
  const s2 = bind(setAttrs, t2, n2);
  const domTokenListOperation = (t3, n3) => {
    const s3 = new Set(o2);
    each(getDomTokensArray(t3), (t4) => {
      s3[n3](t4);
    });
    return from(s3).join(" ");
  };
  return {
    O: (t3) => s2(domTokenListOperation(t3, "delete")),
    $: (t3) => s2(domTokenListOperation(t3, "add")),
    C: (t3) => {
      const n3 = getDomTokensArray(t3);
      return n3.reduce((t4, n4) => t4 && o2.includes(n4), n3.length > 0);
    }
  };
};
var removeAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).O(o2);
  return bind(addAttrClass, t2, n2, o2);
};
var addAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).$(o2);
  return bind(removeAttrClass, t2, n2, o2);
};
var addRemoveAttrClass = (t2, n2, o2, s2) => (s2 ? addAttrClass : removeAttrClass)(t2, n2, o2);
var hasAttrClass = (t2, n2, o2) => domTokenListAttr(t2, n2).C(o2);
var createDomTokenListClass = (t2) => domTokenListAttr(t2, "class");
var removeClass = (t2, n2) => {
  createDomTokenListClass(t2).O(n2);
};
var addClass = (t2, n2) => {
  createDomTokenListClass(t2).$(n2);
  return bind(removeClass, t2, n2);
};
var find = (t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 ? from(o2.querySelectorAll(t2)) : [];
};
var findFirst = (t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 && o2.querySelector(t2);
};
var is = (t2, n2) => isElement(t2) && t2.matches(n2);
var isBodyElement = (t2) => is(t2, "body");
var contents = (t2) => t2 ? from(t2.childNodes) : [];
var parent = (t2) => t2 && t2.parentElement;
var closest = (t2, n2) => isElement(t2) && t2.closest(n2);
var getFocusedElement = (t2) => (t2 || document).activeElement;
var liesBetween = (t2, n2, o2) => {
  const s2 = closest(t2, n2);
  const e2 = t2 && findFirst(o2, s2);
  const c2 = closest(e2, n2) === s2;
  return s2 && e2 ? s2 === t2 || e2 === t2 || c2 && closest(closest(t2, o2), n2) !== s2 : false;
};
var removeElements = (t2) => {
  each(createOrKeepArray(t2), (t3) => {
    const n2 = parent(t3);
    t3 && n2 && n2.removeChild(t3);
  });
};
var appendChildren = (t2, n2) => bind(removeElements, t2 && n2 && each(createOrKeepArray(n2), (n3) => {
  n3 && t2.appendChild(n3);
}));
var createDiv = (t2) => {
  const n2 = document.createElement("div");
  setAttrs(n2, "class", t2);
  return n2;
};
var createDOM = (t2) => {
  const n2 = createDiv();
  n2.innerHTML = t2.trim();
  return each(contents(n2), (t3) => removeElements(t3));
};
var getCSSVal = (t2, n2) => t2.getPropertyValue(n2) || t2[n2] || "";
var validFiniteNumber = (t2) => {
  const n2 = t2 || 0;
  return isFinite(n2) ? n2 : 0;
};
var parseToZeroOrNumber = (t2) => validFiniteNumber(parseFloat(t2 || ""));
var roundCssNumber = (t2) => Math.round(t2 * 1e4) / 1e4;
var numberToCssPx = (t2) => `${roundCssNumber(validFiniteNumber(t2))}px`;
function setStyles(t2, n2) {
  t2 && n2 && each(n2, (n3, o2) => {
    try {
      const s2 = t2.style;
      const e2 = isNull(n3) || isBoolean(n3) ? "" : isNumber(n3) ? numberToCssPx(n3) : n3;
      if (o2.indexOf("--") === 0) {
        s2.setProperty(o2, e2);
      } else {
        s2[o2] = e2;
      }
    } catch (s2) {
    }
  });
}
function getStyles(t2, o2, s2) {
  const e2 = isString(o2);
  let c2 = e2 ? "" : {};
  if (t2) {
    const r2 = n.getComputedStyle(t2, s2) || t2.style;
    c2 = e2 ? getCSSVal(r2, o2) : from(o2).reduce((t3, n2) => {
      t3[n2] = getCSSVal(r2, n2);
      return t3;
    }, c2);
  }
  return c2;
}
var topRightBottomLeft = (t2, n2, o2) => {
  const s2 = n2 ? `${n2}-` : "";
  const e2 = o2 ? `-${o2}` : "";
  const c2 = `${s2}top${e2}`;
  const r2 = `${s2}right${e2}`;
  const l2 = `${s2}bottom${e2}`;
  const i2 = `${s2}left${e2}`;
  const a2 = getStyles(t2, [c2, r2, l2, i2]);
  return {
    t: parseToZeroOrNumber(a2[c2]),
    r: parseToZeroOrNumber(a2[r2]),
    b: parseToZeroOrNumber(a2[l2]),
    l: parseToZeroOrNumber(a2[i2])
  };
};
var getTrasformTranslateValue = (t2, n2) => `translate${isObject(t2) ? `(${t2.x},${t2.y})` : `${n2 ? "X" : "Y"}(${t2})`}`;
var elementHasDimensions = (t2) => !!(t2.offsetWidth || t2.offsetHeight || t2.getClientRects().length);
var z = {
  w: 0,
  h: 0
};
var getElmWidthHeightProperty = (t2, n2) => n2 ? {
  w: n2[`${t2}Width`],
  h: n2[`${t2}Height`]
} : z;
var getWindowSize = (t2) => getElmWidthHeightProperty("inner", t2 || n);
var I = bind(getElmWidthHeightProperty, "offset");
var A = bind(getElmWidthHeightProperty, "client");
var D = bind(getElmWidthHeightProperty, "scroll");
var getFractionalSize = (t2) => {
  const n2 = parseFloat(getStyles(t2, $)) || 0;
  const o2 = parseFloat(getStyles(t2, C)) || 0;
  return {
    w: n2 - e(n2),
    h: o2 - e(o2)
  };
};
var getBoundingClientRect = (t2) => t2.getBoundingClientRect();
var hasDimensions = (t2) => !!t2 && elementHasDimensions(t2);
var domRectHasDimensions = (t2) => !!(t2 && (t2[C] || t2[$]));
var domRectAppeared = (t2, n2) => {
  const o2 = domRectHasDimensions(t2);
  const s2 = domRectHasDimensions(n2);
  return !s2 && o2;
};
var removeEventListener = (t2, n2, o2, s2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.removeEventListener(n3, o2, s2);
  });
};
var addEventListener = (t2, n2, o2, s2) => {
  var e2;
  const c2 = (e2 = s2 && s2.H) != null ? e2 : true;
  const r2 = s2 && s2.I || false;
  const l2 = s2 && s2.A || false;
  const i2 = {
    passive: c2,
    capture: r2
  };
  return bind(runEachAndClear, getDomTokensArray(n2).map((n3) => {
    const s3 = l2 ? (e3) => {
      removeEventListener(t2, n3, s3, r2);
      o2 && o2(e3);
    } : o2;
    t2 && t2.addEventListener(n3, s3, i2);
    return bind(removeEventListener, t2, n3, s3, r2);
  }));
};
var stopPropagation = (t2) => t2.stopPropagation();
var preventDefault = (t2) => t2.preventDefault();
var stopAndPrevent = (t2) => stopPropagation(t2) || preventDefault(t2);
var scrollElementTo = (t2, n2) => {
  const {
    x: o2,
    y: s2
  } = isNumber(n2) ? {
    x: n2,
    y: n2
  } : n2 || {};
  isNumber(o2) && (t2.scrollLeft = o2);
  isNumber(s2) && (t2.scrollTop = s2);
};
var getElementScroll = (t2) => ({
  x: t2.scrollLeft,
  y: t2.scrollTop
});
var getZeroScrollCoordinates = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
});
var sanitizeScrollCoordinates = (t2, n2) => {
  const {
    D: o2,
    M: s2
  } = t2;
  const {
    w: e2,
    h: l2
  } = n2;
  const sanitizeAxis = (t3, n3, o3) => {
    let s3 = r(t3) * o3;
    let e3 = r(n3) * o3;
    if (s3 === e3) {
      const o4 = c(t3);
      const r2 = c(n3);
      e3 = o4 > r2 ? 0 : e3;
      s3 = o4 < r2 ? 0 : s3;
    }
    s3 = s3 === e3 ? 0 : s3;
    return [s3 + 0, e3 + 0];
  };
  const [i2, a2] = sanitizeAxis(o2.x, s2.x, e2);
  const [u2, _2] = sanitizeAxis(o2.y, s2.y, l2);
  return {
    D: {
      x: i2,
      y: u2
    },
    M: {
      x: a2,
      y: _2
    }
  };
};
var isDefaultDirectionScrollCoordinates = ({
  D: t2,
  M: n2
}) => {
  const getAxis = (t3, n3) => t3 === 0 && t3 <= n3;
  return {
    x: getAxis(t2.x, n2.x),
    y: getAxis(t2.y, n2.y)
  };
};
var getScrollCoordinatesPercent = ({
  D: t2,
  M: n2
}, o2) => {
  const getAxis = (t3, n3, o3) => capNumber(0, 1, (t3 - o3) / (t3 - n3) || 0);
  return {
    x: getAxis(t2.x, n2.x, o2.x),
    y: getAxis(t2.y, n2.y, o2.y)
  };
};
var focusElement = (t2) => {
  if (t2 && t2.focus) {
    t2.focus({
      preventScroll: true
    });
  }
};
var manageListener = (t2, n2) => {
  each(createOrKeepArray(n2), t2);
};
var createEventListenerHub = (t2) => {
  const n2 = /* @__PURE__ */ new Map();
  const removeEvent = (t3, o2) => {
    if (t3) {
      const s2 = n2.get(t3);
      manageListener((t4) => {
        if (s2) {
          s2[t4 ? "delete" : "clear"](t4);
        }
      }, o2);
    } else {
      n2.forEach((t4) => {
        t4.clear();
      });
      n2.clear();
    }
  };
  const addEvent = (t3, o2) => {
    if (isString(t3)) {
      const s3 = n2.get(t3) || /* @__PURE__ */ new Set();
      n2.set(t3, s3);
      manageListener((t4) => {
        isFunction(t4) && s3.add(t4);
      }, o2);
      return bind(removeEvent, t3, o2);
    }
    if (isBoolean(o2) && o2) {
      removeEvent();
    }
    const s2 = keys(t3);
    const e2 = [];
    each(s2, (n3) => {
      const o3 = t3[n3];
      o3 && push(e2, addEvent(n3, o3));
    });
    return bind(runEachAndClear, e2);
  };
  const triggerEvent = (t3, o2) => {
    each(from(n2.get(t3)), (t4) => {
      if (o2 && !isEmptyArray(o2)) {
        t4.apply(0, o2);
      } else {
        t4();
      }
    });
  };
  addEvent(t2 || {});
  return [addEvent, removeEvent, triggerEvent];
};
var opsStringify = (t2) => JSON.stringify(t2, (t3, n2) => {
  if (isFunction(n2)) {
    throw 0;
  }
  return n2;
});
var getPropByPath = (t2, n2) => t2 ? `${n2}`.split(".").reduce((t3, n3) => t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0, t2) : void 0;
var M = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ["mouse", "touch", "pen"]
  }
};
var getOptionsDiff = (t2, n2) => {
  const o2 = {};
  const s2 = concat(keys(n2), keys(t2));
  each(s2, (s3) => {
    const e2 = t2[s3];
    const c2 = n2[s3];
    if (isObject(e2) && isObject(c2)) {
      assignDeep(o2[s3] = {}, getOptionsDiff(e2, c2));
      if (isEmptyObject(o2[s3])) {
        delete o2[s3];
      }
    } else if (hasOwnProperty(n2, s3) && c2 !== e2) {
      let t3 = true;
      if (isArray(e2) || isArray(c2)) {
        try {
          if (opsStringify(e2) === opsStringify(c2)) {
            t3 = false;
          }
        } catch (r2) {
        }
      }
      if (t3) {
        o2[s3] = c2;
      }
    }
  });
  return o2;
};
var createOptionCheck = (t2, n2, o2) => (s2) => [getPropByPath(t2, s2), o2 || getPropByPath(n2, s2) !== void 0];
var T = `data-overlayscrollbars`;
var k = "os-environment";
var R = `${k}-scrollbar-hidden`;
var V = `${T}-initialize`;
var L = "noClipping";
var U = `${T}-body`;
var P = T;
var N = "host";
var q = `${T}-viewport`;
var B = m;
var F = O;
var j = "arrange";
var X = "measuring";
var Y = "scrolling";
var W = "scrollbarHidden";
var J = "noContent";
var G = `${T}-padding`;
var K = `${T}-content`;
var Q = "os-size-observer";
var Z = `${Q}-appear`;
var tt = `${Q}-listener`;
var nt = `${tt}-scroll`;
var ot = `${tt}-item`;
var st = `${ot}-final`;
var et = "os-trinsic-observer";
var ct = "os-theme-none";
var rt = "os-scrollbar";
var lt = `${rt}-rtl`;
var it = `${rt}-horizontal`;
var at = `${rt}-vertical`;
var ut = `${rt}-track`;
var _t = `${rt}-handle`;
var dt = `${rt}-visible`;
var ft = `${rt}-cornerless`;
var vt = `${rt}-interaction`;
var pt = `${rt}-unusable`;
var ht = `${rt}-auto-hide`;
var gt = `${ht}-hidden`;
var bt = `${rt}-wheel`;
var wt = `${ut}-interactive`;
var yt = `${_t}-interactive`;
var St;
var getNonce = () => St;
var setNonce = (t2) => {
  St = t2;
};
var mt;
var createEnvironment = () => {
  const getNativeScrollbarSize = (t3, n2, o3) => {
    appendChildren(document.body, t3);
    appendChildren(document.body, t3);
    const s3 = A(t3);
    const e3 = I(t3);
    const c3 = getFractionalSize(n2);
    o3 && removeElements(t3);
    return {
      x: e3.h - s3.h + c3.h,
      y: e3.w - s3.w + c3.w
    };
  };
  const getNativeScrollbarsHiding = (t3) => {
    let n2 = false;
    const o3 = addClass(t3, R);
    try {
      n2 = getStyles(t3, "scrollbar-width") === "none" || getStyles(t3, "display", "::-webkit-scrollbar") === "none";
    } catch (s3) {
    }
    o3();
    return n2;
  };
  const t2 = `.${k}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${k} div{width:200%;height:200%;margin:10px 0}.${R}{scrollbar-width:none!important}.${R}::-webkit-scrollbar,.${R}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`;
  const o2 = createDOM(`<div class="${k}"><div></div><style>${t2}</style></div>`);
  const s2 = o2[0];
  const e2 = s2.firstChild;
  const c2 = s2.lastChild;
  const r2 = getNonce();
  if (r2) {
    c2.nonce = r2;
  }
  const [l2, , i2] = createEventListenerHub();
  const [a2, u2] = createCache({
    o: getNativeScrollbarSize(s2, e2),
    i: equalXY
  }, bind(getNativeScrollbarSize, s2, e2, true));
  const [_2] = u2();
  const d2 = getNativeScrollbarsHiding(s2);
  const f2 = {
    x: _2.x === 0,
    y: _2.y === 0
  };
  const p2 = {
    elements: {
      host: null,
      padding: !d2,
      viewport: (t3) => d2 && isBodyElement(t3) && t3,
      content: false
    },
    scrollbars: {
      slot: true
    },
    cancel: {
      nativeScrollbarsOverlaid: false,
      body: null
    }
  };
  const h2 = assignDeep({}, M);
  const g2 = bind(assignDeep, {}, h2);
  const b2 = bind(assignDeep, {}, p2);
  const w2 = {
    T: _2,
    k: f2,
    R: d2,
    V: !!v,
    L: bind(l2, "r"),
    U: b2,
    P: (t3) => assignDeep(p2, t3) && b2(),
    N: g2,
    q: (t3) => assignDeep(h2, t3) && g2(),
    B: assignDeep({}, p2),
    F: assignDeep({}, h2)
  };
  removeAttrs(s2, "style");
  removeElements(s2);
  addEventListener(n, "resize", () => {
    i2("r", []);
  });
  if (isFunction(n.matchMedia) && !d2 && (!f2.x || !f2.y)) {
    const addZoomListener = (t3) => {
      const o3 = n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);
      addEventListener(o3, "change", () => {
        t3();
        addZoomListener(t3);
      }, {
        A: true
      });
    };
    addZoomListener(() => {
      const [t3, n2] = a2();
      assignDeep(w2.T, t3);
      i2("r", [n2]);
    });
  }
  return w2;
};
var getEnvironment = () => {
  if (!mt) {
    mt = createEnvironment();
  }
  return mt;
};
var resolveInitialization = (t2, n2) => isFunction(n2) ? n2.apply(0, t2) : n2;
var staticInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return c2 || n2.apply(0, t2);
};
var dynamicInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return !!c2 && (isHTMLElement(c2) ? c2 : n2.apply(0, t2));
};
var cancelInitialization = (t2, n2) => {
  const {
    nativeScrollbarsOverlaid: o2,
    body: s2
  } = n2 || {};
  const {
    k: e2,
    R: c2,
    U: r2
  } = getEnvironment();
  const {
    nativeScrollbarsOverlaid: l2,
    body: i2
  } = r2().cancel;
  const a2 = o2 != null ? o2 : l2;
  const u2 = isUndefined(s2) ? i2 : s2;
  const _2 = (e2.x || e2.y) && a2;
  const d2 = t2 && (isNull(u2) ? !c2 : u2);
  return !!_2 || !!d2;
};
var Ot = /* @__PURE__ */ new WeakMap();
var addInstance = (t2, n2) => {
  Ot.set(t2, n2);
};
var removeInstance = (t2) => {
  Ot.delete(t2);
};
var getInstance = (t2) => Ot.get(t2);
var createEventContentChange = (t2, n2, o2) => {
  let s2 = false;
  const e2 = o2 ? /* @__PURE__ */ new WeakMap() : false;
  const destroy = () => {
    s2 = true;
  };
  const updateElements = (c2) => {
    if (e2 && o2) {
      const r2 = o2.map((n3) => {
        const [o3, s3] = n3 || [];
        const e3 = s3 && o3 ? (c2 || find)(o3, t2) : [];
        return [e3, s3];
      });
      each(r2, (o3) => each(o3[0], (c3) => {
        const r3 = o3[1];
        const l2 = e2.get(c3) || [];
        const i2 = t2.contains(c3);
        if (i2 && r3) {
          const t3 = addEventListener(c3, r3, (o4) => {
            if (s2) {
              t3();
              e2.delete(c3);
            } else {
              n2(o4);
            }
          });
          e2.set(c3, push(l2, t3));
        } else {
          runEachAndClear(l2);
          e2.delete(c3);
        }
      }));
    }
  };
  updateElements();
  return [destroy, updateElements];
};
var createDOMObserver = (t2, n2, o2, s2) => {
  let e2 = false;
  const {
    j: c2,
    X: r2,
    Y: l2,
    W: i2,
    J: a2,
    G: u2
  } = s2 || {};
  const d2 = debounce(() => e2 && o2(true), {
    _: 33,
    v: 99
  });
  const [f2, v2] = createEventContentChange(t2, d2, l2);
  const p2 = c2 || [];
  const h2 = r2 || [];
  const g2 = concat(p2, h2);
  const observerCallback = (e3, c3) => {
    if (!isEmptyArray(c3)) {
      const r3 = a2 || noop;
      const l3 = u2 || noop;
      const _2 = [];
      const d3 = [];
      let f3 = false;
      let p3 = false;
      each(c3, (o3) => {
        const {
          attributeName: e4,
          target: c4,
          type: a3,
          oldValue: u3,
          addedNodes: v3,
          removedNodes: g3
        } = o3;
        const b3 = a3 === "attributes";
        const w2 = a3 === "childList";
        const y2 = t2 === c4;
        const S2 = b3 && e4;
        const m2 = S2 && getAttr(c4, e4 || "");
        const O2 = isString(m2) ? m2 : null;
        const $2 = S2 && u3 !== O2;
        const C2 = inArray(h2, e4) && $2;
        if (n2 && (w2 || !y2)) {
          const n3 = b3 && $2;
          const a4 = n3 && i2 && is(c4, i2);
          const d4 = a4 ? !r3(c4, e4, u3, O2) : !b3 || n3;
          const f4 = d4 && !l3(o3, !!a4, t2, s2);
          each(v3, (t3) => push(_2, t3));
          each(g3, (t3) => push(_2, t3));
          p3 = p3 || f4;
        }
        if (!n2 && y2 && $2 && !r3(c4, e4, u3, O2)) {
          push(d3, e4);
          f3 = f3 || C2;
        }
      });
      v2((t3) => deduplicateArray(_2).reduce((n3, o3) => {
        push(n3, find(t3, o3));
        return is(o3, t3) ? push(n3, o3) : n3;
      }, []));
      if (n2) {
        !e3 && p3 && o2(false);
        return [false];
      }
      if (!isEmptyArray(d3) || f3) {
        const t3 = [deduplicateArray(d3), f3];
        !e3 && o2.apply(0, t3);
        return t3;
      }
    }
  };
  const b2 = new _(bind(observerCallback, false));
  return [() => {
    b2.observe(t2, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: g2,
      subtree: n2,
      childList: n2,
      characterData: n2
    });
    e2 = true;
    return () => {
      if (e2) {
        f2();
        b2.disconnect();
        e2 = false;
      }
    };
  }, () => {
    if (e2) {
      d2.m();
      return observerCallback(true, b2.takeRecords());
    }
  }];
};
var $t = {};
var Ct = {};
var addPlugins = (t2) => {
  each(t2, (t3) => each(t3, (n2, o2) => {
    $t[o2] = t3[o2];
  }));
};
var registerPluginModuleInstances = (t2, n2, o2) => keys(t2).map((s2) => {
  const {
    static: e2,
    instance: c2
  } = t2[s2];
  const [r2, l2, i2] = o2 || [];
  const a2 = o2 ? c2 : e2;
  if (a2) {
    const t3 = o2 ? a2(r2, l2, n2) : a2(n2);
    return (i2 || Ct)[s2] = t3;
  }
});
var getStaticPluginModuleInstance = (t2) => Ct[t2];
var xt = "__osOptionsValidationPlugin";
var Ht = "__osSizeObserverPlugin";
var getShowNativeOverlaidScrollbars = (t2, n2) => {
  const {
    k: o2
  } = n2;
  const [s2, e2] = t2("showNativeOverlaidScrollbars");
  return [s2 && o2.x && o2.y, e2];
};
var overflowIsVisible = (t2) => t2.indexOf(x) === 0;
var createViewportOverflowState = (t2, n2) => {
  const getAxisOverflowStyle = (t3, n3, o3, s2) => {
    const e2 = t3 === x ? H : t3.replace(`${x}-`, "");
    const c2 = overflowIsVisible(t3);
    const r2 = overflowIsVisible(o3);
    if (!n3 && !s2) {
      return H;
    }
    if (c2 && r2) {
      return x;
    }
    if (c2) {
      const t4 = n3 ? x : H;
      return n3 && s2 ? e2 : t4;
    }
    const l2 = r2 && s2 ? x : H;
    return n3 ? e2 : l2;
  };
  const o2 = {
    x: getAxisOverflowStyle(n2.x, t2.x, n2.y, t2.y),
    y: getAxisOverflowStyle(n2.y, t2.y, n2.x, t2.x)
  };
  return {
    K: o2,
    Z: {
      x: o2.x === E,
      y: o2.y === E
    }
  };
};
var zt = "__osScrollbarsHidingPlugin";
var At = "__osClickScrollPlugin";
var createSizeObserver = (t2, n2, o2) => {
  const {
    dt: s2
  } = o2 || {};
  const e2 = getStaticPluginModuleInstance(Ht);
  const [c2] = createCache({
    o: false,
    u: true
  });
  return () => {
    const o3 = [];
    const r2 = createDOM(`<div class="${Q}"><div class="${tt}"></div></div>`);
    const l2 = r2[0];
    const i2 = l2.firstChild;
    const onSizeChangedCallbackProxy = (t3) => {
      const o4 = t3 instanceof ResizeObserverEntry;
      let s3 = false;
      let e3 = false;
      if (o4) {
        const [n3, , o5] = c2(t3.contentRect);
        const r3 = domRectHasDimensions(n3);
        e3 = domRectAppeared(n3, o5);
        s3 = !e3 && !r3;
      } else {
        e3 = t3 === true;
      }
      if (!s3) {
        n2({
          ft: true,
          dt: e3
        });
      }
    };
    if (f) {
      const t3 = new f((t4) => onSizeChangedCallbackProxy(t4.pop()));
      t3.observe(i2);
      push(o3, () => {
        t3.disconnect();
      });
    } else if (e2) {
      const [t3, n3] = e2(i2, onSizeChangedCallbackProxy, s2);
      push(o3, concat([addClass(l2, Z), addEventListener(l2, "animationstart", t3)], n3));
    } else {
      return noop;
    }
    return bind(runEachAndClear, push(o3, appendChildren(t2, l2)));
  };
};
var createTrinsicObserver = (t2, n2) => {
  let o2;
  const isHeightIntrinsic = (t3) => t3.h === 0 || t3.isIntersecting || t3.intersectionRatio > 0;
  const s2 = createDiv(et);
  const [e2] = createCache({
    o: false
  });
  const triggerOnTrinsicChangedCallback = (t3, o3) => {
    if (t3) {
      const s3 = e2(isHeightIntrinsic(t3));
      const [, c2] = s3;
      return c2 && !o3 && n2(s3) && [s3];
    }
  };
  const intersectionObserverCallback = (t3, n3) => triggerOnTrinsicChangedCallback(n3.pop(), t3);
  return [() => {
    const n3 = [];
    if (d) {
      o2 = new d(bind(intersectionObserverCallback, false), {
        root: t2
      });
      o2.observe(s2);
      push(n3, () => {
        o2.disconnect();
      });
    } else {
      const onSizeChanged = () => {
        const t3 = I(s2);
        triggerOnTrinsicChangedCallback(t3);
      };
      push(n3, createSizeObserver(s2, onSizeChanged)());
      onSizeChanged();
    }
    return bind(runEachAndClear, push(n3, appendChildren(t2, s2)));
  }, () => o2 && intersectionObserverCallback(true, o2.takeRecords())];
};
var createObserversSetup = (t2, n2, o2, s2) => {
  let e2;
  let c2;
  let r2;
  let l2;
  let i2;
  let a2;
  const u2 = `[${P}]`;
  const _2 = `[${q}]`;
  const d2 = ["id", "class", "style", "open", "wrap", "cols", "rows"];
  const {
    vt: v2,
    ht: p2,
    ot: h2,
    gt: g2,
    bt: b2,
    nt: w2,
    wt: y2,
    yt: S2,
    St: m2,
    Ot: O2
  } = t2;
  const getDirectionIsRTL = (t3) => getStyles(t3, "direction") === "rtl";
  const $2 = {
    $t: false,
    ct: getDirectionIsRTL(v2)
  };
  const C2 = getEnvironment();
  const x2 = getStaticPluginModuleInstance(zt);
  const [H2] = createCache({
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const s3 = x2 && x2.tt(t2, n2, $2, C2, o2).ut;
    const e3 = y2 && w2;
    const c3 = !e3 && hasAttrClass(p2, P, L);
    const r3 = !w2 && S2(j);
    const l3 = r3 && getElementScroll(g2);
    const i3 = l3 && O2();
    const a3 = m2(X, c3);
    const u3 = r3 && s3 && s3()[0];
    const _3 = D(h2);
    const d3 = getFractionalSize(h2);
    u3 && u3();
    scrollElementTo(g2, l3);
    i3 && i3();
    c3 && a3();
    return {
      w: _3.w + d3.w,
      h: _3.h + d3.h
    };
  });
  const E2 = debounce(s2, {
    _: () => e2,
    v: () => c2,
    S(t3, n3) {
      const [o3] = t3;
      const [s3] = n3;
      return [concat(keys(o3), keys(s3)).reduce((t4, n4) => {
        t4[n4] = o3[n4] || s3[n4];
        return t4;
      }, {})];
    }
  });
  const setDirection = (t3) => {
    const n3 = getDirectionIsRTL(v2);
    assignDeep(t3, {
      Ct: a2 !== n3
    });
    assignDeep($2, {
      ct: n3
    });
    a2 = n3;
  };
  const onTrinsicChanged = (t3, n3) => {
    const [o3, e3] = t3;
    const c3 = {
      xt: e3
    };
    assignDeep($2, {
      $t: o3
    });
    !n3 && s2(c3);
    return c3;
  };
  const onSizeChanged = ({
    ft: t3,
    dt: n3
  }) => {
    const o3 = t3 && !n3;
    const e3 = !o3 && C2.R ? E2 : s2;
    const c3 = {
      ft: t3 || n3,
      dt: n3
    };
    setDirection(c3);
    e3(c3);
  };
  const onContentMutation = (t3, n3) => {
    const [, o3] = H2();
    const e3 = {
      Ht: o3
    };
    setDirection(e3);
    const c3 = t3 ? s2 : E2;
    o3 && !n3 && c3(e3);
    return e3;
  };
  const onHostMutation = (t3, n3, o3) => {
    const s3 = {
      Et: n3
    };
    setDirection(s3);
    if (n3 && !o3) {
      E2(s3);
    }
    return s3;
  };
  const [z2, I2] = b2 ? createTrinsicObserver(p2, onTrinsicChanged) : [];
  const A2 = !w2 && createSizeObserver(p2, onSizeChanged, {
    dt: true
  });
  const [M2, T2] = createDOMObserver(p2, false, onHostMutation, {
    X: d2,
    j: d2
  });
  const k2 = w2 && f && new f((t3) => {
    const n3 = t3[t3.length - 1].contentRect;
    onSizeChanged({
      ft: true,
      dt: domRectAppeared(n3, i2)
    });
    i2 = n3;
  });
  const R2 = debounce(() => {
    const [, t3] = H2();
    s2({
      Ht: t3
    });
  }, {
    _: 222,
    p: true
  });
  return [() => {
    k2 && k2.observe(p2);
    const t3 = A2 && A2();
    const n3 = z2 && z2();
    const o3 = M2();
    const s3 = C2.L((t4) => {
      if (t4) {
        E2({
          zt: t4
        });
      } else {
        R2();
      }
    });
    return () => {
      k2 && k2.disconnect();
      t3 && t3();
      n3 && n3();
      l2 && l2();
      o3();
      s3();
    };
  }, ({
    It: t3,
    At: n3,
    Dt: o3
  }) => {
    const s3 = {};
    const [i3] = t3("update.ignoreMutation");
    const [a3, f2] = t3("update.attributes");
    const [v3, p3] = t3("update.elementEvents");
    const [g3, y3] = t3("update.debounce");
    const S3 = p3 || f2;
    const m3 = n3 || o3;
    const ignoreMutationFromOptions = (t4) => isFunction(i3) && i3(t4);
    if (S3) {
      r2 && r2();
      l2 && l2();
      const [t4, n4] = createDOMObserver(b2 || h2, true, onContentMutation, {
        j: concat(d2, a3 || []),
        Y: v3,
        W: u2,
        G: (t5, n5) => {
          const {
            target: o4,
            attributeName: s4
          } = t5;
          const e3 = !n5 && s4 && !w2 ? liesBetween(o4, u2, _2) : false;
          return e3 || !!closest(o4, `.${rt}`) || !!ignoreMutationFromOptions(t5);
        }
      });
      l2 = t4();
      r2 = n4;
    }
    if (y3) {
      E2.m();
      if (isArray(g3)) {
        const t4 = g3[0];
        const n4 = g3[1];
        e2 = isNumber(t4) && t4;
        c2 = isNumber(n4) && n4;
      } else if (isNumber(g3)) {
        e2 = g3;
        c2 = false;
      } else {
        e2 = false;
        c2 = false;
      }
    }
    if (m3) {
      const t4 = T2();
      const n4 = I2 && I2();
      const o4 = r2 && r2();
      t4 && assignDeep(s3, onHostMutation(t4[0], t4[1], m3));
      n4 && assignDeep(s3, onTrinsicChanged(n4[0], m3));
      o4 && assignDeep(s3, onContentMutation(o4[0], m3));
    }
    setDirection(s3);
    return s3;
  }, $2];
};
var createScrollbarsSetupElements = (t2, n2, o2, s2) => {
  const e2 = "--os-viewport-percent";
  const c2 = "--os-scroll-percent";
  const r2 = "--os-scroll-direction";
  const {
    U: l2
  } = getEnvironment();
  const {
    scrollbars: i2
  } = l2();
  const {
    slot: a2
  } = i2;
  const {
    vt: u2,
    ht: _2,
    ot: d2,
    Mt: f2,
    gt: p2,
    wt: h2,
    nt: g2
  } = n2;
  const {
    scrollbars: b2
  } = f2 ? {} : t2;
  const {
    slot: w2
  } = b2 || {};
  const y2 = [];
  const S2 = [];
  const m2 = [];
  const O2 = dynamicInitializationElement([u2, _2, d2], () => g2 && h2 ? u2 : _2, a2, w2);
  const initScrollTimeline = (t3) => {
    if (v) {
      const n3 = new v({
        source: p2,
        axis: t3
      });
      const _addScrollPercentAnimation = (t4) => {
        const o3 = t4.Tt.animate({
          clear: ["left"],
          [c2]: [0, 1]
        }, {
          timeline: n3
        });
        return () => o3.cancel();
      };
      return {
        kt: _addScrollPercentAnimation
      };
    }
  };
  const $2 = {
    x: initScrollTimeline("x"),
    y: initScrollTimeline("y")
  };
  const getViewportPercent = () => {
    const {
      Rt: t3,
      Vt: n3
    } = o2;
    const getAxisValue = (t4, n4) => capNumber(0, 1, t4 / (t4 + n4) || 0);
    return {
      x: getAxisValue(n3.x, t3.x),
      y: getAxisValue(n3.y, t3.y)
    };
  };
  const scrollbarStructureAddRemoveClass = (t3, n3, o3) => {
    const s3 = o3 ? addClass : removeClass;
    each(t3, (t4) => {
      s3(t4.Tt, n3);
    });
  };
  const scrollbarStyle = (t3, n3) => {
    each(t3, (t4) => {
      const [o3, s3] = n3(t4);
      setStyles(o3, s3);
    });
  };
  const scrollbarsAddRemoveClass = (t3, n3, o3) => {
    const s3 = isBoolean(o3);
    const e3 = s3 ? o3 : true;
    const c3 = s3 ? !o3 : true;
    e3 && scrollbarStructureAddRemoveClass(S2, t3, n3);
    c3 && scrollbarStructureAddRemoveClass(m2, t3, n3);
  };
  const refreshScrollbarsHandleLength = () => {
    const t3 = getViewportPercent();
    const createScrollbarStyleFn = (t4) => (n3) => [n3.Tt, {
      [e2]: roundCssNumber(t4) + ""
    }];
    scrollbarStyle(S2, createScrollbarStyleFn(t3.x));
    scrollbarStyle(m2, createScrollbarStyleFn(t3.y));
  };
  const refreshScrollbarsHandleOffset = () => {
    if (!v) {
      const {
        Lt: t3
      } = o2;
      const n3 = getScrollCoordinatesPercent(t3, getElementScroll(p2));
      const createScrollbarStyleFn = (t4) => (n4) => [n4.Tt, {
        [c2]: roundCssNumber(t4) + ""
      }];
      scrollbarStyle(S2, createScrollbarStyleFn(n3.x));
      scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
    }
  };
  const refreshScrollbarsScrollCoordinates = () => {
    const {
      Lt: t3
    } = o2;
    const n3 = isDefaultDirectionScrollCoordinates(t3);
    const createScrollbarStyleFn = (t4) => (n4) => [n4.Tt, {
      [r2]: t4 ? "0" : "1"
    }];
    scrollbarStyle(S2, createScrollbarStyleFn(n3.x));
    scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (g2 && !h2) {
      const {
        Rt: t3,
        Lt: n3
      } = o2;
      const s3 = isDefaultDirectionScrollCoordinates(n3);
      const e3 = getScrollCoordinatesPercent(n3, getElementScroll(p2));
      const styleScrollbarPosition = (n4) => {
        const {
          Tt: o3
        } = n4;
        const c3 = parent(o3) === d2 && o3;
        const getTranslateValue = (t4, n5, o4) => {
          const s4 = n5 * t4;
          return numberToCssPx(o4 ? s4 : -s4);
        };
        return [c3, c3 && {
          transform: getTrasformTranslateValue({
            x: getTranslateValue(e3.x, t3.x, s3.x),
            y: getTranslateValue(e3.y, t3.y, s3.y)
          })
        }];
      };
      scrollbarStyle(S2, styleScrollbarPosition);
      scrollbarStyle(m2, styleScrollbarPosition);
    }
  };
  const generateScrollbarDOM = (t3) => {
    const n3 = t3 ? "x" : "y";
    const o3 = t3 ? it : at;
    const e3 = createDiv(`${rt} ${o3}`);
    const c3 = createDiv(ut);
    const r3 = createDiv(_t);
    const l3 = {
      Tt: e3,
      Ut: c3,
      Pt: r3
    };
    const i3 = $2[n3];
    push(t3 ? S2 : m2, l3);
    push(y2, [appendChildren(e3, c3), appendChildren(c3, r3), bind(removeElements, e3), i3 && i3.kt(l3), s2(l3, scrollbarsAddRemoveClass, t3)]);
    return l3;
  };
  const C2 = bind(generateScrollbarDOM, true);
  const x2 = bind(generateScrollbarDOM, false);
  const appendElements = () => {
    appendChildren(O2, S2[0].Tt);
    appendChildren(O2, m2[0].Tt);
    return bind(runEachAndClear, y2);
  };
  C2();
  x2();
  return [{
    Nt: refreshScrollbarsHandleLength,
    qt: refreshScrollbarsHandleOffset,
    Bt: refreshScrollbarsScrollCoordinates,
    Ft: refreshScrollbarsScrollbarOffset,
    jt: scrollbarsAddRemoveClass,
    Xt: {
      Yt: S2,
      Wt: C2,
      Jt: bind(scrollbarStyle, S2)
    },
    Gt: {
      Yt: m2,
      Wt: x2,
      Jt: bind(scrollbarStyle, m2)
    }
  }, appendElements];
};
var createScrollbarsSetupEvents = (t2, n2, o2, s2) => (r2, l2, i2) => {
  const {
    ht: u2,
    ot: _2,
    nt: d2,
    gt: f2,
    Kt: v2,
    Ot: p2
  } = n2;
  const {
    Tt: h2,
    Ut: g2,
    Pt: b2
  } = r2;
  const [w2, y2] = selfClearTimeout(333);
  const [S2, m2] = selfClearTimeout(444);
  const scrollOffsetElementScrollBy = (t3) => {
    isFunction(f2.scrollBy) && f2.scrollBy({
      behavior: "smooth",
      left: t3.x,
      top: t3.y
    });
  };
  const createInteractiveScrollEvents = () => {
    const n3 = "pointerup pointercancel lostpointercapture";
    const s3 = `client${i2 ? "X" : "Y"}`;
    const r3 = i2 ? $ : C;
    const l3 = i2 ? "left" : "top";
    const a2 = i2 ? "w" : "h";
    const u3 = i2 ? "x" : "y";
    const createRelativeHandleMove = (t3, n4) => (s4) => {
      const {
        Rt: e2
      } = o2;
      const c2 = I(g2)[a2] - I(b2)[a2];
      const r4 = n4 * s4 / c2;
      const l4 = r4 * e2[u3];
      scrollElementTo(f2, {
        [u3]: t3 + l4
      });
    };
    const _3 = [];
    return addEventListener(g2, "pointerdown", (o3) => {
      const i3 = closest(o3.target, `.${_t}`) === b2;
      const d3 = i3 ? b2 : g2;
      const h3 = t2.scrollbars;
      const w3 = h3[i3 ? "dragScroll" : "clickScroll"];
      const {
        button: y3,
        isPrimary: O3,
        pointerType: $2
      } = o3;
      const {
        pointers: C2
      } = h3;
      const x2 = y3 === 0 && O3 && w3 && (C2 || []).includes($2);
      if (x2) {
        runEachAndClear(_3);
        m2();
        const t3 = !i3 && (o3.shiftKey || w3 === "instant");
        const h4 = bind(getBoundingClientRect, b2);
        const y4 = bind(getBoundingClientRect, g2);
        const getHandleOffset = (t4, n4) => (t4 || h4())[l3] - (n4 || y4())[l3];
        const O4 = e(getBoundingClientRect(f2)[r3]) / I(f2)[a2] || 1;
        const $3 = createRelativeHandleMove(getElementScroll(f2)[u3], 1 / O4);
        const C3 = o3[s3];
        const x3 = h4();
        const H2 = y4();
        const E2 = x3[r3];
        const z2 = getHandleOffset(x3, H2) + E2 / 2;
        const A2 = C3 - H2[l3];
        const D2 = i3 ? 0 : A2 - z2;
        const releasePointerCapture = (t4) => {
          runEachAndClear(k2);
          d3.releasePointerCapture(t4.pointerId);
        };
        const M2 = i3 || t3;
        const T2 = p2();
        const k2 = [addEventListener(v2, n3, releasePointerCapture), addEventListener(v2, "selectstart", (t4) => preventDefault(t4), {
          H: false
        }), addEventListener(g2, n3, releasePointerCapture), M2 && addEventListener(g2, "pointermove", (t4) => $3(D2 + (t4[s3] - C3))), M2 && (() => {
          const t4 = getElementScroll(f2);
          T2();
          const n4 = getElementScroll(f2);
          const o4 = {
            x: n4.x - t4.x,
            y: n4.y - t4.y
          };
          if (c(o4.x) > 3 || c(o4.y) > 3) {
            p2();
            scrollElementTo(f2, t4);
            scrollOffsetElementScrollBy(o4);
            S2(T2);
          }
        })];
        d3.setPointerCapture(o3.pointerId);
        if (t3) {
          $3(D2);
        } else if (!i3) {
          const t4 = getStaticPluginModuleInstance(At);
          if (t4) {
            const n4 = t4($3, D2, E2, (t5) => {
              if (t5) {
                T2();
              } else {
                push(k2, T2);
              }
            });
            push(k2, n4);
            push(_3, bind(n4, true));
          }
        }
      }
    });
  };
  let O2 = true;
  return bind(runEachAndClear, [addEventListener(b2, "pointermove pointerleave", s2), addEventListener(h2, "pointerenter", () => {
    l2(vt, true);
  }), addEventListener(h2, "pointerleave pointercancel", () => {
    l2(vt, false);
  }), !d2 && addEventListener(h2, "mousedown", () => {
    const t3 = getFocusedElement();
    if (hasAttr(t3, q) || hasAttr(t3, P) || t3 === document.body) {
      a(bind(focusElement, _2), 25);
    }
  }), addEventListener(h2, "wheel", (t3) => {
    const {
      deltaX: n3,
      deltaY: o3,
      deltaMode: s3
    } = t3;
    if (O2 && s3 === 0 && parent(h2) === u2) {
      scrollOffsetElementScrollBy({
        x: n3,
        y: o3
      });
    }
    O2 = false;
    l2(bt, true);
    w2(() => {
      O2 = true;
      l2(bt);
    });
    preventDefault(t3);
  }, {
    H: false,
    I: true
  }), addEventListener(h2, "pointerdown", bind(addEventListener, v2, "click", stopAndPrevent, {
    A: true,
    I: true,
    H: false
  }), {
    I: true
  }), createInteractiveScrollEvents(), y2, m2]);
};
var createScrollbarsSetup = (t2, n2, o2, s2, e2, c2) => {
  let r2;
  let l2;
  let i2;
  let a2;
  let u2;
  let _2 = noop;
  let d2 = 0;
  const isHoverablePointerType = (t3) => t3.pointerType === "mouse";
  const [f2, v2] = selfClearTimeout();
  const [p2, h2] = selfClearTimeout(100);
  const [g2, b2] = selfClearTimeout(100);
  const [w2, y2] = selfClearTimeout(() => d2);
  const [S2, m2] = createScrollbarsSetupElements(t2, e2, s2, createScrollbarsSetupEvents(n2, e2, s2, (t3) => isHoverablePointerType(t3) && manageScrollbarsAutoHideInstantInteraction()));
  const {
    ht: O2,
    Qt: $2,
    wt: C2
  } = e2;
  const {
    jt: H2,
    Nt: z2,
    qt: I2,
    Bt: A2,
    Ft: D2
  } = S2;
  const manageScrollbarsAutoHide = (t3, n3) => {
    y2();
    if (t3) {
      H2(gt);
    } else {
      const t4 = bind(H2, gt, true);
      if (d2 > 0 && !n3) {
        w2(t4);
      } else {
        t4();
      }
    }
  };
  const manageScrollbarsAutoHideInstantInteraction = () => {
    if (i2 ? !r2 : !a2) {
      manageScrollbarsAutoHide(true);
      p2(() => {
        manageScrollbarsAutoHide(false);
      });
    }
  };
  const manageAutoHideSuspension = (t3) => {
    H2(ht, t3, true);
    H2(ht, t3, false);
  };
  const onHostMouseEnter = (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = i2;
      i2 && manageScrollbarsAutoHide(true);
    }
  };
  const M2 = [y2, h2, b2, v2, () => _2(), addEventListener(O2, "pointerover", onHostMouseEnter, {
    A: true
  }), addEventListener(O2, "pointerenter", onHostMouseEnter), addEventListener(O2, "pointerleave", (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = false;
      i2 && manageScrollbarsAutoHide(false);
    }
  }), addEventListener(O2, "pointermove", (t3) => {
    isHoverablePointerType(t3) && l2 && manageScrollbarsAutoHideInstantInteraction();
  }), addEventListener($2, "scroll", (t3) => {
    f2(() => {
      I2();
      manageScrollbarsAutoHideInstantInteraction();
    });
    c2(t3);
    D2();
  })];
  return [() => bind(runEachAndClear, push(M2, m2())), ({
    It: t3,
    Dt: n3,
    Zt: e3,
    tn: c3
  }) => {
    const {
      nn: r3,
      sn: f3,
      en: v3,
      cn: p3
    } = c3 || {};
    const {
      Ct: h3,
      dt: b3
    } = e3 || {};
    const {
      ct: w3
    } = o2;
    const {
      k: y3
    } = getEnvironment();
    const {
      K: S3,
      rn: m3
    } = s2;
    const [O3, M3] = t3("showNativeOverlaidScrollbars");
    const [T2, k2] = t3("scrollbars.theme");
    const [R2, V2] = t3("scrollbars.visibility");
    const [L2, U2] = t3("scrollbars.autoHide");
    const [P2, N2] = t3("scrollbars.autoHideSuspend");
    const [q2] = t3("scrollbars.autoHideDelay");
    const [B2, F2] = t3("scrollbars.dragScroll");
    const [j2, X2] = t3("scrollbars.clickScroll");
    const [Y2, W2] = t3("overflow");
    const J2 = b3 && !n3;
    const G2 = m3.x || m3.y;
    const K2 = r3 || f3 || p3 || h3 || n3;
    const Q2 = v3 || V2 || W2;
    const Z2 = O3 && y3.x && y3.y;
    const setScrollbarVisibility = (t4, n4, o3) => {
      const s3 = t4.includes(E) && (R2 === x || R2 === "auto" && n4 === E);
      H2(dt, s3, o3);
      return s3;
    };
    d2 = q2;
    if (J2) {
      if (P2 && G2) {
        manageAutoHideSuspension(false);
        _2();
        g2(() => {
          _2 = addEventListener($2, "scroll", bind(manageAutoHideSuspension, true), {
            A: true
          });
        });
      } else {
        manageAutoHideSuspension(true);
      }
    }
    if (M3) {
      H2(ct, Z2);
    }
    if (k2) {
      H2(u2);
      H2(T2, true);
      u2 = T2;
    }
    if (N2 && !P2) {
      manageAutoHideSuspension(true);
    }
    if (U2) {
      l2 = L2 === "move";
      i2 = L2 === "leave";
      a2 = L2 === "never";
      manageScrollbarsAutoHide(a2, true);
    }
    if (F2) {
      H2(yt, B2);
    }
    if (X2) {
      H2(wt, !!j2);
    }
    if (Q2) {
      const t4 = setScrollbarVisibility(Y2.x, S3.x, true);
      const n4 = setScrollbarVisibility(Y2.y, S3.y, false);
      const o3 = t4 && n4;
      H2(ft, !o3);
    }
    if (K2) {
      I2();
      z2();
      D2();
      p3 && A2();
      H2(pt, !m3.x, true);
      H2(pt, !m3.y, false);
      H2(lt, w3 && !C2);
    }
  }, {}, S2];
};
var createStructureSetupElements = (t2) => {
  const o2 = getEnvironment();
  const {
    U: s2,
    R: e2
  } = o2;
  const {
    elements: c2
  } = s2();
  const {
    padding: r2,
    viewport: l2,
    content: i2
  } = c2;
  const a2 = isHTMLElement(t2);
  const u2 = a2 ? {} : t2;
  const {
    elements: _2
  } = u2;
  const {
    padding: d2,
    viewport: f2,
    content: v2
  } = _2 || {};
  const p2 = a2 ? t2 : u2.target;
  const h2 = isBodyElement(p2);
  const g2 = p2.ownerDocument;
  const b2 = g2.documentElement;
  const getDocumentWindow = () => g2.defaultView || n;
  const w2 = bind(staticInitializationElement, [p2]);
  const y2 = bind(dynamicInitializationElement, [p2]);
  const S2 = bind(createDiv, "");
  const $2 = bind(w2, S2, l2);
  const C2 = bind(y2, S2, i2);
  const elementHasOverflow = (t3) => {
    const n2 = I(t3);
    const o3 = D(t3);
    const s3 = getStyles(t3, m);
    const e3 = getStyles(t3, O);
    return o3.w - n2.w > 0 && !overflowIsVisible(s3) || o3.h - n2.h > 0 && !overflowIsVisible(e3);
  };
  const x2 = $2(f2);
  const H2 = x2 === p2;
  const E2 = H2 && h2;
  const z2 = !H2 && C2(v2);
  const A2 = !H2 && x2 === z2;
  const M2 = E2 ? b2 : x2;
  const T2 = E2 ? M2 : p2;
  const k2 = !H2 && y2(S2, r2, d2);
  const R2 = !A2 && z2;
  const L2 = [R2, M2, k2, T2].map((t3) => isHTMLElement(t3) && !parent(t3) && t3);
  const elementIsGenerated = (t3) => t3 && inArray(L2, t3);
  const B2 = !elementIsGenerated(M2) && elementHasOverflow(M2) ? M2 : p2;
  const F2 = E2 ? b2 : M2;
  const j2 = E2 ? g2 : M2;
  const X2 = {
    vt: p2,
    ht: T2,
    ot: M2,
    ln: k2,
    bt: R2,
    gt: F2,
    Qt: j2,
    an: h2 ? b2 : B2,
    Kt: g2,
    wt: h2,
    Mt: a2,
    nt: H2,
    un: getDocumentWindow,
    yt: (t3) => hasAttrClass(M2, q, t3),
    St: (t3, n2) => addRemoveAttrClass(M2, q, t3, n2),
    Ot: () => addRemoveAttrClass(F2, q, Y, true)
  };
  const {
    vt: J2,
    ht: Q2,
    ln: Z2,
    ot: tt2,
    bt: nt2
  } = X2;
  const ot2 = [() => {
    removeAttrs(Q2, [P, V]);
    removeAttrs(J2, V);
    if (h2) {
      removeAttrs(b2, [V, P]);
    }
  }];
  let st2 = contents([nt2, tt2, Z2, Q2, J2].find((t3) => t3 && !elementIsGenerated(t3)));
  const et2 = E2 ? J2 : nt2 || tt2;
  const ct2 = bind(runEachAndClear, ot2);
  const appendElements = () => {
    const t3 = getDocumentWindow();
    const n2 = getFocusedElement();
    const unwrap = (t4) => {
      appendChildren(parent(t4), contents(t4));
      removeElements(t4);
    };
    const prepareWrapUnwrapFocus = (t4) => addEventListener(t4, "focusin focusout focus blur", stopAndPrevent, {
      I: true,
      H: false
    });
    const o3 = "tabindex";
    const s3 = getAttr(tt2, o3);
    const c3 = prepareWrapUnwrapFocus(n2);
    setAttrs(Q2, P, H2 ? "" : N);
    setAttrs(Z2, G, "");
    setAttrs(tt2, q, "");
    setAttrs(nt2, K, "");
    if (!H2) {
      setAttrs(tt2, o3, s3 || "-1");
      h2 && setAttrs(b2, U, "");
    }
    appendChildren(et2, st2);
    appendChildren(Q2, Z2);
    appendChildren(Z2 || Q2, !H2 && tt2);
    appendChildren(tt2, nt2);
    push(ot2, [c3, () => {
      const t4 = getFocusedElement();
      const n3 = elementIsGenerated(tt2);
      const e3 = n3 && t4 === tt2 ? J2 : t4;
      const c4 = prepareWrapUnwrapFocus(e3);
      removeAttrs(Z2, G);
      removeAttrs(nt2, K);
      removeAttrs(tt2, q);
      h2 && removeAttrs(b2, U);
      s3 ? setAttrs(tt2, o3, s3) : removeAttrs(tt2, o3);
      elementIsGenerated(nt2) && unwrap(nt2);
      n3 && unwrap(tt2);
      elementIsGenerated(Z2) && unwrap(Z2);
      focusElement(e3);
      c4();
    }]);
    if (e2 && !H2) {
      addAttrClass(tt2, q, W);
      push(ot2, bind(removeAttrs, tt2, q));
    }
    focusElement(!H2 && h2 && n2 === J2 && t3.top === t3 ? tt2 : n2);
    c3();
    st2 = 0;
    return ct2;
  };
  return [X2, appendElements, ct2];
};
var createTrinsicUpdateSegment = ({
  bt: t2
}) => ({
  Zt: n2,
  _n: o2,
  Dt: s2
}) => {
  const {
    xt: e2
  } = n2 || {};
  const {
    $t: c2
  } = o2;
  const r2 = t2 && (e2 || s2);
  if (r2) {
    setStyles(t2, {
      [C]: c2 && "100%"
    });
  }
};
var createPaddingUpdateSegment = ({
  ht: t2,
  ln: n2,
  ot: o2,
  nt: s2
}, e2) => {
  const [c2, r2] = createCache({
    i: equalTRBL,
    o: topRightBottomLeft()
  }, bind(topRightBottomLeft, t2, "padding", ""));
  return ({
    It: t3,
    Zt: l2,
    _n: i2,
    Dt: a2
  }) => {
    let [u2, _2] = r2(a2);
    const {
      R: d2
    } = getEnvironment();
    const {
      ft: f2,
      Ht: v2,
      Ct: m2
    } = l2 || {};
    const {
      ct: O2
    } = i2;
    const [C2, x2] = t3("paddingAbsolute");
    const H2 = a2 || v2;
    if (f2 || _2 || H2) {
      [u2, _2] = c2(a2);
    }
    const E2 = !s2 && (x2 || m2 || _2);
    if (E2) {
      const t4 = !C2 || !n2 && !d2;
      const s3 = u2.r + u2.l;
      const c3 = u2.t + u2.b;
      const r3 = {
        [y]: t4 && !O2 ? -s3 : 0,
        [S]: t4 ? -c3 : 0,
        [w]: t4 && O2 ? -s3 : 0,
        top: t4 ? -u2.t : 0,
        right: t4 ? O2 ? -u2.r : "auto" : 0,
        left: t4 ? O2 ? "auto" : -u2.l : 0,
        [$]: t4 && `calc(100% + ${s3}px)`
      };
      const l3 = {
        [p]: t4 ? u2.t : 0,
        [h]: t4 ? u2.r : 0,
        [b]: t4 ? u2.b : 0,
        [g]: t4 ? u2.l : 0
      };
      setStyles(n2 || o2, r3);
      setStyles(o2, l3);
      assignDeep(e2, {
        ln: u2,
        dn: !t4,
        rt: n2 ? l3 : assignDeep({}, r3, l3)
      });
    }
    return {
      fn: E2
    };
  };
};
var createOverflowUpdateSegment = (t2, s2) => {
  const e2 = getEnvironment();
  const {
    ht: c2,
    ln: r2,
    ot: l2,
    nt: a2,
    Qt: u2,
    gt: _2,
    wt: d2,
    St: f2,
    un: v2
  } = t2;
  const {
    R: p2
  } = e2;
  const h2 = d2 && a2;
  const g2 = bind(o, 0);
  const b2 = {
    display: () => false,
    direction: (t3) => t3 !== "ltr",
    flexDirection: (t3) => t3.endsWith("-reverse"),
    writingMode: (t3) => t3 !== "horizontal-tb"
  };
  const w2 = keys(b2);
  const y2 = {
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  };
  const S2 = {
    i: equalXY,
    o: {}
  };
  const setMeasuringMode = (t3) => {
    f2(X, !h2 && t3);
  };
  const getMeasuredScrollCoordinates = (t3) => {
    const n2 = w2.some((n3) => {
      const o3 = t3[n3];
      return o3 && b2[n3](o3);
    });
    if (!n2) {
      return {
        D: {
          x: 0,
          y: 0
        },
        M: {
          x: 1,
          y: 1
        }
      };
    }
    setMeasuringMode(true);
    const o2 = getElementScroll(_2);
    const s3 = f2(J, true);
    const e3 = addEventListener(u2, E, (t4) => {
      const n3 = getElementScroll(_2);
      if (t4.isTrusted && n3.x === o2.x && n3.y === o2.y) {
        stopPropagation(t4);
      }
    }, {
      I: true,
      A: true
    });
    scrollElementTo(_2, {
      x: 0,
      y: 0
    });
    s3();
    const c3 = getElementScroll(_2);
    const r3 = D(_2);
    scrollElementTo(_2, {
      x: r3.w,
      y: r3.h
    });
    const l3 = getElementScroll(_2);
    scrollElementTo(_2, {
      x: l3.x - c3.x < 1 && -r3.w,
      y: l3.y - c3.y < 1 && -r3.h
    });
    const a3 = getElementScroll(_2);
    scrollElementTo(_2, o2);
    i(() => e3());
    return {
      D: c3,
      M: a3
    };
  };
  const getOverflowAmount = (t3, o2) => {
    const s3 = n.devicePixelRatio % 1 !== 0 ? 1 : 0;
    const e3 = {
      w: g2(t3.w - o2.w),
      h: g2(t3.h - o2.h)
    };
    return {
      w: e3.w > s3 ? e3.w : 0,
      h: e3.h > s3 ? e3.h : 0
    };
  };
  const [m2, O2] = createCache(y2, bind(getFractionalSize, l2));
  const [$2, C2] = createCache(y2, bind(D, l2));
  const [z2, I2] = createCache(y2);
  const [M2] = createCache(S2);
  const [T2, k2] = createCache(y2);
  const [R2] = createCache(S2);
  const [V2] = createCache({
    i: (t3, n2) => equal(t3, n2, w2),
    o: {}
  }, () => hasDimensions(l2) ? getStyles(l2, w2) : {});
  const [U2, N2] = createCache({
    i: (t3, n2) => equalXY(t3.D, n2.D) && equalXY(t3.M, n2.M),
    o: getZeroScrollCoordinates()
  });
  const q2 = getStaticPluginModuleInstance(zt);
  const createViewportOverflowStyleClassName = (t3, n2) => {
    const o2 = n2 ? B : F;
    return `${o2}${capitalizeFirstLetter(t3)}`;
  };
  const setViewportOverflowStyle = (t3) => {
    const createAllOverflowStyleClassNames = (t4) => [x, H, E].map((n3) => createViewportOverflowStyleClassName(n3, t4));
    const n2 = createAllOverflowStyleClassNames(true).concat(createAllOverflowStyleClassNames()).join(" ");
    f2(n2);
    f2(keys(t3).map((n3) => createViewportOverflowStyleClassName(t3[n3], n3 === "x")).join(" "), true);
  };
  return ({
    It: n2,
    Zt: o2,
    _n: i2,
    Dt: a3
  }, {
    fn: u3
  }) => {
    const {
      ft: _3,
      Ht: d3,
      Ct: b3,
      dt: w3,
      zt: y3
    } = o2 || {};
    const S3 = q2 && q2.tt(t2, s2, i2, e2, n2);
    const {
      it: x2,
      ut: H2,
      _t: E2
    } = S3 || {};
    const [D2, B2] = getShowNativeOverlaidScrollbars(n2, e2);
    const [F2, j2] = n2("overflow");
    const X2 = overflowIsVisible(F2.x);
    const Y2 = overflowIsVisible(F2.y);
    const J2 = true;
    let K2 = O2(a3);
    let Q2 = C2(a3);
    let Z2 = I2(a3);
    let tt2 = k2(a3);
    if (B2 && p2) {
      f2(W, !D2);
    }
    {
      if (hasAttrClass(c2, P, L)) {
        setMeasuringMode(true);
      }
      const [t3] = H2 ? H2() : [];
      const [n3] = K2 = m2(a3);
      const [o3] = Q2 = $2(a3);
      const s3 = A(l2);
      const e3 = h2 && getWindowSize(v2());
      const r3 = {
        w: g2(o3.w + n3.w),
        h: g2(o3.h + n3.h)
      };
      const i3 = {
        w: g2((e3 ? e3.w : s3.w + g2(s3.w - o3.w)) + n3.w),
        h: g2((e3 ? e3.h : s3.h + g2(s3.h - o3.h)) + n3.h)
      };
      t3 && t3();
      tt2 = T2(i3);
      Z2 = z2(getOverflowAmount(r3, i3), a3);
    }
    const [nt2, ot2] = tt2;
    const [st2, et2] = Z2;
    const [ct2, rt2] = Q2;
    const [lt2, it2] = K2;
    const [at2, ut2] = M2({
      x: st2.w > 0,
      y: st2.h > 0
    });
    const _t2 = X2 && Y2 && (at2.x || at2.y) || X2 && at2.x && !at2.y || Y2 && at2.y && !at2.x;
    const dt2 = u3 || b3 || y3 || it2 || rt2 || ot2 || et2 || j2 || B2 || J2;
    const ft2 = createViewportOverflowState(at2, F2);
    const [vt2, pt2] = R2(ft2.K);
    const [ht2, gt2] = V2(a3);
    const bt2 = b3 || w3 || gt2 || ut2 || a3;
    const [wt2, yt2] = bt2 ? U2(getMeasuredScrollCoordinates(ht2), a3) : N2();
    if (dt2) {
      pt2 && setViewportOverflowStyle(ft2.K);
      if (E2 && x2) {
        setStyles(l2, E2(ft2, i2, x2(ft2, ct2, lt2)));
      }
    }
    setMeasuringMode(false);
    addRemoveAttrClass(c2, P, L, _t2);
    addRemoveAttrClass(r2, G, L, _t2);
    assignDeep(s2, {
      K: vt2,
      Vt: {
        x: nt2.w,
        y: nt2.h
      },
      Rt: {
        x: st2.w,
        y: st2.h
      },
      rn: at2,
      Lt: sanitizeScrollCoordinates(wt2, st2)
    });
    return {
      en: pt2,
      nn: ot2,
      sn: et2,
      cn: yt2 || et2,
      vn: bt2
    };
  };
};
var createStructureSetup = (t2) => {
  const [n2, o2, s2] = createStructureSetupElements(t2);
  const e2 = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    dn: false,
    rt: {
      [y]: 0,
      [S]: 0,
      [w]: 0,
      [p]: 0,
      [h]: 0,
      [b]: 0,
      [g]: 0
    },
    Vt: {
      x: 0,
      y: 0
    },
    Rt: {
      x: 0,
      y: 0
    },
    K: {
      x: H,
      y: H
    },
    rn: {
      x: false,
      y: false
    },
    Lt: getZeroScrollCoordinates()
  };
  const {
    vt: c2,
    gt: r2,
    nt: l2,
    Ot: i2
  } = n2;
  const {
    R: a2,
    k: u2
  } = getEnvironment();
  const _2 = !a2 && (u2.x || u2.y);
  const d2 = [createTrinsicUpdateSegment(n2), createPaddingUpdateSegment(n2, e2), createOverflowUpdateSegment(n2, e2)];
  return [o2, (t3) => {
    const n3 = {};
    const o3 = _2;
    const s3 = o3 && getElementScroll(r2);
    const e3 = s3 && i2();
    each(d2, (o4) => {
      assignDeep(n3, o4(t3, n3) || {});
    });
    scrollElementTo(r2, s3);
    e3 && e3();
    !l2 && scrollElementTo(c2, 0);
    return n3;
  }, e2, n2, s2];
};
var createSetups = (t2, n2, o2, s2, e2) => {
  let c2 = false;
  const r2 = createOptionCheck(n2, {});
  const [l2, i2, a2, u2, _2] = createStructureSetup(t2);
  const [d2, f2, v2] = createObserversSetup(u2, a2, r2, (t3) => {
    update({}, t3);
  });
  const [p2, h2, , g2] = createScrollbarsSetup(t2, n2, v2, a2, u2, e2);
  const updateHintsAreTruthy = (t3) => keys(t3).some((n3) => !!t3[n3]);
  const update = (t3, e3) => {
    if (o2()) {
      return false;
    }
    const {
      pn: r3,
      Dt: l3,
      At: a3,
      hn: u3
    } = t3;
    const _3 = r3 || {};
    const d3 = !!l3 || !c2;
    const p3 = {
      It: createOptionCheck(n2, _3, d3),
      pn: _3,
      Dt: d3
    };
    if (u3) {
      h2(p3);
      return false;
    }
    const g3 = e3 || f2(assignDeep({}, p3, {
      At: a3
    }));
    const b2 = i2(assignDeep({}, p3, {
      _n: v2,
      Zt: g3
    }));
    h2(assignDeep({}, p3, {
      Zt: g3,
      tn: b2
    }));
    const w2 = updateHintsAreTruthy(g3);
    const y2 = updateHintsAreTruthy(b2);
    const S2 = w2 || y2 || !isEmptyObject(_3) || d3;
    c2 = true;
    S2 && s2(t3, {
      Zt: g3,
      tn: b2
    });
    return S2;
  };
  return [() => {
    const {
      an: t3,
      gt: n3,
      Ot: o3
    } = u2;
    const s3 = getElementScroll(t3);
    const e3 = [d2(), l2(), p2()];
    const c3 = o3();
    scrollElementTo(n3, s3);
    c3();
    return bind(runEachAndClear, e3);
  }, update, () => ({
    gn: v2,
    bn: a2
  }), {
    wn: u2,
    yn: g2
  }, _2];
};
var OverlayScrollbars = (t2, n2, o2) => {
  const {
    N: s2
  } = getEnvironment();
  const e2 = isHTMLElement(t2);
  const c2 = e2 ? t2 : t2.target;
  const r2 = getInstance(c2);
  if (n2 && !r2) {
    let r3 = false;
    const l2 = [];
    const i2 = {};
    const validateOptions = (t3) => {
      const n3 = removeUndefinedProperties(t3, true);
      const o3 = getStaticPluginModuleInstance(xt);
      return o3 ? o3(n3, true) : n3;
    };
    const a2 = assignDeep({}, s2(), validateOptions(n2));
    const [u2, _2, d2] = createEventListenerHub();
    const [f2, v2, p2] = createEventListenerHub(o2);
    const triggerEvent = (t3, n3) => {
      p2(t3, n3);
      d2(t3, n3);
    };
    const [h2, g2, b2, w2, y2] = createSetups(t2, a2, () => r3, ({
      pn: t3,
      Dt: n3
    }, {
      Zt: o3,
      tn: s3
    }) => {
      const {
        ft: e3,
        Ct: c3,
        xt: r4,
        Ht: l3,
        Et: i3,
        dt: a3
      } = o3;
      const {
        nn: u3,
        sn: _3,
        en: d3,
        cn: f3
      } = s3;
      triggerEvent("updated", [S2, {
        updateHints: {
          sizeChanged: !!e3,
          directionChanged: !!c3,
          heightIntrinsicChanged: !!r4,
          overflowEdgeChanged: !!u3,
          overflowAmountChanged: !!_3,
          overflowStyleChanged: !!d3,
          scrollCoordinatesChanged: !!f3,
          contentMutation: !!l3,
          hostMutation: !!i3,
          appear: !!a3
        },
        changedOptions: t3 || {},
        force: !!n3
      }]);
    }, (t3) => triggerEvent("scroll", [S2, t3]));
    const destroy = (t3) => {
      removeInstance(c2);
      runEachAndClear(l2);
      r3 = true;
      triggerEvent("destroyed", [S2, t3]);
      _2();
      v2();
    };
    const S2 = {
      options(t3, n3) {
        if (t3) {
          const o3 = n3 ? s2() : {};
          const e3 = getOptionsDiff(a2, assignDeep(o3, validateOptions(t3)));
          if (!isEmptyObject(e3)) {
            assignDeep(a2, e3);
            g2({
              pn: e3
            });
          }
        }
        return assignDeep({}, a2);
      },
      on: f2,
      off: (t3, n3) => {
        t3 && n3 && v2(t3, n3);
      },
      state() {
        const {
          gn: t3,
          bn: n3
        } = b2();
        const {
          ct: o3
        } = t3;
        const {
          Vt: s3,
          Rt: e3,
          K: c3,
          rn: l3,
          ln: i3,
          dn: a3,
          Lt: u3
        } = n3;
        return assignDeep({}, {
          overflowEdge: s3,
          overflowAmount: e3,
          overflowStyle: c3,
          hasOverflow: l3,
          scrollCoordinates: {
            start: u3.D,
            end: u3.M
          },
          padding: i3,
          paddingAbsolute: a3,
          directionRTL: o3,
          destroyed: r3
        });
      },
      elements() {
        const {
          vt: t3,
          ht: n3,
          ln: o3,
          ot: s3,
          bt: e3,
          gt: c3,
          Qt: r4
        } = w2.wn;
        const {
          Xt: l3,
          Gt: i3
        } = w2.yn;
        const translateScrollbarStructure = (t4) => {
          const {
            Pt: n4,
            Ut: o4,
            Tt: s4
          } = t4;
          return {
            scrollbar: s4,
            track: o4,
            handle: n4
          };
        };
        const translateScrollbarsSetupElement = (t4) => {
          const {
            Yt: n4,
            Wt: o4
          } = t4;
          const s4 = translateScrollbarStructure(n4[0]);
          return assignDeep({}, s4, {
            clone: () => {
              const t5 = translateScrollbarStructure(o4());
              g2({
                hn: true
              });
              return t5;
            }
          });
        };
        return assignDeep({}, {
          target: t3,
          host: n3,
          padding: o3 || s3,
          viewport: s3,
          content: e3 || s3,
          scrollOffsetElement: c3,
          scrollEventElement: r4,
          scrollbarHorizontal: translateScrollbarsSetupElement(l3),
          scrollbarVertical: translateScrollbarsSetupElement(i3)
        });
      },
      update: (t3) => g2({
        Dt: t3,
        At: true
      }),
      destroy: bind(destroy, false),
      plugin: (t3) => i2[keys(t3)[0]]
    };
    push(l2, [y2]);
    addInstance(c2, S2);
    registerPluginModuleInstances($t, OverlayScrollbars, [S2, u2, i2]);
    if (cancelInitialization(w2.wn.wt, !e2 && t2.cancel)) {
      destroy(true);
      return S2;
    }
    push(l2, h2());
    triggerEvent("initialized", [S2]);
    S2.update();
    return S2;
  }
  return r2;
};
OverlayScrollbars.plugin = (t2) => {
  const n2 = isArray(t2);
  const o2 = n2 ? t2 : [t2];
  const s2 = o2.map((t3) => registerPluginModuleInstances(t3, OverlayScrollbars)[0]);
  addPlugins(o2);
  return n2 ? s2 : s2[0];
};
OverlayScrollbars.valid = (t2) => {
  const n2 = t2 && t2.elements;
  const o2 = isFunction(n2) && n2();
  return isPlainObject(o2) && !!getInstance(o2.target);
};
OverlayScrollbars.env = () => {
  const {
    T: t2,
    k: n2,
    R: o2,
    V: s2,
    B: e2,
    F: c2,
    U: r2,
    P: l2,
    N: i2,
    q: a2
  } = getEnvironment();
  return assignDeep({}, {
    scrollbarsSize: t2,
    scrollbarsOverlaid: n2,
    scrollbarsHiding: o2,
    scrollTimeline: s2,
    staticDefaultInitialization: e2,
    staticDefaultOptions: c2,
    getDefaultInitialization: r2,
    setDefaultInitialization: l2,
    getDefaultOptions: i2,
    setDefaultOptions: a2
  });
};
OverlayScrollbars.nonce = setNonce;

// node_modules/overlayscrollbars-ngx/fesm2020/overlayscrollbars-ngx.mjs
var _c02 = ["content"];
var _c12 = ["*"];
var createDefer = () => {
  if (typeof window === "undefined") {
    const noop2 = () => {
    };
    return [noop2, noop2];
  }
  let idleId;
  let rafId;
  const wnd = window;
  const idleSupported = typeof wnd.requestIdleCallback === "function";
  const rAF = wnd.requestAnimationFrame;
  const cAF = wnd.cancelAnimationFrame;
  const rIdle = idleSupported ? wnd.requestIdleCallback : rAF;
  const cIdle = idleSupported ? wnd.cancelIdleCallback : cAF;
  const clear = () => {
    cIdle(idleId);
    cAF(rafId);
  };
  return [(callback, options) => {
    clear();
    idleId = rIdle(
      idleSupported ? () => {
        clear();
        rafId = rAF(callback);
      } : callback,
      // @ts-ignore
      typeof options === "object" ? options : {
        timeout: 2233
      }
    );
  }, clear];
};
var OverlayScrollbarsDirective = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.instanceRef = null;
    const [requestDefer, cancelDefer] = createDefer();
    this.requestDefer = requestDefer;
    this.cancelDefer = cancelDefer;
  }
  osInitialize(target) {
    this.ngZone.runOutsideAngular(() => {
      const init = () => {
        this.instanceRef = OverlayScrollbars(
          target,
          this.options || {},
          /* istanbul ignore next */
          this.events || {}
        );
      };
      if (this.defer) {
        this.requestDefer(init, this.defer);
      } else {
        init();
      }
    });
  }
  osInstance() {
    return this.instanceRef;
  }
  ngOnChanges(changes) {
    const optionsChange = changes.options;
    const eventsChange = changes.events;
    if (optionsChange) {
      const curr = optionsChange.currentValue;
      this.options = curr;
      if (OverlayScrollbars.valid(this.instanceRef)) {
        this.instanceRef.options(curr || {}, true);
      }
    }
    if (eventsChange) {
      const curr = eventsChange.currentValue;
      this.events = curr;
      if (OverlayScrollbars.valid(this.instanceRef)) {
        this.instanceRef.on(
          /* istanbul ignore next */
          curr || {},
          true
        );
      }
    }
  }
  ngOnDestroy() {
    this.cancelDefer();
  }
};
OverlayScrollbarsDirective.\u0275fac = function OverlayScrollbarsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayScrollbarsDirective)(\u0275\u0275directiveInject(NgZone));
};
OverlayScrollbarsDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: OverlayScrollbarsDirective,
  selectors: [["", "overlayScrollbars", ""]],
  inputs: {
    options: "options",
    events: "events",
    defer: "defer"
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayScrollbarsDirective, [{
    type: Directive,
    args: [{
      selector: "[overlayScrollbars]"
      // https://angular.io/guide/styleguide#directive-selectors
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, {
    options: [{
      type: Input,
      args: ["options"]
    }],
    events: [{
      type: Input,
      args: ["events"]
    }],
    defer: [{
      type: Input,
      args: ["defer"]
    }]
  });
})();
var mergeEventListeners = (emits, events) => Object.keys(emits).reduce((obj, name) => {
  const emitListener = emits[name];
  const eventListener = events[name];
  obj[name] = [emitListener, ...(Array.isArray(eventListener) ? eventListener : [eventListener]).filter(Boolean)];
  return obj;
}, {});
var OverlayScrollbarsComponent = class {
  constructor(ngZone, targetRef) {
    this.ngZone = ngZone;
    this.targetRef = targetRef;
    this.onInitialized = new EventEmitter();
    this.onUpdated = new EventEmitter();
    this.onDestroyed = new EventEmitter();
    this.onScroll = new EventEmitter();
  }
  osInstance() {
    return this.osDirective.osInstance();
  }
  getElement() {
    return this.targetRef.nativeElement;
  }
  ngAfterViewInit() {
    const targetElm = this.getElement();
    const contentElm = this.contentRef.nativeElement;
    if (targetElm && contentElm) {
      this.osDirective.osInitialize({
        target: targetElm,
        elements: {
          viewport: contentElm,
          content: contentElm
        }
      });
    }
  }
  ngOnDestroy() {
    this.osDirective?.osInstance()?.destroy();
  }
  mergeEvents(originalEvents) {
    return mergeEventListeners({
      initialized: (...args) => this.dispatchEventIfHasObservers(this.onInitialized, args),
      updated: (...args) => this.dispatchEventIfHasObservers(this.onUpdated, args),
      destroyed: (...args) => this.dispatchEventIfHasObservers(this.onDestroyed, args),
      scroll: (...args) => this.dispatchEventIfHasObservers(this.onScroll, args)
    }, originalEvents || {});
  }
  dispatchEventIfHasObservers(eventEmitter, args) {
    if (eventEmitter.observed || eventEmitter.observers.length > 0) {
      this.ngZone.run(() => eventEmitter.emit(args));
    }
  }
};
OverlayScrollbarsComponent.\u0275fac = function OverlayScrollbarsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayScrollbarsComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef));
};
OverlayScrollbarsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: OverlayScrollbarsComponent,
  selectors: [["overlay-scrollbars"], ["", "overlay-scrollbars", ""]],
  viewQuery: function OverlayScrollbarsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c02, 5, OverlayScrollbarsDirective);
    }
    if (rf & 2) {
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentRef = _t2.first);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.osDirective = _t2.first);
    }
  },
  hostAttrs: ["data-overlayscrollbars-initialize", ""],
  inputs: {
    options: "options",
    events: "events",
    defer: "defer"
  },
  outputs: {
    onInitialized: "osInitialized",
    onUpdated: "osUpdated",
    onDestroyed: "osDestroyed",
    onScroll: "osScroll"
  },
  ngContentSelectors: _c12,
  decls: 3,
  vars: 3,
  consts: [["content", ""], ["overlayScrollbars", "", "data-overlayscrollbars-contents", "", 3, "options", "events", "defer"]],
  template: function OverlayScrollbarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("options", ctx.options)("events", ctx.mergeEvents(ctx.events))("defer", ctx.defer);
    }
  },
  dependencies: [OverlayScrollbarsDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayScrollbarsComponent, [{
    type: Component,
    args: [{
      selector: "overlay-scrollbars, [overlay-scrollbars]",
      host: {
        "data-overlayscrollbars-initialize": ""
      },
      template: `
    <div
      overlayScrollbars
      data-overlayscrollbars-contents=""
      [options]="options"
      [events]="mergeEvents(events)"
      [defer]="defer"
      #content
    >
      <ng-content></ng-content>
    </div>
  `
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }];
  }, {
    options: [{
      type: Input,
      args: ["options"]
    }],
    events: [{
      type: Input,
      args: ["events"]
    }],
    defer: [{
      type: Input,
      args: ["defer"]
    }],
    onInitialized: [{
      type: Output,
      args: ["osInitialized"]
    }],
    onUpdated: [{
      type: Output,
      args: ["osUpdated"]
    }],
    onDestroyed: [{
      type: Output,
      args: ["osDestroyed"]
    }],
    onScroll: [{
      type: Output,
      args: ["osScroll"]
    }],
    contentRef: [{
      type: ViewChild,
      args: ["content"]
    }],
    osDirective: [{
      type: ViewChild,
      args: ["content", {
        read: OverlayScrollbarsDirective
      }]
    }]
  });
})();
var OverlayscrollbarsModule = class {
};
OverlayscrollbarsModule.\u0275fac = function OverlayscrollbarsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayscrollbarsModule)();
};
OverlayscrollbarsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: OverlayscrollbarsModule
});
OverlayscrollbarsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayscrollbarsModule, [{
    type: NgModule,
    args: [{
      declarations: [OverlayScrollbarsComponent, OverlayScrollbarsDirective],
      exports: [OverlayScrollbarsComponent, OverlayScrollbarsDirective]
    }]
  }], null, null);
})();

// src/app/shared/components/page-header/page-header.component.ts
var PageHeaderComponent = class _PageHeaderComponent {
  constructor() {
    this.sub = "Home";
  }
  static {
    this.\u0275fac = function PageHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeaderComponent, selectors: [["app-page-header"]], inputs: { sub: "sub", hassub: "hassub", title: "title", title1: "title1", activeTitle: "activeTitle" }, decls: 20, vars: 5, consts: [[1, "page-header"], [1, "page-title", "my-auto"], [1, "page-header-bredcrumb"], [1, "breadcrumb", "mb-0"], [1, "breadcrumb-item"], ["href", "javascript:void(0);"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "svg-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"], ["d", "M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z", "opacity", ".3"], [1, "breadcrumb-icon"], ["aria-current", "page", 1, "breadcrumb-item", "active"]], template: function PageHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "ol", 3)(5, "li", 4)(6, "a", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 6);
        \u0275\u0275element(8, "path", 7)(9, "path", 8)(10, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "span", 10);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "li", 4)(16, "a", 5);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "li", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.sub);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.hassub);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.activeTitle);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeaderComponent, { className: "PageHeaderComponent", filePath: "src\\app\\shared\\components\\page-header\\page-header.component.ts", lineNumber: 9 });
})();

// src/app/shared/directives/appshowcode.directive.ts
var AppShowCodeDirective = class _AppShowCodeDirective {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.isCodeVisible = false;
  }
  onClick() {
    const cardElement = this.el.nativeElement.closest(".card");
    if (cardElement) {
      const cardBody = this.el.nativeElement.closest(".card").querySelector(".card-body");
      const cardFooter = cardElement.querySelector(".card-footer");
      const button = this.el.nativeElement;
      const icon = button.querySelector("i");
      if (cardBody && cardFooter && icon) {
        cardBody.classList.toggle("d-none");
        cardFooter.classList.toggle("d-none");
        let codeContent = cardBody.innerHTML;
        codeContent = codeContent.replace(/ _ngcontent-[\w-]+=""/g, "");
        codeContent = codeContent.replace(/ ng-reflect-\w+(?:-\w+)*="[^"]*"/g, "");
        codeContent = codeContent.replace(/<\/\w+>/g, "$&\n\n").replace(/^\s+/gim, "");
        cardFooter.innerText = codeContent;
        this.isCodeVisible = !this.isCodeVisible;
        if (this.isCodeVisible) {
          this.renderer.removeClass(icon, "ri-code-line");
          this.renderer.addClass(icon, "ri-code-s-slash-line");
        } else {
          this.renderer.removeClass(icon, "ri-code-s-slash-line");
          this.renderer.addClass(icon, "ri-code-line");
        }
      }
    }
  }
  static {
    this.\u0275fac = function AppShowCodeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppShowCodeDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AppShowCodeDirective, selectors: [["", "appShowCode", ""]], hostBindings: function AppShowCodeDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AppShowCodeDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    } });
  }
};

// node_modules/flatpickr/dist/esm/types/options.js
var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

// node_modules/flatpickr/dist/esm/l10n/default.js
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(nth) {
    var s2 = nth % 100;
    if (s2 > 3 && s2 < 21) return "th";
    switch (s2 % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
var default_default = english;

// node_modules/flatpickr/dist/esm/utils/index.js
var pad = function(number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function(bool) {
  return bool === true ? 1 : 0;
};
function debounce2(fn, wait) {
  var t2;
  return function() {
    var _this = this;
    var args = arguments;
    clearTimeout(t2);
    t2 = setTimeout(function() {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function(obj) {
  return obj instanceof Array ? obj : [obj];
};

// node_modules/flatpickr/dist/esm/utils/dom.js
function toggleClass(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e2 = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e2.className = className;
  if (content !== void 0) e2.textContent = content;
  return e2;
}
function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node)) return node;
  else if (node.parentNode) return findParent(node.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0) for (var key in opts) numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}

// node_modules/flatpickr/dist/esm/utils/formatting.js
var doNothing = function() {
  return void 0;
};
var monthToStr = function(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function(_2, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1e3);
  },
  W: function(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function(_2, ISODate) {
    return new Date(ISODate);
  },
  d: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function(_2, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function(dateObj, year) {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function(date) {
    return date.toISOString();
  },
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function(date) {
    return pad(date.getHours());
  },
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function(date, locale) {
    return locale.amPM[int(date.getHours() > 11)];
  },
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function(date) {
    return pad(date.getSeconds());
  },
  U: function(date) {
    return date.getTime() / 1e3;
  },
  W: function(date, _2, options) {
    return options.getWeek(date);
  },
  Y: function(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function(date) {
    return pad(date.getDate());
  },
  h: function(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function(date) {
    return pad(date.getMinutes());
  },
  j: function(date) {
    return date.getDate();
  },
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function(date) {
    return pad(date.getMonth() + 1);
  },
  n: function(date) {
    return date.getMonth() + 1;
  },
  s: function(date) {
    return date.getSeconds();
  },
  u: function(date) {
    return date.getTime();
  },
  w: function(date) {
    return date.getDay();
  },
  y: function(date) {
    return String(date.getFullYear()).substring(2);
  }
};

// node_modules/flatpickr/dist/esm/utils/dates.js
var createDateFormatter = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
  return function(dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== void 0 && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function(c2, i2, arr) {
      return formats[c2] && arr[i2 - 1] !== "\\" ? formats[c2](dateObj, locale, config) : c2 !== "\\" ? c2 : "";
    }).join("");
  };
};
var createDateParser = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
  return function(date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date) return void 0;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date) parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== void 0) parsedDate = new Date(date);
    else if (typeof date === "string") {
      var format = givenFormat || (config || defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = /* @__PURE__ */ new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0, ops = [];
        for (var i2 = 0, matchIndex = 0, regexStr = ""; i2 < format.length; i2++) {
          var token = format[i2];
          var isBackSlash = token === "\\";
          var escaped = format[i2 - 1] === "\\" || isBackSlash;
          if (tokenRegex[token] && !escaped) {
            regexStr += tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash) regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
        ops.forEach(function(_a2) {
          var fn = _a2.fn, val = _a2.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : void 0;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return void 0;
    }
    if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
var isBetween = function(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 864e5
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== void 0) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== void 0) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }
  return {
    hours,
    minutes,
    seconds
  };
}

// node_modules/flatpickr/dist/esm/utils/polyfills.js
if (typeof Object.assign !== "function") {
  Object.assign = function(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function(source2) {
      if (source2) {
        Object.keys(source2).forEach(function(key) {
          return target[key] = source2[key];
        });
      }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}

// node_modules/flatpickr/dist/esm/index.js
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = function() {
  for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++) s2 += arguments[i2].length;
  for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++) for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++) r2[k2] = a2[j2];
  return r2;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
    l10n: default_default
  };
  self.parseDate = createDateParser({
    config: self.config,
    l10n: self.l10n
  });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind2;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function(month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }
        if (yr === void 0) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile) build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== void 0) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e2) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === void 0 || compareDates(/* @__PURE__ */ new Date(), self.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(self.config.minDate.getTime());
      var defaults2 = getDefaultHours(self.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e2 !== void 0 && e2.type !== "blur") {
      timeWrapper(e2);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === void 0 || self.minuteElement === void 0) return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== void 0) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== void 0 && self.config.minTime !== void 0 && self.config.minTime > self.config.maxTime) {
      var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = parseSeconds(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== void 0) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== void 0) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
    if (self.secondElement !== void 0) self.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind2(element2, event, handler, options) {
    if (event instanceof Array) return event.forEach(function(ev) {
      return bind2(element2, ev, handler, options);
    });
    if (element2 instanceof Array) return element2.forEach(function(el) {
      return bind2(el, event, handler, options);
    });
    element2.addEventListener(event, handler, options);
    self._handlers.push({
      remove: function() {
        return element2.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function(evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
          return bind2(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = debounce2(onResize, 50);
    self._debouncedChange = debounce2(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind2(self.daysContainer, "mouseover", function(e2) {
      if (self.config.mode === "range") onMouseOver(getEventTarget(e2));
    });
    bind2(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== void 0) {
      bind2(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static) bind2(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0) bind2(window.document, "touchstart", documentClick);
    else bind2(window.document, "mousedown", documentClick);
    bind2(window.document, "focus", documentClick, {
      capture: true
    });
    if (self.config.clickOpens === true) {
      bind2(self._input, "focus", self.open);
      bind2(self._input, "click", self.open);
    }
    if (self.daysContainer !== void 0) {
      bind2(self.monthNav, "click", onMonthNavClick);
      bind2(self.monthNav, ["keyup", "increment"], onYearInput);
      bind2(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
      var selText = function(e2) {
        return getEventTarget(e2).select();
      };
      bind2(self.timeContainer, ["increment"], updateTime);
      bind2(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind2(self.timeContainer, "click", timeIncrement);
      bind2([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== void 0) bind2(self.secondElement, "focus", function() {
        return self.secondElement && self.secondElement.select();
      });
      if (self.amPM !== void 0) {
        bind2(self.amPM, "click", function(e2) {
          updateTime(e2);
        });
      }
    }
    if (self.config.allowInput) {
      bind2(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    var jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e2) {
      e2.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e2);
    }
    if (triggerChange2 && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e2) {
    var eventTarget = getEventTarget(e2);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e2, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e2, delta, inputElem) {
    var target = e2 && getEventTarget(e2);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = createElement("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = createElement("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = createElement("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
    toggleClass(self.calendarContainer, "animate", self.config.animate === true);
    toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
        else if (self.config.appendTo !== void 0) self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline) (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i2) {
    var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i2;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i2 % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m2 = startMonth; m2 != endMonth; m2 += delta) {
      var month = self.daysContainer.children[m2];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i2 = startIndex; i2 != endIndex; i2 += delta) {
        var c2 = month.children[i2];
        if (c2.className.indexOf("hidden") === -1 && isEnabled(c2.dateObj)) return c2;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m2 = givenMonth - self.currentMonth; m2 != endMonth; m2 += loopDelta) {
      var month = self.daysContainer.children[m2];
      var startIndex = givenMonth - self.currentMonth === m2 ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i2 = startIndex; i2 >= 0 && i2 < numMonthDays && i2 != (delta > 0 ? numMonthDays : -1); i2 += loopDelta) {
        var c2 = month.children[i2];
        if (c2.className.indexOf("hidden") === -1 && isEnabled(c2.dateObj) && Math.abs(current.$i - i2) >= Math.abs(delta)) return focusOnDayElem(c2);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== void 0 ? current : dayFocused ? activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === void 0) {
      return;
    }
    clearNode(self.daysContainer);
    if (self.weekNumbers) clearNode(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i2 = 0; i2 < self.config.showMonths; i2++) {
      var d2 = new Date(self.currentYear, self.currentMonth, 1);
      d2.setMonth(self.currentMonth + i2);
      frag.appendChild(buildMonthDays(d2.getFullYear(), d2.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;
    var shouldBuildMonth = function(month2) {
      if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month2 < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month2 > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i2 = 0; i2 < 12; i2++) {
      if (!shouldBuildMonth(i2)) continue;
      var month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i2).getMonth().toString();
      month.textContent = monthToStr(i2, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i2) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = createElement("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind2(self.monthsDropdownContainer, "change", function(e2) {
        var target = getEventTarget(e2);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = createNumberInput("cur-year", {
      tabindex: "-1"
    });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m2 = self.config.showMonths; m2--; ) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = createElement("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = createElement("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function() {
        return self.__hidePrevMonthArrow;
      },
      set: function(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function() {
        return self.__hideNextMonthArrow;
      },
      set: function(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    var defaults2 = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else clearNode(self.weekdayContainer);
    for (var i2 = self.config.showMonths; i2--; ) {
      var container = createElement("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i2 = self.config.showMonths; i2--; ) {
      self.weekdayContainer.children[i2].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== void 0) self.altInput.value = "";
    if (self.mobileInput !== void 0) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== void 0) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== void 0) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== void 0) triggerEvent("onDestroy");
    for (var i2 = self._handlers.length; i2--; ) {
      self._handlers[i2].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = void 0;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function(k2) {
      try {
        delete self[k2];
      } catch (_2) {
      }
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e2) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = getEventTarget(e2);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e2.path && e2.path.indexOf && (~e2.path.indexOf(self.input) || ~e2.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e2.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, void 0, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === void 0) return false;
    var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (var i2 = 0, d2 = void 0; i2 < array.length; i2++) {
      d2 = array[i2];
      if (typeof d2 === "function" && d2(dateToCheck)) return bool;
      else if (d2 instanceof Date && dateToCheck !== void 0 && d2.getTime() === dateToCheck.getTime()) return bool;
      else if (typeof d2 === "string") {
        var parsed = self.parseDate(d2, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d2 === "object" && dateToCheck !== void 0 && d2.from && d2.to && dateToCheck.getTime() >= d2.from.getTime() && dateToCheck.getTime() <= d2.to.getTime()) return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== void 0) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e2) {
    var isInput = e2.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e2.relatedTarget && isCalendarElem(e2.relatedTarget))) {
      self.setDate(self._input.value, true, e2.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e2) {
    var eventTarget = getEventTarget(e2);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e2.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e2.keyCode) {
        case 13:
          if (isTimeObj) {
            e2.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e2);
          break;
        case 27:
          e2.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e2.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e2.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e2.keyCode === 39 ? 1 : -1;
              if (!e2.ctrlKey) focusOnDay(void 0, delta_1);
              else {
                e2.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();
          break;
        case 38:
        case 40:
          e2.preventDefault();
          var delta = e2.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
            if (e2.ctrlKey) {
              e2.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e2);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function(x2) {
              return x2;
            });
            var i2 = elems.indexOf(eventTarget);
            if (i2 !== -1) {
              var target = elems[i2 + (e2.shiftKey ? -1 : 1)];
              e2.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e2.shiftKey) {
            e2.preventDefault();
            self._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      switch (e2.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e2);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0, maxRange = 0;
    for (var t2 = rangeStartDate; t2 < rangeEndDate; t2 += duration.DAY) {
      if (!isEnabled(new Date(t2), true)) {
        containsDisabled = containsDisabled || t2 > rangeStartDate && t2 < rangeEndDate;
        if (t2 < initialDate && (!minRange || t2 > minRange)) minRange = t2;
        else if (t2 > initialDate && (!maxRange || t2 < maxRange)) maxRange = t2;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function(dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function(c2) {
          dayElem.classList.remove(c2);
        });
        return;
      } else if (containsDisabled && !outOfRange) return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c2) {
        dayElem.classList.remove(c2);
      });
      if (elem !== void 0) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");
        else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
  }
  function open(e2, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e2) {
        e2.preventDefault();
        var eventTarget = getEventTarget(e2);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== void 0) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e2 === void 0 || !self.timeContainer.contains(e2.relatedTarget))) {
        setTimeout(function() {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function(date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== void 0) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function(d2) {
          return isEnabled(d2);
        });
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== void 0) self.currentYearElement[type] = dateObj.getFullYear().toString();
        else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats2 = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function() {
        return self.config._enable;
      },
      set: function(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function() {
        return self.config._disable;
      },
      set: function(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function(type) {
      return function(val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats2, userConfig);
    for (var i2 = 0; i2 < boolOpts.length; i2++) self.config[boolOpts[i2]] = self.config[boolOpts[i2]] === true || self.config[boolOpts[i2]] === "true";
    HOOKS.filter(function(hook) {
      return self.config[hook] !== void 0;
    }).forEach(function(hook) {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i2 = 0; i2 < self.config.plugins.length; i2++) {
      var pluginConf = self.config.plugins[i2](self) || {};
      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : void 0);
    tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({
      config: self.config,
      l10n: self.l10n
    });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === void 0) return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function(acc, child) {
      return acc + child.offsetHeight;
    }, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static) return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === void 0) return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      toggleClass(self.calendarContainer, "rightMost", false);
      toggleClass(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
      var sheet = document.styleSheets[i2];
      if (!sheet.cssRules) continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e2) {
    e2.preventDefault();
    e2.stopPropagation();
    var isSelectable = function(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t2 = findParent(getEventTarget(e2), isSelectable);
    if (t2 === void 0) return;
    var target = t2;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];
    else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);
      else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function(a2, b2) {
        return a2.getTime() - b2.getTime();
      });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);
    else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== void 0) self.hourElement !== void 0 && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [function() {
      if (self.config.clickOpens === true) {
        bind2(self._input, "focus", self.open);
        bind2(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);
        self._input.removeEventListener("click", self.open);
      }
    }]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== void 0) CALLBACKS[key].forEach(function(x2) {
          return x2();
        });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== void 0) CALLBACKS[option].forEach(function(x2) {
        return x2();
      });
      else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(function(d2) {
      return self.parseDate(d2, format);
    });
    else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function(d2) {
      return d2 instanceof Date && isEnabled(d2, false);
    });
    if (self.config.mode === "range") self.selectedDates.sort(function(a2, b2) {
      return a2.getTime() - b2.getTime();
    });
  }
  function setDate(date, triggerChange2, format) {
    if (triggerChange2 === void 0) {
      triggerChange2 = false;
    }
    if (format === void 0) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange2);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2) triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function(rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, void 0),
        to: self.parseDate(rule.to, void 0)
      };
      return rule;
    }).filter(function(x2) {
      return x2;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || /* @__PURE__ */ new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== void 0) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== void 0) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== void 0) self.altInput.type = "hidden";
    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {
    }
    bind2(self.mobileInput, "change", function(e2) {
      self.setDate(getEventTarget(e2).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e2) {
    if (self.isOpen === true) return self.close();
    self.open(e2);
  }
  function triggerEvent(event, data) {
    if (self.config === void 0) return;
    var hooks = self.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (var i2 = 0; hooks[i2] && i2 < hooks.length; i2++) hooks[i2](self.selectedDates, self.input.value, self, data);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e2 = document.createEvent("Event");
    e2.initEvent(name, true, true);
    return e2;
  }
  function isDateSelected(date) {
    for (var i2 = 0; i2 < self.selectedDates.length; i2++) {
      var selectedDate = self.selectedDates[i2];
      if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0) return "" + i2;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach(function(yearElement, i2) {
      var d2 = new Date(self.currentYear, self.currentMonth, 1);
      d2.setMonth(self.currentMonth + i2);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i2].textContent = monthToStr(d2.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d2.getMonth().toString();
      }
      yearElement.value = d2.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function(dObj) {
      return self.formatDate(dObj, format);
    }).filter(function(d2, i2, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d2) === i2;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2) {
    if (triggerChange2 === void 0) {
      triggerChange2 = true;
    }
    if (self.mobileInput !== void 0 && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== void 0) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange2 !== false) triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e2) {
    var eventTarget = getEventTarget(e2);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e2) {
    e2.preventDefault();
    var isKeyDown = e2.type === "keydown", eventTarget = getEventTarget(e2), input = eventTarget;
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e2.delta || (isKeyDown ? e2.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
        if (isMinuteElem) incrementNumInput(void 0, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(void 0, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function(x2) {
    return x2 instanceof HTMLElement;
  });
  var instances = [];
  for (var i2 = 0; i2 < nodes.length; i2++) {
    var node = nodes[i2];
    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;
      if (node._flatpickr !== void 0) {
        node._flatpickr.destroy();
        node._flatpickr = void 0;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e2) {
      console.error(e2);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function(config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, default_default),
  default: __assign({}, default_default)
};
flatpickr.localize = function(l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function(config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
var esm_default = flatpickr;

// node_modules/angularx-flatpickr/fesm2020/angularx-flatpickr.mjs
var FlatpickrDefaults = class {
  constructor() {
    this.altFormat = "F j, Y";
    this.altInput = false;
    this.altInputClass = "";
    this.allowInput = false;
    this.allowInvalidPreload = false;
    this.appendTo = void 0;
    this.ariaDateFormat = "F j, Y";
    this.clickOpens = true;
    this.dateFormat = "Y-m-d";
    this.defaultHour = 12;
    this.defaultMinute = 0;
    this.defaultSeconds = 0;
    this.disable = [];
    this.disableMobile = false;
    this.enableTime = false;
    this.enableSeconds = false;
    this.formatDate = void 0;
    this.hourIncrement = 1;
    this.inline = false;
    this.maxDate = void 0;
    this.minDate = void 0;
    this.maxTime = void 0;
    this.minTime = void 0;
    this.minuteIncrement = 5;
    this.mode = "single";
    this.nextArrow = ">";
    this.noCalendar = false;
    this.now = /* @__PURE__ */ new Date();
    this.prevArrow = "<";
    this.shorthandCurrentMonth = false;
    this.static = false;
    this.time24hr = false;
    this.utc = false;
    this.weekNumbers = false;
    this.wrap = false;
    this.plugins = [];
    this.locale = "default";
    this.convertModelValue = false;
    this.showMonths = 1;
    this.monthSelectorType = "static";
    this.ignoredFocusElements = [];
  }
};
FlatpickrDefaults.\u0275fac = function FlatpickrDefaults_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FlatpickrDefaults)();
};
FlatpickrDefaults.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: FlatpickrDefaults,
  factory: FlatpickrDefaults.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrDefaults, [{
    type: Injectable
  }], null, null);
})();
var FLATPICKR_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FlatpickrDirective),
  multi: true
};
var FlatpickrDirective = class {
  constructor(elm, defaults2, renderer) {
    this.elm = elm;
    this.defaults = defaults2;
    this.renderer = renderer;
    this.options = {};
    this.ignoredFocusElements = [];
    this.flatpickrReady = new EventEmitter();
    this.flatpickrChange = new EventEmitter();
    this.flatpickrValueUpdate = new EventEmitter();
    this.flatpickrOpen = new EventEmitter();
    this.flatpickrClose = new EventEmitter();
    this.flatpickrMonthChange = new EventEmitter();
    this.flatpickrYearChange = new EventEmitter();
    this.flatpickrDayCreate = new EventEmitter();
    this.isDisabled = false;
    this.onChangeFn = () => {
    };
    this.onTouchedFn = () => {
    };
  }
  ngAfterViewInit() {
    const options = {
      altFormat: this.altFormat,
      altInput: this.altInput,
      altInputClass: this.altInputClass,
      allowInput: this.allowInput,
      allowInvalidPreload: this.allowInvalidPreload,
      appendTo: this.appendTo,
      ariaDateFormat: this.ariaDateFormat,
      clickOpens: this.clickOpens,
      dateFormat: this.dateFormat,
      defaultHour: this.defaultHour,
      defaultMinute: this.defaultMinute,
      defaultSeconds: this.defaultSeconds,
      disable: this.disable,
      disableMobile: this.disableMobile,
      enable: this.enable,
      enableTime: this.enableTime,
      enableSeconds: this.enableSeconds,
      formatDate: this.formatDate,
      hourIncrement: this.hourIncrement,
      defaultDate: this.initialValue,
      inline: this.inline,
      maxDate: this.maxDate,
      minDate: this.minDate,
      maxTime: this.maxTime,
      minTime: this.minTime,
      minuteIncrement: this.minuteIncrement,
      mode: this.mode,
      nextArrow: this.nextArrow,
      noCalendar: this.noCalendar,
      now: this.now,
      parseDate: this.parseDate,
      prevArrow: this.prevArrow,
      shorthandCurrentMonth: this.shorthandCurrentMonth,
      showMonths: this.showMonths,
      monthSelectorType: this.monthSelectorType,
      static: this.static,
      time24hr: this.time24hr,
      weekNumbers: this.weekNumbers,
      getWeek: this.getWeek,
      wrap: this.wrap,
      plugins: this.plugins,
      locale: this.locale,
      ignoredFocusElements: this.ignoredFocusElements,
      onChange: (selectedDates, dateString, instance) => {
        this.flatpickrChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onOpen: (selectedDates, dateString, instance) => {
        this.flatpickrOpen.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onClose: (selectedDates, dateString, instance) => {
        this.flatpickrClose.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onMonthChange: (selectedDates, dateString, instance) => {
        this.flatpickrMonthChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onYearChange: (selectedDates, dateString, instance) => {
        this.flatpickrYearChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onReady: (selectedDates, dateString, instance) => {
        this.flatpickrReady.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onValueUpdate: (selectedDates, dateString, instance) => {
        this.flatpickrValueUpdate.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onDayCreate: (selectedDates, dateString, instance, dayElement) => {
        this.flatpickrDayCreate.emit({
          selectedDates,
          dateString,
          instance,
          dayElement
        });
      }
    };
    Object.keys(options).forEach((key) => {
      if (typeof options[key] === "undefined") {
        if (typeof this.options[key] !== "undefined") {
          options[key] = this.options[key];
        } else {
          options[key] = this.defaults[key];
        }
      }
    });
    options.time_24hr = options.time24hr;
    options.altInputClass = (options.altInputClass || "") + " " + this.elm.nativeElement.className;
    if (!options.enable) {
      delete options.enable;
    }
    this.instance = esm_default(this.elm.nativeElement, options);
    this.setDisabledState(this.isDisabled);
  }
  ngOnChanges(changes) {
    if (this.instance) {
      Object.keys(changes).forEach((inputKey) => {
        this.instance.set(inputKey, this[inputKey]);
      });
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  }
  writeValue(value) {
    let convertedValue = value;
    if (this.convertModelValue && this.mode === "range" && value) {
      convertedValue = [value.from, value.to];
    }
    if (this.instance) {
      this.instance.setDate(convertedValue);
    } else {
      this.initialValue = convertedValue;
    }
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.isDisabled = isDisabled;
    if (this.instance) {
      if (this.isDisabled) {
        this.renderer.setProperty(this.instance._input, "disabled", "disabled");
      } else {
        this.renderer.removeAttribute(this.instance._input, "disabled");
      }
    }
  }
  inputChanged() {
    const value = this.elm.nativeElement.value;
    if (this.convertModelValue && typeof value === "string") {
      switch (this.mode) {
        case "multiple":
          const dates = value.split("; ").map((str) => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn(dates);
          break;
        case "range":
          const [from2, to] = value.split(this.instance.l10n.rangeSeparator).map((str) => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn({
            from: from2,
            to
          });
          break;
        case "single":
        default:
          this.onChangeFn(this.instance.parseDate(value, this.instance.config.dateFormat, !this.instance.config.enableTime));
      }
    } else {
      this.onChangeFn(value);
    }
  }
};
FlatpickrDirective.\u0275fac = function FlatpickrDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FlatpickrDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FlatpickrDefaults), \u0275\u0275directiveInject(Renderer2));
};
FlatpickrDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: FlatpickrDirective,
  selectors: [["", "mwlFlatpickr", ""]],
  hostBindings: function FlatpickrDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("blur", function FlatpickrDirective_blur_HostBindingHandler() {
        return ctx.onTouchedFn();
      })("input", function FlatpickrDirective_input_HostBindingHandler() {
        return ctx.inputChanged();
      });
    }
  },
  inputs: {
    options: "options",
    altFormat: "altFormat",
    altInput: "altInput",
    altInputClass: "altInputClass",
    allowInput: "allowInput",
    allowInvalidPreload: "allowInvalidPreload",
    appendTo: "appendTo",
    ariaDateFormat: "ariaDateFormat",
    clickOpens: "clickOpens",
    dateFormat: "dateFormat",
    defaultHour: "defaultHour",
    defaultMinute: "defaultMinute",
    defaultSeconds: "defaultSeconds",
    disable: "disable",
    disableMobile: "disableMobile",
    enable: "enable",
    enableTime: "enableTime",
    enableSeconds: "enableSeconds",
    formatDate: "formatDate",
    hourIncrement: "hourIncrement",
    inline: "inline",
    maxDate: "maxDate",
    minDate: "minDate",
    maxTime: "maxTime",
    minTime: "minTime",
    minuteIncrement: "minuteIncrement",
    mode: "mode",
    nextArrow: "nextArrow",
    noCalendar: "noCalendar",
    now: "now",
    parseDate: "parseDate",
    prevArrow: "prevArrow",
    shorthandCurrentMonth: "shorthandCurrentMonth",
    showMonths: "showMonths",
    static: "static",
    time24hr: "time24hr",
    weekNumbers: "weekNumbers",
    getWeek: "getWeek",
    wrap: "wrap",
    plugins: "plugins",
    locale: "locale",
    convertModelValue: "convertModelValue",
    monthSelectorType: "monthSelectorType",
    ignoredFocusElements: "ignoredFocusElements"
  },
  outputs: {
    flatpickrReady: "flatpickrReady",
    flatpickrChange: "flatpickrChange",
    flatpickrValueUpdate: "flatpickrValueUpdate",
    flatpickrOpen: "flatpickrOpen",
    flatpickrClose: "flatpickrClose",
    flatpickrMonthChange: "flatpickrMonthChange",
    flatpickrYearChange: "flatpickrYearChange",
    flatpickrDayCreate: "flatpickrDayCreate"
  },
  exportAs: ["mwlFlatpickr"],
  features: [\u0275\u0275ProvidersFeature([FLATPICKR_CONTROL_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlFlatpickr]",
      providers: [FLATPICKR_CONTROL_VALUE_ACCESSOR],
      exportAs: "mwlFlatpickr"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: FlatpickrDefaults
    }, {
      type: Renderer2
    }];
  }, {
    options: [{
      type: Input
    }],
    altFormat: [{
      type: Input
    }],
    altInput: [{
      type: Input
    }],
    altInputClass: [{
      type: Input
    }],
    allowInput: [{
      type: Input
    }],
    allowInvalidPreload: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    ariaDateFormat: [{
      type: Input
    }],
    clickOpens: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    defaultHour: [{
      type: Input
    }],
    defaultMinute: [{
      type: Input
    }],
    defaultSeconds: [{
      type: Input
    }],
    disable: [{
      type: Input
    }],
    disableMobile: [{
      type: Input
    }],
    enable: [{
      type: Input
    }],
    enableTime: [{
      type: Input
    }],
    enableSeconds: [{
      type: Input
    }],
    formatDate: [{
      type: Input
    }],
    hourIncrement: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    minuteIncrement: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nextArrow: [{
      type: Input
    }],
    noCalendar: [{
      type: Input
    }],
    now: [{
      type: Input
    }],
    parseDate: [{
      type: Input
    }],
    prevArrow: [{
      type: Input
    }],
    shorthandCurrentMonth: [{
      type: Input
    }],
    showMonths: [{
      type: Input
    }],
    static: [{
      type: Input
    }],
    time24hr: [{
      type: Input
    }],
    weekNumbers: [{
      type: Input
    }],
    getWeek: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    plugins: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    convertModelValue: [{
      type: Input
    }],
    monthSelectorType: [{
      type: Input
    }],
    ignoredFocusElements: [{
      type: Input
    }],
    flatpickrReady: [{
      type: Output
    }],
    flatpickrChange: [{
      type: Output
    }],
    flatpickrValueUpdate: [{
      type: Output
    }],
    flatpickrOpen: [{
      type: Output
    }],
    flatpickrClose: [{
      type: Output
    }],
    flatpickrMonthChange: [{
      type: Output
    }],
    flatpickrYearChange: [{
      type: Output
    }],
    flatpickrDayCreate: [{
      type: Output
    }],
    onTouchedFn: [{
      type: HostListener,
      args: ["blur"]
    }],
    inputChanged: [{
      type: HostListener,
      args: ["input"]
    }]
  });
})();
var USER_DEFAULTS = new InjectionToken("flatpickr defaults");
function defaultsFactory(userDefaults) {
  const defaults2 = new FlatpickrDefaults();
  Object.assign(defaults2, userDefaults);
  return defaults2;
}
var FlatpickrModule = class _FlatpickrModule {
  static forRoot(userDefaults = {}) {
    return {
      ngModule: _FlatpickrModule,
      providers: [{
        provide: USER_DEFAULTS,
        useValue: userDefaults
      }, {
        provide: FlatpickrDefaults,
        useFactory: defaultsFactory,
        deps: [USER_DEFAULTS]
      }]
    };
  }
};
FlatpickrModule.\u0275fac = function FlatpickrModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FlatpickrModule)();
};
FlatpickrModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: FlatpickrModule
});
FlatpickrModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrModule, [{
    type: NgModule,
    args: [{
      declarations: [FlatpickrDirective],
      exports: [FlatpickrDirective]
    }]
  }], null, null);
})();

// src/app/shared/components/dashboard-header/dashboard-header.component.ts
var DashboardHeaderComponent = class _DashboardHeaderComponent {
  constructor() {
    this.basicDemoValue = "";
  }
  static {
    this.\u0275fac = function DashboardHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardHeaderComponent, selectors: [["app-dashboard-header"]], inputs: { title: "title" }, decls: 11, vars: 2, consts: [[1, "page-header", "dashboard-pageheader"], [1, "page-title", "my-auto"], [1, "breadcrumb", "mb-0"], [1, "form-group"], [1, "input-group", "border", "br-7"], [1, "input-group-text", "text-muted", "border-0", "bg-white"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "header-icon2"], ["d", "M5 8h14V6H5z", "opacity", ".3"], ["d", "M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z"], ["type", "text", "id", "page-date", "placeholder", "Choose date", "mwlFlatpickr", "", 1, "form-control", "border-0", 3, "ngModelChange", "ngModel"]], template: function DashboardHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 6);
        \u0275\u0275element(8, "path", 7)(9, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function DashboardHeaderComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.basicDemoValue, $event) || (ctx.basicDemoValue = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.basicDemoValue);
      }
    }, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, FlatpickrDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardHeaderComponent, { className: "DashboardHeaderComponent", filePath: "src\\app\\shared\\components\\dashboard-header\\dashboard-header.component.ts", lineNumber: 8 });
})();

// src/app/shared/components/sidebar/sidebar.ts
function checkHoriMenu() {
  let menuNav = document.querySelector(".main-menu");
  let mainContainer1 = document.querySelector(".main-sidebar");
  let slideLeft = document.querySelector(".slide-left");
  let slideRight = document.querySelector(".slide-right");
  let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0]));
  let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginRight.split("px")[0]));
  let check = menuNav.scrollWidth - mainContainer1.offsetWidth;
  if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
    slideRight.classList.remove("d-none");
    slideLeft.classList.add("d-none");
  } else {
    slideRight.classList.add("d-none");
    slideLeft.classList.add("d-none");
    menuNav.style.marginLeft = "0px";
    menuNav.style.marginRight = "0px";
  }
  if (!(document.querySelector("html")?.getAttribute("dir") === "rtl")) {
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (Math.abs(check) < Math.abs(marginLeftValue)) {
        menuNav.style.marginLeft = -check + "px";
        slideLeft.classList.remove("d-none");
        slideRight.classList.add("d-none");
      }
    }
    if (marginLeftValue == 0) {
      slideLeft.classList.add("d-none");
    } else {
      slideLeft.classList.remove("d-none");
    }
  } else {
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (Math.abs(check) < Math.abs(marginRightValue)) {
        menuNav.style.marginRight = -check + "px";
        slideLeft.classList.remove("d-none");
        slideRight.classList.add("d-none");
      }
    }
    if (marginRightValue == 0) {
      slideLeft.classList.add("d-none");
    } else {
      slideLeft.classList.remove("d-none");
    }
  }
  if (marginLeftValue != 0 || marginRightValue != 0) {
    slideLeft.classList.remove("d-none");
  }
}

// src/app/shared/services/nav.service.ts
var NavService = class _NavService {
  constructor(router) {
    this.router = router;
    this.unsubscriber = new Subject();
    this.screenWidth = new BehaviorSubject(window.innerWidth);
    this.search = false;
    this.language = false;
    this.megaMenu = false;
    this.levelMenu = false;
    this.megaMenuColapse = window.innerWidth < 1199 ? true : false;
    this.collapseSidebar = window.innerWidth < 991 ? true : false;
    this.horizontal = window.innerWidth < 991 ? false : true;
    this.fullScreen = false;
    this.MENUITEMS = [
      // // Dashboard
      // {
      //   title: 'Dashboards',
      //   icon: ` <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      //   type: 'sub',
      //   selected: false,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/dashboards/sales',
      //       title: 'Sales Dashboard',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/dashboards/analytics',
      //       title: 'Analytics Dashboard',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/dashboards/projects',
      //       title: 'Projects Dashboard',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/dashboards/hr',
      //       title: 'Hr Dashboard',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/dashboards/crypto',
      //       title: 'Crypto Dashboard',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Apps',
      //   type: 'sub',
      //   icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/apps/fullcalender',
      //       title: 'Full Calender',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/apps/gallery',
      //       title: 'Gallery',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/apps/sweetalerts',
      //       title: 'Sweetalerts',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       title: 'Chat',
      //       type: 'sub',
      //       badgeClass: 'secondary',
      //       badgeText: 'secondary',
      //       badgeValue: 'New',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/apps/chat/chat-01',
      //           title: 'Chat 01',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/chat/chat-02',
      //           title: 'Chat 02',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/chat/chat-03',
      //           title: 'Chat 03',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Contact',
      //       type: 'sub',
      //       badgeClass: 'badge bg-secondary-transparent',
      //       badgeValue: 'New',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/apps/contact/contacts',
      //           title: 'Contacts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/contact/contacts-02',
      //           title: 'Contact 02',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/contact/contacts-03',
      //           title: 'Contact 03',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'File Manager',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/apps/filemanager/filemanager',
      //           title: 'File manager',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           title: 'File Manager List',
      //           type: 'sub',
      //           active: false,
      //           dirchange: false,
      //           selected: false,
      //           children: [
      //             {
      //               path: '/apps/filemanager/filemanager-list/file-list-01',
      //               title: 'File List 01',
      //               type: 'link',
      //               dirchange: false,
      //             },
      //             {
      //               path: '/apps/filemanager/filemanager-list/file-list-02',
      //               title: 'File List 02',
      //               type: 'link',
      //               dirchange: false,
      //             },
      //           ],
      //         },
      //         {
      //           path: '/apps/filemanager/filemanager-details',
      //           title: 'File manager Details',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Todo List',
      //       type: 'sub',
      //       badgeClass: 'badge bg-secondary-transparent',
      //       badgeValue: 'New',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/apps/todo-list/todo-list',
      //           title: 'Todo List 01',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/todo-list/todo-list-02',
      //           title: 'Todo List 02',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/todo-list/todo-list-03',
      //           title: 'Todo List 03',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/todo-list/todo-list-04',
      //           title: 'Todo List 04',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'User List',
      //       type: 'sub',
      //       badgeClass: 'badge bg-secondary-transparent',
      //       badgeValue: 'New',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/apps/user-list/userlist',
      //           title: 'User List 01',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/user-list/userlist-02',
      //           title: 'User List 02',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/user-list/userlist-03',
      //           title: 'User List 03',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/apps/user-list/userlist-04',
      //           title: 'User List 04',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   title: 'Widgets',
      //   icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
      //   type: 'sub',
      //   selected: false,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/widgets/widgets',
      //       title: 'Widgets',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/widgets/chart-widgets',
      //       title: 'Chart Widgets',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Forms',
      //   type: 'sub',
      //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       title: 'Form Elements',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/forms/form-elements/inputs',
      //           title: 'Inputs',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/forms/form-elements/checks-radios',
      //           title: 'Check & Radios',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/forms/form-elements/inputgroup',
      //           title: 'Input Group',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/forms/form-elements/formselect',
      //           title: 'Form Select',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/forms/form-elements/range-slider',
      //           title: 'Range Slider',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/forms/form-elements/inputmask',
      //           title: 'Input Mask',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/forms/form-elements/file-uploads',
      //           title: 'File Uploads',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/forms/form-elements/datetimepickers',
      //           title: 'Date Time Picker',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/forms/form-elements/color-pickers',
      //           title: 'Color Pickers',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       path: '/forms/floating-labels',
      //       title: 'Floating Labels',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/forms/form-layouts',
      //       title: 'Form Layouts',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/forms/form-wizard',
      //       title: 'Form Wizard',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       title: 'Form Editors',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/forms/form-editor/angular-editor',
      //           title: 'Angular Editor',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       path: '/forms/validation',
      //       title: 'Validation',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/forms/select2',
      //       title: 'Select2',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Charts',
      //   type: 'sub',
      //   icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       title: 'Apex Charts',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/charts/apex-charts/line-charts',
      //           title: 'Line Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/area-charts',
      //           title: 'Area Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/column-charts',
      //           title: 'Column Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/bar-charts',
      //           title: 'Bar Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/mixedcharts',
      //           title: 'Mixed Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/rangeareacharts',
      //           title: 'Range Area Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/timelinecharts',
      //           title: 'TimeLine Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/candlestickcharts',
      //           title: 'CandleStick Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/boxplotcharts',
      //           title: 'BoxPlot Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/bubblecharts',
      //           title: 'Bubble charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/scattercharts',
      //           title: 'Scatter Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/heatmapcharts',
      //           title: 'Heatmap Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/treemapcharts',
      //           title: 'TreeMap Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/piecharts',
      //           title: 'Pie Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/radialbarcharts',
      //           title: 'Radialbar Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/radarcharts',
      //           title: 'Radar Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/charts/apex-charts/polarareacharts',
      //           title: 'Polararea Charts',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       path: '/charts/chartjs',
      //       title: 'Chartjs Charts',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/charts/echart',
      //       title: 'Echart Charts',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Tables',
      //   type: 'sub',
      //   icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      //   active: false,
      //   selected: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/tables/tables',
      //       title: 'Tables',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/tables/angular-material-tables',
      //       title: 'Angular material Tables',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/tables/ngx-easy-table',
      //       title: 'Ngx Easy Table',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Maps',
      //   type: 'sub',
      //   icon: `<svg class="feather feather-map-pin side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
      //   active: false,
      //   selected: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/maps/leafletmaps',
      //       title: 'Leaflet Maps',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/maps/google-map',
      //       title: 'Google Map',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Elements',
      //   type: 'sub',
      //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/ui-elements/alerts',
      //       title: 'Alerts',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/badge',
      //       title: 'Badge',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/breadcrumb',
      //       title: 'Breadcrumb',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/buttons',
      //       title: 'Buttons',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/button-group',
      //       title: 'Button Group',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/cards',
      //       title: 'cards',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/dropdowns',
      //       title: 'DropDowns',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/images&figures',
      //       title: 'Images & Figures',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/list-group',
      //       title: 'List Group',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/nav-tabs',
      //       title: 'Navs & Tabs',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/objectfit',
      //       title: 'Object Fit',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/pagination',
      //       title: 'Pagination',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/popovers',
      //       title: 'Popovers',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/progress',
      //       title: 'Progress',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/spinners',
      //       title: 'Spinners',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/toasts',
      //       title: 'Toasts',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/tooltips',
      //       title: 'Tooltips',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/ui-elements/typography',
      //       title: 'Typography',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
      //   path: 'icons',
      //   title: 'Icons',
      //   type: 'link',
      //   dirchange: false,
      //   nochild: true,
      // },
      // {
      //   title: 'Advanced Ui',
      //   type: 'sub',
      //   icon: `<svg class="feather feather-archive side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>`,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/advanced-ui/accordions',
      //       title: 'Accordions & Collapse',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/carousel',
      //       title: 'Carousel',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/draggable-cards',
      //       title: 'Draggable Cards',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/modals-closes',
      //       title: 'Models & Closes',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/navbar',
      //       title: 'Navbar',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/offcanvas',
      //       title: 'OffCanvas',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/placeholders',
      //       title: 'placeholders',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/rating',
      //       title: 'Rating',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/scrollspy',
      //       title: 'Scrollspy',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/swiperjs',
      //       title: 'SwiperJs',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/treeview',
      //       title: 'Treeview',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/ribbons',
      //       title: 'Ribbons',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/counters',
      //       title: 'Counters',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/advanced-ui/loaders',
      //       title: 'Loaders',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Pages',
      //   type: 'sub',
      //   active: false,
      //   selected: false,
      //   dirchange: false,
      //   icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`,
      //   children: [
      //     {
      //       path: '/pages/about-us',
      //       title: 'About Us',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       title: 'Blog',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       selected: false,
      //       children: [
      //         {
      //           title: 'Blog',
      //           type: 'sub',
      //           dirchange: false,
      //           children: [
      //             {
      //               path: '/pages/blog/blog/blog-01',
      //               title: 'Blog-01',
      //               type: 'link',
      //               dirchange: false,
      //             },
      //             {
      //               path: '/pages/blog/blog/blog-02',
      //               title: 'Blog-02',
      //               type: 'link',
      //               dirchange: false,
      //             },
      //             {
      //               path: '/pages/blog/blog/blog-03',
      //               title: 'Blog-03',
      //               type: 'link',
      //               dirchange: false,
      //             },
      //           ],
      //         },
      //         {
      //           path: '/pages/blog/blog-details',
      //           title: 'Blog Details',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/blog/create-blog',
      //           title: 'Create Blog',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Ecommerce',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/pages/ecommerce/addproduct',
      //           title: 'Add Products',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/cart',
      //           title: 'Cart',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/checkout',
      //           title: 'Checkout',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/edit-products',
      //           title: 'Edit products',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/orderdetails',
      //           title: 'Order Details',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/orders',
      //           title: 'Orders',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/products',
      //           title: 'Products',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/product-details',
      //           title: 'Product Details',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/products-list',
      //           title: 'Products List',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/ecommerce/wishlist',
      //           title: 'Wishlist',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Email',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/pages/email/mail-inbox',
      //           title: 'Mail Inbox',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/email/mail-read',
      //           title: 'Mail Read',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/email/mail-settings',
      //           title: 'mail Settings',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       path: '/pages/emptypage',
      //       title: 'Empty',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/pages/faqs',
      //       title: "FAQ's",
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       title: 'Invoice',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/pages/invoice/create-invoice',
      //           title: 'Create Invoice',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/invoice/edit-invoice',
      //           title: 'Edit Invoice',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           title: 'Invoice Details',
      //           type: 'sub',
      //           dirchange: false,
      //           children: [
      //             {
      //               path: '/pages/invoice/invoice-details/invoice-01',
      //               title: 'Invoice-01',
      //               type: 'link',
      //               dirchange: false,
      //             },
      //             {
      //               path: '/pages/invoice/invoice-details/invoice-02',
      //               title: 'Invoice-02',
      //               type: 'link',
      //               dirchange: false,
      //             },
      //             {
      //               path: '/pages/invoice/invoice-details/invoice-03',
      //               title: 'Invoice-03',
      //               type: 'link',
      //               dirchange: false,
      //             },
      //           ],
      //         },
      //         {
      //           path: '/pages/invoice/invoice-list',
      //           title: 'Invoice List',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Pricing',
      //       type: 'sub',
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/pages/pricing/pricing-1',
      //           title: 'Pricing-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/pricing/pricing-2',
      //           title: 'Pricing-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/pricing/pricing-3',
      //           title: 'Pricing-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Profile',
      //       type: 'sub',
      //       dirchange: false,
      //       children: [
      //         {
      //           path: '/pages/profile/profile-1',
      //           title: 'Profile-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/profile/profile-2',
      //           title: 'Profile-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/profile/profile-3',
      //           title: 'Profile-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: '/pages/profile/edit-profile',
      //           title: 'Edit Profile',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       path: '/pages/reviews',
      //       title: 'Reviews',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/pages/team',
      //       title: 'Team',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/pages/terms-conditions',
      //       title: 'Terms & Conditions',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/pages/timeline',
      //       title: 'Timeline',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Nested Menu',
      //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
      //   type: 'sub',
      //   active: false,
      //   children: [
      //     {
      //       title: 'Nested-1',
      //       dirchange: false,
      //       type: 'empty',
      //       active: false,
      //       selected: false,
      //       path: '/nested-menu/nested-1',
      //     },
      //     {
      //       title: 'Nested-2',
      //       type: 'sub',
      //       active: false,
      //       children: [
      //         {
      //           title: 'Nested-2.1',
      //           type: 'empty',
      //           active: false,
      //         },
      //         {
      //           title: 'Nested-2.2',
      //           type: 'empty',
      //           active: false,
      //           // children: [
      //           //   {
      //           //     title: 'Nested-2.2.1',
      //           //     type: 'empty',
      //           //     active: false,
      //           //   },
      //           //   {
      //           //     title: 'Nested-2.2.2',
      //           //     type: 'empty',
      //           //     active: false,
      //           //   },
      //           // ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   title: 'Accounts',
      //   type: 'sub',
      //   icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      //   selected: false,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/accounts/coming-soon',
      //       title: 'Coming-Soon',
      //       dirchange: false,
      //       type: 'link',
      //       active: false,
      //       selected: false,
      //     },
      //     {
      //       path: '/accounts/under-maintenance',
      //       title: 'Under Maintenance',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       title: 'Create Password',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: 'accounts/create-password/create-password-1',
      //           title: 'Create Password-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/create-password/create-password-2',
      //           title: 'Create Password-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/create-password/create-password-3',
      //           title: 'Create Password-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Lock Screen',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: 'accounts/lock-screen/lock-screen-1',
      //           title: 'Lock Screen-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/lock-screen/lock-screen-2',
      //           title: 'Lock Screen-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/lock-screen/lock-screen-3',
      //           title: 'Lock Screen-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Reset Password',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: 'accounts/reset-password/reset-password-1',
      //           title: 'Reset Password-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/reset-password/reset-password-2',
      //           title: 'Reset Password-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/reset-password/reset-password-3',
      //           title: 'Reset Password-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Log in',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: 'accounts/log-in/log-in-1',
      //           title: 'log In-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/log-in/log-in-2',
      //           title: 'Log In-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/log-in/log-in-3',
      //           title: 'Log In-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Forgot Password',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: 'accounts/forgot-password/forgot-password-1',
      //           title: 'Forgot Password-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/forgot-password/forgot-password-2',
      //           title: 'Forgot Password-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/forgot-password/forgot-password-3',
      //           title: 'Forgot Password-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Register',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: 'accounts/register/register-1',
      //           title: 'Register-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/register/register-2',
      //           title: 'Register-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/register/register-3',
      //           title: 'Register-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Two Step Verification',
      //       type: 'sub',
      //       active: false,
      //       dirchange: false,
      //       children: [
      //         {
      //           path: 'accounts/twostep-verification/twostep-verification-1',
      //           title: 'Two Step Verification-1',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/twostep-verification/twostep-verification-2',
      //           title: 'Two Step Verification-2',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //         {
      //           path: 'accounts/twostep-verification/twostep-verification-3',
      //           title: 'Two Step Verification-3',
      //           type: 'link',
      //           dirchange: false,
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   title: 'Error Pages',
      //   type: 'sub',
      //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: 'error/error400',
      //       title: '400',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: 'error/error401',
      //       title: '401',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: 'error/error403',
      //       title: '403',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: 'error/error404',
      //       title: '404',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: 'error/error500',
      //       title: '500',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: 'error/error503',
      //       title: '503',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      // {
      //   title: 'Utilites',
      //   type: 'sub',
      //   icon: `<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
      //   active: false,
      //   dirchange: false,
      //   children: [
      //     {
      //       path: '/utilities/avatars',
      //       title: 'Avatars',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/borders',
      //       title: 'Borders',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/break-point',
      //       title: 'Breakpoints',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/colors',
      //       title: 'Colors',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/columns',
      //       title: 'Columns',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/flex',
      //       title: 'Flex',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/gutters',
      //       title: 'Gutters',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/helper',
      //       title: 'Helpers',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/position',
      //       title: 'Position',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //     {
      //       path: '/utilities/additional-content',
      //       title: 'Additional-content',
      //       type: 'link',
      //       dirchange: false,
      //     },
      //   ],
      // },
      {
        title: "Mantenedores",
        type: "sub",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
        active: false,
        dirchange: false,
        children: [
          {
            path: "registro/mantenedor/producto",
            title: "Instrumentos Financieros",
            type: "link",
            dirchange: false
          },
          {
            path: "registro/mantenedor/factor",
            title: "Factores de Riesgo",
            type: "link",
            dirchange: false
          },
          {
            path: "registro/mantenedor/atributo-financiero",
            title: "Atributos Financieros",
            type: "link",
            dirchange: false
          },
          {
            path: "registro/mantenedor/portafolio",
            title: "Portafolios",
            type: "link",
            dirchange: false
          }
        ]
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`,
        path: "registro/portafolio/dashboard-portafolio",
        title: "Portafolio",
        type: "link",
        dirchange: false,
        nochild: true
      },
      {
        title: "Cargas Diarias",
        type: "sub",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
        active: false,
        dirchange: false,
        children: [
          {
            path: "registro/cargas/factores",
            title: "Factores de Riesgo",
            type: "link",
            dirchange: false
          }
        ]
      },
      {
        title: "Valorizaci\xF3n",
        type: "sub",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
        active: false,
        dirchange: false,
        children: [
          {
            path: "registro/valorizacion/ejecucion",
            title: "Ejecuci\xF3n de valorizaciones",
            type: "link",
            dirchange: false
          },
          {
            path: "registro/valorizacion/consulta",
            title: "Consulta de valorizaciones",
            type: "link",
            dirchange: false
          }
        ]
      },
      {
        title: "Banca",
        type: "sub",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="side-menu__icon"><line x1="3" y1="21" x2="21" y2="21"></line><line x1="5" y1="21" x2="5" y2="10"></line><line x1="10" y1="21" x2="10" y2="10"></line><line x1="14" y1="21" x2="14" y2="10"></line><line x1="19" y1="21" x2="19" y2="10"></line><polygon points="12 3 21 8 3 8 12 3"></polygon></svg>`,
        active: false,
        dirchange: false,
        children: [
          {
            title: "Riesgo de Mercado",
            type: "sub",
            active: false,
            dirchange: false,
            children: [
              {
                path: "registro/var/ejecutar",
                title: "Ejecuci\xF3n de VaR",
                type: "link",
                dirchange: false
              },
              {
                path: "registro/var/consulta",
                title: "Consulta de VaR",
                type: "link",
                dirchange: false
              },
              {
                path: "registro/var/backtesting",
                title: "Backtesting del VaR",
                type: "link",
                dirchange: false
              },
              {
                path: "registro/stress-testing/ejecutar",
                title: "Ejecuci\xF3n de Stress Testing",
                type: "link",
                dirchange: false,
                badgeClass: "badge bg-secondary-transparent",
                badgeValue: "Beta"
              },
              {
                path: "registro/stress-testing/consulta",
                title: "Consulta de Stress Testing",
                type: "link",
                dirchange: false
              },
              {
                path: "registro/var/anexo9",
                title: "Anexo N\xB0 9 (SBS)",
                type: "link",
                dirchange: false
              }
            ]
          }
        ]
      }
    ];
    this.items = new BehaviorSubject(this.MENUITEMS);
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize").pipe(debounceTime(1e3), takeUntil(this.unsubscriber)).subscribe((evt) => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerWidth < 991) {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      }
      if (evt.target.innerWidth < 1199) {
        this.megaMenuColapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }
  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }
  setScreenWidth(width) {
    this.screenWidth.next(width);
  }
  static {
    this.\u0275fac = function NavService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavService)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavService, factory: _NavService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/services/menu-lateral.service.ts
var MenuLateralService = class _MenuLateralService {
  constructor() {
    this.clave = "menuLateralModo";
    this.anchoEscritorio = 992;
    this._modo = this.leer();
  }
  get modo() {
    return this._modo;
  }
  get fijo() {
    return this._modo === "fijo";
  }
  /** Aplica el modo guardado al cargar la app. */
  iniciar() {
    this.aplicar();
  }
  alternar() {
    this.establecer(this.fijo ? "auto" : "fijo");
  }
  establecer(modo) {
    this._modo = modo;
    this.guardar();
    this.aplicar();
  }
  /** Refleja el modo en los atributos que usa el tema. En pantallas pequeñas el menú es un panel que abre el botón del encabezado; al volver a escritorio, el sidebar vuelve a llamar aquí. */
  aplicar() {
    const html = document.documentElement;
    if (html.getAttribute("data-nav-layout") !== "vertical")
      return;
    html.setAttribute("data-vertical-style", "overlay");
    if (window.innerWidth <= this.anchoEscritorio) {
      html.setAttribute("data-toggled", "close");
      return;
    }
    html.setAttribute("data-toggled", this.fijo ? "" : "icon-overlay-close");
    html.removeAttribute("data-icon-overlay");
  }
  leer() {
    try {
      return localStorage.getItem(this.clave) === "auto" ? "auto" : "fijo";
    } catch {
      return "fijo";
    }
  }
  guardar() {
    try {
      localStorage.setItem(this.clave, this._modo);
    } catch {
    }
  }
  static {
    this.\u0275fac = function MenuLateralService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenuLateralService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuLateralService, factory: _MenuLateralService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/sidebar/sidebar.component.ts
var _c03 = (a0) => ({ "sticky-pin": a0 });
var _c13 = () => ["/dashboards/sales"];
var _c22 = () => ({ display: "block" });
var _c3 = (a0, a1, a2, a3) => ({ slide__category: a0, "slide has-sub": a1, open: a2, active: a3 });
var _c4 = (a0) => [a0];
var _c5 = (a0) => ({ active: a0 });
var _c6 = (a0, a1, a2) => ({ active: a0, "double-menu-active": a1, "force-left": a2 });
var _c7 = (a0) => ({ display: a0 });
var _c8 = (a0, a1) => ({ "has-sub": a0, open: a1 });
var _c9 = () => ({ exact: true });
var _c10 = (a0) => ({ "force-left": a0 });
var _c11 = (a0, a1, a2) => ({ display: a0, right: a1, left: a2 });
var _c122 = (a0) => ({ open: a0 });
function SidebarComponent_For_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuItem_r1.headTitle);
  }
}
function SidebarComponent_For_28_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r2.getSanitizedSVG(menuItem_r1.icon), \u0275\u0275sanitizeHtml);
  }
}
function SidebarComponent_For_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275listener("click", function SidebarComponent_For_28_Conditional_3_Template_a_click_0_listener($event) {
      let tmp_13_0;
      \u0275\u0275restoreView(_r2);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_13_0 = menuItem_r1.path) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ""));
    });
    \u0275\u0275template(1, SidebarComponent_For_28_Conditional_3_Conditional_1_Template, 1, 1, "span", 56);
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !menuItem_r1.type ? null : \u0275\u0275pureFunction1(7, _c4, menuItem_r1.path));
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", menuItem_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", menuItem_r1.badgeClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuItem_r1.badgeValue);
  }
}
function SidebarComponent_For_28_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r2.getSanitizedSVG(menuItem_r1.icon), \u0275\u0275sanitizeHtml);
  }
}
function SidebarComponent_For_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275listener("click", function SidebarComponent_For_28_Conditional_4_Template_a_click_0_listener($event) {
      let tmp_13_0;
      \u0275\u0275restoreView(_r4);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_13_0 = menuItem_r1.path) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ""));
    });
    \u0275\u0275template(1, SidebarComponent_For_28_Conditional_4_Conditional_1_Template, 1, 1, "span", 56);
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5, "hot");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", menuItem_r1.title, " ");
  }
}
function SidebarComponent_For_28_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r2.getSanitizedSVG(menuItem_r1.icon), \u0275\u0275sanitizeHtml);
  }
}
function SidebarComponent_For_28_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("click", function SidebarComponent_For_28_Conditional_5_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleNavActive($event, menuItem_r1));
    });
    \u0275\u0275template(1, SidebarComponent_For_28_Conditional_5_Conditional_1_Template, 1, 1, "span", 56);
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "i", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", menuItem_r1.type ? null : \u0275\u0275pureFunction1(8, _c4, menuItem_r1.path))("ngClass", \u0275\u0275pureFunction1(10, _c5, menuItem_r1.selected));
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", menuItem_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", menuItem_r1.badgeClass, " ms-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuItem_r1.badgeValue);
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275listener("click", function SidebarComponent_For_28_Conditional_6_For_5_Conditional_1_Template_a_click_0_listener($event) {
      let tmp_24_0;
      \u0275\u0275restoreView(_r6);
      const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_24_0 = childrenItem_r7.path) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : ""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !childrenItem_r7.type ? null : \u0275\u0275pureFunction1(3, _c4, childrenItem_r7.path))("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenItem_r7.title, " ");
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275listener("click", function SidebarComponent_For_28_Conditional_6_For_5_Conditional_2_Template_a_click_0_listener($event) {
      let tmp_24_0;
      \u0275\u0275restoreView(_r8);
      const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_24_0 = childrenItem_r7.path) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : ""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenItem_r7.title, " ");
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275listener("click", function SidebarComponent_For_28_Conditional_6_For_5_Conditional_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleNavActive($event, childrenItem_r7));
    });
    \u0275\u0275elementStart(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c5, childrenItem_r7.selected))("routerLink", childrenItem_r7.type ? null : \u0275\u0275pureFunction1(5, _c4, childrenItem_r7.path));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(childrenItem_r7.title);
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !childrenSubItem_r10.type ? null : \u0275\u0275pureFunction1(3, _c4, childrenSubItem_r10.path))("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenSubItem_r10.title, " ");
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenSubItem_r10.title, " ");
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275listener("click", function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const childrenSubItem_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleNavActive($event, childrenSubItem_r10));
    });
    \u0275\u0275elementStart(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c5, childrenSubItem_r10.active))("routerLink", childrenSubItem_r10.type ? null : \u0275\u0275pureFunction1(5, _c4, childrenSubItem_r10.path));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(childrenSubItem_r10.title);
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem1_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !childrenSubItem1_r12.type ? null : \u0275\u0275pureFunction1(3, _c4, childrenSubItem1_r12.path))("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenSubItem1_r12.title, " ");
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem1_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", childrenSubItem1_r12.title, " ");
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 73);
    \u0275\u0275template(1, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_4_For_2_Conditional_1_Template, 2, 6, "a", 65)(2, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_4_For_2_Conditional_2_Template, 2, 1, "a", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem1_r12 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c122, childrenSubItem1_r12.active));
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem1_r12.type === "link" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem1_r12.type === "empty" ? 2 : -1);
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 72);
    \u0275\u0275repeaterCreate(1, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_4_For_2_Template, 3, 5, "li", 73, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r10 = \u0275\u0275nextContext().$implicit;
    const childrenItem_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c10, childrenItem_r7.dirchange))("ngStyle", \u0275\u0275pureFunction1(4, _c7, childrenSubItem_r10.active ? "block" : "none"));
    \u0275\u0275advance();
    \u0275\u0275repeater(childrenSubItem_r10.children);
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 71);
    \u0275\u0275template(1, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_1_Template, 2, 6, "a", 65)(2, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_2_Template, 2, 1, "a", 51)(3, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_3_Template, 4, 7, "a", 66)(4, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Conditional_4_Template, 3, 6, "ul", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenSubItem_r10 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c122, childrenSubItem_r10.active));
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem_r10.type === "link" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem_r10.type === "empty" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem_r10.type === "sub" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenSubItem_r10.children ? 4 : -1);
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 67);
    \u0275\u0275repeaterCreate(1, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_For_2_Template, 5, 7, "li", 71, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c10, childrenItem_r7.dirchange))("ngStyle", \u0275\u0275pureFunction3(4, _c11, childrenItem_r7.active ? "block" : "none", ctx_r2.localdata["dir"] == "rtl" ? "auto" : "", ctx_r2.localdata["dir"] == "rtl" ? "100%" : ""));
    \u0275\u0275advance();
    \u0275\u0275repeater(childrenItem_r7.children);
  }
}
function SidebarComponent_For_28_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 64);
    \u0275\u0275template(1, SidebarComponent_For_28_Conditional_6_For_5_Conditional_1_Template, 2, 6, "a", 65)(2, SidebarComponent_For_28_Conditional_6_For_5_Conditional_2_Template, 2, 1, "a", 51)(3, SidebarComponent_For_28_Conditional_6_For_5_Conditional_3_Template, 4, 7, "a", 66)(4, SidebarComponent_For_28_Conditional_6_For_5_Conditional_4_Template, 3, 8, "ul", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childrenItem_r7 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c5, childrenItem_r7.selected))("ngClass", \u0275\u0275pureFunction2(8, _c8, childrenItem_r7.type === "sub", childrenItem_r7.active));
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenItem_r7.type === "link" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenItem_r7.type === "empty" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenItem_r7.type === "sub" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(childrenItem_r7.children ? 4 : -1);
  }
}
function SidebarComponent_For_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 53)(1, "li", 62)(2, "a", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, SidebarComponent_For_28_Conditional_6_For_5_Template, 5, 11, "li", 64, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c6, menuItem_r1.active, menuItem_r1.active, menuItem_r1.dirchange))("ngStyle", \u0275\u0275pureFunction1(7, _c7, menuItem_r1.active ? "block" : "none"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menuItem_r1.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(menuItem_r1.children);
  }
}
function SidebarComponent_For_28_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMapInterpolate1("side-menu__icon  bx bx-", menuItem_r1.icon, "");
  }
}
function SidebarComponent_For_28_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 74);
    \u0275\u0275listener("click", function SidebarComponent_For_28_Conditional_7_Template_a_click_0_listener($event) {
      let tmp_13_0;
      \u0275\u0275restoreView(_r13);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setNavActive($event, (tmp_13_0 = menuItem_r1.path) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ""));
    });
    \u0275\u0275template(1, SidebarComponent_For_28_Conditional_7_Conditional_1_Template, 1, 3, "i", 75);
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", !menuItem_r1.type ? null : \u0275\u0275pureFunction1(7, _c4, menuItem_r1.path));
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", menuItem_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge bg-", menuItem_r1.badgeClass, " float-end");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuItem_r1.badgeValue);
  }
}
function SidebarComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 48, 0);
    \u0275\u0275template(2, SidebarComponent_For_28_Conditional_2_Template, 2, 1, "span", 49)(3, SidebarComponent_For_28_Conditional_3_Template, 6, 9, "a", 50)(4, SidebarComponent_For_28_Conditional_4_Template, 6, 2, "a", 51)(5, SidebarComponent_For_28_Conditional_5_Template, 7, 12, "a", 52)(6, SidebarComponent_For_28_Conditional_6_Template, 6, 9, "ul", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SidebarComponent_For_28_Conditional_7_Template, 6, 9, "a", 54);
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(7, _c3, menuItem_r1.headTitle, menuItem_r1.title, menuItem_r1.active, menuItem_r1.selected));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(menuItem_r1.headTitle ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.type === "link" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.type === "empty" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.type === "sub" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.children ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menuItem_r1.type === "external" ? 7 : -1);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(navServices, router, renderer, sanitizer, menu) {
    this.navServices = navServices;
    this.router = router;
    this.renderer = renderer;
    this.sanitizer = sanitizer;
    this.menu = menu;
    this.eventTriggered = false;
    this.localdata = localStorage;
    this.options = { autoHide: false, scrollbarMinSize: 100 };
    this.hasParent = false;
    this.hasParentLevel = 0;
    this.scrolled = false;
    this.WindowPreSize = [window.innerWidth];
  }
  getSanitizedSVG(svgContent) {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
  clearNavDropdown() {
    this.menuItems?.forEach((a2) => {
      a2.active = false;
      a2?.children?.forEach((b2) => {
        b2.active = false;
        b2?.children?.forEach((c2) => {
          c2.active = false;
        });
      });
    });
  }
  ngOnInit() {
    let bodyElement = document.querySelector(".main-content");
    bodyElement.onclick = () => {
      if (localStorage.getItem("layoutStyles") == "icontext") {
        document.querySelector("html")?.removeAttribute("data-icon-text");
      }
    };
    this.menuitemsSubscribe$ = this.navServices.items.subscribe((items) => {
      this.menuItems = items;
    });
    this.setNavActive(null, this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setNavActive(null, this.router.url);
      }
    });
    const WindowResize = fromEvent(window, "resize");
    if (WindowResize) {
      this.windowSubscribe$ = WindowResize.subscribe(() => {
        checkHoriMenu();
      });
    }
    if (document.querySelector("html")?.getAttribute("data-nav-layout") == "horizontal" && window.innerWidth >= 992) {
      this.clearNavDropdown();
    }
  }
  // Start of Set menu Active event
  setNavActive(event, currentPath, menuData = this.menuItems) {
    if (event) {
      if (event?.ctrlKey) {
        return;
      }
    }
    let html = document.documentElement;
    if (html.getAttribute("data-nav-style") != "icon-hover" && html.getAttribute("data-nav-style") != "menu-hover") {
      for (const item of menuData) {
        if (item.path === currentPath) {
          item.active = true;
          item.selected = true;
          this.setMenuAncestorsActive(item);
        } else if (!item.active && !item.selected) {
          item.active = false;
          item.selected = false;
        } else {
          this.removeActiveOtherMenus(item);
        }
        if (item.children && item.children.length > 0) {
          this.setNavActive(event, currentPath, item.children);
        }
      }
    }
  }
  getParentObject(obj, childObject) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object" && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
          return obj;
        }
        if (typeof obj[key] === "object") {
          const parentObject = this.getParentObject(obj[key], childObject);
          if (parentObject !== null) {
            return parentObject;
          }
        }
      }
    }
    return null;
  }
  setMenuAncestorsActive(targetObject) {
    const parent2 = this.getParentObject(this.menuItems, targetObject);
    let html = document.documentElement;
    if (parent2) {
      if (this.hasParentLevel > 2) {
        this.hasParent = true;
      }
      parent2.active = true;
      parent2.selected = true;
      this.hasParentLevel += 1;
      this.setMenuAncestorsActive(parent2);
    } else if (!this.hasParent) {
      if (html.getAttribute("data-vertical-style") == "doublemenu") {
        html.setAttribute("data-toggled", "double-menu-open");
      }
    }
  }
  removeActiveOtherMenus(item) {
    if (item) {
      if (Array.isArray(item)) {
        for (const val of item) {
          val.active = false;
          val.selected = false;
        }
      }
      item.active = false;
      item.selected = false;
      if (item.children && item.children.length > 0) {
        this.removeActiveOtherMenus(item.children);
      }
    } else {
      return;
    }
  }
  // Start of Toggle menu event
  toggleNavActive(event, targetObject, menuData = this.menuItems) {
    let html = document.documentElement;
    let element = event.target;
    if (html.getAttribute("data-nav-style") != "icon-hover" && html.getAttribute("data-nav-style") != "menu-hover") {
      for (const item of menuData) {
        if (item === targetObject) {
          if (html.getAttribute("data-vertical-style") == "doublemenu" && item.active) {
            return;
          }
          item.active = !item.active;
          if (item.active) {
            this.closeOtherMenus(menuData, item);
          } else {
            if (html.getAttribute("data-vertical-style") == "doublemenu") {
              html.setAttribute("data-toggled", "double-menu-close");
            }
          }
          this.setAncestorsActive(menuData, item);
        } else if (!item.active) {
          if (html.getAttribute("data-vertical-style") != "doublemenu") {
            item.active = false;
          }
        }
        if (item.children && item.children.length > 0) {
          this.toggleNavActive(event, targetObject, item.children);
        }
      }
      if (targetObject?.children && targetObject.active) {
        if (html.getAttribute("data-vertical-style") == "doublemenu" && html.getAttribute("data-toggled") != "double-menu-open") {
          html.setAttribute("data-toggled", "double-menu-open");
        }
      }
      if (element && html.getAttribute("data-nav-layout") == "horizontal" && (html.getAttribute("data-nav-style") == "menu-click" || html.getAttribute("data-nav-style") == "icon-click")) {
        const listItem = element.closest("li");
        if (listItem) {
          const siblingUL = listItem.querySelector("ul");
          let outterUlWidth = 0;
          let listItemUL = listItem.closest("ul:not(.main-menu)");
          while (listItemUL) {
            listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
            if (listItemUL) {
              outterUlWidth += listItemUL.clientWidth;
            }
          }
          if (siblingUL) {
            let siblingULRect = listItem.getBoundingClientRect();
            if (html.getAttribute("dir") == "rtl") {
              if (siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            } else {
              if (outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0 && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            }
          }
          setTimeout(() => {
            let computedValue = siblingUL.getBoundingClientRect();
            if (computedValue.bottom > window.innerHeight) {
              siblingUL.style.height = window.innerHeight - computedValue.top - 8 + "px !important";
              siblingUL.style.overflow = "auto !important";
            }
          }, 100);
        }
      }
    }
    if (html.getAttribute("data-vertical-style") == "icontext") {
      document.querySelector("html")?.setAttribute("data-icon-text", "open");
    } else {
      document.querySelector("html")?.removeAttribute("data-icon-text");
    }
  }
  setAncestorsActive(menuData, targetObject) {
    let html = document.documentElement;
    const parent2 = this.findParent(menuData, targetObject);
    if (parent2) {
      parent2.active = true;
      if (parent2.active) {
        html.setAttribute("data-toggled", "double-menu-open");
      }
      this.setAncestorsActive(menuData, parent2);
    } else {
      if (html.getAttribute("data-vertical-style") == "doublemenu") {
        html.setAttribute("data-toggled", "double-menu-close");
      }
    }
  }
  closeOtherMenus(menuData, targetObject) {
    for (const item of menuData) {
      if (item !== targetObject) {
        item.active = false;
        if (item.children && item.children.length > 0) {
          this.closeOtherMenus(item.children, targetObject);
        }
      }
    }
  }
  findParent(menuData, targetObject) {
    for (const item of menuData) {
      if (item.children && item.children.includes(targetObject)) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const parent2 = this.findParent(item.children, targetObject);
        if (parent2) {
          return parent2;
        }
      }
    }
    return null;
  }
  // End of Toggle menu event
  HoverToggleInnerMenuFn(event, item) {
    let html = document.documentElement;
    let element = event.target;
    if (element && html.getAttribute("data-nav-layout") == "horizontal" && (html.getAttribute("data-nav-style") == "menu-hover" || html.getAttribute("data-nav-style") == "icon-hover")) {
      const listItem = element.closest("li");
      if (listItem) {
        const siblingUL = listItem.querySelector("ul");
        let outterUlWidth = 0;
        let listItemUL = listItem.closest("ul:not(.main-menu)");
        while (listItemUL) {
          listItemUL = listItemUL.parentElement?.closest("ul:not(.main-menu)");
          if (listItemUL) {
            outterUlWidth += listItemUL.clientWidth;
          }
        }
        if (siblingUL) {
          let siblingULRect = listItem.getBoundingClientRect();
          if (html.getAttribute("dir") == "rtl") {
            if (siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          } else {
            if (outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0 && outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          }
        }
      }
    }
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.menuitemsSubscribe$.unsubscribe();
    this.windowSubscribe$.unsubscribe();
    document.querySelector("html")?.setAttribute("data-vertical-style", "overlay");
    document.querySelector("html")?.setAttribute("data-nav-layout", "vertical");
  }
  leftArrowFn() {
    let slideLeft = document.querySelector(".slide-left");
    let slideRight = document.querySelector(".slide-right");
    let menuNav = document.querySelector(".main-menu");
    let mainContainer1 = document.querySelector(".main-sidebar");
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0]));
    let mainContainer1Width = mainContainer1.offsetWidth;
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (marginRightValue < 0 && !(Math.abs(marginRightValue) < mainContainer1Width)) {
        menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split("px")[0]) + Math.abs(mainContainer1Width) + "px";
        slideRight.classList.remove("d-none");
      } else if (marginRightValue >= 0) {
        menuNav.style.marginInlineStart = "0px";
        slideLeft.classList.add("d-none");
        slideRight.classList.remove("d-none");
      } else {
        menuNav.style.marginInlineStart = "0px";
        slideLeft.classList.add("d-none");
        slideRight.classList.remove("d-none");
      }
    } else {
      menuNav.style.marginInlineStart = "0px";
      slideLeft.classList.add("d-none");
    }
    let element = document.querySelector(".main-menu > .slide.open");
    let element1 = document.querySelector(".main-menu > .slide.open >ul");
    if (element) {
      element.classList.remove("open");
    }
    if (element1) {
      element1.style.display = "none";
    }
  }
  rightArrowFn() {
    let slideLeft = document.querySelector(".slide-left");
    let slideRight = document.querySelector(".slide-right");
    let menuNav = document.querySelector(".main-menu");
    let mainContainer1 = document.querySelector(".main-sidebar");
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0]));
    let check = menuNav.scrollWidth - mainContainer1.offsetWidth;
    let mainContainer1Width = mainContainer1.offsetWidth;
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (Math.abs(check) > Math.abs(marginRightValue)) {
        if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
          mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
          slideRight.classList.add("d-none");
        }
        menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split("px")[0]) - Math.abs(mainContainer1Width) + "px";
        slideLeft.classList.remove("d-none");
      }
    }
    let element = document.querySelector(".main-menu > .slide.open");
    let element1 = document.querySelector(".main-menu > .slide.open >ul");
    if (element) {
      element.classList.remove("open");
    }
    if (element1) {
      element1.style.display = "none";
    }
  }
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = document.querySelectorAll(".side-menu__item");
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach((ele, i2) => {
      const currLink = sections[i2];
      const val = currLink.getAttribute("value");
      const refElement = document.querySelector("#" + val);
      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
          document.querySelector(".nav-scroll")?.classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    });
  }
  onResize(event) {
    this.menuResizeFn();
    this.screenWidth = window.innerWidth;
    if (!this.eventTriggered && this.screenWidth <= 992) {
      document.documentElement?.setAttribute("data-toggled", "close");
      this.eventTriggered = true;
    } else if (this.screenWidth > 992) {
      this.eventTriggered = false;
    }
  }
  menuResizeFn() {
    this.WindowPreSize.push(window.innerWidth);
    if (this.WindowPreSize.length > 2) {
      this.WindowPreSize.shift();
    }
    if (this.WindowPreSize.length > 1) {
      const html = document.documentElement;
      if (this.WindowPreSize[this.WindowPreSize.length - 1] < 992 && this.WindowPreSize[this.WindowPreSize.length - 2] >= 992) {
        html.setAttribute("data-toggled", "close");
      }
      if (this.WindowPreSize[this.WindowPreSize.length - 1] >= 992 && this.WindowPreSize[this.WindowPreSize.length - 2] < 992) {
        this.menu.aplicar();
        document.querySelector("#responsive-overlay")?.classList.remove("active");
      }
    }
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(MenuLateralService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function SidebarComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, \u0275\u0275resolveWindow)("resize", function SidebarComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 62, vars: 13, consts: [["activeMenuItems", ""], ["id", "sidebar", 1, "app-sidebar", "sticky", 3, "ngClass"], [1, "main-sidebar-header"], [1, "header-logo", 3, "routerLink"], ["src", "./assets/images/brand-logos/desktop-logo.png", "alt", "logo", 1, "desktop-logo"], ["src", "./assets/images/brand-logos/toggle-logo.png", "alt", "logo", 1, "toggle-logo"], ["src", "./assets/images/brand-logos/desktop-dark.png", "alt", "logo", 1, "desktop-dark"], ["src", "./assets/images/brand-logos/toggle-dark.png", "alt", "logo", 1, "toggle-dark"], ["src", "./assets/images/brand-logos/desktop-white.png", "alt", "logo", 1, "desktop-white"], ["src", "./assets/images/brand-logos/toggle-white.png", "alt", "logo", 1, "toggle-white"], ["type", "button", 1, "sidebar-pin", 3, "click"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "aria-hidden", "true", "focusable", "false"], ["d", "M14 3.5 20.5 10l-1.6 1.6-1.3-.3-3.1 3.1.4 3.6-1.5 1.5-3.6-3.6L4.5 20.4 3.6 19.5l4.5-4.5-3.6-3.6L6 9.9l3.6.4 3.1-3.1-.3-1.3L14 3.5Z", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linejoin", "round"], ["id", "sidebar-scroll", 1, "main-sidebar"], [1, "app-sidebar__user"], [1, "dropdown", "user-pro-body", "text-center"], [1, "user-pic"], ["alt", "user-img", "src", "./assets/images/faces/16.jpg", 1, "avatar", "avatar-xl", "avatar-rounded", "mb-0"], [1, "user-info", "text-center"], [1, "mb-1", "fw-bold"], [1, "text-muted", "app-sidebar__user-name", "text-sm"], [1, "main-menu-container", "nav", "nav-pills", "flex-column", "sub-open"], ["id", "slide-left", 1, "slide-left", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#7b8191", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"], [1, "main-menu", 3, "ngStyle"], [1, "app-sidebar-help"], ["ngbDropdown", "", 1, "dropdown", "text-center"], [1, "help"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "p-0", "help-dropdown", "my-auto", "d-inline-flex", "align-items-center", "no-caret"], [1, "fw-bold"], [1, "ri-arrow-down-s-line", "ms-2", "lh-1", "op-5"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", "p-3"], [1, "sidebar-dropdown-divider", "pb-3"], [1, "fw-bold", "text-fixed-white"], ["href", "javascript:void(0);", 1, "d-block", "text-fixed-white"], [1, "sidebar-dropdown-divider", "pb-3", "pt-3", "mb-3"], [1, "mb-1"], ["href", "javascript:void(0);", 1, "fw-bold", "text-fixed-white"], ["href", "javascript:void(0);", 1, "text-fixed-white"], [1, "help-icon"], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "nav-link", "icon", "p-0"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "menu-icon"], ["opacity", ".3", "d", "M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z"], ["d", "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z"], [1, "pulse"], ["id", "slide-right", 1, "slide-right", 3, "click"], ["d", "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"], [1, "slide", 3, "ngClass"], [1, "category-name"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "routerLink"], ["href", "javascript:;", 1, "side-menu__item"], [1, "side-menu__item", 3, "routerLink", "ngClass"], [1, "slide-menu", "child1", 3, "ngClass", "ngStyle"], ["target", "_blank", "routerLinkActive", "active", 1, "side-menu__item", 3, "routerLink"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "click", "routerLink"], [1, "iconclick", 3, "innerHTML"], [1, "side-menu__label"], ["href", "javascript:;", 1, "side-menu__item", 3, "click"], [1, "badge", "bg-warning", "ms-2"], [1, "side-menu__item", 3, "click", "routerLink", "ngClass"], [1, "fe", "fe-chevron-right", "side-menu__angle"], [1, "slide", "side-menu__label1"], ["href", "javascript:void(0)"], ["activeMenuItems", "", "appDropdownPosition", "", 1, "slide", "has-sub", 3, "ngClass"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "ngClass", "routerLink"], ["force", "", 1, "slide-menu", "child2", 3, "ngClass", "ngStyle"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "click", "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "click", "ngClass", "routerLink"], [1, ""], ["activeMenuItems", "", "appDropdownPosition", "", 1, "slide", 3, "ngClass"], [1, "slide-menu", "child2", 3, "ngClass", "ngStyle"], ["activeMenuItems", "", 1, "slide", 3, "ngClass"], ["target", "_blank", "routerLinkActive", "active", 1, "side-menu__item", 3, "click", "routerLink"], [3, "class"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 1)(1, "div", 2)(2, "a", 3);
        \u0275\u0275element(3, "img", 4)(4, "img", 5)(5, "img", 6)(6, "img", 7)(7, "img", 8)(8, "img", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 10);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_9_listener() {
          return ctx.menu.alternar();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 11);
        \u0275\u0275element(11, "path", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "overlay-scrollbars", 13)(13, "div", 14)(14, "div", 15)(15, "div", 16);
        \u0275\u0275element(16, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 18)(18, "h5", 19);
        \u0275\u0275text(19, "John Thomson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 20);
        \u0275\u0275text(21, "App Developer");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "nav", 21)(23, "div", 22);
        \u0275\u0275listener("click", function SidebarComponent_Template_div_click_23_listener() {
          return ctx.leftArrowFn();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 23);
        \u0275\u0275element(25, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "ul", 25);
        \u0275\u0275repeaterCreate(27, SidebarComponent_For_28_Template, 8, 12, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 26)(30, "div", 27)(31, "div", 28)(32, "a", 29)(33, "span", 30);
        \u0275\u0275text(34, "Help Info");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 32)(37, "div", 33)(38, "h4", 34);
        \u0275\u0275text(39, "Help");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "a", 35);
        \u0275\u0275text(41, "Knowledge base");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "a", 35);
        \u0275\u0275text(43, "Contact@info.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "a", 35);
        \u0275\u0275text(45, "88 8888 8888");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 36)(47, "p", 37);
        \u0275\u0275text(48, "Your Fax Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "a", 38);
        \u0275\u0275text(50, "88 8888 8888");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "a", 39);
        \u0275\u0275text(52, "Logout");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 40)(54, "a", 41);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 42);
        \u0275\u0275element(56, "path", 43)(57, "path", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(58, "span", 45);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(59, "div", 46);
        \u0275\u0275listener("click", function SidebarComponent_Template_div_click_59_listener() {
          return ctx.rightArrowFn();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(60, "svg", 23);
        \u0275\u0275element(61, "path", 47);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c03, ctx.scrolled));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c13));
        \u0275\u0275advance(7);
        \u0275\u0275classProp("sidebar-pin--activo", ctx.menu.fijo);
        \u0275\u0275attribute("aria-pressed", ctx.menu.fijo)("aria-label", ctx.menu.fijo ? "Men\xFA fijado. Desfijar para mostrar solo iconos" : "Fijar el men\xFA abierto")("title", ctx.menu.fijo ? "Desfijar (solo iconos; se abre al pasar el mouse)" : "Fijar el men\xFA abierto");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("fill-opacity", ctx.menu.fijo ? 1 : 0);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(12, _c22));
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.menuItems);
      }
    }, dependencies: [NgClass, NgStyle, RouterLink, RouterLinkActive, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, OverlayScrollbarsComponent], styles: ["\n\n/*# sourceMappingURL=sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\shared\\components\\sidebar\\sidebar.component.ts", lineNumber: 19 });
})();

// src/app/shared/services/app-state.service.ts
var AppStateService = class _AppStateService {
  constructor(menuLateral) {
    this.menuLateral = menuLateral;
    this.localStorageKey = "Dashtic-ng";
    this.initialState = {
      theme: "light",
      // light, dark
      direction: "ltr",
      // ltr, rtl
      navigationStyles: "vertical",
      // vertical, horizontal
      menuStyles: "",
      // menu-click, menu-hover, icon-click, icon-hover
      layoutStyles: "default",
      // double-menu, detached, icon-overlay, icontext-menu, closed-menu, default-menu
      pageStyles: "regular",
      // regular, classic, modern
      widthStyles: "fullwidth",
      // fullwidth, boxed
      menuPosition: "fixed",
      // fixed, scrollable
      headerPosition: "fixed",
      // fixed, scrollable
      menuColor: "light",
      // light, dark, color, gradient, transparent
      headerColor: "light",
      // light, dark, color, gradient, transparent
      themePrimary: "",
      // '58, 88, 146', '92, 144, 163', '161, 90, 223', '78, 172, 76', '223, 90, 90'
      themeBackground: "",
      backgroundImage: ""
      // bgimg1, bgimg2, bgimg3, bgimg4, bgimg5
    };
    this.stateSubject = new BehaviorSubject(this.initialState);
    this.state$ = this.stateSubject.asObservable();
    const initialState = this.getInitialStateFromLocalStorage();
    this.initializeState();
    this.stateSubject.next(initialState);
  }
  getInitialStateFromLocalStorage() {
    try {
      const storedState = localStorage.getItem(this.localStorageKey);
      if (storedState) {
        return JSON.parse(storedState);
      }
    } catch (error) {
      console.error("Error retrieving initial state from local storage:", error);
    }
    return this.initialState;
  }
  initializeState() {
    const state = __spreadValues({}, this.initialState);
    this.applyDirectionSpecificChanges(state.direction);
    this.stateSubject.next(state);
  }
  updateState(newState) {
    const currentState = this.stateSubject.getValue();
    if (!currentState) {
      this.updateStateAndEmit(newState);
      return;
    }
    if (newState) {
      const updatedState = __spreadValues(__spreadValues({}, currentState), newState);
      this.updateStateAndEmit(updatedState);
    } else {
      this.updateStateAndEmit(currentState);
      return;
    }
  }
  applyThemeBackgroundSpecificChanges(background) {
    let html = document.querySelector("html");
    html?.style.setProperty("--body-bg-rgb", background.main);
    html?.style.setProperty("--body-bg-rgb2", background.secondary);
    html?.style.setProperty("--light-rgb", background.accent);
    html?.style.setProperty("--form-control-bg", `rgba(${background.accent}`);
    html?.style.setProperty("--input-border", background.overlay);
    this.applythemeSpecificChanges(background.theme);
  }
  applyDirectionSpecificChanges(direction) {
    let html = document.querySelector("html");
    html?.setAttribute("dir", direction);
  }
  applythemeSpecificChanges(theme) {
    let html = document.querySelector("html");
    html?.setAttribute("data-theme-mode", theme);
    html?.setAttribute("data-header-styles", theme);
    html?.setAttribute("data-menu-styles", theme);
  }
  applyNavigationStylesSpecificChanges(navigationStyles) {
    let html = document.querySelector("html");
    html?.setAttribute("data-nav-layout", navigationStyles);
    if (navigationStyles == "horizontal") {
      html?.setAttribute("data-nav-style", "menu-click");
      html?.removeAttribute("data-vertical-style");
    }
  }
  applyMenuStylesSpecificChanges(menuStyles) {
    let html = document.querySelector("html");
    html?.setAttribute("data-nav-style", menuStyles);
    html?.setAttribute("data-toggled", menuStyles + "-closed");
    html?.removeAttribute("data-vertical-style");
  }
  applyLayoutStylesSpecificChanges(layoutStyles) {
    let html = document.querySelector("html");
    html?.setAttribute("data-vertical-style", layoutStyles);
    html?.removeAttribute("data-nav-style");
    switch (layoutStyles) {
      case "default":
      case "overlay":
        this.menuLateral.aplicar();
        break;
      case "closed":
        html?.setAttribute("data-toggled", "close-menu-close");
        break;
      case "icontext":
        html?.setAttribute("data-toggled", "icon-text-close");
        break;
      case "detached":
        html?.setAttribute("data-toggled", "detached-close");
        break;
      case "doublemenu":
        html?.setAttribute("data-toggled", "double-menu-open");
        break;
    }
    if (layoutStyles === "icon-text") {
      html?.setAttribute("icon-text", "open");
    } else {
      html?.removeAttribute("icon-text");
    }
  }
  applypageStylesSpecificChanges(pageStyles) {
    let html = document.querySelector("html");
    html?.setAttribute("data-page-style", pageStyles);
  }
  applywidthStylesSpecificChanges(widthStyles) {
    let html = document.querySelector("html");
    html?.setAttribute("data-width", widthStyles);
  }
  applymenuPositionSpecificChanges(menuPosition) {
    let html = document.querySelector("html");
    html?.setAttribute("data-menu-position", menuPosition);
  }
  applyheaderPositionSpecificChanges(headerPosition) {
    let html = document.querySelector("html");
    html?.setAttribute("data-header-position", headerPosition);
  }
  applyheaderColorSpecificChanges(headerColor) {
    let html = document.querySelector("html");
    html?.setAttribute("data-header-styles", headerColor);
  }
  applymenuColorSpecificChanges(menuColor) {
    let html = document.querySelector("html");
    html?.setAttribute("data-menu-styles", menuColor);
  }
  applyPrimarySpecificChanges(primary) {
    let html = document.querySelector("html");
    html?.style.setProperty("--primary-rgb", primary);
  }
  applybackgroundImageSpecificChanges(backgroundImage) {
    let html = document.querySelector("html");
    html?.setAttribute("data-bg-img", backgroundImage);
  }
  applyReset() {
    let html = document.querySelector("html");
    let hassub = document.querySelector(".double-menu-active");
    if (html) {
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
      html?.style.removeProperty("--primary-rgb");
    }
    hassub?.setAttribute("style", "display: block;");
    html?.removeAttribute("data-bg-img");
    html?.setAttribute("data-vertical-style", "overlay");
    this.stateSubject.next(this.initialState);
    this.updateStateAndEmit(this.initialState);
    localStorage.clear();
  }
  updateStateAndEmit(state) {
    const currentState = this.stateSubject.getValue();
    if (state["theme"]) {
      this.applythemeSpecificChanges(state["theme"]);
    }
    if (state["direction"]) {
      this.applyDirectionSpecificChanges(state["direction"]);
    }
    if (state["navigationStyles"]) {
      this.applyNavigationStylesSpecificChanges(state["navigationStyles"]);
    }
    if (state["menuStyles"] && !state["layoutStyles"]) {
      this.applyMenuStylesSpecificChanges(state["menuStyles"]);
    }
    if (state["layoutStyles"] && !state["menuStyles"]) {
      this.applyLayoutStylesSpecificChanges(state["layoutStyles"]);
    }
    if (state["pageStyles"]) {
      this.applypageStylesSpecificChanges(state["pageStyles"]);
    }
    if (state["widthStyles"]) {
      this.applywidthStylesSpecificChanges(state["widthStyles"]);
    }
    if (state["menuPosition"]) {
      this.applymenuPositionSpecificChanges(state["menuPosition"]);
    }
    if (state["headerPosition"]) {
      this.applyheaderPositionSpecificChanges(state["headerPosition"]);
    }
    if (state["themePrimary"]) {
      this.applyPrimarySpecificChanges(state["themePrimary"]);
    }
    if (state["themeBackground"]) {
      this.applyThemeBackgroundSpecificChanges(state["themeBackground"]);
    }
    if (state["headerColor"]) {
      this.applyheaderColorSpecificChanges(state["headerColor"]);
    }
    if (state["menuColor"]) {
      this.applymenuColorSpecificChanges(state["menuColor"]);
    }
    if (state["backgroundImage"]) {
      this.applybackgroundImageSpecificChanges(state["backgroundImage"]);
    }
    this.stateSubject.next(state);
    this.updateLocalStorage(state);
  }
  updateLocalStorage(state) {
    try {
      localStorage.setItem(this.localStorageKey, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving state to local storage:", error);
    }
  }
  static {
    this.\u0275fac = function AppStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppStateService)(\u0275\u0275inject(MenuLateralService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppStateService, factory: _AppStateService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/switcher/switcher.component.ts
function SwitcherComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3, "Theme Color Mode:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21)(6, "div", 22)(7, "label", 23);
    \u0275\u0275text(8, " Light ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 24);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateTheme("light"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 22)(12, "label", 25);
    \u0275\u0275text(13, " Dark ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 26);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateTheme("dark"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 18)(16, "p", 19);
    \u0275\u0275text(17, "Directions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 20)(19, "div", 21)(20, "div", 22)(21, "label", 27);
    \u0275\u0275text(22, " LTR ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 28);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDirection("ltr"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 21)(25, "div", 22)(26, "label", 29);
    \u0275\u0275text(27, " RTL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 30);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDirection("rtl"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 18)(30, "p", 19);
    \u0275\u0275text(31, "Navigation Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20)(33, "div", 31)(34, "div", 22)(35, "label", 32);
    \u0275\u0275text(36, " Vertical ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 33);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_37_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuType("vertical"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 31)(39, "div", 22)(40, "label", 34);
    \u0275\u0275text(41, " Horizontal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 35);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_42_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuType("horizontal"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 36)(44, "p", 19);
    \u0275\u0275text(45, "Vertical & Horizontal Menu Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 37)(47, "div", 21)(48, "div", 22)(49, "label", 38);
    \u0275\u0275text(50, " Menu Click ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 39);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_51_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuStyle("menu-click"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 21)(53, "div", 22)(54, "label", 40);
    \u0275\u0275text(55, " Menu Hover ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 41);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_56_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuStyle("menu-hover"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 21)(58, "div", 22)(59, "label", 42);
    \u0275\u0275text(60, " Icon Click ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 43);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_61_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuStyle("icon-click"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 21)(63, "div", 22)(64, "label", 44);
    \u0275\u0275text(65, " Icon Hover ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 45);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_66_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuStyle("icon-hover"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 46)(68, "p", 19);
    \u0275\u0275text(69, "Sidemenu Layout Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 37)(71, "div", 47)(72, "div", 22)(73, "label", 48);
    \u0275\u0275text(74, " Default Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 49);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_75_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("default"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 47)(77, "div", 22)(78, "label", 50);
    \u0275\u0275text(79, " Closed Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 51);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_80_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("closed"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 47)(82, "div", 22)(83, "label", 52);
    \u0275\u0275text(84, " Icon Text ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "input", 53);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_85_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("icontext"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 47)(87, "div", 22)(88, "label", 54);
    \u0275\u0275text(89, " Icon Overlay ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "input", 55);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_90_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("overlay"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 47)(92, "div", 22)(93, "label", 56);
    \u0275\u0275text(94, " Detached ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "input", 57);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_95_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("detached"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 47)(97, "div", 22)(98, "label", 58);
    \u0275\u0275text(99, " Double Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "input", 59);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_100_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatelayoutStyles("doublemenu"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(101, "div", 18)(102, "p", 19);
    \u0275\u0275text(103, "Page Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 20)(105, "div", 21)(106, "div", 22)(107, "label", 60);
    \u0275\u0275text(108, " Regular ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "input", 61);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_109_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatepageStyles("regular"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(110, "div", 21)(111, "div", 22)(112, "label", 62);
    \u0275\u0275text(113, " Classic ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "input", 63);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_114_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatepageStyles("classic"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(115, "div", 18)(116, "p", 19);
    \u0275\u0275text(117, "Layout Width Styles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 20)(119, "div", 31)(120, "div", 22)(121, "label", 64);
    \u0275\u0275text(122, " Full Width ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "input", 65);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_123_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatewidthStyles("full-width"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(124, "div", 31)(125, "div", 22)(126, "label", 66);
    \u0275\u0275text(127, " Boxed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "input", 67);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_128_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatewidthStyles("boxed"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(129, "div", 18)(130, "p", 19);
    \u0275\u0275text(131, "Menu Positions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 20)(133, "div", 31)(134, "div", 22)(135, "label", 68);
    \u0275\u0275text(136, " Fixed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "input", 69);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_137_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuPosition("fixed"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(138, "div", 31)(139, "div", 22)(140, "label", 70);
    \u0275\u0275text(141, " Scrollable ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "input", 71);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_142_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuPosition("scrollable"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(143, "div", 18)(144, "p", 19);
    \u0275\u0275text(145, "Header Positions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "div", 20)(147, "div", 31)(148, "div", 22)(149, "label", 72);
    \u0275\u0275text(150, " Fixed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "input", 73);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_151_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderPosition("fixed"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(152, "div", 31)(153, "div", 22)(154, "label", 74);
    \u0275\u0275text(155, " Scrollable ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "input", 75);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_12_Template_input_click_156_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderPosition("scrollable"));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["theme"] == "light");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["theme"] == "dark");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["direction"] != "rtl");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["direction"] == "rtl");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["navigationStyles"] != "horizontal");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["navigationStyles"] == "horizontal");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["menuStyles"] == "menu-click");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["menuStyles"] == "menu-hover");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["menuStyles"] == "icon-click");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["menuStyles"] == "icon-hover");
    \u0275\u0275advance(14);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "closed");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "icontext");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "overlay");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "detached");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["layoutStyles"] == "doublemenu");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["pageStyles"] != "classic");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["pageStyles"] == "classic");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["widthStyles"] != "boxed");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["widthStyles"] == "boxed");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["menuPosition"] != "scrollable");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["menuPosition"] == "scrollable");
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r2.localdata["headerPosition"] != "scrollable");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.localdata["headerPosition"] == "scrollable");
  }
}
function SwitcherComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div")(2, "div", 77)(3, "p", 19);
    \u0275\u0275text(4, "Menu Colors:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 78)(6, "div", 79)(7, "input", 80);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("light"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 79)(9, "input", 81);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("dark"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 79)(11, "input", 82);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("color"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 79)(13, "input", 83);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("gradient"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 79)(15, "input", 84);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatemenuColor("transparent"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 85);
    \u0275\u0275text(17, "Note:If you want to change color Menu dynamically change from below Theme Primary color picker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 77)(19, "p", 19);
    \u0275\u0275text(20, "Header Colors:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 78)(22, "div", 79)(23, "input", 86);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("light"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 79)(25, "input", 87);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("dark"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 79)(27, "input", 88);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("color"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 79)(29, "input", 89);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("gradient"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 79)(31, "input", 90);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateheaderColor("transparent"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 85);
    \u0275\u0275text(33, "Note:If you want to change color Header dynamically change from below Theme Primary color picker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 77)(35, "p", 19);
    \u0275\u0275text(36, "Theme Primary:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 91)(38, "div", 79)(39, "input", 92);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("58, 88, 146"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 79)(41, "input", 93);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_41_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("92, 144, 163"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 79)(43, "input", 94);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("161, 90, 223"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 79)(45, "input", 95);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("78, 172, 76"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 79)(47, "input", 96);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateprimary("223, 90, 90"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 97);
    \u0275\u0275element(49, "div", 98);
    \u0275\u0275elementStart(50, "div", 99)(51, "div", 100)(52, "button", 101);
    \u0275\u0275twoWayListener("colorPickerChange", function SwitcherComponent_ng_template_16_Template_button_colorPickerChange_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.defaultPrimary, $event) || (ctx_r2.defaultPrimary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("cpSliderDragEnd", function SwitcherComponent_ng_template_16_Template_button_cpSliderDragEnd_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dynamicLightPrimary($event));
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(53, "div", 77)(54, "p", 19);
    \u0275\u0275text(55, "Theme Background:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 91)(57, "div", 79)(58, "input", 102);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "20, 30, 96", secondary: "34 ,44 ,110", accent: "25, 38, 101", overlay: "rgba(255,255,255,0.1)", theme: "dark" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 79)(60, "input", 103);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_60_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "8, 78, 115", secondary: "22 ,92 ,129", accent: "13, 86, 120", overlay: "rgba(255,255,255,0.1)", theme: "dark" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 79)(62, "input", 104);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_62_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "90, 37, 135", secondary: "104 ,51 ,149", accent: " 95, 45, 140", overlay: "rgba(255,255,255,0.1)", theme: "dark" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 79)(64, "input", 105);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_64_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "24, 101, 51", secondary: "38 ,115 ,65", accent: "29, 109, 56", overlay: "rgba(255,255,255,0.1)", theme: "dark" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 79)(66, "input", 106);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_66_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBackground({ main: "120, 66, 20", secondary: "134 ,80 ,34", accent: "125, 74, 25", overlay: "rgba(255,255,255,0.1)", theme: "dark" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 107);
    \u0275\u0275element(68, "div", 108);
    \u0275\u0275elementStart(69, "div", 109)(70, "div", 100)(71, "button", 101);
    \u0275\u0275twoWayListener("colorPickerChange", function SwitcherComponent_ng_template_16_Template_button_colorPickerChange_71_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.defaultBg, $event) || (ctx_r2.defaultBg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("cpSliderDragEnd", function SwitcherComponent_ng_template_16_Template_button_cpSliderDragEnd_71_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dynamicTranparentBgPrimary($event));
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(72, "div", 110)(73, "p", 19);
    \u0275\u0275text(74, "Menu With Background Image:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 91)(76, "div", 111)(77, "input", 112);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_77_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg1"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 111)(79, "input", 113);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_79_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg2"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 111)(81, "input", 114);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_81_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg3"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 111)(83, "input", 115);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_83_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg4"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 111)(85, "input", 116);
    \u0275\u0275listener("click", function SwitcherComponent_ng_template_16_Template_input_click_85_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateBgImage("bgimg5"));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "light");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "dark");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "color");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "gradient");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["menuColor"] == "transparent");
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "light");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "dark");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "color");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "gradient");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["headerColor"] == "transparent");
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "58, 88, 146");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "92, 144, 163");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "161, 90, 223");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "78, 172, 76");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themePrimary"] == "223, 90, 90");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r2.defaultPrimary);
    \u0275\u0275property("cpAlphaChannel", "disabled")("cpOutputFormat", "rgba");
    \u0275\u0275twoWayProperty("colorPicker", ctx_r2.defaultPrimary);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", (ctx_r2.localdata["themeBackground"] == null ? null : ctx_r2.localdata["themeBackground"]["main"]) == "20, 30, 96");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "8, 78, 115");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "90, 37, 135");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "24, 101, 51");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.localdata["themeBackground"] == "120, 66, 20");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r2.defaultBg);
    \u0275\u0275property("cpAlphaChannel", "disabled")("cpOutputFormat", "rgba");
    \u0275\u0275twoWayProperty("colorPicker", ctx_r2.defaultBg);
  }
}
var SwitcherComponent = class _SwitcherComponent {
  constructor(elementRef, appStateService, renderer) {
    this.elementRef = elementRef;
    this.appStateService = appStateService;
    this.renderer = renderer;
    this.activeOffcanvas = inject(NgbActiveOffcanvas);
    this.active = 1;
    this.localdata = this.appStateService;
    this.defaultPrimary = "#6c5ffc";
    this.defaultBg = "#6c5ffc";
    this.appStateService.state$.subscribe((state) => {
      this.localdata = state;
    });
  }
  updateDirection(direction) {
    this.appStateService.updateState({ direction });
  }
  updateTheme(theme) {
    this.appStateService.updateState({ theme, menuColor: theme, headerColor: theme });
    if (theme == "light") {
      this.appStateService.updateState({ theme, themeBackground: "", headerColor: "light", menuColor: "light" });
      let html = document.querySelector("html");
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
    }
    if (theme == "dark") {
      this.appStateService.updateState({ theme, themeBackground: "", headerColor: "dark", menuColor: "dark" });
      let html = document.querySelector("html");
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
    }
  }
  updatemenuType(navigationStyles) {
    this.appStateService.updateState({ navigationStyles });
    if (navigationStyles == "horizontal") {
      this.appStateService.updateState({ navigationStyles, layoutStyles: "" });
      const menuclickclosed = document.getElementById("switcher-menu-click");
      document.querySelector(".double-menu-active")?.setAttribute("style", "display: none;");
      menuclickclosed.checked = true;
    } else if (navigationStyles == "vertical") {
      document.querySelector(".double-menu-active")?.setAttribute("style", "display: block;");
    }
  }
  updatemenuStyle(menuStyles) {
    this.appStateService.updateState({ menuStyles, layoutStyles: "" });
    if (menuStyles == "icon-hover") {
      document.querySelector(".double-menu-active")?.setAttribute("style", "display: none;");
    }
  }
  updatelayoutStyles(layoutStyles) {
    this.appStateService.updateState({ layoutStyles, menuStyles: "" });
  }
  setAttr(key, value) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, key, value);
    return;
  }
  removeAttr(key) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.removeAttribute(htmlElement, key);
    return;
  }
  updatepageStyles(pageStyles) {
    this.appStateService.updateState({ pageStyles });
  }
  updatewidthStyles(widthStyles) {
    this.appStateService.updateState({ widthStyles });
  }
  updatemenuPosition(menuPosition) {
    this.appStateService.updateState({ menuPosition });
  }
  updateheaderPosition(headerPosition) {
    this.appStateService.updateState({ headerPosition });
  }
  updatemenuColor(menuColor) {
    this.appStateService.updateState({ menuColor });
  }
  updateheaderColor(headerColor) {
    this.appStateService.updateState({ headerColor });
  }
  updateprimary(themePrimary) {
    this.appStateService.updateState({ themePrimary });
  }
  updateBackground(themeBackground) {
    this.appStateService.updateState({ themeBackground, headerColor: "dark", menuColor: "dark", theme: "dark" });
  }
  updateBgImage(backgroundImage) {
    this.appStateService.updateState({ backgroundImage });
  }
  dynamicLightPrimary(data) {
    this.defaultPrimary = data.color;
    let primaryColor = this.convertRgbToIndividual1(this.defaultPrimary);
    this.updateprimary(primaryColor);
  }
  convertRgbToIndividual1(value) {
    const numericValues = value.match(/\d+/g) || [];
    return numericValues.join(" , ");
  }
  //background theme change
  convertRgbToIndividual(value) {
    const numericValues = value.match(/\d+/g) || [];
    return numericValues.join(" ");
  }
  dynamicTranparentBgPrimary(data) {
    this.defaultBg = data.color;
    let bgRgb = this.convertRgbToIndividual(this.defaultBg);
    let bgRgb2 = this.convertRgbToIndividual(this.defaultBg);
    let bgRgb3 = this.convertRgbToIndividual(this.defaultBg);
    let bg1Update = bgRgb.split(" ").join(", ");
    let bg2Update = bgRgb2.split(" ");
    let bg2Update1 = bgRgb3.split(" ");
    bg2Update[0] = Number(bg2Update[0]) + 14;
    bg2Update[1] = Number(bg2Update[1]) + 14;
    bg2Update1[2] = Number(bg2Update1[2]) + 14;
    let bgColor = {
      main: bg1Update,
      secondary: bg2Update.join(", "),
      accent: bg2Update1.join(", "),
      overlay: "rgba(255,255,255,0.1)",
      theme: "dark"
    };
    this.updateBackground(bgColor);
  }
  reset() {
    this.appStateService.applyReset();
  }
  static {
    this.\u0275fac = function SwitcherComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwitcherComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AppStateService), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwitcherComponent, selectors: [["app-switcher"]], decls: 22, vars: 2, consts: [["nav", "ngbNav"], ["tabindex", "-1", "id", "switcher-canvas", "aria-labelledby", "offcanvasRightLabel", 1, "switcher", "offcanvas-end"], [1, "offcanvas-header", "d-block", "p-0"], [1, "d-flex", "align-items-center", "justify-content-between", "p-3"], ["id", "offcanvasRightLabel", 1, "offcanvas-title", "text-default"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "border-top", "border-block-start-dashed"], ["ngbNav", "", "id", "switcher-main-tab", "role", "tablist", 1, "nav", "nav-tabs", "nav-justified"], ["ngbNavItem", ""], ["ngbNavLink", "", "id", "switcher-home-tab", "data-bs-toggle", "tab", "data-bs-target", "#switcher-home", "type", "button", "role", "tab", "aria-controls", "switcher-home", "aria-selected", "true", 1, "nav-link"], ["ngbNavContent", ""], [3, "ngbNavItem"], ["ngbNavLink", "", "id", "switcher-profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#switcher-profile", "type", "button", "role", "tab", "aria-controls", "switcher-profile", "aria-selected", "false", 1, "nav-link"], [1, "offcanvas-body", "customtab"], [3, "ngbNavOutlet"], [1, "d-grid", "canvas-footer"], ["href", "javascript:void(0);", "id", "reset-all", 1, "btn", "btn-danger", "flex-fill", 3, "click"], ["id", "switcher-home", "role", "tabpanel", "aria-labelledby", "switcher-home-tab", "tabindex", "0", 1, ""], [1, ""], [1, "switcher-style-head"], [1, "row", "switcher-style", "gx-0"], [1, "col-4"], [1, "form-check", "switch-select"], ["for", "switcher-light-theme", 1, "form-check-label"], ["type", "radio", "name", "theme-style", "id", "switcher-light-theme", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-dark-theme", 1, "form-check-label"], ["type", "radio", "name", "theme-style", "id", "switcher-dark-theme", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-ltr", 1, "form-check-label"], ["type", "radio", "name", "direction", "id", "switcher-ltr", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-rtl", 1, "form-check-label"], ["type", "radio", "name", "direction", "id", "switcher-rtl", 1, "form-check-input", 3, "click", "checked"], [1, "col-sm-4", "col-6"], ["for", "switcher-vertical", 1, "form-check-label"], ["type", "radio", "name", "navigation-style", "id", "switcher-vertical", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-horizontal", 1, "form-check-label"], ["type", "radio", "name", "navigation-style", "id", "switcher-horizontal", 1, "form-check-input", 3, "click", "checked"], [1, "navigation-menu-styles"], [1, "row", "switcher-style", "gx-0", "pb-2", "gy-2"], ["for", "switcher-menu-click", 1, "form-check-label"], ["type", "radio", "name", "navigation-menu-styles", "id", "switcher-menu-click", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-menu-hover", 1, "form-check-label"], ["type", "radio", "name", "navigation-menu-styles", "id", "switcher-menu-hover", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-icon-click", 1, "form-check-label"], ["type", "radio", "name", "navigation-menu-styles", "id", "switcher-icon-click", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-icon-hover", 1, "form-check-label"], ["type", "radio", "name", "navigation-menu-styles", "id", "switcher-icon-hover", 1, "form-check-input", 3, "click", "checked"], [1, "sidemenu-layout-styles"], [1, "col-sm-6"], ["for", "switcher-default-menu", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-default-menu", "checked", "", 1, "form-check-input", 3, "click"], ["for", "switcher-closed-menu", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-closed-menu", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-icontext-menu", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-icontext-menu", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-icon-overlay", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-icon-overlay", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-detached", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-detached", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-double-menu", 1, "form-check-label"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-double-menu", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-regular", 1, "form-check-label"], ["type", "radio", "name", "page-styles", "id", "switcher-regular", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-classic", 1, "form-check-label"], ["type", "radio", "name", "page-styles", "id", "switcher-classic", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-full-width", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "switcher-full-width", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-boxed", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "switcher-boxed", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-menu-fixed", 1, "form-check-label"], ["type", "radio", "name", "menu-positions", "id", "switcher-menu-fixed", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-menu-scroll", 1, "form-check-label"], ["type", "radio", "name", "menu-positions", "id", "switcher-menu-scroll", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-header-fixed", 1, "form-check-label"], ["type", "radio", "name", "header-positions", "id", "switcher-header-fixed", 1, "form-check-input", 3, "click", "checked"], ["for", "switcher-header-scroll", 1, "form-check-label"], ["type", "radio", "name", "header-positions", "id", "switcher-header-scroll", 1, "form-check-input", 3, "click", "checked"], ["id", "switcher-profile", "role", "tabpanel", "aria-labelledby", "switcher-profile-tab", "tabindex", "0", 1, "border-0"], [1, "theme-colors"], [1, "d-flex", "switcher-style", "pb-2"], [1, "form-check", "switch-select", "me-3"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Light Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-light", 1, "form-check-input", "color-input", "color-white", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Dark Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-dark", 1, "form-check-input", "color-input", "color-dark", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Color Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-primary", 1, "form-check-input", "color-input", "color-primary", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Gradient Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-gradient", 1, "form-check-input", "color-input", "color-gradient", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Transparent Menu", "type", "radio", "name", "menu-colors", "id", "switcher-menu-transparent", 1, "form-check-input", "color-input", "color-transparent", 3, "click", "checked"], [1, "px-4", "pb-3", "text-muted", "fs-11"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Light Header", "type", "radio", "name", "header-colors", "id", "switcher-header-light", 1, "form-check-input", "color-input", "color-white", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Dark Header", "type", "radio", "name", "header-colors", "id", "switcher-header-dark", 1, "form-check-input", "color-input", "color-dark", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Color Header", "type", "radio", "name", "header-colors", "id", "switcher-header-primary", 1, "form-check-input", "color-input", "color-primary", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Gradient Header", "type", "radio", "name", "header-colors", "id", "switcher-header-gradient", 1, "form-check-input", "color-input", "color-gradient", 3, "click", "checked"], ["data-bs-toggle", "tooltip", "placement", "top", "ngbTooltip", "Transparent Header", "type", "radio", "name", "header-colors", "id", "switcher-header-transparent", 1, "form-check-input", "color-input", "color-transparent", 3, "click", "checked"], [1, "d-flex", "flex-wrap", "align-items-center", "switcher-style"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary", 1, "form-check-input", "color-input", "color-primary-1", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary1", 1, "form-check-input", "color-input", "color-primary-2", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary2", 1, "form-check-input", "color-input", "color-primary-3", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary3", 1, "form-check-input", "color-input", "color-primary-4", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary4", 1, "form-check-input", "color-input", "color-primary-5", 3, "click", "checked"], [1, "form-check", "switch-select", "ps-0", "mt-1", "color-primary-light"], [1, "theme-container-primary"], [1, "pickr-container-primary"], [1, "pickr"], ["type", "button", "role", "button", "aria-label", "toggle color picker dialog", 1, "color-bg-transparent", "pcr-button", 2, "--pcr-color", "rgba(132, 90, 223, 1)", 3, "colorPickerChange", "cpSliderDragEnd", "cpAlphaChannel", "cpOutputFormat", "colorPicker"], ["type", "radio", "name", "theme-background", "id", "switcher-background", 1, "form-check-input", "color-input", "color-bg-1", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background1", 1, "form-check-input", "color-input", "color-bg-2", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background2", 1, "form-check-input", "color-input", "color-bg-3", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background3", 1, "form-check-input", "color-input", "color-bg-4", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background4", 1, "form-check-input", "color-input", "color-bg-5", 3, "click", "checked"], [1, "form-check", "switch-select", "ps-0", "mt-1", "tooltip-static-demo", "color-bg-transparent"], [1, "theme-container-background"], [1, "pickr-container-background"], [1, "menu-image", "mb-3"], [1, "form-check", "switch-select", "m-1"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img", 1, "form-check-input", "bgimage-input", "bg-img1", 3, "click"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img1", 1, "form-check-input", "bgimage-input", "bg-img2", 3, "click"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img2", 1, "form-check-input", "bgimage-input", "bg-img3", 3, "click"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img3", 1, "form-check-input", "bgimage-input", "bg-img4", 3, "click"], ["type", "radio", "name", "theme-background", "id", "switcher-bg-img4", 1, "form-check-input", "bgimage-input", "bg-img5", 3, "click"]], template: function SwitcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h5", 4);
        \u0275\u0275text(4, " Switcher ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function SwitcherComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.activeOffcanvas.close("Close click"));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "nav", 6)(7, "div", 7, 0);
        \u0275\u0275elementContainerStart(9, 8);
        \u0275\u0275elementStart(10, "button", 9);
        \u0275\u0275text(11, " Theme Styles ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, SwitcherComponent_ng_template_12_Template, 157, 23, "ng-template", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(13, 11);
        \u0275\u0275elementStart(14, "button", 12);
        \u0275\u0275text(15, " Theme Colors ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, SwitcherComponent_ng_template_16_Template, 86, 30, "ng-template", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275element(18, "div", 14);
        \u0275\u0275elementStart(19, "div", 15)(20, "a", 16);
        \u0275\u0275listener("click", function SwitcherComponent_Template_a_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.reset());
        });
        \u0275\u0275text(21, "Reset");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const nav_r5 = \u0275\u0275reference(8);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngbNavItem", 2);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngbNavOutlet", nav_r5);
      }
    }, dependencies: [NgbNavContent, NgbNav, NgbNavItem, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbTooltip, ColorPickerDirective], styles: ["\n\n/*# sourceMappingURL=switcher.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwitcherComponent, { className: "SwitcherComponent", filePath: "src\\app\\shared\\components\\switcher\\switcher.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/header/header.component.ts
var _c04 = () => ["/dashboards/sales"];
var _c14 = (a0) => ({ "d-none": a0 });
var _c23 = () => ["/pages/profile/profile-1"];
var _c32 = () => ["/pages/email/mail-inbox"];
var _c42 = () => ["/pages/email/mail-settings"];
var _c52 = () => ["/apps/chat/chat-01"];
var _c62 = () => ["/accounts/lock-screen/lock-screen-1"];
var _c72 = () => ["/accounts/log-in/log-in-1"];
function HeaderComponent_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "a", 48);
    \u0275\u0275text(2, "View All Notifications");
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_ng_template_187_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 119);
    \u0275\u0275listener("mouseenter", function HeaderComponent_ng_template_187_ul_7_li_1_Template_li_mouseenter_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.indiceActivo = i_r7);
    })("click", function HeaderComponent_ng_template_187_ul_7_li_1_Template_li_click_0_listener() {
      const r_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const modal_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.irA(r_r8, modal_r5));
    });
    \u0275\u0275elementStart(1, "span", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("busqueda__resultado--activo", i_r7 === ctx_r3.indiceActivo);
    \u0275\u0275attribute("aria-selected", i_r7 === ctx_r3.indiceActivo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r8.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r8.ruta);
  }
}
function HeaderComponent_ng_template_187_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 117);
    \u0275\u0275template(1, HeaderComponent_ng_template_187_ul_7_li_1_Template, 5, 5, "li", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.resultados);
  }
}
function HeaderComponent_ng_template_187_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" No hay pantallas que coincidan con \xAB", ctx_r3.consulta, "\xBB. ");
  }
}
function HeaderComponent_ng_template_187_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 123);
    \u0275\u0275text(1, " Escriba para encontrar una pantalla. Use \u2191 \u2193 para moverse y Enter para abrir. ");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_ng_template_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 112);
    \u0275\u0275element(3, "circle", 24)(4, "line", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 113, 1);
    \u0275\u0275listener("ngModelChange", function HeaderComponent_ng_template_187_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.buscarPantalla($event));
    })("keydown", function HeaderComponent_ng_template_187_Template_input_keydown_5_listener($event) {
      const modal_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.teclaBusqueda($event, modal_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, HeaderComponent_ng_template_187_ul_7_Template, 2, 1, "ul", 114)(8, HeaderComponent_ng_template_187_p_8_Template, 2, 1, "p", 115)(9, HeaderComponent_ng_template_187_p_9_Template, 2, 0, "p", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r3.consulta);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.resultados.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.consulta && !ctx_r3.resultados.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.consulta);
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor(cdr, elementRef, appStateService, menu, navService, router) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.appStateService = appStateService;
    this.menu = menu;
    this.navService = navService;
    this.router = router;
    this.modalService = inject(NgbModal);
    this.closeResult = "";
    this.isFullscreen = false;
    this.offcanvasService = inject(NgbOffcanvas);
    this.isCartEmpty = false;
    this.isNotifyEmpty = false;
    this.cartItemCount = 4;
    this.notificationCount = 4;
    this.isDropdownVisible = true;
    this.isCheckoutClicked = false;
    this.pantallas = [];
    this.resultados = [];
    this.consulta = "";
    this.indiceActivo = 0;
    this.appStateService.state$.subscribe((state) => {
      this.localdata = state;
    });
    this.navService.items.subscribe((items) => this.pantallas = this.aplanar(items));
  }
  SwitcherClick() {
    this.offcanvasService.open(SwitcherComponent, {
      position: "end",
      scroll: true
    });
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  SerchClick() {
    document.querySelector("#headersearch")?.classList.toggle("searchdrop");
  }
  updateTheme(theme) {
    this.appStateService.updateState({ theme, menuColor: theme });
    if (theme == "light") {
      this.appStateService.updateState({ theme, themeBackground: "", headerColor: "light", menuColor: "light" });
      let html = document.querySelector("html");
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
      html?.style.removeProperty("--primary-rgb");
    }
    if (theme == "dark") {
      this.appStateService.updateState({ theme, themeBackground: "", headerColor: "dark", menuColor: "dark" });
      let html = document.querySelector("html");
      html?.style.removeProperty("--body-bg-rgb");
      html?.style.removeProperty("--body-bg-rgb2");
      html?.style.removeProperty("--light-rgb");
      html?.style.removeProperty("--form-control-bg");
      html?.style.removeProperty("--input-border");
      html?.style.removeProperty("--primary-rgb");
    }
  }
  // localStorageBackUp() {
  //   let styleId = document.querySelector('#style');
  //   let html = document.querySelector('html');
  //   //Theme Color Mode:
  //   if (localStorage.getItem('dashticHeader') == 'dark') {
  //     if (localStorage.getItem('dashticdarktheme')) {
  //       const type: any = localStorage.getItem('dashticdarktheme');
  //       html?.setAttribute('data-theme-mode', type);
  //       html?.setAttribute('data-header-styles', type);
  //       html?.setAttribute('data-menu-styles', type);
  //     }
  //     if (localStorage.getItem('dashticdarktheme') == 'light') {
  //       const type: any = localStorage.getItem('dashticdarktheme');
  //       html?.setAttribute('data-theme-mode', type);
  //       html?.setAttribute('data-header-styles', type);
  //       html?.setAttribute('data-menu-styles', type);
  //     }
  //   }
  // }
  getDismissReason(reason) {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return "by pressing ESC";
      case ModalDismissReasons.BACKDROP_CLICK:
        return "by clicking on a backdrop";
      default:
        return `with: ${reason}`;
    }
  }
  toggleSidebar() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (html?.getAttribute("data-nav-layout") == "vertical" && window.innerWidth > 992) {
      this.menu.alternar();
      return;
    }
    if (html?.getAttribute("data-toggled") == "true") {
      document.querySelector("html")?.getAttribute("data-toggled") == "icon-overlay-close";
    } else if (html?.getAttribute("data-nav-style") == "menu-click") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "menu-click-closed" ? "" : "menu-click-closed");
    } else if (html?.getAttribute("data-nav-style") == "menu-hover") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "menu-hover-closed" ? "" : "menu-hover-closed");
    } else if (html?.getAttribute("data-nav-style") == "icon-click") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-click-closed" ? "" : "icon-click-closed");
    } else if (html?.getAttribute("data-nav-style") == "icon-hover") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-hover-closed" ? "" : "icon-hover-closed");
    } else if (html?.getAttribute("data-vertical-style") == "overlay") {
      html?.setAttribute("data-vertical-style", "overlay");
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-overlay-close" ? "" : "icon-overlay-close");
    } else if (html?.getAttribute("data-vertical-style") == "overlay") {
      document.querySelector("html")?.getAttribute("data-toggled") != null ? document.querySelector("html")?.removeAttribute("data-toggled") : document.querySelector("html")?.setAttribute("data-toggled", "icon-overlay-close");
    } else if (html?.getAttribute("data-vertical-style") == "closed") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close-menu-close" ? "" : "close-menu-close");
    } else if (html?.getAttribute("data-vertical-style") == "icontext") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-text-close" ? "" : "icon-text-close");
    } else if (html?.getAttribute("data-vertical-style") == "detached") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "detached-close" ? "" : "detached-close");
    } else if (html?.getAttribute("data-vertical-style") == "doublemenu") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "double-menu-close" && document.querySelector(".slide.open")?.classList.contains("has-sub") ? "double-menu-open" : "double-menu-close");
    }
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "open" ? "close" : "open");
    }
  }
  toggleFullscreen() {
    if (this.isFullscreen) {
      this.exitFullscreen();
    } else {
      this.requestFullscreen();
    }
  }
  handleFullscreenChange(event) {
    this.isFullscreen = this.isFullScreen();
    this.cdr.detectChanges();
  }
  isFullScreen() {
    return !!document.fullscreenElement;
  }
  requestFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }
  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  //Notifications 
  handleCardClick(event) {
    event.stopPropagation();
  }
  removeRow(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.cartItemCount--;
    this.isCartEmpty = this.cartItemCount === 0;
  }
  removeCart(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.cartItemCount--;
    this.isCartEmpty = this.cartItemCount === 0;
  }
  removeNotify(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.notificationCount--;
    this.isNotifyEmpty = this.notificationCount === 0;
  }
  removeShowClass() {
    if (!this.isCheckoutClicked) {
      this.isDropdownVisible = false;
      this.isCheckoutClicked = true;
    }
  }
  toggleSwitcher() {
    this.offcanvasService.open(SwitcherComponent, {
      position: "end",
      scroll: true
    });
  }
  aplanar(items, migas = []) {
    const salida = [];
    for (const item of items ?? []) {
      if (!item.title)
        continue;
      if (item.path && item.type === "link") {
        salida.push({ titulo: item.title, ruta: migas.join(" \u203A "), path: item.path });
      }
      if (item.children?.length) {
        salida.push(...this.aplanar(item.children, [...migas, item.title]));
      }
    }
    return salida;
  }
  normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }
  abrirBusqueda(plantilla) {
    this.consulta = "";
    this.resultados = [];
    this.indiceActivo = 0;
    this.modalService.open(plantilla, { windowClass: "busqueda-ventana", size: "lg", scrollable: false });
    setTimeout(() => document.querySelector(".busqueda__entrada")?.focus(), 50);
  }
  buscarPantalla(texto) {
    this.consulta = texto ?? "";
    const q2 = this.normalizar(this.consulta);
    this.indiceActivo = 0;
    this.resultados = !q2 ? [] : this.pantallas.filter((p2) => this.normalizar(`${p2.titulo} ${p2.ruta}`).includes(q2)).slice(0, 8);
  }
  teclaBusqueda(evento, modal) {
    if (evento.key === "ArrowDown" && this.resultados.length) {
      evento.preventDefault();
      this.indiceActivo = (this.indiceActivo + 1) % this.resultados.length;
    } else if (evento.key === "ArrowUp" && this.resultados.length) {
      evento.preventDefault();
      this.indiceActivo = (this.indiceActivo - 1 + this.resultados.length) % this.resultados.length;
    } else if (evento.key === "Enter" && this.resultados[this.indiceActivo]) {
      evento.preventDefault();
      this.irA(this.resultados[this.indiceActivo], modal);
    }
  }
  irA(resultado, modal) {
    modal?.close?.();
    this.router.navigateByUrl(resultado.path.startsWith("/") ? resultado.path : "/" + resultado.path);
  }
  atajoBusqueda(evento) {
    if ((evento.ctrlKey || evento.metaKey) && evento.key.toLowerCase() === "k") {
      evento.preventDefault();
      if (document.querySelector(".busqueda"))
        return;
      const boton = this.elementRef.nativeElement.querySelector(".header-buscar__boton");
      boton?.click();
    }
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AppStateService), \u0275\u0275directiveInject(MenuLateralService), \u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("fullscreenchange", function HeaderComponent_fullscreenchange_HostBindingHandler($event) {
          return ctx.handleFullscreenChange($event);
        }, false, \u0275\u0275resolveDocument)("keydown", function HeaderComponent_keydown_HostBindingHandler($event) {
          return ctx.atajoBusqueda($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 189, vars: 32, consts: [["searchModal", ""], ["campoBusqueda", ""], [1, "app-header"], [1, "main-header-container", "container-fluid"], [1, "header-content-left"], [1, "header-element"], [1, "horizontal-logo"], [1, "header-logo", 3, "routerLink"], ["src", "./assets/images/brand-logos/desktop-logo.png", "alt", "logo", 1, "desktop-logo"], ["src", "./assets/images/brand-logos/toggle-logo.png", "alt", "logo", 1, "toggle-logo"], ["src", "./assets/images/brand-logos/desktop-dark.png", "alt", "logo", 1, "desktop-dark"], ["src", "./assets/images/brand-logos/toggle-dark.png", "alt", "logo", 1, "toggle-dark"], ["src", "./assets/images/brand-logos/desktop-white.png", "alt", "logo", 1, "desktop-white"], ["src", "./assets/images/brand-logos/toggle-white.png", "alt", "logo", 1, "toggle-white"], [1, "header-element", "mx-lg-0", "mx-2"], ["type", "button", 1, "header-link", "header-menu-toggle", 3, "click"], ["viewBox", "0 0 24 24", "width", "24", "height", "24", "aria-hidden", "true", "focusable", "false"], ["x", "3", "y", "4.5", "width", "18", "height", "15", "rx", "3", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7"], ["d", "M6 4.5h3.5v15H6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Z", "fill", "currentColor"], ["x1", "9.5", "y1", "4.5", "x2", "9.5", "y2", "19.5", "stroke", "currentColor", "stroke-width", "1.7"], [1, "header-content-right"], [1, "header-element", "header-buscar"], ["type", "button", "aria-label", "Buscar pantalla (Ctrl+K)", "aria-haspopup", "dialog", 1, "header-buscar__boton", 3, "click"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "aria-hidden", "true", "focusable", "false"], ["cx", "10.5", "cy", "10.5", "r", "6.5", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "15.5", "y1", "15.5", "x2", "21", "y2", "21", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "header-buscar__texto"], ["aria-hidden", "true", 1, "header-buscar__atajo"], [1, "header-element", "header-theme-mode"], ["type", "button", 1, "header-link", "layout-setting", 3, "click"], [1, "light-layout"], ["aria-hidden", "true", 1, "ri-moon-line", "header-link-icon"], [1, "dark-layout"], ["aria-hidden", "true", 1, "bi", "bi-brightness-high", "header-link-icon"], [1, "header-element", "header-fullscreen"], ["type", "button", 1, "header-link", 3, "click"], ["aria-hidden", "true", 1, "ri-fullscreen-line", "full-screen-open", "header-link-icon", 3, "ngClass"], ["aria-hidden", "true", 1, "ri-fullscreen-exit-fill", "full-screen-close", "header-link-icon", "d-none", 3, "ngClass"], ["ngbDropdown", "", "placement", "left", 1, "header-element", "notifications-dropdown", 3, "autoClose"], ["ngbDropdownToggle", "", "aria-label", "Notificaciones", "title", "Notificaciones", "href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "id", "messageDropdown", "aria-expanded", "false", 1, "header-link", "dropdown-toggle"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "header-link-icon"], ["opacity", ".3", "d", "M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z"], ["d", "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z"], ["id", "notification-icon-badge", 1, "w-9", "h-9", "p-0", "bg-danger", "rounded-pill", "header-icon-badge", "pulse", "pulse-danger"], ["ngbDropdownMenu", "", 1, "main-header-dropdown", "dropdown-menu", "dropdown-menu-end", "notifiation-dropdown-menu"], ["id", "header-notification-scroll", 1, "list-unstyled", "mb-0", "overflow-y-scroll"], ["ngbDropdownItem", "1", "id", "row5", 1, "dropdown-item", 3, "click"], [1, "d-flex", "align-items-start"], [1, ""], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "notify-icon", "me-3"], ["d", "M15 11V4H4v8.17l.59-.58.58-.59H6z", "opacity", ".3"], ["d", "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z"], [1, "flex-grow-1", "d-flex", "align-items-center", "my-auto"], [1, "mb-0", "fw-semibold"], [1, "text-muted", "fw-normal", "fs-12", "header-notification-text"], [1, "ms-auto", "my-auto"], ["aria-label", "anchor", "href", "javascript:void(0);", 1, "min-w-fit-content", "text-muted", "me-1", "dropdown-item-close1", 3, "click"], [1, "ti", "ti-x", "fs-16"], ["ngbDropdownItem", "2", "id", "row6", 1, "dropdown-item", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "notify-icon", "me-3"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z", "opacity", ".3"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"], ["ngbDropdownItem", "3", "id", "row7", 1, "dropdown-item", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "notify-icon", "me-3"], ["fill", "none", "height", "24", "width", "24"], ["d", "M18 20H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z", "opacity", ".3"], ["d", "M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"], ["ngbDropdownItem", "4", "id", "row8", 1, "dropdown-item", 3, "click"], ["d", "M15 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z", "opacity", ".3"], ["cx", "15", "cy", "8", "opacity", ".3", "r", "2"], ["d", "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"], [1, "px-4", "p-2", "empty-header-item1", "border-top", "text-center"], [1, "p-4", "empty-item1"], [1, "text-center"], [1, "avatar", "avatar-xl", "avatar-rounded", "bg-secondary-transparent"], [1, "ri-notification-off-line", "fs-2"], [1, "fw-semibold", "mt-3"], ["ngbDropdown", "", 1, "header-element", "main-profile-user"], ["ngbDropdownToggle", "", "id", "mainHeaderProfile", "aria-label", "Men\xFA de usuario", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", 1, "header-link", "dropdown-toggle"], [1, "d-flex", "align-items-center"], ["src", "./assets/images/faces/16.jpg", "alt", "img", 1, "rounded-circle", "header-profile-img", "avatar", "me-sm-2", "me-0"], [1, "d-xl-block", "d-none", "align-items-center", "my-auto", "text-start"], [1, "fw-medium", "mb-0", "lh-1", "fs-13"], [1, "op-5", "fw-normal", "d-block", "fs-11", "lh-1"], ["ngbDropdownMenu", "", "aria-labelledby", "mainHeaderProfile", 1, "main-header-dropdown", "dropdown-menu", "header-profile-dropdown", "dropdown-menu-start"], [1, "list-unstyled", "mb-0"], [1, "drop-heading", "d-xl-none", "d-block"], [1, "text-dark", "mb-0", "fs-16", "fw-bold"], [1, "text-muted", "fs-12"], [1, "dropdown-item"], [1, "d-flex", "align-items-center", "w-100", 3, "routerLink"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "profile-icon", "me-3"], ["d", "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z", "opacity", ".3"], ["cx", "12", "cy", "8", "opacity", ".3", "r", "2"], ["d", "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"], ["opacity", ".3", "d", "M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z"], ["d", "M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "profile-icon", "me-3"], ["d", "M5 17c0 .55.45 1 1 1h1v-4H5v3zm12-3h2v4h-2z", "opacity", ".3"], ["d", "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9zM7 14v4H6c-.55 0-1-.45-1-1v-3h2zm12 4h-2v-4h2v4z"], ["fill", "none"], ["d", "M0 0h24v24H0V0z"], ["d", "M0 0h24v24H0V0z", "opacity", ".87"], ["d", "M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z", "opacity", ".3"], ["d", "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"], ["d", "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z", "opacity", ".3"], ["d", "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"], ["type", "button", "aria-label", "Personalizar la apariencia", "title", "Personalizar la apariencia", "data-bs-toggle", "offcanvas", "data-bs-target", "#switcher-canvas", 1, "header-link", "switcher-icon", 3, "click"], ["x", "1008", "y", "1248", "viewBox", "0 0 24 24", "height", "24", "width", "24", "preserveAspectRatio", "xMidYMid meet", "focusable", "false", 1, "header-link-icon", "fa-spin"], ["role", "dialog", "aria-label", "Buscar pantalla", 1, "busqueda"], [1, "busqueda__campo"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", "aria-hidden", "true", "focusable", "false"], ["type", "search", "placeholder", "Buscar pantalla (por ejemplo, \xABfactores\xBB o \xABbono\xBB)", "aria-label", "Buscar pantalla", "autocomplete", "off", 1, "busqueda__entrada", 3, "ngModelChange", "keydown", "ngModel"], ["class", "busqueda__lista", "role", "listbox", "aria-label", "Resultados", 4, "ngIf"], ["class", "busqueda__vacio", "role", "status", 4, "ngIf"], ["class", "busqueda__ayuda", 4, "ngIf"], ["role", "listbox", "aria-label", "Resultados", 1, "busqueda__lista"], ["role", "option", "class", "busqueda__resultado", 3, "busqueda__resultado--activo", "mouseenter", "click", 4, "ngFor", "ngForOf"], ["role", "option", 1, "busqueda__resultado", 3, "mouseenter", "click"], [1, "busqueda__titulo"], [1, "busqueda__ruta"], ["role", "status", 1, "busqueda__vacio"], [1, "busqueda__ayuda"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "header", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "a", 7);
        \u0275\u0275element(6, "img", 8)(7, "img", 9)(8, "img", 10)(9, "img", 11)(10, "img", 12)(11, "img", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 14)(13, "button", 15);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleSidebar());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 16);
        \u0275\u0275element(15, "rect", 17)(16, "path", 18)(17, "line", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "div", 20)(19, "div", 21)(20, "button", 22);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          const searchModal_r2 = \u0275\u0275reference(188);
          return \u0275\u0275resetView(ctx.abrirBusqueda(searchModal_r2));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 23);
        \u0275\u0275element(22, "circle", 24)(23, "line", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "span", 26);
        \u0275\u0275text(25, "Buscar pantalla\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "kbd", 27);
        \u0275\u0275text(27, "Ctrl K");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 28)(29, "button", 29);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateTheme((ctx.localdata == null ? null : ctx.localdata.theme) === "dark" ? "light" : "dark"));
        });
        \u0275\u0275elementStart(30, "span", 30);
        \u0275\u0275element(31, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 32);
        \u0275\u0275element(33, "i", 33);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 34)(35, "button", 35);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFullscreen());
        });
        \u0275\u0275element(36, "i", 36)(37, "i", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 38)(39, "a", 39);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(40, "svg", 40);
        \u0275\u0275element(41, "path", 41)(42, "path", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(43, "span", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 44)(45, "ul", 45)(46, "li", 46);
        \u0275\u0275listener("click", function HeaderComponent_Template_li_click_46_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleCardClick($event));
        });
        \u0275\u0275elementStart(47, "div", 47)(48, "div", 48);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(49, "svg", 49);
        \u0275\u0275element(50, "path", 50)(51, "path", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(52, "div", 52)(53, "div")(54, "p", 53)(55, "a");
        \u0275\u0275text(56, "Application received");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "span", 54);
        \u0275\u0275text(58, "3 days ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 55)(60, "a", 56);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_60_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.removeNotify("row5"));
        });
        \u0275\u0275element(61, "i", 57);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(62, "li", 58);
        \u0275\u0275listener("click", function HeaderComponent_Template_li_click_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleCardClick($event));
        });
        \u0275\u0275elementStart(63, "div", 47)(64, "div", 48);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(65, "svg", 59);
        \u0275\u0275element(66, "path", 60)(67, "path", 61)(68, "path", 62);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(69, "div", 52)(70, "div")(71, "p", 53)(72, "a");
        \u0275\u0275text(73, "Project approved");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "span", 54);
        \u0275\u0275text(75, "2 hours ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 55)(77, "a", 56);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_77_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.removeNotify("row6"));
        });
        \u0275\u0275element(78, "i", 57);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(79, "li", 63);
        \u0275\u0275listener("click", function HeaderComponent_Template_li_click_79_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleCardClick($event));
        });
        \u0275\u0275elementStart(80, "div", 47)(81, "div", 48);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(82, "svg", 64)(83, "g");
        \u0275\u0275element(84, "rect", 65)(85, "path", 66)(86, "path", 67);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(87, "div", 52)(88, "div")(89, "p", 53)(90, "a");
        \u0275\u0275text(91, "Product Delivered");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "span", 54);
        \u0275\u0275text(93, "30 min ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 55)(95, "a", 56);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_95_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.removeNotify("row7"));
        });
        \u0275\u0275element(96, "i", 57);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(97, "li", 68);
        \u0275\u0275listener("click", function HeaderComponent_Template_li_click_97_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleCardClick($event));
        });
        \u0275\u0275elementStart(98, "div", 47)(99, "div", 48);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(100, "svg", 59);
        \u0275\u0275element(101, "path", 60)(102, "path", 69)(103, "circle", 70)(104, "path", 71);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(105, "div", 52)(106, "div")(107, "p", 53)(108, "a");
        \u0275\u0275text(109, "Friend Requests");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "span", 54);
        \u0275\u0275text(111, "10 min ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 55)(113, "a", 56);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_113_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.removeNotify("row8"));
        });
        \u0275\u0275element(114, "i", 57);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(115, HeaderComponent_Conditional_115_Template, 3, 0, "div", 72);
        \u0275\u0275elementStart(116, "div", 73)(117, "div", 74)(118, "span", 75);
        \u0275\u0275element(119, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "h6", 77);
        \u0275\u0275text(121, "No New Notifications");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(122, "div", 78)(123, "a", 79)(124, "div", 80);
        \u0275\u0275element(125, "img", 81);
        \u0275\u0275elementStart(126, "div", 82)(127, "h6", 83);
        \u0275\u0275text(128, "John Thomson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "span", 84);
        \u0275\u0275text(130, "App Developer");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(131, "div", 85)(132, "ul", 86)(133, "li", 87)(134, "div", 74)(135, "h5", 88);
        \u0275\u0275text(136, "John Thomson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "small", 89);
        \u0275\u0275text(138, "App Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "li", 90)(140, "a", 91);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(141, "svg", 92);
        \u0275\u0275element(142, "path", 60)(143, "path", 93)(144, "circle", 94)(145, "path", 95);
        \u0275\u0275elementEnd();
        \u0275\u0275text(146, " Profile ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(147, "li", 90)(148, "a", 91);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(149, "svg", 92);
        \u0275\u0275element(150, "path", 50)(151, "path", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275text(152, " Inbox ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(153, "li", 90)(154, "a", 91);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(155, "svg", 92);
        \u0275\u0275element(156, "path", 96)(157, "path", 97);
        \u0275\u0275elementEnd();
        \u0275\u0275text(158, " Settings ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(159, "li", 90)(160, "a", 91);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(161, "svg", 98);
        \u0275\u0275element(162, "path", 60)(163, "path", 99)(164, "path", 100);
        \u0275\u0275elementEnd();
        \u0275\u0275text(165, " Support ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(166, "li", 90)(167, "a", 91);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(168, "svg", 98)(169, "g", 101);
        \u0275\u0275element(170, "path", 102)(171, "path", 103);
        \u0275\u0275elementEnd();
        \u0275\u0275element(172, "path", 104)(173, "path", 105);
        \u0275\u0275elementEnd();
        \u0275\u0275text(174, " Lockscreen ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(175, "li", 90)(176, "a", 91);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(177, "svg", 98);
        \u0275\u0275element(178, "path", 60)(179, "path", 106)(180, "path", 107);
        \u0275\u0275elementEnd();
        \u0275\u0275text(181, " Log Out ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(182, "div", 5)(183, "button", 108);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_183_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.SwitcherClick());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(184, "svg", 109);
        \u0275\u0275element(185, "path", 96)(186, "path", 97);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(187, HeaderComponent_ng_template_187_Template, 10, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c04));
        \u0275\u0275advance(8);
        \u0275\u0275attribute("aria-pressed", ctx.menu.fijo)("aria-label", ctx.menu.fijo ? "Men\xFA fijado. Ocultarlo y mostrarlo solo al pasar el mouse" : "Fijar el men\xFA abierto")("title", ctx.menu.fijo ? "Ocultar men\xFA (aparece al pasar el mouse)" : "Fijar el men\xFA abierto");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("fill-opacity", ctx.menu.fijo ? 0.85 : 0);
        \u0275\u0275advance(13);
        \u0275\u0275attribute("aria-label", (ctx.localdata == null ? null : ctx.localdata.theme) === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro")("title", (ctx.localdata == null ? null : ctx.localdata.theme) === "dark" ? "Tema claro" : "Tema oscuro");
        \u0275\u0275advance(6);
        \u0275\u0275attribute("aria-label", ctx.isFullscreen ? "Salir de pantalla completa" : "Pantalla completa")("title", ctx.isFullscreen ? "Salir de pantalla completa" : "Pantalla completa");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c14, ctx.isFullscreen));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c14, !ctx.isFullscreen));
        \u0275\u0275advance();
        \u0275\u0275property("autoClose", "outside");
        \u0275\u0275advance(77);
        \u0275\u0275conditional(!ctx.isNotifyEmpty ? 115 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("d-none", !ctx.isNotifyEmpty);
        \u0275\u0275advance(24);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c23));
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c32));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c42));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(29, _c52));
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(30, _c62));
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(31, _c72));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, DefaultValueAccessor, NgControlStatus, NgModel] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\shared\\components\\header\\header.component.ts", lineNumber: 13 });
})();

// src/app/shared/services/switcher.service.ts
var SwitcherService = class _SwitcherService {
  static {
    this.\u0275fac = function SwitcherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwitcherService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SwitcherService, factory: _SwitcherService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/tab-to-top/tab-to-top.component.ts
var _c05 = (a0) => ({ display: a0 });
var TabToTopComponent = class _TabToTopComponent {
  constructor(viewScroller) {
    this.viewScroller = viewScroller;
    this.show = false;
  }
  ngOnInit() {
  }
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 200) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  taptotop() {
    let body = document.querySelector("body");
    body.style.scrollBehavior = "smooth";
    this.viewScroller.scrollToPosition([0, 0]);
  }
  static {
    this.\u0275fac = function TabToTopComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TabToTopComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabToTopComponent, selectors: [["app-tab-to-top"]], hostBindings: function TabToTopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function TabToTopComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 4, vars: 3, consts: [[1, "scrollToTop", 2, "display", "flex", 3, "click", "ngStyle"], [1, "arrow"], [1, "ri-arrow-up-s-fill", "fs-20"], ["id", "responsive-overlay"]], template: function TabToTopComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function TabToTopComponent_Template_div_click_0_listener() {
          return ctx.taptotop();
        });
        \u0275\u0275elementStart(1, "span", 1);
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(3, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c05, ctx.show ? "block" : "none"));
      }
    }, dependencies: [NgStyle] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabToTopComponent, { className: "TabToTopComponent", filePath: "src\\app\\shared\\components\\tab-to-top\\tab-to-top.component.ts", lineNumber: 9 });
})();

// src/app/shared/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "footer", "mt-auto", "py-3", "text-center"], [1, "container"], [1, ""], ["id", "year"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "bi", "bi-heart-fill", "text-danger"], ["href", "javascript:void(0);"], [1, "text-primary"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, " Copyright \xA9 ");
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "2024");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "a", 4);
        \u0275\u0275text(7, " Dashtic");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, ". Designed with ");
        \u0275\u0275element(9, "span", 5);
        \u0275\u0275text(10, " by ");
        \u0275\u0275elementStart(11, "a", 6)(12, "span", 7);
        \u0275\u0275text(13, "Spruko");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(14, " All rights reserved ");
        \u0275\u0275elementEnd()()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\shared\\components\\footer\\footer.component.ts", lineNumber: 9 });
})();

// src/app/shared/directives/hover-effect-sidebar.directive.ts
var HoverEffectSidebarDirective = class _HoverEffectSidebarDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.esperaAbrir = 120;
    this.esperaCerrar = 220;
  }
  alEntrarMouse() {
    this.programar(true, this.esperaAbrir);
  }
  alSalirMouse() {
    if (this.contieneFoco())
      return;
    this.programar(false, this.esperaCerrar);
  }
  alEnfocar() {
    this.programar(true, 0);
  }
  alPerderFoco(evento) {
    const destino = evento.relatedTarget;
    if (destino && this.elementRef.nativeElement.contains(destino))
      return;
    this.programar(false, this.esperaCerrar);
  }
  ngOnDestroy() {
    clearTimeout(this.temporizador);
  }
  contieneFoco() {
    return this.elementRef.nativeElement.contains(document.activeElement) && document.activeElement?.matches(":focus-visible") === true;
  }
  programar(abrir, espera) {
    clearTimeout(this.temporizador);
    const aplicar = () => {
      if (window.innerWidth <= 768)
        return;
      const html = this.elementRef.nativeElement.ownerDocument.documentElement;
      abrir ? html.setAttribute("data-icon-overlay", "open") : html.removeAttribute("data-icon-overlay");
    };
    espera > 0 ? this.temporizador = setTimeout(aplicar, espera) : aplicar();
  }
  static {
    this.\u0275fac = function HoverEffectSidebarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HoverEffectSidebarDirective)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HoverEffectSidebarDirective, selectors: [["", "appHoverEffectSidebar", ""]], hostBindings: function HoverEffectSidebarDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function HoverEffectSidebarDirective_mouseenter_HostBindingHandler() {
          return ctx.alEntrarMouse();
        })("mouseleave", function HoverEffectSidebarDirective_mouseleave_HostBindingHandler() {
          return ctx.alSalirMouse();
        })("focusin", function HoverEffectSidebarDirective_focusin_HostBindingHandler() {
          return ctx.alEnfocar();
        })("focusout", function HoverEffectSidebarDirective_focusout_HostBindingHandler($event) {
          return ctx.alPerderFoco($event);
        });
      }
    } });
  }
};

// src/app/shared/layouts/content-layout/content-layout.component.ts
var ContentLayoutComponent = class _ContentLayoutComponent {
  constructor(router, elementRef, navServices, SwitcherService2, renderer) {
    this.router = router;
    this.elementRef = elementRef;
    this.navServices = navServices;
    this.SwitcherService = SwitcherService2;
    this.renderer = renderer;
    this.offcanvasService = inject(NgbOffcanvas);
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close" ? "close" : "close");
    }
  }
  openEnd(content) {
    this.offcanvasService.open(content, { position: "end" });
  }
  clickOnBody() {
    document.querySelector("#headersearch")?.classList.remove("searchdrop");
    document.querySelector("#cartitemclose")?.classList.remove("show");
    document.querySelector("#header-cart-items-scroll")?.removeAttribute("class");
    document.querySelector("#notificationitemclose")?.classList.remove("show") || document.querySelector("#notificationitemclose")?.classList.remove("show");
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.removeAttribute(htmlElement, "data-icon-overlay");
    if (document.documentElement.getAttribute("data-toggled") == "icon-text-close") {
      this.renderer.removeAttribute(htmlElement, "data-icon-text");
    } else if (document.documentElement.getAttribute("data-nav-style") == "menu-click") {
      document.querySelector(".double-menu-active")?.setAttribute("style", "display: none;");
    }
    if (document.documentElement.getAttribute("data-nav-layout") == "horizontal") {
      this.closeMenu();
    }
    const switcher = this.elementRef.nativeElement.querySelector(".switcher");
    if (switcher) {
      this.renderer.removeClass(switcher, "show");
      document.querySelector("#responsive-overlay")?.classList.add("active");
    } else {
      document.querySelector("#responsive-overlay")?.classList.remove("active");
    }
    const sidebar = this.elementRef.nativeElement.querySelector(".sidebar");
    if (sidebar) {
      this.renderer.removeClass(sidebar, "show");
    }
    document.querySelector("#responsive-overlay")?.classList.remove("active");
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close" ? "close" : "close");
    }
  }
  closeMenu() {
    this.menuItems?.forEach((a2) => {
      if (this.menuItems) {
        a2.active = false;
      }
      a2?.children?.forEach((b2) => {
        if (a2.children) {
          b2.active = false;
        }
      });
    });
  }
  clearToggle() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    document.querySelector("#responsive-overlay")?.classList.remove("active");
  }
  ngOndistroy() {
  }
  static {
    this.\u0275fac = function ContentLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentLayoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(SwitcherService), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentLayoutComponent, selectors: [["app-content-layout"]], decls: 9, vars: 0, consts: [[1, "page"], ["appHoverEffectSidebar", ""], [1, "main-content", "app-content", 3, "click"], [1, "container-fluid"], ["id", "responsive-overlay", 3, "click"]], template: function ContentLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-header")(2, "app-sidebar", 1);
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275listener("click", function ContentLayoutComponent_Template_div_click_3_listener() {
          return ctx.clickOnBody();
        });
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(6, "app-footer")(7, "app-tab-to-top");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275listener("click", function ContentLayoutComponent_Template_div_click_8_listener() {
          return ctx.clearToggle();
        });
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet, HeaderComponent, SidebarComponent, TabToTopComponent, FooterComponent, HoverEffectSidebarDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentLayoutComponent, { className: "ContentLayoutComponent", filePath: "src\\app\\shared\\layouts\\content-layout\\content-layout.component.ts", lineNumber: 20 });
})();

// src/app/shared/directives/fullscreen.directive.ts
var FullscreenDirective = class _FullscreenDirective {
  constructor(document2, elementRef) {
    this.document = document2;
    this.elementRef = elementRef;
    this.fullScreen = false;
  }
  ngOnInit() {
    this.elem = this.elementRef.nativeElement.ownerDocument.documentElement;
  }
  onClick() {
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    }
  }
  static {
    this.\u0275fac = function FullscreenDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullscreenDirective)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FullscreenDirective, selectors: [["", "appFullscreen", ""]], hostBindings: function FullscreenDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function FullscreenDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    } });
  }
};

// src/app/shared/layouts/authentication-layout/authentication-layout.component.ts
var AuthenticationLayoutComponent = class _AuthenticationLayoutComponent {
  static {
    this.\u0275fac = function AuthenticationLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticationLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthenticationLayoutComponent, selectors: [["app-authentication-layout"]], decls: 1, vars: 0, template: function AuthenticationLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthenticationLayoutComponent, { className: "AuthenticationLayoutComponent", filePath: "src\\app\\shared\\layouts\\authentication-layout\\authentication-layout.component.ts", lineNumber: 8 });
})();

// src/app/shared/layouts/pageheader-layout/pageheader-layout.component.ts
var PageheaderLayoutComponent = class _PageheaderLayoutComponent {
  constructor(elementRef, navServices, SwitcherService2, renderer) {
    this.elementRef = elementRef;
    this.navServices = navServices;
    this.SwitcherService = SwitcherService2;
    this.renderer = renderer;
    this.offcanvasService = inject(NgbOffcanvas);
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }
  openEnd(content) {
    this.offcanvasService.open(content, { position: "end" });
  }
  clickOnBody() {
    document.querySelector("#cartitemclose")?.classList.remove("show");
    document.querySelector("#header-cart-items-scroll")?.removeAttribute("class");
    document.querySelector("#notificationitemclose")?.classList.remove("show") || document.querySelector("#notificationitemclose")?.classList.remove("show");
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (localStorage.getItem("dashticverticalstyles") == "icontext") {
      this.renderer.removeAttribute(htmlElement, "data-icon-text");
    }
    const switcher = this.elementRef.nativeElement.querySelector(".switcher");
    if (switcher) {
      this.renderer.removeClass(switcher, "show");
      document.querySelector("#responsive-overlay")?.classList.add("active");
    } else {
      this.renderer.addClass("data-toggle", "close");
      document.querySelector("#responsive-overlay")?.classList.remove("active");
    }
    const sidebar = this.elementRef.nativeElement.querySelector(".sidebar");
    if (sidebar) {
      this.renderer.removeClass(sidebar, "show");
    }
    document.querySelector("#responsive-overlay")?.classList.remove("active");
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close" ? "close" : "close");
    }
  }
  closeMenu() {
    this.menuItems?.forEach((a2) => {
      if (this.menuItems) {
        a2.active = false;
      }
      a2?.children?.forEach((b2) => {
        if (a2.children) {
          b2.active = false;
        }
      });
    });
  }
  // clickOnBody() {
  //   this.SwitcherService.emitChange(false);
  //   const switcher = this.el.nativeElement.querySelector('.switcher');
  //   if (switcher) {
  //     this.renderer.removeClass(switcher, 'show');
  //     document.querySelector('#responsive-overlay')?.classList.add('active');
  //   } else {
  //     this.renderer.addClass('data-toggle', 'close');
  //     document.querySelector('#responsive-overlay')?.classList.remove('active');
  //   }
  //   const sidebar = this.el.nativeElement.querySelector('.sidebar ');
  //   if (sidebar) {
  //     this.renderer.removeClass(sidebar, 'show');
  //   }
  //   document.querySelector('#responsive-overlay')?.classList.remove('active');
  //   let html = this.elementRef.nativeElement.ownerDocument.documentElement;
  //   if (window.innerWidth <= 992) {
  //     html?.setAttribute(
  //       'data-toggled',
  //       html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close'
  //     );
  //   }
  // }
  clearToggle() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    document.querySelector("#responsive-overlay")?.classList.remove("active");
  }
  static {
    this.\u0275fac = function PageheaderLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageheaderLayoutComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(SwitcherService), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageheaderLayoutComponent, selectors: [["app-pageheader-layout"]], decls: 10, vars: 0, consts: [[1, "page"], ["appHoverEffectSidebar", ""], [1, "main-content", "app-content", 3, "click"], [1, "container-fluid"], ["id", "responsive-overlay", 3, "click"]], template: function PageheaderLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-switcher");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-header")(3, "app-sidebar", 1);
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275listener("click", function PageheaderLayoutComponent_Template_div_click_4_listener() {
          return ctx.clickOnBody();
        });
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(7, "app-footer")(8, "app-tab-to-top");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275listener("click", function PageheaderLayoutComponent_Template_div_click_9_listener() {
          return ctx.clearToggle();
        });
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet, HeaderComponent, SidebarComponent, SwitcherComponent, TabToTopComponent, FooterComponent, HoverEffectSidebarDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageheaderLayoutComponent, { className: "PageheaderLayoutComponent", filePath: "src\\app\\shared\\layouts\\pageheader-layout\\pageheader-layout.component.ts", lineNumber: 11 });
})();

// src/app/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static {
    this.\u0275fac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [ColorPickerService], imports: [
      CommonModule,
      RouterModule,
      NgbModule,
      ColorPickerModule,
      OverlayscrollbarsModule,
      ReactiveFormsModule,
      FormsModule,
      FlatpickrModule
    ] });
  }
};

export {
  MenuLateralService,
  AppStateService,
  ColorPickerService,
  ColorPickerDirective,
  ColorPickerModule,
  OverlayScrollbarsComponent,
  OverlayscrollbarsModule,
  ContentLayoutComponent,
  PageHeaderComponent,
  AppShowCodeDirective,
  AuthenticationLayoutComponent,
  esm_default,
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  DashboardHeaderComponent,
  SharedModule
};
/*! Bundled license information:

overlayscrollbars/overlayscrollbars.mjs:
  (*!
   * OverlayScrollbars
   * Version: 2.10.0
   *
   * Copyright (c) Rene Haas | KingSora.
   * https://github.com/KingSora
   *
   * Released under the MIT license.
   *)
*/
//# sourceMappingURL=chunk-RADZCKPS.js.map
