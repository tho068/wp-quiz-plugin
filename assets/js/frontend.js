pluginWebpack([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_js__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Quiz",
  data() {
    return {
      currentQuiz: null
    };
  },
  async mounted() {
    this.loadQuiz();
  },
  methods: {
    async loadQuiz() {
      try {
        let quiz = await __WEBPACK_IMPORTED_MODULE_0__api_js___default.a.get(`/quiz/${quizId}`);
        this.currentQuiz = quiz.data;
      } catch (e) {
        console.log(e);
      }
    },
    startQuiz() {
      this.$router.push({
        name: "Questions"
      });
    }
  },
  computed: {
    quiz() {
      return this.currentQuiz;
    }
  }
});

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(155);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(159);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
    el: '#vue-frontend-app',
    router: _router2.default,
    render: function render(h) {
        return h(_App2.default);
    }
});

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(9);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_152fd186_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(158);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(156)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_152fd186_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-152fd186", Component.options)
  } else {
    hotAPI.reload("data-v-152fd186", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 156:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vue-frontend-app" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-152fd186", esExports)
  }
}

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(6);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Quiz = __webpack_require__(160);

var _Quiz2 = _interopRequireDefault(_Quiz);

var _Questions = __webpack_require__(179);

var _Questions2 = _interopRequireDefault(_Questions);

var _Completed = __webpack_require__(182);

var _Completed2 = _interopRequireDefault(_Completed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
    routes: [{
        path: '/',
        name: 'Quiz',
        component: _Quiz2.default
    }, {
        path: '/questions',
        name: 'Questions',
        component: _Questions2.default
    }, {
        path: '/completed',
        name: 'Completed',
        component: _Completed2.default,
        props: true
    }]
});

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Quiz_vue__ = __webpack_require__(10);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54c9b28a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Quiz_vue__ = __webpack_require__(178);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(161)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54c9b28a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Quiz_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54c9b28a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Quiz_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/Quiz.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54c9b28a", Component.options)
  } else {
    hotAPI.reload("data-v-54c9b28a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.quiz != null
    ? _c("div", { attrs: { id: "home" } }, [
        _c("h3", [_vm._v(_vm._s(_vm.quiz.title))]),
        _c("p", [_vm._v(_vm._s(_vm.quiz.description))]),
        _c(
          "button",
          {
            staticClass: "quiz-button",
            on: {
              click: function($event) {
                return _vm.startQuiz()
              }
            }
          },
          [_vm._v("Start")]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54c9b28a", esExports)
  }
}

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Questions_vue__ = __webpack_require__(20);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0605ff68_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Questions_vue__ = __webpack_require__(181);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Questions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0605ff68_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Questions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/Questions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0605ff68", Component.options)
  } else {
    hotAPI.reload("data-v-0605ff68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "questions-container" } }, [
    _vm.currentQuestion
      ? _c("div", { staticClass: "question" }, [
          _c("h3", { staticClass: "question-text" }, [
            _vm._v(_vm._s(_vm.currentQuestion.text))
          ]),
          _c("p", { staticClass: "question-index" }, [
            _vm._v(
              "Spørsmål " +
                _vm._s(_vm.currentQuestionNumber) +
                " av " +
                _vm._s(_vm.numberOfQuestions)
            )
          ]),
          _c("div", { staticClass: "opt-and-image-container" }, [
            _c(
              "div",
              { staticClass: "options-container" },
              _vm._l(_vm.currentQuestion.options, function(opt, index) {
                return _c(
                  "button",
                  {
                    key: index,
                    ref: "option",
                    refInFor: true,
                    staticClass: "option",
                    attrs: { block: "block", id: opt.id },
                    on: {
                      click: function($event) {
                        return _vm.optionClicked(opt)
                      }
                    }
                  },
                  [_vm._v(_vm._s(opt.text))]
                )
              }),
              0
            ),
            _vm.currentQuestion.img.length > 0
              ? _c("div", { staticClass: "image-container" }, [
                  _c("img", { attrs: { src: _vm.currentQuestion.img } })
                ])
              : _vm._e()
          ]),
          !_vm.completed
            ? _c(
                "button",
                {
                  staticClass: "quiz-button",
                  on: {
                    click: function($event) {
                      return _vm.next()
                    }
                  }
                },
                [_vm._v("Neste")]
              )
            : _vm._e(),
          _vm.completed
            ? _c(
                "button",
                {
                  staticClass: "quiz-button",
                  on: {
                    click: function($event) {
                      return _vm.finish()
                    }
                  }
                },
                [_vm._v("Fullfør")]
              )
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0605ff68", esExports)
  }
}

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Completed_vue__ = __webpack_require__(21);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4da30566_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Completed_vue__ = __webpack_require__(187);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Completed_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4da30566_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Completed_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/frontend/components/Completed.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4da30566", Component.options)
  } else {
    hotAPI.reload("data-v-4da30566", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.score
    ? _c("div", { attrs: { id: "completed" } }, [
        _c("h4", [_vm._v("Ditt resultat")]),
        _c("p", [
          _vm._v(
            "Du har svart korrekt på " +
              _vm._s(_vm.numCorrect) +
              " av " +
              _vm._s(_vm.totalQuestions) +
              " spørsmål"
          )
        ]),
        _c("div", { staticClass: "chart-wrapper" }, [
          _c("div", { staticClass: "chart-container" }, [
            _c("h4", [_vm._v("Din score VS gjenomsnittet")]),
            _c("canvas", {
              ref: "chart-average",
              attrs: { id: "average-chart" }
            })
          ]),
          _c("div", { staticClass: "chart-container" }, [
            _c("h4", [_vm._v("Din fremgang")]),
            _c("canvas", {
              ref: "chart-progress",
              attrs: { id: "average-chart" }
            })
          ])
        ]),
        _c(
          "button",
          {
            staticClass: "quiz-button result-buttons",
            on: {
              click: function($event) {
                return _vm.restart()
              }
            }
          },
          [_vm._v("Start på nytt")]
        ),
        _c(
          "button",
          {
            staticClass: "quiz-button result-buttons",
            on: {
              click: function($event) {
                return _vm.overview()
              }
            }
          },
          [_vm._v("Oversikt")]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4da30566", esExports)
  }
}

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Questions',
    data() {
        return {
            questions: [],
            questionIndex: 0,
            lock: false,
            completed: false,
            score: []
        };
    },
    mounted() {
        this.idx = 0;
        this.loadQuestion();
    },
    methods: {
        async loadQuestion() {
            try {
                let questions = await __WEBPACK_IMPORTED_MODULE_0__api_js___default.a.get(`/quiz/${quizId}/getQuestions`);
                this.questions = questions.data;
            } catch (e) {
                console.log(e);
            }
        },
        async optionClicked(opt) {
            try {
                if (this.lock) {
                    return;
                }
                if (this.questions.length - 1 == this.questionIndex) {
                    this.completed = true;
                }
                for (let i = 0; i < this.$refs.option.length; i++) {
                    if (this.$refs.option[i].id == opt.id) {
                        if (opt.correct == "1") {
                            this.$refs.option[i].classList.add('correct');
                        } else {
                            this.$refs.option[i].classList.add('wrong');
                        }
                    }
                }
                this.score.push({
                    question: this.currentQuestion,
                    option: opt
                });
                this.lock = true;
            } catch (e) {
                console.log(e);
            }
        },
        resetOptions() {
            for (let i = 0; i < this.$refs.option.length; i++) {
                this.$refs.option[i].classList.remove('correct');
                this.$refs.option[i].classList.remove('wrong');
            }
        },
        next() {
            if (!this.lock) {
                return;
            }
            this.questionIndex = this.questionIndex + 1;
            this.resetOptions();
            this.lock = false;
        },
        finish() {
            this.$router.push({
                name: 'Completed',
                params: { score: this.score }
            });
        }
    },
    computed: {
        currentQuestion() {
            return this.questions[this.questionIndex];
        },
        numberOfQuestions() {
            return this.questions.length;
        },
        currentQuestionNumber() {
            return this.questionIndex + 1;
        }
    }
});

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_q__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_q___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_q__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Completed",
  props: ["score"],
  data() {
    return {
      attempts: [],
      average: 0
    };
  },
  async mounted() {
    if (typeof this.score == "undefined") {
      this.$router.push({ name: "Quiz" });
      return;
    }
    await this.storeAttempt();
    this.initProgressChart();
    this.initAverageChart();
  },
  methods: {
    restart() {
      this.$router.push({ name: "Quiz" });
    },
    overview() {},
    storeAttempt() {
      return new __WEBPACK_IMPORTED_MODULE_2_q__["Promise"](async (Resolve, Reject) => {
        try {
          const earlierAttempts = await __WEBPACK_IMPORTED_MODULE_1__api_js___default.a.post(`/quiz/${quizId}/storeAttempt`, {
            score: this.numCorrect,
            quizId
          });
          this.attempts = earlierAttempts.data.attempts;
          this.average = earlierAttempts.data.average;
          Resolve();
        } catch (e) {
          Reject(e);
        }
      });
    },
    initProgressChart() {
      const ctx = this.$refs["chart-progress"];
      const chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(ctx, {
        type: "line",
        data: {
          labels: this.attemptLabels,
          datasets: [{
            data: this.attemptScore,
            label: "Din fremgang",
            fill: false,
            borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"]
          }]
        }
      });
    },
    initAverageChart() {
      const ctx = this.$refs["chart-average"];
      const chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(ctx, {
        type: "horizontalBar",
        data: {
          labels: ["Din score", "Gjennomsnitt"],
          datasets: [{
            label: "Din score VS gjenomsnittet",
            data: [this.numCorrect, this.numAverage],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
            borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)", "rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            xAxes: [{
              barPercentage: 0.5,
              barThickness: 6,
              ticks: {
                beginAtZero: true
              },
              maxBarThickness: 8,
              minBarLength: 2,
              gridLines: {
                offsetGridLines: true
              }
            }]
          }
        }
      });
    }
  },
  computed: {
    /* Return number of correct answers */
    numCorrect() {
      let num = 0;
      for (let i = 0; i < this.score.length; i++) {
        if (this.score[i].option.correct == "1") {
          num++;
        }
      }
      return num;
    },
    /* Return total amount of questions */
    totalQuestions() {
      return this.score.length;
    },
    /* Return average score */
    numAverage() {
      return this.average;
    },
    /* Return attempt labels */
    attemptLabels() {
      let labels = [];
      for (let i = 0; i < this.attempts.length; i++) {
        labels.push(i + 1);
      }
      return labels;
    },
    /* Return attempt score */
    attemptScore() {
      let score = [];
      for (let i = 0; i < this.attempts.length; i++) {
        score.push(this.attempts[i].score);
      }
      return score;
    }
  }
});

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axiosInstance = _axios2.default.create({
    baseURL: ajaxurl,
    headers: {
        'X-WP-Nonce': wpQuizNonce
    }
});

module.exports = axiosInstance;

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'App'
});

/***/ })

},[153]);