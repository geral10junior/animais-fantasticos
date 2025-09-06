/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(list) {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, Accordion);\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"ativo\";\n  }\n  return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Accordion, [{\n    key: \"toggleAccordion\",\n    value: function toggleAccordion(item) {\n      item.classList.toggle(this.activeClass);\n      item.nextElementSibling.classList.toggle(this.activeClass);\n    }\n    // adiciona os eventos ao accordion\n  }, {\n    key: \"addAccordionEvent\",\n    value: function addAccordionEvent() {\n      var _this = this;\n      this.accordionList.forEach(function (item) {\n        item.addEventListener(\"click\", function () {\n          return _this.toggleAccordion(item);\n        });\n      });\n    }\n    //iniciar função\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.accordionList.length) {\n        //ativar primeiro item\n        this.toggleAccordion(this.accordionList[0]);\n        this.addAccordionEvent();\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?\n}");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitAnimaNumeros)\n/* harmony export */ });\nfunction InitAnimaNumeros() {\n  var numeros = document.querySelectorAll(\"[data-numero]\");\n  function animaNumeros() {\n    numeros.forEach(function (numero) {\n      var total = +numero.innerText;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25);\n    });\n  }\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  var observerTarget = document.querySelector(\".numeros\");\n  var observer = new MutationObserver(handleMutation);\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?\n}");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initDropdownMenu() {\n  var dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n  dropdownMenus.forEach(function (menu) {\n    [\"touchstart\", \"click\"].forEach(function (userEvent) {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add(\"ativo\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], function () {\n      _this.classList.remove(\"ativo\");\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?\n}");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/asyncToGenerator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/regenerator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\n\nfunction initFetchAnimais() {\n  function fetchAnimais(_x) {\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function _fetchAnimais() {\n    _fetchAnimais = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/asyncToGenerator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/regenerator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function _callee(url) {\n      var animaisReponse, animaisJSON, numerosGrid, _t;\n      return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/regenerator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 1;\n            return fetch(url);\n          case 1:\n            animaisReponse = _context.sent;\n            _context.next = 2;\n            return animaisReponse.json();\n          case 2:\n            animaisJSON = _context.sent;\n            numerosGrid = document.querySelector(\".numeros-grid\");\n            animaisJSON.forEach(function (animal) {\n              var divAnimal = createAnimal(animal);\n              numerosGrid.appendChild(divAnimal);\n            });\n            (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            _context.next = 4;\n            break;\n          case 3:\n            _context.prev = 3;\n            _t = _context[\"catch\"](0);\n            console.log(_t);\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 3]]);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function createAnimal(animal) {\n    var div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = \"<h3>\".concat(animal.specie, \"</h3>\\n                    <span data-numero>\").concat(animal.total, \"</span>\");\n    return div;\n  }\n  fetchAnimais(\"./animaisapi.json\");\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?\n}");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  var btcPreco = document.querySelector(\".btc-preco\");\n  fetch(\"https://blockchain.info/ticker\").then(function (response) {\n    response.json().then(function (json) {\n      return btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);\n    });\n  })[\"catch\"](function (erro) {\n    console.log(erro);\n  });\n}\n\n// https://blockchain.info/ticker\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?\n}");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  var funcionamento = document.querySelector(\"[data-semana]\");\n  var diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  var horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n  var dataAgora = new Date();\n  var diaAgora = dataAgora.getDay();\n  var horarioAgora = dataAgora.getHours();\n  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?\n}");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initMenuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var eventos = [\"click\"];\n  function openMenu(event) {\n    menuList.classList.add(\"ativo\");\n    menuButton.classList.add(\"ativo\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, function () {\n      menuList.classList.remove(\"ativo\");\n      menuButton.classList.remove(\"ativo\");\n    });\n  }\n  if (menuButton) {\n    eventos.forEach(function (evento) {\n      return menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?\n}");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  var botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  var containerModal = document.querySelector('[data-modal=\"container\"]');\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle(\"ativo\");\n  }\n  function clickForaModal(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener(\"click\", toggleModal);\n    botaoFechar.addEventListener(\"click\", toggleModal);\n    containerModal.addEventListener(\"click\", clickForaModal);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?\n}");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?\n}");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimation)\n/* harmony export */ });\nfunction initScrollAnimation() {\n  var sections = document.querySelectorAll(\"[data-anime='scroll']\");\n  var windowHalf = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - windowHalf < 0;\n      if (isSectionVisible) {\n        section.classList.add(\"ativo\");\n      } else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n  if (sections.length) {\n    window.addEventListener(\"scroll\", animaScroll);\n    animaScroll();\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?\n}");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollToSection)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar ScrollToSection = /*#__PURE__*/function () {\n  function ScrollToSection(links, options) {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, ScrollToSection);\n    this.internalLinks = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\"\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ScrollToSection, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute(\"href\");\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n      // forma alternativa\n      //  const top = section.offsetTop;\n      // window.scrollTo({\n      //   top: top,\n      //   behavior: \"smooth\",\n      // });\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      this.internalLinks.forEach(function (link) {\n        link.addEventListener(\"click\", _this.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.internalLinks.length) {\n        this.addLinkEvent();\n      }\n      return this;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?\n}");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar initTabNav = /*#__PURE__*/function () {\n  function initTabNav(menu, content) {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, initTabNav);\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = \"ativo\";\n  }\n  return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(initTabNav, [{\n    key: \"activeTab\",\n    value: function activeTab(index) {\n      var _this = this;\n      this.tabContent.forEach(function (section) {\n        section.classList.remove(_this.activeClass);\n      });\n      var direction = this.tabContent[index].dataset.anime;\n      this.tabContent[index].classList.add(this.activeClass, direction);\n    }\n    //adiciona os eventos nos tabs\n  }, {\n    key: \"addTabNavEvent\",\n    value: function addTabNavEvent() {\n      var _this2 = this;\n      this.tabMenu.forEach(function (itemMenu, index) {\n        itemMenu.addEventListener(\"click\", function () {\n          return _this2.activeTab(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tabMenu.length && this.tabContent.length) {\n        //ativar primeiro item\n        this.activeTab(0);\n        this.addTabNavEvent();\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?\n}");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\n  var tooltips = document.querySelectorAll(\"[data-tooltip]\");\n  function onMouseOver() {\n    var tooltipBox = criarTooltipBox(this);\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener(\"mousemove\", onMouseMove);\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener(\"mouseleave\", onMouseLeave);\n  }\n  var onMouseLeave = {\n    tooltipBox: \"\",\n    element: \"\",\n    handleEvent: function handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    }\n  };\n  var onMouseMove = {\n    handleEvent: function handleEvent(event) {\n      this.tooltipBox.style.top = event.pageY + 20 + \"px\";\n      this.tooltipBox.style.left = event.pageX + 20 + \"px\";\n    }\n  };\n  tooltips.forEach(function (item) {\n    item.addEventListener(\"mouseover\", onMouseOver);\n  });\n  function criarTooltipBox(element) {\n    var tooltipBox = document.createElement(\"div\");\n    var text = element.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?\n}");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anime='accordion'] dt\");\naccordion.init();\nvar tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-tab='menu'] li\", \"[data-tab='content'] section\");\ntabNav.init();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;