import {
  require_sweetalert2_all
} from "./chunk-XNBVOFQ5.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __toESM
} from "./chunk-AJH3MT3R.js";

// src/app/components/apps/sweetalerts/sweetalerts.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var SweetalertsComponent = class _SweetalertsComponent {
  basicAlert() {
    import_sweetalert2.default.fire({
      title: "Hello This is Basic alert Message,",
      confirmButtonColor: "#6259ca"
    });
  }
  titleAlert() {
    import_sweetalert2.default.fire("The Internet ?", "That thing is still around ?", "question");
  }
  ErrorAlert() {
    import_sweetalert2.default.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue ?</a>'
    });
  }
  LongWindowAlert() {
    import_sweetalert2.default.fire({
      imageUrl: "https://placeholder.pics/svg/300x1500",
      imageHeight: 1500,
      imageAlt: "A tall image"
    });
  }
  Customealert() {
    import_sweetalert2.default.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: 'You can use <b>bold text</b>, <a href="//sweetalert2.github.io">links</a> and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down"
    });
  }
  MultipleButtones() {
    import_sweetalert2.default.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        import_sweetalert2.default.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        import_sweetalert2.default.fire("Changes are not saved", "", "info");
      }
    });
  }
  DialogAlert() {
    import_sweetalert2.default.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  ConformAlert() {
    import_sweetalert2.default.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        import_sweetalert2.default.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  parametersAlert() {
    const swalWithBootstrapButtons = import_sweetalert2.default.mixin({
      customClass: {
        confirmButton: "btn btn-success me-1",
        cancelButton: "btn btn-danger me-1"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === import_sweetalert2.default.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }
  ImageAlert() {
    import_sweetalert2.default.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "./assets/images/media/media-9.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }
  imageAlert1() {
    import_sweetalert2.default.fire({
      title: "Custom width, padding, color, background.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "rgba(26,98,48,0.5) url(./assets/images/photos/28.jpg)"
    });
  }
  timerAlert() {
    import_sweetalert2.default.fire({
      title: "Auto close alert!",
      text: "I will close in 2 seconds.",
      confirmButtonColor: "#0162e8",
      timer: 2e3,
      timerProgressBar: true
    });
  }
  AjaxRequesrAlert() {
    import_sweetalert2.default.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      allowOutsideClick: () => !import_sweetalert2.default.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        import_sweetalert2.default.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  }
  static {
    this.\u0275fac = function SweetalertsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SweetalertsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SweetalertsComponent, selectors: [["app-sweetalerts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 161, vars: 0, consts: [["title1", "Apps", "title", "Sweet Alerts", "activeTitle", "Sweet Alerts"], [1, "row"], [1, "col-xl-4"], [1, "card", "custom-card"], [1, "top-left"], [1, "top-right"], [1, "bottom-left"], [1, "bottom-right"], [1, "card-header"], [1, "card-title"], [1, "card-body", "text-center"], ["id", "basic-alert", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-text", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-footer", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-dialog", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-confirm", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-parameter", 1, "btn", "btn-primary", 3, "click"], ["id", "long-window", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-description", 1, "btn", "btn-primary", 3, "click"], ["id", "three-buttons", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-image", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-custom-bg", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-auto-close", 1, "btn", "btn-primary", 3, "click"], ["id", "alert-ajax", 1, "btn", "btn-primary", 3, "click"]], template: function SweetalertsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275text(10, " Basic Alert ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10)(12, "button", 11);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_12_listener() {
          return ctx.basicAlert();
        });
        \u0275\u0275text(13, "Basic Alert");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 2)(15, "div", 3);
        \u0275\u0275element(16, "div", 4)(17, "div", 5)(18, "div", 6)(19, "div", 7);
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 9);
        \u0275\u0275text(22, " Title With Text Under ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "button", 12);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_24_listener() {
          return ctx.titleAlert();
        });
        \u0275\u0275text(25, "Title With Text");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 2)(27, "div", 3);
        \u0275\u0275element(28, "div", 4)(29, "div", 5)(30, "div", 6)(31, "div", 7);
        \u0275\u0275elementStart(32, "div", 8)(33, "div", 9);
        \u0275\u0275text(34, " With Text,Error Icon & Footer ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 10)(36, "button", 13);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_36_listener() {
          return ctx.ErrorAlert();
        });
        \u0275\u0275text(37, "Alert Footer");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(38, "div", 1)(39, "div", 2)(40, "div", 3);
        \u0275\u0275element(41, "div", 4)(42, "div", 5)(43, "div", 6)(44, "div", 7);
        \u0275\u0275elementStart(45, "div", 8)(46, "div", 9);
        \u0275\u0275text(47, " Custom Positioned Dialog Alert ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 10)(49, "button", 14);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_49_listener() {
          return ctx.DialogAlert();
        });
        \u0275\u0275text(50, "Alert Dialog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 2)(52, "div", 3);
        \u0275\u0275element(53, "div", 4)(54, "div", 5)(55, "div", 6)(56, "div", 7);
        \u0275\u0275elementStart(57, "div", 8)(58, "div", 9);
        \u0275\u0275text(59, " Confirm Alert ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 10)(61, "button", 15);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_61_listener() {
          return ctx.ConformAlert();
        });
        \u0275\u0275text(62, "Confirm Alert");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "div", 2)(64, "div", 3);
        \u0275\u0275element(65, "div", 4)(66, "div", 5)(67, "div", 6)(68, "div", 7);
        \u0275\u0275elementStart(69, "div", 8)(70, "div", 9);
        \u0275\u0275text(71, " Alert With Parameters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 10)(73, "button", 16);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_73_listener() {
          return ctx.parametersAlert();
        });
        \u0275\u0275text(74, "Alert Parameters");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(75, "div", 1)(76, "div", 2)(77, "div", 3);
        \u0275\u0275element(78, "div", 4)(79, "div", 5)(80, "div", 6)(81, "div", 7);
        \u0275\u0275elementStart(82, "div", 8)(83, "div", 9);
        \u0275\u0275text(84, " Alert With Long Window ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 10)(86, "button", 17);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_86_listener() {
          return ctx.LongWindowAlert();
        });
        \u0275\u0275text(87, "Long Window Here");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(88, "div", 2)(89, "div", 3);
        \u0275\u0275element(90, "div", 4)(91, "div", 5)(92, "div", 6)(93, "div", 7);
        \u0275\u0275elementStart(94, "div", 8)(95, "div", 9);
        \u0275\u0275text(96, " Custom HTML Description ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 10)(98, "button", 18);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_98_listener() {
          return ctx.Customealert();
        });
        \u0275\u0275text(99, "Custom HTML Alert");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "div", 2)(101, "div", 3);
        \u0275\u0275element(102, "div", 4)(103, "div", 5)(104, "div", 6)(105, "div", 7);
        \u0275\u0275elementStart(106, "div", 8)(107, "div", 9);
        \u0275\u0275text(108, " Alert With Multiple Buttons ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 10)(110, "button", 19);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_110_listener() {
          return ctx.MultipleButtones();
        });
        \u0275\u0275text(111, "Multiple Buttons");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(112, "div", 1)(113, "div", 2)(114, "div", 3);
        \u0275\u0275element(115, "div", 4)(116, "div", 5)(117, "div", 6)(118, "div", 7);
        \u0275\u0275elementStart(119, "div", 8)(120, "div", 9);
        \u0275\u0275text(121, " Alert With Image ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 10)(123, "button", 20);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_123_listener() {
          return ctx.ImageAlert();
        });
        \u0275\u0275text(124, "Image Alert");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(125, "div", 2)(126, "div", 3);
        \u0275\u0275element(127, "div", 4)(128, "div", 5)(129, "div", 6)(130, "div", 7);
        \u0275\u0275elementStart(131, "div", 8)(132, "div", 9);
        \u0275\u0275text(133, " Alert With Image ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div", 10)(135, "button", 21);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_135_listener() {
          return ctx.imageAlert1();
        });
        \u0275\u0275text(136, "Custom Alert");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(137, "div", 2)(138, "div", 3);
        \u0275\u0275element(139, "div", 4)(140, "div", 5)(141, "div", 6)(142, "div", 7);
        \u0275\u0275elementStart(143, "div", 8)(144, "div", 9);
        \u0275\u0275text(145, " Auto Close Alert ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "div", 10)(147, "button", 22);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_147_listener() {
          return ctx.timerAlert();
        });
        \u0275\u0275text(148, "Auto Close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(149, "div", 2)(150, "div", 3);
        \u0275\u0275element(151, "div", 4)(152, "div", 5)(153, "div", 6)(154, "div", 7);
        \u0275\u0275elementStart(155, "div", 8)(156, "div", 9);
        \u0275\u0275text(157, " Ajax Request Alert ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 10)(159, "button", 23);
        \u0275\u0275listener("click", function SweetalertsComponent_Template_button_click_159_listener() {
          return ctx.AjaxRequesrAlert();
        });
        \u0275\u0275text(160, "Ajax Request");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [SharedModule, PageHeaderComponent], styles: ['\n\n.swal2-popup.swal2-toast[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  grid-column: 1/4 !important;\n  grid-row: 1/4 !important;\n  grid-template-columns: min-content auto min-content;\n  padding: 1em;\n  overflow-y: hidden;\n  background: #fff;\n  box-shadow:\n    0 0 1px hsla(0, 0%, 0%, 0.075),\n    0 1px 2px hsla(0, 0%, 0%, 0.075),\n    1px 2px 4px hsla(0, 0%, 0%, 0.075),\n    1px 3px 8px hsla(0, 0%, 0%, 0.075),\n    2px 4px 16px hsla(0, 0%, 0%, 0.075);\n  pointer-events: all;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-title[_ngcontent-%COMP%] {\n  margin: 0.5em 1em;\n  padding: 0;\n  font-size: 1em;\n  text-align: initial;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-loading[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-input[_ngcontent-%COMP%] {\n  height: 2em;\n  margin: 0.5em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-validation-message[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-footer[_ngcontent-%COMP%] {\n  margin: 0.5em 0 0;\n  padding: 0.5em 0 0;\n  font-size: 0.8em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-close[_ngcontent-%COMP%] {\n  grid-column: 3/3;\n  grid-row: 1/99;\n  align-self: center;\n  width: 0.8em;\n  height: 0.8em;\n  margin: 0;\n  font-size: 2em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-html-container[_ngcontent-%COMP%] {\n  margin: 0.5em 1em;\n  padding: 0;\n  overflow: initial;\n  font-size: 1em;\n  text-align: initial;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-html-container[_ngcontent-%COMP%]:empty {\n  padding: 0;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-loader[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/99;\n  align-self: center;\n  width: 2em;\n  height: 2em;\n  margin: 0.25em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-icon[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/99;\n  align-self: center;\n  width: 2em;\n  min-width: 2em;\n  height: 2em;\n  margin: 0 0.5em 0 0;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-icon[_ngcontent-%COMP%]   .swal2-icon-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1.8em;\n  font-weight: bold;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-icon.swal2-success[_ngcontent-%COMP%]   .swal2-success-ring[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-icon.swal2-error[_ngcontent-%COMP%]   [class^=swal2-x-mark-line][_ngcontent-%COMP%] {\n  top: 0.875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-icon.swal2-error[_ngcontent-%COMP%]   [class^=swal2-x-mark-line][class$=left][_ngcontent-%COMP%] {\n  left: 0.3125em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-icon.swal2-error[_ngcontent-%COMP%]   [class^=swal2-x-mark-line][class$=right][_ngcontent-%COMP%] {\n  right: 0.3125em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  height: auto;\n  margin: 0;\n  margin-top: 0.5em;\n  padding: 0 0.5em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-styled[_ngcontent-%COMP%] {\n  margin: 0.25em 0.5em;\n  padding: 0.4em 0.6em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%] {\n  border-color: #a5dc86;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%]   [class^=swal2-success-circular-line][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1.6em;\n  height: 3em;\n  border-radius: 50%;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%]   [class^=swal2-success-circular-line][class$=left][_ngcontent-%COMP%] {\n  top: -0.8em;\n  left: -0.5em;\n  transform: rotate(-45deg);\n  transform-origin: 2em 2em;\n  border-radius: 4em 0 0 4em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%]   [class^=swal2-success-circular-line][class$=right][_ngcontent-%COMP%] {\n  top: -0.25em;\n  left: 0.9375em;\n  transform-origin: 0 1.5em;\n  border-radius: 0 4em 4em 0;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%]   .swal2-success-ring[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%]   .swal2-success-fix[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0.4375em;\n  width: 0.4375em;\n  height: 2.6875em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%]   [class^=swal2-success-line][_ngcontent-%COMP%] {\n  height: 0.3125em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%]   [class^=swal2-success-line][class$=tip][_ngcontent-%COMP%] {\n  top: 1.125em;\n  left: 0.1875em;\n  width: 0.75em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success[_ngcontent-%COMP%]   [class^=swal2-success-line][class$=long][_ngcontent-%COMP%] {\n  top: 0.9375em;\n  right: 0.1875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success.swal2-icon-show[_ngcontent-%COMP%]   .swal2-success-line-tip[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-toast-animate-success-line-tip 0.75s;\n}\n.swal2-popup.swal2-toast[_ngcontent-%COMP%]   .swal2-success.swal2-icon-show[_ngcontent-%COMP%]   .swal2-success-line-long[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-toast-animate-success-line-long 0.75s;\n}\n.swal2-popup.swal2-toast.swal2-show[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-toast-show 0.5s;\n}\n.swal2-popup.swal2-toast.swal2-hide[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-toast-hide 0.1s forwards;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container) {\n  display: grid;\n  position: fixed;\n  z-index: 1060;\n  inset: 0;\n  box-sizing: border-box;\n  grid-template-areas: "top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";\n  grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);\n  height: 100%;\n  padding: 0.625em;\n  overflow-x: hidden;\n  transition: background-color 0.1s;\n  -webkit-overflow-scrolling: touch;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-backdrop-show, \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-noanimation {\n  background: rgba(0, 0, 0, 0.4);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-backdrop-hide {\n  background: transparent !important;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-top-start, \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-center-start, \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-bottom-start {\n  grid-template-columns: minmax(0, 1fr) auto auto;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-top, \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-center, \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-bottom {\n  grid-template-columns: auto minmax(0, 1fr) auto;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-top-end, \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-center-end, \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-bottom-end {\n  grid-template-columns: auto auto minmax(0, 1fr);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-top-start    > .swal2-popup[_ngcontent-%COMP%] {\n  align-self: start;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-top    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-column: 2;\n  place-self: start center;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-top-end    > .swal2-popup[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-top-right    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-column: 3;\n  place-self: start end;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-center-start    > .swal2-popup[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-center-left    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-row: 2;\n  align-self: center;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-center    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n  place-self: center center;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-center-end    > .swal2-popup[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-center-right    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-row: 2;\n  place-self: center end;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-bottom-start    > .swal2-popup[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-bottom-left    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 3;\n  align-self: end;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-bottom    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 3;\n  place-self: end center;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-bottom-end    > .swal2-popup[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-bottom-right    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-row: 3;\n  place-self: end end;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-grow-row    > .swal2-popup[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-grow-fullscreen    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n  width: 100%;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-grow-column    > .swal2-popup[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-grow-fullscreen    > .swal2-popup[_ngcontent-%COMP%] {\n  grid-row: 1/4;\n  align-self: stretch;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container).swal2-no-transition {\n  transition: none !important;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-popup) {\n  display: none;\n  position: relative;\n  box-sizing: border-box;\n  grid-template-columns: minmax(0, 100%);\n  width: 32em;\n  max-width: 100%;\n  padding: 0 0 1.25em;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  color: #545454;\n  font-family: inherit;\n  font-size: 1rem;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-popup):focus {\n  outline: none;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-popup).swal2-loading {\n  overflow-y: hidden;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   h2[_ngcontent-%COMP%]:where(.swal2-title) {\n  position: relative;\n  max-width: 100%;\n  margin: 0;\n  padding: 0.8em 1em 0;\n  color: inherit;\n  font-size: 1.875em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-actions) {\n  display: flex;\n  z-index: 1;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  margin: 1.25em auto 0;\n  padding: 0;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-actions):not(.swal2-loading)   .swal2-styled[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-actions):not(.swal2-loading)   .swal2-styled[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-actions):not(.swal2-loading)   .swal2-styled[_ngcontent-%COMP%]:active {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-loader) {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 2.2em;\n  height: 2.2em;\n  margin: 0 1.875em;\n  animation: _ngcontent-%COMP%_swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border-width: 0.25em;\n  border-style: solid;\n  border-radius: 100%;\n  border-color: #2778c4 transparent #2778c4 transparent;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled) {\n  margin: 0.3125em;\n  padding: 0.625em 1.1em;\n  transition: box-shadow 0.1s;\n  box-shadow: 0 0 0 3px transparent;\n  font-weight: 500;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled):not([disabled]) {\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled):where(.swal2-confirm) {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #7066e0;\n  color: #fff;\n  font-size: 1em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled):where(.swal2-confirm):focus-visible {\n  box-shadow: 0 0 0 3px rgba(112, 102, 224, 0.5);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled):where(.swal2-deny) {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #dc3741;\n  color: #fff;\n  font-size: 1em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled):where(.swal2-deny):focus-visible {\n  box-shadow: 0 0 0 3px rgba(220, 55, 65, 0.5);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled):where(.swal2-cancel) {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #6e7881;\n  color: #fff;\n  font-size: 1em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled):where(.swal2-cancel):focus-visible {\n  box-shadow: 0 0 0 3px rgba(110, 120, 129, 0.5);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled).swal2-default-outline:focus-visible {\n  box-shadow: 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled):focus-visible {\n  outline: none;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-styled)::-moz-focus-inner {\n  border: 0;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-footer) {\n  margin: 1em 0 0;\n  padding: 1em 1em 0;\n  border-top: 1px solid #eee;\n  color: inherit;\n  font-size: 1em;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-timer-progress-bar-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  grid-column: auto !important;\n  overflow: hidden;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-timer-progress-bar) {\n  width: 100%;\n  height: 0.25em;\n  background: rgba(0, 0, 0, 0.2);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   img[_ngcontent-%COMP%]:where(.swal2-image) {\n  max-width: 100%;\n  margin: 2em auto 1em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-close) {\n  z-index: 2;\n  align-items: center;\n  justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  margin-top: 0;\n  margin-right: 0;\n  margin-bottom: -1.2em;\n  padding: 0;\n  overflow: hidden;\n  transition: color 0.1s, box-shadow 0.1s;\n  border: none;\n  border-radius: 5px;\n  background: transparent;\n  color: #ccc;\n  font-family: monospace;\n  font-size: 2.5em;\n  cursor: pointer;\n  justify-self: end;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-close):hover {\n  transform: none;\n  background: transparent;\n  color: #f27474;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-close):focus-visible {\n  outline: none;\n  box-shadow: inset 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   button[_ngcontent-%COMP%]:where(.swal2-close)::-moz-focus-inner {\n  border: 0;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-html-container[_ngcontent-%COMP%] {\n  z-index: 1;\n  justify-content: center;\n  margin: 0;\n  padding: 1em 1.6em 0.3em;\n  overflow: auto;\n  color: inherit;\n  font-size: 1.125em;\n  font-weight: normal;\n  line-height: normal;\n  text-align: center;\n  word-wrap: break-word;\n  word-break: break-word;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-input), \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-file), \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   textarea[_ngcontent-%COMP%]:where(.swal2-textarea), \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   select[_ngcontent-%COMP%]:where(.swal2-select), \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-radio), \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   label[_ngcontent-%COMP%]:where(.swal2-checkbox) {\n  margin: 1em 2em 3px;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-input), \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-file), \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   textarea[_ngcontent-%COMP%]:where(.swal2-textarea) {\n  box-sizing: border-box;\n  width: auto;\n  transition: border-color 0.1s, box-shadow 0.1s;\n  border: 1px solid #d9d9d9;\n  border-radius: 0.1875em;\n  background: transparent;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;\n  color: inherit;\n  font-size: 1.125em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-input).swal2-inputerror, \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-file).swal2-inputerror, \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   textarea[_ngcontent-%COMP%]:where(.swal2-textarea).swal2-inputerror {\n  border-color: #f27474 !important;\n  box-shadow: 0 0 2px #f27474 !important;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-input):focus, \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-file):focus, \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   textarea[_ngcontent-%COMP%]:where(.swal2-textarea):focus {\n  border: 1px solid #b4dbed;\n  outline: none;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-input)::placeholder, \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   input[_ngcontent-%COMP%]:where(.swal2-file)::placeholder, \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   textarea[_ngcontent-%COMP%]:where(.swal2-textarea)::placeholder {\n  color: #ccc;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-range[_ngcontent-%COMP%] {\n  margin: 1em 2em 3px;\n  background: #fff;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-range[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-range[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {\n  width: 20%;\n  color: inherit;\n  font-weight: 600;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-range[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-range[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {\n  height: 2.625em;\n  padding: 0;\n  font-size: 1.125em;\n  line-height: 2.625em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-input[_ngcontent-%COMP%] {\n  height: 2.625em;\n  padding: 0 0.75em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-file[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-right: auto;\n  margin-left: auto;\n  background: transparent;\n  font-size: 1.125em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-textarea[_ngcontent-%COMP%] {\n  height: 6.75em;\n  padding: 0.75em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-select[_ngcontent-%COMP%] {\n  min-width: 50%;\n  max-width: 100%;\n  padding: 0.375em 0.625em;\n  background: transparent;\n  color: inherit;\n  font-size: 1.125em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-radio[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-checkbox[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: inherit;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 0.6em;\n  font-size: 1.125em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin: 0 0.4em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   label[_ngcontent-%COMP%]:where(.swal2-input-label) {\n  display: flex;\n  justify-content: center;\n  margin: 1em auto 0;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-validation-message) {\n  align-items: center;\n  justify-content: center;\n  margin: 1em 0 0;\n  padding: 0.625em;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: #666666;\n  font-size: 1em;\n  font-weight: 300;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   div[_ngcontent-%COMP%]:where(.swal2-validation-message)::before {\n  content: "!";\n  display: inline-block;\n  width: 1.5em;\n  min-width: 1.5em;\n  height: 1.5em;\n  margin: 0 0.625em;\n  border-radius: 50%;\n  background-color: #f27474;\n  color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-progress-steps[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  align-items: center;\n  max-width: 100%;\n  margin: 1.25em auto;\n  padding: 0;\n  background: transparent;\n  font-weight: 600;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-progress-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-progress-steps[_ngcontent-%COMP%]   .swal2-progress-step[_ngcontent-%COMP%] {\n  z-index: 20;\n  flex-shrink: 0;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background: #2778c4;\n  color: #fff;\n  line-height: 2em;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-progress-steps[_ngcontent-%COMP%]   .swal2-progress-step.swal2-active-progress-step[_ngcontent-%COMP%] {\n  background: #2778c4;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-progress-steps[_ngcontent-%COMP%]   .swal2-progress-step.swal2-active-progress-step[_ngcontent-%COMP%]    ~ .swal2-progress-step[_ngcontent-%COMP%] {\n  background: #add8e6;\n  color: #fff;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-progress-steps[_ngcontent-%COMP%]   .swal2-progress-step.swal2-active-progress-step[_ngcontent-%COMP%]    ~ .swal2-progress-step-line[_ngcontent-%COMP%] {\n  background: #add8e6;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-container)   .swal2-progress-steps[_ngcontent-%COMP%]   .swal2-progress-step-line[_ngcontent-%COMP%] {\n  z-index: 10;\n  flex-shrink: 0;\n  width: 2.5em;\n  height: 0.4em;\n  margin: 0 -1px;\n  background: #2778c4;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon) {\n  position: relative;\n  box-sizing: content-box;\n  justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 2.5em auto 0.6em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  border-color: #000;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon)   .swal2-icon-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 3.75em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-error {\n  border-color: #f27474;\n  color: #f27474;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-error   .swal2-x-mark[_ngcontent-%COMP%] {\n  position: relative;\n  flex-grow: 1;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-error   [class^=swal2-x-mark-line][_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 2.3125em;\n  width: 2.9375em;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #f27474;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-error   [class^=swal2-x-mark-line][class$=left][_ngcontent-%COMP%] {\n  left: 1.0625em;\n  transform: rotate(45deg);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-error   [class^=swal2-x-mark-line][class$=right][_ngcontent-%COMP%] {\n  right: 1em;\n  transform: rotate(-45deg);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-error.swal2-icon-show {\n  animation: _ngcontent-%COMP%_swal2-animate-error-icon 0.5s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-error.swal2-icon-show   .swal2-x-mark[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-animate-error-x-mark 0.5s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-warning {\n  border-color: #facea8;\n  color: #f8bb86;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-warning.swal2-icon-show {\n  animation: _ngcontent-%COMP%_swal2-animate-error-icon 0.5s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-warning.swal2-icon-show   .swal2-icon-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-animate-i-mark 0.5s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-info {\n  border-color: #9de0f6;\n  color: #3fc3ee;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-info.swal2-icon-show {\n  animation: _ngcontent-%COMP%_swal2-animate-error-icon 0.5s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-info.swal2-icon-show   .swal2-icon-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-animate-i-mark 0.8s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-question {\n  border-color: #c9dae1;\n  color: #87adbd;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-question.swal2-icon-show {\n  animation: _ngcontent-%COMP%_swal2-animate-error-icon 0.5s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-question.swal2-icon-show   .swal2-icon-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-animate-question-mark 0.8s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success {\n  border-color: #a5dc86;\n  color: #a5dc86;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success   [class^=swal2-success-circular-line][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n  border-radius: 50%;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success   [class^=swal2-success-circular-line][class$=left][_ngcontent-%COMP%] {\n  top: -0.4375em;\n  left: -2.0635em;\n  transform: rotate(-45deg);\n  transform-origin: 3.75em 3.75em;\n  border-radius: 7.5em 0 0 7.5em;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success   [class^=swal2-success-circular-line][class$=right][_ngcontent-%COMP%] {\n  top: -0.6875em;\n  left: 1.875em;\n  transform: rotate(-45deg);\n  transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success   .swal2-success-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: -0.25em;\n  left: -0.25em;\n  box-sizing: content-box;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success   .swal2-success-fix[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  transform: rotate(-45deg);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success   [class^=swal2-success-line][_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #a5dc86;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success   [class^=swal2-success-line][class$=tip][_ngcontent-%COMP%] {\n  top: 2.875em;\n  left: 0.8125em;\n  width: 1.5625em;\n  transform: rotate(45deg);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success   [class^=swal2-success-line][class$=long][_ngcontent-%COMP%] {\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  transform: rotate(-45deg);\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success.swal2-icon-show   .swal2-success-line-tip[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-animate-success-line-tip 0.75s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success.swal2-icon-show   .swal2-success-line-long[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-animate-success-line-long 0.75s;\n}\ndiv[_ngcontent-%COMP%]:where(.swal2-icon).swal2-success.swal2-icon-show   .swal2-success-circular-line-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-rotate-success-circular-line 4.25s ease-in;\n}\n[class^=swal2][_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n}\n.swal2-show[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-show 0.3s;\n}\n.swal2-hide[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swal2-hide 0.15s forwards;\n}\n.swal2-noanimation[_ngcontent-%COMP%] {\n  transition: none;\n}\n.swal2-scrollbar-measure[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n.swal2-rtl[_ngcontent-%COMP%]   .swal2-close[_ngcontent-%COMP%] {\n  margin-right: initial;\n  margin-left: 0;\n}\n.swal2-rtl[_ngcontent-%COMP%]   .swal2-timer-progress-bar[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n@keyframes _ngcontent-%COMP%_swal2-toast-show {\n  0% {\n    transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    transform: translateY(0) rotateZ(0deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-toast-hide {\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-show {\n  0% {\n    transform: scale(0.7);\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-hide {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-rotate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-animate-question-mark {\n  0% {\n    transform: rotateY(-360deg);\n  }\n  100% {\n    transform: rotateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_swal2-animate-i-mark {\n  0% {\n    transform: rotateZ(45deg);\n    opacity: 0;\n  }\n  25% {\n    transform: rotateZ(-25deg);\n    opacity: 0.4;\n  }\n  50% {\n    transform: rotateZ(15deg);\n    opacity: 0.8;\n  }\n  75% {\n    transform: rotateZ(-5deg);\n    opacity: 1;\n  }\n  100% {\n    transform: rotateX(0);\n    opacity: 1;\n  }\n}\nbody.swal2-shown[_ngcontent-%COMP%]:not(.swal2-no-backdrop, .swal2-toast-shown) {\n  overflow: hidden;\n}\nbody.swal2-height-auto[_ngcontent-%COMP%] {\n  height: auto !important;\n}\nbody.swal2-no-backdrop[_ngcontent-%COMP%]   .swal2-container[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  pointer-events: none;\n}\nbody.swal2-no-backdrop[_ngcontent-%COMP%]   .swal2-container[_ngcontent-%COMP%]   .swal2-popup[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\nbody.swal2-no-backdrop[_ngcontent-%COMP%]   .swal2-container[_ngcontent-%COMP%]   .swal2-modal[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\n@media print {\n  body.swal2-shown[_ngcontent-%COMP%]:not(.swal2-no-backdrop, .swal2-toast-shown) {\n    overflow-y: scroll !important;\n  }\n  body.swal2-shown[_ngcontent-%COMP%]:not(.swal2-no-backdrop, .swal2-toast-shown)    > [aria-hidden=true][_ngcontent-%COMP%] {\n    display: none;\n  }\n  body.swal2-shown[_ngcontent-%COMP%]:not(.swal2-no-backdrop, .swal2-toast-shown)   .swal2-container[_ngcontent-%COMP%] {\n    position: static !important;\n  }\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 360px;\n  max-width: 100%;\n  background-color: transparent;\n  pointer-events: none;\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-top[_ngcontent-%COMP%] {\n  inset: 0 auto auto 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-top-end[_ngcontent-%COMP%], \nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-top-right[_ngcontent-%COMP%] {\n  inset: 0 0 auto auto;\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-top-start[_ngcontent-%COMP%], \nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-top-left[_ngcontent-%COMP%] {\n  inset: 0 auto auto 0;\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-center-start[_ngcontent-%COMP%], \nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-center-left[_ngcontent-%COMP%] {\n  inset: 50% auto auto 0;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-center[_ngcontent-%COMP%] {\n  inset: 50% auto auto 50%;\n  transform: translate(-50%, -50%);\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-center-end[_ngcontent-%COMP%], \nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-center-right[_ngcontent-%COMP%] {\n  inset: 50% 0 auto auto;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-bottom-start[_ngcontent-%COMP%], \nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-bottom-left[_ngcontent-%COMP%] {\n  inset: auto auto 0 0;\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-bottom[_ngcontent-%COMP%] {\n  inset: auto auto 0 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-bottom-end[_ngcontent-%COMP%], \nbody.swal2-toast-shown[_ngcontent-%COMP%]   .swal2-container.swal2-bottom-right[_ngcontent-%COMP%] {\n  inset: auto 0 0 auto;\n}\n  .swal2-timer-progress-bar {\n  background: rgb(0, 255, 190) !important;\n}\n  .swal2-styled {\n  font-size: 0.875rem !important;\n}\n  .swal2-styled:focus {\n  box-shadow: none;\n}\n  .swal2-title {\n  color: #334151;\n  font-weight: 500;\n  font-size: 24px;\n}\n  .swal2-content {\n  font-size: 16px;\n}\n  .dark-theme .swal2-popup {\n  background-color: #24243e;\n}\n  .dark-theme .swal2-html-container {\n  color: #ccc;\n}\n  .dark-theme .swal2-title {\n  color: #eee;\n}\n/*# sourceMappingURL=sweetalerts.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SweetalertsComponent, { className: "SweetalertsComponent", filePath: "src\\app\\components\\apps\\sweetalerts\\sweetalerts.component.ts", lineNumber: 12 });
})();
export {
  SweetalertsComponent
};
//# sourceMappingURL=sweetalerts.component-OPH55PMN.js.map
