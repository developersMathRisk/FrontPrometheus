import {
  NgxSliderModule,
  SliderComponent
} from "./chunk-U7COLLIU.js";
import {
  AppShowCodeDirective,
  ColorPickerModule,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RangeValueAccessor,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/nouislider/dist/nouislider.mjs
var PipsMode;
(function(PipsMode2) {
  PipsMode2["Range"] = "range";
  PipsMode2["Steps"] = "steps";
  PipsMode2["Positions"] = "positions";
  PipsMode2["Count"] = "count";
  PipsMode2["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function(PipsType2) {
  PipsType2[PipsType2["None"] = -1] = "None";
  PipsType2[PipsType2["NoValue"] = 0] = "NoValue";
  PipsType2[PipsType2["LargeValue"] = 1] = "LargeValue";
  PipsType2[PipsType2["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
function isValidFormatter(entry) {
  return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
  return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
  el.parentElement.removeChild(el);
}
function isSet(value) {
  return value !== null && value !== void 0;
}
function preventDefault(e) {
  e.preventDefault();
}
function unique(array) {
  return array.filter(function(a) {
    return !this[a] ? this[a] = true : false;
  }, {});
}
function closest(value, to) {
  return Math.round(value / to) * to;
}
function offset(elem, orientation) {
  var rect = elem.getBoundingClientRect();
  var doc = elem.ownerDocument;
  var docElem = doc.documentElement;
  var pageOffset = getPageOffset(doc);
  if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
    pageOffset.x = 0;
  }
  return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
function isNumeric(a) {
  return typeof a === "number" && !isNaN(a) && isFinite(a);
}
function addClassFor(element, className, duration) {
  if (duration > 0) {
    addClass(element, className);
    setTimeout(function() {
      removeClass(element, className);
    }, duration);
  }
}
function limit(a) {
  return Math.max(Math.min(a, 100), 0);
}
function asArray(a) {
  return Array.isArray(a) ? a : [a];
}
function countDecimals(numStr) {
  numStr = String(numStr);
  var pieces = numStr.split(".");
  return pieces.length > 1 ? pieces[1].length : 0;
}
function addClass(el, className) {
  if (el.classList && !/\s/.test(className)) {
    el.classList.add(className);
  } else {
    el.className += " " + className;
  }
}
function removeClass(el, className) {
  if (el.classList && !/\s/.test(className)) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  }
}
function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
function getPageOffset(doc) {
  var supportPageOffset = window.pageXOffset !== void 0;
  var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
  var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
  var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
  return {
    x,
    y
  };
}
function getActions() {
  return window.navigator.pointerEnabled ? {
    start: "pointerdown",
    move: "pointermove",
    end: "pointerup"
  } : window.navigator.msPointerEnabled ? {
    start: "MSPointerDown",
    move: "MSPointerMove",
    end: "MSPointerUp"
  } : {
    start: "mousedown touchstart",
    move: "mousemove touchmove",
    end: "mouseup touchend"
  };
}
function getSupportsPassive() {
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {
  }
  return supportsPassive;
}
function getSupportsTouchActionNone() {
  return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
function subRangeRatio(pa, pb) {
  return 100 / (pb - pa);
}
function fromPercentage(range, value, startRange) {
  return value * 100 / (range[startRange + 1] - range[startRange]);
}
function toPercentage(range, value) {
  return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
function isPercentage(range, value) {
  return value * (range[1] - range[0]) / 100 + range[0];
}
function getJ(value, arr) {
  var j = 1;
  while (value >= arr[j]) {
    j += 1;
  }
  return j;
}
function toStepping(xVal, xPct, value) {
  if (value >= xVal.slice(-1)[0]) {
    return 100;
  }
  var j = getJ(value, xVal);
  var va = xVal[j - 1];
  var vb = xVal[j];
  var pa = xPct[j - 1];
  var pb = xPct[j];
  return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
function fromStepping(xVal, xPct, value) {
  if (value >= 100) {
    return xVal.slice(-1)[0];
  }
  var j = getJ(value, xPct);
  var va = xVal[j - 1];
  var vb = xVal[j];
  var pa = xPct[j - 1];
  var pb = xPct[j];
  return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
function getStep(xPct, xSteps, snap, value) {
  if (value === 100) {
    return value;
  }
  var j = getJ(value, xPct);
  var a = xPct[j - 1];
  var b = xPct[j];
  if (snap) {
    if (value - a > (b - a) / 2) {
      return b;
    }
    return a;
  }
  if (!xSteps[j - 1]) {
    return value;
  }
  return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
var Spectrum = (
  /** @class */
  function() {
    function Spectrum2(entry, snap, singleStep) {
      this.xPct = [];
      this.xVal = [];
      this.xSteps = [];
      this.xNumSteps = [];
      this.xHighestCompleteStep = [];
      this.xSteps = [singleStep || false];
      this.xNumSteps = [false];
      this.snap = snap;
      var index;
      var ordered = [];
      Object.keys(entry).forEach(function(index2) {
        ordered.push([asArray(entry[index2]), index2]);
      });
      ordered.sort(function(a, b) {
        return a[0][0] - b[0][0];
      });
      for (index = 0; index < ordered.length; index++) {
        this.handleEntryPoint(ordered[index][1], ordered[index][0]);
      }
      this.xNumSteps = this.xSteps.slice(0);
      for (index = 0; index < this.xNumSteps.length; index++) {
        this.handleStepPoint(index, this.xNumSteps[index]);
      }
    }
    Spectrum2.prototype.getDistance = function(value) {
      var distances = [];
      for (var index = 0; index < this.xNumSteps.length - 1; index++) {
        distances[index] = fromPercentage(this.xVal, value, index);
      }
      return distances;
    };
    Spectrum2.prototype.getAbsoluteDistance = function(value, distances, direction) {
      var xPct_index = 0;
      if (value < this.xPct[this.xPct.length - 1]) {
        while (value > this.xPct[xPct_index + 1]) {
          xPct_index++;
        }
      } else if (value === this.xPct[this.xPct.length - 1]) {
        xPct_index = this.xPct.length - 2;
      }
      if (!direction && value === this.xPct[xPct_index + 1]) {
        xPct_index++;
      }
      if (distances === null) {
        distances = [];
      }
      var start_factor;
      var rest_factor = 1;
      var rest_rel_distance = distances[xPct_index];
      var range_pct = 0;
      var rel_range_distance = 0;
      var abs_distance_counter = 0;
      var range_counter = 0;
      if (direction) {
        start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
      } else {
        start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
      }
      while (rest_rel_distance > 0) {
        range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
        if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
          rel_range_distance = range_pct * start_factor;
          rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
          start_factor = 1;
        } else {
          rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
          rest_factor = 0;
        }
        if (direction) {
          abs_distance_counter = abs_distance_counter - rel_range_distance;
          if (this.xPct.length + range_counter >= 1) {
            range_counter--;
          }
        } else {
          abs_distance_counter = abs_distance_counter + rel_range_distance;
          if (this.xPct.length - range_counter >= 1) {
            range_counter++;
          }
        }
        rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
      }
      return value + abs_distance_counter;
    };
    Spectrum2.prototype.toStepping = function(value) {
      value = toStepping(this.xVal, this.xPct, value);
      return value;
    };
    Spectrum2.prototype.fromStepping = function(value) {
      return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum2.prototype.getStep = function(value) {
      value = getStep(this.xPct, this.xSteps, this.snap, value);
      return value;
    };
    Spectrum2.prototype.getDefaultStep = function(value, isDown, size) {
      var j = getJ(value, this.xPct);
      if (value === 100 || isDown && value === this.xPct[j - 1]) {
        j = Math.max(j - 1, 1);
      }
      return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum2.prototype.getNearbySteps = function(value) {
      var j = getJ(value, this.xPct);
      return {
        stepBefore: {
          startValue: this.xVal[j - 2],
          step: this.xNumSteps[j - 2],
          highestStep: this.xHighestCompleteStep[j - 2]
        },
        thisStep: {
          startValue: this.xVal[j - 1],
          step: this.xNumSteps[j - 1],
          highestStep: this.xHighestCompleteStep[j - 1]
        },
        stepAfter: {
          startValue: this.xVal[j],
          step: this.xNumSteps[j],
          highestStep: this.xHighestCompleteStep[j]
        }
      };
    };
    Spectrum2.prototype.countStepDecimals = function() {
      var stepDecimals = this.xNumSteps.map(countDecimals);
      return Math.max.apply(null, stepDecimals);
    };
    Spectrum2.prototype.hasNoSize = function() {
      return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    Spectrum2.prototype.convert = function(value) {
      return this.getStep(this.toStepping(value));
    };
    Spectrum2.prototype.handleEntryPoint = function(index, value) {
      var percentage;
      if (index === "min") {
        percentage = 0;
      } else if (index === "max") {
        percentage = 100;
      } else {
        percentage = parseFloat(index);
      }
      if (!isNumeric(percentage) || !isNumeric(value[0])) {
        throw new Error("noUiSlider: 'range' value isn't numeric.");
      }
      this.xPct.push(percentage);
      this.xVal.push(value[0]);
      var value1 = Number(value[1]);
      if (!percentage) {
        if (!isNaN(value1)) {
          this.xSteps[0] = value1;
        }
      } else {
        this.xSteps.push(isNaN(value1) ? false : value1);
      }
      this.xHighestCompleteStep.push(0);
    };
    Spectrum2.prototype.handleStepPoint = function(i, n) {
      if (!n) {
        return;
      }
      if (this.xVal[i] === this.xVal[i + 1]) {
        this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
        return;
      }
      this.xSteps[i] = fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
      var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
      var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
      var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
      this.xHighestCompleteStep[i] = step;
    };
    return Spectrum2;
  }()
);
var defaultFormatter = {
  to: function(value) {
    return value === void 0 ? "" : value.toFixed(2);
  },
  from: Number
};
var cssClasses = {
  target: "target",
  base: "base",
  origin: "origin",
  handle: "handle",
  handleLower: "handle-lower",
  handleUpper: "handle-upper",
  touchArea: "touch-area",
  horizontal: "horizontal",
  vertical: "vertical",
  background: "background",
  connect: "connect",
  connects: "connects",
  ltr: "ltr",
  rtl: "rtl",
  textDirectionLtr: "txt-dir-ltr",
  textDirectionRtl: "txt-dir-rtl",
  draggable: "draggable",
  drag: "state-drag",
  tap: "state-tap",
  active: "active",
  tooltip: "tooltip",
  pips: "pips",
  pipsHorizontal: "pips-horizontal",
  pipsVertical: "pips-vertical",
  marker: "marker",
  markerHorizontal: "marker-horizontal",
  markerVertical: "marker-vertical",
  markerNormal: "marker-normal",
  markerLarge: "marker-large",
  markerSub: "marker-sub",
  value: "value",
  valueHorizontal: "value-horizontal",
  valueVertical: "value-vertical",
  valueNormal: "value-normal",
  valueLarge: "value-large",
  valueSub: "value-sub"
};
var INTERNAL_EVENT_NS = {
  tooltips: ".__tooltips",
  aria: ".__aria"
};
function testStep(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'step' is not numeric.");
  }
  parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
  }
  parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
  }
  parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
  }
  parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
  if (typeof entry !== "object" || Array.isArray(entry)) {
    throw new Error("noUiSlider: 'range' is not an object.");
  }
  if (entry.min === void 0 || entry.max === void 0) {
    throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
  }
  parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
  entry = asArray(entry);
  if (!Array.isArray(entry) || !entry.length) {
    throw new Error("noUiSlider: 'start' option is incorrect.");
  }
  parsed.handles = entry.length;
  parsed.start = entry;
}
function testSnap(parsed, entry) {
  if (typeof entry !== "boolean") {
    throw new Error("noUiSlider: 'snap' option must be a boolean.");
  }
  parsed.snap = entry;
}
function testAnimate(parsed, entry) {
  if (typeof entry !== "boolean") {
    throw new Error("noUiSlider: 'animate' option must be a boolean.");
  }
  parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
  if (typeof entry !== "number") {
    throw new Error("noUiSlider: 'animationDuration' option must be a number.");
  }
  parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
  var connect = [false];
  var i;
  if (entry === "lower") {
    entry = [true, false];
  } else if (entry === "upper") {
    entry = [false, true];
  }
  if (entry === true || entry === false) {
    for (i = 1; i < parsed.handles; i++) {
      connect.push(entry);
    }
    connect.push(false);
  } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
    throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
  } else {
    connect = entry;
  }
  parsed.connect = connect;
}
function testOrientation(parsed, entry) {
  switch (entry) {
    case "horizontal":
      parsed.ort = 0;
      break;
    case "vertical":
      parsed.ort = 1;
      break;
    default:
      throw new Error("noUiSlider: 'orientation' option is invalid.");
  }
}
function testMargin(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'margin' option must be numeric.");
  }
  if (entry === 0) {
    return;
  }
  parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
  if (!isNumeric(entry)) {
    throw new Error("noUiSlider: 'limit' option must be numeric.");
  }
  parsed.limit = parsed.spectrum.getDistance(entry);
  if (!parsed.limit || parsed.handles < 2) {
    throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
  }
}
function testPadding(parsed, entry) {
  var index;
  if (!isNumeric(entry) && !Array.isArray(entry)) {
    throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
  }
  if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
    throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
  }
  if (entry === 0) {
    return;
  }
  if (!Array.isArray(entry)) {
    entry = [entry, entry];
  }
  parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
  for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
    if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
      throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
    }
  }
  var totalPadding = entry[0] + entry[1];
  var firstValue = parsed.spectrum.xVal[0];
  var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
  if (totalPadding / (lastValue - firstValue) > 1) {
    throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
  }
}
function testDirection(parsed, entry) {
  switch (entry) {
    case "ltr":
      parsed.dir = 0;
      break;
    case "rtl":
      parsed.dir = 1;
      break;
    default:
      throw new Error("noUiSlider: 'direction' option was not recognized.");
  }
}
function testBehaviour(parsed, entry) {
  if (typeof entry !== "string") {
    throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
  }
  var tap = entry.indexOf("tap") >= 0;
  var drag = entry.indexOf("drag") >= 0;
  var fixed = entry.indexOf("fixed") >= 0;
  var snap = entry.indexOf("snap") >= 0;
  var hover = entry.indexOf("hover") >= 0;
  var unconstrained = entry.indexOf("unconstrained") >= 0;
  var invertConnects = entry.indexOf("invert-connects") >= 0;
  var dragAll = entry.indexOf("drag-all") >= 0;
  var smoothSteps = entry.indexOf("smooth-steps") >= 0;
  if (fixed) {
    if (parsed.handles !== 2) {
      throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
    }
    testMargin(parsed, parsed.start[1] - parsed.start[0]);
  }
  if (invertConnects && parsed.handles !== 2) {
    throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
  }
  if (unconstrained && (parsed.margin || parsed.limit)) {
    throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
  }
  parsed.events = {
    tap: tap || snap,
    drag,
    dragAll,
    smoothSteps,
    fixed,
    snap,
    hover,
    unconstrained,
    invertConnects
  };
}
function testTooltips(parsed, entry) {
  if (entry === false) {
    return;
  }
  if (entry === true || isValidPartialFormatter(entry)) {
    parsed.tooltips = [];
    for (var i = 0; i < parsed.handles; i++) {
      parsed.tooltips.push(entry);
    }
  } else {
    entry = asArray(entry);
    if (entry.length !== parsed.handles) {
      throw new Error("noUiSlider: must pass a formatter for all handles.");
    }
    entry.forEach(function(formatter) {
      if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
        throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
      }
    });
    parsed.tooltips = entry;
  }
}
function testHandleAttributes(parsed, entry) {
  if (entry.length !== parsed.handles) {
    throw new Error("noUiSlider: must pass a attributes for all handles.");
  }
  parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
  if (!isValidPartialFormatter(entry)) {
    throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
  }
  parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
  if (!isValidFormatter(entry)) {
    throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
  }
  parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
  if (typeof entry !== "boolean") {
    throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
  }
  parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
  parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
  if (typeof entry !== "string" && entry !== false) {
    throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
  }
  parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
  if (typeof entry !== "object") {
    throw new Error("noUiSlider: 'cssClasses' must be an object.");
  }
  if (typeof parsed.cssPrefix === "string") {
    parsed.cssClasses = {};
    Object.keys(entry).forEach(function(key) {
      parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
    });
  } else {
    parsed.cssClasses = entry;
  }
}
function testOptions(options) {
  var parsed = {
    margin: null,
    limit: null,
    padding: null,
    animate: true,
    animationDuration: 300,
    ariaFormat: defaultFormatter,
    format: defaultFormatter
  };
  var tests = {
    step: {
      r: false,
      t: testStep
    },
    keyboardPageMultiplier: {
      r: false,
      t: testKeyboardPageMultiplier
    },
    keyboardMultiplier: {
      r: false,
      t: testKeyboardMultiplier
    },
    keyboardDefaultStep: {
      r: false,
      t: testKeyboardDefaultStep
    },
    start: {
      r: true,
      t: testStart
    },
    connect: {
      r: true,
      t: testConnect
    },
    direction: {
      r: true,
      t: testDirection
    },
    snap: {
      r: false,
      t: testSnap
    },
    animate: {
      r: false,
      t: testAnimate
    },
    animationDuration: {
      r: false,
      t: testAnimationDuration
    },
    range: {
      r: true,
      t: testRange
    },
    orientation: {
      r: false,
      t: testOrientation
    },
    margin: {
      r: false,
      t: testMargin
    },
    limit: {
      r: false,
      t: testLimit
    },
    padding: {
      r: false,
      t: testPadding
    },
    behaviour: {
      r: true,
      t: testBehaviour
    },
    ariaFormat: {
      r: false,
      t: testAriaFormat
    },
    format: {
      r: false,
      t: testFormat
    },
    tooltips: {
      r: false,
      t: testTooltips
    },
    keyboardSupport: {
      r: true,
      t: testKeyboardSupport
    },
    documentElement: {
      r: false,
      t: testDocumentElement
    },
    cssPrefix: {
      r: true,
      t: testCssPrefix
    },
    cssClasses: {
      r: true,
      t: testCssClasses
    },
    handleAttributes: {
      r: false,
      t: testHandleAttributes
    }
  };
  var defaults = {
    connect: false,
    direction: "ltr",
    behaviour: "tap",
    orientation: "horizontal",
    keyboardSupport: true,
    cssPrefix: "noUi-",
    cssClasses,
    keyboardPageMultiplier: 5,
    keyboardMultiplier: 1,
    keyboardDefaultStep: 10
  };
  if (options.format && !options.ariaFormat) {
    options.ariaFormat = options.format;
  }
  Object.keys(tests).forEach(function(name) {
    if (!isSet(options[name]) && defaults[name] === void 0) {
      if (tests[name].r) {
        throw new Error("noUiSlider: '" + name + "' is required.");
      }
      return;
    }
    tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
  });
  parsed.pips = options.pips;
  var d = document.createElement("div");
  var msPrefix = d.style.msTransform !== void 0;
  var noPrefix = d.style.transform !== void 0;
  parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
  var styles = [["left", "top"], ["right", "bottom"]];
  parsed.style = styles[parsed.dir][parsed.ort];
  return parsed;
}
function scope(target, options, originalOptions) {
  var actions = getActions();
  var supportsTouchActionNone = getSupportsTouchActionNone();
  var supportsPassive = supportsTouchActionNone && getSupportsPassive();
  var scope_Target = target;
  var scope_Base;
  var scope_ConnectBase;
  var scope_Handles;
  var scope_Connects;
  var scope_Pips;
  var scope_Tooltips;
  var scope_Spectrum = options.spectrum;
  var scope_Values = [];
  var scope_Locations = [];
  var scope_HandleNumbers = [];
  var scope_ActiveHandlesCount = 0;
  var scope_Events = {};
  var scope_ConnectsInverted = false;
  var scope_Document = target.ownerDocument;
  var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
  var scope_Body = scope_Document.body;
  var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
  function addNodeTo(addTarget, className) {
    var div = scope_Document.createElement("div");
    if (className) {
      addClass(div, className);
    }
    addTarget.appendChild(div);
    return div;
  }
  function addOrigin(base, handleNumber) {
    var origin = addNodeTo(base, options.cssClasses.origin);
    var handle = addNodeTo(origin, options.cssClasses.handle);
    addNodeTo(handle, options.cssClasses.touchArea);
    handle.setAttribute("data-handle", String(handleNumber));
    if (options.keyboardSupport) {
      handle.setAttribute("tabindex", "0");
      handle.addEventListener("keydown", function(event) {
        return eventKeydown(event, handleNumber);
      });
    }
    if (options.handleAttributes !== void 0) {
      var attributes_1 = options.handleAttributes[handleNumber];
      Object.keys(attributes_1).forEach(function(attribute) {
        handle.setAttribute(attribute, attributes_1[attribute]);
      });
    }
    handle.setAttribute("role", "slider");
    handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
    if (handleNumber === 0) {
      addClass(handle, options.cssClasses.handleLower);
    } else if (handleNumber === options.handles - 1) {
      addClass(handle, options.cssClasses.handleUpper);
    }
    origin.handle = handle;
    return origin;
  }
  function addConnect(base, add) {
    if (!add) {
      return false;
    }
    return addNodeTo(base, options.cssClasses.connect);
  }
  function addElements(connectOptions, base) {
    scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
    scope_Handles = [];
    scope_Connects = [];
    scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
    for (var i = 0; i < options.handles; i++) {
      scope_Handles.push(addOrigin(base, i));
      scope_HandleNumbers[i] = i;
      scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
    }
  }
  function addSlider(addTarget) {
    addClass(addTarget, options.cssClasses.target);
    if (options.dir === 0) {
      addClass(addTarget, options.cssClasses.ltr);
    } else {
      addClass(addTarget, options.cssClasses.rtl);
    }
    if (options.ort === 0) {
      addClass(addTarget, options.cssClasses.horizontal);
    } else {
      addClass(addTarget, options.cssClasses.vertical);
    }
    var textDirection = getComputedStyle(addTarget).direction;
    if (textDirection === "rtl") {
      addClass(addTarget, options.cssClasses.textDirectionRtl);
    } else {
      addClass(addTarget, options.cssClasses.textDirectionLtr);
    }
    return addNodeTo(addTarget, options.cssClasses.base);
  }
  function addTooltip(handle, handleNumber) {
    if (!options.tooltips || !options.tooltips[handleNumber]) {
      return false;
    }
    return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
  }
  function isSliderDisabled() {
    return scope_Target.hasAttribute("disabled");
  }
  function isHandleDisabled(handleNumber) {
    var handleOrigin = scope_Handles[handleNumber];
    return handleOrigin.hasAttribute("disabled");
  }
  function disable(handleNumber) {
    if (handleNumber !== null && handleNumber !== void 0) {
      scope_Handles[handleNumber].setAttribute("disabled", "");
      scope_Handles[handleNumber].handle.removeAttribute("tabindex");
    } else {
      scope_Target.setAttribute("disabled", "");
      scope_Handles.forEach(function(handle) {
        handle.handle.removeAttribute("tabindex");
      });
    }
  }
  function enable(handleNumber) {
    if (handleNumber !== null && handleNumber !== void 0) {
      scope_Handles[handleNumber].removeAttribute("disabled");
      scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
    } else {
      scope_Target.removeAttribute("disabled");
      scope_Handles.forEach(function(handle) {
        handle.removeAttribute("disabled");
        handle.handle.setAttribute("tabindex", "0");
      });
    }
  }
  function removeTooltips() {
    if (scope_Tooltips) {
      removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
      scope_Tooltips.forEach(function(tooltip) {
        if (tooltip) {
          removeElement(tooltip);
        }
      });
      scope_Tooltips = null;
    }
  }
  function tooltips() {
    removeTooltips();
    scope_Tooltips = scope_Handles.map(addTooltip);
    bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function(values, handleNumber, unencoded) {
      if (!scope_Tooltips || !options.tooltips) {
        return;
      }
      if (scope_Tooltips[handleNumber] === false) {
        return;
      }
      var formattedValue = values[handleNumber];
      if (options.tooltips[handleNumber] !== true) {
        formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
      }
      scope_Tooltips[handleNumber].innerHTML = formattedValue;
    });
  }
  function aria() {
    removeEvent("update" + INTERNAL_EVENT_NS.aria);
    bindEvent("update" + INTERNAL_EVENT_NS.aria, function(values, handleNumber, unencoded, tap, positions) {
      scope_HandleNumbers.forEach(function(index) {
        var handle = scope_Handles[index];
        var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
        var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
        var now = positions[index];
        var text = String(options.ariaFormat.to(unencoded[index]));
        min = scope_Spectrum.fromStepping(min).toFixed(1);
        max = scope_Spectrum.fromStepping(max).toFixed(1);
        now = scope_Spectrum.fromStepping(now).toFixed(1);
        handle.children[0].setAttribute("aria-valuemin", min);
        handle.children[0].setAttribute("aria-valuemax", max);
        handle.children[0].setAttribute("aria-valuenow", now);
        handle.children[0].setAttribute("aria-valuetext", text);
      });
    });
  }
  function getGroup(pips2) {
    if (pips2.mode === PipsMode.Range || pips2.mode === PipsMode.Steps) {
      return scope_Spectrum.xVal;
    }
    if (pips2.mode === PipsMode.Count) {
      if (pips2.values < 2) {
        throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
      }
      var interval = pips2.values - 1;
      var spread = 100 / interval;
      var values = [];
      while (interval--) {
        values[interval] = interval * spread;
      }
      values.push(100);
      return mapToRange(values, pips2.stepped);
    }
    if (pips2.mode === PipsMode.Positions) {
      return mapToRange(pips2.values, pips2.stepped);
    }
    if (pips2.mode === PipsMode.Values) {
      if (pips2.stepped) {
        return pips2.values.map(function(value) {
          return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
        });
      }
      return pips2.values;
    }
    return [];
  }
  function mapToRange(values, stepped) {
    return values.map(function(value) {
      return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
    });
  }
  function generateSpread(pips2) {
    function safeIncrement(value, increment) {
      return Number((value + increment).toFixed(7));
    }
    var group = getGroup(pips2);
    var indexes = {};
    var firstInRange = scope_Spectrum.xVal[0];
    var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
    var ignoreFirst = false;
    var ignoreLast = false;
    var prevPct = 0;
    group = unique(group.slice().sort(function(a, b) {
      return a - b;
    }));
    if (group[0] !== firstInRange) {
      group.unshift(firstInRange);
      ignoreFirst = true;
    }
    if (group[group.length - 1] !== lastInRange) {
      group.push(lastInRange);
      ignoreLast = true;
    }
    group.forEach(function(current, index) {
      var step;
      var i;
      var q;
      var low = current;
      var high = group[index + 1];
      var newPct;
      var pctDifference;
      var pctPos;
      var type;
      var steps;
      var realSteps;
      var stepSize;
      var isSteps = pips2.mode === PipsMode.Steps;
      if (isSteps) {
        step = scope_Spectrum.xNumSteps[index];
      }
      if (!step) {
        step = high - low;
      }
      if (high === void 0) {
        high = low;
      }
      step = Math.max(step, 1e-7);
      for (i = low; i <= high; i = safeIncrement(i, step)) {
        newPct = scope_Spectrum.toStepping(i);
        pctDifference = newPct - prevPct;
        steps = pctDifference / (pips2.density || 1);
        realSteps = Math.round(steps);
        stepSize = pctDifference / realSteps;
        for (q = 1; q <= realSteps; q += 1) {
          pctPos = prevPct + q * stepSize;
          indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
        }
        type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
        if (!index && ignoreFirst && i !== high) {
          type = 0;
        }
        if (!(i === high && ignoreLast)) {
          indexes[newPct.toFixed(5)] = [i, type];
        }
        prevPct = newPct;
      }
    });
    return indexes;
  }
  function addMarking(spread, filterFunc, formatter) {
    var _a, _b;
    var element = scope_Document.createElement("div");
    var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, _a);
    var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, _b);
    var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
    var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
    addClass(element, options.cssClasses.pips);
    addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
    function getClasses(type, source) {
      var a = source === options.cssClasses.value;
      var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
      var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
      return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
    }
    function addSpread(offset2, value, type) {
      type = filterFunc ? filterFunc(value, type) : type;
      if (type === PipsType.None) {
        return;
      }
      var node = addNodeTo(element, false);
      node.className = getClasses(type, options.cssClasses.marker);
      node.style[options.style] = offset2 + "%";
      if (type > PipsType.NoValue) {
        node = addNodeTo(element, false);
        node.className = getClasses(type, options.cssClasses.value);
        node.setAttribute("data-value", String(value));
        node.style[options.style] = offset2 + "%";
        node.innerHTML = String(formatter.to(value));
      }
    }
    Object.keys(spread).forEach(function(offset2) {
      addSpread(offset2, spread[offset2][0], spread[offset2][1]);
    });
    return element;
  }
  function removePips() {
    if (scope_Pips) {
      removeElement(scope_Pips);
      scope_Pips = null;
    }
  }
  function pips(pips2) {
    removePips();
    var spread = generateSpread(pips2);
    var filter = pips2.filter;
    var format = pips2.format || {
      to: function(value) {
        return String(Math.round(value));
      }
    };
    scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
    return scope_Pips;
  }
  function baseSize() {
    var rect = scope_Base.getBoundingClientRect();
    var alt = "offset" + ["Width", "Height"][options.ort];
    return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
  }
  function attachEvent(events, element, callback, data) {
    var method = function(event) {
      var e = fixEvent(event, data.pageOffset, data.target || element);
      if (!e) {
        return false;
      }
      if (isSliderDisabled() && !data.doNotReject) {
        return false;
      }
      if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
        return false;
      }
      if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) {
        return false;
      }
      if (data.hover && e.buttons) {
        return false;
      }
      if (!supportsPassive) {
        e.preventDefault();
      }
      e.calcPoint = e.points[options.ort];
      callback(e, data);
      return;
    };
    var methods = [];
    events.split(" ").forEach(function(eventName) {
      element.addEventListener(eventName, method, supportsPassive ? {
        passive: true
      } : false);
      methods.push([eventName, method]);
    });
    return methods;
  }
  function fixEvent(e, pageOffset, eventTarget) {
    var touch = e.type.indexOf("touch") === 0;
    var mouse = e.type.indexOf("mouse") === 0;
    var pointer = e.type.indexOf("pointer") === 0;
    var x = 0;
    var y = 0;
    if (e.type.indexOf("MSPointer") === 0) {
      pointer = true;
    }
    if (e.type === "mousedown" && !e.buttons && !e.touches) {
      return false;
    }
    if (touch) {
      var isTouchOnTarget = function(checkTouch) {
        var target2 = checkTouch.target;
        return target2 === eventTarget || eventTarget.contains(target2) || e.composed && e.composedPath().shift() === eventTarget;
      };
      if (e.type === "touchstart") {
        var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
        if (targetTouches.length > 1) {
          return false;
        }
        x = targetTouches[0].pageX;
        y = targetTouches[0].pageY;
      } else {
        var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
        if (!targetTouch) {
          return false;
        }
        x = targetTouch.pageX;
        y = targetTouch.pageY;
      }
    }
    pageOffset = pageOffset || getPageOffset(scope_Document);
    if (mouse || pointer) {
      x = e.clientX + pageOffset.x;
      y = e.clientY + pageOffset.y;
    }
    e.pageOffset = pageOffset;
    e.points = [x, y];
    e.cursor = mouse || pointer;
    return e;
  }
  function calcPointToPercentage(calcPoint) {
    var location = calcPoint - offset(scope_Base, options.ort);
    var proposal = location * 100 / baseSize();
    proposal = limit(proposal);
    return options.dir ? 100 - proposal : proposal;
  }
  function getClosestHandle(clickedPosition) {
    var smallestDifference = 100;
    var handleNumber = false;
    scope_Handles.forEach(function(handle, index) {
      if (isHandleDisabled(index)) {
        return;
      }
      var handlePosition = scope_Locations[index];
      var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
      var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
      var isCloser = differenceWithThisHandle < smallestDifference;
      var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
      if (isCloser || isCloserAfter || clickAtEdge) {
        handleNumber = index;
        smallestDifference = differenceWithThisHandle;
      }
    });
    return handleNumber;
  }
  function documentLeave(event, data) {
    if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
      eventEnd(event, data);
    }
  }
  function eventMove(event, data) {
    if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
      return eventEnd(event, data);
    }
    var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
    var proposal = movement * 100 / data.baseSize;
    moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
  }
  function eventEnd(event, data) {
    if (data.handle) {
      removeClass(data.handle, options.cssClasses.active);
      scope_ActiveHandlesCount -= 1;
    }
    data.listeners.forEach(function(c) {
      scope_DocumentElement.removeEventListener(c[0], c[1]);
    });
    if (scope_ActiveHandlesCount === 0) {
      removeClass(scope_Target, options.cssClasses.drag);
      setZindex();
      if (event.cursor) {
        scope_Body.style.cursor = "";
        scope_Body.removeEventListener("selectstart", preventDefault);
      }
    }
    if (options.events.smoothSteps) {
      data.handleNumbers.forEach(function(handleNumber) {
        setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
      });
      data.handleNumbers.forEach(function(handleNumber) {
        fireEvent("update", handleNumber);
      });
    }
    data.handleNumbers.forEach(function(handleNumber) {
      fireEvent("change", handleNumber);
      fireEvent("set", handleNumber);
      fireEvent("end", handleNumber);
    });
  }
  function eventStart(event, data) {
    if (data.handleNumbers.some(isHandleDisabled)) {
      return;
    }
    var handle;
    if (data.handleNumbers.length === 1) {
      var handleOrigin = scope_Handles[data.handleNumbers[0]];
      handle = handleOrigin.children[0];
      scope_ActiveHandlesCount += 1;
      addClass(handle, options.cssClasses.active);
    }
    event.stopPropagation();
    var listeners = [];
    var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
      // The event target has changed so we need to propagate the original one so that we keep
      // relying on it to extract target touches.
      target: event.target,
      handle,
      connect: data.connect,
      listeners,
      startCalcPoint: event.calcPoint,
      baseSize: baseSize(),
      pageOffset: event.pageOffset,
      handleNumbers: data.handleNumbers,
      buttonsProperty: event.buttons,
      locations: scope_Locations.slice()
    });
    var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
      target: event.target,
      handle,
      listeners,
      doNotReject: true,
      handleNumbers: data.handleNumbers
    });
    var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
      target: event.target,
      handle,
      listeners,
      doNotReject: true,
      handleNumbers: data.handleNumbers
    });
    listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
    if (event.cursor) {
      scope_Body.style.cursor = getComputedStyle(event.target).cursor;
      if (scope_Handles.length > 1) {
        addClass(scope_Target, options.cssClasses.drag);
      }
      scope_Body.addEventListener("selectstart", preventDefault, false);
    }
    data.handleNumbers.forEach(function(handleNumber) {
      fireEvent("start", handleNumber);
    });
  }
  function eventTap(event) {
    event.stopPropagation();
    var proposal = calcPointToPercentage(event.calcPoint);
    var handleNumber = getClosestHandle(proposal);
    if (handleNumber === false) {
      return;
    }
    if (!options.events.snap) {
      addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
    }
    setHandle(handleNumber, proposal, true, true);
    setZindex();
    fireEvent("slide", handleNumber, true);
    fireEvent("update", handleNumber, true);
    if (!options.events.snap) {
      fireEvent("change", handleNumber, true);
      fireEvent("set", handleNumber, true);
    } else {
      eventStart(event, {
        handleNumbers: [handleNumber]
      });
    }
  }
  function eventHover(event) {
    var proposal = calcPointToPercentage(event.calcPoint);
    var to = scope_Spectrum.getStep(proposal);
    var value = scope_Spectrum.fromStepping(to);
    Object.keys(scope_Events).forEach(function(targetEvent) {
      if ("hover" === targetEvent.split(".")[0]) {
        scope_Events[targetEvent].forEach(function(callback) {
          callback.call(scope_Self, value);
        });
      }
    });
  }
  function eventKeydown(event, handleNumber) {
    if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
      return false;
    }
    var horizontalKeys = ["Left", "Right"];
    var verticalKeys = ["Down", "Up"];
    var largeStepKeys = ["PageDown", "PageUp"];
    var edgeKeys = ["Home", "End"];
    if (options.dir && !options.ort) {
      horizontalKeys.reverse();
    } else if (options.ort && !options.dir) {
      verticalKeys.reverse();
      largeStepKeys.reverse();
    }
    var key = event.key.replace("Arrow", "");
    var isLargeDown = key === largeStepKeys[0];
    var isLargeUp = key === largeStepKeys[1];
    var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
    var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
    var isMin = key === edgeKeys[0];
    var isMax = key === edgeKeys[1];
    if (!isDown && !isUp && !isMin && !isMax) {
      return true;
    }
    event.preventDefault();
    var to;
    if (isUp || isDown) {
      var direction = isDown ? 0 : 1;
      var steps = getNextStepsForHandle(handleNumber);
      var step = steps[direction];
      if (step === null) {
        return false;
      }
      if (step === false) {
        step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
      }
      if (isLargeUp || isLargeDown) {
        step *= options.keyboardPageMultiplier;
      } else {
        step *= options.keyboardMultiplier;
      }
      step = Math.max(step, 1e-7);
      step = (isDown ? -1 : 1) * step;
      to = scope_Values[handleNumber] + step;
    } else if (isMax) {
      to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
    } else {
      to = options.spectrum.xVal[0];
    }
    setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
    fireEvent("slide", handleNumber);
    fireEvent("update", handleNumber);
    fireEvent("change", handleNumber);
    fireEvent("set", handleNumber);
    return false;
  }
  function bindSliderEvents(behaviour) {
    if (!behaviour.fixed) {
      scope_Handles.forEach(function(handle, index) {
        attachEvent(actions.start, handle.children[0], eventStart, {
          handleNumbers: [index]
        });
      });
    }
    if (behaviour.tap) {
      attachEvent(actions.start, scope_Base, eventTap, {});
    }
    if (behaviour.hover) {
      attachEvent(actions.move, scope_Base, eventHover, {
        hover: true
      });
    }
    if (behaviour.drag) {
      scope_Connects.forEach(function(connect, index) {
        if (connect === false || index === 0 || index === scope_Connects.length - 1) {
          return;
        }
        var handleBefore = scope_Handles[index - 1];
        var handleAfter = scope_Handles[index];
        var eventHolders = [connect];
        var handlesToDrag = [handleBefore, handleAfter];
        var handleNumbersToDrag = [index - 1, index];
        addClass(connect, options.cssClasses.draggable);
        if (behaviour.fixed) {
          eventHolders.push(handleBefore.children[0]);
          eventHolders.push(handleAfter.children[0]);
        }
        if (behaviour.dragAll) {
          handlesToDrag = scope_Handles;
          handleNumbersToDrag = scope_HandleNumbers;
        }
        eventHolders.forEach(function(eventHolder) {
          attachEvent(actions.start, eventHolder, eventStart, {
            handles: handlesToDrag,
            handleNumbers: handleNumbersToDrag,
            connect
          });
        });
      });
    }
  }
  function bindEvent(namespacedEvent, callback) {
    scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
    scope_Events[namespacedEvent].push(callback);
    if (namespacedEvent.split(".")[0] === "update") {
      scope_Handles.forEach(function(a, index) {
        fireEvent("update", index);
      });
    }
  }
  function isInternalNamespace(namespace) {
    return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
  }
  function removeEvent(namespacedEvent) {
    var event = namespacedEvent && namespacedEvent.split(".")[0];
    var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
    Object.keys(scope_Events).forEach(function(bind) {
      var tEvent = bind.split(".")[0];
      var tNamespace = bind.substring(tEvent.length);
      if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
        if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
          delete scope_Events[bind];
        }
      }
    });
  }
  function fireEvent(eventName, handleNumber, tap) {
    Object.keys(scope_Events).forEach(function(targetEvent) {
      var eventType = targetEvent.split(".")[0];
      if (eventName === eventType) {
        scope_Events[targetEvent].forEach(function(callback) {
          callback.call(
            // Use the slider public API as the scope ('this')
            scope_Self,
            // Return values as array, so arg_1[arg_2] is always valid.
            scope_Values.map(options.format.to),
            // Handle index, 0 or 1
            handleNumber,
            // Un-formatted slider values
            scope_Values.slice(),
            // Event is fired by tap, true or false
            tap || false,
            // Left offset of the handle, in relation to the slider
            scope_Locations.slice(),
            // add the slider public API to an accessible parameter when this is unavailable
            scope_Self
          );
        });
      }
    });
  }
  function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
    var distance;
    if (scope_Handles.length > 1 && !options.events.unconstrained) {
      if (lookBackward && handleNumber > 0) {
        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
        to = Math.max(to, distance);
      }
      if (lookForward && handleNumber < scope_Handles.length - 1) {
        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
        to = Math.min(to, distance);
      }
    }
    if (scope_Handles.length > 1 && options.limit) {
      if (lookBackward && handleNumber > 0) {
        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
        to = Math.min(to, distance);
      }
      if (lookForward && handleNumber < scope_Handles.length - 1) {
        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
        to = Math.max(to, distance);
      }
    }
    if (options.padding) {
      if (handleNumber === 0) {
        distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
        to = Math.max(to, distance);
      }
      if (handleNumber === scope_Handles.length - 1) {
        distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
        to = Math.min(to, distance);
      }
    }
    if (!smoothSteps) {
      to = scope_Spectrum.getStep(to);
    }
    to = limit(to);
    if (to === reference[handleNumber] && !getValue) {
      return false;
    }
    return to;
  }
  function inRuleOrder(v, a) {
    var o = options.ort;
    return (o ? a : v) + ", " + (o ? v : a);
  }
  function moveHandles(upward, proposal, locations, handleNumbers, connect) {
    var proposals = locations.slice();
    var firstHandle = handleNumbers[0];
    var smoothSteps = options.events.smoothSteps;
    var b = [!upward, upward];
    var f = [upward, !upward];
    handleNumbers = handleNumbers.slice();
    if (upward) {
      handleNumbers.reverse();
    }
    if (handleNumbers.length > 1) {
      handleNumbers.forEach(function(handleNumber, o) {
        var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
        if (to === false) {
          proposal = 0;
        } else {
          proposal = to - proposals[handleNumber];
          proposals[handleNumber] = to;
        }
      });
    } else {
      b = f = [true];
    }
    var state = false;
    handleNumbers.forEach(function(handleNumber, o) {
      state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
    });
    if (state) {
      handleNumbers.forEach(function(handleNumber) {
        fireEvent("update", handleNumber);
        fireEvent("slide", handleNumber);
      });
      if (connect != void 0) {
        fireEvent("drag", firstHandle);
      }
    }
  }
  function transformDirection(a, b) {
    return options.dir ? 100 - a - b : a;
  }
  function updateHandlePosition(handleNumber, to) {
    scope_Locations[handleNumber] = to;
    scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
    var translation = transformDirection(to, 0) - scope_DirOffset;
    var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
    scope_Handles[handleNumber].style[options.transformRule] = translateRule;
    if (options.events.invertConnects && scope_Locations.length > 1) {
      var handlesAreInOrder = scope_Locations.every(function(position, index, locations) {
        return index === 0 || position >= locations[index - 1];
      });
      if (scope_ConnectsInverted !== !handlesAreInOrder) {
        invertConnects();
        return;
      }
    }
    updateConnect(handleNumber);
    updateConnect(handleNumber + 1);
    if (scope_ConnectsInverted) {
      updateConnect(handleNumber - 1);
      updateConnect(handleNumber + 2);
    }
  }
  function setZindex() {
    scope_HandleNumbers.forEach(function(handleNumber) {
      var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
      var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
      scope_Handles[handleNumber].style.zIndex = String(zIndex);
    });
  }
  function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
    if (!exactInput) {
      to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
    }
    if (to === false) {
      return false;
    }
    updateHandlePosition(handleNumber, to);
    return true;
  }
  function updateConnect(index) {
    if (!scope_Connects[index]) {
      return;
    }
    var locations = scope_Locations.slice();
    if (scope_ConnectsInverted) {
      locations.sort(function(a, b) {
        return a - b;
      });
    }
    var l = 0;
    var h = 100;
    if (index !== 0) {
      l = locations[index - 1];
    }
    if (index !== scope_Connects.length - 1) {
      h = locations[index];
    }
    var connectWidth = h - l;
    var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
    var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
    scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
  }
  function resolveToValue(to, handleNumber) {
    if (to === null || to === false || to === void 0) {
      return scope_Locations[handleNumber];
    }
    if (typeof to === "number") {
      to = String(to);
    }
    to = options.format.from(to);
    if (to !== false) {
      to = scope_Spectrum.toStepping(to);
    }
    if (to === false || isNaN(to)) {
      return scope_Locations[handleNumber];
    }
    return to;
  }
  function valueSet(input, fireSetEvent, exactInput) {
    var values = asArray(input);
    var isInit = scope_Locations[0] === void 0;
    fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
    if (options.animate && !isInit) {
      addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
    }
    scope_HandleNumbers.forEach(function(handleNumber) {
      setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
    });
    var i = scope_HandleNumbers.length === 1 ? 0 : 1;
    if (isInit && scope_Spectrum.hasNoSize()) {
      exactInput = true;
      scope_Locations[0] = 0;
      if (scope_HandleNumbers.length > 1) {
        var space_1 = 100 / (scope_HandleNumbers.length - 1);
        scope_HandleNumbers.forEach(function(handleNumber) {
          scope_Locations[handleNumber] = handleNumber * space_1;
        });
      }
    }
    for (; i < scope_HandleNumbers.length; ++i) {
      scope_HandleNumbers.forEach(function(handleNumber) {
        setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
      });
    }
    setZindex();
    scope_HandleNumbers.forEach(function(handleNumber) {
      fireEvent("update", handleNumber);
      if (values[handleNumber] !== null && fireSetEvent) {
        fireEvent("set", handleNumber);
      }
    });
  }
  function valueReset(fireSetEvent) {
    valueSet(options.start, fireSetEvent);
  }
  function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
    handleNumber = Number(handleNumber);
    if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
      throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
    }
    setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
    fireEvent("update", handleNumber);
    if (fireSetEvent) {
      fireEvent("set", handleNumber);
    }
  }
  function valueGet(unencoded) {
    if (unencoded === void 0) {
      unencoded = false;
    }
    if (unencoded) {
      return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
    }
    var values = scope_Values.map(options.format.to);
    if (values.length === 1) {
      return values[0];
    }
    return values;
  }
  function destroy() {
    removeEvent(INTERNAL_EVENT_NS.aria);
    removeEvent(INTERNAL_EVENT_NS.tooltips);
    Object.keys(options.cssClasses).forEach(function(key) {
      removeClass(scope_Target, options.cssClasses[key]);
    });
    while (scope_Target.firstChild) {
      scope_Target.removeChild(scope_Target.firstChild);
    }
    delete scope_Target.noUiSlider;
  }
  function getNextStepsForHandle(handleNumber) {
    var location = scope_Locations[handleNumber];
    var nearbySteps = scope_Spectrum.getNearbySteps(location);
    var value = scope_Values[handleNumber];
    var increment = nearbySteps.thisStep.step;
    var decrement = null;
    if (options.snap) {
      return [value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null];
    }
    if (increment !== false) {
      if (value + increment > nearbySteps.stepAfter.startValue) {
        increment = nearbySteps.stepAfter.startValue - value;
      }
    }
    if (value > nearbySteps.thisStep.startValue) {
      decrement = nearbySteps.thisStep.step;
    } else if (nearbySteps.stepBefore.step === false) {
      decrement = false;
    } else {
      decrement = value - nearbySteps.stepBefore.highestStep;
    }
    if (location === 100) {
      increment = null;
    } else if (location === 0) {
      decrement = null;
    }
    var stepDecimals = scope_Spectrum.countStepDecimals();
    if (increment !== null && increment !== false) {
      increment = Number(increment.toFixed(stepDecimals));
    }
    if (decrement !== null && decrement !== false) {
      decrement = Number(decrement.toFixed(stepDecimals));
    }
    return [decrement, increment];
  }
  function getNextSteps() {
    return scope_HandleNumbers.map(getNextStepsForHandle);
  }
  function updateOptions(optionsToUpdate, fireSetEvent) {
    var v = valueGet();
    var updateAble = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips", "connect"];
    updateAble.forEach(function(name) {
      if (optionsToUpdate[name] !== void 0) {
        originalOptions[name] = optionsToUpdate[name];
      }
    });
    var newOptions = testOptions(originalOptions);
    updateAble.forEach(function(name) {
      if (optionsToUpdate[name] !== void 0) {
        options[name] = newOptions[name];
      }
    });
    scope_Spectrum = newOptions.spectrum;
    options.margin = newOptions.margin;
    options.limit = newOptions.limit;
    options.padding = newOptions.padding;
    if (options.pips) {
      pips(options.pips);
    } else {
      removePips();
    }
    if (options.tooltips) {
      tooltips();
    } else {
      removeTooltips();
    }
    scope_Locations = [];
    valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
    if (optionsToUpdate.connect) {
      updateConnectOption();
    }
  }
  function updateConnectOption() {
    while (scope_ConnectBase.firstChild) {
      scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
    }
    for (var i = 0; i <= options.handles; i++) {
      scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
      updateConnect(i);
    }
    bindSliderEvents({
      drag: options.events.drag,
      fixed: true
    });
  }
  function invertConnects() {
    scope_ConnectsInverted = !scope_ConnectsInverted;
    testConnect(
      options,
      // inverse the connect boolean array
      options.connect.map(function(b) {
        return !b;
      })
    );
    updateConnectOption();
  }
  function setupSlider() {
    scope_Base = addSlider(scope_Target);
    addElements(options.connect, scope_Base);
    bindSliderEvents(options.events);
    valueSet(options.start);
    if (options.pips) {
      pips(options.pips);
    }
    if (options.tooltips) {
      tooltips();
    }
    aria();
  }
  setupSlider();
  var scope_Self = {
    destroy,
    steps: getNextSteps,
    on: bindEvent,
    off: removeEvent,
    get: valueGet,
    set: valueSet,
    setHandle: valueSetHandle,
    reset: valueReset,
    disable,
    enable,
    // Exposed for unit testing, don't use this in your application.
    __moveHandles: function(upward, proposal, handleNumbers) {
      moveHandles(upward, proposal, scope_Locations, handleNumbers);
    },
    options: originalOptions,
    updateOptions,
    target: scope_Target,
    removePips,
    removeTooltips,
    getPositions: function() {
      return scope_Locations.slice();
    },
    getTooltips: function() {
      return scope_Tooltips;
    },
    getOrigins: function() {
      return scope_Handles;
    },
    pips
    // Issue #594
  };
  return scope_Self;
}
function initialize(target, originalOptions) {
  if (!target || !target.nodeName) {
    throw new Error("noUiSlider: create requires a single element, got: " + target);
  }
  if (target.noUiSlider) {
    throw new Error("noUiSlider: Slider was already initialized.");
  }
  var options = testOptions(originalOptions);
  var api = scope(target, options, originalOptions);
  target.noUiSlider = api;
  return api;
}

// node_modules/ng2-nouislider/fesm2020/ng2-nouislider.mjs
var DefaultFormatter = class {
  to(value) {
    return String(parseFloat(parseFloat(String(value)).toFixed(2)));
  }
  from(value) {
    return parseFloat(value);
  }
};
var NouisliderComponent = class {
  constructor(ngZone, el, renderer) {
    this.ngZone = ngZone;
    this.el = el;
    this.renderer = renderer;
    this.handles = [];
    this.config = {};
    this.change = new EventEmitter(true);
    this.update = new EventEmitter(true);
    this.slide = new EventEmitter(true);
    this.set = new EventEmitter(true);
    this.start = new EventEmitter(true);
    this.end = new EventEmitter(true);
    this.onChange = Function.prototype;
    this.cleanups = [];
    this.eventHandler = (emitter, values, handle, unencoded) => {
      let v = this.toValues(values);
      let emitEvents = false;
      if (this.value === void 0) {
        this.value = v;
        return;
      }
      if (Array.isArray(v) && this.value[handle] != v[handle]) {
        emitEvents = true;
      }
      if (!Array.isArray(v) && this.value != v) {
        emitEvents = true;
      }
      if (emitEvents) {
        this.ngZone.run(() => {
          if (emitter.observers.length > 0) {
            emitter.emit(v);
          }
          this.onChange(v);
        });
      }
      if (Array.isArray(v)) {
        this.value[handle] = v[handle];
      } else {
        this.value = v;
      }
    };
    this.defaultKeyHandler = (e) => {
      let stepSize = this.slider.steps();
      let index = parseInt(e.target.getAttribute("data-handle"));
      let sign = 1;
      let multiplier = 1;
      let step = 0;
      let delta = 0;
      switch (e.which) {
        case 34:
          multiplier = this.config.pageSteps;
          break;
        case 40:
        case 37:
          sign = -1;
          step = stepSize[index][0];
          e.preventDefault();
          break;
        case 33:
          multiplier = this.config.pageSteps;
          break;
        case 38:
        case 39:
          step = stepSize[index][1];
          e.preventDefault();
          break;
        default:
          break;
      }
      delta = sign * multiplier * step;
      let newValue;
      if (Array.isArray(this.value)) {
        newValue = [...this.value];
        newValue[index] = newValue[index] + delta;
      } else {
        newValue = this.value + delta;
      }
      this.slider.set(newValue);
    };
  }
  ngOnChanges(changes) {
    if (this.slider && (changes.min || changes.max || changes.step || changes.range)) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.slider.updateOptions({
            range: Object.assign({}, {
              min: this.min,
              max: this.max
            }, this.range || {}),
            step: this.step
          });
        });
      });
    }
  }
  ngOnDestroy() {
    this.slider.destroy();
    while (this.cleanups.length) {
      this.cleanups.pop()?.();
    }
  }
  toValues(values) {
    let v = values.map(this.config.format.from);
    return v.length == 1 ? v[0] : v;
  }
  writeValue(value) {
    if (this.slider) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.slider.set(value);
        });
      });
    } else if (value !== null) {
      this.value = value;
      this.createSlider(value);
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
  }
  setDisabledState(isDisabled) {
    isDisabled ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], "disabled", "true") : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], "disabled");
  }
  createSlider(initialValue) {
    let inputsConfig = JSON.parse(JSON.stringify({
      behaviour: this.behaviour,
      connect: this.connect,
      limit: this.limit,
      start: initialValue,
      step: this.step,
      pageSteps: this.pageSteps,
      keyboard: this.keyboard,
      onKeydown: this.onKeydown,
      range: this.range || this.config.range || {
        min: this.min,
        max: this.max
      },
      tooltips: this.tooltips,
      snap: this.snap,
      animate: this.animate
    }));
    inputsConfig.tooltips = this.tooltips || this.config.tooltips;
    inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
    this.ngZone.runOutsideAngular(() => {
      this.slider = initialize(this.el.nativeElement.querySelector("div"), Object.assign(this.config, inputsConfig));
    });
    this.handles = [].slice.call(this.el.nativeElement.querySelectorAll(".noUi-handle"));
    if (this.config.keyboard) {
      if (this.config.pageSteps === void 0) {
        this.config.pageSteps = 10;
      }
      for (const handle of this.handles) {
        handle.setAttribute("tabindex", 0);
        const onKeydown = this.config.onKeydown || this.defaultKeyHandler;
        this.ngZone.runOutsideAngular(() => {
          this.cleanups.push(this.renderer.listen(handle, "keydown", onKeydown), this.renderer.listen(handle, "click", () => {
            handle.focus();
          }));
        });
      }
    }
    this.slider.on("set", (values, handle, unencoded) => {
      this.eventHandler(this.set, values, handle, unencoded);
    });
    this.slider.on("update", (values, handle, unencoded) => {
      if (this.update.observers.length > 0) {
        this.ngZone.run(() => {
          this.update.emit(this.toValues(values));
        });
      }
    });
    this.slider.on("change", (values, handle, unencoded) => {
      if (this.change.observers.length > 0) {
        this.ngZone.run(() => {
          this.change.emit(this.toValues(values));
        });
      }
    });
    this.slider.on("slide", (values, handle, unencoded) => {
      this.eventHandler(this.slide, values, handle, unencoded);
    });
    this.slider.on("start", (values, handle, unencoded) => {
      if (this.start.observers.length > 0) {
        this.ngZone.run(() => {
          this.start.emit(this.toValues(values));
        });
      }
    });
    this.slider.on("end", (values, handle, unencoded) => {
      if (this.end.observers.length > 0) {
        this.ngZone.run(() => {
          this.end.emit(this.toValues(values));
        });
      }
    });
  }
};
NouisliderComponent.\u0275fac = function NouisliderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NouisliderComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
NouisliderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NouisliderComponent,
  selectors: [["nouislider"]],
  hostVars: 2,
  hostBindings: function NouisliderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng2-nouislider", true);
    }
  },
  inputs: {
    disabled: "disabled",
    behaviour: "behaviour",
    connect: "connect",
    limit: "limit",
    min: "min",
    max: "max",
    snap: "snap",
    animate: "animate",
    range: "range",
    step: "step",
    format: "format",
    pageSteps: "pageSteps",
    config: "config",
    keyboard: "keyboard",
    onKeydown: "onKeydown",
    tooltips: "tooltips"
  },
  outputs: {
    change: "change",
    update: "update",
    slide: "slide",
    set: "set",
    start: "start",
    end: "end"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NouisliderComponent),
    multi: true
  }]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 1,
  template: function NouisliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div");
    }
    if (rf & 2) {
      \u0275\u0275attribute("disabled", ctx.disabled ? true : void 0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block;margin-top:1rem;margin-bottom:1rem}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NouisliderComponent, [{
    type: Component,
    args: [{
      selector: "nouislider",
      host: {
        "[class.ng2-nouislider]": "true"
      },
      template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NouisliderComponent),
        multi: true
      }],
      standalone: true,
      styles: [":host{display:block;margin-top:1rem;margin-bottom:1rem}\n"]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    disabled: [{
      type: Input
    }],
    behaviour: [{
      type: Input
    }],
    connect: [{
      type: Input
    }],
    limit: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    snap: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    range: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    pageSteps: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    onKeydown: [{
      type: Input
    }],
    tooltips: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    update: [{
      type: Output
    }],
    slide: [{
      type: Output
    }],
    set: [{
      type: Output
    }],
    start: [{
      type: Output
    }],
    end: [{
      type: Output
    }]
  });
})();
var NouisliderModule = class {
};
NouisliderModule.\u0275fac = function NouisliderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NouisliderModule)();
};
NouisliderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NouisliderModule
});
NouisliderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NouisliderComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NouisliderModule, [{
    type: NgModule,
    args: [{
      exports: [NouisliderComponent],
      imports: [NouisliderComponent]
    }]
  }], null, null);
})();

// src/app/components/forms/form-elements/rangeslider/rangeslider.component.ts
var _c0 = ["slider6"];
var _c1 = ["slider7"];
var _c2 = ["lockButton"];
var _c3 = ["slider6Value"];
var _c4 = ["slider7Value"];
var _c5 = () => [true, true];
var RangesliderComponent = class _RangesliderComponent {
  constructor() {
    this.someRange1 = [3, 7];
    this.someRange2 = [4];
    this.someRange3 = [3];
    this.someRange4 = [4, 8];
    this.someRange5 = [4, 8];
    this.someRange6 = [4, 7];
    this.someRange7 = [3, 7];
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.sliderModel = [127, 127, 127];
    this.minValue2 = 50;
    this.maxValue2 = 90;
    this.options5 = {
      floor: 0,
      ceil: 12,
      showSelectionBar: true,
      getSelectionBarColor: (value) => {
        if (value <= 3) {
          return "red";
        }
        if (value <= 6) {
          return "orange";
        }
        if (value <= 9) {
          return "yellow";
        }
        return "#2AE02A";
      }
    };
    this.lockedState = false;
    this.lockedSlider = false;
    this.lockedValues = [60, 80];
    this.minValue3 = 20;
    this.maxValue3 = 60;
    this.options3 = {
      ceil: 50,
      showSelectionBar: true,
      selectionBarGradient: {
        from: "#f43f5e",
        to: "#f43f5e"
      }
    };
    this.value4 = 12;
    this.options4 = {
      floor: 0,
      ceil: 12,
      showSelectionBar: true,
      getSelectionBarColor: (value) => {
        if (value <= 3) {
          return "red";
        }
        if (value <= 6) {
          return "orange";
        }
        if (value <= 9) {
          return "yellow";
        }
        return "#2AE02A";
      }
    };
    this.verticalSlider1 = {
      value5: 5,
      options6: {
        floor: 0,
        ceil: 5,
        vertical: true
      }
    };
    this.someKeyboard = [3];
    this.someKeyboardConfig = {
      behaviour: "drag",
      connect: true,
      start: [0, 5],
      keyboard: true,
      step: 0.1,
      pageSteps: 10,
      // number of page steps, defaults to 10
      range: {
        min: 0,
        max: 5
      },
      pips: {
        mode: "count",
        density: 2,
        values: 6,
        stepped: true
      }
    };
    this.someKeyboard2 = [1, 3];
    this.someKeyboardConfig2 = {
      behaviour: "drag",
      connect: true,
      start: [0, 5],
      step: 0.1,
      range: {
        min: 0,
        max: 5
      },
      pips: {
        mode: "count",
        density: 2,
        values: 6,
        stepped: true
      },
      keyboard: true
    };
    this.keyupLabelOn = false;
    this.keydownLabelOn = false;
    this.minValue7 = 15;
    this.options7 = {
      ceil: 50,
      showSelectionBar: true,
      selectionBarGradient: {
        from: "var(--primary-color)",
        to: "var(--primary-color)"
      }
    };
    this.minValue8 = 20;
    this.options8 = {
      ceil: 50,
      showSelectionBar: true,
      selectionBarGradient: {
        from: "#f72d66",
        to: "#f72d66"
      }
    };
    this.minValue9 = 25;
    this.options9 = {
      ceil: 50,
      showSelectionBar: true,
      selectionBarGradient: {
        from: "#eab308",
        to: "#eab308"
      }
    };
    this.minValue10 = 15;
    this.options10 = {
      ceil: 50,
      showSelectionBar: true,
      selectionBarGradient: {
        from: "#4c75cf",
        to: "#4c75cf"
      }
    };
    this.minValue11 = 15;
    this.options11 = {
      ceil: 50,
      showSelectionBar: true,
      selectionBarGradient: {
        from: "#22c55e",
        to: "#22c55e"
      }
    };
    this.minValue12 = 15;
    this.options12 = {
      ceil: 50,
      showSelectionBar: true,
      selectionBarGradient: {
        from: "#ff5b51",
        to: "#ff5b51"
      }
    };
  }
  getColor() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }
  updateColor() {
    const color = `rgb(${this.sliderModel[0]}, ${this.sliderModel[1]}, ${this.sliderModel[2]})`;
  }
  ngAfterViewInit() {
    this.initializeSliders();
  }
  initializeSliders() {
    const sliderOptions = {
      start: [60],
      animate: false,
      range: {
        min: 50,
        max: 100
      }
    };
    initialize(this.slider6.nativeElement, sliderOptions);
    initialize(this.slider7.nativeElement, __spreadProps(__spreadValues({}, sliderOptions), { start: [80] }));
    this.slider6.nativeElement.noUiSlider.on("update", (values, handle) => {
      this.slider6Value.nativeElement.innerHTML = values[handle];
    });
    this.slider7.nativeElement.noUiSlider.on("update", (values, handle) => {
      this.slider7Value.nativeElement.innerHTML = values[handle];
    });
    if (this.lockButton) {
      this.lockButton.nativeElement.addEventListener("click", () => {
        this.lockedState = !this.lockedState;
        this.lockButton.nativeElement.textContent = this.lockedState ? "unlock" : "lock";
      });
    }
    this.slider6.nativeElement.noUiSlider.on("update", () => this.setLockedValues());
    this.slider7.nativeElement.noUiSlider.on("update", () => this.setLockedValues());
    this.slider6.nativeElement.noUiSlider.on("slide", (values, handle) => {
      this.crossUpdate(Number(values[handle]), this.slider7.nativeElement);
    });
    this.slider7.nativeElement.noUiSlider.on("slide", (values, handle) => {
      this.crossUpdate(Number(values[handle]), this.slider6.nativeElement);
    });
  }
  setLockedValues() {
    this.lockedValues = [
      Number(this.slider6.nativeElement.noUiSlider.get()),
      Number(this.slider7.nativeElement.noUiSlider.get())
    ];
  }
  crossUpdate(value, slider) {
    if (!this.lockedState) {
      return;
    }
    const a = this.slider6 === slider ? 0 : 1;
    const b = a ? 0 : 1;
    value -= this.lockedValues[b] - this.lockedValues[a];
    slider.noUiSlider.set(value);
  }
  onChange(value) {
  }
  blinkKeyupLabel() {
    this.keyupLabelOn = true;
    setTimeout(() => {
      this.keyupLabelOn = false;
    }, 450);
  }
  blinkKeydownLabel() {
    this.keydownLabelOn = true;
    setTimeout(() => {
      this.keydownLabelOn = false;
    }, 450);
  }
  static {
    this.\u0275fac = function RangesliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RangesliderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RangesliderComponent, selectors: [["app-rangeslider"]], viewQuery: function RangesliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slider6 = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slider7 = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lockButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slider6Value = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slider7Value = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 247, vars: 62, consts: [["slider1", ""], ["slider2", ""], ["slider3", ""], ["slider6", ""], ["slider6Value", ""], ["slider7", ""], ["slider7Value", ""], ["lockButton", ""], ["hassub", "", "sub", "Forms", "title1", "Form Elements", "title", "Range Slider", "activeTitle", "Range Slider"], [1, "row"], [1, "col-xxl-3", "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], ["type", "range", "id", "customRange1", 1, "form-range"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["type", "range", "id", "disabledRange", "disabled", "", 1, "form-range"], ["type", "range", "min", "0", "max", "5", "id", "customRange2", 1, "form-range"], ["type", "range", "min", "0", "max", "5", "step", "0.5", "id", "customRange3", 1, "form-range"], [1, "mb-3"], [1, "col-xl-3"], [1, "card-header"], ["id", "slider"], [3, "ngModelChange", "connect", "min", "max", "step", "ngModel"], ["id", "slider-fit"], ["id", "slider-round"], [1, "noUi-base", 3, "ngModelChange", "connect", "min", "max", "step", "ngModel"], ["id", "slider-square"], [1, "sliders", "noUi-target", "noUi-ltr", "noUi-vertical", "noUi-txt-dir-ltr"], ["type", "range", "min", "0", "max", "255", "id", "red", 3, "ngModelChange", "input", "ngModel"], ["type", "range", "min", "0", "max", "255", "id", "green", 3, "ngModelChange", "input", "ngModel"], ["type", "range", "min", "0", "max", "255", "id", "blue", 3, "ngModelChange", "input", "ngModel"], ["id", "result"], [1, "col-xl-6"], [1, "col-xl-12"], ["id", "slider6"], ["id", "slider6-span", 1, "my-1"], ["id", "slider7"], ["id", "slider7-span", 1, "my-1"], ["id", "lockbutton", 1, "btn", "btn-sm", "btn-primary", "float-end"], ["id", "merging-tooltips"], [3, "ngModelChange", "connect", "min", "max", "step", "tooltips", "ngModel"], [3, "valueChange", "highValueChange", "value", "highValue", "options"], [1, "mt-4"], ["type", "number", 1, "px-2", "ms-2", "sliders", "noUi-target", 3, "ngModelChange", "ngModel"], ["id", "slider-hide"], [1, "col-xl-10"], ["id", "slider", 1, "color-slider", 3, "valueChange", "value", "options"], [1, "col-xl-2"], ["id", "slider-toggle"], [3, "valueChange", "value", "options"], [1, "card-body", "pb-5"], ["id", "slider-pips"], [3, "ngModelChange", "keyup", "keydown", "config", "ngModel"], ["id", "soft"], [3, "ngModelChange", "config", "ngModel"], [1, "col-xl-4"], ["id", "primary-colored-slider"], ["id", "secondary-colored-slider"], ["id", "warning-colored-slider"], ["id", "info-colored-slider"], ["id", "success-colored-slider"], ["id", "danger-colored-slider"]], template: function RangesliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 8);
        \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "div", 13);
        \u0275\u0275text(6, " Default Range ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 14)(8, "button", 15);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 17);
        \u0275\u0275element(12, "input", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 19)(14, "pre", 20)(15, "code", 20);
        \u0275\u0275text(16, '<input type="range" class="form-range" id="customRange1">');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13);
        \u0275\u0275text(21, " Disabled Range ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
        \u0275\u0275text(24, "Show Code");
        \u0275\u0275element(25, "i", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 17);
        \u0275\u0275element(27, "input", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 19)(29, "pre", 20)(30, "code", 20);
        \u0275\u0275text(31, '<input type="range" class="form-range" id="disabledRange" disabled>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "div", 10)(33, "div", 11)(34, "div", 12)(35, "div", 13);
        \u0275\u0275text(36, " Range With Min and Max Values ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 14)(38, "button", 15);
        \u0275\u0275text(39, "Show Code");
        \u0275\u0275element(40, "i", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 17);
        \u0275\u0275element(42, "input", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 19)(44, "pre", 20)(45, "code", 20);
        \u0275\u0275text(46, '<input type="range" class="form-range" min="0" max="5" id="customRange2">');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "div", 10)(48, "div", 11)(49, "div", 12)(50, "div", 13);
        \u0275\u0275text(51, " Range With Steps ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 14)(53, "button", 15);
        \u0275\u0275text(54, "Show Code");
        \u0275\u0275element(55, "i", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 17);
        \u0275\u0275element(57, "input", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 19)(59, "pre", 20)(60, "code", 20);
        \u0275\u0275text(61, '<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(62, "h6", 24);
        \u0275\u0275text(63, "noUiSlider:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 9)(65, "div", 25)(66, "div", 11)(67, "div", 26)(68, "div", 13);
        \u0275\u0275text(69, " Default-Styling ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 17)(71, "div", 27)(72, "nouislider", 28);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.someRange6, $event) || (ctx.someRange6 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(73, "div", 25)(74, "div", 11)(75, "div", 26)(76, "div", 13);
        \u0275\u0275text(77, " Fit Handles ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 17)(79, "div", 29)(80, "nouislider", 28);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_80_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.someRange1, $event) || (ctx.someRange1 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(81, "div", 25)(82, "div", 11)(83, "div", 26)(84, "div", 13);
        \u0275\u0275text(85, " Rounded Styling ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 17)(87, "div", 30)(88, "nouislider", 31);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_88_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.someRange2, $event) || (ctx.someRange2 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(89, "div", 25)(90, "div", 11)(91, "div", 26)(92, "div", 13);
        \u0275\u0275text(93, " Square Styling ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 17)(95, "div", 32)(96, "nouislider", 28);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_96_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.someRange3, $event) || (ctx.someRange3 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(97, "div", 9)(98, "div", 25)(99, "div", 11)(100, "div", 26)(101, "div", 13);
        \u0275\u0275text(102, "Color Picker Slider");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 17)(104, "div", 33, 0)(106, "input", 34);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_input_ngModelChange_106_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.red, $event) || (ctx.red = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function RangesliderComponent_Template_input_input_106_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateColor());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "div", 33, 1)(109, "input", 35);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_input_ngModelChange_109_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.green, $event) || (ctx.green = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function RangesliderComponent_Template_input_input_109_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateColor());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 33, 2)(112, "input", 36);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_input_ngModelChange_112_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.blue, $event) || (ctx.blue = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function RangesliderComponent_Template_input_input_112_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateColor());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(113, "div", 37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "div", 38)(115, "div", 39)(116, "div", 11)(117, "div", 26)(118, "div", 13);
        \u0275\u0275text(119, "Locking Sliders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "div", 17);
        \u0275\u0275element(121, "div", 40, 3)(123, "div", 41, 4)(125, "div", 42, 5)(127, "div", 43, 6);
        \u0275\u0275elementStart(129, "button", 44, 7);
        \u0275\u0275text(131, "Lock");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(132, "div", 39)(133, "div", 11)(134, "div", 26)(135, "div", 13);
        \u0275\u0275text(136, "Merging tooltips slider");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 17)(138, "div", 45)(139, "nouislider", 46);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_139_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.someRange4, $event) || (ctx.someRange4 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(140, "div", 25)(141, "div", 9)(142, "div", 39)(143, "div", 11)(144, "div", 26)(145, "div", 13);
        \u0275\u0275text(146, "Non Linear Slider");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(147, "div", 17)(148, "ngx-slider", 47);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_148_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.minValue3, $event) || (ctx.minValue3 = $event);
          return \u0275\u0275resetView($event);
        })("highValueChange", function RangesliderComponent_Template_ngx_slider_highValueChange_148_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.maxValue3, $event) || (ctx.maxValue3 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "p", 48);
        \u0275\u0275text(150, "Min value: ");
        \u0275\u0275elementStart(151, "input", 49);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_input_ngModelChange_151_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.minValue3, $event) || (ctx.minValue3 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "p");
        \u0275\u0275text(153, "Max value: ");
        \u0275\u0275elementStart(154, "input", 49);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_input_ngModelChange_154_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.maxValue3, $event) || (ctx.maxValue3 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(155, "div", 39)(156, "div", 11)(157, "div", 26)(158, "div", 13);
        \u0275\u0275text(159, "Sliding Handles Tooltips");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "div", 17)(161, "div", 50)(162, "nouislider", 28);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_162_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.someRange7, $event) || (ctx.someRange7 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_162_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChange($event));
        });
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(163, "div", 9)(164, "div", 51)(165, "div", 11)(166, "div", 26)(167, "div", 13);
        \u0275\u0275text(168, "Colored Connect Elements");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "div", 17)(170, "ngx-slider", 52);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_170_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.value4, $event) || (ctx.value4 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(171, "div", 53)(172, "div", 11)(173, "div", 26)(174, "div", 13);
        \u0275\u0275text(175, "Slider Toggle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(176, "div", 17)(177, "div", 54)(178, "ngx-slider", 55);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_178_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.verticalSlider1.value5, $event) || (ctx.verticalSlider1.value5 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(179, "div", 9)(180, "div", 38)(181, "div", 11)(182, "div", 26)(183, "div", 13);
        \u0275\u0275text(184, "Toggle Movement By Clicking Pips");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(185, "div", 56)(186, "div", 57)(187, "nouislider", 58);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_187_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.someKeyboard, $event) || (ctx.someKeyboard = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keyup", function RangesliderComponent_Template_nouislider_keyup_187_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.blinkKeyupLabel());
        })("keydown", function RangesliderComponent_Template_nouislider_keydown_187_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.blinkKeydownLabel());
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(188, "div", 38)(189, "div", 11)(190, "div", 26)(191, "div", 13);
        \u0275\u0275text(192, "Soft Limits");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(193, "div", 56)(194, "div", 59)(195, "nouislider", 60);
        \u0275\u0275twoWayListener("ngModelChange", function RangesliderComponent_Template_nouislider_ngModelChange_195_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.someKeyboard2, $event) || (ctx.someKeyboard2 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(196, "h6", 24);
        \u0275\u0275text(197, "noUiSlider Colors:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "div", 9)(199, "div", 61)(200, "div", 11)(201, "div", 26)(202, "div", 13);
        \u0275\u0275text(203, " Primary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "div", 17)(205, "div", 62)(206, "ngx-slider", 55);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_206_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.minValue7, $event) || (ctx.minValue7 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(207, "div", 61)(208, "div", 11)(209, "div", 26)(210, "div", 13);
        \u0275\u0275text(211, " Secondary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(212, "div", 17)(213, "div", 63)(214, "ngx-slider", 55);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_214_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.minValue8, $event) || (ctx.minValue8 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(215, "div", 61)(216, "div", 11)(217, "div", 26)(218, "div", 13);
        \u0275\u0275text(219, " Warning ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(220, "div", 17)(221, "div", 64)(222, "ngx-slider", 55);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_222_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.minValue9, $event) || (ctx.minValue9 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(223, "div", 61)(224, "div", 11)(225, "div", 26)(226, "div", 13);
        \u0275\u0275text(227, " Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(228, "div", 17)(229, "div", 65)(230, "ngx-slider", 55);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_230_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.minValue10, $event) || (ctx.minValue10 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(231, "div", 61)(232, "div", 11)(233, "div", 26)(234, "div", 13);
        \u0275\u0275text(235, " Success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(236, "div", 17)(237, "div", 66)(238, "ngx-slider", 55);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_238_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.minValue11, $event) || (ctx.minValue11 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(239, "div", 61)(240, "div", 11)(241, "div", 26)(242, "div", 13);
        \u0275\u0275text(243, " Danger ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(244, "div", 17)(245, "div", 67)(246, "ngx-slider", 55);
        \u0275\u0275twoWayListener("valueChange", function RangesliderComponent_Template_ngx_slider_valueChange_246_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.minValue12, $event) || (ctx.minValue12 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(72);
        \u0275\u0275property("connect", true)("min", 0)("max", 15)("step", 1);
        \u0275\u0275twoWayProperty("ngModel", ctx.someRange6);
        \u0275\u0275advance(8);
        \u0275\u0275property("connect", true)("min", 0)("max", 15)("step", 1);
        \u0275\u0275twoWayProperty("ngModel", ctx.someRange1);
        \u0275\u0275advance(8);
        \u0275\u0275property("connect", true)("min", 0)("max", 9)("step", 1);
        \u0275\u0275twoWayProperty("ngModel", ctx.someRange2);
        \u0275\u0275advance(8);
        \u0275\u0275property("connect", true)("min", 0)("max", 7)("step", 1);
        \u0275\u0275twoWayProperty("ngModel", ctx.someRange3);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.red);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.green);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.blue);
        \u0275\u0275advance();
        \u0275\u0275styleProp("background-color", ctx.getColor());
        \u0275\u0275advance(26);
        \u0275\u0275property("connect", true)("min", 0)("max", 15)("step", 1)("tooltips", \u0275\u0275pureFunction0(61, _c5));
        \u0275\u0275twoWayProperty("ngModel", ctx.someRange4);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("value", ctx.minValue3)("highValue", ctx.maxValue3);
        \u0275\u0275property("options", ctx.options3);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.minValue3);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.maxValue3);
        \u0275\u0275advance(8);
        \u0275\u0275property("connect", true)("min", 0)("max", 15)("step", 1);
        \u0275\u0275twoWayProperty("ngModel", ctx.someRange7);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("value", ctx.value4);
        \u0275\u0275property("options", ctx.options4);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("value", ctx.verticalSlider1.value5);
        \u0275\u0275property("options", ctx.verticalSlider1.options6);
        \u0275\u0275advance(9);
        \u0275\u0275property("config", ctx.someKeyboardConfig);
        \u0275\u0275twoWayProperty("ngModel", ctx.someKeyboard);
        \u0275\u0275advance(8);
        \u0275\u0275property("config", ctx.someKeyboardConfig2);
        \u0275\u0275twoWayProperty("ngModel", ctx.someKeyboard2);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("value", ctx.minValue7);
        \u0275\u0275property("options", ctx.options7);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("value", ctx.minValue8);
        \u0275\u0275property("options", ctx.options8);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("value", ctx.minValue9);
        \u0275\u0275property("options", ctx.options9);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("value", ctx.minValue10);
        \u0275\u0275property("options", ctx.options10);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("value", ctx.minValue11);
        \u0275\u0275property("options", ctx.options11);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("value", ctx.minValue12);
        \u0275\u0275property("options", ctx.options12);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, FormsModule, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, NouisliderModule, NouisliderComponent, NgxSliderModule, SliderComponent, ColorPickerModule], styles: ["\n\n  .custom-slider .ngx-slider .ngx-slider-bar {\n  background: #ffe4d1;\n  height: 2px;\n}\n  .custom-slider .ngx-slider .ngx-slider-selection {\n  background: orange;\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer {\n  width: 8px;\n  height: 16px;\n  top: auto;\n  bottom: 0;\n  background-color: #333;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer:after {\n  display: none;\n}\n  .custom-slider .ngx-slider .ngx-slider-bubble {\n  bottom: 14px;\n}\n  .custom-slider .ngx-slider .ngx-slider-limit {\n  font-weight: bold;\n  color: orange;\n}\n  .custom-slider .ngx-slider .ngx-slider-tick {\n  width: 1px;\n  height: 10px;\n  margin-left: 4px;\n  border-radius: 0;\n  background: #ffe4d1;\n  top: -1px;\n}\n  .custom-slider .ngx-slider .ngx-slider-tick.ngx-slider-selected {\n  background: orange;\n}\n/*# sourceMappingURL=rangeslider.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RangesliderComponent, { className: "RangesliderComponent", filePath: "src\\app\\components\\forms\\form-elements\\rangeslider\\rangeslider.component.ts", lineNumber: 21 });
})();
export {
  RangesliderComponent
};
//# sourceMappingURL=rangeslider.component-R42U6CAZ.js.map
