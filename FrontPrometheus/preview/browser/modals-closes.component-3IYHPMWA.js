import {
  NgSelectModule
} from "./chunk-LXLENEJX.js";
import {
  AppShowCodeDirective,
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModal,
  NgbModule,
  NgbPopover,
  NgbTooltip
} from "./chunk-JG564GD5.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  Renderer2,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/advancedui/modals-closes/modals-closes.component.ts
var _c0 = ["modal1"];
var _c1 = ["modal2"];
function ModalsClosesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 96);
    \u0275\u0275text(2, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_14_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    })("click", function ModalsClosesComponent_ng_template_14_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_14_Template_button_click_7_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close("Save click"));
    });
    \u0275\u0275text(8, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 100);
    \u0275\u0275text(10, "Save changes");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 101);
    \u0275\u0275text(2, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_32_Template_button_click_3_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    })("click", function ModalsClosesComponent_ng_template_32_Template_button_click_3_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "p");
    \u0275\u0275text(6, " I will not close if you click outside me. Don't even try to press escape key. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 86)(8, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_32_Template_button_click_8_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.close("Save click"));
    });
    \u0275\u0275text(9, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 100);
    \u0275\u0275text(11, "Understood");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 102);
    \u0275\u0275text(2, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_50_Template_button_click_3_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.dismiss("Cross click"));
    })("click", function ModalsClosesComponent_ng_template_50_Template_button_click_3_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "p");
    \u0275\u0275text(6, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "br")(10, "br")(11, "br")(12, "br")(13, "br")(14, "br")(15, "br")(16, "br")(17, "br")(18, "br")(19, "br")(20, "br")(21, "br")(22, "br")(23, "br")(24, "br")(25, "br")(26, "br")(27, "br")(28, "br")(29, "br")(30, "br")(31, "br")(32, "br")(33, "br")(34, "br");
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36, "Lorem ipsum dolor sit amet.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 86)(38, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_50_Template_button_click_38_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.close("Save click"));
    });
    \u0275\u0275text(39, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 100);
    \u0275\u0275text(41, "Save Changes");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 103);
    \u0275\u0275text(2, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_69_Template_button_click_3_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss("Cross click"));
    })("click", function ModalsClosesComponent_ng_template_69_Template_button_click_3_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "p");
    \u0275\u0275text(6, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 86)(8, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_69_Template_button_click_8_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.close("Save click"));
    });
    \u0275\u0275text(9, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 100);
    \u0275\u0275text(11, "Save Changes");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 104);
    \u0275\u0275text(2, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_87_Template_button_click_3_listener() {
      const modal_r16 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(modal_r16.dismiss("Cross click"));
    })("click", function ModalsClosesComponent_ng_template_87_Template_button_click_3_listener() {
      const modal_r16 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(modal_r16.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "p");
    \u0275\u0275text(6, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br")(8, "br")(9, "br")(10, "br")(11, "br")(12, "br")(13, "br")(14, "br")(15, "br")(16, "br")(17, "br");
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, "Lorem ipsum dolor sit amet.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 86)(21, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_87_Template_button_click_21_listener() {
      const modal_r16 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(modal_r16.close("Save click"));
    });
    \u0275\u0275text(22, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 100);
    \u0275\u0275text(24, "Save Changes");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 105);
    \u0275\u0275text(2, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_105_Template_button_click_3_listener() {
      const modal_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(modal_r19.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h5");
    \u0275\u0275text(6, "Popover in a modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, " This ");
    \u0275\u0275elementStart(9, "a", 106);
    \u0275\u0275text(10, "button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " triggers a popover on click. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "hr");
    \u0275\u0275elementStart(13, "h5");
    \u0275\u0275text(14, "Tooltips in a modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p")(16, "a", 107);
    \u0275\u0275text(17, "This link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " and ");
    \u0275\u0275elementStart(19, "a", 107);
    \u0275\u0275text(20, "that link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " have tooltips on hover. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 86)(23, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_105_Template_button_click_23_listener() {
      const modal_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(modal_r19.close("Save click"));
    });
    \u0275\u0275text(24, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 100);
    \u0275\u0275text(26, "Save Changes");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 108);
    \u0275\u0275text(2, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_124_Template_button_click_3_listener() {
      const modal_r22 = \u0275\u0275restoreView(_r21).$implicit;
      return \u0275\u0275resetView(modal_r22.dismiss("Cross click"));
    })("click", function ModalsClosesComponent_ng_template_124_Template_button_click_3_listener() {
      const modal_r22 = \u0275\u0275restoreView(_r21).$implicit;
      return \u0275\u0275resetView(modal_r22.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "div", 109)(6, "div", 33)(7, "div", 110);
    \u0275\u0275text(8, ".col-md-4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 111);
    \u0275\u0275text(10, " .col-md-4 .ms-auto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 112)(12, "div", 113);
    \u0275\u0275text(13, " .col-md-3 .ms-auto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 114);
    \u0275\u0275text(15, " .col-md-2 .ms-auto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 112)(17, "div", 115);
    \u0275\u0275text(18, " .col-md-6 .ms-auto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 112)(20, "div", 116);
    \u0275\u0275text(21, " Level 1: .col-sm-9 ");
    \u0275\u0275elementStart(22, "div", 33)(23, "div", 117);
    \u0275\u0275text(24, " Level 2: .col-8 .col-sm-6 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 118);
    \u0275\u0275text(26, " Level 2: .col-4 .col-sm-6 ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(27, "div", 86)(28, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_124_Template_button_click_28_listener() {
      const modal_r22 = \u0275\u0275restoreView(_r21).$implicit;
      return \u0275\u0275resetView(modal_r22.close("Save click"));
    });
    \u0275\u0275text(29, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 100);
    \u0275\u0275text(31, "Save Changes");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Modal 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 119);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_142_Template_button_click_3_listener() {
      const modal_r25 = \u0275\u0275restoreView(_r24).$implicit;
      return \u0275\u0275resetView(modal_r25.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, " Show a second modal and hide this one with the button below. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 120);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_142_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r25 = \u0275\u0275nextContext();
      const content1_r23 = \u0275\u0275reference(143);
      const content2_r27 = \u0275\u0275reference(145);
      return \u0275\u0275resetView(ctx_r25.openSecondModal(content1_r23, content2_r27));
    });
    \u0275\u0275text(8, " Open second modal ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Modal 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 119);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_144_Template_button_click_3_listener() {
      const modal_r29 = \u0275\u0275restoreView(_r28).$implicit;
      return \u0275\u0275resetView(modal_r29.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, " Hide this modal and show the first with the button below. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 120);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_144_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r25 = \u0275\u0275nextContext();
      const content1_r23 = \u0275\u0275reference(143);
      return \u0275\u0275resetView(ctx_r25.openFirstModal(content1_r23));
    });
    \u0275\u0275text(8, " Back to first ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 121);
    \u0275\u0275text(2, " Extra large modal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_166_Template_button_click_3_listener() {
      const modal_r34 = \u0275\u0275restoreView(_r33).$implicit;
      return \u0275\u0275resetView(modal_r34.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
  }
}
function ModalsClosesComponent_ng_template_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 122);
    \u0275\u0275text(2, "Large modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_168_Template_button_click_3_listener() {
      const modal_r36 = \u0275\u0275restoreView(_r35).$implicit;
      return \u0275\u0275resetView(modal_r36.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
  }
}
function ModalsClosesComponent_ng_template_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 123);
    \u0275\u0275text(2, "Small modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_170_Template_button_click_3_listener() {
      const modal_r38 = \u0275\u0275restoreView(_r37).$implicit;
      return \u0275\u0275resetView(modal_r38.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
  }
}
function ModalsClosesComponent_ng_template_200_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 124);
    \u0275\u0275text(2, " Full screen modal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_200_Template_button_click_3_listener() {
      const modal_r46 = \u0275\u0275restoreView(_r45).$implicit;
      return \u0275\u0275resetView(modal_r46.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_200_Template_button_click_7_listener() {
      const modal_r46 = \u0275\u0275restoreView(_r45).$implicit;
      return \u0275\u0275resetView(modal_r46.close("Save click"));
    });
    \u0275\u0275text(8, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_202_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 125);
    \u0275\u0275text(2, " Full screen below sm ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_202_Template_button_click_3_listener() {
      const modal_r48 = \u0275\u0275restoreView(_r47).$implicit;
      return \u0275\u0275resetView(modal_r48.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_202_Template_button_click_7_listener() {
      const modal_r48 = \u0275\u0275restoreView(_r47).$implicit;
      return \u0275\u0275resetView(modal_r48.close("Save click"));
    });
    \u0275\u0275text(8, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_204_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 126);
    \u0275\u0275text(2, " Full screen below md ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_204_Template_button_click_3_listener() {
      const modal_r50 = \u0275\u0275restoreView(_r49).$implicit;
      return \u0275\u0275resetView(modal_r50.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_204_Template_button_click_7_listener() {
      const modal_r50 = \u0275\u0275restoreView(_r49).$implicit;
      return \u0275\u0275resetView(modal_r50.close("Save click"));
    });
    \u0275\u0275text(8, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_206_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 127);
    \u0275\u0275text(2, " Full screen below lg ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_206_Template_button_click_3_listener() {
      const modal_r52 = \u0275\u0275restoreView(_r51).$implicit;
      return \u0275\u0275resetView(modal_r52.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_206_Template_button_click_7_listener() {
      const modal_r52 = \u0275\u0275restoreView(_r51).$implicit;
      return \u0275\u0275resetView(modal_r52.close("Save click"));
    });
    \u0275\u0275text(8, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_208_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 128);
    \u0275\u0275text(2, " Full screen below xl ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_208_Template_button_click_3_listener() {
      const modal_r54 = \u0275\u0275restoreView(_r53).$implicit;
      return \u0275\u0275resetView(modal_r54.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_208_Template_button_click_7_listener() {
      const modal_r54 = \u0275\u0275restoreView(_r53).$implicit;
      return \u0275\u0275resetView(modal_r54.close("Save click"));
    });
    \u0275\u0275text(8, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_210_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 129);
    \u0275\u0275text(2, " Full screen below xxl ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_210_Template_button_click_3_listener() {
      const modal_r56 = \u0275\u0275restoreView(_r55).$implicit;
      return \u0275\u0275resetView(modal_r56.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98);
    \u0275\u0275text(5, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86)(7, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_210_Template_button_click_7_listener() {
      const modal_r56 = \u0275\u0275restoreView(_r55).$implicit;
      return \u0275\u0275resetView(modal_r56.close("Save click"));
    });
    \u0275\u0275text(8, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_233_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 130);
    \u0275\u0275text(2, " New Message to @mdo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_233_Template_button_click_3_listener() {
      const modal_r61 = \u0275\u0275restoreView(_r60).$implicit;
      return \u0275\u0275resetView(modal_r61.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "form")(6, "div", 89)(7, "label", 131);
    \u0275\u0275text(8, "Recipient:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 89)(11, "label", 133);
    \u0275\u0275text(12, "Message:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 86)(15, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_233_Template_button_click_15_listener() {
      const modal_r61 = \u0275\u0275restoreView(_r60).$implicit;
      return \u0275\u0275resetView(modal_r61.close("Save click"));
    });
    \u0275\u0275text(16, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 100);
    \u0275\u0275text(18, "Send message");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_235_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 130);
    \u0275\u0275text(2, " New Message to @fat ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_235_Template_button_click_3_listener() {
      const modal_r63 = \u0275\u0275restoreView(_r62).$implicit;
      return \u0275\u0275resetView(modal_r63.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "form")(6, "div", 89)(7, "label", 131);
    \u0275\u0275text(8, "Recipient:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 89)(11, "label", 133);
    \u0275\u0275text(12, "Message:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 86)(15, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_235_Template_button_click_15_listener() {
      const modal_r63 = \u0275\u0275restoreView(_r62).$implicit;
      return \u0275\u0275resetView(modal_r63.close("Save click"));
    });
    \u0275\u0275text(16, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 100);
    \u0275\u0275text(18, "Send message");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_237_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 130);
    \u0275\u0275text(2, " New Message to @getbootstrap ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 97);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_237_Template_button_click_3_listener() {
      const modal_r65 = \u0275\u0275restoreView(_r64).$implicit;
      return \u0275\u0275resetView(modal_r65.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "form")(6, "div", 89)(7, "label", 131);
    \u0275\u0275text(8, "Recipient:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 89)(11, "label", 133);
    \u0275\u0275text(12, "Message:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 86)(15, "button", 99);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_237_Template_button_click_15_listener() {
      const modal_r65 = \u0275\u0275restoreView(_r64).$implicit;
      return \u0275\u0275resetView(modal_r65.close("Save click"));
    });
    \u0275\u0275text(16, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 100);
    \u0275\u0275text(18, "Send message");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_358_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_358_Template_button_click_3_listener() {
      const modal_r77 = \u0275\u0275restoreView(_r76).$implicit;
      return \u0275\u0275resetView(modal_r77.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_358_Template_button_click_12_listener() {
      const modal_r77 = \u0275\u0275restoreView(_r76).$implicit;
      return \u0275\u0275resetView(modal_r77.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_360_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_360_Template_button_click_3_listener() {
      const modal_r79 = \u0275\u0275restoreView(_r78).$implicit;
      return \u0275\u0275resetView(modal_r79.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_360_Template_button_click_12_listener() {
      const modal_r79 = \u0275\u0275restoreView(_r78).$implicit;
      return \u0275\u0275resetView(modal_r79.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_362_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_362_Template_button_click_3_listener() {
      const modal_r81 = \u0275\u0275restoreView(_r80).$implicit;
      return \u0275\u0275resetView(modal_r81.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_362_Template_button_click_12_listener() {
      const modal_r81 = \u0275\u0275restoreView(_r80).$implicit;
      return \u0275\u0275resetView(modal_r81.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_364_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_364_Template_button_click_3_listener() {
      const modal_r83 = \u0275\u0275restoreView(_r82).$implicit;
      return \u0275\u0275resetView(modal_r83.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_364_Template_button_click_12_listener() {
      const modal_r83 = \u0275\u0275restoreView(_r82).$implicit;
      return \u0275\u0275resetView(modal_r83.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_366_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_366_Template_button_click_3_listener() {
      const modal_r85 = \u0275\u0275restoreView(_r84).$implicit;
      return \u0275\u0275resetView(modal_r85.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_366_Template_button_click_12_listener() {
      const modal_r85 = \u0275\u0275restoreView(_r84).$implicit;
      return \u0275\u0275resetView(modal_r85.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_368_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_368_Template_button_click_3_listener() {
      const modal_r87 = \u0275\u0275restoreView(_r86).$implicit;
      return \u0275\u0275resetView(modal_r87.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_368_Template_button_click_12_listener() {
      const modal_r87 = \u0275\u0275restoreView(_r86).$implicit;
      return \u0275\u0275resetView(modal_r87.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_370_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_370_Template_button_click_3_listener() {
      const modal_r89 = \u0275\u0275restoreView(_r88).$implicit;
      return \u0275\u0275resetView(modal_r89.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_370_Template_button_click_12_listener() {
      const modal_r89 = \u0275\u0275restoreView(_r88).$implicit;
      return \u0275\u0275resetView(modal_r89.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_372_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_372_Template_button_click_3_listener() {
      const modal_r91 = \u0275\u0275restoreView(_r90).$implicit;
      return \u0275\u0275resetView(modal_r91.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_372_Template_button_click_12_listener() {
      const modal_r91 = \u0275\u0275restoreView(_r90).$implicit;
      return \u0275\u0275resetView(modal_r91.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_374_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_374_Template_button_click_3_listener() {
      const modal_r93 = \u0275\u0275restoreView(_r92).$implicit;
      return \u0275\u0275resetView(modal_r93.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_374_Template_button_click_12_listener() {
      const modal_r93 = \u0275\u0275restoreView(_r92).$implicit;
      return \u0275\u0275resetView(modal_r93.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_376_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 82);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_376_Template_button_click_3_listener() {
      const modal_r95 = \u0275\u0275restoreView(_r94).$implicit;
      return \u0275\u0275resetView(modal_r95.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_376_Template_button_click_12_listener() {
      const modal_r95 = \u0275\u0275restoreView(_r94).$implicit;
      return \u0275\u0275resetView(modal_r95.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function ModalsClosesComponent_ng_template_378_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "h6", 140);
    \u0275\u0275text(2, "Message Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_378_Template_button_click_3_listener() {
      const modal_r97 = \u0275\u0275restoreView(_r96).$implicit;
      return \u0275\u0275resetView(modal_r97.dismiss("Cross click"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "h6");
    \u0275\u0275text(6, "Why We Use Electoral College, Not Popular Vote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 85);
    \u0275\u0275text(8, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "button", 138);
    \u0275\u0275text(11, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 139);
    \u0275\u0275listener("click", function ModalsClosesComponent_ng_template_378_Template_button_click_12_listener() {
      const modal_r97 = \u0275\u0275restoreView(_r96).$implicit;
      return \u0275\u0275resetView(modal_r97.close("Save click"));
    });
    \u0275\u0275text(13, " Close ");
    \u0275\u0275elementEnd()();
  }
}
var ModalsClosesComponent = class _ModalsClosesComponent {
  constructor(modalService, renderer) {
    this.modalService = modalService;
    this.renderer = renderer;
    this.modalOptions = {
      centered: true
    };
  }
  ngOnInit() {
  }
  openScale(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__zoomIn"
    });
  }
  openSlideRight(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__slideInRight"
    });
  }
  openSlideBottom(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__backInUp"
    });
  }
  openNewspaper(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__rotateIn"
    });
  }
  openFall(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "effect-fall"
    });
  }
  openFlipHorizontal(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__flipInY"
    });
  }
  openFlipVertical(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__flipInX"
    });
  }
  openSuperScaled(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__zoomIn"
    });
  }
  openSign(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__flipInX"
    });
  }
  openRotateBottom(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__slideInUp"
    });
  }
  openRotateLeft(modal) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: "animate__animated animate__slideInLeft"
    });
  }
  openJustMe(justme) {
    this.modalService.open(justme, {
      centered: true,
      windowClass: "dark-modal"
    });
  }
  openright(right) {
    this.modalService.open(right, { centered: true });
  }
  openBasic(basicModal) {
    this.modalService.open(basicModal);
  }
  StaticBackdrop(staticbackdropModal) {
    this.modalService.open(staticbackdropModal);
  }
  VerticalCenter(VerticalCenterModal) {
    this.modalService.open(VerticalCenterModal, { centered: true });
  }
  GridOpen(gridModal) {
    this.modalService.open(gridModal, { size: "lg" });
  }
  SuccessOpen(successModal) {
    this.modalService.open(successModal, { centered: true });
  }
  WarningOpen(warningModal) {
    this.modalService.open(warningModal, { centered: true });
  }
  Select2Open(select2Modal) {
    this.modalService.open(select2Modal, { size: "sm" });
  }
  openScrollable(scrollModal) {
    this.modalService.open(scrollModal, { scrollable: true });
  }
  scrollableContent(ScrollingcontentModal) {
    this.modalService.open(ScrollingcontentModal, { scrollable: true });
  }
  VerticalCenterScroll(VerticalCenterScrollModal) {
    this.modalService.open(VerticalCenterScrollModal, { scrollable: true });
  }
  TooltipPopovers(TooltipPopoversModal) {
    this.modalService.open(TooltipPopoversModal, { centered: true });
  }
  Gridmodal(GridCenterModal) {
    this.modalService.open(GridCenterModal, { centered: true });
  }
  togglemodal(ToggleModal) {
    this.modalService.open(ToggleModal, { centered: true });
  }
  togglemodal2(ToggleModal2) {
    this.modalService.open(ToggleModal2, { centered: true });
  }
  openSm(SmallModal) {
    this.modalService.open(SmallModal, { size: "sm" });
  }
  openXl(XlContentModal) {
    this.modalService.open(XlContentModal, { size: "xl" });
  }
  openLg(LargeModal) {
    this.modalService.open(LargeModal, { size: "lg" });
  }
  openFullscreen(FullscreenModal) {
    this.modalService.open(FullscreenModal, { fullscreen: true });
  }
  BelowSm(BelowSmModal) {
    this.modalService.open(BelowSmModal);
  }
  BelowMd(BelowMdModal) {
    this.modalService.open(BelowMdModal);
  }
  BelowLg(BelowLgModal) {
    this.modalService.open(BelowLgModal);
  }
  BelowXl(BelowXlModal) {
    this.modalService.open(BelowXlModal);
  }
  BelowXxl(BelowXxlModal) {
    this.modalService.open(BelowXxlModal);
  }
  Openmdo(OpenmdoModal) {
    this.modalService.open(OpenmdoModal);
  }
  Openfat(OpenfatModal) {
    this.modalService.open(OpenfatModal);
  }
  Opengetbootstrap(OpengetbootstrapModal) {
    this.modalService.open(OpengetbootstrapModal);
  }
  openFirstModal(content1) {
    if (this.secondModalRef) {
      this.secondModalRef.close();
    }
    const modalRef = this.modalService.open(content1, this.modalOptions);
    this.firstModalRef = modalRef;
    modalRef.result.then((result) => {
    }).catch((reason) => {
    });
  }
  openSecondModal(content1, content2) {
    if (this.firstModalRef) {
      this.firstModalRef.close();
    }
    const modalRef = this.modalService.open(content2, this.modalOptions);
    this.secondModalRef = modalRef;
    modalRef.result.then((result) => {
    }).catch((reason) => {
    });
  }
  static {
    this.\u0275fac = function ModalsClosesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalsClosesComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalsClosesComponent, selectors: [["app-modals-closes"]], viewQuery: function ModalsClosesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modal1 = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modal2 = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 380, vars: 0, consts: [["basicModal", ""], ["staticbackdropModal", ""], ["ScrollingcontentModal", ""], ["VerticalCenterModal", ""], ["VerticalCenterScrollModal", ""], ["TooltipPopoversModal", ""], ["GridCenterModal", ""], ["content1", ""], ["content2", ""], ["XlContentModal", ""], ["LargeModal", ""], ["SmallModal", ""], ["FullscreenModal", ""], ["BelowSmModal", ""], ["BelowMdModal", ""], ["BelowLgModal", ""], ["BelowXlModal", ""], ["BelowXxlModal", ""], ["OpenmdoModal", ""], ["OpenfatModal", ""], ["OpengetbootstrapModal", ""], ["scale", ""], ["right", ""], ["bottom", ""], ["newspaper", ""], ["fall", ""], ["flip", ""], ["flipV", ""], ["super", ""], ["sign", ""], ["left", ""], ["justme", ""], ["hassub", "", "sub", "Home", "title1", "Advanced Ui", "title", "Modal & Closes", "activeTitle", "Modal & Closes"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header", "justify-content-between", "d-sm-flex", "d-block"], [1, "card-title"], [1, "prism-toggle", "mt-2", "mt-sm-0"], ["type", "button", "appShowCode", "", 1, "btn", "btn-sm", "btn-primary-light"], [1, "ri-code-line", "ms-2", "d-inline-block", "align-middle"], [1, "card-body"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-primary", 3, "click"], [1, "card-footer", "d-none", "border-top-0"], [1, "language-html"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalScrollable", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalScrollable2", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalScrollable3", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalScrollable4", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalScrollable5", 1, "btn", "btn-primary", 3, "click"], ["data-bs-toggle", "modal", "role", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalXl", 1, "btn", "btn-primary", "m-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalLg", 1, "btn", "btn-secondary", "m-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalSm", 1, "btn", "btn-warning", "m-1", 3, "click"], [1, "col-xl-12"], [1, "bd-example"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreen", 1, "btn", "btn-primary", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenSm", 1, "btn", "btn-secondary", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenMd", 1, "btn", "btn-warning", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenLg", 1, "btn", "btn-info", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenXl", 1, "btn", "btn-success", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenXxl", 1, "btn", "btn-danger", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#formmodal", "data-bs-whatever", "@mdo", 1, "btn", "btn-primary", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#formmodal", "data-bs-whatever", "@fat", 1, "btn", "btn-secondary", "mb-1", "me-1", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#formmodal", "data-bs-whatever", "@getbootstrap", 1, "btn", "btn-light", "mb-1", "me-1", 3, "click"], [1, "col-sm-6", "col-md-4", "col-xl-3"], ["data-bs-effect", "effect-scale", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-slide-in-right", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-slide-in-bottom", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-newspaper", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-fall", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-flip-horizontal", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-flip-vertical", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-super-scaled", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-sign", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-rotate-bottom", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["data-bs-effect", "effect-rotate-left", "data-bs-toggle", "modal", 1, "modal-effect", "btn", "btn-primary", "d-grid", "mb-3", 3, "click"], ["id", "modaldemo8", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "text-center"], [1, "modal-content", "modal-content-demo"], [1, "modal-header"], [1, "modal-title"], ["aria-label", "Close", "data-bs-dismiss", "modal", 1, "btn-close"], [1, "modal-body", "text-start"], [1, "text-muted", "mb-0"], [1, "modal-footer"], [1, "btn", "btn-primary"], ["data-bs-dismiss", "modal", 1, "btn", "btn-light"], [1, "mb-3"], ["type", "button", "aria-label", "Close", 1, "btn-close"], ["type", "button", "disabled", "", "aria-label", "Close", 1, "btn-close"], [1, "card", "overflow-hidden"], [1, "card-body", "bg-black"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-white"], ["type", "button", "disabled", "", "aria-label", "Close", 1, "btn-close", "btn-close-white"], ["id", "exampleModalLabel1", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], ["id", "staticBackdropLabel", 1, "modal-title"], ["id", "staticBackdropLabel1", 1, "modal-title"], ["id", "staticBackdropLabel2", 1, "modal-title"], ["id", "staticBackdropLabel3", 1, "modal-title"], ["id", "staticBackdropLabel4", 1, "modal-title"], ["role", "button", "placement", "right", "popoverTitle", "Popover Right", "ngbPopover", "Popover body content is set in this attribute", 1, "btn", "btn-secondary"], ["ngbTooltip", "tooltip", "title", "Tooltip", 1, "text-primary"], ["id", "staticBackdropLabel5", 1, "modal-title"], [1, "container-fluid"], [1, "col-md-4", "bg-light", "border"], [1, "col-md-4", "ms-auto", "bg-light", "border"], [1, "row", "mt-3"], [1, "col-md-3", "ms-auto", "bg-light", "border"], [1, "col-md-2", "ms-auto", "bg-light", "border"], [1, "col-md-6", "ms-auto", "bg-light", "border"], [1, "col-sm-9", "bg-light", "border"], [1, "col-8", "col-sm-6", "bg-light", "border"], [1, "col-4", "col-sm-6", "bg-light", "border"], ["type", "button", 1, "btn-close", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["id", "exampleModalXlLabel", 1, "modal-title"], ["id", "exampleModalLgLabel", 1, "modal-title"], ["id", "exampleModalSmLabel", 1, "modal-title"], ["id", "exampleModalFullscreenLabel", 1, "modal-title"], ["id", "exampleModalFullscreenSmLabel", 1, "modal-title"], ["id", "exampleModalFullscreenMdLabel", 1, "modal-title"], ["id", "exampleModalFullscreenLgLabel", 1, "modal-title"], ["id", "exampleModalFullscreenXlLabel", 1, "modal-title"], ["id", "exampleModalFullscreenXxlLabel", 1, "modal-title"], ["id", "exampleModalLabel", 1, "modal-title"], ["for", "recipient-name", 1, "col-form-label"], ["value", "@mdo", "type", "text", "id", "recipient-name", 1, "form-control"], ["for", "message-text", 1, "col-form-label"], ["id", "message-text", 1, "form-control"], ["value", "@fat", "type", "text", "id", "recipient-name", 1, "form-control"], ["value", "@getbootstrap", "type", "text", "id", "recipient-name", 1, "form-control"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-primary"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [1, "fs-6"]], template: function ModalsClosesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-page-header", 32);
        \u0275\u0275elementStart(1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "div", 36)(5, "div", 37);
        \u0275\u0275text(6, " Basic Modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 38)(8, "button", 39);
        \u0275\u0275text(9, "Show Code");
        \u0275\u0275element(10, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 41)(12, "button", 42);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          const basicModal_r2 = \u0275\u0275reference(15);
          return \u0275\u0275resetView(ctx.openBasic(basicModal_r2));
        });
        \u0275\u0275text(13, " Launch demo modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, ModalsClosesComponent_ng_template_14_Template, 11, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 43)(17, "pre", 44)(18, "code", 44);
        \u0275\u0275text(19, '<button type="button" class="btn btn-primary" data-bs-toggle="modal"\ndata-bs-target="#exampleModal">\nLaunch demo modal\n</button>\n<div class="modal fade" id="exampleModal" tabindex="-1"\naria-labelledby="exampleModalLabel" aria-hidden="true">\n<div class="modal-dialog">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalLabel1">Modal title</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n<button type="button" class="btn btn-primary">Save\nchanges</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 34)(21, "div", 35)(22, "div", 36)(23, "div", 37);
        \u0275\u0275text(24, " Static backdrop ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 38)(26, "button", 39);
        \u0275\u0275text(27, "Show Code");
        \u0275\u0275element(28, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 41)(30, "button", 45);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          const staticbackdropModal_r5 = \u0275\u0275reference(33);
          return \u0275\u0275resetView(ctx.StaticBackdrop(staticbackdropModal_r5));
        });
        \u0275\u0275text(31, " Launch static backdrop modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, ModalsClosesComponent_ng_template_32_Template, 12, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 43)(35, "pre", 44)(36, "code", 44);
        \u0275\u0275text(37, `<button type="button" class="btn btn-primary" data-bs-toggle="modal"
data-bs-target="#staticBackdrop">
Launch static backdrop modal
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h6 class="modal-title" id="staticBackdropLabel">Modal title
</h6>
<button type="button" class="btn-close" data-bs-dismiss="modal"
aria-label="Close"></button>
</div>
<div class="modal-body">
<p>I will not close if you click outside me. Don't even try to
press
escape key.</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary"
data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Understood</button>
</div>
</div>
</div>
</div>`);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(38, "div", 34)(39, "div", 35)(40, "div", 36)(41, "div", 37);
        \u0275\u0275text(42, " Scrolling long content ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 38)(44, "button", 39);
        \u0275\u0275text(45, "Show Code");
        \u0275\u0275element(46, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 41)(48, "button", 46);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          const ScrollingcontentModal_r8 = \u0275\u0275reference(51);
          return \u0275\u0275resetView(ctx.scrollableContent(ScrollingcontentModal_r8));
        });
        \u0275\u0275text(49, " Scrolling long content ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(50, ModalsClosesComponent_ng_template_50_Template, 42, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 43)(53, "pre", 44)(54, "code", 44);
        \u0275\u0275text(55, '<button type="button" class="btn btn-primary" data-bs-toggle="modal"\ndata-bs-target="#exampleModalScrollable">\nScrolling long content\n</button>\n<div class="modal fade" id="exampleModalScrollable" tabindex="-1"\naria-labelledby="exampleModalScrollable" data-bs-keyboard="false"\naria-hidden="true">\n<div class="modal-dialog modal-dialog-scrollable">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="staticBackdropLabel1">Modal title\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\n  aria-label="Close"></button>\n</div>\n<div class="modal-body">\n<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n  Libero\n  ipsum quasi, error quibusdam debitis maiores hic eum? Vitae\n  nisi\n  ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea\n  voluptatibus, ipsam quo est rerum modi quos expedita facere,\n  ex\n  tempore fuga similique ipsa blanditiis et accusamus\n  temporibus\n  commodi voluptas! Nobis veniam illo architecto expedita quam\n  ratione quaerat omnis. In, recusandae eos! Pariatur,\n  deleniti\n  quis ad nemo ipsam officia temporibus, doloribus fuga\n  asperiores\n  ratione distinctio velit alias hic modi praesentium aperiam\n  officiis eaque, accusamus aut. Accusantium assumenda,\n  commodi\n  nulla provident asperiores fugit inventore iste amet aut\n  placeat\n  consequatur reprehenderit. Ratione tenetur eligendi, quis\n  aperiam dolores magni iusto distinctio voluptatibus minus a\n  unde\n  at! Consequatur voluptatum in eaque obcaecati, impedit\n  accusantium ea soluta, excepturi, quasi quia commodi\n  blanditiis?\n  Qui blanditiis iusto corrupti necessitatibus dolorem fugiat\n  consequuntur quod quo veniam? Labore dignissimos reiciendis\n  accusamus recusandae est consequuntur iure.</p>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<p>Lorem ipsum dolor sit amet.</p>\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\n  data-bs-dismiss="modal">Close</button>\n<button type="button" class="btn btn-primary">Save\n  Changes</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(56, "div", 33)(57, "div", 34)(58, "div", 35)(59, "div", 36)(60, "div", 37);
        \u0275\u0275text(61, " Vertically centered modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 38)(63, "button", 39);
        \u0275\u0275text(64, "Show Code");
        \u0275\u0275element(65, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 41)(67, "button", 47);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_67_listener() {
          \u0275\u0275restoreView(_r1);
          const VerticalCenterModal_r11 = \u0275\u0275reference(70);
          return \u0275\u0275resetView(ctx.VerticalCenter(VerticalCenterModal_r11));
        });
        \u0275\u0275text(68, " Vertically centered modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(69, ModalsClosesComponent_ng_template_69_Template, 12, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 43)(72, "pre", 44)(73, "code", 44);
        \u0275\u0275text(74, '<button type="button" class="btn btn-primary" data-bs-toggle="modal"\ndata-bs-target="#exampleModalScrollable2">\nVertically centered modal\n</button>\n<div class="modal fade" id="exampleModalScrollable2" tabindex="-1"\naria-labelledby="exampleModalScrollable2" data-bs-keyboard="false"\naria-hidden="true">\n<!-- Scrollable modal -->\n<div class="modal-dialog modal-dialog-centered">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="staticBackdropLabel2">Modal title\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.\nLibero\nipsum quasi, error quibusdam debitis maiores hic eum? Vitae\nnisi\nipsa maiores fugiat deleniti quis reiciendis veritatis.</p>\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n<button type="button" class="btn btn-primary">Save\nChanges</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(75, "div", 34)(76, "div", 35)(77, "div", 36)(78, "div", 37);
        \u0275\u0275text(79, " Vertical Centered Scrollable ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 38)(81, "button", 39);
        \u0275\u0275text(82, "Show Code");
        \u0275\u0275element(83, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 41)(85, "button", 48);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_85_listener() {
          \u0275\u0275restoreView(_r1);
          const VerticalCenterScrollModal_r14 = \u0275\u0275reference(88);
          return \u0275\u0275resetView(ctx.VerticalCenterScroll(VerticalCenterScrollModal_r14));
        });
        \u0275\u0275text(86, " Vertically centered scrollable modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(87, ModalsClosesComponent_ng_template_87_Template, 25, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 43)(90, "pre", 44)(91, "code", 44);
        \u0275\u0275text(92, '<button type="button" class="btn btn-primary" data-bs-toggle="modal"\ndata-bs-target="#exampleModalScrollable3">\nVertically centered scrollable modal\n</button>\n<div class="modal fade" id="exampleModalScrollable3" tabindex="-1"\naria-labelledby="exampleModalScrollable3" data-bs-keyboard="false"\naria-hidden="true">\n<!-- Scrollable modal -->\n<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="staticBackdropLabel3">Modal title\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea\nvoluptatibus, ipsam quo est rerum modi quos expedita facere,\nex\ntempore fuga similique ipsa blanditiis et accusamus\ntemporibus\ncommodi voluptas! Nobis veniam illo architecto expedita quam\nratione quaerat omnis. In, recusandae eos! Pariatur,\ndeleniti\nquis ad nemo ipsam officia temporibus, doloribus fuga\nasperiores\nratione distinctio velit alias hic modi praesentium aperiam\nofficiis eaque, accusamus aut. Accusantium assumenda,\ncommodi\nnulla provident asperiores fugit inventore iste amet aut\nplaceat\nconsequatur reprehenderit. Ratione tenetur eligendi, quis\naperiam dolores magni iusto distinctio voluptatibus minus a\nunde\nat! Consequatur voluptatum in eaque obcaecati, impedit\naccusantium ea soluta, excepturi, quasi quia commodi\nblanditiis?\nQui blanditiis iusto corrupti necessitatibus dolorem fugiat\nconsequuntur quod quo veniam? Labore dignissimos reiciendis\naccusamus recusandae est consequuntur iure.</p>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<p>Lorem ipsum dolor sit amet.</p>\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n<button type="button" class="btn btn-primary">Save\nChanges</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(93, "div", 34)(94, "div", 35)(95, "div", 36)(96, "div", 37);
        \u0275\u0275text(97, " Tooltips and popovers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 38)(99, "button", 39);
        \u0275\u0275text(100, "Show Code");
        \u0275\u0275element(101, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div", 41)(103, "button", 49);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_103_listener() {
          \u0275\u0275restoreView(_r1);
          const TooltipPopoversModal_r17 = \u0275\u0275reference(106);
          return \u0275\u0275resetView(ctx.TooltipPopovers(TooltipPopoversModal_r17));
        });
        \u0275\u0275text(104, " Launch demo modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(105, ModalsClosesComponent_ng_template_105_Template, 27, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 43)(108, "pre", 44)(109, "code", 44);
        \u0275\u0275text(110, '<button type="button" class="btn btn-primary" data-bs-toggle="modal"\ndata-bs-target="#exampleModalScrollable4">\nLaunch demo modal\n</button>\n<div class="modal fade" id="exampleModalScrollable4" tabindex="-1"\naria-labelledby="exampleModalScrollable4" data-bs-keyboard="false"\naria-hidden="true">\n<!-- Scrollable modal -->\n<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="staticBackdropLabel4">Modal title\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n<h5>Popover in a modal</h5>\n<p>This <a href="javascript:void(0);" role="button" class="btn btn-secondary"\ndata-bs-toggle="popover" title="Popover title"\ndata-bs-content="Popover body content is set in this attribute.">button</a>\ntriggers a popover on click.</p>\n<hr>\n<h5>Tooltips in a modal</h5>\n<p><a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip" title="Tooltip">This\nlink</a> and <a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip"\ntitle="Tooltip">that link</a> have tooltips on hover.\n</p>\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n<button type="button" class="btn btn-primary">Save\nChanges</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(111, "div", 33)(112, "div", 34)(113, "div", 35)(114, "div", 36)(115, "div", 37);
        \u0275\u0275text(116, " Using the grid ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 38)(118, "button", 39);
        \u0275\u0275text(119, "Show Code");
        \u0275\u0275element(120, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "div", 41)(122, "button", 50);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_122_listener() {
          \u0275\u0275restoreView(_r1);
          const GridCenterModal_r20 = \u0275\u0275reference(125);
          return \u0275\u0275resetView(ctx.Gridmodal(GridCenterModal_r20));
        });
        \u0275\u0275text(123, " Launch demo modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(124, ModalsClosesComponent_ng_template_124_Template, 32, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 43)(127, "pre", 44)(128, "code", 44);
        \u0275\u0275text(129, '<button type="button" class="btn btn-primary" data-bs-toggle="modal"\ndata-bs-target="#exampleModalScrollable5">\nLaunch demo modal\n</button>\n<div class="modal fade" id="exampleModalScrollable5" tabindex="-1"\naria-labelledby="exampleModalScrollable5" data-bs-keyboard="false"\naria-hidden="true">\n<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="staticBackdropLabel5">Modal title\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\n  aria-label="Close">\n</button>\n</div>\n<div class="modal-body">\n<div class="container-fluid">\n  <div class="row">\n      <div class="col-md-4 bg-light border">.col-md-4</div>\n      <div class="col-md-4 ms-auto bg-light border">.col-md-4\n          .ms-auto</div>\n  </div>\n  <div class="row mt-3">\n      <div class="col-md-3 ms-auto bg-light border">.col-md-3\n          .ms-auto</div>\n      <div class="col-md-2 ms-auto bg-light border">.col-md-2\n          .ms-auto</div>\n  </div>\n  <div class="row mt-3">\n      <div class="col-md-6 ms-auto bg-light border">.col-md-6\n          .ms-auto</div>\n  </div>\n  <div class="row mt-3">\n      <div class="col-sm-9 bg-light border">\n          Level 1: .col-sm-9\n          <div class="row">\n              <div class="col-8 col-sm-6 bg-light border">\n                  Level 2: .col-8 .col-sm-6\n              </div>\n              <div class="col-4 col-sm-6 bg-light border">\n                  Level 2: .col-4 .col-sm-6\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\n  data-bs-dismiss="modal">Close</button>\n<button type="button" class="btn btn-primary">Save\n  Changes</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(130, "div", 34)(131, "div", 35)(132, "div", 36)(133, "div", 37);
        \u0275\u0275text(134, " Toggle between modals ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 38)(136, "button", 39);
        \u0275\u0275text(137, "Show Code");
        \u0275\u0275element(138, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "div", 41)(140, "a", 51);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_140_listener() {
          \u0275\u0275restoreView(_r1);
          const content1_r23 = \u0275\u0275reference(143);
          return \u0275\u0275resetView(ctx.openFirstModal(content1_r23));
        });
        \u0275\u0275text(141, "Open first modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(142, ModalsClosesComponent_ng_template_142_Template, 9, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(144, ModalsClosesComponent_ng_template_144_Template, 9, 0, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 43)(147, "pre", 44)(148, "code", 44);
        \u0275\u0275text(149, '<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle"\nrole="button">Open first modal\n</a>\n<div class="modal fade" id="exampleModalToggle"\naria-labelledby="exampleModalToggleLabel" tabindex="-1" aria-hidden="true"\nstyle="display: none;">\n<div class="modal-dialog modal-dialog-centered">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalToggleLabel">Modal 1\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\nShow a second modal and hide this one with the button below.\n</div>\n<div class="modal-footer">\n<button class="btn btn-primary"\ndata-bs-target="#exampleModalToggle2"\ndata-bs-toggle="modal">Open second modal</button>\n</div>\n</div>\n</div>\n</div>\n<div class="modal fade" id="exampleModalToggle2"\naria-labelledby="exampleModalToggleLabel2" tabindex="-1" aria-hidden="true"\nstyle="display: none;">\n<div class="modal-dialog modal-dialog-centered">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalToggleLabel2">Modal 2\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\nHide this modal and show the first with the button below.\n</div>\n<div class="modal-footer">\n<button class="btn btn-primary" data-bs-target="#exampleModalToggle"\ndata-bs-toggle="modal">Back to first</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(150, "div", 34)(151, "div", 35)(152, "div", 36)(153, "div", 37);
        \u0275\u0275text(154, " Optional sizes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 38)(156, "button", 39);
        \u0275\u0275text(157, "Show Code");
        \u0275\u0275element(158, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(159, "div", 41)(160, "button", 52);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_160_listener() {
          \u0275\u0275restoreView(_r1);
          const XlContentModal_r30 = \u0275\u0275reference(167);
          return \u0275\u0275resetView(ctx.openXl(XlContentModal_r30));
        });
        \u0275\u0275text(161, " Extra large modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "button", 53);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_162_listener() {
          \u0275\u0275restoreView(_r1);
          const LargeModal_r31 = \u0275\u0275reference(169);
          return \u0275\u0275resetView(ctx.openLg(LargeModal_r31));
        });
        \u0275\u0275text(163, " Large modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "button", 54);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_164_listener() {
          \u0275\u0275restoreView(_r1);
          const SmallModal_r32 = \u0275\u0275reference(171);
          return \u0275\u0275resetView(ctx.openSm(SmallModal_r32));
        });
        \u0275\u0275text(165, " Small modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(166, ModalsClosesComponent_ng_template_166_Template, 6, 0, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(168, ModalsClosesComponent_ng_template_168_Template, 6, 0, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(170, ModalsClosesComponent_ng_template_170_Template, 6, 0, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "div", 43)(173, "pre", 44)(174, "code", 44);
        \u0275\u0275text(175, '<button type="button" class="btn btn-primary mb-sm-0 mb-1" data-bs-toggle="modal"\ndata-bs-target="#exampleModalXl">Extra large modal</button>\n<button type="button" class="btn btn-secondary mb-sm-0 mb-1" data-bs-toggle="modal"\ndata-bs-target="#exampleModalLg">Large modal</button>\n<button type="button" class="btn btn-warning" data-bs-toggle="modal"\ndata-bs-target="#exampleModalSm">Small modal</button>\n<div class="modal fade" id="exampleModalXl" tabindex="-1"\naria-labelledby="exampleModalXlLabel" style="display: none;" aria-hidden="true">\n<div class="modal-dialog modal-xl">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalXlLabel">Extra large\nmodal</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n</div>\n</div>\n</div>\n<div class="modal fade" id="exampleModalLg" tabindex="-1"\naria-labelledby="exampleModalLgLabel" aria-hidden="true">\n<div class="modal-dialog modal-lg">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalLgLabel">Large modal\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n</div>\n</div>\n</div>\n<div class="modal fade" id="exampleModalSm" tabindex="-1"\naria-labelledby="exampleModalSmLabel" aria-hidden="true">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalSmLabel">Small modal\n</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(176, "div", 33)(177, "div", 55)(178, "div", 35)(179, "div", 36)(180, "div", 37);
        \u0275\u0275text(181, " Fullscreen modal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "div", 38)(183, "button", 39);
        \u0275\u0275text(184, "Show Code");
        \u0275\u0275element(185, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(186, "div", 41)(187, "div", 56)(188, "button", 57);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_188_listener() {
          \u0275\u0275restoreView(_r1);
          const FullscreenModal_r39 = \u0275\u0275reference(201);
          return \u0275\u0275resetView(ctx.openFullscreen(FullscreenModal_r39));
        });
        \u0275\u0275text(189, " Full screen ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "button", 58);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_190_listener() {
          \u0275\u0275restoreView(_r1);
          const BelowSmModal_r40 = \u0275\u0275reference(203);
          return \u0275\u0275resetView(ctx.BelowSm(BelowSmModal_r40));
        });
        \u0275\u0275text(191, " Full screen below sm ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "button", 59);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_192_listener() {
          \u0275\u0275restoreView(_r1);
          const BelowMdModal_r41 = \u0275\u0275reference(205);
          return \u0275\u0275resetView(ctx.BelowMd(BelowMdModal_r41));
        });
        \u0275\u0275text(193, " Full screen below md ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "button", 60);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_194_listener() {
          \u0275\u0275restoreView(_r1);
          const BelowLgModal_r42 = \u0275\u0275reference(207);
          return \u0275\u0275resetView(ctx.BelowLg(BelowLgModal_r42));
        });
        \u0275\u0275text(195, " Full screen below lg ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "button", 61);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_196_listener() {
          \u0275\u0275restoreView(_r1);
          const BelowXlModal_r43 = \u0275\u0275reference(209);
          return \u0275\u0275resetView(ctx.BelowXl(BelowXlModal_r43));
        });
        \u0275\u0275text(197, " Full screen below xl ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "button", 62);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_198_listener() {
          \u0275\u0275restoreView(_r1);
          const BelowXxlModal_r44 = \u0275\u0275reference(211);
          return \u0275\u0275resetView(ctx.BelowXxl(BelowXxlModal_r44));
        });
        \u0275\u0275text(199, " Full screen below xxl ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(200, ModalsClosesComponent_ng_template_200_Template, 9, 0, "ng-template", null, 12, \u0275\u0275templateRefExtractor)(202, ModalsClosesComponent_ng_template_202_Template, 9, 0, "ng-template", null, 13, \u0275\u0275templateRefExtractor)(204, ModalsClosesComponent_ng_template_204_Template, 9, 0, "ng-template", null, 14, \u0275\u0275templateRefExtractor)(206, ModalsClosesComponent_ng_template_206_Template, 9, 0, "ng-template", null, 15, \u0275\u0275templateRefExtractor)(208, ModalsClosesComponent_ng_template_208_Template, 9, 0, "ng-template", null, 16, \u0275\u0275templateRefExtractor)(210, ModalsClosesComponent_ng_template_210_Template, 9, 0, "ng-template", null, 17, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "div", 43)(213, "pre", 44)(214, "code", 44);
        \u0275\u0275text(215, '<div class="bd-example">\n<button type="button" class="btn btn-primary mb-1" data-bs-toggle="modal"\ndata-bs-target="#exampleModalFullscreen">Full screen</button>\n<button type="button" class="btn btn-secondary mb-1" data-bs-toggle="modal"\ndata-bs-target="#exampleModalFullscreenSm">Full screen below sm</button>\n<button type="button" class="btn btn-warning mb-1" data-bs-toggle="modal"\ndata-bs-target="#exampleModalFullscreenMd">Full screen below md</button>\n<button type="button" class="btn btn-info mb-1" data-bs-toggle="modal"\ndata-bs-target="#exampleModalFullscreenLg">Full screen below lg</button>\n<button type="button" class="btn btn-success mb-1" data-bs-toggle="modal"\ndata-bs-target="#exampleModalFullscreenXl">Full screen below xl</button>\n<button type="button" class="btn btn-danger mb-1" data-bs-toggle="modal"\ndata-bs-target="#exampleModalFullscreenXxl">Full screen below\nxxl</button>\n</div>\n<div class="modal fade" id="exampleModalFullscreen" tabindex="-1"\naria-labelledby="exampleModalFullscreenLabel" aria-hidden="true"\nstyle="display: none;">\n<div class="modal-dialog modal-fullscreen">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalFullscreenLabel">Full\nscreen modal</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n</div>\n</div>\n</div>\n</div>\n<div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1"\naria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true"\nstyle="display: none;">\n<div class="modal-dialog modal-fullscreen-sm-down">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalFullscreenSmLabel">\nFull\nscreen below sm</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n</div>\n</div>\n</div>\n</div>\n<div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1"\naria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true"\nstyle="display: none;">\n<div class="modal-dialog modal-fullscreen-md-down">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalFullscreenMdLabel">\nFull\nscreen below md</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n</div>\n</div>\n</div>\n</div>\n<div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1"\naria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true"\nstyle="display: none;">\n<div class="modal-dialog modal-fullscreen-lg-down">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalFullscreenLgLabel">\nFull\nscreen below lg</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n</div>\n</div>\n</div>\n</div>\n<div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1"\naria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true"\nstyle="display: none;">\n<div class="modal-dialog modal-fullscreen-xl-down">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalFullscreenXlLabel">\nFull\nscreen below xl</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n</div>\n</div>\n</div>\n</div>\n<div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1"\naria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true"\nstyle="display: none;">\n<div class="modal-dialog modal-fullscreen-xxl-down">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalFullscreenXxlLabel">\nFull\nscreen below xxl</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n...\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(216, "div", 33)(217, "div", 55)(218, "div", 35)(219, "div", 36)(220, "div", 37);
        \u0275\u0275text(221, " Varying modal content ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "div", 38)(223, "button", 39);
        \u0275\u0275text(224, "Show Code");
        \u0275\u0275element(225, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(226, "div", 41)(227, "button", 63);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_227_listener() {
          \u0275\u0275restoreView(_r1);
          const OpenmdoModal_r57 = \u0275\u0275reference(234);
          return \u0275\u0275resetView(ctx.Openmdo(OpenmdoModal_r57));
        });
        \u0275\u0275text(228, " Open modal for @mdo ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "button", 64);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_229_listener() {
          \u0275\u0275restoreView(_r1);
          const OpenfatModal_r58 = \u0275\u0275reference(236);
          return \u0275\u0275resetView(ctx.Openfat(OpenfatModal_r58));
        });
        \u0275\u0275text(230, " Open modal for @fat ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "button", 65);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_button_click_231_listener() {
          \u0275\u0275restoreView(_r1);
          const OpengetbootstrapModal_r59 = \u0275\u0275reference(238);
          return \u0275\u0275resetView(ctx.Opengetbootstrap(OpengetbootstrapModal_r59));
        });
        \u0275\u0275text(232, " Open modal for @getbootstrap ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(233, ModalsClosesComponent_ng_template_233_Template, 19, 0, "ng-template", null, 18, \u0275\u0275templateRefExtractor)(235, ModalsClosesComponent_ng_template_235_Template, 19, 0, "ng-template", null, 19, \u0275\u0275templateRefExtractor)(237, ModalsClosesComponent_ng_template_237_Template, 19, 0, "ng-template", null, 20, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "div", 43)(240, "pre", 44)(241, "code", 44);
        \u0275\u0275text(242, '<button type="button" class="btn btn-primary mb-1" data-bs-toggle="modal"\ndata-bs-target="#formmodal" data-bs-whatever="@mdo">Open modal for\n@mdo</button>\n<button type="button" class="btn btn-secondary mb-1" data-bs-toggle="modal"\ndata-bs-target="#formmodal" data-bs-whatever="@fat">Open modal for\n@fat</button>\n<button type="button" class="btn btn-light mb-1" data-bs-toggle="modal"\ndata-bs-target="#formmodal" data-bs-whatever="@getbootstrap">Open modal for\n@getbootstrap</button>\n<div class="modal fade" id="formmodal" tabindex="-1"\naria-labelledby="exampleModalLabel" aria-hidden="true">\n<div class="modal-dialog">\n<div class="modal-content">\n<div class="modal-header">\n<h6 class="modal-title" id="exampleModalLabel">New message</h6>\n<button type="button" class="btn-close" data-bs-dismiss="modal"\naria-label="Close"></button>\n</div>\n<div class="modal-body">\n<form>\n<div class="mb-3">\n<label for="recipient-name"\n  class="col-form-label">Recipient:</label>\n<input type="text" class="form-control" id="recipient-name">\n</div>\n<div class="mb-3">\n<label for="message-text"\n  class="col-form-label">Message:</label>\n<textarea class="form-control" id="message-text"></textarea>\n</div>\n</form>\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-secondary"\ndata-bs-dismiss="modal">Close</button>\n<button type="button" class="btn btn-primary">Send\nmessage</button>\n</div>\n</div>\n</div>\n</div>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(243, "div", 33)(244, "div", 55)(245, "div", 35)(246, "div", 36)(247, "div", 37);
        \u0275\u0275text(248, " Modal Animation Effects ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "div", 38)(250, "button", 39);
        \u0275\u0275text(251, "Show Code");
        \u0275\u0275element(252, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(253, "div", 41)(254, "div", 33)(255, "div", 66)(256, "a", 67);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_256_listener() {
          \u0275\u0275restoreView(_r1);
          const scale_r66 = \u0275\u0275reference(359);
          return \u0275\u0275resetView(ctx.openScale(scale_r66));
        });
        \u0275\u0275text(257, "Scale");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(258, "div", 66)(259, "a", 68);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_259_listener() {
          \u0275\u0275restoreView(_r1);
          const right_r67 = \u0275\u0275reference(361);
          return \u0275\u0275resetView(ctx.openSlideRight(right_r67));
        });
        \u0275\u0275text(260, "Slide In Right");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "div", 66)(262, "a", 69);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_262_listener() {
          \u0275\u0275restoreView(_r1);
          const bottom_r68 = \u0275\u0275reference(363);
          return \u0275\u0275resetView(ctx.openSlideBottom(bottom_r68));
        });
        \u0275\u0275text(263, "Slide In Bottom");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(264, "div", 66)(265, "a", 70);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_265_listener() {
          \u0275\u0275restoreView(_r1);
          const newspaper_r69 = \u0275\u0275reference(365);
          return \u0275\u0275resetView(ctx.openNewspaper(newspaper_r69));
        });
        \u0275\u0275text(266, "News Paper");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(267, "div", 66)(268, "a", 71);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_268_listener() {
          \u0275\u0275restoreView(_r1);
          const fall_r70 = \u0275\u0275reference(367);
          return \u0275\u0275resetView(ctx.openFall(fall_r70));
        });
        \u0275\u0275text(269, "Fall");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(270, "div", 66)(271, "a", 72);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_271_listener() {
          \u0275\u0275restoreView(_r1);
          const flip_r71 = \u0275\u0275reference(369);
          return \u0275\u0275resetView(ctx.openFlipHorizontal(flip_r71));
        });
        \u0275\u0275text(272, "Flip Horizontal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(273, "div", 66)(274, "a", 73);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_274_listener() {
          \u0275\u0275restoreView(_r1);
          const flipV_r72 = \u0275\u0275reference(371);
          return \u0275\u0275resetView(ctx.openFlipVertical(flipV_r72));
        });
        \u0275\u0275text(275, "Flip Vertical");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(276, "div", 66)(277, "a", 74);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_277_listener() {
          \u0275\u0275restoreView(_r1);
          const super_r73 = \u0275\u0275reference(373);
          return \u0275\u0275resetView(ctx.openSuperScaled(super_r73));
        });
        \u0275\u0275text(278, "Super Scaled");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(279, "div", 66)(280, "a", 75);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_280_listener() {
          \u0275\u0275restoreView(_r1);
          const sign_r74 = \u0275\u0275reference(375);
          return \u0275\u0275resetView(ctx.openSign(sign_r74));
        });
        \u0275\u0275text(281, "Sign");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(282, "div", 66)(283, "a", 76);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_283_listener() {
          \u0275\u0275restoreView(_r1);
          const bottom_r68 = \u0275\u0275reference(363);
          return \u0275\u0275resetView(ctx.openRotateBottom(bottom_r68));
        });
        \u0275\u0275text(284, "Rotate Bottom");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "div", 66)(286, "a", 77);
        \u0275\u0275listener("click", function ModalsClosesComponent_Template_a_click_286_listener() {
          \u0275\u0275restoreView(_r1);
          const left_r75 = \u0275\u0275reference(377);
          return \u0275\u0275resetView(ctx.openRotateLeft(left_r75));
        });
        \u0275\u0275text(287, "Rotate Left");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(288, "div", 78)(289, "div", 79)(290, "div", 80)(291, "div", 81)(292, "h6", 82);
        \u0275\u0275text(293, "Message Preview");
        \u0275\u0275elementEnd();
        \u0275\u0275element(294, "button", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(295, "div", 84)(296, "h6");
        \u0275\u0275text(297, "Why We Use Electoral College, Not Popular Vote");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "p", 85);
        \u0275\u0275text(299, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(300, "div", 86)(301, "button", 87);
        \u0275\u0275text(302, "Save changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(303, "button", 88);
        \u0275\u0275text(304, " Close ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(305, "div", 43)(306, "pre", 44)(307, "code", 44);
        \u0275\u0275text(308, `<div class="row ">
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-scale" data-bs-toggle="modal" href="#modaldemo8">Scale</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-right" data-bs-toggle="modal" href="#modaldemo8">Slide In Right</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo8">Slide In Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-newspaper" data-bs-toggle="modal" href="#modaldemo8">Newspaper</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-fall" data-bs-toggle="modal" href="#modaldemo8">Fall</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-horizontal" data-bs-toggle="modal" href="#modaldemo8">Flip Horizontal</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-vertical" data-bs-toggle="modal" href="#modaldemo8">Flip Vertical</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-super-scaled" data-bs-toggle="modal" href="#modaldemo8">Super Scaled</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-sign" data-bs-toggle="modal" href="#modaldemo8">Sign</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-bottom" data-bs-toggle="modal" href="#modaldemo8">Rotate Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
<a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-left" data-bs-toggle="modal" href="#modaldemo8">Rotate Left</a>
</div>
</div>
<div class="modal fade"  id="modaldemo8">
<div class="modal-dialog modal-dialog-centered text-center" role="document">
<div class="modal-content modal-content-demo">
<div class="modal-header">
<h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"></button>
</div>
<div class="modal-body text-start">
<h6>Why We Use Electoral College, Not Popular Vote</h6>
<p class="text-muted mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
</div>
<div class="modal-footer">
<button class="btn btn-primary" >Save changes</button> <button class="btn btn-light" data-bs-dismiss="modal" >Close</button>
</div>
</div>
</div>
</div>`);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(309, "h6", 89);
        \u0275\u0275text(310, "Close Buttons:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(311, "div", 33)(312, "div", 34)(313, "div", 35)(314, "div", 36)(315, "div", 37);
        \u0275\u0275text(316, " Basic Close ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(317, "div", 38)(318, "button", 39);
        \u0275\u0275text(319, "Show Code");
        \u0275\u0275element(320, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(321, "div", 41);
        \u0275\u0275element(322, "button", 90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(323, "div", 43)(324, "pre", 44)(325, "code", 44);
        \u0275\u0275text(326, '<button type="button" class="btn-close" aria-label="Close"></button>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(327, "div", 34)(328, "div", 35)(329, "div", 36)(330, "div", 37);
        \u0275\u0275text(331, " Disabel state ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(332, "div", 38)(333, "button", 39);
        \u0275\u0275text(334, "Show Code");
        \u0275\u0275element(335, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(336, "div", 41);
        \u0275\u0275element(337, "button", 91);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(338, "div", 43)(339, "pre", 44)(340, "code", 44);
        \u0275\u0275text(341, '<button type="button" class="btn-close" disabled aria-label="Close"></button>');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(342, "div", 34)(343, "div", 92)(344, "div", 36)(345, "div", 37);
        \u0275\u0275text(346, " White variant ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(347, "div", 38)(348, "button", 39);
        \u0275\u0275text(349, "Show Code");
        \u0275\u0275element(350, "i", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(351, "div", 93);
        \u0275\u0275element(352, "button", 94)(353, "button", 95);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(354, "div", 43)(355, "pre", 44)(356, "code", 44);
        \u0275\u0275text(357, '<button type="button" class="btn-close btn-close-white" aria-label="Close"></button>\n<button type="button" class="btn-close btn-close-white" disabled\naria-label="Close"></button>');
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(358, ModalsClosesComponent_ng_template_358_Template, 14, 0, "ng-template", null, 21, \u0275\u0275templateRefExtractor)(360, ModalsClosesComponent_ng_template_360_Template, 14, 0, "ng-template", null, 22, \u0275\u0275templateRefExtractor)(362, ModalsClosesComponent_ng_template_362_Template, 14, 0, "ng-template", null, 23, \u0275\u0275templateRefExtractor)(364, ModalsClosesComponent_ng_template_364_Template, 14, 0, "ng-template", null, 24, \u0275\u0275templateRefExtractor)(366, ModalsClosesComponent_ng_template_366_Template, 14, 0, "ng-template", null, 25, \u0275\u0275templateRefExtractor)(368, ModalsClosesComponent_ng_template_368_Template, 14, 0, "ng-template", null, 26, \u0275\u0275templateRefExtractor)(370, ModalsClosesComponent_ng_template_370_Template, 14, 0, "ng-template", null, 27, \u0275\u0275templateRefExtractor)(372, ModalsClosesComponent_ng_template_372_Template, 14, 0, "ng-template", null, 28, \u0275\u0275templateRefExtractor)(374, ModalsClosesComponent_ng_template_374_Template, 14, 0, "ng-template", null, 29, \u0275\u0275templateRefExtractor)(376, ModalsClosesComponent_ng_template_376_Template, 14, 0, "ng-template", null, 30, \u0275\u0275templateRefExtractor)(378, ModalsClosesComponent_ng_template_378_Template, 14, 0, "ng-template", null, 31, \u0275\u0275templateRefExtractor);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, AppShowCodeDirective, NgbModule, NgbPopover, NgbTooltip, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, ReactiveFormsModule, NgSelectModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalsClosesComponent, { className: "ModalsClosesComponent", filePath: "src\\app\\components\\advancedui\\modals-closes\\modals-closes.component.ts", lineNumber: 14 });
})();
export {
  ModalsClosesComponent
};
//# sourceMappingURL=modals-closes.component-3IYHPMWA.js.map
