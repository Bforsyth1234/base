(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brooks/dev/base/base/apps/base-app/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "QEqh");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "X05W");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "uUud");








class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["base-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Jhc2UtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'base-root',
                templateUrl: 'app.component.html',
                styleUrls: ['app.component.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }, { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"] }, { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }]; }, null); })();


/***/ }),

/***/ "YENW":
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/brooks/dev/base/base/node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"QxSe",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"ltE9",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"9hhX",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"//xl",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"+K/u",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"k1gA",
		5
	],
	"./ion-button_2.entry.js": [
		"50oj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"xFsY",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"RJ1u",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"47oD",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"m06n",
		10
	],
	"./ion-datetime_3.entry.js": [
		"S4qt",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"DcYZ",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"4mo6",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"Ep1F",
		14
	],
	"./ion-input.entry.js": [
		"gbcS",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"CO/d",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"dwh+",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"gV1/",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"FmDK",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"NdYB",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"wRbG",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"fSck",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"H/LO",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"nwec",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"CrL9",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"xk0+",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"2GP2",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"7y2o",
		28
	],
	"./ion-route_4.entry.js": [
		"j6cJ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"2tYH",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"V2Ou",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"AT0W",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"HBeB",
		33
	],
	"./ion-spinner.entry.js": [
		"y9YI",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"Uwey",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"A0Vd",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"2ByS",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"nERb",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"R+o9",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"mPhc",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"BgZi",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"x+YG",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "YENW";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "QEqh");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "X05W");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "uUud");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] },
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                entryComponents: [],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
                providers: [
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
                    _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
                    { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map