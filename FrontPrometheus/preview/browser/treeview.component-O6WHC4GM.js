import {
  FlatTreeControl,
  MatTree,
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodePadding,
  MatTreeNodeToggle
} from "./chunk-BP4DFEFY.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-4JAVGBFR.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-KI24SFMQ.js";
import "./chunk-CM5ST2VM.js";
import "./chunk-GSML466W.js";
import "./chunk-KAPOL4LA.js";
import "./chunk-N74BERQD.js";
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
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/components/advancedui/treeview/treeview.component.ts
function TreeviewComponent_mat_tree_node_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tree-node", 10);
    \u0275\u0275element(1, "button", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", node_r1.name, " ");
  }
}
function TreeviewComponent_mat_tree_node_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tree-node", 10)(1, "button", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Toggle " + node_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r2) ? "expand_more" : "chevron_right", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r2.name, " ");
  }
}
var TREE_DATA = [
  {
    name: "Fruit",
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Vegetables",
    children: [
      {
        name: "Green",
        children: [{ name: "Broccoli" }, { name: "Brussels sprouts" }]
      },
      {
        name: "Orange",
        children: [{ name: "Pumpkins" }, { name: "Carrots" }]
      }
    ]
  }
];
var TreeviewComponent = class _TreeviewComponent {
  constructor() {
    this._transformer = (node, level) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level
      };
    };
    this.treeControl = new FlatTreeControl((node) => node.level, (node) => node.expandable);
    this.treeFlattener = new MatTreeFlattener(this._transformer, (node) => node.level, (node) => node.expandable, (node) => node.children);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.hasChild = (_, node) => node.expandable;
    this.dataSource.data = TREE_DATA;
  }
  static {
    this.\u0275fac = function TreeviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TreeviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreeviewComponent, selectors: [["app-treeview"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [["hassub", "", "sub", "Home", "title1", "Advanced Ui", "title", "Treeview", "activeTitle", "Treeview"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Basic Treeview ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "mat-tree", 7);
        \u0275\u0275template(9, TreeviewComponent_mat_tree_node_9_Template, 3, 1, "mat-tree-node", 8)(10, TreeviewComponent_mat_tree_node_10_Template, 5, 3, "mat-tree-node", 9);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTreeNodeDefWhen", ctx.hasChild);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, MatTreeModule, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatIconModule, MatIcon, MatButtonModule, MatIconButton] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreeviewComponent, { className: "TreeviewComponent", filePath: "src\\app\\components\\advancedui\\treeview\\treeview.component.ts", lineNumber: 51 });
})();
export {
  TreeviewComponent
};
//# sourceMappingURL=treeview.component-O6WHC4GM.js.map
