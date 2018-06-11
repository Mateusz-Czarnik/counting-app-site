(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _containers_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/app/app.component */ "./src/app/containers/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validators_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/validators/validators.service */ "./src/app/services/validators/validators.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _containers_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            providers: [
                _services_validators_validators_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorsService"]
            ],
            bootstrap: [
                _containers_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/containers/app/app.component.scss":
/*!***************************************************!*\
  !*** ./src/app/containers/app/app.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrapper {\n  max-width: 800px;\n  width: 96%;\n  margin: 0 auto; }\n\nh1 {\n  background: #8022b0;\n  text-align: center;\n  color: white;\n  margin: 0;\n  padding: 10px; }\n\n.form {\n  display: flex;\n  flex-flow: row wrap;\n  margin: 50px 0; }\n\n.form input {\n    outline: 0;\n    font-size: 16px;\n    padding: 10px 40px 10px 15px;\n    margin: 0;\n    width: 100%;\n    background: #fff;\n    color: #545e6f;\n    flex-grow: 1;\n    border: 1px solid #d1deeb;\n    border-radius: 3px;\n    transition: all 0.2s ease-in-out; }\n\n.form .error {\n    color: #a94442;\n    background: #f2dede;\n    border: 1px solid #e4b3b3;\n    border-radius: 2px;\n    padding: 8px;\n    font-size: 14px;\n    font-weight: 400;\n    margin: 10px 0 0; }\n\n.form button {\n    cursor: pointer;\n    outline: 0;\n    border: 0;\n    border-radius: 2px;\n    background: #39a1e7;\n    color: #fff;\n    padding: 10px 18px;\n    font-size: 16px;\n    font-weight: 600;\n    transition: all 0.2s ease-in-out;\n    display: block;\n    margin: 20px auto; }\n\n.form .input-wrapper {\n    width: 45%;\n    min-height: 140px; }\n\n.form .input-wrapper:first-child {\n      margin-right: auto; }\n\n.form .input-wrapper:last-child {\n      margin-left: auto; }\n\n.form hr {\n    width: 100%; }\n\nh3 {\n  width: 100%;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/containers/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/containers/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validators_validators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validators/validators.service */ "./src/app/services/validators/validators.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(fb, vs) {
        this.fb = fb;
        this.vs = vs;
        this.list = [];
        this.form = this.fb.group({
            firstNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.vs.isInteger]],
            secondNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.vs.isInteger]],
        });
    }
    AppComponent.prototype.handleClick = function () {
        if (this.form.valid) {
            var formVal = this.form.value;
            this.result = this.calculateFormula(parseInt(formVal.firstNumber), parseInt(formVal.secondNumber));
            this.generateList(this.result);
        }
    };
    AppComponent.prototype.calculateFormula = function (a, b) {
        return a + a * a - b + b * b;
    };
    AppComponent.prototype.generateList = function (elements) {
        this.list = [];
        for (var i = 0; i <= elements; i++) {
            this.list.push(i);
        }
    };
    AppComponent.prototype.numberFormat = function (controlName) {
        var control = this.form.get(controlName);
        return control.hasError('notNumeric') && control.touched;
    };
    AppComponent.prototype.required = function (controlName) {
        var control = this.form.get(controlName);
        return control.hasError('required') && control.touched;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/containers/app/app.component.scss")],
            template: "\n      <h1>Enter two whole numbers to calculate result</h1>\n      <div class=\"wrapper\">\n          <div [formGroup]=\"form\" class=\"form\">\n              <div class=\"input-wrapper\">\n                  <label class=\"\">\n                      <input\n                        class=\"\"\n                        type=\"text\"\n                        placeholder=\"First number\"\n                        formControlName=\"firstNumber\"\n                      >\n                  </label>\n                  <div class=\"error\" *ngIf=\"numberFormat('firstNumber')\">\n                      Must be numeric value\n                  </div>\n                  <div class=\"error\" *ngIf=\"required('firstNumber')\">\n                      Field is required\n                  </div>\n              </div>\n              <div class=\"input-wrapper\">\n                  <label class=\"\">\n                      <input\n                        class=\"\"\n                        type=\"text\"\n                        placeholder=\"Second number\"\n                        formControlName=\"secondNumber\"\n                      >\n                  </label>\n                  <div class=\"error\" *ngIf=\"numberFormat('secondNumber')\">\n                      Must be numeric value\n                  </div>\n                  <div class=\"error\" *ngIf=\"required('secondNumber')\">\n                      Field is required\n                  </div>\n              </div>\n              <hr>\n              <h3>Calculating formula: a + a * a - b + b * b</h3>\n              <h3>Result: {{ result }}</h3>\n              <button (click)=\"handleClick()\">Calculate</button>\n          </div>\n          <h3 *ngIf=\"list.length\">List of indexes:</h3>\n          <div *ngIf=\"result > 0 ; else message\">\n              <div *ngFor=\"let number of list\">\n                  {{number}}\n              </div>\n          </div>\n          <ng-template #message>\n              <h3 *ngIf=\"result < 0\">Cannot generate list of indexes</h3>\n          </ng-template>\n      </div>\n  "
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_validators_validators_service__WEBPACK_IMPORTED_MODULE_2__["ValidatorsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/services/validators/validators.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/validators/validators.service.ts ***!
  \***********************************************************/
/*! exports provided: ValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorsService", function() { return ValidatorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function isInteger(value) {
    return (parseFloat(value) == parseInt(value)) && !isNaN(value);
}
var ValidatorsService = /** @class */ (function () {
    function ValidatorsService() {
        this.isInteger = function (control) { return isInteger(control.value) ? null : { notNumeric: true }; };
    }
    ValidatorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ValidatorsService);
    return ValidatorsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webdev\VML\Angular_zadania\counting-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map