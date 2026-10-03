import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import "./chunk-JG564GD5.js";
import "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  LOCALE_ID,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewEncapsulation$1,
  formatDate,
  interval,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/ngx-countdown/fesm2022/ngx-countdown.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function CountdownComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CountdownComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CountdownComponent_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.render)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx_r0.i));
  }
}
function CountdownComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.i.text, \u0275\u0275sanitizeHtml);
  }
}
var CountdownStatus;
(function(CountdownStatus2) {
  CountdownStatus2[CountdownStatus2["ing"] = 0] = "ing";
  CountdownStatus2[CountdownStatus2["pause"] = 1] = "pause";
  CountdownStatus2[CountdownStatus2["stop"] = 2] = "stop";
  CountdownStatus2[CountdownStatus2["done"] = 3] = "done";
})(CountdownStatus || (CountdownStatus = {}));
var CountdownTimer = class _CountdownTimer {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.fns = [];
    this.commands = [];
    this.nextTime = 0;
    this.ing = false;
  }
  start() {
    if (this.ing === true) {
      return;
    }
    this.ing = true;
    this.nextTime = +/* @__PURE__ */ new Date();
    this.ngZone.runOutsideAngular(() => {
      this.process();
    });
  }
  process() {
    while (this.commands.length) {
      this.commands.shift()();
    }
    let diff = +/* @__PURE__ */ new Date() - this.nextTime;
    const count = 1 + Math.floor(diff / 100);
    diff = 100 - diff % 100;
    this.nextTime += 100 * count;
    for (let i = 0, len = this.fns.length; i < len; i += 2) {
      let frequency = this.fns[i + 1];
      if (0 === frequency) {
        this.fns[i](count);
      } else {
        frequency += 2 * count - 1;
        const step = Math.floor(frequency / 20);
        if (step > 0) {
          this.fns[i](step);
        }
        this.fns[i + 1] = frequency % 20 + 1;
      }
    }
    if (!this.ing) {
      return;
    }
    setTimeout(() => this.process(), diff);
  }
  add(fn, frequency) {
    this.commands.push(() => {
      this.fns.push(fn);
      this.fns.push(frequency === 1e3 ? 1 : 0);
      this.ing = true;
    });
    return this;
  }
  remove(fn) {
    this.commands.push(() => {
      const i = this.fns.indexOf(fn);
      if (i !== -1) {
        this.fns.splice(i, 2);
      }
      this.ing = this.fns.length > 0;
    });
    return this;
  }
  static {
    this.\u0275fac = function CountdownTimer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountdownTimer)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _CountdownTimer,
      factory: _CountdownTimer.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountdownTimer, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var COUNTDOWN_CONFIG = new InjectionToken("COUNTDOWN_CONFIG");
var CountdownComponent = class _CountdownComponent {
  set config(i) {
    if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
      i.notify = [i.notify];
    }
    this._config = i;
  }
  get config() {
    return this._config;
  }
  constructor(locale, timer, cdr, ngZone, defCog) {
    this.locale = locale;
    this.timer = timer;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.defCog = defCog;
    this.frequency = 1e3;
    this._notify = {};
    this.status = CountdownStatus.ing;
    this.isDestroy = false;
    this.i = {};
    this.left = 0;
    this.event = new EventEmitter();
  }
  /**
   * Start countdown, you must manually call when `demand: false`
   */
  begin() {
    this.status = CountdownStatus.ing;
    this.callEvent("start");
  }
  /**
   * Restart countdown
   */
  restart() {
    if (this.status !== CountdownStatus.stop) {
      this.destroy();
    }
    this.init();
    this.callEvent("restart");
  }
  /**
   * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
   */
  stop() {
    if (this.status === CountdownStatus.stop) {
      return;
    }
    this.status = CountdownStatus.stop;
    this.destroy();
    this.callEvent("stop");
  }
  /**
   * Pause countdown, you can use `resume` to recover again
   */
  pause() {
    if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
      return;
    }
    this.status = CountdownStatus.pause;
    this.callEvent("pause");
  }
  /**
   * Resume countdown
   */
  resume() {
    if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
      return;
    }
    this.status = CountdownStatus.ing;
    this.callEvent("resume");
  }
  callEvent(action) {
    this.event.emit({
      action,
      left: this.left,
      status: this.status,
      text: this.i.text
    });
  }
  init() {
    const config = this.config = __spreadValues(__spreadValues({
      demand: false,
      leftTime: 0,
      format: "HH:mm:ss",
      timezone: "+0000",
      formatDate: ({
        date,
        formatStr,
        timezone
      }) => {
        return formatDate(new Date(date), formatStr, this.locale, timezone || "+0000");
      }
    }, this.defCog), this.config);
    const frq = this.frequency = ~config.format.indexOf("S") ? 100 : 1e3;
    this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
    this.getLeft();
    const _reflow = this.reflow;
    this.reflow = (count = 0, force = false) => _reflow.apply(this, [count, force]);
    if (Array.isArray(config.notify)) {
      config.notify.forEach((time) => {
        if (time < 1) {
          throw new Error(`The notify config must be a positive integer.`);
        }
        time = time * 1e3;
        time = time - time % frq;
        this._notify[time] = true;
      });
    }
    this.timer.add(this.reflow, frq).start();
    this.reflow(0, true);
  }
  destroy() {
    this.timer.remove(this.reflow);
    return this;
  }
  /**
   * 更新时钟
   */
  reflow(count = 0, force = false) {
    if (this.isDestroy) {
      return;
    }
    const {
      status,
      config,
      _notify
    } = this;
    if (!force && status !== CountdownStatus.ing) {
      return;
    }
    let value = this.left = this.left - this.frequency * count;
    if (value < 1) {
      value = 0;
    }
    this.i = {
      value,
      text: config.formatDate({
        date: value,
        formatStr: config.format,
        timezone: config.timezone
      })
    };
    if (typeof config.prettyText === "function") {
      this.i.text = config.prettyText(this.i.text);
    }
    this.cdr.detectChanges();
    if (config.notify === 0 || _notify[value]) {
      this.ngZone.run(() => {
        this.callEvent("notify");
      });
    }
    if (value === 0) {
      this.ngZone.run(() => {
        this.status = CountdownStatus.done;
        this.destroy();
        this.callEvent("done");
      });
    }
  }
  /**
   * 获取倒计时剩余帧数
   */
  getLeft() {
    const {
      config,
      frequency
    } = this;
    let left = config.leftTime * 1e3;
    const end = config.stopTime;
    if (!left && end) {
      left = end - (/* @__PURE__ */ new Date()).getTime();
    }
    this.left = left - left % frequency;
  }
  ngOnInit() {
    this.init();
    if (!this.config.demand) {
      this.begin();
    }
  }
  ngOnDestroy() {
    this.isDestroy = true;
    this.destroy();
  }
  ngOnChanges(changes) {
    if (!changes.config.firstChange) {
      this.restart();
    }
  }
  static {
    this.\u0275fac = function CountdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountdownComponent)(\u0275\u0275directiveInject(LOCALE_ID), \u0275\u0275directiveInject(CountdownTimer), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(COUNTDOWN_CONFIG, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CountdownComponent,
      selectors: [["countdown"]],
      hostVars: 2,
      hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("count-down", true);
        }
      },
      inputs: {
        config: "config",
        render: "render"
      },
      outputs: {
        event: "event"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([CountdownTimer]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 2,
      vars: 1,
      consts: [[3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function CountdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, CountdownComponent_Conditional_0_Template, 1, 4, "ng-container")(1, CountdownComponent_Conditional_1_Template, 1, 1, "span", 0);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.render ? 0 : 1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: [".count-down{font-variant-numeric:tabular-nums}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountdownComponent, [{
    type: Component,
    args: [{
      selector: "countdown",
      template: `
    @if (render) {
    <ng-container *ngTemplateOutlet="render; context: { $implicit: i }" />
    } @else {
    <span [innerHTML]="i.text"></span>
    }
  `,
      host: {
        "[class.count-down]": "true"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet],
      providers: [CountdownTimer],
      standalone: true,
      styles: [".count-down{font-variant-numeric:tabular-nums}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }, {
    type: CountdownTimer
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COUNTDOWN_CONFIG]
    }]
  }], {
    config: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    render: [{
      type: Input
    }],
    event: [{
      type: Output
    }]
  });
})();
var CountdownModule = class _CountdownModule {
  static {
    this.\u0275fac = function CountdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountdownModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _CountdownModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountdownModule, [{
    type: NgModule,
    args: [{
      imports: [CountdownComponent],
      exports: [CountdownComponent]
    }]
  }], null, null);
})();

// node_modules/angular-cd-timer/fesm2020/angular-cd-timer.mjs
var _c02 = ["*"];
var CdTimerComponent = class {
  constructor(elt, renderer) {
    this.elt = elt;
    this.renderer = renderer;
    this.onStart = new EventEmitter();
    this.onStop = new EventEmitter();
    this.onTick = new EventEmitter();
    this.onComplete = new EventEmitter();
    this.autoStart = true;
    this.startTime = 0;
    this.endTime = 0;
    this.timeoutId = null;
    this.countdown = false;
    this.format = "default";
  }
  ngAfterViewInit() {
    const ngContentNode = this.elt.nativeElement.lastChild;
    this.ngContentSchema = ngContentNode ? ngContentNode.nodeValue : "";
    if (this.autoStart === void 0 || this.autoStart === true) {
      this.start();
    }
  }
  ngOnDestroy() {
    this.resetTimeout();
  }
  /**
   * Start the timer
   */
  start() {
    this.initVar();
    this.resetTimeout();
    this.computeTimeUnits();
    this.startTickCount();
    this.onStart.emit(this);
  }
  /**
   * Resume the timer
   */
  resume() {
    this.resetTimeout();
    this.startTickCount();
  }
  /**
   * Stop the timer
   */
  stop() {
    this.clear();
    this.onStop.emit(this);
  }
  /**
   * Reset the timer
   */
  reset() {
    this.initVar();
    this.resetTimeout();
    this.clear();
    this.computeTimeUnits();
    this.renderText();
  }
  /**
   * Get the time information
   * @returns TimeInterface
   */
  get() {
    return {
      seconds: this.seconds,
      minutes: this.minutes,
      hours: this.hours,
      days: this.days,
      timer: this.timeoutId,
      tick_count: this.tickCounter
    };
  }
  /**
   * Initialize variable before start
   */
  initVar() {
    this.startTime = this.startTime || 0;
    this.endTime = this.endTime || 0;
    this.countdown = this.countdown || false;
    this.tickCounter = this.startTime;
    if (this.countdown && this.startTime === 0) {
      this.countdown = false;
    }
    if (!this.format) {
      this.format = this.ngContentSchema.length > 5 ? "user" : "default";
    }
  }
  /**
   * Reset timeout
   */
  resetTimeout() {
    if (this.timeoutId) {
      clearInterval(this.timeoutId);
    }
  }
  /**
   * Render the time to DOM
   */
  renderText() {
    let outputText;
    if (this.format === "user") {
      const items = {
        "seconds": this.seconds,
        "minutes": this.minutes,
        "hours": this.hours,
        "days": this.days
      };
      outputText = this.ngContentSchema;
      for (const key of Object.keys(items)) {
        outputText = outputText.replace("[" + key + "]", items[key].toString());
      }
    } else if (this.format === "intelli") {
      outputText = "";
      if (this.days > 0) {
        outputText += this.days.toString() + "day" + (this.days > 1 ? "s" : "") + " ";
      }
      if (this.hours > 0 || this.days > 0) {
        outputText += this.hours.toString() + "h ";
      }
      if ((this.minutes > 0 || this.hours > 0) && this.days === 0) {
        outputText += this.minutes.toString().padStart(2, "0") + "min ";
      }
      if (this.hours === 0 && this.days === 0) {
        outputText += this.seconds.toString().padStart(2, "0") + "s";
      }
    } else if (this.format === "hms") {
      outputText = this.hours.toString().padStart(2, "0") + ":";
      outputText += this.minutes.toString().padStart(2, "0") + ":";
      outputText += this.seconds.toString().padStart(2, "0");
    } else if (this.format === "ms") {
      outputText = "";
      if (this.hours > 0) {
        outputText = this.hours.toString().padStart(2, "0") + ":";
      }
      outputText += this.minutes.toString().padStart(2, "0") + ":";
      outputText += this.seconds.toString().padStart(2, "0");
    } else {
      outputText = this.days.toString() + "d ";
      outputText += this.hours.toString() + "h ";
      outputText += this.minutes.toString() + "m ";
      outputText += this.seconds.toString() + "s";
    }
    this.renderer.setProperty(this.elt.nativeElement, "innerHTML", outputText);
  }
  clear() {
    this.resetTimeout();
    this.timeoutId = null;
  }
  /**
   * Compute each unit (seconds, minutes, hours, days) for further manipulation
   * @protected
   */
  computeTimeUnits() {
    if (!this.maxTimeUnit || this.maxTimeUnit === "day") {
      this.seconds = Math.floor(this.tickCounter % 60);
      this.minutes = Math.floor(this.tickCounter / 60 % 60);
      this.hours = Math.floor(this.tickCounter / 3600 % 24);
      this.days = Math.floor(this.tickCounter / 3600 / 24);
    } else if (this.maxTimeUnit === "second") {
      this.seconds = this.tickCounter;
      this.minutes = 0;
      this.hours = 0;
      this.days = 0;
    } else if (this.maxTimeUnit === "minute") {
      this.seconds = Math.floor(this.tickCounter % 60);
      this.minutes = Math.floor(this.tickCounter / 60);
      this.hours = 0;
      this.days = 0;
    } else if (this.maxTimeUnit === "hour") {
      this.seconds = Math.floor(this.tickCounter % 60);
      this.minutes = Math.floor(this.tickCounter / 60 % 60);
      this.hours = Math.floor(this.tickCounter / 3600);
      this.days = 0;
    }
    this.renderText();
  }
  /**
   * Start tick count, base of this component
   * @protected
   */
  startTickCount() {
    const that = this;
    that.timeoutId = setInterval(function() {
      let counter;
      if (that.countdown) {
        counter = that.tickCounter;
        if (that.startTime > that.endTime) {
          counter = that.tickCounter - that.endTime - 1;
        }
      } else {
        counter = that.tickCounter - that.startTime;
        if (that.endTime > that.startTime) {
          counter = that.endTime - that.tickCounter - 1;
        }
      }
      that.computeTimeUnits();
      const timer = {
        seconds: that.seconds,
        minutes: that.minutes,
        hours: that.hours,
        days: that.days,
        timer: that.timeoutId,
        tick_count: that.tickCounter
      };
      that.onTick.emit(timer);
      if (counter < 0) {
        that.stop();
        that.onComplete.emit(that);
        return;
      }
      if (that.countdown) {
        that.tickCounter--;
      } else {
        that.tickCounter++;
      }
    }, 1e3);
  }
};
CdTimerComponent.\u0275fac = function CdTimerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CdTimerComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
CdTimerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: CdTimerComponent,
  selectors: [["cd-timer"]],
  inputs: {
    startTime: "startTime",
    endTime: "endTime",
    countdown: "countdown",
    autoStart: "autoStart",
    maxTimeUnit: "maxTimeUnit",
    format: "format"
  },
  outputs: {
    onStart: "onStart",
    onStop: "onStop",
    onTick: "onTick",
    onComplete: "onComplete"
  },
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function CdTimerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdTimerComponent, [{
    type: Component,
    args: [{
      selector: "cd-timer",
      template: " <ng-content></ng-content>"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    startTime: [{
      type: Input
    }],
    endTime: [{
      type: Input
    }],
    countdown: [{
      type: Input
    }],
    autoStart: [{
      type: Input
    }],
    maxTimeUnit: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    onStart: [{
      type: Output
    }],
    onStop: [{
      type: Output
    }],
    onTick: [{
      type: Output
    }],
    onComplete: [{
      type: Output
    }]
  });
})();
var CdTimerModule = class {
};
CdTimerModule.\u0275fac = function CdTimerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CdTimerModule)();
};
CdTimerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: CdTimerModule
});
CdTimerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdTimerModule, [{
    type: NgModule,
    args: [{
      declarations: [CdTimerComponent],
      imports: [],
      exports: [CdTimerComponent]
    }]
  }], null, null);
})();

// src/app/components/advancedui/counters/counters.component.ts
var CountersComponent = class _CountersComponent {
  constructor() {
    this.counter1 = 1;
    this.source1 = interval(0.01);
    this.subscribe1 = this.source1.subscribe(() => {
      this.counter1++;
      if (this.counter1 == 2569) {
        this.subscribe1.unsubscribe();
      }
    });
    this.counter2 = 1;
    this.source2 = interval(0.01);
    this.subscribe2 = this.source2.subscribe(() => {
      this.counter2++;
      if (this.counter2 == 256989.25) {
        this.subscribe2.unsubscribe();
      }
    });
  }
  ngOnInit() {
    const countDown = (/* @__PURE__ */ new Date("Dec 1, 2024 00:00:00")).getTime();
    const time = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const distance = countDown - now;
      this.days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      this.minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      this.seconds = Math.floor(distance % (1e3 * 60) / 1e3);
      if (distance < 0) {
        clearInterval(time);
      }
    }, 1e3);
  }
  static {
    this.\u0275fac = function CountersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountersComponent, selectors: [["app-counters"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 122, vars: 16, consts: [["hassub", "", "sub", "Home", "title1", "Advanced Ui", "title", "Counters", "activeTitle", "Counters"], [1, "row"], [1, "col-md-12", "col-xl-4"], [1, "card", "overflow-hidden"], ["href", "javascript:void(0)"], ["src", "./assets/images/photos/8.jpg", "alt", "img", 1, "card-img-top"], [1, "card-body", "d-flex", "flex-column"], [1, "fw-bold"], [1, "text-muted"], [1, "bg-primary", "p-2", "br-3", "mt-4", "text-center"], ["id", "timer-countup outputt", "id", "outputt", "format", "hms", 1, "h4", "text-fixed-white", "mb-0", "fw-bold"], ["src", "./assets/images/photos/9.jpg", "alt", "img", 1, "card-img-top"], [1, "bg-secondary", "p-2", "br-3", "mt-4", "text-center"], ["id", "timer-countinbetween time", "format", "hms", 1, "h4", "text-fixed-white", "mb-0", "fw-bold", 3, "startTime", "endTime", "countdown"], ["src", "./assets/images/photos/10.jpg", "alt", "img", 1, "card-img-top"], [1, "bg-warning", "p-2", "br-3", "mt-4", "text-center"], [1, "timer", "h4", "fw-bold", "text-fixed-white"], ["id", "timer-countinbetween counter", "format", "ms", 1, "h4", "text-fixed-white", "mb-0", "fw-bold", 3, "startTime", "endTime", "countdown"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "text-center"], [1, "bg-info", "p-2", "br-3", "text-center"], ["id", "timer-outputpattern", 1, "h3", "text-fixed-white", "mb-0", "fw-bold", "d-sm-flex", "justify-content-center", "align-items-center", "gap-3"], [1, ""], [1, "col-lg-4"], [1, "card-body", "text-center", "list-icons"], [1, "fe", "fe-user", "text-primary"], [1, "mt-4"], [1, "counter"], [1, "fe", "fe-dollar-sign", "text-success"], [1, "fe", "fe-alert-circle", "text-secondary"], [1, "under-countdown"], ["id", "timer2", 1, "row"], [1, "col-xxl-3", "col-xl-6", "col-lg-6", "col-md-3", "col-sm-3"], [1, "countdown", "mb-4", "mb-xxl-0"], [1, "ms-2", "d-inline-flex"]], template: function CountersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "h4", 7)(8, "a", 4);
        \u0275\u0275text(9, "Time Counting From 0");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275text(11, "To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "cd-timer", 10);
        \u0275\u0275text(14, " [minutes] minutes [seconds] seconds");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "a", 4);
        \u0275\u0275element(18, "img", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 6)(20, "h4", 7)(21, "a", 4);
        \u0275\u0275text(22, "Time Counting From 60 to 20");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 8);
        \u0275\u0275text(24, "To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 12);
        \u0275\u0275element(26, "cd-timer", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 2)(28, "div", 3)(29, "a", 4);
        \u0275\u0275element(30, "img", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 6)(32, "h4", 7)(33, "a", 4);
        \u0275\u0275text(34, "Time 1 minute counter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 8);
        \u0275\u0275text(36, "To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 15)(38, "span", 16);
        \u0275\u0275element(39, "cd-timer", 17);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(40, "div", 1)(41, "div", 18)(42, "div", 19)(43, "div", 20)(44, "h3", 21);
        \u0275\u0275text(45, "Time Counting days Limit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 22)(47, "div", 23)(48, "span", 24)(49, "span", 25);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 25);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 25);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 25);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(57, "div", 26)(58, "div", 19)(59, "div", 20)(60, "h3", 21);
        \u0275\u0275text(61, "Numbers counter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 27);
        \u0275\u0275element(63, "i", 28);
        \u0275\u0275elementStart(64, "h5", 29);
        \u0275\u0275text(65, "Employess");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "h2", 30);
        \u0275\u0275text(67);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(68, "div", 26)(69, "div", 19)(70, "div", 20)(71, "h3", 21);
        \u0275\u0275text(72, "Numbers counter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 27);
        \u0275\u0275element(74, "i", 31);
        \u0275\u0275elementStart(75, "h5", 29);
        \u0275\u0275text(76, "Profit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "h2", 30);
        \u0275\u0275text(78);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(79, "div", 26)(80, "div", 19)(81, "div", 20)(82, "h3", 21);
        \u0275\u0275text(83, "Numbers counter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 27);
        \u0275\u0275element(85, "i", 32);
        \u0275\u0275elementStart(86, "h5", 29);
        \u0275\u0275text(87, "Errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "h2", 30);
        \u0275\u0275text(89, "0.8998");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "div", 18)(91, "div", 19)(92, "div", 20)(93, "h3", 21);
        \u0275\u0275text(94, "Day Counter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 22)(96, "div", 33)(97, "span", 34)(98, "div", 35)(99, "div", 36)(100, "span", 25);
        \u0275\u0275text(101);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "span", 37);
        \u0275\u0275text(103, "DAYS");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div", 35)(105, "div", 36)(106, "span", 25);
        \u0275\u0275text(107);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "span", 37);
        \u0275\u0275text(109, "HOURS");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(110, "div", 35)(111, "div", 36)(112, "span", 25);
        \u0275\u0275text(113);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "span", 37);
        \u0275\u0275text(115, "MINUTES");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "div", 35)(117, "div", 36)(118, "span", 25);
        \u0275\u0275text(119);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "span", 37);
        \u0275\u0275text(121, "SECONDS");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275property("startTime", 60)("endTime", 20)("countdown", true);
        \u0275\u0275advance(13);
        \u0275\u0275property("startTime", 59)("endTime", 0)("countdown", true);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("", ctx.days, "Days ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.hours, "Hours ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.minutes, "Minutes ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.seconds, "Seconds ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.counter1);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" ", ctx.counter2, "");
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate1(" ", ctx.days, "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.hours);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.minutes);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.seconds);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, CountdownModule, CdTimerModule, CdTimerComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountersComponent, { className: "CountersComponent", filePath: "src\\app\\components\\advancedui\\counters\\counters.component.ts", lineNumber: 14 });
})();
export {
  CountersComponent
};
//# sourceMappingURL=counters.component-LIREGU3F.js.map
