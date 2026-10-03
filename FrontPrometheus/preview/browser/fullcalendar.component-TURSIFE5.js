import {
  CalendarDatePipe,
  CalendarDayViewComponent,
  CalendarModule,
  CalendarMonthViewComponent,
  CalendarNextViewDirective,
  CalendarPreviousViewDirective,
  CalendarTodayDirective,
  CalendarView,
  CalendarWeekViewComponent,
  DraggableDirective,
  DroppableDirective,
  addDays,
  addHours,
  endOfDay,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfDay,
  subDays
} from "./chunk-FBWGW3ZL.js";
import "./chunk-HWBKIOGC.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbInputDatepicker,
  NgbModal,
  NgbModule
} from "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  Subject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
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
import "./chunk-47S5QMQB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// src/app/components/apps/fullcalendar/fullcalendar.component.ts
var _c0 = ["modalContent"];
var _c1 = (a0) => ({ event: a0 });
var _c2 = () => ({ delay: 300, delta: 30 });
function FullcalendarComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-", event_r2.cssClass, "");
    \u0275\u0275property("dropData", \u0275\u0275pureFunction1(6, _c1, event_r2))("touchStartLongPress", \u0275\u0275pureFunction0(8, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r2.title, "");
  }
}
function FullcalendarComponent_Case_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-month-view", 32);
    \u0275\u0275listener("dayClicked", function FullcalendarComponent_Case_41_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.dayClicked($event.day));
    })("eventClicked", function FullcalendarComponent_Case_41_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function FullcalendarComponent_Case_41_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.eventTimesChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("viewDate", ctx_r3.viewDate)("events", ctx_r3.events)("activeDayIsOpen", ctx_r3.activeDayIsOpen)("refresh", ctx_r3.refresh);
  }
}
function FullcalendarComponent_Case_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-week-view", 33);
    \u0275\u0275listener("eventClicked", function FullcalendarComponent_Case_42_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function FullcalendarComponent_Case_42_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.eventDropped($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("viewDate", ctx_r3.viewDate)("events", ctx_r3.events)("refresh", ctx_r3.refresh)("snapDraggedEvents", false);
  }
}
function FullcalendarComponent_Case_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-day-view", 33);
    \u0275\u0275listener("eventClicked", function FullcalendarComponent_Case_43_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function FullcalendarComponent_Case_43_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.eventDropped($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("viewDate", ctx_r3.viewDate)("events", ctx_r3.events)("refresh", ctx_r3.refresh)("snapDraggedEvents", false);
  }
}
function FullcalendarComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "h5", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 36);
    \u0275\u0275listener("click", function FullcalendarComponent_ng_template_44_Template_button_click_3_listener() {
      const close_r8 = \u0275\u0275restoreView(_r7).close;
      return \u0275\u0275resetView(close_r8());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 37)(5, "form", 38)(6, "div", 39)(7, "div", 40)(8, "label");
    \u0275\u0275text(9, "Event Title:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function FullcalendarComponent_ng_template_44_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.modalData["event"]["title"], $event) || (ctx_r3.modalData["event"]["title"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function FullcalendarComponent_ng_template_44_Template_input_keyup_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.refresh.next(true));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "label");
    \u0275\u0275text(13, "Starts At:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 43, 1);
    \u0275\u0275twoWayListener("ngModelChange", function FullcalendarComponent_ng_template_44_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.modalData["event"]["start"], $event) || (ctx_r3.modalData["event"]["start"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function FullcalendarComponent_ng_template_44_Template_input_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const d_r9 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(d_r9.toggle());
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 44)(17, "button", 45);
    \u0275\u0275listener("click", function FullcalendarComponent_ng_template_44_Template_button_click_17_listener() {
      const close_r8 = \u0275\u0275restoreView(_r7).close;
      return \u0275\u0275resetView(close_r8());
    });
    \u0275\u0275text(18, "OK");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.modalData.action);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.modalData["event"]["title"]);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.modalData["event"]["start"]);
  }
}
var colors = {
  red: {
    primary: "#705ec8",
    secondary: "#6958be"
  },
  blue: {
    primary: "#fb1c52",
    secondary: "#f83e6b"
  },
  yellow: {
    primary: "#ffab00",
    secondary: "#f3a403"
  }
};
var FullcalendarComponent = class _FullcalendarComponent {
  constructor(modal) {
    this.modal = modal;
    this.CalendarView = CalendarView;
    this.view = CalendarView.Month;
    this.viewDate = /* @__PURE__ */ new Date();
    this.actions = [
      {
        label: '<i class="fas fa-fw fa-pencil-alt"></i>',
        a11yLabel: "Edit",
        onClick: ({ event }) => {
          this.handleEvent("Edited", event);
        }
      },
      {
        label: '<i class="fas fa-fw fa-trash-alt"></i>',
        a11yLabel: "Delete",
        onClick: ({ event }) => {
          this.events = this.events.filter((iEvent) => iEvent !== event);
          this.handleEvent("Deleted", event);
        }
      }
    ];
    this.refresh = new Subject();
    this.events = [
      {
        start: subDays(startOfDay(/* @__PURE__ */ new Date()), 1),
        end: addDays(/* @__PURE__ */ new Date(), 1),
        title: "Calender Event",
        color: colors.red,
        actions: this.actions,
        allDay: false,
        draggable: true,
        cssClass: "primary"
      },
      {
        start: startOfDay(/* @__PURE__ */ new Date()),
        end: /* @__PURE__ */ new Date(),
        title: "Birthday EVents",
        color: colors.yellow,
        actions: this.actions,
        draggable: true,
        cssClass: "secondary"
      },
      {
        start: subDays(endOfMonth(/* @__PURE__ */ new Date()), 3),
        end: addDays(endOfMonth(/* @__PURE__ */ new Date()), 3),
        title: "Holiday Calendar",
        color: colors.blue,
        allDay: true,
        draggable: true,
        cssClass: "success "
      },
      {
        start: addHours(startOfDay(/* @__PURE__ */ new Date()), 2),
        end: addHours(/* @__PURE__ */ new Date(), 2),
        title: "Office Events",
        color: colors.blue,
        actions: this.actions,
        draggable: true,
        cssClass: "info "
      },
      {
        start: addHours(startOfDay(/* @__PURE__ */ new Date()), 2),
        end: addHours(/* @__PURE__ */ new Date(), 2),
        title: "Other Events",
        color: colors.blue,
        actions: this.actions,
        draggable: true,
        cssClass: "warning "
      },
      {
        start: addHours(startOfDay(/* @__PURE__ */ new Date()), 2),
        end: addHours(/* @__PURE__ */ new Date(), 2),
        title: "Festival Events",
        color: colors.blue,
        actions: this.actions,
        draggable: true,
        cssClass: "danger "
      },
      {
        start: addHours(startOfDay(/* @__PURE__ */ new Date()), 2),
        end: addHours(/* @__PURE__ */ new Date(), 2),
        title: "TimeLine Events",
        color: colors.blue,
        actions: this.actions,
        draggable: true,
        cssClass: "teal "
      }
    ];
    this.activeDayIsOpen = false;
  }
  ngOnInit() {
  }
  dayClicked({ date, events }) {
    if (isSameMonth(date, this.viewDate)) {
      if (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
  eventTimesChanged({ event, newStart, newEnd }) {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return __spreadProps(__spreadValues({}, event), {
          start: newStart,
          end: newEnd
        });
      }
      return iEvent;
    });
    this.handleEvent("Dropped or resized", event);
  }
  handleEvent(action, event) {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: "lg" });
  }
  addEvent() {
    this.newEvent = {
      title: "New event",
      start: startOfDay(/* @__PURE__ */ new Date()),
      end: endOfDay(/* @__PURE__ */ new Date()),
      color: colors.red,
      draggable: true,
      actions: this.actions,
      cssClass: "primary"
    };
    this.events.push(this.newEvent);
    this.handleEvent("Add new event", this.newEvent);
    this.refresh.next(true);
  }
  eventDropped({ event, newStart, newEnd, allDay }) {
    const externalIndex = this.events.indexOf(event);
    if (typeof allDay !== "undefined") {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      this.events.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === "month") {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  }
  externalDrop(event) {
    if (this.events.indexOf(event) === -1) {
      this.events = this.events.filter((iEvent) => iEvent !== event);
      this.events.push(event);
    }
  }
  deleteEvent(eventToDelete) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }
  setView(view) {
    this.view = view;
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  static {
    this.\u0275fac = function FullcalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullcalendarComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullcalendarComponent, selectors: [["app-fullcalendar"]], viewQuery: function FullcalendarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modalContent = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 17, consts: [["modalContent", ""], ["d", "ngbDatepicker"], ["title1", "Apps", "title", "Full-Calendar", "activeTitle", "Full-Calendar"], [1, "card"], [1, "row", "g-0"], [1, "col-xl-3", "border-end"], [1, "card-header"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#modalSetSchedule", 1, "btn", "btn-primary", "btn-sm", "w-100"], [1, "ri-add-line", "align-middle", "me-1", "fw-semibold", "d-inline-block"], [1, "card-body"], ["mwlDroppable", "", "dragOverClass", "drag-over", "id", "external-events", 1, "", 3, "drop"], ["mwlDraggable", "", "dragActiveClass", "drag-active", 3, "dropData", "touchStartLongPress", "class"], [1, "col-xl-9"], [1, "card-title"], ["id", "calendar2"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-1"], [1, "text-start", "mb-2"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "viewDateChange", "view", "viewDate"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "viewDateChange", "view", "viewDate"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right"], ["mwlCalendarToday", "", 1, "btn", "btn-primary", "ms-2", 3, "viewDateChange", "viewDate"], [1, "mb-2"], [1, "text-end", "mb-2"], [1, "btn", "btn-primary", "mb-1", 3, "click"], [1, "btn", "btn-raised", "btn-primary", "float-end", "mb-1", 3, "click"], [3, "viewDate", "events", "activeDayIsOpen", "refresh"], [3, "viewDate", "events", "refresh", "snapDraggedEvents"], ["mwlDraggable", "", "dragActiveClass", "drag-active", 3, "dropData", "touchStartLongPress"], [1, "fc-event-main", "text-fixed-white"], [1, "ri-calendar-line", "me-2", "d-inline-block"], [3, "dayClicked", "eventClicked", "eventTimesChanged", "viewDate", "events", "activeDayIsOpen", "refresh"], [3, "eventClicked", "eventTimesChanged", "viewDate", "events", "refresh", "snapDraggedEvents"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["action", "#", 1, "form", "form-horizontal"], [1, "form-body"], [1, "form-group", "mb-2"], ["type", "text", "name", "event-title", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "keyup", "ngModel"], [1, "form-group"], ["name", "event-title2", "type", "text", "mwlFlatpickr", "", "ngbDatepicker", "", 1, "form-control", 3, "ngModelChange", "click", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function FullcalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "a", 7);
        \u0275\u0275element(6, "i", 8);
        \u0275\u0275text(7, " Add New Event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 9)(9, "div", 10);
        \u0275\u0275listener("drop", function FullcalendarComponent_Template_div_drop_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.externalDrop($event.dropData.event));
        });
        \u0275\u0275repeaterCreate(10, FullcalendarComponent_For_11_Template, 4, 9, "div", 11, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 12)(13, "div", 6)(14, "div", 13);
        \u0275\u0275text(15, "Full Calendar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18);
        \u0275\u0275twoWayListener("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.viewDate, $event) || (ctx.viewDate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOpenMonthViewDay());
        });
        \u0275\u0275element(22, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 20);
        \u0275\u0275twoWayListener("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.viewDate, $event) || (ctx.viewDate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOpenMonthViewDay());
        });
        \u0275\u0275element(24, "i", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 22);
        \u0275\u0275twoWayListener("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.viewDate, $event) || (ctx.viewDate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275text(26, " Today ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 23)(28, "h3");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "calendarDate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 24)(32, "div", 17)(33, "div", 25);
        \u0275\u0275listener("click", function FullcalendarComponent_Template_div_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Month));
        });
        \u0275\u0275text(34, " Month ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 25);
        \u0275\u0275listener("click", function FullcalendarComponent_Template_div_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Week));
        });
        \u0275\u0275text(36, " Week ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 25);
        \u0275\u0275listener("click", function FullcalendarComponent_Template_div_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Day));
        });
        \u0275\u0275text(38, " Day ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 26);
        \u0275\u0275listener("click", function FullcalendarComponent_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addEvent());
        });
        \u0275\u0275text(40, " List ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(41, FullcalendarComponent_Case_41_Template, 1, 4, "mwl-calendar-month-view", 27)(42, FullcalendarComponent_Case_42_Template, 1, 4, "mwl-calendar-week-view", 28)(43, FullcalendarComponent_Case_43_Template, 1, 4, "mwl-calendar-day-view", 28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(44, FullcalendarComponent_ng_template_44_Template, 19, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_11_0;
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.events);
        \u0275\u0275advance(11);
        \u0275\u0275property("view", ctx.view);
        \u0275\u0275twoWayProperty("viewDate", ctx.viewDate);
        \u0275\u0275advance(2);
        \u0275\u0275property("view", ctx.view);
        \u0275\u0275twoWayProperty("viewDate", ctx.viewDate);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("viewDate", ctx.viewDate);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(30, 13, ctx.viewDate, ctx.view + "ViewTitle", "en"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Month);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Week);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Day);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_11_0 = ctx.view) === "month" ? 41 : tmp_11_0 === "week" ? 42 : tmp_11_0 === "day" ? 43 : -1);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, ReactiveFormsModule, NgbModule, NgbInputDatepicker, CalendarModule, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, DraggableDirective, DroppableDirective, CalendarMonthViewComponent, CalendarWeekViewComponent, CalendarDayViewComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullcalendarComponent, { className: "FullcalendarComponent", filePath: "src\\app\\components\\apps\\fullcalendar\\fullcalendar.component.ts", lineNumber: 31 });
})();
export {
  FullcalendarComponent
};
//# sourceMappingURL=fullcalendar.component-TURSIFE5.js.map
