import {
  AngularFireAuth,
  AngularFireAuthModule,
  AngularFireDatabaseModule,
  AngularFireModule,
  AngularFirestoreModule
} from "./chunk-52GCIXOX.js";
import "./chunk-ERA7BX76.js";
import {
  environment
} from "./chunk-BG5S72EG.js";
import {
  ToastrService
} from "./chunk-HXNONXJ5.js";
import "./chunk-HWBKIOGC.js";
import {
  NgbModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet
} from "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-BKD3PXJL.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EXZMHBSY.js";
import {
  NgZone,
  Renderer2,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import "./chunk-AJH3MT3R.js";

// src/app/shared/services/firebase.service.ts
var FirebaseService = class _FirebaseService {
  constructor() {
    AngularFireModule.initializeApp(environment.firebase);
  }
  getFirestore() {
    return AngularFirestoreModule;
  }
  getDatabase() {
    return AngularFireDatabaseModule;
  }
  getAuth() {
    return AngularFireAuthModule;
  }
  static {
    this.\u0275fac = function FirebaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FirebaseService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FirebaseService, factory: _FirebaseService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(afu, router, ngZone) {
    this.afu = afu;
    this.router = router;
    this.ngZone = ngZone;
    this.showLoader = false;
    this.afu.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }
  // all firebase getdata functions
  get isUserAnonymousLoggedIn() {
    return this.authState !== null ? this.authState.isAnonymous : false;
  }
  get currentUserId() {
    return this.authState !== null ? this.authState.uid : "";
  }
  get currentUserName() {
    return this.authState["email"];
  }
  get currentUser() {
    return this.authState !== null ? this.authState : null;
  }
  get isUserEmailLoggedIn() {
    if (this.authState !== null && !this.isUserAnonymousLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
  registerWithEmail(email, password) {
    return this.afu.createUserWithEmailAndPassword(email, password).then((user) => {
      this.authState = user;
    }).catch((_error) => {
      console.log(_error);
      throw _error;
    });
  }
  loginWithEmail(email, password) {
    return this.afu.signInWithEmailAndPassword(email, password).then((user) => {
      this.authState = user;
    }).catch((_error) => {
      console.log(_error);
      throw _error;
    });
  }
  singout() {
    this.afu.signOut();
    this.router.navigate(["/login"]);
  }
  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.SendVerificationMail();
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message);
    });
  }
  // main verification function
  SendVerificationMail() {
    return this.afAuth.currentUser.then((u) => u.sendEmailVerification()).then(() => {
      this.router.navigate(["/dashboard"]);
    });
  }
  // Set user
  SetUserData(user) {
    const userRef = this.afs.doc(`users/${user.uid}`);
    const userData = {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL || "src/favicon.ico",
      emailVerified: user.emailVerified
    };
    userRef.delete().then(function() {
    }).catch(function(error) {
    });
    return userRef.set(userData, {
      merge: true
    });
  }
  // sign in function
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
      if (result.user.emailVerified !== true) {
        this.SetUserData(result.user);
        this.SendVerificationMail();
        this.showLoader = true;
      } else {
        this.showLoader = false;
        this.ngZone.run(() => {
          this.router.navigate(["/auth/login"]);
        });
      }
    }).catch((error) => {
      throw error;
    });
  }
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {
      window.alert("Password reset email sent, check your inbox.");
    }).catch((error) => {
      window.alert(error);
    });
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(AngularFireAuth), \u0275\u0275inject(Router), \u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

// src/app/authentication/login/login.component.ts
var _c0 = () => ["/dashboards/sales"];
var _c1 = () => ["/authentication/reset-password/basic"];
function LoginComponent_ng_template_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage, " ");
  }
}
function LoginComponent_ng_template_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2._error.message, " ");
  }
}
function LoginComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 32);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_template_20_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.login());
    });
    \u0275\u0275template(1, LoginComponent_ng_template_20_Conditional_1_Template, 2, 1, "p", 33)(2, LoginComponent_ng_template_20_Conditional_2_Template, 2, 1, "p", 33);
    \u0275\u0275elementStart(3, "div", 34)(4, "label", 35);
    \u0275\u0275text(5, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_ng_template_20_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.email, $event) || (ctx_r2.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "label", 38);
    \u0275\u0275text(9, "Password");
    \u0275\u0275elementStart(10, "a", 39);
    \u0275\u0275text(11, "Forget password ?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 40)(13, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_ng_template_20_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.password, $event) || (ctx_r2.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 42);
    \u0275\u0275listener("click", function LoginComponent_ng_template_20_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleVisibility());
    });
    \u0275\u0275element(15, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 43)(17, "div", 44);
    \u0275\u0275element(18, "input", 45);
    \u0275\u0275elementStart(19, "label", 46);
    \u0275\u0275text(20, " Remember password ? ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 47)(22, "button", 48);
    \u0275\u0275text(23, " Sign In ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.loginForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.errorMessage.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2._error.message.length > 0 ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.password);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("", ctx_r2.toggleClass, " align-middle");
    \u0275\u0275advance(7);
    \u0275\u0275classMapInterpolate1("btn btn-lg btn-primary", ctx_r2.disabled, "");
    \u0275\u0275classProp("loader--text", ctx_r2.authservice.showLoader);
    \u0275\u0275property("disabled", !ctx_r2.loginForm.valid || ctx_r2.authservice.showLoader);
  }
}
function LoginComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 32);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_template_24_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.Submit());
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "label", 35);
    \u0275\u0275text(5, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 37)(8, "label", 38);
    \u0275\u0275text(9, "Password ");
    \u0275\u0275elementStart(10, "a", 50);
    \u0275\u0275text(11, "Forget password ?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 40);
    \u0275\u0275element(13, "input", 51);
    \u0275\u0275elementStart(14, "button", 42);
    \u0275\u0275listener("click", function LoginComponent_ng_template_24_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleVisibility());
    });
    \u0275\u0275element(15, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 43)(17, "div", 44);
    \u0275\u0275element(18, "input", 45);
    \u0275\u0275elementStart(19, "label", 46);
    \u0275\u0275text(20, " Remember password ? ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 47)(22, "button", 52);
    \u0275\u0275text(23, "Sign In");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.loginForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.error);
    \u0275\u0275advance(11);
    \u0275\u0275property("type", ctx_r2.showPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("", ctx_r2.toggleClass, " align-middle");
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !ctx_r2.loginForm.valid || ctx_r2.authservice.showLoader);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(authservice, router, formBuilder, renderer, firebaseService, toastr) {
    this.authservice = authservice;
    this.router = router;
    this.formBuilder = formBuilder;
    this.renderer = renderer;
    this.firebaseService = firebaseService;
    this.toastr = toastr;
    this.disabled = "";
    this.firestoreModule = this.firebaseService.getFirestore();
    this.databaseModule = this.firebaseService.getDatabase();
    this.authModule = this.firebaseService.getAuth();
    this.email = "spruko@admin.com";
    this.password = "sprukoadmin";
    this.errorMessage = "";
    this._error = { name: "", message: "" };
    this.error = "";
    this.showPassword = false;
    this.toggleClass = "ri-eye-off-line";
    const bodyElement = this.renderer.selectRootElement("body", true);
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["spruko@admin.com", [Validators.required, Validators.email]],
      password: ["sprukoadmin", Validators.required]
    });
  }
  clearErrorMessage() {
    this.errorMessage = "";
    this._error = { name: "", message: "" };
  }
  login() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password).then(() => {
        this.router.navigate(["/dashboards/sales"]);
        console.clear();
        this.toastr.success("log in successful", "Dashtic", {
          timeOut: 3e3,
          positionClass: "toast-top-right"
        });
      }).catch((_error) => {
        this._error = _error;
        this.router.navigate(["/"]);
      });
    }
  }
  validateForm(email, password) {
    if (email.length === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }
    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }
    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }
    this.errorMessage = "";
    return true;
  }
  get form() {
    return this.loginForm.controls;
  }
  Submit() {
    if (this.loginForm.controls["username"].value === "spruko@admin.com" && this.loginForm.controls["password"].value === "sprukoadmin") {
      this.router.navigate(["/dashboards/sales"]);
    } else {
      this.error = "Please check email and passowrd";
    }
  }
  // public togglePassword() {
  //   this.showPassword = !this.showPassword;
  // }
  ngOnDestroy() {
    const bodyElement = this.renderer.selectRootElement("body", true);
    this.renderer.removeAttribute(bodyElement, "class");
  }
  toggleVisibility() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "ri-eye-line") {
      this.toggleClass = "ri-eye-off-line";
    } else {
      this.toggleClass = "ri-eye-line";
    }
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275ProvidersFeature([FirebaseService]), \u0275\u0275StandaloneFeature], decls: 41, vars: 6, consts: [["nav", "ngbNav"], [1, "container"], [1, "row", "justify-content-center", "align-items-center", "authentication", "authentication-basic", "h-100"], [1, "col-xxl-4", "col-xl-5", "col-lg-5", "col-md-6", "col-sm-8", "col-12"], [1, "my-4", "d-flex", "justify-content-center"], [3, "routerLink"], ["src", "./assets/images/brand-logos/desktop-logo.png", "alt", "logo", 1, "desktop-logo"], ["src", "./assets/images/brand-logos/desktop-dark.png", "alt", "logo", 1, "desktop-dark"], [1, "card", "custom-card"], [1, "card-body", "p-5"], [1, "text-center", "title-style", "mb-4"], [1, "mb-2"], [1, "text-muted", "mt-4"], [1, "login-option"], ["ngbNav", "", 1, "nav-tabs", 3, "activeIdChange", "activeId"], ["ngbNavItem", "Firebase", 1, "me-2"], ["ngbNavLink", ""], ["src", "./assets/images/firebase.svg", "alt", "", 1, "firebase"], ["ngbNavContent", ""], ["ngbNavItem", "Angular"], ["src", "./favicon.ico", "alt", "", 1, "firebase"], ["ngbNavContent", "", 1, "mt-2"], [1, "", 3, "ngbNavOutlet"], [1, "text-center"], [1, "fs-12", "text-muted", "mt-3"], [1, "text-primary", 3, "routerLink"], [1, "text-center", "my-3", "authentication-barrier"], [1, "btn-list", "text-center"], [1, "btn", "btn-icon", "btn-light"], [1, "ri-facebook-line", "fw-bold", "text-dark", "op-7"], [1, "ri-google-line", "fw-bold", "text-dark", "op-7"], [1, "ri-twitter-x-line", "fw-bold", "text-dark", "op-7"], [3, "ngSubmit", "formGroup"], [1, "text-danger"], [1, "col-xl-12"], ["for", "signin-username", 1, "form-label", "text-default"], ["type", "text", "id", "signin-username", "placeholder", "user name", "autocomplete", "", "formControlName", "username", "required", "", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "col-xl-12", "mb-2"], ["for", "signin-password", 1, "form-label", "text-default", "d-block"], [1, "float-end", "text-danger", 3, "routerLink"], [1, "input-group"], ["autocomplete", "", "formControlName", "password", "required", "", "id", "signin-password", "placeholder", "password", 1, "form-control", "form-control-lg", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "mt-2"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label", "text-muted", "fw-normal"], [1, "col-xl-12", "d-grid", "mt-2"], ["type", "submit", "autofocus", "", 3, "disabled"], ["type", "text", "id", "signin-username", "placeholder", "user name", "formControlName", "username", "autocomplete", "", 1, "form-control", "mb-3"], [1, "float-end", "text-danger"], ["formControlName", "password", "autocomplete", "", "id", "signin-password", "placeholder", "password", 1, "form-control", "mb-3", 3, "type"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5);
        \u0275\u0275element(5, "img", 6)(6, "img", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "h2", 11);
        \u0275\u0275text(11, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 12);
        \u0275\u0275text(13, "Sign In to your account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 13)(15, "ul", 14, 0);
        \u0275\u0275twoWayListener("activeIdChange", function LoginComponent_Template_ul_activeIdChange_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.active, $event) || (ctx.active = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(17, "li", 15)(18, "a", 16);
        \u0275\u0275element(19, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, LoginComponent_ng_template_20_Template, 24, 17, "ng-template", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li", 19)(22, "a", 16);
        \u0275\u0275element(23, "img", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, LoginComponent_ng_template_24_Template, 24, 7, "ng-template", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(25, "div", 22);
        \u0275\u0275elementStart(26, "div", 23)(27, "p", 24);
        \u0275\u0275text(28, " Dont have an account? ");
        \u0275\u0275elementStart(29, "a", 25);
        \u0275\u0275text(30, "Sign Up");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 26)(32, "span");
        \u0275\u0275text(33, "OR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 27)(35, "button", 28);
        \u0275\u0275element(36, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 28);
        \u0275\u0275element(38, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 28);
        \u0275\u0275element(40, "i", 31);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        const nav_r5 = \u0275\u0275reference(16);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("activeId", ctx.active);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngbNavOutlet", nav_r5);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      NgbModule,
      NgbNavContent,
      NgbNav,
      NgbNavItem,
      NgbNavItemRole,
      NgbNavLink,
      NgbNavLinkBase,
      NgbNavOutlet,
      AngularFireModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\authentication\\login\\login.component.ts", lineNumber: 23 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-7M5VTVZC.js.map
