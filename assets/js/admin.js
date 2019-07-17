pluginWebpack([0],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'App'
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api__);
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
  name: "QuizOverview",
  data() {
    return {
      quizzes: null
    };
  },
  mounted() {
    this.loadQuizzes();
  },
  methods: {
    async loadQuizzes() {
      try {
        let quizzes = await __WEBPACK_IMPORTED_MODULE_0__api___default.a.get('/admin/quiz');
        this.quizzes = quizzes.data;
      } catch (e) {
        console.log(e);
      }
    },
    create() {
      this.$router.push({
        name: 'CreateQuiz'
      });
    },
    async deleteQuiz(quiz) {
      try {
        await __WEBPACK_IMPORTED_MODULE_0__api___default.a.post('/admin/quiz/delete', {
          id: quiz.id
        });
        this.loadQuizzes();
      } catch (e) {
        console.log(e);
      }
    },
    edit(quiz) {
      this.$router.push({
        name: 'EditQuiz',
        params: { quiz }
      });
    }
  }
});

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api__);
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
  name: "Questions",
  data() {
    return {
      questions: []
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    async get() {
      try {
        const questions = await __WEBPACK_IMPORTED_MODULE_0__api___default.a.get('/admin/question');
        this.questions = questions.data;
      } catch (e) {
        console.log(e);
      }
    },
    edit(question) {
      this.$router.push({
        name: 'EditQuestion',
        params: { question }
      });
    },
    deleteQuestion(question) {},
    create() {
      this.$router.push({
        name: 'CreateQuestion'
      });
    }
  }
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic__);
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
  name: "CreateQuiz",
  data() {
    return {
      quizName: "",
      quizDescription: "",
      editor: __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic___default.a
    };
  },
  methods: {
    async save() {
      try {
        if (this.quizName.length <= 0 || this.quizDescription <= 0) {
          return;
        }
        const res = await __WEBPACK_IMPORTED_MODULE_0__api___default.a.post("/admin/quiz", {
          quizName: this.quizName,
          quizDescription: this.quizDescription
        });
        this.$router.push({
          name: "QuizOverview"
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic__);
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
  name: "EditQuiz",
  props: ["quiz"],
  data() {
    return {
      id: "",
      quizName: "",
      quizDescription: "",
      editor: __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic___default.a
    };
  },
  mounted() {
    if (typeof this.quiz === "undefined") {
      this.$router.push({
        name: 'QuizOverview'
      });
      return;
    }

    this.id = this.quiz.id;
    this.quizName = this.quiz.title;
    this.quizDescription = this.quiz.description;
  },
  methods: {
    async update() {
      try {
        if (this.quizName.length <= 0 || this.quizDescription <= 0) {
          return;
        }
        const res = await __WEBPACK_IMPORTED_MODULE_0__api___default.a.put("/admin/quiz", {
          id: this.id,
          quizName: this.quizName,
          quizDescription: this.quizDescription
        });
        this.$router.push({
          name: "QuizOverview"
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
});

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: "Categories",
  data() {
    return {
      categories: []
    };
  },
  methods: {
    edit(cat) {},
    deleteCategory(cat) {},
    create() {}
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic__);
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
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "CreateQuestion",
  data() {
    return {
      questionText: "",
      editor: __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic___default.a,
      numOptions: 3,
      categories: [{
        name: 'Uncategorized',
        id: 0
      }],
      options: [],
      correct: [],
      category: "",
      url: ""
    };
  },
  methods: {
    async save() {
      try {
        /* Validate the question */
        this.validate();

        /* Build options */
        let options = this.buildOptions();

        /* Create payload */
        const payload = {
          questionText: this.questionText,
          options: options,
          category: this.category,
          image: this.url
        };

        console.log(payload);

        const res = await __WEBPACK_IMPORTED_MODULE_0__api___default.a.post('/admin/question', payload);
      } catch (e) {
        this.$notify({
          group: 'warning',
          title: 'Error',
          text: e
        });
      }
    },
    validate() {
      if (this.questionText.length <= 0) {
        throw 'No question text inputted';
        return;
      }

      if (this.options.length <= 0) {
        throw 'Options are empty';
      }
    },
    buildOptions() {
      let res = [];
      for (let i = 0; i < this.options.length; i++) {
        let opt = this.options[i];
        let correct = this.correct[i];
        if (typeof opt === 'undefined') {
          continue;
        }
        if (typeof correct !== 'undefined') {
          if (correct === true) {
            res.push({
              optionText: opt,
              correct: true
            });
          }
        } else {
          res.push({
            optionText: opt,
            correct: false
          });
        }
      }
      return res;
    },
    addOption() {
      this.numOptions++;
    },
    addUploaderFunctionToButton() {
      var media_frame = wp.media({
        title: 'Select or Upload A File',
        button: { text: 'Use This' },
        multiple: false
      });
      media_frame.on('select', () => {
        var attachment = media_frame.state().get('selection').first().toJSON();
        this.url = attachment.url;
      });
      media_frame.open();
    }
  },
  watch: {
    url: function (val) {
      console.log(this.url);
    }
  }
});

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic__);
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
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "EditQuestion",
  props: ['question'],
  data() {
    return {
      ready: false,
      id: null,
      questionText: "",
      editor: __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_build_classic___default.a,
      categories: [{
        name: 'Uncategorized',
        id: 0
      }],
      options: [],
      category: "",
      url: ""
    };
  },
  mounted() {
    if (typeof this.question === 'undefined') {
      this.$router.push({
        name: 'QuestionOverview'
      });
      return;
    }
    this.get();
  },
  methods: {
    /* Get complete question to edit from db */
    async get() {
      try {
        const question = await __WEBPACK_IMPORTED_MODULE_0__api___default.a.get(`/admin/question/${this.question.id}`);
        this.questionText = question.data.question.text;
        this.url = question.data.question.img;
        this.id = question.data.question.id;
        let options = question.data.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].correct === "1") {
            options[i].correct = true;
          } else {
            options[i].correct = false;
          }
        }
        this.options = options;
        this.ready = true;
      } catch (e) {
        this.$notify({
          title: 'Error',
          text: e,
          type: 'error'
        });
      }
    },
    /* Save question to db */
    async save() {
      try {
        this.validate();

        const payload = {
          id: this.id,
          questionText: this.questionText,
          options: this.options,
          category: this.category,
          image: this.url
        };

        const res = await __WEBPACK_IMPORTED_MODULE_0__api___default.a.put('/admin/question', payload);

        this.$router.push({
          name: 'QuestionOverview'
        });
      } catch (e) {
        this.$notify({
          title: 'Error',
          text: e,
          type: 'error'
        });
      }
    },
    /* Validate correctness of question */
    validate() {
      if (this.questionText.length <= 0) {
        throw 'Question text field cannot be empty';
        return;
      }
      if (this.options.length <= 0) {
        throw 'Define atleast one option';
      }
      let numCorrect = 0;
      for (let i = 0; i < this.options.length; i++) {
        let opt = this.options[i];
        if (opt.correct === true) {
          numCorrect++;
        }
      }
      if (numCorrect == 0) {
        throw 'Select one option as correct';
      }
      if (numCorrect > 1) {
        throw 'Select ONLY one option as correct';
      }
    },
    /* Add new option */
    addOption() {
      this.options.push({
        text: "",
        correct: false
      });
    },
    /* Show wordpress media box */
    addUploaderFunctionToButton() {
      var media_frame = wp.media({
        title: 'Select or Upload A File',
        button: { text: 'Use This' },
        multiple: false
      });
      media_frame.on('select', () => {
        var attachment = media_frame.state().get('selection').first().toJSON();
        this.url = attachment.url;
      });
      media_frame.open();
    }
  }
});

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(207);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(210);

var _router2 = _interopRequireDefault(_router);

var _adminMenuFix = __webpack_require__(232);

var _adminMenuFix2 = _interopRequireDefault(_adminMenuFix);

var _ckeditor5Vue = __webpack_require__(163);

var _ckeditor5Vue2 = _interopRequireDefault(_ckeditor5Vue);

var _vueNotification = __webpack_require__(164);

var _vueNotification2 = _interopRequireDefault(_vueNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_ckeditor5Vue2.default);
_vue2.default.use(_vueNotification2.default);

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
    el: '#vue-admin-app',
    router: _router2.default,
    render: function render(h) {
        return h(_App2.default);
    }
});

// fix the admin menu for the slug "vue-app"
(0, _adminMenuFix2.default)('vue-app');

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(155);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bc4b6d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(209);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(208)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bc4b6d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bc4b6d8", Component.options)
  } else {
    hotAPI.reload("data-v-6bc4b6d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 208:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vue-backend-app" } },
    [
      _c("notifications", { attrs: { position: "bottom right" } }),
      _vm._v(" "),
      _c("h1", [_vm._v("WP Quiz Plugin")]),
      _vm._v(" "),
      _c("router-view")
    ],
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
    require("vue-hot-reload-api")      .rerender("data-v-6bc4b6d8", esExports)
  }
}

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(8);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Quiz = __webpack_require__(211);

var _Quiz2 = _interopRequireDefault(_Quiz);

var _Questions = __webpack_require__(214);

var _Questions2 = _interopRequireDefault(_Questions);

var _CreateQuiz = __webpack_require__(217);

var _CreateQuiz2 = _interopRequireDefault(_CreateQuiz);

var _EditQuiz = __webpack_require__(220);

var _EditQuiz2 = _interopRequireDefault(_EditQuiz);

var _Categories = __webpack_require__(223);

var _Categories2 = _interopRequireDefault(_Categories);

var _CreateQuestion = __webpack_require__(226);

var _CreateQuestion2 = _interopRequireDefault(_CreateQuestion);

var _EditQuestion = __webpack_require__(229);

var _EditQuestion2 = _interopRequireDefault(_EditQuestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
    routes: [{
        path: '/quiz',
        name: 'QuizOverview',
        component: _Quiz2.default
    }, {
        path: '/quiz/create',
        name: 'CreateQuiz',
        component: _CreateQuiz2.default
    }, {
        path: '/quiz/edit',
        name: 'EditQuiz',
        component: _EditQuiz2.default,
        props: true
    }, {
        path: '/questions',
        name: 'QuestionOverview',
        component: _Questions2.default
    }, {
        path: '/questions/create',
        name: 'CreateQuestion',
        component: _CreateQuestion2.default
    }, {
        path: '/questions/edit',
        name: 'EditQuestion',
        props: true,
        component: _EditQuestion2.default
    }, {
        path: '/categories',
        name: 'Categories',
        component: _Categories2.default
    }]
});

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Quiz_vue__ = __webpack_require__(156);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28f67cb6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Quiz_vue__ = __webpack_require__(213);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(212)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28f67cb6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Quiz_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28f67cb6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Quiz_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/Quiz.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28f67cb6", Component.options)
  } else {
    hotAPI.reload("data-v-28f67cb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 212:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "quiz" } }, [
    _c("h2", [_vm._v("Quiz overview")]),
    _vm.quizzes != null
      ? _c(
          "table",
          { staticClass: "wp-list-table widefat fixed striped pages" },
          [
            _vm._m(0),
            _c(
              "tbody",
              _vm._l(_vm.quizzes, function(quiz, idx) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(quiz.title))]),
                  _c("td", [_vm._v(_vm._s(quiz.description))]),
                  _c("td", [
                    _c("div", { staticClass: "button-group" }, [
                      _c(
                        "button",
                        {
                          staticClass: "button-primary",
                          on: {
                            click: function($event) {
                              return _vm.edit(quiz)
                            }
                          }
                        },
                        [_vm._v("Edit")]
                      ),
                      _c(
                        "button",
                        {
                          staticClass: "button-primary",
                          on: {
                            click: function($event) {
                              return _vm.deleteQuiz(quiz)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      )
                    ])
                  ])
                ])
              }),
              0
            )
          ]
        )
      : _vm._e(),
    _c("div", { staticClass: "tablenav bottom" }, [
      _c(
        "button",
        { staticClass: "button-primary", on: { click: _vm.create } },
        [_vm._v("+ Quiz")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "manage-column" }, [_vm._v("Quiz name")]),
        _c("th", { staticClass: "manage-column" }, [
          _vm._v("Quiz description")
        ]),
        _c("th", { staticClass: "manage-column" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-28f67cb6", esExports)
  }
}

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Questions_vue__ = __webpack_require__(157);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32ef292d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Questions_vue__ = __webpack_require__(216);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(215)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-32ef292d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Questions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32ef292d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Questions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/Questions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32ef292d", Component.options)
  } else {
    hotAPI.reload("data-v-32ef292d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 215:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "questions" } }, [
    _c("h2", [_vm._v("Question bank")]),
    _c("table", { staticClass: "wp-list-table widefat fixed striped pages" }, [
      _vm._m(0),
      _c(
        "tbody",
        _vm._l(_vm.questions, function(question, idx) {
          return _c("tr", [
            _c("td", { domProps: { innerHTML: _vm._s(question.text) } }),
            _c("td", [_vm._v(_vm._s(question.category))]),
            _c("td", [
              _c("div", { staticClass: "button-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "button-primary",
                    on: {
                      click: function($event) {
                        return _vm.edit(question)
                      }
                    }
                  },
                  [_vm._v("Edit")]
                ),
                _c(
                  "button",
                  {
                    staticClass: "button-primary",
                    on: {
                      click: function($event) {
                        return _vm.deleteQuestion(question)
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              ])
            ])
          ])
        }),
        0
      )
    ]),
    _c("div", { staticClass: "tablenav bottom" }, [
      _c(
        "button",
        { staticClass: "button-primary", on: { click: _vm.create } },
        [_vm._v("+ Question")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "manage-column" }, [_vm._v("Question")]),
        _c("th", { staticClass: "manage-column" }, [_vm._v("Category")]),
        _c("th", { staticClass: "manage-column" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32ef292d", esExports)
  }
}

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateQuiz_vue__ = __webpack_require__(158);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_750bc0c1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_CreateQuiz_vue__ = __webpack_require__(219);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(218)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateQuiz_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_750bc0c1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_CreateQuiz_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/CreateQuiz.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-750bc0c1", Component.options)
  } else {
    hotAPI.reload("data-v-750bc0c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 218:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "quiz" } }, [
    _c("table", { staticClass: "form-table" }, [
      _c("tbody", [
        _c("tr", { staticClass: "form-field" }, [
          _vm._m(0),
          _c("td", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.quizName,
                  expression: "quizName"
                }
              ],
              domProps: { value: _vm.quizName },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.quizName = $event.target.value
                }
              }
            })
          ])
        ]),
        _c("tr", { staticClass: "form-field" }, [
          _vm._m(1),
          _c(
            "td",
            [
              _c("ckeditor", {
                staticClass: "editor",
                attrs: { id: "quizDescription", editor: _vm.editor },
                model: {
                  value: _vm.quizDescription,
                  callback: function($$v) {
                    _vm.quizDescription = $$v
                  },
                  expression: "quizDescription"
                }
              })
            ],
            1
          )
        ])
      ])
    ]),
    _c("p", { staticClass: "submit" }, [
      _c(
        "button",
        {
          staticClass: "button-primary",
          on: {
            click: function($event) {
              return _vm.save()
            }
          }
        },
        [_vm._v("Save")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { attrs: { scope: "row" } }, [
      _c("label", [_vm._v("Quiz Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Quiz Description")])])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-750bc0c1", esExports)
  }
}

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditQuiz_vue__ = __webpack_require__(159);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64da8dcf_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_EditQuiz_vue__ = __webpack_require__(222);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditQuiz_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64da8dcf_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_EditQuiz_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/EditQuiz.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64da8dcf", Component.options)
  } else {
    hotAPI.reload("data-v-64da8dcf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "quiz" } }, [
    _c("table", { staticClass: "form-table" }, [
      _c("tbody", [
        _c("tr", { staticClass: "form-field" }, [
          _vm._m(0),
          _c("td", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.quizName,
                  expression: "quizName"
                }
              ],
              domProps: { value: _vm.quizName },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.quizName = $event.target.value
                }
              }
            })
          ])
        ]),
        _c("tr", { staticClass: "form-field" }, [
          _vm._m(1),
          _c(
            "td",
            [
              _c("ckeditor", {
                staticClass: "editor",
                attrs: { id: "quizDescription", editor: _vm.editor },
                model: {
                  value: _vm.quizDescription,
                  callback: function($$v) {
                    _vm.quizDescription = $$v
                  },
                  expression: "quizDescription"
                }
              })
            ],
            1
          )
        ])
      ])
    ]),
    _c("p", { staticClass: "submit" }, [
      _c(
        "button",
        {
          staticClass: "button-primary",
          on: {
            click: function($event) {
              return _vm.update()
            }
          }
        },
        [_vm._v("Save")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { attrs: { scope: "row" } }, [
      _c("label", [_vm._v("Quiz Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Quiz Description")])])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64da8dcf", esExports)
  }
}

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Categories_vue__ = __webpack_require__(160);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab694028_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Categories_vue__ = __webpack_require__(225);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(224)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ab694028"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Categories_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab694028_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Categories_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/Categories.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab694028", Component.options)
  } else {
    hotAPI.reload("data-v-ab694028", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 224:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "categories" } }, [
    _c("h2", [_vm._v("Categories")]),
    _c("table", { staticClass: "wp-list-table widefat fixed striped pages" }, [
      _vm._m(0),
      _c(
        "tbody",
        _vm._l(_vm.categories, function(cat, idx) {
          return _c("tr", [
            _c("td", [_vm._v(_vm._s(cat.name))]),
            _c("td", [
              _c("div", { staticClass: "button-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "button-primary",
                    on: {
                      click: function($event) {
                        return _vm.edit(cat)
                      }
                    }
                  },
                  [_vm._v("Edit")]
                ),
                _c(
                  "button",
                  {
                    staticClass: "button-primary",
                    on: {
                      click: function($event) {
                        return _vm.deleteCategory(cat)
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              ])
            ])
          ])
        }),
        0
      )
    ]),
    _c("div", { staticClass: "tablenav bottom" }, [
      _c(
        "button",
        { staticClass: "button-primary", on: { click: _vm.create } },
        [_vm._v("+ Category")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "manage-column" }, [_vm._v("Category name")]),
        _c("th", { staticClass: "manage-column" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ab694028", esExports)
  }
}

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateQuestion_vue__ = __webpack_require__(161);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63005fd2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_CreateQuestion_vue__ = __webpack_require__(228);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(227)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-63005fd2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateQuestion_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63005fd2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_CreateQuestion_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/CreateQuestion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63005fd2", Component.options)
  } else {
    hotAPI.reload("data-v-63005fd2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "quiz" } }, [
    _c("table", { staticClass: "form-table" }, [
      _c("tbody", [
        _c("tr", { staticClass: "form-field" }, [
          _vm._m(0),
          _c(
            "td",
            [
              _c("ckeditor", {
                staticClass: "editor",
                attrs: { id: "QuestionText", editor: _vm.editor },
                model: {
                  value: _vm.questionText,
                  callback: function($$v) {
                    _vm.questionText = $$v
                  },
                  expression: "questionText"
                }
              })
            ],
            1
          )
        ]),
        _c("tr", { staticClass: "form-field" }, [
          _vm._m(1),
          _c("td", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.url,
                  expression: "url"
                }
              ],
              domProps: { value: _vm.url },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.url = $event.target.value
                }
              }
            })
          ]),
          _c("td", [
            _c(
              "button",
              {
                staticClass: "primary-button",
                on: { click: _vm.addUploaderFunctionToButton }
              },
              [_vm._v("Add Image")]
            )
          ])
        ]),
        _c("tr", { staticClass: "form-field" }, [
          _vm._m(2),
          _c("td", [
            _c(
              "select",
              _vm._l(_vm.categories, function(cat, idx) {
                return _c(
                  "option",
                  {
                    domProps: { value: cat.id },
                    model: {
                      value: _vm.category,
                      callback: function($$v) {
                        _vm.category = $$v
                      },
                      expression: "category"
                    }
                  },
                  [_vm._v(_vm._s(cat.name))]
                )
              }),
              0
            )
          ])
        ])
      ])
    ]),
    _c("table", { staticClass: "wp-list-table widefat" }, [
      _vm._m(3),
      _c(
        "tbody",
        _vm._l(_vm.numOptions, function(idx) {
          return _c("tr", { staticClass: "form-field" }, [
            _c(
              "th",
              {
                staticClass: "manage-column column-cb check-column",
                attrs: { id: "cb" }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.correct[idx],
                      expression: "correct[idx]"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.correct[idx])
                      ? _vm._i(_vm.correct[idx], null) > -1
                      : _vm.correct[idx]
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.correct[idx],
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.correct, idx, $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.correct,
                              idx,
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.correct, idx, $$c)
                      }
                    }
                  }
                })
              ]
            ),
            _c("td", { staticClass: "manage-column" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.options[idx],
                    expression: "options[idx]"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.options[idx] },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.options, idx, $event.target.value)
                  }
                }
              })
            ])
          ])
        }),
        0
      )
    ]),
    _c("p", { staticClass: "submit" }, [
      _c(
        "button",
        {
          staticClass: "button-primary",
          on: {
            click: function($event) {
              return _vm.addOption()
            }
          }
        },
        [_vm._v("Add Option")]
      ),
      _c(
        "button",
        {
          staticClass: "button-primary",
          on: {
            click: function($event) {
              return _vm.save()
            }
          }
        },
        [_vm._v("Save")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Question text")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Image")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Category")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c(
        "td",
        {
          staticClass: "manage-column column-cb check-column",
          attrs: { id: "cb" }
        },
        [_vm._v("Correct")]
      ),
      _c("td", { staticClass: "manage-column" }, [_vm._v("Option text")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-63005fd2", esExports)
  }
}

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditQuestion_vue__ = __webpack_require__(162);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0565f5e0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_EditQuestion_vue__ = __webpack_require__(231);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(230)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0565f5e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditQuestion_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0565f5e0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_EditQuestion_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/EditQuestion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0565f5e0", Component.options)
  } else {
    hotAPI.reload("data-v-0565f5e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "quiz" } }, [
    _vm.ready
      ? _c("table", { staticClass: "form-table" }, [
          _c("tbody", [
            _c("tr", { staticClass: "form-field" }, [
              _vm._m(0),
              _c(
                "td",
                [
                  _c("ckeditor", {
                    staticClass: "editor",
                    attrs: { id: "QuestionText", editor: _vm.editor },
                    model: {
                      value: _vm.questionText,
                      callback: function($$v) {
                        _vm.questionText = $$v
                      },
                      expression: "questionText"
                    }
                  })
                ],
                1
              )
            ]),
            _c("tr", { staticClass: "form-field" }, [
              _vm._m(1),
              _c("td", [
                _c("span", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.url,
                        expression: "url"
                      }
                    ],
                    staticClass: "url-field",
                    domProps: { value: _vm.url },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.url = $event.target.value
                      }
                    }
                  }),
                  _c(
                    "button",
                    {
                      staticClass: "button-primary",
                      on: { click: _vm.addUploaderFunctionToButton }
                    },
                    [_vm._v("Add Image")]
                  )
                ])
              ])
            ]),
            _c("tr", { staticClass: "form-field" }, [
              _vm._m(2),
              _c("td", [
                _c(
                  "select",
                  _vm._l(_vm.categories, function(cat, idx) {
                    return _c(
                      "option",
                      {
                        domProps: { value: cat.id },
                        model: {
                          value: _vm.category,
                          callback: function($$v) {
                            _vm.category = $$v
                          },
                          expression: "category"
                        }
                      },
                      [_vm._v(_vm._s(cat.name))]
                    )
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      : _vm._e(),
    _c("table", { staticClass: "wp-list-table widefat" }, [
      _vm._m(3),
      _c(
        "tbody",
        _vm._l(_vm.options, function(option) {
          return _c("tr", { staticClass: "form-field" }, [
            _c(
              "th",
              {
                staticClass: "manage-column column-cb check-column",
                attrs: { id: "cb" }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: option.correct,
                      expression: "option.correct"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(option.correct)
                      ? _vm._i(option.correct, null) > -1
                      : option.correct
                  },
                  on: {
                    change: function($event) {
                      var $$a = option.correct,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(option, "correct", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              option,
                              "correct",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(option, "correct", $$c)
                      }
                    }
                  }
                })
              ]
            ),
            _c("td", { staticClass: "manage-column" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: option.text,
                    expression: "option.text"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: option.text },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(option, "text", $event.target.value)
                  }
                }
              })
            ])
          ])
        }),
        0
      )
    ]),
    _c("p", { staticClass: "submit" }, [
      _c(
        "button",
        {
          staticClass: "button-primary",
          on: {
            click: function($event) {
              return _vm.addOption()
            }
          }
        },
        [_vm._v("Add Option")]
      ),
      _c(
        "button",
        {
          staticClass: "button-primary",
          on: {
            click: function($event) {
              return _vm.save()
            }
          }
        },
        [_vm._v("Save")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Question text")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Image")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("label", [_vm._v("Category")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("td", { staticClass: "manage-column" }, [_vm._v("Correct")]),
      _c("td", { staticClass: "manage-column" }, [_vm._v("Option text")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0565f5e0", esExports)
  }
}

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * As we are using hash based navigation, hack fix
 * to highlight the current selected menu
 *
 * Requires jQuery
 */
function menuFix(slug) {
    var $ = jQuery;

    var menuRoot = $('#toplevel_page_' + slug);
    var currentUrl = window.location.href;
    var currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));

    menuRoot.on('click', 'a', function () {
        var self = $(this);

        $('ul.wp-submenu li', menuRoot).removeClass('current');

        if (self.hasClass('wp-has-submenu')) {
            $('li.wp-first-item', menuRoot).addClass('current');
        } else {
            self.parents('li').addClass('current');
        }
    });

    $('ul.wp-submenu a', menuRoot).each(function (index, el) {
        if ($(el).attr('href') === currentPath) {
            $(el).parent().addClass('current');
            return;
        }
    });
}

exports.default = menuFix;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axiosInstance = _axios2.default.create({
    baseURL: ajaxurl,
    headers: {
        'X-WP-Nonce': wpQuizNonce
    }
});

module.exports = axiosInstance;

/***/ })

},[206]);