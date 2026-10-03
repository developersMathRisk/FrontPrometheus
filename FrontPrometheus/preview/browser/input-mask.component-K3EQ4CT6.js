import {
  NgxCleaveDirectiveModule,
  cleave_esm_default
} from "./chunk-GCPU5LKQ.js";
import {
  PageHeaderComponent,
  SharedModule
} from "./chunk-RADZCKPS.js";
import {
  NgbModule
} from "./chunk-JG564GD5.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControl,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-BKD3PXJL.js";
import "./chunk-EXZMHBSY.js";
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  Renderer2,
  Self,
  isPlatformServer,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CKCEYOHW.js";
import "./chunk-47S5QMQB.js";
import {
  __async,
  __commonJS,
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-AJH3MT3R.js";

// node_modules/inputmask/dist/inputmask.js
var require_inputmask = __commonJS({
  "node_modules/inputmask/dist/inputmask.js"(exports, module) {
    "use strict";
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object") module.exports = factory();
      else if (typeof define === "function" && define.amd) define([], factory);
      else {
        var a = factory();
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
      }
    })(Object(typeof self !== "undefined" ? self : exports), function() {
      return (
        /******/
        function() {
          "use strict";
          var __webpack_modules__ = [
            ,
            /* 1 */
            /***/
            function() {
              if (typeof Object.getPrototypeOf !== "function") {
                Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function(object) {
                  return object.__proto__;
                } : function(object) {
                  return object.constructor.prototype;
                };
              }
            },
            /* 2 */
            /***/
            function() {
              if (!Array.prototype.includes) {
                Object.defineProperty(Array.prototype, "includes", {
                  value: function(searchElement, fromIndex) {
                    if (this == null) {
                      throw new TypeError('"this" is null or not defined');
                    }
                    const o = Object(this), len = o.length >>> 0;
                    if (len === 0) {
                      return false;
                    }
                    let n = fromIndex | 0, k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                    while (k < len) {
                      if (o[k] === searchElement) {
                        return true;
                      }
                      k++;
                    }
                    return false;
                  }
                });
              }
            },
            /* 3 */
            /***/
            function() {
              const reduce = Function.bind.call(Function.call, Array.prototype.reduce), isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), concat = Function.bind.call(Function.call, Array.prototype.concat), keys = Object.keys;
              if (!Object.entries) {
                Object.entries = function entries(O) {
                  return reduce(keys(O), (e, k) => concat(e, typeof k === "string" && isEnumerable(O, k) ? [[k, O[k]]] : []), []);
                };
              }
            },
            /* 4 */
            /***/
            function() {
              if (!String.prototype.includes) {
                String.prototype.includes = function(search, start) {
                  if (typeof start !== "number") {
                    start = 0;
                  }
                  if (start + search.length > this.length) {
                    return false;
                  } else {
                    return this.indexOf(search, start) !== -1;
                  }
                };
              }
            },
            /* 5 */
            /***/
            function() {
              if (FormData.Inputmask === void 0) {
                class FormDataPatch extends FormData {
                  constructor(form, submitter) {
                    super(form, submitter);
                    const entries = this.entries();
                    let entry;
                    while ((entry = entries.next()).done === false) {
                      const fieldName = entry.value[0], originalValue = entry.value[1], element = form[fieldName];
                      if (element && element.inputmask !== void 0 && !(originalValue instanceof File)) {
                        this.set(fieldName, element.value);
                      }
                    }
                    return this;
                  }
                }
                FormDataPatch.Inputmask = true;
                FormData = FormDataPatch;
              }
            },
            /* 6 */
            /***/
            function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
              var _inputmask = _interopRequireDefault(__webpack_require__2(7));
              var _positioning = __webpack_require__2(20);
              var _validationTests = __webpack_require__2(22);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              _inputmask.default.extendDefinitions({
                A: {
                  validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
                  casing: "upper"
                  // auto uppercasing
                },
                "&": {
                  // alfanumeric uppercasing
                  validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
                  casing: "upper"
                },
                "#": {
                  // hexadecimal
                  validator: "[0-9A-Fa-f]",
                  casing: "upper"
                }
              });
              const ipValidatorRegex = /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;
              function ipValidator(chrs, maskset, pos, strict, opts) {
                if (pos - 1 > -1 && maskset.buffer[pos - 1] !== ".") {
                  chrs = maskset.buffer[pos - 1] + chrs;
                  if (pos - 2 > -1 && maskset.buffer[pos - 2] !== ".") {
                    chrs = maskset.buffer[pos - 2] + chrs;
                  } else chrs = "0" + chrs;
                } else chrs = "00" + chrs;
                if (opts.greedy && parseInt(chrs) > 255 && ipValidatorRegex.test("00" + chrs.charAt(2))) {
                  const buffer = [...maskset.buffer.slice(0, pos), ".", chrs.charAt(2)];
                  if (buffer.join("").match(/\./g).length < 4) {
                    return {
                      refreshFromBuffer: true,
                      buffer,
                      caret: pos + 2
                    };
                  }
                }
                return ipValidatorRegex.test(chrs);
              }
              _inputmask.default.extendAliases({
                cssunit: {
                  regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                },
                url: {
                  // needs update => https://en.wikipedia.org/wiki/URL
                  regex: "(https?|ftp)://.*",
                  autoUnmask: false,
                  keepStatic: false,
                  tabThrough: true
                },
                ip: {
                  // ip-address mask
                  mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                  definitions: {
                    i: {
                      validator: ipValidator
                    },
                    j: {
                      validator: ipValidator
                    },
                    k: {
                      validator: ipValidator
                    },
                    l: {
                      validator: ipValidator
                    }
                  },
                  onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                  },
                  inputmode: "decimal",
                  substitutes: {
                    ",": "."
                  }
                },
                email: {
                  // https://en.wikipedia.org/wiki/Domain_name#Domain_name_space
                  // https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names
                  // should be extended with the toplevel domains at the end
                  mask: function({
                    separator,
                    quantifier
                  }) {
                    let emailMask = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", mask = emailMask;
                    if (separator) {
                      for (let i = 0; i < quantifier; i++) {
                        mask += `[${separator}${emailMask}]`;
                      }
                    }
                    return mask;
                  },
                  greedy: false,
                  casing: "lower",
                  separator: null,
                  quantifier: 5,
                  skipOptionalPartCharacter: "",
                  onBeforePaste: function(pastedValue, opts) {
                    pastedValue = pastedValue.toLowerCase();
                    return pastedValue.replace("mailto:", "");
                  },
                  definitions: {
                    "*": {
                      validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                      validator: "[0-9A-Za-z-]"
                    }
                  },
                  onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                  },
                  inputmode: "email"
                },
                mac: {
                  mask: "##:##:##:##:##:##"
                },
                // https://en.wikipedia.org/wiki/Vehicle_identification_number
                // see issue #1199
                vin: {
                  mask: "V{13}9{4}",
                  definitions: {
                    V: {
                      validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                      casing: "upper"
                    }
                  },
                  clearIncomplete: true,
                  autoUnmask: true
                },
                // http://rion.io/2013/09/10/validating-social-security-numbers-through-regular-expressions-2/
                // https://en.wikipedia.org/wiki/Social_Security_number
                ssn: {
                  mask: "999-99-9999",
                  postValidation: function(buffer, pos, c, currentResult, opts, maskset, strict) {
                    const bffr = _validationTests.getMaskTemplate.call(this, true, _positioning.getLastValidPosition.call(this), true, true);
                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(bffr.join(""));
                  }
                }
              });
            },
            /* 7 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2["default"] = void 0;
              var _defaults = _interopRequireDefault(__webpack_require__2(8));
              var _definitions = _interopRequireDefault(__webpack_require__2(9));
              var _inputmask = _interopRequireDefault(__webpack_require__2(10));
              var _eventruler = __webpack_require__2(15);
              var _window = _interopRequireDefault(__webpack_require__2(11));
              var _inputHandling = __webpack_require__2(16);
              var _mask = __webpack_require__2(23);
              var _maskLexer = __webpack_require__2(24);
              var _positioning = __webpack_require__2(20);
              var _validation = __webpack_require__2(21);
              var _validationTests = __webpack_require__2(22);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const document2 = _window.default.document, dataKey = "_inputmask_opts";
              function Inputmask(alias, options, internal) {
                if (!(this instanceof Inputmask)) {
                  return new Inputmask(alias, options, internal);
                }
                this.dependencyLib = _inputmask.default;
                this.el = void 0;
                this.events = {};
                this.maskset = void 0;
                if (internal !== true) {
                  if (Object.prototype.toString.call(alias) === "[object Object]") {
                    options = alias;
                  } else {
                    options = options || {};
                    if (alias) options.alias = alias;
                  }
                  this.opts = _inputmask.default.extend(true, {}, this.defaults, options);
                  this.noMasksCache = options && options.definitions !== void 0;
                  this.userOptions = options || {};
                  resolveAlias(this.opts.alias, options, this.opts);
                }
                this.refreshValue = false;
                this.undoValue = void 0;
                this.$el = void 0;
                this.skipInputEvent = false;
                this.validationEvent = false;
                this.ignorable = false;
                this.maxLength;
                this.mouseEnter = false;
                this.clicked = 0;
                this.originalPlaceholder = void 0;
                this.isComposing = false;
                this.lastInputEvent = null;
                this.hasAlternator = false;
              }
              Inputmask.prototype = {
                dataAttribute: "data-inputmask",
                // data attribute prefix used for attribute binding
                // options default
                defaults: _defaults.default,
                definitions: _definitions.default,
                aliases: {},
                // aliases definitions
                masksCache: {},
                i18n: {},
                get isRTL() {
                  return this.opts.isRTL || this.opts.numericInput;
                },
                mask: function(elems) {
                  const that = this;
                  if (typeof elems === "string") {
                    elems = document2.getElementById(elems) || document2.querySelectorAll(elems);
                  }
                  elems = elems.nodeName ? [elems] : Array.isArray(elems) ? elems : [].slice.call(elems);
                  elems.forEach(function(el, ndx) {
                    const scopedOpts = _inputmask.default.extend(true, {}, that.opts);
                    if (importAttributeOptions(el, scopedOpts, _inputmask.default.extend(true, {}, that.userOptions), that.dataAttribute)) {
                      const maskset = (0, _maskLexer.generateMaskSet)(scopedOpts, that.noMasksCache);
                      if (maskset !== void 0) {
                        if (el.inputmask !== void 0) {
                          el.inputmask.opts.autoUnmask = true;
                          el.inputmask.remove();
                        }
                        el.inputmask = new Inputmask(void 0, void 0, true);
                        el.inputmask.opts = scopedOpts;
                        el.inputmask.noMasksCache = that.noMasksCache;
                        el.inputmask.userOptions = _inputmask.default.extend(true, {}, that.userOptions);
                        el.inputmask.el = el;
                        el.inputmask.$el = (0, _inputmask.default)(el);
                        el.inputmask.maskset = maskset;
                        _inputmask.default.data(el, dataKey, that.userOptions);
                        _mask.mask.call(el.inputmask);
                      }
                    }
                  });
                  return elems && elems[0] ? elems[0].inputmask || this : this;
                },
                option: function(options, noremask) {
                  if (typeof options === "string") {
                    return this.opts[options];
                  } else if (typeof options === "object") {
                    _inputmask.default.extend(this.userOptions, options);
                    if (this.el && noremask !== true) {
                      this.mask(this.el);
                    }
                    return this;
                  }
                },
                unmaskedvalue: function(value) {
                  this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
                  if (this.el === void 0 || value !== void 0) {
                    const valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
                    _inputHandling.checkVal.call(this, void 0, false, false, valueBuffer);
                    if (typeof this.opts.onBeforeWrite === "function") this.opts.onBeforeWrite.call(this, void 0, _positioning.getBuffer.call(this), 0, this.opts);
                  }
                  return _inputHandling.unmaskedvalue.call(this, this.el);
                },
                remove: function() {
                  if (this.el) {
                    _inputmask.default.data(this.el, dataKey, null);
                    const cv = this.opts.autoUnmask ? (0, _inputHandling.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                    if (cv !== _positioning.getBufferTemplate.call(this).join("")) this._valueSet(cv, this.opts.autoUnmask);
                    else this._valueSet("");
                    _eventruler.EventRuler.off(this.el);
                    let valueProperty;
                    if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                      valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value");
                      if (valueProperty) {
                        if (this.__valueGet) {
                          Object.defineProperty(this.el, "value", {
                            get: this.__valueGet,
                            set: this.__valueSet,
                            configurable: true
                          });
                        }
                      }
                    } else if (document2.__lookupGetter__ && this.el.__lookupGetter__("value")) {
                      if (this.__valueGet) {
                        this.el.__defineGetter__("value", this.__valueGet);
                        this.el.__defineSetter__("value", this.__valueSet);
                      }
                    }
                    this.el.inputmask = void 0;
                  }
                  return this.el;
                },
                getemptymask: function() {
                  this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
                  return (this.isRTL ? _positioning.getBufferTemplate.call(this).reverse() : _positioning.getBufferTemplate.call(this)).join("");
                },
                hasMaskedValue: function() {
                  return !this.opts.autoUnmask;
                },
                isComplete: function() {
                  this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
                  return _validation.isComplete.call(this, _positioning.getBuffer.call(this));
                },
                getmetadata: function() {
                  this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
                  if (Array.isArray(this.maskset.metadata)) {
                    let maskTarget = _validationTests.getMaskTemplate.call(this, true, 0, false).join("");
                    this.maskset.metadata.forEach(function(mtdt) {
                      if (mtdt.mask === maskTarget) {
                        maskTarget = mtdt;
                        return false;
                      }
                      return true;
                    });
                    return maskTarget;
                  }
                  return this.maskset.metadata;
                },
                isValid: function(value) {
                  this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
                  if (value) {
                    const valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
                    _inputHandling.checkVal.call(this, void 0, true, false, valueBuffer);
                  }
                  const buffer = _inputHandling.clearOptionalTail.call(this, []), isC = _validation.isComplete.call(this, buffer), isc2 = value === (this.isRTL ? buffer.reverse().join("") : buffer.join(""));
                  return isC && (value === void 0 || isc2);
                },
                format: function(value, metadata) {
                  this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
                  const valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
                  _inputHandling.checkVal.call(this, void 0, true, false, valueBuffer);
                  const formattedValue = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");
                  return metadata ? {
                    value: formattedValue,
                    metadata: this.getmetadata()
                  } : formattedValue;
                },
                setValue: function(value) {
                  if (this.el) {
                    (0, _inputmask.default)(this.el).trigger("setvalue", [value]);
                  }
                },
                analyseMask: _maskLexer.analyseMask
              };
              function resolveAlias(aliasStr, options, opts) {
                const aliasDefinition = Inputmask.prototype.aliases[aliasStr];
                if (aliasDefinition) {
                  if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, void 0, opts);
                  _inputmask.default.extend(true, opts, aliasDefinition);
                  _inputmask.default.extend(true, opts, options);
                  return true;
                } else if (opts.mask === null) {
                  opts.mask = aliasStr;
                }
                return false;
              }
              function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                function importOption(option, optionData) {
                  const attrOption = dataAttribute === "" ? option : dataAttribute + "-" + option;
                  optionData = optionData !== void 0 ? optionData : npt.getAttribute(attrOption);
                  if (optionData !== null) {
                    if (typeof optionData === "string") {
                      if (option.startsWith("on")) {
                        optionData = _window.default[optionData];
                      } else if (optionData === "false") optionData = false;
                      else if (optionData === "true") optionData = true;
                      else if (option === "mask") optionData = optionData.replace(/\\\\/g, "\\");
                    }
                    userOptions[option] = optionData;
                  }
                }
                if (opts.importDataAttributes === true) {
                  let attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
                  if (attrOptions && attrOptions !== "") {
                    attrOptions = attrOptions.replace(/'/g, '"');
                    dataoptions = JSON.parse("{" + attrOptions + "}");
                  }
                  if (dataoptions) {
                    optionData = void 0;
                    for (p in dataoptions) {
                      if (p.toLowerCase() === "alias") {
                        optionData = dataoptions[p];
                        break;
                      }
                    }
                  }
                  importOption("alias", optionData);
                  if (userOptions.alias) {
                    resolveAlias(userOptions.alias, userOptions, opts);
                  }
                  for (option in opts) {
                    if (dataoptions) {
                      optionData = void 0;
                      for (p in dataoptions) {
                        if (p.toLowerCase() === option.toLowerCase()) {
                          optionData = dataoptions[p];
                          break;
                        }
                      }
                    }
                    importOption(option, optionData);
                  }
                }
                _inputmask.default.extend(true, opts, userOptions);
                if (npt.dir === "rtl" || opts.rightAlign) {
                  npt.style.textAlign = "right";
                }
                if (npt.dir === "rtl" || opts.numericInput) {
                  npt.dir = "ltr";
                  npt.removeAttribute("dir");
                  opts.isRTL = true;
                }
                return Object.keys(userOptions).length;
              }
              Inputmask.extendDefaults = function(options) {
                _inputmask.default.extend(true, Inputmask.prototype.defaults, options);
              };
              Inputmask.extendDefinitions = function(definition) {
                _inputmask.default.extend(true, Inputmask.prototype.definitions, definition);
              };
              Inputmask.extendAliases = function(alias) {
                _inputmask.default.extend(true, Inputmask.prototype.aliases, alias);
              };
              Inputmask.format = function(value, options, metadata) {
                return Inputmask(options).format(value, metadata);
              };
              Inputmask.unmask = function(value, options) {
                return Inputmask(options).unmaskedvalue(value);
              };
              Inputmask.isValid = function(value, options) {
                return Inputmask(options).isValid(value);
              };
              Inputmask.remove = function(elems) {
                if (typeof elems === "string") {
                  elems = document2.getElementById(elems) || document2.querySelectorAll(elems);
                }
                elems = elems.nodeName ? [elems] : elems;
                for (let i = 0; i < elems.length; i++) {
                  if (elems[i].inputmask) elems[i].inputmask.remove();
                }
              };
              Inputmask.setValue = function(elems, value) {
                if (typeof elems === "string") {
                  elems = document2.getElementById(elems) || document2.querySelectorAll(elems);
                }
                elems = elems.nodeName ? [elems] : elems;
                elems.forEach(function(el) {
                  if (el.inputmask) el.inputmask.setValue(value);
                  else (0, _inputmask.default)(el).trigger("setvalue", [value]);
                });
              };
              Inputmask.dependencyLib = _inputmask.default;
              _window.default.Inputmask = Inputmask;
              var _default = exports2["default"] = Inputmask;
            },
            /* 8 */
            /***/
            function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2["default"] = void 0;
              var _default = exports2["default"] = {
                _maxTestPos: 500,
                placeholder: "_",
                optionalmarker: ["[", "]"],
                quantifiermarker: ["{", "}"],
                groupmarker: ["(", ")"],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                // needs tobe null instead of undefined as the extend method does not consider props with the undefined value
                regex: null,
                // regular expression as a mask
                oncomplete: () => {
                },
                // executes when the mask is complete
                onincomplete: () => {
                },
                // executes when the mask is incomplete and focus is lost
                oncleared: () => {
                },
                // executes when the mask is cleared
                repeat: 0,
                // repetitions of the mask: * ~ forever, otherwise specify an integer
                greedy: false,
                // true: allocated buffer for the mask and repetitions - false: allocate only if needed
                autoUnmask: false,
                // automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
                removeMaskOnSubmit: false,
                // remove the mask before submitting the form.
                clearMaskOnLostFocus: true,
                insertMode: true,
                // insert the input or overwrite the input
                insertModeVisual: true,
                // show selected caret when insertmode = false
                clearIncomplete: false,
                // clear the incomplete input on blur
                alias: null,
                onKeyDown: () => {
                },
                // callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
                onBeforeMask: null,
                // executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
                onBeforePaste: function(pastedValue, opts) {
                  return typeof opts.onBeforeMask === "function" ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                },
                // executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
                onBeforeWrite: null,
                // executes before writing to the masked element. args => event, opts
                onUnMask: null,
                // executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
                outputMask: null,
                // mask to apply when unmasking
                showMaskOnFocus: true,
                // show the mask-placeholder when the input has focus
                showMaskOnHover: true,
                // show the mask-placeholder when hovering the empty input
                onKeyValidation: () => {
                },
                // executes on every key-press with the result of isValid. Params: key, result, opts
                skipOptionalPartCharacter: " ",
                // a character which can be used to skip an optional part of a mask
                numericInput: false,
                // numericInput input direction style (input shifts to the left while holding the caret position)
                rightAlign: false,
                // align to the right
                undoOnEscape: true,
                // pressing escape reverts the value to the value before focus
                // numeric basic properties
                radixPoint: "",
                // ".", // | ","
                _radixDance: false,
                // dance around the radixPoint
                groupSeparator: "",
                // ",", // | "."
                // numeric basic properties
                keepStatic: null,
                // try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible
                positionCaretOnTab: true,
                // when enabled the caret position is set after the latest valid position on TAB
                tabThrough: false,
                // allows for tabbing through the different parts of the masked field
                supportsInputType: ["text", "tel", "url", "password", "search"],
                // list with the supported input types
                isComplete: null,
                // override for isComplete - args => buffer, opts - return true || false
                preValidation: null,
                // hook to preValidate the input.  Usefull for validating regardless the definition.	args => buffer, pos, char, isSelection, opts, maskset, caretPos, strict => return true/false/command object
                postValidation: null,
                // hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval, fromAlternate => return true/false/json
                staticDefinitionSymbol: void 0,
                // specify a definitionSymbol for static content, used to make matches for alternators
                jitMasking: false,
                // just in time masking ~ only mask while typing, can n (number), true or false
                nullable: true,
                // return nothing instead of the buffertemplate when the user hasn't entered anything.
                inputEventOnly: false,
                // dev option - testing inputfallback behavior
                noValuePatching: false,
                // disable value property patching
                positionCaretOnClick: "lvp",
                // none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click), select (select the whole input), ignore (ignore the click and continue the mask)
                casing: null,
                // mask-level casing. Options: null, "upper", "lower" or "title" or "follow" or callback args => elem, test, pos, validPositions return charValue
                inputmode: "text",
                // specify the inputmode
                importDataAttributes: true,
                // import data-inputmask attributes
                shiftPositions: true,
                // shift position of the mask entries on entry and deletion.
                usePrototypeDefinitions: true,
                // use the default defined definitions from the prototype
                validationEventTimeOut: 3e3,
                // Time to show validation error on form submit
                substitutes: {}
                // define character substitutes
              };
            },
            /* 9 */
            /***/
            function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2["default"] = void 0;
              var _default = exports2["default"] = {
                9: {
                  validator: "\\p{N}",
                  definitionSymbol: "*"
                },
                a: {
                  validator: "\\p{L}",
                  definitionSymbol: "*"
                },
                "*": {
                  validator: "[\\p{L}\\p{N}]"
                }
              };
            },
            /* 10 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2["default"] = void 0;
              var _window = _interopRequireDefault(__webpack_require__2(11));
              var _data = _interopRequireDefault(__webpack_require__2(12));
              var _events = __webpack_require__2(13);
              var _extend = _interopRequireDefault(__webpack_require__2(14));
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const document2 = _window.default.document;
              function DependencyLib(elem) {
                if (elem instanceof DependencyLib) {
                  return elem;
                }
                if (!(this instanceof DependencyLib)) {
                  return new DependencyLib(elem);
                }
                if (elem !== void 0 && elem !== null && elem !== _window.default) {
                  this[0] = elem.nodeName ? elem : elem[0] !== void 0 && elem[0].nodeName ? elem[0] : document2.querySelector(elem);
                  if (this[0] !== void 0 && this[0] !== null) {
                    (0, _data.default)(this[0], "events", (0, _data.default)(this[0], "events") || {});
                  }
                }
              }
              DependencyLib.prototype = {
                on: _events.on,
                off: _events.off,
                trigger: _events.trigger
              };
              DependencyLib.extend = _extend.default;
              DependencyLib.data = _data.default;
              DependencyLib.Event = _events.Event;
              var _default = exports2["default"] = DependencyLib;
            },
            /* 11 */
            /***/
            function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2["default"] = void 0;
              const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
              var _default = exports2["default"] = canUseDOM ? window : {};
            },
            /* 12 */
            /***/
            function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2["default"] = _default;
              function _default(owner, key, value) {
                if (value === void 0) {
                  return owner.__data ? owner.__data[key] : null;
                } else {
                  owner.__data = owner.__data || {};
                  owner.__data[key] = value;
                }
              }
            },
            /* 13 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.Event = void 0;
              exports2.off = off;
              exports2.on = on;
              exports2.trigger = trigger;
              var _window = _interopRequireDefault(__webpack_require__2(11));
              var _data = _interopRequireDefault(__webpack_require__2(12));
              var _extend = _interopRequireDefault(__webpack_require__2(14));
              var _inputmask = _interopRequireDefault(__webpack_require__2(10));
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const document2 = _window.default.document;
              function isValidElement(elem) {
                return elem instanceof Element && (0, _data.default)(elem, "events");
              }
              let Evnt = exports2.Event = void 0;
              if (typeof _window.default.CustomEvent === "function") {
                exports2.Event = Evnt = _window.default.CustomEvent;
              } else if (_window.default.Event && document2 && document2.createEvent) {
                exports2.Event = Evnt = function(event, params) {
                  params = params || {
                    bubbles: false,
                    cancelable: false,
                    composed: true,
                    detail: void 0
                  };
                  const evt = document2.createEvent("CustomEvent");
                  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                  return evt;
                };
                Evnt.prototype = _window.default.Event.prototype;
              } else if (typeof Event !== "undefined") {
                exports2.Event = Evnt = Event;
              }
              function on(events, handler) {
                if (!this[0] || !isValidElement(this[0])) {
                  return this;
                }
                const elem = this[0], eventRegistry = (0, _data.default)(elem, "events"), addEvent = (ev, namespace) => {
                  if (elem.addEventListener) {
                    elem.addEventListener(ev, handler, false);
                  } else if (elem.attachEvent) {
                    elem.attachEvent(`on${ev}`, handler);
                  }
                  eventRegistry[ev] = eventRegistry[ev] || {};
                  eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
                  eventRegistry[ev][namespace].push(handler);
                };
                events.split(" ").forEach((event) => {
                  const [ev, namespace = "global"] = event.split(".");
                  addEvent(ev, namespace);
                });
                return this;
              }
              function off(events, handler) {
                let eventRegistry, elem;
                function removeEvent(ev, namespace, handler2) {
                  if (ev in eventRegistry === true) {
                    if (elem.removeEventListener) {
                      elem.removeEventListener(ev, handler2, false);
                    } else if (elem.detachEvent) {
                      elem.detachEvent(`on${ev}`, handler2);
                    }
                    if (namespace === "global") {
                      for (const nmsp in eventRegistry[ev]) {
                        eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler2), 1);
                      }
                    } else {
                      eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler2), 1);
                    }
                  }
                }
                function resolveNamespace(ev, namespace) {
                  const evts = [];
                  let hndx, hndL;
                  if (ev.length > 0) {
                    const namespaces = namespace ? [namespace] : Object.keys(eventRegistry[ev]);
                    for (let nsi = 0; nsi < namespaces.length; nsi++) {
                      namespace = namespaces[nsi];
                      if (handler === void 0) {
                        for (hndx = 0, hndL = eventRegistry[ev][namespace]?.length || 0; hndx < hndL; hndx++) {
                          evts.push({
                            ev,
                            namespace,
                            handler: eventRegistry[ev][namespace][hndx]
                          });
                        }
                      } else {
                        evts.push({
                          ev,
                          namespace,
                          handler
                        });
                      }
                    }
                  } else if (namespace.length > 0) {
                    for (const evNdx in eventRegistry) {
                      if (eventRegistry[evNdx][namespace]) {
                        if (handler === void 0) {
                          for (hndx = 0, hndL = eventRegistry[evNdx][namespace].length; hndx < hndL; hndx++) {
                            evts.push({
                              ev: evNdx,
                              namespace,
                              handler: eventRegistry[evNdx][namespace][hndx]
                            });
                          }
                        } else {
                          evts.push({
                            ev: evNdx,
                            namespace,
                            handler
                          });
                        }
                      }
                    }
                  }
                  return evts;
                }
                if (isValidElement(this[0])) {
                  eventRegistry = (0, _data.default)(this[0], "events");
                  elem = this[0];
                  events = events || Object.keys(eventRegistry).join(" ");
                  if (events !== "") {
                    events.split(" ").forEach((event) => {
                      const [ev, namespace] = event.split(".");
                      resolveNamespace(ev, namespace).forEach(({
                        ev: ev1,
                        handler: handler1,
                        namespace: namespace1
                      }) => {
                        removeEvent(ev1, namespace1, handler1);
                      });
                    });
                  }
                }
                return this;
              }
              function trigger(events) {
                if (isValidElement(this[0])) {
                  const eventRegistry = (0, _data.default)(this[0], "events"), elem = this[0], _events = typeof events === "string" ? events.split(" ") : [events.type];
                  for (let endx = 0; endx < _events.length; endx++) {
                    const nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                    if (document2 !== void 0) {
                      let evnt;
                      const params = {
                        bubbles: true,
                        cancelable: true,
                        composed: true,
                        detail: arguments[1]
                      };
                      if (document2.createEvent) {
                        try {
                          switch (ev) {
                            case "input":
                              params.inputType = "insertText";
                              evnt = new InputEvent(ev, params);
                              break;
                            default:
                              evnt = new CustomEvent(ev, params);
                          }
                        } catch (e) {
                          evnt = document2.createEvent("CustomEvent");
                          evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                        }
                        if (events.type) (0, _extend.default)(evnt, events);
                        elem.dispatchEvent(evnt);
                      } else {
                        evnt = document2.createEventObject();
                        evnt.eventType = ev;
                        evnt.detail = arguments[1];
                        if (events.type) (0, _extend.default)(evnt, events);
                        elem.fireEvent("on" + evnt.eventType, evnt);
                      }
                    } else if (eventRegistry[ev] !== void 0) {
                      arguments[0] = arguments[0].type ? arguments[0] : _inputmask.default.Event(arguments[0]);
                      arguments[0].detail = arguments.slice(1);
                      const registry = eventRegistry[ev], handlers = namespace === "global" ? Object.values(registry).flat() : registry[namespace];
                      handlers.forEach((handler) => handler.apply(elem, arguments));
                    }
                  }
                }
                return this;
              }
            },
            /* 14 */
            /***/
            function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2["default"] = extend;
              function extend() {
                let options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                if (typeof target === "boolean") {
                  deep = target;
                  target = arguments[i] || {};
                  i++;
                }
                if (typeof target !== "object" && typeof target !== "function") {
                  target = {};
                }
                for (; i < length; i++) {
                  if ((options = arguments[i]) != null) {
                    for (name in options) {
                      src = target[name];
                      copy = options[name];
                      if (target === copy) {
                        continue;
                      }
                      if (deep && copy && (Object.prototype.toString.call(copy) === "[object Object]" || (copyIsArray = Array.isArray(copy)))) {
                        if (copyIsArray) {
                          copyIsArray = false;
                          clone = src && Array.isArray(src) ? src : [];
                        } else {
                          clone = src && Object.prototype.toString.call(src) === "[object Object]" ? src : {};
                        }
                        target[name] = extend(deep, clone, copy);
                      } else if (copy !== void 0) {
                        target[name] = copy;
                      }
                    }
                  }
                }
                return target;
              }
            },
            /* 15 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.EventRuler = void 0;
              var _inputHandling = __webpack_require__2(16);
              var _inputmask = _interopRequireDefault(__webpack_require__2(7));
              var _keycode = __webpack_require__2(19);
              var _positioning = __webpack_require__2(20);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const EventRuler = exports2.EventRuler = {
                on: function(input, eventName, eventHandler) {
                  const $ = input.inputmask.dependencyLib;
                  let ev = function(e) {
                    if (e.originalEvent) {
                      e = e.originalEvent || e;
                      arguments[0] = e;
                    }
                    const that = this, inputmask2 = that.inputmask, opts = inputmask2 ? inputmask2.opts : void 0;
                    let args;
                    if (inputmask2 === void 0 && this.nodeName !== "FORM") {
                      const imOpts = $.data(that, "_inputmask_opts");
                      $(that).off();
                      if (imOpts) {
                        new _inputmask.default(imOpts).mask(that);
                      }
                    } else if (!["submit", "reset", "setvalue"].includes(e.type) && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && e.ctrlKey && e.key === _keycode.keys.c || opts.tabThrough === false && e.key === _keycode.keys.Tab))) {
                      e.preventDefault();
                    } else {
                      switch (e.type) {
                        case "input":
                          if (inputmask2.skipInputEvent === true) {
                            inputmask2.skipInputEvent = false;
                            return e.preventDefault();
                          }
                          inputmask2.lastInputEvent = {
                            time: Date.now(),
                            data: e.data
                          };
                          break;
                        case "keydown":
                          if (inputmask2.lastInputEvent && Date.now() - inputmask2.lastInputEvent.time < 10 && inputmask2.lastInputEvent.data === e.key) {
                            return false;
                          }
                          break;
                        case "click":
                        case "focus":
                          if (inputmask2.validationEvent) {
                            inputmask2.validationEvent = false;
                            input.blur();
                            (0, _inputHandling.HandleNativePlaceholder)(input, (inputmask2.isRTL ? _positioning.getBufferTemplate.call(inputmask2).slice().reverse() : _positioning.getBufferTemplate.call(inputmask2)).join(""));
                            setTimeout(function() {
                              input.focus();
                            }, opts.validationEventTimeOut);
                            return false;
                          }
                          args = arguments;
                          setTimeout(function() {
                            if (!input.inputmask) {
                              return;
                            }
                            eventHandler.apply(that, args);
                          }, 0);
                          return;
                      }
                      const returnVal = eventHandler.apply(that, arguments);
                      if (returnVal === false) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                      return returnVal;
                    }
                  };
                  eventName = `${eventName}.inputmask`;
                  if (["submit.inputmask", "reset.inputmask"].includes(eventName)) {
                    ev = ev.bind(input);
                    if (input.form !== null) $(input.form).on(eventName, ev);
                  } else {
                    $(input).on(eventName, ev);
                  }
                },
                off: function(input, event) {
                  if (input.inputmask) {
                    const $ = input.inputmask.dependencyLib;
                    $(input).off(event || ".inputmask");
                  }
                }
              };
            },
            /* 16 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.HandleNativePlaceholder = HandleNativePlaceholder;
              exports2.applyInputValue = applyInputValue;
              exports2.checkVal = checkVal;
              exports2.clearOptionalTail = clearOptionalTail;
              exports2.unmaskedvalue = unmaskedvalue;
              exports2.writeBuffer = writeBuffer;
              var _environment = __webpack_require__2(17);
              var _eventhandlers = __webpack_require__2(18);
              var _inputmask = _interopRequireDefault(__webpack_require__2(7));
              var _keycode = __webpack_require__2(19);
              var _positioning = __webpack_require__2(20);
              var _validation = __webpack_require__2(21);
              var _validationTests = __webpack_require__2(22);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              function applyInputValue(input, value, initialEvent, strict) {
                const inputmask2 = input ? input.inputmask : this, opts = inputmask2.opts;
                input.inputmask.refreshValue = false;
                if (strict !== true && typeof opts.onBeforeMask === "function") value = opts.onBeforeMask.call(inputmask2, value, opts) || value;
                value = (value || "").toString().split("");
                checkVal(input, true, false, value, initialEvent);
                inputmask2.undoValue = inputmask2._valueGet(true);
                if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask2).join("") && _positioning.getLastValidPosition.call(inputmask2) === -1) {
                  input.inputmask._valueSet("");
                }
              }
              function clearOptionalTail(buffer) {
                const inputmask2 = this;
                buffer.length = 0;
                let template = _validationTests.getMaskTemplate.call(inputmask2, true, 0, true, void 0, true), lmnt;
                while ((lmnt = template.shift()) !== void 0) buffer.push(lmnt);
                return buffer;
              }
              function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                const inputmask2 = input ? input.inputmask : this, maskset = inputmask2.maskset, opts = inputmask2.opts, $ = inputmask2.dependencyLib;
                let inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result, skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
                opts.skipOptionalPartCharacter = "";
                function isTemplateMatch(ndx, charCodes2) {
                  let targetTemplate = _validationTests.getMaskTemplate.call(inputmask2, true, 0).slice(ndx, _positioning.seekNext.call(inputmask2, ndx, false, false)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes2);
                  while (charCodeNdx > 0 && targetTemplate[charCodeNdx - 1] === " ") charCodeNdx--;
                  const match = charCodeNdx === 0 && !_positioning.isMask.call(inputmask2, ndx) && (_validationTests.getTest.call(inputmask2, ndx).match.nativeDef === charCodes2.charAt(0) || _validationTests.getTest.call(inputmask2, ndx).match.static === true && _validationTests.getTest.call(inputmask2, ndx).match.nativeDef === "'" + charCodes2.charAt(0) || _validationTests.getTest.call(inputmask2, ndx).match.nativeDef === " " && (_validationTests.getTest.call(inputmask2, ndx + 1).match.nativeDef === charCodes2.charAt(0) || _validationTests.getTest.call(inputmask2, ndx + 1).match.static === true && _validationTests.getTest.call(inputmask2, ndx + 1).match.nativeDef === "'" + charCodes2.charAt(0)));
                  if (!match && charCodeNdx > 0 && !_positioning.isMask.call(inputmask2, ndx, false, true)) {
                    const nextPos = _positioning.seekNext.call(inputmask2, ndx);
                    if (inputmask2.caretPos.begin < nextPos) {
                      inputmask2.caretPos = {
                        begin: nextPos
                      };
                    }
                  }
                  return match;
                }
                _positioning.resetMaskSet.call(inputmask2, false);
                inputmask2.clicked = 0;
                initialNdx = opts.radixPoint ? _positioning.determineNewCaretPosition.call(inputmask2, {
                  begin: 0,
                  end: 0
                }, false, opts.__financeInput === false ? "radixFocus" : void 0).begin : 0;
                maskset.p = initialNdx;
                inputmask2.caretPos = {
                  begin: initialNdx
                };
                let staticMatches = [], prevCaretPos = inputmask2.caretPos;
                inputValue.forEach(function(charCode, ndx) {
                  if (charCode !== void 0) {
                    const keypress = new $.Event("_checkval");
                    keypress.key = charCode;
                    charCodes += charCode;
                    const lvp = _positioning.getLastValidPosition.call(inputmask2, void 0, true);
                    if (!isTemplateMatch(initialNdx, charCodes)) {
                      result = _eventhandlers.EventHandlers.keypressEvent.call(inputmask2, keypress, true, false, strict, inputmask2.caretPos.begin);
                      if (result) {
                        initialNdx = inputmask2.caretPos.begin + 1;
                        charCodes = "";
                      }
                    } else {
                      result = _validationTests.getTest.call(inputmask2, ndx).match.static === true ? _eventhandlers.EventHandlers.keypressEvent.call(inputmask2, keypress, true, false, strict, lvp + 1) : false;
                    }
                    if (result) {
                      if (result.pos !== void 0 && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true && maskset.validPositions[result.pos].alternation === void 0) {
                        staticMatches.push(result.pos);
                        if (!inputmask2.isRTL) {
                          result.forwardPosition = result.pos + 1;
                        }
                      }
                      writeBuffer.call(inputmask2, void 0, _positioning.getBuffer.call(inputmask2), result.forwardPosition, keypress, false);
                      inputmask2.caretPos = {
                        begin: result.forwardPosition,
                        end: result.forwardPosition
                      };
                      prevCaretPos = inputmask2.caretPos;
                    } else {
                      if (maskset.validPositions[ndx] === void 0 && inputValue[ndx] === _validationTests.getPlaceholder.call(inputmask2, ndx) && _positioning.isMask.call(inputmask2, ndx, true)) {
                        inputmask2.caretPos.begin++;
                      } else inputmask2.caretPos = prevCaretPos;
                    }
                  }
                });
                if (staticMatches.length > 0) {
                  let sndx, validPos, nextValid = _positioning.seekNext.call(inputmask2, -1, void 0, false);
                  if (!_validation.isComplete.call(inputmask2, _positioning.getBuffer.call(inputmask2)) && staticMatches.length <= nextValid || _validation.isComplete.call(inputmask2, _positioning.getBuffer.call(inputmask2)) && staticMatches.length > 0 && staticMatches.length !== nextValid && staticMatches[0] === 0) {
                    let nextSndx = nextValid;
                    while ((sndx = staticMatches.shift()) !== void 0) {
                      if (sndx < nextSndx) {
                        const keypress = new $.Event("_checkval");
                        validPos = maskset.validPositions[sndx];
                        validPos.generatedInput = true;
                        keypress.key = validPos.input;
                        result = _eventhandlers.EventHandlers.keypressEvent.call(inputmask2, keypress, true, false, strict, nextSndx);
                        if (result && result.pos !== void 0 && result.pos !== sndx && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true) {
                          staticMatches.push(result.pos);
                        } else if (!result) break;
                        nextSndx++;
                      }
                    }
                  } else {
                    while (sndx = staticMatches.pop()) {
                      validPos = maskset.validPositions[sndx];
                      if (validPos && maskset.validPositions[sndx + 1] === void 0) {
                        delete maskset.validPositions[sndx];
                      }
                    }
                  }
                }
                if (writeOut) {
                  writeBuffer.call(inputmask2, input, _positioning.getBuffer.call(inputmask2), result ? result.forwardPosition : inputmask2.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && (initiatingEvent.type === "input" && inputmask2.undoValue !== _positioning.getBuffer.call(inputmask2).join("") || initiatingEvent.type === "paste"));
                }
                opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
              }
              function HandleNativePlaceholder(npt, value) {
                const inputmask2 = npt ? npt.inputmask : this;
                if (_environment.ie) {
                  if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
                    let buffer = _positioning.getBuffer.call(inputmask2).slice(), nptValue = npt.inputmask._valueGet();
                    if (nptValue !== value) {
                      const lvp = _positioning.getLastValidPosition.call(inputmask2);
                      if (lvp === -1 && nptValue === _positioning.getBufferTemplate.call(inputmask2).join("")) {
                        buffer = [];
                      } else if (lvp !== -1) {
                        clearOptionalTail.call(inputmask2, buffer);
                      }
                      writeBuffer(npt, buffer);
                    }
                  }
                } else if (npt.placeholder !== value) {
                  npt.placeholder = value;
                  if (npt.placeholder === "") npt.removeAttribute("placeholder");
                }
              }
              function unmaskedvalue(input) {
                const inputmask2 = input ? input.inputmask : this, opts = inputmask2.opts, maskset = inputmask2.maskset;
                if (input) {
                  if (input.inputmask === void 0) {
                    return input.value;
                  }
                  if (input.inputmask && input.inputmask.refreshValue) {
                    applyInputValue(input, input.inputmask._valueGet(true));
                  }
                }
                const umValue = [], vps = maskset.validPositions;
                for (let pndx = 0, vpl = vps.length; pndx < vpl; pndx++) {
                  if (vps[pndx] && vps[pndx].match && (vps[pndx].match.static != true || opts.keepStatic !== true && Array.isArray(maskset.metadata) && vps[pndx].generatedInput !== true)) {
                    umValue.push(vps[pndx].input);
                  }
                }
                let unmaskedValue = umValue.length === 0 ? "" : (inputmask2.isRTL ? umValue.reverse() : umValue).join("");
                if (typeof opts.onUnMask === "function") {
                  const bufferValue = (inputmask2.isRTL ? _positioning.getBuffer.call(inputmask2).slice().reverse() : _positioning.getBuffer.call(inputmask2)).join("");
                  unmaskedValue = opts.onUnMask.call(inputmask2, bufferValue, unmaskedValue, opts);
                }
                if (opts.outputMask && unmaskedValue.length > 0) {
                  return _inputmask.default.format(unmaskedValue, __spreadProps(__spreadValues({}, opts), {
                    mask: opts.outputMask,
                    alias: null
                  }));
                }
                return unmaskedValue;
              }
              function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
                const inputmask2 = input ? input.inputmask : this, opts = inputmask2.opts, $ = inputmask2.dependencyLib;
                if (event && typeof opts.onBeforeWrite === "function") {
                  const result = opts.onBeforeWrite.call(inputmask2, event, buffer, caretPos, opts);
                  if (result) {
                    if (result.refreshFromBuffer) {
                      const refresh = result.refreshFromBuffer;
                      _validation.refreshFromBuffer.call(inputmask2, refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                      buffer = _positioning.getBuffer.call(inputmask2, true);
                    }
                    if (caretPos !== void 0) caretPos = result.caret !== void 0 ? result.caret : caretPos;
                  }
                }
                if (input !== void 0) {
                  input.inputmask._valueSet(buffer.join(""));
                  if (caretPos !== void 0 && (event === void 0 || event.type !== "blur")) {
                    _positioning.caret.call(inputmask2, input, caretPos, void 0, void 0, event !== void 0 && event.type === "keydown" && (event.key === _keycode.keys.Delete || event.key === _keycode.keys.Backspace));
                  }
                  input.inputmask.writeBufferHook === void 0 || input.inputmask.writeBufferHook(caretPos);
                  if (triggerEvents === true) {
                    const $input = $(input), nptVal = input.inputmask._valueGet();
                    input.inputmask.skipInputEvent = true;
                    $input.trigger("input");
                    setTimeout(function() {
                      if (nptVal === _positioning.getBufferTemplate.call(inputmask2).join("")) {
                        $input.trigger("cleared");
                      } else if (_validation.isComplete.call(inputmask2, buffer) === true) {
                        $input.trigger("complete");
                      }
                    }, 0);
                  }
                }
              }
            },
            /* 17 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.mobile = exports2.iphone = exports2.ie = void 0;
              var _window = _interopRequireDefault(__webpack_require__2(11));
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const ua = _window.default.navigator && _window.default.navigator.userAgent || "", ie = exports2.ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0, mobile = exports2.mobile = !!(navigator.userAgentData?.mobile ?? ((matchMedia("(pointer:coarse)").matches || navigator.maxTouchPoints) && innerWidth <= 1024 || /Mobi|Android|iPhone/i.test(ua))), iphone = exports2.iphone = /iphone/i.test(ua);
            },
            /* 18 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.EventHandlers = void 0;
              var _environment = __webpack_require__2(17);
              var _window = _interopRequireDefault(__webpack_require__2(11));
              var _inputHandling = __webpack_require__2(16);
              var _keycode = __webpack_require__2(19);
              var _positioning = __webpack_require__2(20);
              var _validation = __webpack_require__2(21);
              var _validationTests = __webpack_require__2(22);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const EventHandlers = exports2.EventHandlers = {
                keyEvent: function(e, checkval, writeOut, strict, ndx) {
                  const inputmask2 = this.inputmask, opts = inputmask2.opts, $ = inputmask2.dependencyLib, maskset = inputmask2.maskset, input = this, $input = $(input), c = e.key, pos = _positioning.caret.call(inputmask2, input), kdResult = opts.onKeyDown.call(this, e, _positioning.getBuffer.call(inputmask2), pos, opts);
                  if (kdResult !== void 0) return kdResult;
                  if (c === _keycode.keys.Backspace || c === _keycode.keys.Delete || _environment.iphone && c === _keycode.keys.BACKSPACE_SAFARI || e.ctrlKey && c === _keycode.keys.x && !("oncut" in input)) {
                    e.preventDefault();
                    _validation.handleRemove.call(inputmask2, input, c, pos);
                    (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask2, true), maskset.p, e, input.inputmask._valueGet() !== _positioning.getBuffer.call(inputmask2).join(""));
                  } else if (c === _keycode.keys.End || c === _keycode.keys.PageDown) {
                    e.preventDefault();
                    const caretPos = _positioning.seekNext.call(inputmask2, _positioning.getLastValidPosition.call(inputmask2));
                    _positioning.caret.call(inputmask2, input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
                  } else if (c === _keycode.keys.Home && !e.shiftKey || c === _keycode.keys.PageUp) {
                    e.preventDefault();
                    _positioning.caret.call(inputmask2, input, 0, e.shiftKey ? pos.begin : 0, true);
                  } else if ((opts.undoOnEscape && c === _keycode.keys.Escape || // eslint-disable-next-line no-constant-binary-expression -- TODO: revisit, ctrl+z undo branch is disabled via `false &&`, see #762
                  false) && e.altKey !== true) {
                    (0, _inputHandling.checkVal)(input, true, false, inputmask2.undoValue.split(""));
                    $input.trigger("click");
                  } else if (c === _keycode.keys.Insert && !(e.shiftKey || e.ctrlKey) && inputmask2.userOptions.insertMode === void 0) {
                    if (!_validation.isSelection.call(inputmask2, pos)) {
                      opts.insertMode = !opts.insertMode;
                      _positioning.caret.call(inputmask2, input, pos.begin, pos.begin);
                    } else opts.insertMode = !opts.insertMode;
                  } else if (opts.tabThrough === true && c === _keycode.keys.Tab) {
                    if (e.shiftKey === true) {
                      pos.end = _positioning.seekPrevious.call(inputmask2, pos.end, true);
                      if (_validationTests.getTest.call(inputmask2, pos.end - 1).match.static === true) {
                        pos.end--;
                      }
                      pos.begin = _positioning.seekPrevious.call(inputmask2, pos.end, true);
                      if (pos.begin >= 0 && pos.end > 0) {
                        e.preventDefault();
                        _positioning.caret.call(inputmask2, input, pos.begin, pos.end);
                      }
                    } else {
                      pos.begin = _positioning.seekNext.call(inputmask2, pos.begin, true);
                      pos.end = _positioning.seekNext.call(inputmask2, pos.begin, true);
                      if (pos.end < maskset.maskLength) pos.end--;
                      if (pos.begin <= maskset.maskLength) {
                        e.preventDefault();
                        _positioning.caret.call(inputmask2, input, pos.begin, pos.end);
                      }
                    }
                  } else if (!e.shiftKey) {
                    if (opts.insertModeVisual && opts.insertMode === false) {
                      if (c === _keycode.keys.ArrowRight) {
                        setTimeout(function() {
                          const caretPos = _positioning.caret.call(inputmask2, input);
                          _positioning.caret.call(inputmask2, input, caretPos.begin);
                        }, 0);
                      } else if (c === _keycode.keys.ArrowLeft) {
                        setTimeout(function() {
                          const caretPos = {
                            begin: _positioning.translatePosition.call(inputmask2, input.inputmask.caretPos.begin),
                            end: _positioning.translatePosition.call(inputmask2, input.inputmask.caretPos.end)
                          };
                          if (inputmask2.isRTL) {
                            _positioning.caret.call(inputmask2, input, caretPos.begin + (caretPos.begin === maskset.maskLength ? 0 : 1));
                          } else {
                            _positioning.caret.call(inputmask2, input, caretPos.begin - (caretPos.begin === 0 ? 0 : 1));
                          }
                        }, 0);
                      }
                    } else {
                      inputmask2.keyEventHook === void 0 || inputmask2.keyEventHook(e);
                    }
                  }
                  inputmask2.isComposing = c === _keycode.keys.Process || c === _keycode.keys.Unidentified;
                  inputmask2.ignorable = c === void 0 || c.length > 1;
                  return EventHandlers.keypressEvent.call(inputmask2, e, checkval, writeOut, strict, ndx);
                },
                keypressEvent: function(e, checkval, writeOut, strict, ndx) {
                  const inputmask2 = this.inputmask || this, opts = inputmask2.opts, $ = inputmask2.dependencyLib, maskset = inputmask2.maskset, input = inputmask2.el, $input = $(input);
                  let c = e.key;
                  if (checkval !== true && !(e.ctrlKey && e.altKey && !inputmask2.ignorable) && (e.ctrlKey || e.metaKey || inputmask2.ignorable)) {
                    if (c === _keycode.keys.Enter) {
                      if (inputmask2.undoValue !== inputmask2._valueGet(true)) {
                        inputmask2.undoValue = inputmask2._valueGet(true);
                        setTimeout(function() {
                          $input.trigger("change");
                        }, 0);
                      }
                    }
                  } else if (c) {
                    let pos = checkval ? {
                      begin: ndx,
                      end: ndx
                    } : _positioning.caret.call(inputmask2, input), forwardPosition;
                    if (!checkval) c = opts.substitutes[c] || c;
                    maskset.writeOutBuffer = true;
                    const valResult = _validation.isValid.call(inputmask2, pos, c, strict, void 0, void 0, void 0, checkval);
                    if (valResult !== false) {
                      _positioning.resetMaskSet.call(inputmask2, true);
                      forwardPosition = valResult.caret !== void 0 ? valResult.caret : _positioning.seekNext.call(inputmask2, valResult.pos.begin ? valResult.pos.begin : valResult.pos);
                      maskset.p = forwardPosition;
                    }
                    forwardPosition = opts.numericInput && valResult.caret === void 0 ? _positioning.seekPrevious.call(inputmask2, forwardPosition) : forwardPosition;
                    if (writeOut !== false) {
                      setTimeout(function() {
                        opts.onKeyValidation.call(input, c, valResult);
                      }, 0);
                      if (maskset.writeOutBuffer && valResult !== false) {
                        const buffer = _positioning.getBuffer.call(inputmask2);
                        (0, _inputHandling.writeBuffer)(input, buffer, forwardPosition, e, checkval !== true);
                      }
                    }
                    e.preventDefault();
                    if (checkval) {
                      if (valResult !== false) valResult.forwardPosition = forwardPosition;
                      return valResult;
                    }
                  }
                },
                pasteEvent: function(e) {
                  return __async(this, null, function* () {
                    function handlePaste(inputmask3, input2, inputValue2, pastedValue2, onBeforePaste) {
                      let caretPos = _positioning.caret.call(inputmask3, input2, void 0, void 0, true), valueBeforeCaret = inputValue2.substr(0, caretPos.begin), valueAfterCaret = inputValue2.substr(caretPos.end, inputValue2.length);
                      if (valueBeforeCaret == (inputmask3.isRTL ? _positioning.getBufferTemplate.call(inputmask3).slice().reverse() : _positioning.getBufferTemplate.call(inputmask3)).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
                      if (valueAfterCaret == (inputmask3.isRTL ? _positioning.getBufferTemplate.call(inputmask3).slice().reverse() : _positioning.getBufferTemplate.call(inputmask3)).slice(caretPos.end).join("")) valueAfterCaret = "";
                      pastedValue2 = valueBeforeCaret + pastedValue2 + valueAfterCaret;
                      if (inputmask3.isRTL && opts.numericInput !== true) {
                        pastedValue2 = pastedValue2.split("");
                        for (const c of _positioning.getBufferTemplate.call(inputmask3)) {
                          if (pastedValue2[0] === c) pastedValue2.shift();
                        }
                        pastedValue2 = pastedValue2.reverse().join("");
                      }
                      let pasteValue = pastedValue2;
                      if (typeof onBeforePaste === "function") {
                        pasteValue = onBeforePaste.call(inputmask3, pasteValue, opts);
                        if (pasteValue === false) {
                          return false;
                        }
                        if (!pasteValue) {
                          pasteValue = inputValue2;
                        }
                      }
                      (0, _inputHandling.checkVal)(input2, true, false, pasteValue.toString().split(""), e);
                    }
                    const input = this, inputmask2 = this.inputmask, opts = inputmask2.opts;
                    let inputValue = inputmask2._valueGet(true), pastedValue;
                    inputmask2.skipInputEvent = true;
                    if (e.clipboardData && e.clipboardData.getData) {
                      pastedValue = e.clipboardData.getData("text/plain");
                    } else if (_window.default.clipboardData && _window.default.clipboardData.getData) {
                      pastedValue = _window.default.clipboardData.getData("Text");
                    }
                    handlePaste(inputmask2, input, inputValue, pastedValue, opts.onBeforePaste);
                    e.preventDefault();
                  });
                },
                inputFallBackEvent: function(e) {
                  const inputmask2 = this.inputmask, opts = inputmask2.opts, $ = inputmask2.dependencyLib;
                  function analyseChanges(inputValue2, buffer2, caretPos2) {
                    let frontPart = inputValue2.substr(0, caretPos2.begin).split(""), backPart = inputValue2.substr(caretPos2.begin).split(""), frontBufferPart = buffer2.substr(0, caretPos2.begin).split(""), backBufferPart = buffer2.substr(caretPos2.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, bl, i, action = "", data = [], marker = "~", placeholder;
                    while (frontPart.length < fpl) frontPart.push(marker);
                    while (frontBufferPart.length < fpl) frontBufferPart.push(marker);
                    while (backPart.length < bpl) backPart.unshift(marker);
                    while (backBufferPart.length < bpl) backBufferPart.unshift(marker);
                    const newBuffer = frontPart.concat(backPart), oldBuffer = frontBufferPart.concat(backBufferPart);
                    for (i = 0, bl = newBuffer.length; i < bl; i++) {
                      placeholder = _validationTests.getPlaceholder.call(inputmask2, _positioning.translatePosition.call(inputmask2, i));
                      switch (action) {
                        case "insertText":
                          if (oldBuffer[i - 1] === newBuffer[i] && caretPos2.begin == newBuffer.length - 1) {
                            data.push(newBuffer[i]);
                          }
                          i = bl;
                          break;
                        case "insertReplacementText":
                          if (newBuffer[i] === marker) {
                            caretPos2.end++;
                          } else {
                            i = bl;
                          }
                          break;
                        case "deleteContentBackward":
                          if (newBuffer[i] === marker) {
                            caretPos2.end++;
                          } else {
                            i = bl;
                          }
                          break;
                        default:
                          if (newBuffer[i] !== oldBuffer[i]) {
                            if ((newBuffer[i + 1] === marker || newBuffer[i + 1] === placeholder || newBuffer[i + 1] === void 0) && (oldBuffer[i] === placeholder && oldBuffer[i + 1] === marker || oldBuffer[i] === marker)) {
                              action = "insertText";
                              data.push(newBuffer[i]);
                              caretPos2.begin--;
                              caretPos2.end--;
                            } else if (oldBuffer[i + 1] === marker && oldBuffer[i] === newBuffer[i + 1]) {
                              action = "insertText";
                              data.push(newBuffer[i]);
                              caretPos2.begin--;
                              caretPos2.end--;
                            } else if (newBuffer[i] !== placeholder && newBuffer[i] !== marker && (newBuffer[i + 1] === marker || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1])) {
                              action = "insertReplacementText";
                              data.push(newBuffer[i]);
                              caretPos2.begin--;
                            } else if (newBuffer[i] === marker) {
                              action = "deleteContentBackward";
                              if (_positioning.isMask.call(inputmask2, _positioning.translatePosition.call(inputmask2, i), true) || oldBuffer[i] === opts.radixPoint) caretPos2.end++;
                            } else {
                              i = bl;
                            }
                          }
                          break;
                      }
                    }
                    return {
                      action,
                      data,
                      caret: caretPos2
                    };
                  }
                  let input = this, inputValue = input.inputmask._valueGet(true), buffer = (inputmask2.isRTL ? _positioning.getBuffer.call(inputmask2).slice().reverse() : _positioning.getBuffer.call(inputmask2)).join(""), caretPos = _positioning.caret.call(inputmask2, input, void 0, void 0, true), changes;
                  if (buffer !== inputValue) {
                    changes = analyseChanges(inputValue, buffer, caretPos);
                    if (input.getRootNode().activeElement !== input) {
                      input.focus();
                    }
                    (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask2));
                    _positioning.caret.call(inputmask2, input, caretPos.begin, caretPos.end, true);
                    if (!_environment.mobile && inputmask2.skipNextInsert && e.inputType === "insertText" && changes.action === "insertText" && inputmask2.isComposing) {
                      return false;
                    }
                    if (e.inputType === "insertCompositionText" && changes.action === "insertText" && inputmask2.isComposing) {
                      inputmask2.skipNextInsert = true;
                    } else {
                      inputmask2.skipNextInsert = false;
                    }
                    switch (changes.action) {
                      case "insertText":
                      case "insertReplacementText":
                        changes.data.forEach(function(entry, ndx) {
                          const keypress = new $.Event("keypress");
                          keypress.key = entry;
                          inputmask2.ignorable = false;
                          EventHandlers.keypressEvent.call(input, keypress);
                        });
                        setTimeout(function() {
                          inputmask2.$el.trigger("keyup");
                        }, 0);
                        break;
                      case "deleteContentBackward":
                        var keydown = new $.Event("keydown");
                        keydown.key = _keycode.keys.Backspace;
                        EventHandlers.keyEvent.call(input, keydown);
                        break;
                      default:
                        (0, _inputHandling.applyInputValue)(input, inputValue, e);
                        _positioning.caret.call(inputmask2, input, caretPos.begin, caretPos.end, true);
                        break;
                    }
                    e.preventDefault();
                  }
                },
                setValueEvent: function(e) {
                  const inputmask2 = this.inputmask, $ = inputmask2.dependencyLib;
                  let input = this, value = e && e.detail ? e.detail[0] : arguments[1];
                  if (value === void 0) {
                    value = input.inputmask._valueGet(true);
                  }
                  (0, _inputHandling.applyInputValue)(input, value, new $.Event("input"), (e && e.detail ? e.detail[0] : arguments[1]) !== void 0);
                  if (e.detail && e.detail[1] !== void 0 || arguments[2] !== void 0) {
                    _positioning.caret.call(inputmask2, input, e.detail ? e.detail[1] : arguments[2]);
                  }
                },
                focusEvent: function(e) {
                  const inputmask2 = this.inputmask, opts = inputmask2.opts, input = this, nptValue = inputmask2 && inputmask2._valueGet();
                  if (opts.showMaskOnFocus) {
                    if (nptValue !== _positioning.getBuffer.call(inputmask2).join("")) {
                      (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask2), _positioning.seekNext.call(inputmask2, _positioning.getLastValidPosition.call(inputmask2)));
                    }
                  }
                  if (opts.positionCaretOnTab === true && inputmask2.mouseEnter === false && (!_validation.isComplete.call(inputmask2, _positioning.getBuffer.call(inputmask2)) || _positioning.getLastValidPosition.call(inputmask2) === -1)) {
                    EventHandlers.clickEvent.apply(input, [e, true]);
                  }
                  inputmask2.undoValue = inputmask2 && inputmask2._valueGet(true);
                },
                invalidEvent: function(e) {
                  this.inputmask.validationEvent = true;
                },
                mouseleaveEvent: function() {
                  const inputmask2 = this.inputmask, opts = inputmask2.opts, input = this;
                  inputmask2.mouseEnter = false;
                  if (opts.clearMaskOnLostFocus && input.getRootNode().activeElement !== input) {
                    (0, _inputHandling.HandleNativePlaceholder)(input, inputmask2.originalPlaceholder);
                  }
                },
                clickEvent: function(e, tabbed) {
                  const inputmask2 = this.inputmask;
                  inputmask2.clicked++;
                  const input = this;
                  if (input.getRootNode().activeElement === input) {
                    const newCaretPosition = _positioning.determineNewCaretPosition.call(inputmask2, _positioning.caret.call(inputmask2, input), tabbed);
                    if (newCaretPosition !== void 0) {
                      _positioning.caret.call(inputmask2, input, newCaretPosition);
                    }
                  }
                },
                cutEvent: function(e) {
                  const inputmask2 = this.inputmask, maskset = inputmask2.maskset, input = this, pos = _positioning.caret.call(inputmask2, input), clipData = inputmask2.isRTL ? _positioning.getBuffer.call(inputmask2).slice(pos.end, pos.begin) : _positioning.getBuffer.call(inputmask2).slice(pos.begin, pos.end), clipDataText = inputmask2.isRTL ? clipData.reverse().join("") : clipData.join("");
                  if (_window.default.navigator && _window.default.navigator.clipboard) _window.default.navigator.clipboard.writeText(clipDataText);
                  else if (_window.default.clipboardData && _window.default.clipboardData.getData) {
                    _window.default.clipboardData.setData("Text", clipDataText);
                  }
                  _validation.handleRemove.call(inputmask2, input, _keycode.keys.Delete, pos);
                  (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask2), maskset.p, e, inputmask2.undoValue !== inputmask2._valueGet(true));
                },
                blurEvent: function(e) {
                  const inputmask2 = this.inputmask, opts = inputmask2.opts, $ = inputmask2.dependencyLib;
                  inputmask2.clicked = 0;
                  const $input = $(this), input = this;
                  if (input.inputmask) {
                    (0, _inputHandling.HandleNativePlaceholder)(input, inputmask2.originalPlaceholder);
                    let nptValue = input.inputmask._valueGet(), buffer = _positioning.getBuffer.call(inputmask2).slice();
                    if (nptValue !== "") {
                      if (opts.clearMaskOnLostFocus) {
                        if (_positioning.getLastValidPosition.call(inputmask2) === -1 && nptValue === _positioning.getBufferTemplate.call(inputmask2).join("")) {
                          buffer = [];
                        } else {
                          _inputHandling.clearOptionalTail.call(inputmask2, buffer);
                        }
                      }
                      if (_validation.isComplete.call(inputmask2, buffer) === false) {
                        setTimeout(function() {
                          $input.trigger("incomplete");
                        }, 0);
                        if (opts.clearIncomplete) {
                          _positioning.resetMaskSet.call(inputmask2, false);
                          if (opts.clearMaskOnLostFocus) {
                            buffer = [];
                          } else {
                            buffer = _positioning.getBufferTemplate.call(inputmask2).slice();
                          }
                        }
                      }
                      (0, _inputHandling.writeBuffer)(input, buffer, void 0, e);
                    }
                    nptValue = inputmask2._valueGet(true);
                    if (inputmask2.undoValue !== nptValue) {
                      const bufferTemplateStr = (inputmask2.isRTL ? _positioning.getBufferTemplate.call(inputmask2).slice().reverse() : _positioning.getBufferTemplate.call(inputmask2)).join("");
                      if (nptValue !== "" || inputmask2.undoValue !== bufferTemplateStr || inputmask2.undoValue === bufferTemplateStr && inputmask2.maskset.validPositions.length > 0) {
                        inputmask2.undoValue = nptValue;
                        $input.trigger("change");
                      }
                    }
                  }
                },
                mouseenterEvent: function() {
                  const inputmask2 = this.inputmask, {
                    showMaskOnHover
                  } = inputmask2.opts, input = this;
                  inputmask2.mouseEnter = true;
                  if (input.getRootNode().activeElement !== input) {
                    const bufferTemplate = (inputmask2.isRTL ? _positioning.getBufferTemplate.call(inputmask2).slice().reverse() : _positioning.getBufferTemplate.call(inputmask2)).join("");
                    if (showMaskOnHover) {
                      (0, _inputHandling.HandleNativePlaceholder)(input, bufferTemplate);
                    }
                  }
                },
                submitEvent: function() {
                  const inputmask2 = this.inputmask, opts = inputmask2.opts;
                  if (inputmask2.undoValue !== inputmask2._valueGet(true)) {
                    inputmask2.$el.trigger("change");
                  }
                  if (
                    /* opts.clearMaskOnLostFocus && */
                    _positioning.getLastValidPosition.call(inputmask2) === -1 && inputmask2._valueGet && inputmask2._valueGet() === _positioning.getBufferTemplate.call(inputmask2).join("")
                  ) {
                    inputmask2._valueSet("");
                  }
                  if (opts.clearIncomplete && _validation.isComplete.call(inputmask2, _positioning.getBuffer.call(inputmask2)) === false) {
                    inputmask2._valueSet("");
                  }
                  if (opts.removeMaskOnSubmit) {
                    inputmask2._valueSet(inputmask2.unmaskedvalue(), true);
                    setTimeout(function() {
                      (0, _inputHandling.writeBuffer)(inputmask2.el, _positioning.getBuffer.call(inputmask2));
                    }, 0);
                  }
                },
                resetEvent: function() {
                  const inputmask2 = this.inputmask;
                  inputmask2.refreshValue = true;
                  setTimeout(function() {
                    (0, _inputHandling.applyInputValue)(inputmask2.el, inputmask2._valueGet(true));
                  }, 0);
                }
              };
            },
            /* 19 */
            /***/
            function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.keys = exports2.keyCode = void 0;
              exports2.toKey = toKey;
              exports2.toKeyCode = toKeyCode;
              const ignorables = {
                Alt: 18,
                AltGraph: 18,
                ArrowDown: 40,
                ArrowLeft: 37,
                ArrowRight: 39,
                ArrowUp: 38,
                Backspace: 8,
                CapsLock: 20,
                Control: 17,
                ContextMenu: 93,
                Dead: 221,
                Delete: 46,
                End: 35,
                Escape: 27,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                Home: 36,
                Insert: 45,
                NumLock: 144,
                PageDown: 34,
                PageUp: 33,
                Pause: 19,
                PrintScreen: 44,
                Process: 229,
                Shift: 16,
                ScrollLock: 145,
                Tab: 9,
                Unidentified: 229
              }, keyCode = exports2.keyCode = __spreadValues({
                c: 67,
                x: 88,
                z: 90,
                BACKSPACE_SAFARI: 127,
                Enter: 13,
                Meta_LEFT: 91,
                Meta_RIGHT: 92,
                Space: 32
              }, ignorables), keyCodeRev = Object.entries(keyCode).reduce((acc, [key, value]) => (
                // eslint-disable-next-line no-sequences
                (acc[value] = acc[value] === void 0 ? key : acc[value], acc)
              ), {}), keys = exports2.keys = Object.entries(keyCode).reduce(
                // eslint-disable-next-line no-sequences
                (acc, [key, value]) => (acc[key] = key === "Space" ? " " : key, acc),
                {}
              );
              function toKey(keyCode2, shiftKey) {
                return keyCodeRev[keyCode2] || (shiftKey ? String.fromCharCode(keyCode2) : String.fromCharCode(keyCode2).toLowerCase());
              }
              function toKeyCode(key) {
                return keyCode[key];
              }
            },
            /* 20 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.caret = caret;
              exports2.determineLastRequiredPosition = determineLastRequiredPosition;
              exports2.determineNewCaretPosition = determineNewCaretPosition;
              exports2.getBuffer = getBuffer;
              exports2.getBufferTemplate = getBufferTemplate;
              exports2.getLastValidPosition = getLastValidPosition;
              exports2.isMask = isMask;
              exports2.resetMaskSet = resetMaskSet;
              exports2.seekNext = seekNext;
              exports2.seekPrevious = seekPrevious;
              exports2.translatePosition = translatePosition;
              var _window = _interopRequireDefault(__webpack_require__2(11));
              var _validation = __webpack_require__2(21);
              var _validationTests = __webpack_require__2(22);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              function caret(input, begin, end, notranslate, isDelete) {
                const inputmask2 = this, opts = this.opts;
                let range;
                if (begin !== void 0) {
                  if (Array.isArray(begin)) {
                    end = inputmask2.isRTL ? begin[0] : begin[1];
                    begin = inputmask2.isRTL ? begin[1] : begin[0];
                  }
                  if (begin.begin !== void 0) {
                    end = inputmask2.isRTL ? begin.begin : begin.end;
                    begin = inputmask2.isRTL ? begin.end : begin.begin;
                  }
                  if (typeof begin === "number") {
                    begin = notranslate ? begin : translatePosition.call(inputmask2, begin);
                    end = notranslate ? end : translatePosition.call(inputmask2, end);
                    end = typeof end === "number" ? end : begin;
                    const scrollCalc = parseInt(((input.ownerDocument.defaultView || _window.default).getComputedStyle ? (input.ownerDocument.defaultView || _window.default).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
                    input.inputmask.caretPos = {
                      begin,
                      end
                    };
                    if (opts.insertModeVisual && opts.insertMode === false && begin === end) {
                      if (!isDelete) {
                        end++;
                      }
                    }
                    if (input === input.getRootNode().activeElement) {
                      if ("setSelectionRange" in input) {
                        input.setSelectionRange(begin, end);
                      } else if (_window.default.getSelection) {
                        range = document.createRange();
                        if (input.firstChild === void 0 || input.firstChild === null) {
                          const textNode = document.createTextNode("");
                          input.appendChild(textNode);
                        }
                        range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                        range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                        range.collapse(true);
                        const sel = _window.default.getSelection();
                        sel.removeAllRanges();
                        sel.addRange(range);
                      } else if (input.createTextRange) {
                        range = input.createTextRange();
                        range.collapse(true);
                        range.moveEnd("character", end);
                        range.moveStart("character", begin);
                        range.select();
                      }
                      input.inputmask.caretHook === void 0 || input.inputmask.caretHook.call(inputmask2, {
                        begin,
                        end
                      });
                    }
                  }
                } else {
                  if ("selectionStart" in input && "selectionEnd" in input) {
                    begin = input.selectionStart;
                    end = input.selectionEnd;
                  } else if (_window.default.getSelection) {
                    range = _window.default.getSelection().getRangeAt(0);
                    if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                      begin = range.startOffset;
                      end = range.endOffset;
                    }
                  } else if (document.selection && document.selection.createRange) {
                    range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                    end = begin + range.text.length;
                  }
                  return {
                    begin: notranslate ? begin : translatePosition.call(inputmask2, begin),
                    end: notranslate ? end : translatePosition.call(inputmask2, end)
                  };
                }
              }
              function determineLastRequiredPosition(returnDefinition) {
                const inputmask2 = this, {
                  maskset,
                  dependencyLib: $
                } = inputmask2, lvp = getLastValidPosition.call(inputmask2), positions = {}, lvTest = maskset.validPositions[lvp], buffer = _validationTests.getMaskTemplate.call(inputmask2, true, getLastValidPosition.call(inputmask2), true, true);
                let bl = buffer.length, pos, ndxIntlzr = lvTest !== void 0 ? lvTest.locator.slice() : void 0, testPos;
                for (pos = lvp + 1; pos < buffer.length; pos++) {
                  testPos = _validationTests.getTestTemplate.call(inputmask2, pos, ndxIntlzr, pos - 1);
                  ndxIntlzr = testPos.locator.slice();
                  positions[pos] = $.extend(true, {}, testPos);
                }
                const lvTestAlt = lvTest && lvTest.alternation !== void 0 ? lvTest.locator[lvTest.alternation] : void 0;
                for (pos = bl - 1; pos > lvp; pos--) {
                  testPos = positions[pos];
                  if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.static !== true || testPos.match.static === true && testPos.locator[lvTest.alternation] && _validation.checkAlternationMatch.call(inputmask2, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && _validationTests.getTests.call(inputmask2, pos)[0].def !== "")) && buffer[pos] === _validationTests.getPlaceholder.call(inputmask2, pos, testPos.match)) {
                    bl--;
                    if (testPos.match.optionality) {
                      let prevPos = pos;
                      while (prevPos > 0) {
                        const test = _validationTests.getTest.call(inputmask2, prevPos);
                        if (test.match.newBlockMarker === "master" || test.match.newBlockMarker === true) {
                          break;
                        }
                        prevPos--;
                      }
                      if (maskset.validPositions[prevPos] !== void 0) {
                        break;
                      }
                    }
                  } else {
                    break;
                  }
                }
                if (pos === lvp) {
                  bl = pos;
                }
                return returnDefinition ? {
                  l: bl,
                  def: positions[bl] ? positions[bl].match : void 0
                } : bl;
              }
              function determineNewCaretPosition(selectedCaret, tabbed, positionCaretOnClick) {
                const inputmask2 = this, {
                  maskset,
                  opts
                } = inputmask2;
                let clickPosition, lvclickPosition, lastPosition;
                function doRadixFocus(clickPos) {
                  if (opts.radixPoint !== "" && opts.digits !== 0) {
                    const vps = maskset.validPositions;
                    if (vps[clickPos] === void 0 || vps[clickPos].input === void 0) {
                      if (clickPos < seekNext.call(inputmask2, -1)) return true;
                      const radixPos = getBuffer.call(inputmask2).indexOf(opts.radixPoint);
                      if (radixPos !== -1) {
                        for (const vp in vps) {
                          const pos = Number(vp);
                          if (radixPos < pos && vps[vp].input !== _validationTests.getPlaceholder.call(inputmask2, pos)) {
                            return false;
                          }
                        }
                        return true;
                      }
                    }
                  }
                  return false;
                }
                if (tabbed) {
                  if (inputmask2.isRTL) {
                    selectedCaret.end = selectedCaret.begin;
                  } else {
                    selectedCaret.begin = selectedCaret.end;
                  }
                }
                if (selectedCaret.begin === selectedCaret.end) {
                  positionCaretOnClick = positionCaretOnClick || opts.positionCaretOnClick;
                  switch (positionCaretOnClick) {
                    case "none":
                      break;
                    case "select":
                      selectedCaret = {
                        begin: 0,
                        end: getBuffer.call(inputmask2).length
                      };
                      break;
                    case "ignore":
                      selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask2, getLastValidPosition.call(inputmask2));
                      break;
                    case "radixFocus":
                      if (inputmask2.clicked > 1 && maskset.validPositions.length === 0) break;
                      if (doRadixFocus(selectedCaret.begin)) {
                        const radixPos = getBuffer.call(inputmask2).join("").indexOf(opts.radixPoint);
                        selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask2, radixPos) : radixPos;
                        break;
                      }
                    default:
                      clickPosition = selectedCaret.begin;
                      lvclickPosition = getLastValidPosition.call(inputmask2, clickPosition, true);
                      lastPosition = seekNext.call(inputmask2, lvclickPosition === -1 && !isMask.call(inputmask2, 0) ? -1 : lvclickPosition);
                      if (clickPosition <= lastPosition) {
                        selectedCaret.end = selectedCaret.begin = !isMask.call(inputmask2, clickPosition, false, true) ? seekNext.call(inputmask2, clickPosition) : clickPosition;
                      } else {
                        const lvp = maskset.validPositions[lvclickPosition], tt = _validationTests.getTestTemplate.call(inputmask2, lastPosition, lvp ? lvp.match.locator : void 0, lvp), placeholder = _validationTests.getPlaceholder.call(inputmask2, lastPosition, tt.match);
                        if (placeholder !== "" && getBuffer.call(inputmask2)[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask.call(inputmask2, lastPosition, opts.keepStatic, true) && tt.match.def === placeholder) {
                          const newPos = seekNext.call(inputmask2, lastPosition);
                          if (clickPosition >= newPos || clickPosition === lastPosition) {
                            lastPosition = newPos;
                          }
                        }
                        selectedCaret.end = selectedCaret.begin = lastPosition;
                      }
                  }
                  return selectedCaret;
                }
              }
              function getBuffer(noCache) {
                const inputmask2 = this, {
                  maskset
                } = inputmask2;
                if (maskset.buffer === void 0 || noCache === true) {
                  maskset.buffer = _validationTests.getMaskTemplate.call(inputmask2, true, getLastValidPosition.call(inputmask2), true);
                  if (maskset._buffer === void 0) maskset._buffer = maskset.buffer.slice();
                }
                return maskset.buffer;
              }
              function getBufferTemplate() {
                const inputmask2 = this, maskset = this.maskset;
                if (maskset._buffer === void 0) {
                  maskset._buffer = _validationTests.getMaskTemplate.call(inputmask2, false, 1);
                  if (maskset.buffer === void 0) maskset.buffer = maskset._buffer.slice();
                }
                return maskset._buffer;
              }
              function getLastValidPosition(closestTo, strict, validPositions) {
                const maskset = this.maskset;
                let before = -1, after = -1;
                const valids = validPositions || maskset.validPositions;
                if (closestTo === void 0) closestTo = -1;
                for (let psNdx = 0, vpl = valids.length; psNdx < vpl; psNdx++) {
                  if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
                    if (psNdx <= closestTo) before = psNdx;
                    if (psNdx >= closestTo) after = psNdx;
                  }
                }
                return before === -1 || before === closestTo ? after : after === -1 ? before : closestTo - before < after - closestTo ? before : after;
              }
              function isMask(pos, strict, fuzzy) {
                const inputmask2 = this, maskset = this.maskset;
                let test = _validationTests.getTestTemplate.call(inputmask2, pos).match;
                if (test.def === "") test = _validationTests.getTest.call(inputmask2, pos).match;
                if (test.static !== true) {
                  return test.fn;
                }
                if (fuzzy === true && maskset.validPositions[pos] !== void 0 && maskset.validPositions[pos].generatedInput !== true) {
                  return true;
                }
                if (strict !== true && pos > -1) {
                  if (fuzzy) {
                    const tests = _validationTests.getTests.call(inputmask2, pos);
                    return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
                  }
                  const testTemplate = _validationTests.determineTestTemplate.call(inputmask2, pos, _validationTests.getTests.call(inputmask2, pos)), testPlaceHolder = _validationTests.getPlaceholder.call(inputmask2, pos, testTemplate.match);
                  return testTemplate.match.def !== testPlaceHolder;
                }
                return false;
              }
              function resetMaskSet(soft) {
                const maskset = this.maskset;
                maskset.buffer = void 0;
                if (soft !== true) {
                  maskset.validPositions = [];
                  maskset.p = 0;
                }
                if (soft === false) {
                  maskset.tests = {};
                  maskset.jitOffset = {};
                }
              }
              function seekNext(pos, newBlock, fuzzy) {
                const inputmask2 = this;
                if (fuzzy === void 0) fuzzy = true;
                let position = pos + 1;
                while (_validationTests.getTest.call(inputmask2, position).match.def !== "" && (newBlock === true && (_validationTests.getTest.call(inputmask2, position).match.newBlockMarker !== true || !isMask.call(inputmask2, position, void 0, true)) || newBlock !== true && !isMask.call(inputmask2, position, void 0, fuzzy))) {
                  position++;
                }
                return position;
              }
              function seekPrevious(pos, newBlock) {
                const inputmask2 = this;
                let position = pos - 1;
                if (pos <= 0) return 0;
                while (position > 0 && (newBlock === true && (_validationTests.getTest.call(inputmask2, position).match.newBlockMarker !== true || !isMask.call(inputmask2, position, void 0, true)) || newBlock !== true && !isMask.call(inputmask2, position, void 0, true))) {
                  position--;
                }
                return position;
              }
              function translatePosition(pos) {
                const inputmask2 = this, opts = this.opts, el = this.el;
                if (inputmask2.isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
                  pos = inputmask2._valueGet().length - pos;
                  if (pos < 0) pos = 0;
                }
                return pos;
              }
            },
            /* 21 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.alternate = alternate;
              exports2.casing = casing;
              exports2.checkAlternationMatch = checkAlternationMatch;
              exports2.handleRemove = handleRemove;
              exports2.isComplete = isComplete;
              exports2.isSelection = isSelection;
              exports2.isValid = isValid;
              exports2.refreshFromBuffer = refreshFromBuffer;
              exports2.revalidateMask = revalidateMask;
              var _eventhandlers = __webpack_require__2(18);
              var _keycode = __webpack_require__2(19);
              var _positioning = __webpack_require__2(20);
              var _validationTests = __webpack_require__2(22);
              function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
                const inputmask2 = this, $ = this.dependencyLib, opts = this.opts, maskset = inputmask2.maskset;
                if (!inputmask2.hasAlternator) return false;
                const validPsClone = $.extend(true, [], maskset.validPositions), tstClone = $.extend(true, {}, maskset.tests);
                let lastAlt, alternation, isValidRslt = false, returnRslt = false, altPos, prevAltPos, i, validPos, decisionPos, lAltPos = rAltPos !== void 0 ? rAltPos : _positioning.getLastValidPosition.call(inputmask2), nextPos, input, begin, end;
                if (selection) {
                  begin = selection.begin;
                  end = selection.end;
                  if (selection.begin > selection.end) {
                    begin = selection.end;
                    end = selection.begin;
                  }
                }
                if (lAltPos === -1 && rAltPos === void 0) {
                  lastAlt = 0;
                  prevAltPos = _validationTests.getTest.call(inputmask2, lastAlt);
                  alternation = prevAltPos.alternation;
                } else {
                  for (; lAltPos >= 0; lAltPos--) {
                    altPos = lAltPos === 0 ? _validationTests.getTest.call(inputmask2, 0) : maskset.validPositions[lAltPos];
                    if (altPos && altPos.alternation !== void 0) {
                      if (lAltPos <= (maskPos || 0) && prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                        break;
                      }
                      lastAlt = lAltPos;
                      alternation = altPos.alternation;
                      prevAltPos = altPos;
                    }
                  }
                }
                if (alternation !== void 0) {
                  decisionPos = parseInt(lastAlt);
                  maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [];
                  if (maskPos !== true) {
                    maskset.excludes[decisionPos].push((0, _validationTests.getDecisionTaker)(prevAltPos) + ":" + prevAltPos.alternation);
                  }
                  const validInputs = [];
                  let resultPos = -1;
                  for (i = decisionPos; decisionPos < _positioning.getLastValidPosition.call(inputmask2, void 0, true) + 1; i++) {
                    if (resultPos === -1 && maskPos <= i && c !== void 0) {
                      validInputs.push(c);
                      resultPos = validInputs.length - 1;
                    }
                    validPos = maskset.validPositions[decisionPos];
                    if (validPos && validPos.generatedInput !== true && (decisionPos !== 0 || validPos.input !== opts.skipOptionalPartCharacter) && (selection === void 0 || i < begin || i >= end)) {
                      validInputs.push(validPos.input);
                    }
                    maskset.validPositions.splice(decisionPos, 1);
                  }
                  if (resultPos === -1 && c !== void 0) {
                    validInputs.push(c);
                    resultPos = validInputs.length - 1;
                  }
                  while (maskset.excludes[decisionPos] !== void 0 && maskset.excludes[decisionPos].length < 10) {
                    maskset.tests = {};
                    _positioning.resetMaskSet.call(inputmask2, true);
                    isValidRslt = true;
                    nextPos = decisionPos - 1;
                    const targetTemplate = _validationTests.getMaskTemplate.call(inputmask2, true, 0);
                    for (i = 0; i < validInputs.length; i++) {
                      input = validInputs[i];
                      if (targetTemplate[nextPos + 1] === input && opts.numericInput !== true) {
                        nextPos++;
                      } else if (i === 0 || returnRslt.caretPos !== void 0 || opts.insertMode === false) {
                        nextPos = _positioning.seekNext.call(inputmask2, nextPos);
                      } else {
                        nextPos = _positioning.getLastValidPosition.call(inputmask2, nextPos, true) + 1;
                      }
                      if (!(isValidRslt = isValid.call(inputmask2, nextPos, input, false, fromIsValid, true))) {
                        break;
                      }
                      if (i === resultPos) {
                        returnRslt = isValidRslt;
                      }
                      if (maskPos === true && isValidRslt) {
                        returnRslt = {
                          caretPos: i
                        };
                      }
                    }
                    if (!isValidRslt) {
                      _positioning.resetMaskSet.call(inputmask2);
                      prevAltPos = _validationTests.getTest.call(inputmask2, decisionPos);
                      maskset.validPositions = $.extend(true, [], validPsClone);
                      maskset.tests = $.extend(true, {}, tstClone);
                      returnRslt = false;
                      if (maskset.excludes[decisionPos]) {
                        if (prevAltPos.alternation != void 0) {
                          const decisionTaker = (0, _validationTests.getDecisionTaker)(prevAltPos);
                          if (maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation) !== -1) {
                            returnRslt = alternate.call(inputmask2, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                            break;
                          }
                          maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation);
                          for (i = decisionPos; i < _positioning.getLastValidPosition.call(inputmask2, void 0, true) + 1; i++) maskset.validPositions.splice(decisionPos);
                        } else delete maskset.excludes[decisionPos];
                      } else {
                        returnRslt = alternate.call(inputmask2, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                        break;
                      }
                    } else {
                      break;
                    }
                  }
                }
                if (!returnRslt || opts.keepStatic !== false) {
                  delete maskset.excludes[decisionPos];
                }
                if (!returnRslt) {
                  maskset.validPositions = $.extend(true, [], validPsClone);
                  maskset.tests = $.extend(true, {}, tstClone);
                }
                return returnRslt;
              }
              function casing(elem, test, pos) {
                const opts = this.opts, maskset = this.maskset;
                switch (opts.casing || test.casing) {
                  case "upper":
                    elem = elem.toLocaleUpperCase();
                    break;
                  case "lower":
                    elem = elem.toLocaleLowerCase();
                    break;
                  case "title":
                    var posBefore = maskset.validPositions[pos - 1];
                    if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(_keycode.keyCode.Space)) {
                      elem = elem.toLocaleUpperCase();
                    } else {
                      elem = elem.toLocaleLowerCase();
                    }
                    break;
                  case "follow":
                    if (test.def && test.def !== test.def.toLocaleLowerCase()) {
                      elem = elem.toLocaleUpperCase();
                    } else if (test.def && test.def !== test.def.toLocaleUpperCase()) {
                      elem = elem.toLocaleLowerCase();
                    }
                    break;
                  default:
                    if (typeof opts.casing === "function") {
                      const args = Array.prototype.slice.call(arguments);
                      args.push(maskset.validPositions);
                      elem = opts.casing.apply(this, args);
                    }
                }
                return elem;
              }
              function checkAlternationMatch(altArr1, altArr2, na) {
                const opts = this.opts;
                let altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = false, naArr = na !== void 0 ? na.split(",") : [], naNdx;
                for (let i = 0; i < naArr.length; i++) {
                  if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
                    altArr1.splice(naNdx, 1);
                  }
                }
                for (let alndx = 0; alndx < altArr1.length; alndx++) {
                  if (altArrC.includes(altArr1[alndx])) {
                    isMatch = true;
                    break;
                  }
                }
                return isMatch;
              }
              function handleRemove(input, c, pos, strict, fromIsValid) {
                const inputmask2 = this, maskset = this.maskset, opts = this.opts;
                if (opts.numericInput || inputmask2.isRTL) {
                  if (c === _keycode.keys.Backspace) {
                    c = _keycode.keys.Delete;
                  } else if (c === _keycode.keys.Delete) {
                    c = _keycode.keys.Backspace;
                  }
                  if (inputmask2.isRTL) {
                    const pend = pos.end;
                    pos.end = pos.begin;
                    pos.begin = pend;
                  }
                }
                const lvp = _positioning.getLastValidPosition.call(inputmask2, void 0, true);
                if (pos.end >= _positioning.getBuffer.call(inputmask2).length && lvp >= pos.end) {
                  pos.end = lvp + 1;
                }
                if (c === _keycode.keys.Backspace) {
                  if (pos.end - pos.begin < 1) {
                    pos.begin = _positioning.seekPrevious.call(inputmask2, pos.begin);
                  }
                } else if (c === _keycode.keys.Delete) {
                  if (pos.begin === pos.end) {
                    pos.end = _positioning.isMask.call(inputmask2, pos.end, true, true) ? pos.end + 1 : _positioning.seekNext.call(inputmask2, pos.end) + 1;
                  }
                }
                let offset;
                if ((offset = revalidateMask.call(inputmask2, pos)) !== false) {
                  if (strict !== true && opts.keepStatic !== false || opts.regex !== null && _validationTests.getTest.call(inputmask2, pos.begin).match.def.indexOf("|") !== -1) {
                    alternate.call(inputmask2, true);
                  }
                  if (strict !== true) {
                    maskset.p = c === _keycode.keys.Delete ? pos.begin + offset : pos.begin;
                    maskset.p = _positioning.determineNewCaretPosition.call(inputmask2, {
                      begin: maskset.p,
                      end: maskset.p
                    }, false, opts.insertMode === false && c === _keycode.keys.Backspace ? "none" : void 0).begin;
                  }
                }
              }
              function isComplete(buffer) {
                const inputmask2 = this, opts = this.opts, maskset = this.maskset;
                if (typeof opts.isComplete === "function") return opts.isComplete(buffer, opts);
                if (opts.repeat === "*") return void 0;
                let complete = false, lrp = _positioning.determineLastRequiredPosition.call(inputmask2, true), aml = lrp.l;
                if (lrp.def === void 0 || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                  complete = true;
                  for (let i = 0; i <= aml; i++) {
                    const test = _validationTests.getTestTemplate.call(inputmask2, i).match;
                    if (test.static !== true && maskset.validPositions[i] === void 0 && (test.optionality === false || test.optionality === void 0 || test.optionality && test.newBlockMarker == false) && (test.optionalQuantifier === false || test.optionalQuantifier === void 0) || test.static === true && test.def != "" && buffer[i] !== _validationTests.getPlaceholder.call(inputmask2, i, test)) {
                      complete = false;
                      break;
                    }
                  }
                }
                return complete;
              }
              function isSelection(posObj) {
                const inputmask2 = this, opts = this.opts, insertModeOffset = opts.insertMode ? 0 : 1;
                return inputmask2.isRTL ? posObj.begin - posObj.end > insertModeOffset : posObj.end - posObj.begin > insertModeOffset;
              }
              function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
                const inputmask2 = this, $ = this.dependencyLib, opts = this.opts, maskset = inputmask2.maskset;
                strict = strict === true;
                let maskPos = pos;
                if (pos.begin !== void 0) {
                  maskPos = inputmask2.isRTL ? pos.end : pos.begin;
                }
                function processCommandObject(commandObj) {
                  if (commandObj !== void 0) {
                    if (commandObj.remove !== void 0) {
                      if (!Array.isArray(commandObj.remove)) commandObj.remove = [commandObj.remove];
                      commandObj.remove.sort(function(a, b) {
                        return inputmask2.isRTL ? a.pos - b.pos : b.pos - a.pos;
                      }).forEach(function(lmnt) {
                        revalidateMask.call(inputmask2, {
                          begin: lmnt,
                          end: lmnt + 1
                        });
                      });
                      commandObj.remove = void 0;
                    }
                    if (commandObj.insert !== void 0) {
                      if (!Array.isArray(commandObj.insert)) commandObj.insert = [commandObj.insert];
                      commandObj.insert.sort(function(a, b) {
                        return inputmask2.isRTL ? b.pos - a.pos : a.pos - b.pos;
                      }).forEach(function(lmnt) {
                        if (lmnt.c !== "") {
                          isValid.call(inputmask2, lmnt.pos, lmnt.c, lmnt.strict !== void 0 ? lmnt.strict : true, lmnt.fromIsValid !== void 0 ? lmnt.fromIsValid : fromIsValid);
                        }
                      });
                      commandObj.insert = void 0;
                    }
                    if (commandObj.refreshFromBuffer && commandObj.buffer) {
                      const refresh = commandObj.refreshFromBuffer;
                      refreshFromBuffer.call(inputmask2, refresh === true ? refresh : refresh.start, refresh.end, commandObj.buffer);
                      commandObj.refreshFromBuffer = void 0;
                    }
                    if (commandObj.rewritePosition !== void 0) {
                      maskPos = commandObj.rewritePosition;
                      commandObj = true;
                    }
                  }
                  return commandObj;
                }
                function _isValid(position, c2, strict2) {
                  let rslt = false;
                  _validationTests.getTests.call(inputmask2, position).every(function(tst, ndx) {
                    const test = tst.match;
                    _positioning.getBuffer.call(inputmask2, true);
                    if (test.jit && maskset.validPositions[_positioning.seekPrevious.call(inputmask2, position)] === void 0) {
                      rslt = false;
                    } else {
                      rslt = test.fn != null ? test.fn.test(c2, maskset, position, strict2, opts, isSelection.call(inputmask2, pos)) : (c2 === test.def || c2 === opts.skipOptionalPartCharacter) && test.def !== "" ? {
                        c: _validationTests.getPlaceholder.call(inputmask2, position, test, true) || test.def,
                        pos: position
                      } : false;
                    }
                    if (rslt !== false) {
                      let elem = rslt.c !== void 0 ? rslt.c : c2, validatedPos = position;
                      elem = elem === opts.skipOptionalPartCharacter && test.static === true ? _validationTests.getPlaceholder.call(inputmask2, position, test, true) || test.def : elem;
                      rslt = processCommandObject(rslt);
                      if (rslt !== true && rslt.pos !== void 0 && rslt.pos !== position) {
                        validatedPos = rslt.pos;
                      }
                      if (rslt !== true && rslt.pos === void 0 && rslt.c === void 0) {
                        return false;
                      }
                      if (revalidateMask.call(inputmask2, pos, $.extend({}, tst, {
                        input: casing.call(inputmask2, elem, test, validatedPos)
                      }), fromIsValid, validatedPos) === false) {
                        rslt = false;
                      }
                      return false;
                    }
                    return true;
                  });
                  return rslt;
                }
                let result = true, positionsClone = $.extend(true, [], maskset.validPositions);
                if (opts.keepStatic === false && maskset.excludes[maskPos] !== void 0 && fromAlternate !== true && fromIsValid !== true) {
                  for (let i = maskPos; i < (inputmask2.isRTL ? pos.begin : pos.end); i++) {
                    if (maskset.excludes[i] !== void 0) {
                      maskset.excludes[i] = void 0;
                      delete maskset.tests[i];
                    }
                  }
                }
                if (typeof opts.preValidation === "function" && fromIsValid !== true && validateOnly !== true) {
                  result = opts.preValidation.call(inputmask2, _positioning.getBuffer.call(inputmask2), maskPos, c, isSelection.call(inputmask2, pos), opts, maskset, pos, strict || fromAlternate);
                  result = processCommandObject(result);
                }
                if (result === true) {
                  result = _isValid(maskPos, c, strict);
                  if ((!strict || fromIsValid === true) && result === false && validateOnly !== true) {
                    const currentPosValid = maskset.validPositions[maskPos];
                    if (currentPosValid && currentPosValid.match.static === true && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                      result = {
                        caret: _positioning.seekNext.call(inputmask2, maskPos)
                      };
                    } else {
                      if (opts.insertMode || maskset.validPositions[_positioning.seekNext.call(inputmask2, maskPos)] === void 0 || pos.end > maskPos) {
                        let skip = false;
                        if (maskset.jitOffset[maskPos] && maskset.validPositions[_positioning.seekNext.call(inputmask2, maskPos)] === void 0) {
                          result = isValid.call(inputmask2, maskPos + maskset.jitOffset[maskPos], c, true, true);
                          if (result !== false) {
                            if (fromAlternate !== true) result.caret = maskPos;
                            skip = true;
                          }
                        }
                        if (pos.end > maskPos) {
                          maskset.validPositions[maskPos] = void 0;
                        }
                        if (!skip && !_positioning.isMask.call(inputmask2, maskPos, opts.keepStatic && maskPos === 0)) {
                          for (let nPos = maskPos + 1, snPos = _positioning.seekNext.call(inputmask2, maskPos, false, maskPos !== 0); nPos <= snPos; nPos++) {
                            result = _isValid(nPos, c, strict);
                            if (result !== false) {
                              result = trackbackPositions.call(inputmask2, maskPos, result.pos !== void 0 ? result.pos : nPos) || result;
                              maskPos = nPos;
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (inputmask2.hasAlternator && fromAlternate !== true && !strict) {
                    fromAlternate = true;
                    if (result === false) {
                      if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && maskPos >= opts.keepStatic) {
                        result = alternate.call(inputmask2, maskPos, c, strict, fromIsValid, void 0, pos);
                      }
                    } else if (result === true) {
                      if (isSelection.call(inputmask2, pos) && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && opts.keepStatic) {
                        result = alternate.call(inputmask2, true) || result;
                      } else if (opts.numericInput !== true && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && _positioning.getLastValidPosition.call(inputmask2, void 0, true) > maskPos) {
                        result = alternate.call(inputmask2, true) || result;
                      }
                    }
                  }
                  if (result === true) {
                    result = {
                      pos: maskPos
                    };
                  }
                  if (typeof opts.postValidation === "function" && fromIsValid !== true && validateOnly !== true) {
                    const postResult = opts.postValidation.call(inputmask2, _positioning.getBuffer.call(inputmask2, true), pos.begin !== void 0 ? inputmask2.isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval, fromAlternate);
                    if (postResult !== void 0) {
                      result = postResult === true ? result : postResult;
                    }
                  }
                }
                if (result && result.pos === void 0) {
                  result.pos = maskPos;
                }
                if (result === false || validateOnly === true) {
                  _positioning.resetMaskSet.call(inputmask2, true);
                  maskset.validPositions = $.extend(true, [], positionsClone);
                } else {
                  trackbackPositions.call(inputmask2, void 0, maskPos, true);
                }
                let endResult = processCommandObject(result);
                if (inputmask2.maxLength !== void 0) {
                  const buffer = _positioning.getBuffer.call(inputmask2);
                  if (buffer.length > inputmask2.maxLength && !fromIsValid) {
                    _positioning.resetMaskSet.call(inputmask2, true);
                    maskset.validPositions = $.extend(true, [], positionsClone);
                    endResult = false;
                  }
                }
                return endResult;
              }
              function positionCanMatchDefinition(pos, testDefinition, opts) {
                const inputmask2 = this, maskset = this.maskset;
                let valid = false, tests = _validationTests.getTests.call(inputmask2, pos);
                for (let tndx = 0; tndx < tests.length; tndx++) {
                  if (tests[tndx].match && (tests[tndx].match.nativeDef === testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] && (!opts.shiftPositions || !testDefinition.match.static) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef || opts.regex && !tests[tndx].match.static && tests[tndx].match.fn.test(testDefinition.input, maskset, pos, false, opts))) {
                    valid = true;
                    break;
                  } else if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
                    valid = void 0;
                    break;
                  }
                }
                if (valid === false) {
                  if (maskset.jitOffset[pos] !== void 0) {
                    valid = positionCanMatchDefinition.call(inputmask2, pos + maskset.jitOffset[pos], testDefinition, opts);
                  }
                }
                return valid;
              }
              function refreshFromBuffer(start, end, buffer) {
                const inputmask2 = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib;
                let i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter, bffr = inputmask2.isRTL ? buffer.slice().reverse() : buffer;
                opts.skipOptionalPartCharacter = "";
                if (start === true) {
                  _positioning.resetMaskSet.call(inputmask2, false);
                  start = 0;
                  end = buffer.length;
                  p = _positioning.determineNewCaretPosition.call(inputmask2, {
                    begin: 0,
                    end: 0
                  }, false).begin;
                } else {
                  for (i = start; i < end; i++) {
                    delete maskset.validPositions[i];
                  }
                  p = start;
                }
                const keypress = new $.Event("keypress");
                for (i = start; i < end; i++) {
                  keypress.key = bffr[i].toString();
                  inputmask2.ignorable = false;
                  const valResult = _eventhandlers.EventHandlers.keypressEvent.call(inputmask2, keypress, true, false, false, p);
                  if (valResult !== false && valResult !== void 0) {
                    p = valResult.forwardPosition;
                  }
                }
                opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
              }
              function trackbackPositions(originalPos, newPos, fillOnly) {
                const inputmask2 = this, maskset = this.maskset, $ = this.dependencyLib;
                if (originalPos === void 0) {
                  for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
                    if (maskset.validPositions[originalPos]) break;
                  }
                }
                for (let ps = originalPos; ps < newPos; ps++) {
                  if (maskset.validPositions[ps] === void 0 && !_positioning.isMask.call(inputmask2, ps, false)) {
                    const vp = ps == 0 ? _validationTests.getTest.call(inputmask2, ps) : maskset.validPositions[ps - 1];
                    if (vp) {
                      const tests = _validationTests.getTests.call(inputmask2, ps).slice();
                      if (tests[tests.length - 1].match.def === "") tests.pop();
                      var bestMatch = _validationTests.determineTestTemplate.call(inputmask2, ps, tests), np;
                      if (bestMatch && (bestMatch.match.jit !== true || bestMatch.match.newBlockMarker === "master" && (np = maskset.validPositions[ps + 1]) && np.match.optionalQuantifier === true)) {
                        bestMatch = $.extend({}, bestMatch, {
                          input: _validationTests.getPlaceholder.call(inputmask2, ps, bestMatch.match, true) || bestMatch.match.def
                        });
                        bestMatch.generatedInput = true;
                        revalidateMask.call(inputmask2, ps, bestMatch, true);
                        if (fillOnly !== true) {
                          const cvpInput = maskset.validPositions[newPos].input;
                          maskset.validPositions[newPos] = void 0;
                          return isValid.call(inputmask2, newPos, cvpInput, true, true);
                        }
                      }
                    }
                  }
                }
              }
              function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
                const inputmask2 = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib;
                function IsEnclosedStatic(pos2, valids, selection) {
                  const posMatch = valids[pos2];
                  if (posMatch !== void 0 && posMatch.match.static === true && posMatch.match.optionality !== true && (valids[0] === void 0 || valids[0].alternation === void 0)) {
                    const prevMatch = selection.begin <= pos2 - 1 ? valids[pos2 - 1] && valids[pos2 - 1].match.static === true && valids[pos2 - 1] : valids[pos2 - 1], nextMatch = selection.end > pos2 + 1 ? valids[pos2 + 1] && valids[pos2 + 1].match.static === true && valids[pos2 + 1] : valids[pos2 + 1];
                    return prevMatch && nextMatch;
                  }
                  return false;
                }
                let offset = 0, begin = pos.begin !== void 0 ? pos.begin : pos, end = pos.end !== void 0 ? pos.end : pos, valid = true;
                if (pos.begin > pos.end) {
                  begin = pos.end;
                  end = pos.begin;
                }
                validatedPos = validatedPos !== void 0 ? validatedPos : begin;
                if (fromIsValid === void 0 && (begin !== end || opts.insertMode && maskset.validPositions[validatedPos] !== void 0 || validTest === void 0 || validTest.match.optionalQuantifier || validTest.match.optionality)) {
                  let positionsClone = $.extend(true, [], maskset.validPositions), lvp = _positioning.getLastValidPosition.call(inputmask2, void 0, true), i;
                  maskset.p = begin;
                  const clearpos = isSelection.call(inputmask2, pos) ? begin : validatedPos;
                  for (i = lvp; i >= clearpos; i--) {
                    maskset.validPositions.splice(i, 1);
                    if (validTest === void 0) delete maskset.tests[i + 1];
                  }
                  let j = validatedPos, posMatch = j, t, canMatch, test;
                  if (validTest) {
                    maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
                    posMatch++;
                    j++;
                  }
                  if (positionsClone[end] == void 0 && maskset.jitOffset[end]) {
                    end += maskset.jitOffset[end] + (validTest ? 1 : 0);
                  }
                  for (i = validTest ? end : end - 1; i <= lvp; i++) {
                    if ((t = positionsClone[i]) !== void 0 && (opts.shiftPositions !== true || t.generatedInput !== true) && (i >= end || i >= begin && IsEnclosedStatic(i, positionsClone, {
                      begin,
                      end
                    }))) {
                      while (test = _validationTests.getTest.call(inputmask2, posMatch), test.match.def !== "") {
                        if ((canMatch = positionCanMatchDefinition.call(inputmask2, posMatch, t, opts)) !== false || t.match.def === "+") {
                          if (t.match.def === "+") _positioning.getBuffer.call(inputmask2, true);
                          const result = isValid.call(
                            inputmask2,
                            posMatch,
                            t.input,
                            t.match.def !== "+",
                            /* t.match.def !== "+" */
                            true
                          );
                          valid = result !== false;
                          j = (result.pos || posMatch) + 1;
                          if (!valid && canMatch) break;
                        } else {
                          valid = false;
                        }
                        if (valid) {
                          if (validTest === void 0 && t.match.static && i === pos.begin) offset++;
                          break;
                        }
                        if (!valid && _positioning.getBuffer.call(inputmask2), posMatch > maskset.maskLength) {
                          break;
                        }
                        posMatch++;
                      }
                      if (_validationTests.getTest.call(inputmask2, posMatch).match.def == "") {
                        valid = false;
                      }
                      posMatch = j;
                    }
                    if (!valid) break;
                  }
                  if (!valid) {
                    maskset.validPositions = $.extend(true, [], positionsClone);
                    _positioning.resetMaskSet.call(inputmask2, true);
                    return false;
                  }
                } else if (validTest && _validationTests.getTest.call(inputmask2, validatedPos).match.cd === validTest.match.cd) {
                  maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
                }
                _positioning.resetMaskSet.call(inputmask2, true);
                return offset;
              }
            },
            /* 22 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.determineTestTemplate = determineTestTemplate;
              exports2.getDecisionTaker = getDecisionTaker;
              exports2.getMaskTemplate = getMaskTemplate;
              exports2.getPlaceholder = getPlaceholder;
              exports2.getTest = getTest;
              exports2.getTestTemplate = getTestTemplate;
              exports2.getTests = getTests;
              exports2.isSubsetOf = isSubsetOf;
              var _inputmask = _interopRequireDefault(__webpack_require__2(7));
              var _positioning = __webpack_require__2(20);
              var _validation = __webpack_require__2(21);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              function getLocator(tst, align) {
                let locator = (tst.alternation != void 0 ? tst.mloc[`${getDecisionTaker(tst)}:${tst.alternation}`] || tst.locator : tst.locator).join("");
                if (locator !== "") {
                  locator = locator.split(":")[0];
                  while (locator.length < align) locator += "0";
                }
                return locator;
              }
              function getDecisionTaker(tst) {
                let decisionTaker = tst.locator[tst.alternation];
                if (typeof decisionTaker === "string" && decisionTaker.length > 0) {
                  decisionTaker = decisionTaker.split(",").sort((a, b) => a - b)[0];
                }
                return decisionTaker !== void 0 ? decisionTaker.toString() : "";
              }
              function getPlaceholder(pos, test, returnPL) {
                const inputmask2 = this, opts = this.opts, maskset = this.maskset;
                test = test || getTest.call(inputmask2, pos).match;
                if (test.placeholder !== void 0 || returnPL === true) {
                  if (test.placeholder !== "" && test.static === true && test.generated !== true) {
                    const lvp = _positioning.getLastValidPosition.call(inputmask2, pos), nextPos = _positioning.seekNext.call(inputmask2, lvp);
                    return (returnPL ? pos <= nextPos : pos < nextPos) ? _validation.casing.call(inputmask2, opts.staticDefinitionSymbol && test.static ? test.nativeDef : test.def, test, pos) : typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
                  } else {
                    return typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
                  }
                } else if (test.static === true) {
                  if (pos > -1 && maskset.validPositions[pos] === void 0) {
                    let tests = getTests.call(inputmask2, pos), staticAlternations = [], prevTest;
                    if (typeof opts.placeholder === "string" && tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                      for (let i = 0; i < tests.length; i++) {
                        if (tests[i].match.def !== "" && tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.static === true || prevTest === void 0 || tests[i].match.fn.test(prevTest.match.def, maskset, pos, true, opts) !== false)) {
                          staticAlternations.push(tests[i]);
                          if (tests[i].match.static === true) prevTest = tests[i];
                          if (staticAlternations.length > 1) {
                            if (/[0-9a-zA-Z]/.test(staticAlternations[0].match.def)) {
                              return opts.placeholder.charAt(pos % opts.placeholder.length);
                            }
                          }
                        }
                      }
                    }
                  }
                  return test.def;
                }
                return typeof opts.placeholder === "object" ? test.def : opts.placeholder.charAt(pos % opts.placeholder.length);
              }
              function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
                const inputmask2 = this, opts = this.opts, maskset = this.maskset, greedy = opts.greedy, maskTemplate = [];
                if (clearOptionalTail && opts.greedy) {
                  opts.greedy = false;
                  inputmask2.maskset.tests = {};
                }
                minimalPos = minimalPos || 0;
                let ndxIntlzr, pos = 0, test, testPos, jitRenderStatic;
                do {
                  if (baseOnInput === true && maskset.validPositions[pos]) {
                    testPos = clearOptionalTail && maskset.validPositions[pos].match.optionality && maskset.validPositions[pos + 1] === void 0 && (maskset.validPositions[pos].generatedInput === true || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate.call(inputmask2, pos, getTests.call(inputmask2, pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos];
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask2, pos, test));
                  } else {
                    testPos = getTestTemplate.call(inputmask2, pos, ndxIntlzr, pos - 1);
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    const jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
                    jitRenderStatic = (jitRenderStatic || maskset.validPositions[pos - 1]) && test.static && test.def !== opts.groupSeparator && test.fn === null;
                    if (jitRenderStatic || jitMasking === false || jitMasking === void 0 || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
                      maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask2, maskTemplate.length, test));
                    } else {
                      jitRenderStatic = false;
                    }
                  }
                  pos++;
                } while (test.static !== true || test.def !== "" || minimalPos > pos);
                if (maskTemplate[maskTemplate.length - 1] === "") {
                  maskTemplate.pop();
                }
                if (includeMode !== false || // do not alter the masklength when just retrieving the maskdefinition
                maskset.maskLength === void 0) {
                  maskset.maskLength = pos - 1;
                }
                opts.greedy = greedy;
                return maskTemplate;
              }
              function getTestTemplate(pos, ndxIntlzr, tstPs) {
                const inputmask2 = this, maskset = this.maskset;
                return maskset.validPositions[pos] || determineTestTemplate.call(inputmask2, pos, getTests.call(inputmask2, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
              }
              function determineTestTemplate(pos, tests) {
                const inputmask2 = this, opts = inputmask2.opts, optionalityLevel = determineOptionalityLevel(pos, tests);
                pos = pos > 0 ? pos - 1 : 0;
                const longestLocator = Math.max(...tests.map((tst) => tst.locator === void 0 ? 0 : tst.locator.length)), prevTest = getTest.call(inputmask2, pos), prevLocator = getLocator(prevTest, longestLocator);
                let lenghtOffset = 0, tstLocator, closest, bestMatch;
                if (opts.greedy && tests.length > 1 && tests[tests.length - 1].match.def === "") lenghtOffset = 1;
                for (let ndx = 0; ndx < tests.length - lenghtOffset; ndx++) {
                  const tst = tests[ndx];
                  tstLocator = getLocator(tst, longestLocator);
                  const distance = Number(tstLocator) - Number(prevLocator);
                  if (tst.unMatchedAlternationStopped !== true || tests.filter((tst2) => tst2.unMatchedAlternationStopped !== true).length <= 1) {
                    if (closest === void 0 || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.optionality - optionalityLevel > 0 && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || tst.match.optionality - optionalityLevel < 1 || !tst.match.newBlockMarker) || bestMatch && !opts.greedy && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
                      closest = distance;
                      bestMatch = tst;
                    }
                  }
                }
                return bestMatch;
              }
              function determineOptionalityLevel(pos, tests) {
                let optionalityLevel = 0, differentOptionalLevels = false;
                tests.forEach((test) => {
                  if (test.match.optionality) {
                    if (optionalityLevel !== 0 && optionalityLevel !== test.match.optionality) differentOptionalLevels = true;
                    if (optionalityLevel === 0 || optionalityLevel > test.match.optionality) {
                      optionalityLevel = test.match.optionality;
                    }
                  }
                });
                if (optionalityLevel) {
                  if (pos == 0) optionalityLevel = 0;
                  else if (tests.length == 1) optionalityLevel = 0;
                  else if (!differentOptionalLevels) optionalityLevel = 0;
                }
                return optionalityLevel;
              }
              function getTest(pos, tests) {
                const inputmask2 = this, maskset = this.maskset;
                if (maskset.validPositions[pos]) {
                  return maskset.validPositions[pos];
                }
                return (tests || getTests.call(inputmask2, pos))[0];
              }
              function isSubsetOf(source, target, opts) {
                function expand(pattern) {
                  let expanded = [], start = -1, end;
                  for (let i = 0, l = pattern.length; i < l; i++) {
                    if (pattern.charAt(i) === "-") {
                      end = pattern.charCodeAt(i + 1);
                      while (++start < end) expanded.push(String.fromCharCode(start));
                    } else {
                      start = pattern.charCodeAt(i);
                      expanded.push(pattern.charAt(i));
                    }
                  }
                  return expanded.join("");
                }
                if (source.match.def === target.match.nativeDef) return true;
                if ((opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) && source.match.static !== true && target.match.static !== true) {
                  if (target.match.fn.source === ".") return true;
                  return expand(target.match.fn.source.replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.source.replace(/[[\]/]/g, ""))) !== -1;
                }
                return false;
              }
              function getTests(pos, ndxIntlzr, tstPs) {
                let inputmask2 = this, $ = this.dependencyLib, maskset = this.maskset, opts = this.opts, el = this.el, maskTokens = maskset.maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0], matches = [], insertStop = false, insertStopFromAlternation = false, latestMatch, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "", unMatchedAlternation = false;
                function resolveTestFromToken(maskToken, ndxInitializer2, loopNdx, quantifierRecurse) {
                  function handleMatch(match, loopNdx2, quantifierRecurse2) {
                    function isFirstMatch(latestMatch2, tokenGroup) {
                      let firstMatch = tokenGroup.matches.indexOf(latestMatch2) === 0;
                      if (!firstMatch) {
                        tokenGroup.matches.every(function(match2, ndx) {
                          if (match2.isQuantifier === true) {
                            firstMatch = isFirstMatch(latestMatch2, tokenGroup.matches[ndx - 1]);
                          } else if (Object.prototype.hasOwnProperty.call(match2, "matches")) {
                            firstMatch = isFirstMatch(latestMatch2, match2);
                          }
                          if (firstMatch) {
                            if (tokenGroup.matches[ndx + 1] && tokenGroup.matches[ndx + 1].isQuantifier) {
                              firstMatch = ndx === 0;
                            }
                            return false;
                          }
                          return true;
                        });
                      }
                      return firstMatch;
                    }
                    function resolveNdxInitializer(pos2, alternateNdx, targetAlternation) {
                      let bestMatch, distance, locator, newAlternateMloc, alternateMloc = `${alternateNdx}:${targetAlternation}`;
                      if (maskset.tests[pos2] || maskset.validPositions[pos2]) {
                        (maskset.validPositions[pos2] ? [maskset.validPositions[pos2]] : maskset.tests[pos2]).every(function(lmnt, ndx) {
                          if (lmnt.mloc[alternateMloc]) {
                            bestMatch = lmnt;
                            return false;
                          }
                          const mlocMatches = Object.values(lmnt.mloc).filter(
                            // eslint-disable-next-line eqeqeq
                            (m) => m[targetAlternation] == alternateNdx
                          );
                          mlocMatches.every((mlocMatch) => {
                            let mlocMatchL = mlocMatch.join("").split(":")[0];
                            locator = locator || mlocMatchL;
                            while (mlocMatchL.length < locator.length) mlocMatchL += "0";
                            const mlocDistance = Number(mlocMatchL);
                            if (bestMatch === void 0 || mlocDistance < distance) {
                              distance = mlocDistance;
                              bestMatch = lmnt;
                              newAlternateMloc = Object.entries(lmnt.mloc).find((entry) => entry[1].toString() === mlocMatch.toString())[0];
                            }
                            return true;
                          });
                          return true;
                        });
                      }
                      if (bestMatch) {
                        if (targetAlternation === void 0) {
                          alternateMloc = `${alternateNdx}:${bestMatch.alternation}`;
                        }
                        const bestMatchAltIndex = `${bestMatch.locator[bestMatch.alternation]}:${bestMatch.alternation}`, slocator = bestMatch.mloc[newAlternateMloc || alternateMloc] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                        if (slocator[slocator.length - 1].toString().indexOf(":") !== -1) {
                          const alternation = slocator.pop();
                        }
                        const sliceStart = parseInt(
                          // newAlternateMloc
                          //   ? newAlternateMloc.split(":")[1]
                          //   : targetAlternation ||
                          bestMatch.alternation
                        ) + 1;
                        return slocator.slice(sliceStart);
                      } else {
                        return targetAlternation !== void 0 ? resolveNdxInitializer(pos2, alternateNdx) : void 0;
                      }
                    }
                    function staticCanMatchDefinition(source, target) {
                      return source.match.static === true && target.match.static !== true ? target.match.fn.test(source.match.def, maskset, pos, false, opts, false) : false;
                    }
                    function setMergeLocators(targetMatch, altMatch) {
                      function mergeLoc(altNdx) {
                        targetMatch.mloc = targetMatch.mloc || {};
                        let locNdx = targetMatch.locator[altNdx];
                        if (locNdx === void 0) {
                          targetMatch.alternation = void 0;
                        } else {
                          if (altMatch === void 0) {
                            if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
                            locNdx = `${locNdx}:${altNdx}`;
                            if (targetMatch.mloc[locNdx] === void 0) {
                              targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                              targetMatch.mloc[locNdx].push(`:${altNdx}`);
                            }
                          } else {
                            let offset = 0;
                            for (const ndx in altMatch.mloc) {
                              if (targetMatch.mloc[ndx] === void 0) {
                                targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                              } else {
                                do {
                                  if (targetMatch.mloc[ndx + offset] === void 0) {
                                    targetMatch.mloc[ndx + offset] = altMatch.mloc[ndx];
                                    break;
                                  }
                                } while (targetMatch.mloc[ndx + offset++] !== void 0);
                              }
                            }
                            targetMatch.locator = mergeLocators(testPos, [targetMatch, altMatch]);
                          }
                          if (targetMatch.alternation > altNdx) {
                            targetMatch.alternation = altNdx;
                          }
                          return true;
                        }
                        return false;
                      }
                      let alternationNdx = targetMatch.alternation, shouldMerge = altMatch === void 0 || alternationNdx <= altMatch.alternation && targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]) === -1;
                      if (!shouldMerge && alternationNdx > altMatch.alternation) {
                        for (let i = 0; i < alternationNdx; i++) {
                          if (targetMatch.locator[i] !== altMatch.locator[i]) {
                            alternationNdx = i;
                            shouldMerge = true;
                            break;
                          }
                        }
                      }
                      if (shouldMerge) {
                        return mergeLoc(alternationNdx);
                      }
                      return false;
                    }
                    function handleGroup() {
                      match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx2, quantifierRecurse2);
                      if (match) return true;
                    }
                    function handleOptional() {
                      const optionalToken = match, mtchsNdx = matches.length;
                      match = resolveTestFromToken(match, ndxInitializer2, loopNdx2, quantifierRecurse2);
                      if (matches.length > 0) {
                        matches.forEach(function(mtch, ndx) {
                          if (ndx >= mtchsNdx) {
                            mtch.match.optionality = mtch.match.optionality ? mtch.match.optionality + 1 : 1;
                          }
                        });
                        latestMatch = matches[matches.length - 1].match;
                        if (quantifierRecurse2 === void 0 && isFirstMatch(latestMatch, optionalToken)) {
                          insertStop = true;
                          testPos = pos;
                        } else {
                          return match;
                        }
                      }
                    }
                    function handleAlternator() {
                      function calculateMatchesLength(matches2) {
                        let matchesLength = 0;
                        for (let ndx = 0; ndx < matches2.length; ndx++) {
                          const match2 = matches2[ndx];
                          if (match2.isQuantifier && !isNaN(match2.quantifier.max)) {
                            matchesLength += match2.quantifier.max;
                          } else {
                            matchesLength++;
                          }
                        }
                        return matchesLength;
                      }
                      function isUnmatchedAlternation(alternateToken2) {
                        const matchesLength = alternateToken2.matches[0].matches ? calculateMatchesLength(alternateToken2.matches[0].matches) : 1;
                        let matchesNewLength;
                        for (let alndx = 0; alndx < alternateToken2.matches.length; alndx++) {
                          matchesNewLength = alternateToken2.matches[alndx].matches ? calculateMatchesLength(alternateToken2.matches[alndx].matches) : 1;
                          if (matchesLength !== matchesNewLength) {
                            break;
                          }
                        }
                        return matchesLength !== matchesNewLength;
                      }
                      inputmask2.hasAlternator = true;
                      const alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx2.length, altIndex = ndxInitializer2.length > 0 ? ndxInitializer2.shift() : -1;
                      let maltMatches;
                      if (altIndex === -1 || typeof altIndex === "string") {
                        const currentPos = testPos, ndxInitializerClone = ndxInitializer2.slice();
                        let altIndexArr = [], amndx;
                        if (typeof altIndex === "string") {
                          altIndexArr = altIndex.split(",");
                        } else {
                          for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                            altIndexArr.push(amndx.toString());
                          }
                        }
                        if (maskset.excludes[pos] !== void 0) {
                          const altIndexArrClone = altIndexArr.slice();
                          for (let i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                            const excludeSet = maskset.excludes[pos][i].toString().split(":");
                            if (loopNdx2.length == excludeSet[1]) {
                              altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                            }
                          }
                          if (altIndexArr.length === 0) {
                            delete maskset.excludes[pos];
                            altIndexArr = altIndexArrClone;
                          }
                        }
                        if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
                        for (let ndx = 0; ndx < altIndexArr.length; ndx++) {
                          amndx = parseInt(altIndexArr[ndx]);
                          matches = [];
                          ndxInitializer2 = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
                          const tokenMatch = alternateToken.matches[amndx];
                          if (tokenMatch && handleMatch(tokenMatch, [amndx].concat(loopNdx2), quantifierRecurse2)) {
                            match = true;
                          } else {
                            unMatchedAlternation = isUnmatchedAlternation(alternateToken);
                            if (tokenMatch && tokenMatch.matches && tokenMatch.matches.length > alternateToken.matches[0].matches.length) {
                              break;
                            }
                          }
                          maltMatches = matches.slice();
                          testPos = currentPos;
                          matches = [];
                          for (let ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                            let altMatch = maltMatches[ndx1], dropMatch = false;
                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                            setMergeLocators(altMatch);
                            for (let ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                              const altMatch2 = malternateMatches[ndx2];
                              if (typeof altIndex !== "string" || altMatch.alternation !== void 0 && altIndex.indexOf(altMatch.locator[altMatch.alternation].toString()) !== -1) {
                                if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                  dropMatch = true;
                                  setMergeLocators(altMatch2, altMatch);
                                  break;
                                } else if (isSubsetOf(altMatch, altMatch2, opts)) {
                                  if (setMergeLocators(altMatch, altMatch2)) {
                                    dropMatch = true;
                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                  }
                                  break;
                                } else if (isSubsetOf(altMatch2, altMatch, opts)) {
                                  setMergeLocators(altMatch2, altMatch);
                                  break;
                                } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                  if (setMergeLocators(altMatch, altMatch2)) {
                                    dropMatch = true;
                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                  }
                                  break;
                                } else if (staticCanMatchDefinition(altMatch2, altMatch)) {
                                  setMergeLocators(altMatch2, altMatch);
                                  if (altMatch2.match.optionality && el.inputmask.userOptions.keepStatic === void 0) {
                                    opts.keepStatic = currentPos;
                                  }
                                  break;
                                }
                              }
                            }
                            if (!dropMatch) {
                              malternateMatches.push(altMatch);
                            }
                          }
                        }
                        matches = currentMatches.concat(malternateMatches);
                        testPos = pos;
                        insertStop = insertStop || matches.length > 0 && unMatchedAlternation;
                        if (!unMatchedAlternation && insertStop) insertStopFromAlternation = true;
                        match = malternateMatches.length > 0 && !unMatchedAlternation;
                        if (unMatchedAlternation && insertStop && !match) {
                          matches.forEach(function(mtch, ndx) {
                            mtch.unMatchedAlternationStopped = true;
                          });
                        }
                        ndxInitializer2 = ndxInitializerClone.slice();
                      } else {
                        match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx2), quantifierRecurse2);
                      }
                      if (match) {
                        return true;
                      }
                    }
                    function handleQuantifier() {
                      const qt = match;
                      let breakloop = false;
                      for (let qndx = ndxInitializer2.length > 0 ? ndxInitializer2.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                        const tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
                        match = handleMatch(tokenGroup, [qndx].concat(loopNdx2), tokenGroup);
                        if (match) {
                          matches.forEach(function(mtch, ndx) {
                            if (IsMatchOf(tokenGroup, mtch.match)) latestMatch = mtch.match;
                            else latestMatch = matches[matches.length - 1].match;
                            latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
                            latestMatch.jit = (qndx + 1) * (tokenGroup.matches.indexOf(latestMatch) + 1) > qt.quantifier.jit;
                            if ((latestMatch.optionalQuantifier || latestMatch.optionality) && isFirstMatch(latestMatch, tokenGroup)) {
                              insertStop = true;
                              testPos = pos;
                              if (opts.greedy && maskset.validPositions[pos - 1] == void 0 && qndx > qt.quantifier.min && ["*", "+"].indexOf(qt.quantifier.max) != -1) {
                                matches.pop();
                                cacheDependency = void 0;
                              }
                              breakloop = true;
                              match = false;
                            }
                            if (!breakloop && latestMatch.jit) {
                              maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch);
                            }
                          });
                          if (breakloop) break;
                          return true;
                        }
                      }
                    }
                    if (testPos > pos + opts._maxTestPos) {
                      throw new Error(`Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ${maskset.mask}`);
                    }
                    if (testPos === pos && match.matches === void 0) {
                      matches.push({
                        match,
                        locator: loopNdx2.reverse(),
                        cd: cacheDependency,
                        mloc: {}
                      });
                      if (match.optionality && quantifierRecurse2 === void 0 && (opts.definitions && opts.definitions[match.nativeDef] && opts.definitions[match.nativeDef].optional || _inputmask.default.prototype.definitions[match.nativeDef] && _inputmask.default.prototype.definitions[match.nativeDef].optional)) {
                        insertStop = true;
                        testPos = pos;
                      } else {
                        return true;
                      }
                    } else if (match.matches !== void 0) {
                      if (match.isGroup && quantifierRecurse2 !== match) {
                        return handleGroup();
                      } else if (match.isOptional) {
                        return handleOptional();
                      } else if (match.isAlternator) {
                        return handleAlternator();
                      } else if (match.isQuantifier && quantifierRecurse2 !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) {
                        return handleQuantifier();
                      } else {
                        match = resolveTestFromToken(match, ndxInitializer2, loopNdx2, quantifierRecurse2);
                        if (match) return true;
                      }
                    } else {
                      testPos++;
                    }
                  }
                  for (let tndx = ndxInitializer2.length > 0 ? ndxInitializer2.shift() : 0; tndx < maskToken.matches.length; tndx++) {
                    if (maskToken.matches[tndx].isQuantifier !== true) {
                      const match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                      if (match && testPos === pos) {
                        return match;
                      } else if (testPos > pos) {
                        break;
                      }
                    }
                  }
                }
                function IsMatchOf(tokenGroup, match) {
                  let isMatch = tokenGroup.matches.indexOf(match) != -1;
                  if (!isMatch) {
                    tokenGroup.matches.forEach((mtch, ndx) => {
                      if (mtch.matches !== void 0 && !isMatch) {
                        isMatch = IsMatchOf(mtch, match);
                      }
                    });
                  }
                  return isMatch;
                }
                function mergeLocators(pos2, tests) {
                  let locator = [];
                  if (!Array.isArray(tests)) tests = [tests];
                  if (tests.length > 0) {
                    if (tests[0].alternation === void 0 || opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && pos2 >= opts.keepStatic) {
                      locator = determineTestTemplate.call(inputmask2, pos2, tests.slice()).locator.slice();
                      if (locator.length === 0) locator = tests[0].locator.slice();
                    } else {
                      tests.forEach((mtch) => {
                        Object.values(mtch.mloc).forEach((mloc) => {
                          mloc.forEach((loc, locNdx) => {
                            const mergedPos = locator[locNdx];
                            if (loc.toString().includes(":") || mergedPos && mergedPos.toString().includes(":")) return;
                            if (mergedPos === void 0) {
                              locator[locNdx] = loc;
                            } else if (!mergedPos.toString().includes(loc)) {
                              locator[locNdx] = locator[locNdx] + "," + loc;
                            }
                          });
                        });
                      });
                    }
                  }
                  return locator;
                }
                if (pos > -1) {
                  if (ndxIntlzr === void 0) {
                    let previousPos = pos - 1, test;
                    while ((test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) === void 0 && previousPos > -1) {
                      previousPos--;
                    }
                    if (test !== void 0 && previousPos > -1) {
                      ndxInitializer = mergeLocators(previousPos, test);
                      cacheDependency = ndxInitializer.join("");
                      testPos = previousPos;
                    }
                  }
                  if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) {
                    return maskset.tests[pos];
                  }
                  for (let mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    const match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                    if (match && testPos === pos || testPos > pos) {
                      break;
                    }
                  }
                }
                if (matches.length === 0 || insertStop) {
                  matches.push({
                    match: {
                      fn: null,
                      static: true,
                      optionality: false,
                      casing: null,
                      def: "",
                      placeholder: ""
                    },
                    // mark when there are unmatched alternations  ex: mask: "(a|aa)"
                    // this will result in the least distance to select the correct test result in determineTestTemplate
                    locator: unMatchedAlternation && matches.filter((tst) => tst.unMatchedAlternationStopped !== true).length === 0 ? [0] : insertStopFromAlternation && matches.length > 0 && matches.filter((tst) => !tst.match.static).every((tst) => tst.match.optionalQuantifier) ? [0] : [],
                    mloc: {},
                    cd: cacheDependency
                  });
                }
                let result;
                if (ndxIntlzr !== void 0 && maskset.tests[pos]) {
                  result = $.extend(true, [], matches);
                } else {
                  maskset.tests[pos] = $.extend(true, [], matches);
                  result = maskset.tests[pos];
                }
                matches.forEach((t) => {
                  t.match.optionality = t.match.defOptionality || false;
                });
                return result;
              }
            },
            /* 23 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.mask = mask;
              var _environment = __webpack_require__2(17);
              var _eventhandlers = __webpack_require__2(18);
              var _eventruler = __webpack_require__2(15);
              var _inputHandling = __webpack_require__2(16);
              var _positioning = __webpack_require__2(20);
              var _validation = __webpack_require__2(21);
              function mask() {
                const inputmask2 = this, opts = this.opts, el = this.el, $ = this.dependencyLib;
                function isElementTypeSupported(input, opts2) {
                  function patchValueProperty(npt) {
                    let valueGet, valueSet;
                    function patchValhook(type) {
                      if ($.valHooks && ($.valHooks[type] === void 0 || $.valHooks[type].inputmaskpatch !== true)) {
                        const valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                          return elem.value;
                        }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                          elem.value = value;
                          return elem;
                        };
                        $.valHooks[type] = {
                          get: function(elem) {
                            if (elem.inputmask) {
                              if (elem.inputmask.opts.autoUnmask) {
                                return elem.inputmask.unmaskedvalue();
                              } else {
                                const result = valhookGet(elem);
                                return _positioning.getLastValidPosition.call(inputmask2, void 0, void 0, elem.inputmask.maskset.validPositions) !== -1 || opts2.nullable !== true ? result : "";
                              }
                            } else {
                              return valhookGet(elem);
                            }
                          },
                          set: function(elem, value) {
                            const result = valhookSet(elem, value);
                            if (elem.inputmask) {
                              (0, _inputHandling.applyInputValue)(elem, value);
                            }
                            return result;
                          },
                          inputmaskpatch: true
                        };
                      }
                    }
                    function getter() {
                      if (this.inputmask) {
                        return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : _positioning.getLastValidPosition.call(inputmask2) !== -1 || opts2.nullable !== true ? this.getRootNode().activeElement === this && opts2.clearMaskOnLostFocus ? (inputmask2.isRTL ? _inputHandling.clearOptionalTail.call(inputmask2, _positioning.getBuffer.call(inputmask2).slice()).reverse() : _inputHandling.clearOptionalTail.call(inputmask2, _positioning.getBuffer.call(inputmask2).slice())).join("") : valueGet.call(this) : "";
                      } else {
                        return valueGet.call(this);
                      }
                    }
                    function setter(value) {
                      valueSet.call(this, value);
                      if (this.inputmask) {
                        (0, _inputHandling.applyInputValue)(this, value);
                      }
                    }
                    function installNativeValueSetFallback(npt2) {
                      _eventruler.EventRuler.on(npt2, "mouseenter", function() {
                        const input2 = this, value = input2.inputmask._valueGet(true), bufferValue = (input2.inputmask.isRTL ? _positioning.getBuffer.call(input2.inputmask).slice().reverse() : _positioning.getBuffer.call(input2.inputmask)).join("");
                        if (value != bufferValue) {
                          (0, _inputHandling.applyInputValue)(input2, value);
                        }
                      });
                    }
                    if (!npt.inputmask.__valueGet) {
                      if (opts2.noValuePatching !== true) {
                        if (Object.getOwnPropertyDescriptor) {
                          const valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                          if (valueProperty && valueProperty.get && valueProperty.set) {
                            valueGet = valueProperty.get;
                            valueSet = valueProperty.set;
                            Object.defineProperty(npt, "value", {
                              get: getter,
                              set: setter,
                              configurable: true
                            });
                          } else if (npt.tagName.toLowerCase() !== "input") {
                            valueGet = function() {
                              return this.textContent;
                            };
                            valueSet = function(value) {
                              this.textContent = value;
                            };
                            Object.defineProperty(npt, "value", {
                              get: getter,
                              set: setter,
                              configurable: true
                            });
                          }
                        } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                          valueGet = npt.__lookupGetter__("value");
                          valueSet = npt.__lookupSetter__("value");
                          npt.__defineGetter__("value", getter);
                          npt.__defineSetter__("value", setter);
                        }
                        npt.inputmask.__valueGet = valueGet;
                        npt.inputmask.__valueSet = valueSet;
                      }
                      npt.inputmask._valueGet = function(overruleRTL) {
                        return inputmask2.isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                      };
                      npt.inputmask._valueSet = function(value, overruleRTL) {
                        valueSet.call(this.el, value === null || value === void 0 ? "" : overruleRTL !== true && inputmask2.isRTL ? value.split("").reverse().join("") : value);
                      };
                      if (valueGet === void 0) {
                        valueGet = function() {
                          return this.value;
                        };
                        valueSet = function(value) {
                          this.value = value;
                        };
                        patchValhook(npt.type);
                        installNativeValueSetFallback(npt);
                      }
                    }
                  }
                  const elementType = input.getAttribute("type");
                  let isSupported2 = input.tagName.toLowerCase() === "input" && opts2.supportsInputType.includes(elementType) || input.isContentEditable || input.tagName.toLowerCase() === "textarea";
                  if (!isSupported2) {
                    if (input.tagName.toLowerCase() === "input") {
                      let el2 = document.createElement("input");
                      el2.setAttribute("type", elementType);
                      isSupported2 = el2.type === "text";
                      el2 = null;
                    } else {
                      isSupported2 = "partial";
                    }
                  }
                  if (isSupported2 !== false) {
                    patchValueProperty(input);
                  } else {
                    input.inputmask = void 0;
                  }
                  return isSupported2;
                }
                _eventruler.EventRuler.off(el);
                const isSupported = isElementTypeSupported(el, opts);
                if (isSupported !== false) {
                  inputmask2.originalPlaceholder = el.placeholder;
                  inputmask2.maxLength = el !== void 0 ? el.maxLength : void 0;
                  if (inputmask2.maxLength === -1) inputmask2.maxLength = void 0;
                  if ("inputMode" in el && el.getAttribute("inputmode") === null) {
                    el.inputMode = opts.inputmode;
                    el.setAttribute("inputmode", opts.inputmode);
                  }
                  if (isSupported === true) {
                    opts.showMaskOnFocus = opts.showMaskOnFocus && ["cc-number", "cc-exp"].indexOf(el.autocomplete) === -1;
                    if (_environment.iphone) {
                      opts.insertModeVisual = false;
                      el.setAttribute("autocorrect", "off");
                    }
                    _eventruler.EventRuler.on(el, "submit", _eventhandlers.EventHandlers.submitEvent);
                    _eventruler.EventRuler.on(el, "reset", _eventhandlers.EventHandlers.resetEvent);
                    _eventruler.EventRuler.on(el, "blur", _eventhandlers.EventHandlers.blurEvent);
                    _eventruler.EventRuler.on(el, "focus", _eventhandlers.EventHandlers.focusEvent);
                    _eventruler.EventRuler.on(el, "invalid", _eventhandlers.EventHandlers.invalidEvent);
                    _eventruler.EventRuler.on(el, "click", _eventhandlers.EventHandlers.clickEvent);
                    _eventruler.EventRuler.on(el, "mouseleave", _eventhandlers.EventHandlers.mouseleaveEvent);
                    _eventruler.EventRuler.on(el, "mouseenter", _eventhandlers.EventHandlers.mouseenterEvent);
                    _eventruler.EventRuler.on(el, "paste", _eventhandlers.EventHandlers.pasteEvent);
                    _eventruler.EventRuler.on(el, "cut", _eventhandlers.EventHandlers.cutEvent);
                    _eventruler.EventRuler.on(el, "complete", opts.oncomplete);
                    _eventruler.EventRuler.on(el, "incomplete", opts.onincomplete);
                    _eventruler.EventRuler.on(el, "cleared", opts.oncleared);
                    if (opts.inputEventOnly !== true) {
                      _eventruler.EventRuler.on(el, "keydown", _eventhandlers.EventHandlers.keyEvent);
                    }
                    if (_environment.mobile || opts.inputEventOnly) {
                      el.removeAttribute("maxLength");
                    }
                    _eventruler.EventRuler.on(el, "input", _eventhandlers.EventHandlers.inputFallBackEvent);
                  }
                  _eventruler.EventRuler.on(el, "setvalue", _eventhandlers.EventHandlers.setValueEvent);
                  inputmask2.applyMaskHook === void 0 || inputmask2.applyMaskHook();
                  _positioning.getBufferTemplate.call(inputmask2).join("");
                  inputmask2.undoValue = inputmask2._valueGet(true);
                  const activeElement = el.getRootNode().activeElement;
                  if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || activeElement === el) {
                    (0, _inputHandling.applyInputValue)(el, el.inputmask._valueGet(true));
                    let buffer = _positioning.getBuffer.call(inputmask2).slice();
                    if (_validation.isComplete.call(inputmask2, buffer) === false) {
                      if (opts.clearIncomplete) {
                        _positioning.resetMaskSet.call(inputmask2, false);
                      }
                    }
                    if (opts.clearMaskOnLostFocus && activeElement !== el) {
                      if (_positioning.getLastValidPosition.call(inputmask2) === -1) {
                        buffer = [];
                      } else {
                        _inputHandling.clearOptionalTail.call(inputmask2, buffer);
                      }
                    }
                    if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && activeElement === el || el.inputmask._valueGet(true) !== "") {
                      (0, _inputHandling.writeBuffer)(el, buffer);
                    }
                    if (activeElement === el) {
                      _positioning.caret.call(inputmask2, el, _positioning.seekNext.call(inputmask2, _positioning.getLastValidPosition.call(inputmask2)));
                    } else {
                      _positioning.caret.call(inputmask2, el, 0);
                    }
                  }
                }
              }
            },
            /* 24 */
            /***/
            function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.analyseMask = analyseMask;
              exports2.generateMaskSet = generateMaskSet;
              var _inputmask = _interopRequireDefault(__webpack_require__2(10));
              var _escapeRegex = __webpack_require__2(25);
              var _inputmask2 = _interopRequireDefault(__webpack_require__2(7));
              var _masktoken = _interopRequireDefault(__webpack_require__2(26));
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              function generateMaskSet(opts, nocache) {
                let ms;
                function preProcessMask(mask, {
                  repeat,
                  groupmarker,
                  quantifiermarker,
                  keepStatic
                }) {
                  if (repeat > 0 || repeat === "*" || repeat === "+") {
                    const repeatStart = repeat === "*" ? 0 : repeat === "+" ? 1 : repeat;
                    if (repeatStart !== repeat) {
                      mask = groupmarker[0] + mask + groupmarker[1] + quantifiermarker[0] + repeatStart + "," + repeat + quantifiermarker[1];
                    } else {
                      const msk = mask;
                      for (let i = 1; i < repeatStart; i++) {
                        mask += msk;
                      }
                    }
                  }
                  if (keepStatic === true) {
                    const optionalRegex = "(.)\\[([^\\]]*)\\]", maskMatches = mask.match(new RegExp(optionalRegex, "g"));
                    maskMatches && maskMatches.forEach((m, i) => {
                      let [p1, p2] = m.split("[");
                      p2 = p2.replace("]", "");
                      mask = mask.replace(new RegExp(`${(0, _escapeRegex.escapeRegex)(p1)}\\[${(0, _escapeRegex.escapeRegex)(p2)}\\]`), p1.charAt(0) === p2.charAt(0) ? `(${p1}|${p1}${p2})` : `${p1}[${p2}]`);
                    });
                  }
                  return mask;
                }
                function generateMask(mask, metadata, opts2) {
                  let regexMask = false;
                  if (mask === null || mask === "") {
                    regexMask = opts2.regex !== null;
                    if (regexMask) {
                      mask = opts2.regex;
                      mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
                    } else {
                      regexMask = true;
                      mask = ".*";
                    }
                  }
                  if (mask.length === 1 && opts2.greedy === false && opts2.repeat !== 0) {
                    opts2.placeholder = "";
                  }
                  mask = preProcessMask(mask, opts2);
                  let masksetDefinition, maskdefKey;
                  maskdefKey = regexMask ? "regex_" + opts2.regex : opts2.numericInput ? mask.split("").reverse().join("") : mask;
                  if (opts2.keepStatic !== null) {
                    maskdefKey = "ks_" + opts2.keepStatic + maskdefKey;
                  }
                  if (typeof opts2.placeholder === "object") {
                    maskdefKey = "ph_" + JSON.stringify(opts2.placeholder) + maskdefKey;
                  }
                  if (_inputmask2.default.prototype.masksCache[maskdefKey] === void 0 || nocache === true) {
                    masksetDefinition = {
                      mask,
                      maskToken: _inputmask2.default.prototype.analyseMask(mask, regexMask, opts2),
                      validPositions: [],
                      _buffer: void 0,
                      buffer: void 0,
                      tests: {},
                      excludes: {},
                      // excluded alternations
                      metadata,
                      maskLength: void 0,
                      jitOffset: {}
                    };
                    if (nocache !== true) {
                      _inputmask2.default.prototype.masksCache[maskdefKey] = masksetDefinition;
                      masksetDefinition = _inputmask.default.extend(true, {}, _inputmask2.default.prototype.masksCache[maskdefKey]);
                    }
                  } else {
                    masksetDefinition = _inputmask.default.extend(true, {}, _inputmask2.default.prototype.masksCache[maskdefKey]);
                  }
                  return masksetDefinition;
                }
                if (typeof opts.mask === "function") {
                  opts.mask = opts.mask(opts);
                }
                if (Array.isArray(opts.mask)) {
                  if (opts.mask.length > 1) {
                    if (opts.keepStatic === null) {
                      opts.keepStatic = true;
                    }
                    let altMask = opts.groupmarker[0];
                    (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function(msk) {
                      if (altMask.length > 1) {
                        altMask += opts.alternatormarker;
                      }
                      if (msk.mask !== void 0 && typeof msk.mask !== "function") {
                        altMask += msk.mask;
                      } else {
                        altMask += msk;
                      }
                    });
                    altMask += opts.groupmarker[1];
                    return generateMask(altMask, opts.mask, opts);
                  } else {
                    opts.mask = opts.mask.pop();
                  }
                }
                if (opts.mask && opts.mask.mask !== void 0 && typeof opts.mask.mask !== "function") {
                  ms = generateMask(opts.mask.mask, opts.mask, opts);
                } else {
                  ms = generateMask(opts.mask, opts.mask, opts);
                }
                if (opts.keepStatic === null) {
                  opts.keepStatic = false;
                }
                return ms;
              }
              function analyseMask(mask, regexMask, opts) {
                const tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, currentToken = new _masktoken.default(), openenings = [], maskTokens = [];
                let escaped = false, match, m, openingToken, currentOpeningToken, alternator, lastMatch, closeRegexGroup = false;
                function insertTestDefinition(mtoken, element, position) {
                  position = position !== void 0 ? position : mtoken.matches.length;
                  let prevMatch = mtoken.matches[position - 1], flag = opts.casing ? "i" : "";
                  if (regexMask) {
                    if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w|\\p/i.test(element) || element === ".") {
                      if (/\\p\{.*}/i.test(element)) flag += "u";
                      mtoken.matches.splice(position++, 0, {
                        fn: new RegExp(element, flag),
                        static: false,
                        optionality: false,
                        newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== element,
                        casing: null,
                        def: element,
                        placeholder: typeof opts.placeholder === "object" ? opts.placeholder[currentToken.matches.length] : void 0,
                        nativeDef: element
                      });
                    } else {
                      if (escaped) element = element[element.length - 1];
                      element.split("").forEach(function(lmnt, ndx) {
                        prevMatch = mtoken.matches[position - 1];
                        mtoken.matches.splice(position++, 0, {
                          fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", flag) : null,
                          static: true,
                          optionality: false,
                          newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== lmnt && prevMatch.static !== true,
                          casing: null,
                          def: opts.staticDefinitionSymbol || lmnt,
                          placeholder: opts.staticDefinitionSymbol !== void 0 ? lmnt : typeof opts.placeholder === "object" ? opts.placeholder[currentToken.matches.length] : void 0,
                          nativeDef: (escaped ? "'" : "") + lmnt
                        });
                      });
                    }
                    escaped = false;
                  } else {
                    const maskdef = opts.definitions && opts.definitions[element] || opts.usePrototypeDefinitions && _inputmask2.default.prototype.definitions[element];
                    if (maskdef && !escaped) {
                      if (typeof maskdef.validator === "string" && /\\p\{.*}/i.test(maskdef.validator)) flag += "u";
                      mtoken.matches.splice(position++, 0, {
                        fn: maskdef.validator ? typeof maskdef.validator === "string" ? new RegExp(maskdef.validator, flag) : new function() {
                          this.test = maskdef.validator;
                        }() : /./,
                        static: maskdef.static || false,
                        optionality: maskdef.optional || false,
                        defOptionality: maskdef.optional || false,
                        // indicator for an optional from the definition
                        newBlockMarker: prevMatch === void 0 || maskdef.optional ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                        casing: maskdef.casing,
                        def: maskdef.definitionSymbol || element,
                        placeholder: maskdef.placeholder,
                        nativeDef: element,
                        generated: maskdef.generated
                      });
                    } else {
                      mtoken.matches.splice(position++, 0, {
                        fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", flag) : null,
                        static: true,
                        optionality: false,
                        newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== element && prevMatch.static !== true,
                        casing: null,
                        def: opts.staticDefinitionSymbol || element,
                        placeholder: opts.staticDefinitionSymbol !== void 0 ? element : void 0,
                        nativeDef: (escaped ? "'" : "") + element
                      });
                      escaped = false;
                    }
                  }
                }
                function verifyGroupMarker(maskToken) {
                  if (maskToken && maskToken.matches) {
                    maskToken.matches.forEach(function(token, ndx) {
                      const nextToken = maskToken.matches[ndx + 1];
                      if ((nextToken === void 0 || nextToken.matches === void 0 || nextToken.isQuantifier === false) && token && token.isGroup) {
                        token.isGroup = false;
                        if (!regexMask) {
                          insertTestDefinition(token, opts.groupmarker[0], 0);
                          if (token.openGroup !== true) {
                            insertTestDefinition(token, opts.groupmarker[1]);
                          }
                        }
                      }
                      verifyGroupMarker(token);
                    });
                  }
                }
                function defaultCase() {
                  if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    insertTestDefinition(currentOpeningToken, m);
                    if (currentOpeningToken.isAlternator) {
                      alternator = openenings.pop();
                      for (let mndx = 0; mndx < alternator.matches.length; mndx++) {
                        if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false;
                      }
                      if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        currentOpeningToken.matches.push(alternator);
                      } else {
                        currentToken.matches.push(alternator);
                      }
                    }
                  } else {
                    insertTestDefinition(currentToken, m);
                  }
                }
                function reverseTokens(maskToken) {
                  function reverseStatic(st) {
                    if (st === opts.optionalmarker[0]) {
                      st = opts.optionalmarker[1];
                    } else if (st === opts.optionalmarker[1]) {
                      st = opts.optionalmarker[0];
                    } else if (st === opts.groupmarker[0]) {
                      st = opts.groupmarker[1];
                    } else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
                    return st;
                  }
                  maskToken.matches = maskToken.matches.reverse();
                  for (const match2 in maskToken.matches) {
                    if (Object.prototype.hasOwnProperty.call(maskToken.matches, match2)) {
                      const intMatch = parseInt(match2);
                      if (maskToken.matches[match2].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                        const qt = maskToken.matches[match2];
                        maskToken.matches.splice(match2, 1);
                        maskToken.matches.splice(intMatch + 1, 0, qt);
                      }
                      if (maskToken.matches[match2].matches !== void 0) {
                        maskToken.matches[match2] = reverseTokens(maskToken.matches[match2]);
                      } else {
                        maskToken.matches[match2] = reverseStatic(maskToken.matches[match2]);
                      }
                    }
                  }
                  return maskToken;
                }
                function groupify(matches) {
                  const groupToken = new _masktoken.default(true);
                  groupToken.openGroup = false;
                  groupToken.matches = matches;
                  return groupToken;
                }
                function closeGroup() {
                  openingToken = openenings.pop();
                  openingToken.openGroup = false;
                  if (openingToken !== void 0) {
                    if (openenings.length > 0) {
                      currentOpeningToken = openenings[openenings.length - 1];
                      currentOpeningToken.matches.push(openingToken);
                      if (currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (let mndx = 0; mndx < alternator.matches.length; mndx++) {
                          alternator.matches[mndx].isGroup = false;
                          alternator.matches[mndx].alternatorGroup = false;
                        }
                        if (openenings.length > 0) {
                          currentOpeningToken = openenings[openenings.length - 1];
                          currentOpeningToken.matches.push(alternator);
                        } else {
                          currentToken.matches.push(alternator);
                        }
                      }
                    } else {
                      currentToken.matches.push(openingToken);
                    }
                  } else {
                    defaultCase();
                  }
                }
                function groupQuantifier(matches) {
                  let lastMatch2 = matches.pop();
                  if (lastMatch2.isQuantifier) {
                    lastMatch2 = groupify([matches.pop(), lastMatch2]);
                  }
                  return lastMatch2;
                }
                if (regexMask) {
                  opts.optionalmarker[0] = void 0;
                  opts.optionalmarker[1] = void 0;
                }
                while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
                  m = match[0];
                  if (regexMask) {
                    switch (m.charAt(0)) {
                      case "?":
                        m = "{0,1}";
                        break;
                      case "+":
                      case "*":
                        m = "{" + m + "}";
                        break;
                      case "|":
                        if (openenings.length === 0) {
                          const altRegexGroup = groupify(currentToken.matches);
                          altRegexGroup.openGroup = true;
                          openenings.push(altRegexGroup);
                          currentToken.matches = [];
                          closeRegexGroup = true;
                        }
                        break;
                    }
                    switch (m) {
                      case "\\d":
                        m = "[0-9]";
                        break;
                      case "\\p":
                        m += regexTokenizer.exec(mask)[0];
                        m += regexTokenizer.exec(mask)[0];
                        break;
                      case "(?:":
                      case "(?=":
                      case "(?!":
                      case "(?<=":
                      case "(?<!":
                        break;
                    }
                  }
                  if (escaped) {
                    defaultCase();
                    continue;
                  }
                  switch (m.charAt(0)) {
                    case "$":
                    case "^":
                      if (!regexMask) {
                        defaultCase();
                      }
                      break;
                    case opts.escapeChar:
                      escaped = true;
                      if (regexMask) defaultCase();
                      break;
                    case opts.optionalmarker[1]:
                    case opts.groupmarker[1]:
                      closeGroup();
                      break;
                    case opts.optionalmarker[0]:
                      openenings.push(new _masktoken.default(false, true));
                      break;
                    case opts.groupmarker[0]:
                      openenings.push(new _masktoken.default(true));
                      break;
                    case opts.quantifiermarker[0]:
                      {
                        const quantifier = new _masktoken.default(false, false, true);
                        m = m.replace(/[{}?]/g, "");
                        const mqj = m.split("|"), mq = mqj[0].split(",");
                        let mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]);
                        const mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]), mqJit = isNaN(mqj[1]) ? mqj[1] : parseInt(mqj[1]);
                        if (mq0 === "*" || mq0 === "+") {
                          mq0 = mq1 === "*" ? 0 : 1;
                        }
                        quantifier.quantifier = {
                          min: mq0,
                          max: mq1,
                          jit: mqJit
                        };
                        const matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
                        match = matches.pop();
                        if (!match.isGroup) {
                          match = groupify([match]);
                        }
                        matches.push(match);
                        matches.push(quantifier);
                      }
                      break;
                    case opts.alternatormarker:
                      if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        const subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                        if (currentOpeningToken.openGroup && // regexp alt syntax
                        (subToken.matches === void 0 || subToken.isGroup === false && subToken.isAlternator === false)) {
                          lastMatch = openenings.pop();
                        } else {
                          lastMatch = groupQuantifier(currentOpeningToken.matches);
                        }
                      } else {
                        lastMatch = groupQuantifier(currentToken.matches);
                      }
                      if (lastMatch.isAlternator) {
                        openenings.push(lastMatch);
                      } else {
                        if (lastMatch.alternatorGroup) {
                          alternator = openenings.pop();
                          lastMatch.alternatorGroup = false;
                        } else {
                          alternator = new _masktoken.default(false, false, false, true);
                        }
                        alternator.matches.push(lastMatch);
                        openenings.push(alternator);
                        if (lastMatch.openGroup) {
                          lastMatch.openGroup = false;
                          const alternatorGroup = new _masktoken.default(true);
                          alternatorGroup.alternatorGroup = true;
                          openenings.push(alternatorGroup);
                        }
                      }
                      break;
                    default:
                      defaultCase();
                  }
                }
                if (closeRegexGroup) closeGroup();
                while (openenings.length > 0) {
                  openingToken = openenings.pop();
                  currentToken.matches.push(openingToken);
                }
                if (currentToken.matches.length > 0) {
                  verifyGroupMarker(currentToken);
                  maskTokens.push(currentToken);
                }
                if (opts.numericInput || opts.isRTL) {
                  reverseTokens(maskTokens[0]);
                }
                return maskTokens;
              }
            },
            /* 25 */
            /***/
            function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.escapeRegex = escapeRegex;
              const escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
              function escapeRegex(str) {
                return str.replace(escapeRegexRegex, "\\$1");
              }
            },
            /* 26 */
            /***/
            function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2["default"] = _default;
              function _default(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [];
                this.openGroup = isGroup || false;
                this.alternatorGroup = false;
                this.isGroup = isGroup || false;
                this.isOptional = isOptional || false;
                this.isQuantifier = isQuantifier || false;
                this.isAlternator = isAlternator || false;
                this.quantifier = {
                  min: 1,
                  max: 1
                };
              }
            },
            /* 27 */
            /***/
            function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
              var _escapeRegex = __webpack_require__2(25);
              var _inputmask = _interopRequireDefault(__webpack_require__2(7));
              var _keycode = __webpack_require__2(19);
              var _positioning = __webpack_require__2(20);
              var _validationTests = __webpack_require__2(22);
              __webpack_require__2(28);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const $ = _inputmask.default.dependencyLib;
              class DateObject {
                constructor(mask, format, opts, inputmask2) {
                  this.mask = mask;
                  this.format = format;
                  this.opts = opts;
                  this.inputmask = inputmask2;
                  this._date = new Date(1, 0, 1);
                  this.initDateObject(mask, this.opts, this.inputmask);
                }
                get date() {
                  if (this._date === void 0) {
                    this._date = new Date(1, 0, 1);
                    this.initDateObject(void 0, this.opts, this.inputmask);
                  }
                  return this._date;
                }
                initDateObject(mask, opts, inputmask2) {
                  let match, lastNdx = -1;
                  getTokenizer(opts).lastIndex = 0;
                  while (match = getTokenizer(opts).exec(this.format)) {
                    if (match.index >= lastNdx) {
                      let dynMatches = /\d+$/.exec(match[0]), fcode = dynMatches ? match[0][0] + "x" : match[0], value;
                      if (mask !== void 0) {
                        if (dynMatches) {
                          const lastIndex = getTokenizer(opts).lastIndex, tokenMatch = getTokenMatch.call(inputmask2, match.index, opts, inputmask2 && inputmask2.maskset);
                          getTokenizer(opts).lastIndex = lastIndex;
                          value = mask.slice(0, mask.indexOf(tokenMatch.nextMatch[0]));
                        } else {
                          let targetSymbol = match[0][0], ndx = match.index;
                          while (inputmask2 && (opts.placeholder[`${match.index}'${_validationTests.getTest.call(inputmask2, ndx).match.placeholder}`] || _validationTests.getTest.call(inputmask2, ndx).match.placeholder) === targetSymbol) {
                            ndx++;
                          }
                          lastNdx = ndx;
                          const targetMatchLength = ndx - match.index;
                          value = mask.slice(0, targetMatchLength || formatcode(fcode) && formatcode(fcode)[4] || fcode.length);
                        }
                        mask = mask.slice(value.length);
                      }
                      if (Object.prototype.hasOwnProperty.call(formatCode, fcode)) {
                        this.setValue(this, value, fcode, formatcode(fcode)[2], formatcode(fcode)[1]);
                      }
                    }
                  }
                }
                setValue(dateObj, value, fcode, targetProp, dateOperation) {
                  if (value !== void 0) {
                    switch (targetProp) {
                      case "ampm":
                        dateObj[targetProp] = value;
                        dateObj["raw" + targetProp] = value.replace(/\s/g, "_");
                        break;
                      case "month":
                        if (fcode === "MMM" || fcode === "MMMM") {
                          fcode === "MMM" ? dateObj[targetProp] = pad(i18n.monthNames.slice(0, 12).findIndex((item) => value.toLowerCase() === item.toLowerCase()) + 1, 2) : dateObj[targetProp] = pad(i18n.monthNames.slice(12, 24).findIndex((item) => value.toLowerCase() === item.toLowerCase()) + 1, 2);
                          dateObj[targetProp] = dateObj[targetProp] === "00" ? "" : dateObj[targetProp].toString();
                          dateObj["raw" + targetProp] = dateObj[targetProp];
                          break;
                        }
                      default:
                        dateObj[targetProp] = value.replace(/[^0-9]/g, "0");
                        dateObj["raw" + targetProp] = value.replace(/\s/g, "_");
                    }
                  }
                  if (dateOperation !== void 0) {
                    let datavalue = dateObj[targetProp];
                    if (targetProp === "day" && parseInt(datavalue) === 29 || targetProp === "month" && parseInt(datavalue) === 2) {
                      if (parseInt(dateObj.day) === 29 && parseInt(dateObj.month) === 2 && (dateObj.year === "" || dateObj.year === void 0)) {
                        dateObj._date.setFullYear(2012, 1, 29);
                      }
                    }
                    if (targetProp === "day") {
                      useDateObject = true;
                      if (parseInt(datavalue) === 0) datavalue = 1;
                    }
                    if (targetProp === "month") useDateObject = true;
                    if (targetProp === "year") {
                      useDateObject = true;
                      if (datavalue.length < formatcode(fcode)[4]) datavalue = pad(datavalue, formatcode(fcode)[4], true);
                    }
                    if (datavalue !== "" && !isNaN(datavalue) || targetProp === "ampm") dateOperation.call(dateObj._date, datavalue);
                  }
                }
                reset() {
                  this._date = new Date(1, 0, 1);
                }
                reInit() {
                  this._date = void 0;
                  this.date;
                }
              }
              let useDateObject = false;
              const currentYear = (/* @__PURE__ */ new Date()).getFullYear(), i18n = _inputmask.default.prototype.i18n, formatCode = {
                // regex, valueSetter, type, displayformatter, #entries (optional)
                d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
                // Day of the month as digits; no leading zero for single-digit days.
                dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                  return pad(Date.prototype.getDate.call(this), 2);
                }],
                // Day of the month as digits; leading zero for single-digit days.
                ddd: [""],
                // Day of the week as a three-letter abbreviation.
                dddd: [""],
                // Day of the week as its full name.
                M: ["[1-9]|1[012]", function(val) {
                  let mval = val ? parseInt(val) : 0;
                  if (mval > 0) mval--;
                  return Date.prototype.setMonth.call(this, mval);
                }, "month", function() {
                  return Date.prototype.getMonth.call(this) + 1;
                }],
                // Month as digits; no leading zero for single-digit months.
                MM: ["0[1-9]|1[012]", function(val) {
                  let mval = val ? parseInt(val) : 0;
                  if (mval > 0) mval--;
                  return Date.prototype.setMonth.call(this, mval);
                }, "month", function() {
                  return pad(Date.prototype.getMonth.call(this) + 1, 2);
                }],
                // Month as digits; leading zero for single-digit months.
                MMM: [i18n.monthNames.slice(0, 12).join("|"), function(val) {
                  const mval = i18n.monthNames.slice(0, 12).findIndex((item) => val.toLowerCase() === item.toLowerCase());
                  return mval !== -1 ? Date.prototype.setMonth.call(this, mval) : false;
                }, "month", function() {
                  return i18n.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
                }],
                // Month as a three-letter abbreviation.
                MMMM: [i18n.monthNames.slice(12, 24).join("|"), function(val) {
                  const mval = i18n.monthNames.slice(12, 24).findIndex((item) => val.toLowerCase() === item.toLowerCase());
                  return mval !== -1 ? Date.prototype.setMonth.call(this, mval) : false;
                }, "month", function() {
                  return i18n.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
                }],
                // Month as its full name.
                yy: ["[0-9]{2}", function(val) {
                  const centuryPart = (/* @__PURE__ */ new Date()).getFullYear().toString().slice(0, 2);
                  Date.prototype.setFullYear.call(this, `${centuryPart}${val}`);
                }, "year", function() {
                  return pad(Date.prototype.getFullYear.call(this), 2);
                }, 2],
                // Year as last two digits; leading zero for years less than 10.
                yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                  return pad(Date.prototype.getFullYear.call(this), 4);
                }, 4],
                h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                // Hours; no leading zero for single-digit hours (12-hour clock).
                hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                  return pad(Date.prototype.getHours.call(this), 2);
                }],
                // Hours; leading zero for single-digit hours (12-hour clock).
                hx: [function(x) {
                  return `[0-9]{${x}}`;
                }, Date.prototype.setHours, "hours", function(x) {
                  return Date.prototype.getHours;
                }],
                // Hours; no limit; set maximum digits
                H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                // Hours; no leading zero for single-digit hours (24-hour clock).
                HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                  return pad(Date.prototype.getHours.call(this), 2);
                }],
                // Hours; leading zero for single-digit hours (24-hour clock).
                Hx: [function(x) {
                  return `[0-9]{${x}}`;
                }, Date.prototype.setHours, "hours", function(x) {
                  return function() {
                    return pad(Date.prototype.getHours.call(this), x);
                  };
                }],
                // Hours; no limit; set maximum digits
                m: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
                // Minutes; no leading zero for single-digit minutes. Uppercase M unlike CF timeFormat's m to avoid conflict with months.
                mm: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                  return pad(Date.prototype.getMinutes.call(this), 2);
                }],
                // Minutes; leading zero for single-digit minutes. Uppercase MM unlike CF timeFormat's mm to avoid conflict with months.
                s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
                // Seconds; no leading zero for single-digit seconds.
                ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                  return pad(Date.prototype.getSeconds.call(this), 2);
                }],
                // Seconds; leading zero for single-digit seconds.
                l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                  return pad(Date.prototype.getMilliseconds.call(this), 3);
                }, 3],
                // Milliseconds. 3 digits.
                L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                  return pad(Date.prototype.getMilliseconds.call(this), 2);
                }, 2],
                // Milliseconds. 2 digits.
                t: ["[ap]", setAMPM, "ampm", getAMPM, 1],
                // Lowercase, single-character time marker string: a or p.
                tt: ["[ap]m", setAMPM, "ampm", getAMPM, 2],
                // two-character time marker string: am or pm.
                T: ["[AP]", setAMPM, "ampm", getAMPM, 1],
                // single-character time marker string: A or P.
                TT: ["[AP]M", setAMPM, "ampm", getAMPM, 2],
                // two-character time marker string: AM or PM.
                Z: [".*", void 0, "Z", getTimeZoneAbbreviated],
                // US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the Opera browser, the GMT/UTC offset is returned, e.g. GMT-0500
                o: [""],
                // GMT/UTC timezone offset, e.g. -0500 or +0230.
                S: [""]
                // The date's ordinal suffix (st, nd, rd, or th).
              }, formatCodeAlias = {
                D: "d",
                DD: "dd",
                DDD: "ddd",
                DDDD: "dddd",
                mmm: "MMM",
                mmmm: "MMMM",
                YY: "yy",
                YYYY: "yyyy",
                sss: "L"
              }, formatAlias = {
                isoDate: "yyyy-MM-dd",
                // 2007-06-09
                isoTime: "HH:mm:ss",
                // 17:46:21
                isoDateTime: "yyyy-MM-dd\\THH:mm:ss",
                // 2007-06-09T17:46:21
                isoUtcDateTime: "UTC:yyyy-MM-dd\\THH:mm:ss\\Z"
                // 2007-06-09T22:46:21Z
              };
              function setAMPM(value) {
                const hours = this.getHours();
                if (value.toLowerCase().includes("p")) {
                  this.setHours(hours + 12);
                } else if (value.toLowerCase().includes("a") && hours >= 12) {
                  this.setHours(hours - 12);
                }
              }
              function getAMPM() {
                let date = this, hours = date.getHours();
                hours = hours || 12;
                return hours >= 12 ? "PM" : "AM";
              }
              function getTimeZoneAbbreviated() {
                let date = this, {
                  1: tz
                } = date.toString().match(/\((.+)\)/);
                if (tz.includes(" ")) {
                  tz = tz.replace("-", " ").toUpperCase();
                  tz = tz.split(" ").map(([first]) => first).join("");
                }
                return tz;
              }
              function formatcode(match) {
                const fcMatch = formatCodeAlias[match] || match, dynMatches = /\d+$/.exec(fcMatch);
                if (dynMatches && dynMatches[0] !== void 0) {
                  const fcode = formatCode[fcMatch[0] + "x"].slice("");
                  fcode[0] = fcode[0](dynMatches[0]);
                  fcode[3] = fcode[3](dynMatches[0]);
                  return fcode;
                } else if (formatCode[fcMatch]) {
                  return formatCode[fcMatch];
                }
                return void 0;
              }
              function getTokenizer(opts) {
                if (!opts.tokenizer) {
                  const tokens = [], dyntokens = [], formatCodeKeys = Object.keys(formatCode).concat(Object.keys(formatCodeAlias));
                  for (const ndx of formatCodeKeys) {
                    if (/\.*x$/.test(ndx)) {
                      const dynToken = ndx[0] + "\\d+";
                      if (dyntokens.indexOf(dynToken) === -1) {
                        dyntokens.push(dynToken);
                      }
                    } else if (tokens.indexOf(ndx[0]) === -1) {
                      tokens.push(ndx[0]);
                    }
                  }
                  opts.tokenizer = "(" + (dyntokens.length > 0 ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + "+)+?|.";
                  opts.tokenizer = new RegExp(opts.tokenizer, "g");
                }
                return opts.tokenizer;
              }
              function prefillYear(dateParts, currentResult, opts) {
                if (dateParts.year !== dateParts.rawyear) {
                  const crrntyear = currentYear.toString(), enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""), currentYearPart = crrntyear.slice(0, enteredPart.length), currentYearNextPart = crrntyear.slice(enteredPart.length);
                  if (enteredPart.length === 2 && enteredPart === currentYearPart) {
                    const entryCurrentYear = new Date(currentYear, dateParts.month - 1, dateParts.day);
                    if (dateParts.day == entryCurrentYear.getDate() && (!opts.max || opts.max.date.getTime() >= entryCurrentYear.getTime())) {
                      dateParts.date.setFullYear(currentYear);
                      dateParts.year = crrntyear;
                      currentResult.insert = [{
                        pos: currentResult.pos + 1,
                        c: currentYearNextPart[0]
                      }, {
                        pos: currentResult.pos + 2,
                        c: currentYearNextPart[1]
                      }];
                    }
                  }
                }
                return currentResult;
              }
              function isValidDate(dateParts, currentResult, opts) {
                const inputmask2 = this;
                if (!useDateObject) return true;
                if (dateParts.rawday === void 0 || !isFinite(dateParts.rawday) && new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day || dateParts.day == "29" && (!isFinite(dateParts.rawyear) || dateParts.rawyear === void 0 || dateParts.rawyear === "") || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) {
                  return currentResult;
                } else {
                  if (dateParts.day == "29") {
                    const tokenMatch = getTokenMatch.call(inputmask2, currentResult.pos, opts, inputmask2.maskset);
                    if (tokenMatch.targetMatch && ["yyyy", "YYYY"].includes(tokenMatch.targetMatch[0]) && currentResult.pos - tokenMatch.targetMatchIndex === 2) {
                      currentResult.remove = currentResult.pos + 1;
                      return currentResult;
                    }
                  } else if (dateParts.date.getMonth() == 2 && dateParts.day == "30" && currentResult.c !== void 0) {
                    dateParts.day = "03";
                    dateParts.date.setDate(3);
                    dateParts.date.setMonth(1);
                    currentResult.insert = [{
                      pos: currentResult.pos,
                      c: "0"
                    }, {
                      pos: currentResult.pos + 1,
                      c: currentResult.c
                    }];
                    currentResult.caret = _positioning.seekNext.call(this, currentResult.pos + 1);
                    return currentResult;
                  }
                  return false;
                }
              }
              function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
                if (!result) return result;
                if (result && opts.min) {
                  if (
                    /* useDateObject && (dateParts["year"] === undefined || dateParts["yearSet"]) && */
                    !isNaN(opts.min.date.getTime())
                  ) {
                    let match;
                    dateParts.reset();
                    getTokenizer(opts).lastIndex = 0;
                    while (match = getTokenizer(opts).exec(opts.inputFormat)) {
                      var fcode;
                      if (fcode = formatcode(match[0])) {
                        if (fcode[3]) {
                          let setFn = fcode[1], current = dateParts[fcode[2]], minVal = opts.min[fcode[2]], maxVal = opts.max ? opts.max[fcode[2]] : minVal + 1, curVal = [], forceCurrentValue = false;
                          for (let i = 0; i < minVal.length; i++) {
                            if (maskset.validPositions[i + match.index] === void 0 && !forceCurrentValue) {
                              if (i + match.index == 0 && current[i] < minVal[i]) {
                                curVal[i] = current[i];
                                forceCurrentValue = true;
                              } else {
                                curVal[i] = minVal[i];
                              }
                              if (fcode[2] === "year" && current.length - 1 == i && minVal != maxVal) curVal = (parseInt(curVal.join("")) + 1).toString().split("");
                              if (fcode[2] === "ampm" && minVal != maxVal && opts.min.date.getTime() > dateParts.date.getTime()) curVal[i] = maxVal[i];
                            } else {
                              curVal[i] = current[i];
                              forceCurrentValue = forceCurrentValue || current[i] > minVal[i];
                            }
                          }
                          setFn.call(dateParts._date, curVal.join(""));
                        }
                      }
                    }
                    result = opts.min.date.getTime() <= dateParts.date.getTime();
                    dateParts.reInit();
                  }
                }
                if (result && opts.max) {
                  if (!isNaN(opts.max.date.getTime())) {
                    result = opts.max.date.getTime() >= dateParts.date.getTime();
                  }
                }
                return result;
              }
              function parse(format, dateObjValue, opts) {
                let mask = "", match, fcode, ndx = 0, escaped = false;
                const placeHolder = {};
                getTokenizer(opts).lastIndex = 0;
                while (match = getTokenizer(opts).exec(format)) {
                  if (match[0] === opts.escapeChar) {
                    escaped = true;
                  } else {
                    if (dateObjValue === void 0) {
                      if (!escaped && (fcode = formatcode(match[0]))) {
                        mask += "(" + fcode[0] + ")";
                        if (opts.placeholder && opts.placeholder !== "") {
                          placeHolder[ndx] = opts.placeholder[match.index % opts.placeholder.length];
                          placeHolder[`${match.index}'${opts.placeholder[match.index % opts.placeholder.length]}`] = match[0].charAt(0);
                        } else {
                          placeHolder[ndx] = match[0].charAt(0);
                        }
                      } else {
                        switch (match[0]) {
                          case "[":
                            mask += "(";
                            break;
                          case "]":
                            mask += ")?";
                            break;
                          default:
                            mask += (0, _escapeRegex.escapeRegex)(match[0]);
                            placeHolder[ndx] = match[0].charAt(0);
                        }
                      }
                    } else {
                      if (!escaped && (fcode = formatcode(match[0]))) {
                        if (fcode[3]) {
                          const getFn = fcode[3];
                          mask += getFn.call(dateObjValue.date);
                        } else if (fcode[2] && dateObjValue["raw" + fcode[2]] !== void 0) {
                          mask += dateObjValue["raw" + fcode[2]];
                        } else {
                          mask += match[0];
                        }
                      } else {
                        mask += match[0];
                      }
                    }
                    ndx++;
                    escaped = false;
                  }
                }
                if (dateObjValue === void 0) {
                  opts.placeholder = placeHolder;
                }
                return mask;
              }
              function pad(val, len, right) {
                val = String(val);
                len = len || 2;
                while (val.length < len) val = right ? val + "0" : "0" + val;
                return val;
              }
              function analyseMask(mask, format, opts) {
                const inputmask2 = this;
                if (typeof mask === "string") {
                  return new DateObject(mask, format, opts, inputmask2);
                } else if (mask && typeof mask === "object" && Object.prototype.hasOwnProperty.call(mask, "date")) {
                  return mask;
                }
                return void 0;
              }
              function importDate(dateObj, opts) {
                return parse(opts.inputFormat, {
                  date: dateObj
                }, opts);
              }
              function getTokenMatch(pos, opts, maskset) {
                let inputmask2 = this, calcPos = 0, targetMatch, match, matchLength = 0;
                getTokenizer(opts).lastIndex = 0;
                while (match = getTokenizer(opts).exec(opts.inputFormat)) {
                  const dynMatches = /\d+$/.exec(match[0]);
                  if (dynMatches) {
                    matchLength = parseInt(dynMatches[0]);
                  } else {
                    let targetSymbol = match[0][0], ndx = calcPos;
                    while (inputmask2 && (opts.placeholder[`${match.index}'${_validationTests.getTest.call(inputmask2, ndx).match.placeholder}`] || _validationTests.getTest.call(inputmask2, ndx).match.placeholder) === targetSymbol) {
                      ndx++;
                    }
                    matchLength = ndx - calcPos;
                    if (matchLength === 0) matchLength = match[0].length;
                  }
                  calcPos += matchLength;
                  if (calcPos >= pos + 1) {
                    let masksetHint = "";
                    if (maskset && maskset.tests[pos]) {
                      const filteredPlaceholders = Object.keys(opts.placeholder).filter((value) => {
                        for (let i = match.index - 1; i < calcPos; i++) {
                          if (value === `${i}'${maskset.tests[pos][0].match.placeholder}`) {
                            return true;
                          }
                        }
                        return false;
                      });
                      masksetHint = filteredPlaceholders.length > 0 ? opts.placeholder[filteredPlaceholders[0]] : maskset.tests[pos][0].match.placeholder;
                    }
                    if (match[0].indexOf(masksetHint) !== -1) {
                      targetMatch = match;
                      match = getTokenizer(opts).exec(opts.inputFormat);
                      break;
                    } else {
                    }
                  }
                }
                return {
                  targetMatchIndex: calcPos - matchLength,
                  nextMatch: match,
                  targetMatch
                };
              }
              _inputmask.default.extendAliases({
                datetime: {
                  mask: function(opts) {
                    opts.numericInput = false;
                    formatCode.S = i18n.ordinalSuffix.join("|");
                    opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat;
                    if (opts.repeat) {
                      opts.repeat = parseInt(opts.repeat.toString());
                      if (opts.repeat > 0) {
                        let inputFormat = "";
                        for (let i = 0; i < opts.repeat; i++) {
                          inputFormat = inputFormat + opts.inputFormat;
                        }
                        opts.inputFormat = inputFormat;
                        opts.repeat = 0;
                      }
                    }
                    opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat;
                    opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat;
                    opts.regex = parse(opts.inputFormat, void 0, opts);
                    opts.min = analyseMask(opts.min, opts.inputFormat, opts);
                    opts.max = analyseMask(opts.max, opts.inputFormat, opts);
                    return null;
                  },
                  placeholder: "",
                  // set default as none (~ auto); when a custom placeholder is passed it will be used
                  inputFormat: "isoDateTime",
                  // format used to input the date
                  displayFormat: null,
                  // visual format when the input looses focus
                  outputFormat: null,
                  // unmasking format
                  min: null,
                  // needs to be in the same format as the inputfornat
                  max: null,
                  // needs to be in the same format as the inputfornat,
                  skipOptionalPartCharacter: "",
                  preValidation: function(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    const inputmask2 = this;
                    if (strict) return true;
                    if (isNaN(c) && buffer[pos] !== c) {
                      const tokenMatch = getTokenMatch.call(inputmask2, pos, opts, maskset);
                      if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && tokenMatch.targetMatch[0].length > 1) {
                        const validator = formatcode(tokenMatch.targetMatch[0])[0];
                        if (new RegExp(validator).test("0" + buffer[pos - 1])) {
                          buffer[pos] = buffer[pos - 1];
                          buffer[pos - 1] = "0";
                          return {
                            fuzzy: true,
                            buffer,
                            refreshFromBuffer: {
                              start: pos - 1,
                              end: pos + 1
                            },
                            pos: pos + 1
                          };
                        }
                      }
                    }
                    return true;
                  },
                  postValidation: function(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval) {
                    const inputmask2 = this;
                    if (strict) return true;
                    let tokenMatch, validator;
                    if (currentResult === false) {
                      tokenMatch = getTokenMatch.call(inputmask2, pos + 1, opts, maskset);
                      if (tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos && tokenMatch.targetMatch[0].length > 1 && formatcode(tokenMatch.targetMatch[0]) !== void 0) {
                        validator = formatcode(tokenMatch.targetMatch[0])[0];
                      } else {
                        tokenMatch = getTokenMatch.call(inputmask2, pos + 2, opts, maskset);
                        if (tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos + 1 && tokenMatch.targetMatch[0].length > 1 && formatcode(tokenMatch.targetMatch[0]) !== void 0) {
                          validator = formatcode(tokenMatch.targetMatch[0]);
                        }
                      }
                      if (validator !== void 0) {
                        pos = tokenMatch.targetMatchIndex;
                        if (maskset.validPositions[pos + 1] !== void 0 && new RegExp(validator).test(c + "0")) {
                          buffer[pos] = c;
                          buffer[pos + 1] = "0";
                          currentResult = {
                            // insert: [{pos: pos, c: "0"}, {pos: pos + 1, c: c}],
                            pos: pos + 2,
                            // this will triggeer a refreshfrombuffer
                            caret: pos + 1
                          };
                        } else if (new RegExp(validator).test("0" + c)) {
                          buffer[pos] = "0";
                          buffer[pos + 1] = c;
                          currentResult = {
                            // insert: [{pos: pos, c: "0"}, {pos: pos + 1, c: c}],
                            pos: pos + 2
                            // this will triggeer a refreshfrombuffer
                          };
                        }
                      }
                      if (currentResult === false) return currentResult;
                    }
                    if (currentResult.fuzzy) {
                      buffer = currentResult.buffer;
                      pos = currentResult.pos;
                    }
                    tokenMatch = getTokenMatch.call(inputmask2, pos, opts, maskset);
                    if (tokenMatch.targetMatch && tokenMatch.targetMatch[0] && formatcode(tokenMatch.targetMatch[0]) !== void 0) {
                      const fcode = formatcode(tokenMatch.targetMatch[0]);
                      validator = fcode[0];
                      const part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
                      if (new RegExp(validator).test(part.join("")) === false && tokenMatch.targetMatch[0].length === 2 && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1]) {
                        maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0";
                      }
                      if (fcode[2] == "year") {
                        const _buffer = _validationTests.getMaskTemplate.call(inputmask2, false, 1, void 0, true);
                        for (let i = pos + 1; i < buffer.length; i++) {
                          buffer[i] = _buffer[i];
                          maskset.validPositions.splice(pos + 1, 1);
                        }
                      }
                    }
                    let result = currentResult, dateParts = analyseMask.call(inputmask2, buffer.join(""), opts.inputFormat, opts);
                    if (result && !isNaN(dateParts.date.getTime())) {
                      if (opts.prefillYear) result = prefillYear(dateParts, result, opts);
                      result = isValidDate.call(inputmask2, dateParts, result, opts);
                      result = isDateInRange(dateParts, result, opts, maskset, fromCheckval);
                    }
                    if (pos !== void 0 && result && currentResult.pos !== pos) {
                      return {
                        buffer: parse(opts.inputFormat, dateParts, opts).split(""),
                        refreshFromBuffer: {
                          start: pos,
                          end: currentResult.pos
                        },
                        pos: currentResult.caret !== void 0 ? currentResult.caret : currentResult.pos
                        // correct caret position
                      };
                    }
                    return result;
                  },
                  onKeyDown: function(e, buffer, caretPos, opts) {
                    const input = this;
                    if (e.ctrlKey && e.key === _keycode.keys.ArrowRight) {
                      input.inputmask._valueSet(importDate(/* @__PURE__ */ new Date(), opts));
                      $(input).trigger("setvalue");
                    }
                  },
                  onUnMask: function(maskedValue, unmaskedValue, opts) {
                    const inputmask2 = this;
                    return unmaskedValue ? parse(opts.outputFormat, analyseMask.call(inputmask2, maskedValue, opts.inputFormat, opts), opts) : unmaskedValue;
                  },
                  casing: "follow",
                  onBeforeMask: function(initialValue, opts) {
                    if (Object.prototype.toString.call(initialValue) === "[object Date]") {
                      initialValue = importDate(initialValue, opts);
                    }
                    return initialValue;
                  },
                  insertMode: false,
                  insertModeVisual: false,
                  shiftPositions: false,
                  keepStatic: false,
                  inputmode: "numeric",
                  prefillYear: true
                  // Allows to disable prefill for datetime year.
                }
              });
            },
            /* 28 */
            /***/
            function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
              var _inputmask = _interopRequireDefault(__webpack_require__2(7));
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const $ = _inputmask.default.dependencyLib;
              $.extend(true, _inputmask.default.prototype.i18n, {
                dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                ordinalSuffix: ["st", "nd", "rd", "th"]
              });
            },
            /* 29 */
            /***/
            function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
              var _escapeRegex = __webpack_require__2(25);
              var _inputmask = _interopRequireDefault(__webpack_require__2(7));
              var _keycode = __webpack_require__2(19);
              var _positioning = __webpack_require__2(20);
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const $ = _inputmask.default.dependencyLib;
              function autoEscape(txt, opts) {
                let escapedTxt = "";
                for (let i = 0; i < txt.length; i++) {
                  if (_inputmask.default.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i)) {
                    escapedTxt += "\\" + txt.charAt(i);
                  } else {
                    escapedTxt += txt.charAt(i);
                  }
                }
                return escapedTxt;
              }
              function alignDigits(buffer, digits, opts, force) {
                if (buffer.length > 0 && digits > 0 && (!opts.digitsOptional || force)) {
                  var radixPosition = buffer.indexOf(opts.radixPoint), negationBack = false;
                  if (opts.negationSymbol.back === buffer[buffer.length - 1]) {
                    negationBack = true;
                    buffer.length--;
                  }
                  if (radixPosition === -1) {
                    buffer.push(opts.radixPoint);
                    radixPosition = buffer.length - 1;
                  }
                  for (let i = 1; i <= digits; i++) {
                    if (!isFinite(buffer[radixPosition + i])) {
                      buffer[radixPosition + i] = "0";
                    }
                  }
                }
                if (negationBack) buffer.push(opts.negationSymbol.back);
                return buffer;
              }
              function findValidator(symbol, maskset) {
                let posNdx = 0;
                if (symbol === "+") {
                  posNdx = _positioning.seekNext.call(this, maskset.validPositions.length - 1);
                }
                for (let tstNdx in maskset.tests) {
                  tstNdx = parseInt(tstNdx);
                  if (tstNdx >= posNdx) {
                    for (let ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) {
                      if ((maskset.validPositions[tstNdx] === void 0 || symbol === "-") && maskset.tests[tstNdx][ndx].match.def === symbol) {
                        return tstNdx + (maskset.validPositions[tstNdx] !== void 0 && symbol !== "-" ? 1 : 0);
                      }
                    }
                  }
                }
                return posNdx;
              }
              function findValid(symbol, maskset) {
                let ret = -1;
                for (let ndx = 0, vpl = maskset.validPositions.length; ndx < vpl; ndx++) {
                  const tst = maskset.validPositions[ndx];
                  if (tst && tst.match.def === symbol) {
                    ret = ndx;
                    break;
                  }
                }
                return ret;
              }
              function parseMinMaxOptions(opts) {
                if (opts.parseMinMaxOptions === void 0) {
                  if (opts.min !== null) {
                    opts.min = opts.min.toString().replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") opts.min = opts.min.replace(opts.radixPoint, ".");
                    opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN;
                    if (isNaN(opts.min)) opts.min = Number.MIN_VALUE;
                  }
                  if (opts.max !== null) {
                    opts.max = opts.max.toString().replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.groupSeparator), "g"), "");
                    if (opts.radixPoint === ",") opts.max = opts.max.replace(opts.radixPoint, ".");
                    opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN;
                    if (isNaN(opts.max)) opts.max = Number.MAX_VALUE;
                  }
                  opts.parseMinMaxOptions = "done";
                }
              }
              function genMask(opts) {
                opts.repeat = 0;
                if (opts.groupSeparator === opts.radixPoint && opts.digits && opts.digits !== "0") {
                  if (opts.radixPoint === ".") {
                    opts.groupSeparator = ",";
                  } else if (opts.radixPoint === ",") {
                    opts.groupSeparator = ".";
                  } else {
                    opts.groupSeparator = "";
                  }
                }
                if (opts.groupSeparator === " ") {
                  opts.skipOptionalPartCharacter = void 0;
                }
                if (opts.placeholder.length > 1) {
                  opts.placeholder = opts.placeholder.charAt(0);
                }
                if (opts.positionCaretOnClick === "radixFocus" && opts.placeholder === "") {
                  opts.positionCaretOnClick = "lvp";
                }
                let decimalDef = "0", radixPointDef = opts.radixPoint;
                if (opts.numericInput === true && opts.__financeInput === void 0) {
                  decimalDef = "1";
                  opts.positionCaretOnClick = opts.positionCaretOnClick === "radixFocus" ? "lvp" : opts.positionCaretOnClick;
                  opts.digitsOptional = false;
                  if (isNaN(opts.digits)) opts.digits = opts.digits.indexOf(",") !== -1 ? opts.digits.split(",")[0] : 2;
                  opts._radixDance = false;
                  radixPointDef = opts.radixPoint === "," ? "?" : "!";
                  if (opts.radixPoint !== "" && opts.definitions[radixPointDef] === void 0) {
                    opts.definitions[radixPointDef] = {};
                    opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]";
                    opts.definitions[radixPointDef].placeholder = opts.radixPoint;
                    opts.definitions[radixPointDef].static = true;
                    opts.definitions[radixPointDef].generated = true;
                  }
                } else {
                  opts.__financeInput = false;
                  opts.numericInput = true;
                }
                let mask = "[+]", altMask;
                mask += autoEscape(opts.prefix, opts);
                if (opts.groupSeparator !== "") {
                  if (opts.definitions[opts.groupSeparator] === void 0) {
                    opts.definitions[opts.groupSeparator] = {};
                    opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]";
                    opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator;
                    opts.definitions[opts.groupSeparator].static = true;
                    opts.definitions[opts.groupSeparator].generated = true;
                  }
                  mask += opts._mask(opts);
                } else {
                  mask += "9{+}";
                }
                if (opts.digits !== void 0 && opts.digits !== 0) {
                  const dq = opts.digits.toString().split(",");
                  if (isFinite(dq[0]) && dq[1] && isFinite(dq[1])) {
                    mask += radixPointDef + decimalDef + "{" + opts.digits + "}";
                  } else if (isNaN(opts.digits) || parseInt(opts.digits) > 0) {
                    if (opts.digitsOptional || opts.jitMasking) {
                      altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}";
                      opts.keepStatic = true;
                    } else {
                      mask += radixPointDef + decimalDef + "{" + opts.digits + "}";
                    }
                  }
                } else {
                  opts.inputmode = "numeric";
                }
                mask += autoEscape(opts.suffix, opts);
                mask += "[-]";
                if (altMask) {
                  mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask];
                }
                opts.greedy = false;
                parseMinMaxOptions(opts);
                if (opts.radixPoint !== "" && opts.substituteRadixPoint) opts.substitutes[opts.radixPoint == "." ? "," : "."] = opts.radixPoint;
                return mask;
              }
              function handleRadixDance(pos, c, radixPos, maskset, opts) {
                if (opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back) {
                  if (pos <= radixPos && (radixPos > 0 || c == opts.radixPoint) && (maskset.validPositions[pos - 1] === void 0 || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back)) {
                    pos -= 1;
                  }
                }
                return pos;
              }
              function decimalValidator(chrs, maskset, pos, strict, opts) {
                const radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1, result = (radixPos !== -1 || strict && opts.jitMasking) && new RegExp(opts.definitions["9"].validator).test(chrs);
                if (!strict && opts._radixDance && radixPos !== -1 && result && maskset.validPositions[radixPos] == void 0) {
                  return {
                    insert: {
                      pos: radixPos === pos ? radixPos + 1 : radixPos,
                      c: opts.radixPoint
                    },
                    pos
                  };
                }
                return result;
              }
              function checkForLeadingZeroes(buffer, opts) {
                let numberMatches = new RegExp("(^" + (opts.negationSymbol.front !== "" ? (0, _escapeRegex.escapeRegex)(opts.negationSymbol.front) + "?" : "") + (0, _escapeRegex.escapeRegex)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.escapeRegex)(opts.suffix) + (opts.negationSymbol.back != "" ? (0, _escapeRegex.escapeRegex)(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")), number = numberMatches ? numberMatches[2] : "", leadingzeroes = false;
                if (number) {
                  number = number.split(opts.radixPoint.charAt(0))[0];
                  leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number);
                }
                return leadingzeroes && (leadingzeroes[0].length > 1 || leadingzeroes[0].length > 0 && leadingzeroes[0].length < number.length) ? leadingzeroes : false;
              }
              _inputmask.default.extendAliases({
                numeric: {
                  mask: genMask,
                  _mask: function(opts) {
                    return "(" + opts.groupSeparator + "999){+|1}";
                  },
                  digits: "*",
                  // number of fractionalDigits
                  digitsOptional: true,
                  enforceDigitsOnBlur: false,
                  radixPoint: ".",
                  positionCaretOnClick: "radixFocus",
                  _radixDance: true,
                  groupSeparator: "",
                  allowMinus: true,
                  negationSymbol: {
                    front: "-",
                    // "("
                    back: ""
                    // ")"
                  },
                  prefix: "",
                  suffix: "",
                  min: null,
                  // minimum value
                  max: null,
                  // maximum value
                  SetMaxOnOverflow: false,
                  step: 1,
                  inputType: "text",
                  // number ~ specify that values which are set are in textform (radix point  is same as in the options) or in numberform (radixpoint = .)
                  unmaskAsNumber: false,
                  roundingFN: Math.round,
                  // Math.floor ,  fn(x)
                  inputmode: "decimal",
                  shortcuts: {
                    k: "1000",
                    m: "1000000"
                  },
                  // global options
                  placeholder: "0",
                  greedy: false,
                  rightAlign: true,
                  insertMode: true,
                  autoUnmask: false,
                  skipOptionalPartCharacter: "",
                  usePrototypeDefinitions: false,
                  stripLeadingZeroes: true,
                  substituteRadixPoint: true,
                  definitions: {
                    0: {
                      validator: decimalValidator
                    },
                    1: {
                      validator: decimalValidator,
                      definitionSymbol: "9"
                    },
                    9: {
                      // \uFF11-\uFF19 #1606
                      validator: "[0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]",
                      definitionSymbol: "*"
                    },
                    "+": {
                      validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.allowMinus && (chrs === "-" || chrs === opts.negationSymbol.front);
                      }
                    },
                    "-": {
                      validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.allowMinus && chrs === opts.negationSymbol.back;
                      }
                    }
                  },
                  preValidation: function(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    const inputmask2 = this;
                    if (opts.__financeInput !== false && c === opts.radixPoint) return false;
                    const radixPos = buffer.indexOf(opts.radixPoint), initPos = pos;
                    pos = handleRadixDance(pos, c, radixPos, maskset, opts);
                    if (c === "-" || c === opts.negationSymbol.front) {
                      if (opts.allowMinus !== true) return false;
                      let isNegative = false, front = findValid("+", maskset), back = findValid("-", maskset);
                      if (front !== -1) {
                        isNegative = [front];
                        if (back !== -1) isNegative.push(back);
                      }
                      return isNegative !== false ? {
                        remove: isNegative,
                        caret: initPos - opts.negationSymbol.back.length
                      } : {
                        insert: [{
                          pos: findValidator.call(inputmask2, "+", maskset),
                          c: opts.negationSymbol.front,
                          fromIsValid: true
                        }, {
                          pos: findValidator.call(inputmask2, "-", maskset),
                          c: opts.negationSymbol.back,
                          fromIsValid: void 0
                        }],
                        caret: initPos + opts.negationSymbol.back.length
                      };
                    }
                    if (c === opts.groupSeparator) {
                      return {
                        caret: initPos
                      };
                    }
                    if (strict) return true;
                    if (radixPos !== -1 && opts._radixDance === true && isSelection === false && c === opts.radixPoint && opts.digits !== void 0 && (isNaN(opts.digits) || parseInt(opts.digits) > 0) && radixPos !== pos) {
                      const radixValidatorPos = findValidator.call(inputmask2, opts.radixPoint, maskset);
                      if (maskset.validPositions[radixValidatorPos]) {
                        maskset.validPositions[radixValidatorPos].generatedInput = maskset.validPositions[radixValidatorPos].generated || false;
                      }
                      return {
                        caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
                      };
                    }
                    if (opts.__financeInput === false) {
                      if (isSelection) {
                        if (opts.digitsOptional) {
                          return {
                            rewritePosition: caretPos.end
                          };
                        } else if (!opts.digitsOptional) {
                          if (caretPos.begin > radixPos && caretPos.end <= radixPos) {
                            if (c === opts.radixPoint) {
                              return {
                                insert: {
                                  pos: radixPos + 1,
                                  c: "0",
                                  fromIsValid: true
                                },
                                rewritePosition: radixPos
                              };
                            } else {
                              return {
                                rewritePosition: radixPos + 1
                              };
                            }
                          } else if (caretPos.begin < radixPos) {
                            return {
                              rewritePosition: caretPos.begin - 1
                            };
                          }
                        }
                      } else {
                        if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && opts.digits > 0 && this.__valueGet.call(this.el) === "") {
                          return {
                            rewritePosition: radixPos
                          };
                        }
                        if (pos >= buffer.length - opts.prefix.length && opts.radixPoint !== "") {
                          const digitTest = new RegExp(opts.definitions["9"].validator);
                          if (!maskset.validPositions.some((vp) => vp && !vp.generatedInput && digitTest.test(vp.input))) {
                            return {
                              rewritePosition: radixPos !== -1 ? radixPos : 0
                            };
                          }
                        }
                      }
                    }
                    return {
                      rewritePosition: pos
                    };
                  },
                  postValidation: function(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval, fromAlternate) {
                    if (currentResult === false) return currentResult;
                    if (strict) return true;
                    if (opts.min !== null || opts.max !== null) {
                      const unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                        unmaskAsNumber: true
                      }));
                      if (opts.min !== null && unmasked < opts.min && fromAlternate !== true && (unmasked.toString().length > opts.min.toString().length || // > instead of >= because we want to allow to type a bigger number
                      buffer[0] === opts.radixPoint || // disallow radixpoint when value is smaller than min
                      unmasked < 0)) {
                        return false;
                      }
                      if (opts.max !== null && opts.max >= 0 && unmasked > opts.max) {
                        return opts.SetMaxOnOverflow ? {
                          refreshFromBuffer: true,
                          buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                        } : false;
                      }
                    }
                    return currentResult;
                  },
                  onUnMask: function(maskedValue, unmaskedValue, opts) {
                    if (unmaskedValue === "" && opts.nullable === true) {
                      return unmaskedValue;
                    }
                    let processValue = maskedValue.replace(opts.prefix, "");
                    processValue = processValue.replace(opts.suffix, "");
                    processValue = processValue.replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.groupSeparator), "g"), "");
                    if (opts.placeholder.charAt(0) !== "") {
                      processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0");
                    }
                    if (opts.unmaskAsNumber) {
                      if (opts.radixPoint !== "" && processValue.indexOf(opts.radixPoint) !== -1) processValue = processValue.replace(_escapeRegex.escapeRegex.call(this, opts.radixPoint), ".");
                      processValue = processValue.replace(new RegExp("^" + (0, _escapeRegex.escapeRegex)(opts.negationSymbol.front)), "-");
                      processValue = processValue.replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.negationSymbol.back) + "$"), "");
                      return Number(processValue);
                    }
                    return processValue;
                  },
                  isComplete: function(buffer, opts) {
                    let maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                    maskedValue = maskedValue.replace(new RegExp("^" + (0, _escapeRegex.escapeRegex)(opts.negationSymbol.front)), "-");
                    maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.negationSymbol.back) + "$"), "");
                    maskedValue = maskedValue.replace(opts.prefix, "");
                    maskedValue = maskedValue.replace(opts.suffix, "");
                    maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.escapeRegex)(opts.groupSeparator) + "([0-9]{3})", "g"), "$1");
                    if (opts.radixPoint === ",") maskedValue = maskedValue.replace((0, _escapeRegex.escapeRegex)(opts.radixPoint), ".");
                    return isFinite(maskedValue);
                  },
                  onBeforeMask: function(initialValue, opts) {
                    initialValue = initialValue ?? "";
                    const radixPoint = opts.radixPoint || ",";
                    if (isFinite(opts.digits)) opts.digits = parseInt(opts.digits);
                    if ((typeof initialValue === "number" || opts.inputType === "number") && radixPoint !== "") {
                      initialValue = initialValue.toString().replace(".", radixPoint);
                    }
                    const isNegative = initialValue.charAt(0) === "-" || initialValue.charAt(0) === opts.negationSymbol.front, valueParts = initialValue.split(radixPoint), integerPart = valueParts[0].replace(/[^\-0-9]/g, ""), decimalPart = valueParts.length > 1 ? valueParts[1].replace(/[^0-9]/g, "") : "", forceDigits = valueParts.length > 1;
                    initialValue = integerPart + (decimalPart !== "" ? radixPoint + decimalPart : decimalPart);
                    let digits = 0;
                    if (radixPoint !== "") {
                      digits = !opts.digitsOptional ? opts.digits : opts.digits < decimalPart.length ? opts.digits : decimalPart.length;
                      if (decimalPart !== "" || !opts.digitsOptional) {
                        const digitsFactor = Math.pow(10, digits || 1);
                        initialValue = initialValue.replace((0, _escapeRegex.escapeRegex)(radixPoint), ".");
                        if (!isNaN(parseFloat(initialValue))) {
                          initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits);
                        }
                        initialValue = initialValue.toString().replace(".", radixPoint);
                      }
                    }
                    if (opts.digits === 0 && initialValue.indexOf(radixPoint) !== -1) {
                      initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint));
                    }
                    if (initialValue !== "" && (opts.min !== null || opts.max !== null)) {
                      const numberValue = initialValue.toString().replace(radixPoint, ".");
                      if (opts.min !== null && numberValue < opts.min) {
                        initialValue = opts.min.toString().replace(".", radixPoint);
                      } else if (opts.max !== null && numberValue > opts.max) {
                        initialValue = opts.max.toString().replace(".", radixPoint);
                      }
                    }
                    if (isNegative && initialValue.charAt(0) !== "-") {
                      initialValue = "-" + initialValue;
                    }
                    return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
                  },
                  onBeforeWrite: function(e, buffer, caretPos, opts) {
                    function stripBuffer(buffer2, stripRadix) {
                      if (opts.__financeInput !== false || stripRadix) {
                        var position = buffer2.indexOf(opts.radixPoint);
                        if (position !== -1) {
                          buffer2.splice(position, 1);
                        }
                      }
                      if (opts.groupSeparator !== "") {
                        while ((position = buffer2.indexOf(opts.groupSeparator)) !== -1) {
                          buffer2.splice(position, 1);
                        }
                      }
                      return buffer2;
                    }
                    let result, leadingzeroes;
                    if (opts.stripLeadingZeroes && (leadingzeroes = checkForLeadingZeroes(buffer, opts))) {
                      const caretNdx = buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join("")) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1), offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0;
                      for (let i = leadingzeroes[0].length - offset; i > 0; i--) {
                        this.maskset.validPositions.splice(caretNdx + i, 1);
                        delete buffer[caretNdx + i];
                      }
                    }
                    if (e) {
                      switch (e.type) {
                        case "blur":
                        case "checkval":
                          if (opts.min !== null || opts.max !== null) {
                            const unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                              unmaskAsNumber: true
                            }));
                            if (opts.min !== null && unmasked < opts.min && buffer.join() !== "") {
                              return {
                                refreshFromBuffer: true,
                                buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                              };
                            } else if (opts.max !== null && unmasked > opts.max) {
                              return {
                                refreshFromBuffer: true,
                                buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                              };
                            }
                          }
                          if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                            const nmbrMtchs = new RegExp("(^" + (opts.negationSymbol.front != "" ? (0, _escapeRegex.escapeRegex)(opts.negationSymbol.front) + "?" : "") + (0, _escapeRegex.escapeRegex)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.escapeRegex)(opts.suffix) + (opts.negationSymbol.back != "" ? (0, _escapeRegex.escapeRegex)(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), true).reverse().join("")), number = nmbrMtchs ? nmbrMtchs[2] : "";
                            if (number == 0) {
                              result = {
                                refreshFromBuffer: true,
                                buffer: [0]
                              };
                            }
                          } else if (opts.radixPoint !== "") {
                            const radixNDX = buffer.indexOf(opts.radixPoint);
                            if (radixNDX === opts.suffix.length) {
                              if (result && result.buffer) {
                                result.buffer.splice(0, 1 + opts.suffix.length);
                              } else {
                                buffer.splice(0, 1 + opts.suffix.length);
                                result = {
                                  refreshFromBuffer: true,
                                  buffer: stripBuffer(buffer)
                                };
                              }
                            }
                          }
                          if (opts.enforceDigitsOnBlur) {
                            result = result || {};
                            const bffr = (result && result.buffer || buffer).slice().reverse();
                            result.refreshFromBuffer = true;
                            result.buffer = alignDigits(bffr, opts.digits, opts, true).reverse();
                          }
                      }
                    }
                    return result;
                  },
                  onKeyDown: function(e, buffer, caretPos, opts) {
                    let $input = $(this), bffr;
                    if (e.location != 3) {
                      let pattern, c = e.key;
                      if (pattern = opts.shortcuts && opts.shortcuts[c]) {
                        if (pattern.length > 1) {
                          this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(pattern));
                          $input.trigger("setvalue");
                          return false;
                        }
                      }
                    }
                    if (e.ctrlKey) {
                      switch (e.key) {
                        case _keycode.keys.ArrowUp:
                          this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step));
                          $input.trigger("setvalue");
                          return false;
                        case _keycode.keys.ArrowDown:
                          this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step));
                          $input.trigger("setvalue");
                          return false;
                      }
                    }
                    if (!e.shiftKey && (e.key === _keycode.keys.Delete || e.key === _keycode.keys.Backspace || e.key === _keycode.keys.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
                      if (buffer[e.key === _keycode.keys.Delete ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) {
                        bffr = buffer.slice().reverse();
                        if (opts.negationSymbol.front !== "") bffr.shift();
                        if (opts.negationSymbol.back !== "") bffr.pop();
                        $input.trigger("setvalue", [bffr.join(""), caretPos.begin]);
                        return false;
                      } else if (opts._radixDance === true) {
                        const radixPos = buffer.indexOf(opts.radixPoint);
                        if (!opts.digitsOptional) {
                          if (radixPos !== -1 && (caretPos.begin < radixPos || caretPos.end < radixPos || e.key === _keycode.keys.Delete && (caretPos.begin === radixPos || caretPos.begin - 1 === radixPos))) {
                            let restoreCaretPos;
                            if (caretPos.begin === caretPos.end) {
                              if (e.key === _keycode.keys.Backspace || e.key === _keycode.keys.BACKSPACE_SAFARI) caretPos.begin++;
                              else if (e.key === _keycode.keys.Delete && caretPos.begin - 1 === radixPos) {
                                restoreCaretPos = $.extend({}, caretPos);
                                caretPos.begin--;
                                caretPos.end--;
                              }
                            }
                            bffr = buffer.slice().reverse();
                            bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end || 1);
                            if (e.key === _keycode.keys.Backspace || e.key === _keycode.keys.BACKSPACE_SAFARI) bffr.splice(bffr.length - caretPos.end + 1, 0, "0");
                            bffr = alignDigits(bffr, opts.digits, opts).join("");
                            if (restoreCaretPos) {
                              caretPos = restoreCaretPos;
                            }
                            $input.trigger("setvalue", [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]);
                            return false;
                          }
                        } else if (radixPos === 0) {
                          bffr = buffer.slice().reverse();
                          bffr.pop();
                          $input.trigger("setvalue", [bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin]);
                          return false;
                        }
                      }
                    }
                  }
                },
                currency: {
                  prefix: "",
                  // "$ ",
                  groupSeparator: ",",
                  alias: "numeric",
                  digits: 2,
                  digitsOptional: false
                },
                decimal: {
                  alias: "numeric"
                },
                integer: {
                  alias: "numeric",
                  inputmode: "numeric",
                  digits: 0
                },
                percentage: {
                  alias: "numeric",
                  min: 0,
                  max: 100,
                  suffix: " %",
                  digits: 0,
                  allowMinus: false
                },
                indianns: {
                  // indian numbering system
                  alias: "numeric",
                  _mask: function(opts) {
                    return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
                  },
                  groupSeparator: ",",
                  radixPoint: ".",
                  placeholder: "0",
                  digits: 2,
                  digitsOptional: false
                }
              });
            },
            /* 30 */
            /***/
            function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) {
              var _window = _interopRequireDefault(__webpack_require__2(11));
              var _inputmask = _interopRequireDefault(__webpack_require__2(7));
              function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              const document2 = _window.default.document;
              if (document2 && document2.head && document2.head.attachShadow && _window.default.customElements && _window.default.customElements.get("input-mask") === void 0) {
                class InputmaskElement extends HTMLElement {
                  constructor() {
                    super();
                    const attributeNames = this.getAttributeNames(), shadow = this.attachShadow({
                      mode: "closed"
                    });
                    this.input = document2.createElement("input");
                    this.input.type = "text";
                    shadow.appendChild(this.input);
                    for (const attr in attributeNames) {
                      if (Object.prototype.hasOwnProperty.call(attributeNames, attr)) {
                        this.input.setAttribute(attributeNames[attr], this.getAttribute(attributeNames[attr]));
                      }
                    }
                    const im = new _inputmask.default();
                    im.dataAttribute = "";
                    im.mask(this.input);
                  }
                  attributeChangedCallback(attrName, oldVal, newVal) {
                    this.input.setAttribute(attrName, newVal);
                  }
                  // bind value
                  get value() {
                    return this.input.value;
                  }
                  set value(value) {
                    this.input.value = value;
                  }
                }
                _window.default.customElements.define("input-mask", InputmaskElement);
              }
            }
          ];
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          var __webpack_exports__ = {};
          !function() {
            var exports2 = __webpack_exports__;
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2["default"] = void 0;
            __webpack_require__(1);
            __webpack_require__(2);
            __webpack_require__(3);
            __webpack_require__(4);
            __webpack_require__(5);
            __webpack_require__(6);
            __webpack_require__(27);
            __webpack_require__(29);
            __webpack_require__(30);
            var _inputmask2 = _interopRequireDefault(__webpack_require__(7));
            function _interopRequireDefault(e) {
              return e && e.__esModule ? e : {
                default: e
              };
            }
            var _default = exports2["default"] = _inputmask2.default;
          }();
          return __webpack_exports__;
        }()
      );
    });
  }
});

// node_modules/inputmask/dist/inputmask.mjs
var import_inputmask = __toESM(require_inputmask(), 1);
var inputmask = import_inputmask.default.default || import_inputmask.default;
var inputmask_default = inputmask;

// node_modules/@ngneat/input-mask/fesm2020/ngneat-input-mask.mjs
var InputMaskConfig = class {
  constructor() {
    this.isAsync = false;
    this.inputSelector = "input";
  }
};
var INPUT_MASK_CONFIG = new InjectionToken("InputMaskConfig");
var InputmaskConstructor = inputmask_default.default || inputmask_default;
var InputMaskDirective = class {
  constructor(platformId, elementRef, renderer, ngControl, config, ngZone) {
    this.platformId = platformId;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.ngControl = ngControl;
    this.ngZone = ngZone;
    this.inputMaskPlugin = null;
    this.nativeInputElement = null;
    this.defaultInputMaskConfig = new InputMaskConfig();
    this.inputMaskOptions = null;
    this.onChange = () => {
    };
    this.mutationObserver = null;
    this.onInput = (_) => {
    };
    this.onTouched = (_) => {
    };
    this.validate = (control) => !control.value || !this.inputMaskPlugin || this.inputMaskPlugin.isValid() ? null : {
      inputMask: true
    };
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.setNativeInputElement(config);
  }
  /**
   * Helps you to create input-mask based on https://github.com/RobinHerbots/Inputmask
   * Supports form-validation out-of-the box.
   * Visit https://github.com/ngneat/input-mask for more info.
   */
  set inputMask(inputMask) {
    if (inputMask) {
      this.inputMaskOptions = inputMask;
      this.updateInputMask();
    }
  }
  ngOnInit() {
    if (this.control) {
      this.control.setValidators(this.control.validator ? [this.control.validator, this.validate] : [this.validate]);
      this.control.updateValueAndValidity();
    }
  }
  ngOnDestroy() {
    this.removeInputMaskPlugin();
    this.mutationObserver?.disconnect();
  }
  writeValue(value) {
    const formatter = this.inputMaskOptions?.formatter;
    if (this.nativeInputElement) {
      this.renderer.setProperty(this.nativeInputElement, "value", formatter && value ? formatter(value) : value ?? "");
    }
  }
  registerOnChange(onChange) {
    this.onChange = onChange;
    const parser = this.inputMaskOptions?.parser;
    this.onInput = (value) => {
      this.onChange(parser && value ? parser(value) : value);
    };
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    if (this.nativeInputElement) {
      this.renderer.setProperty(this.nativeInputElement, "disabled", disabled);
    }
  }
  updateInputMask() {
    this.removeInputMaskPlugin();
    this.createInputMaskPlugin();
    this.registerOnChange(this.onChange);
  }
  createInputMaskPlugin() {
    const {
      nativeInputElement,
      inputMaskOptions
    } = this;
    if (isPlatformServer(this.platformId) || !nativeInputElement || inputMaskOptions === null || Object.keys(inputMaskOptions).length === 0) {
      return;
    }
    const _a = inputMaskOptions, {
      parser,
      formatter
    } = _a, options = __objRest(_a, [
      "parser",
      "formatter"
    ]);
    this.inputMaskPlugin = this.ngZone.runOutsideAngular(() => new InputmaskConstructor(options).mask(nativeInputElement));
    if (this.control) {
      setTimeout(() => {
        this.control.updateValueAndValidity();
      });
    }
  }
  get control() {
    return this.ngControl?.control;
  }
  setNativeInputElement(config) {
    if (this.elementRef.nativeElement.tagName === "INPUT") {
      this.nativeInputElement = this.elementRef.nativeElement;
    } else {
      this.defaultInputMaskConfig = __spreadValues(__spreadValues({}, this.defaultInputMaskConfig), config);
      if (this.defaultInputMaskConfig.isAsync) {
        this.mutationObserver = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (mutation.type === "childList") {
              const nativeInputElement = this.elementRef.nativeElement.querySelector(this.defaultInputMaskConfig.inputSelector);
              if (nativeInputElement) {
                this.nativeInputElement = nativeInputElement;
                this.mutationObserver?.disconnect();
                this.createInputMaskPlugin();
              }
            }
          }
        });
        this.mutationObserver.observe(this.elementRef.nativeElement, {
          childList: true,
          subtree: true
        });
      } else {
        this.nativeInputElement = this.elementRef.nativeElement.querySelector(this.defaultInputMaskConfig.inputSelector);
      }
    }
  }
  removeInputMaskPlugin() {
    this.inputMaskPlugin?.remove();
    this.inputMaskPlugin = null;
  }
};
InputMaskDirective.\u0275fac = function InputMaskDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InputMaskDirective)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgControl, 10), \u0275\u0275directiveInject(INPUT_MASK_CONFIG), \u0275\u0275directiveInject(NgZone));
};
InputMaskDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: InputMaskDirective,
  selectors: [["", "inputMask", ""]],
  hostBindings: function InputMaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function InputMaskDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event.target.value);
      })("blur", function InputMaskDirective_blur_HostBindingHandler($event) {
        return ctx.onTouched($event.target.value);
      });
    }
  },
  inputs: {
    inputMask: "inputMask"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMaskDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[inputMask]"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgControl,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }]
    }, {
      type: InputMaskConfig,
      decorators: [{
        type: Inject,
        args: [INPUT_MASK_CONFIG]
      }]
    }, {
      type: NgZone
    }];
  }, {
    inputMask: [{
      type: Input
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event.target.value"]]
    }],
    onTouched: [{
      type: HostListener,
      args: ["blur", ["$event.target.value"]]
    }]
  });
})();
var InputMaskModule = class _InputMaskModule {
  static forRoot(config) {
    return {
      ngModule: _InputMaskModule,
      providers: [{
        provide: INPUT_MASK_CONFIG,
        useValue: config
      }]
    };
  }
};
InputMaskModule.\u0275fac = function InputMaskModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InputMaskModule)();
};
InputMaskModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: InputMaskModule
});
InputMaskModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: INPUT_MASK_CONFIG,
    useClass: InputMaskConfig
  }]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMaskModule, [{
    type: NgModule,
    args: [{
      declarations: [InputMaskDirective],
      exports: [InputMaskDirective],
      providers: [{
        provide: INPUT_MASK_CONFIG,
        useClass: InputMaskConfig
      }]
    }]
  }], null, null);
})();
var createMask = (options) => typeof options === "string" ? {
  mask: options
} : options;

// src/app/components/forms/form-elements/input-mask/input-mask.component.ts
var InputMaskComponent = class _InputMaskComponent {
  constructor() {
    this.phoneMask = createMask({ alias: "US(+1)99 9999 9999" });
    this.phoneFC = new FormControl("");
    this.currencyInputMask = createMask({
      alias: "numeric",
      groupSeparator: ",",
      digits: 2,
      digitsOptional: false,
      prefix: "$ ",
      placeholder: "0"
    });
  }
  ngAfterViewInit() {
    const cleaveInstance = new cleave_esm_default(".date-format", {
      date: true,
      delimiter: "-",
      datePattern: ["d", "m", "Y"]
    });
    const dt2 = new cleave_esm_default(".date-format-1", {
      date: true,
      delimiter: "-",
      datePattern: ["m", "d", "Y"]
    });
    const cleave = new cleave_esm_default(".date-format-2", {
      date: true,
      datePattern: ["m", "y"]
    });
    var n1 = new cleave_esm_default(".number-format", {
      numeral: true,
      numeralThousandsGroupStyle: "lakh"
    });
    const t1 = new cleave_esm_default(".time-format-1", {
      time: true,
      timePattern: ["h", "m", "s"]
    });
    const t2 = new cleave_esm_default(".time-format-2", {
      time: true,
      timePattern: ["h", "m"]
    });
    const c1 = new cleave_esm_default(".formatting-blocks", {
      blocks: [4, 3, 3, 4],
      uppercase: true
    });
    const d1 = new cleave_esm_default(".delimiter", {
      delimiter: "\xB7",
      blocks: [3, 3, 3],
      uppercase: true
    });
    const d2 = new cleave_esm_default(".delimiters", {
      delimiters: ["/", "/", "-"],
      blocks: [3, 3, 3, 2],
      uppercase: true
    });
    const p1 = new cleave_esm_default(".prefix-element", {
      prefix: "Prefix",
      delimiter: "-",
      blocks: [6, 4, 4, 4],
      uppercase: true
    });
  }
  static {
    this.\u0275fac = function InputMaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InputMaskComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputMaskComponent, selectors: [["app-input-mask"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 82, vars: 2, consts: [["hassub", "", "sub", "Forms", "title1", "Form Elements", "title", "Input Mask", "activeTitle", "Input Mask"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["placeholder", "DD-MM-YYYY", 1, "form-control", "date-format"], ["placeholder", "MM-DD-YYYY", 1, "form-control", "date-format-1"], ["placeholder", "MM-YY", 1, "form-control", "date-format-2"], ["placeholder", "Number Here", 1, "form-control", "number-format"], ["placeholder", "hh:mm:ss", 1, "form-control", "time-format-1"], ["placeholder", "hh:mm", 1, "form-control", "time-format-2"], ["placeholder", "ABCD EFG HIJ KLMN", 1, "form-control", "formatting-blocks"], ["placeholder", "ABC.DEF.GHi", 1, "form-control", "delimiter"], ["placeholder", "ABC/DEF/GHi-JK", 1, "form-control", "delimiters"], ["type", "text", 1, "form-control", "prefix-element"], ["placeholder", "US(+1)", 1, "form-control", "phone-number", 3, "inputMask", "formControl"]], template: function InputMaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-page-header", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Date Format-1 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "input", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 2)(10, "div", 3)(11, "div", 4)(12, "div", 5);
        \u0275\u0275text(13, " Date Format-2 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6);
        \u0275\u0275element(15, "input", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div", 5);
        \u0275\u0275text(20, " Date Format-3 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 6);
        \u0275\u0275element(22, "input", 9);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 1)(24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "div", 5);
        \u0275\u0275text(28, " Number Formatting ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 6);
        \u0275\u0275element(30, "input", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 2)(32, "div", 3)(33, "div", 4)(34, "div", 5);
        \u0275\u0275text(35, " Time Format-1 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 6);
        \u0275\u0275element(37, "input", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 2)(39, "div", 3)(40, "div", 4)(41, "div", 5);
        \u0275\u0275text(42, " Time Format-2 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 6);
        \u0275\u0275element(44, "input", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 1)(46, "div", 2)(47, "div", 3)(48, "div", 4)(49, "div", 5);
        \u0275\u0275text(50, " Formatting Into Blocks ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 6);
        \u0275\u0275element(52, "input", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 2)(54, "div", 3)(55, "div", 4)(56, "div", 5);
        \u0275\u0275text(57, " Delimiter ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 6);
        \u0275\u0275element(59, "input", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 2)(61, "div", 3)(62, "div", 4)(63, "div", 5);
        \u0275\u0275text(64, " Delimiters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 6);
        \u0275\u0275element(66, "input", 15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "div", 1)(68, "div", 2)(69, "div", 3)(70, "div", 4)(71, "div", 5);
        \u0275\u0275text(72, " Prefix ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 6);
        \u0275\u0275element(74, "input", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "div", 2)(76, "div", 3)(77, "div", 4)(78, "div", 5);
        \u0275\u0275text(79, " Phone Number Formatting ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 6);
        \u0275\u0275element(81, "input", 17);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(81);
        \u0275\u0275property("inputMask", ctx.phoneMask)("formControl", ctx.phoneFC);
      }
    }, dependencies: [SharedModule, PageHeaderComponent, NgbModule, FormsModule, DefaultValueAccessor, NgControlStatus, ReactiveFormsModule, FormControlDirective, NgxCleaveDirectiveModule, InputMaskModule, InputMaskDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputMaskComponent, { className: "InputMaskComponent", filePath: "src\\app\\components\\forms\\form-elements\\input-mask\\input-mask.component.ts", lineNumber: 15 });
})();
export {
  InputMaskComponent
};
/*! Bundled license information:

inputmask/dist/inputmask.js:
  (*!
   * dist/inputmask
   * https://github.com/RobinHerbots/Inputmask
   * Copyright (c) 2010 - 2026 Robin Herbots
   * Licensed under the MIT license
   * Version: 5.0.10
   *)
*/
//# sourceMappingURL=input-mask.component-K3EQ4CT6.js.map
