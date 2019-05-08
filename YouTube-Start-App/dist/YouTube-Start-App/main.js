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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-videos></app-videos>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'YouTube-Start-App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _videos_video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videos/video/video.component */ "./src/app/videos/video/video.component.ts");
/* harmony import */ var _videos_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos/video-list/video-list.component */ "./src/app/videos/video-list/video-list.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _form_modal_new_video_form_modal_new_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-modal-new-video/form-modal-new-video.component */ "./src/app/form-modal-new-video/form-modal-new-video.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _videos_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"],
                _videos_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_6__["VideoListComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__["VideosComponent"],
                _form_modal_new_video_form_modal_new_video_component__WEBPACK_IMPORTED_MODULE_9__["FormModalNewVideoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _form_modal_new_video_form_modal_new_video_component__WEBPACK_IMPORTED_MODULE_9__["FormModalNewVideoComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form-modal-new-video/form-modal-new-video.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/form-modal-new-video/form-modal-new-video.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal Title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\"\n     (click)=\"activeModal.dismiss('Cross click')\">\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>My modal content</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button (click)=\"activeModal.dismiss('Close clicked')\">\n      Close Clicked\n    </button>\n  </div> -->\n\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">My Form</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n  </button>\n</div>\n<form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-boy\">\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\">\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-success\" [disabled]=\"!myForm.valid\">\n      Submit Form\n    </button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/form-modal-new-video/form-modal-new-video.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/form-modal-new-video/form-modal-new-video.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kYWwtbmV3LXZpZGVvL2Zvcm0tbW9kYWwtbmV3LXZpZGVvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/form-modal-new-video/form-modal-new-video.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/form-modal-new-video/form-modal-new-video.component.ts ***!
  \************************************************************************/
/*! exports provided: FormModalNewVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModalNewVideoComponent", function() { return FormModalNewVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var FormModalNewVideoComponent = /** @class */ (function () {
    function FormModalNewVideoComponent(activeModal, formBuilder) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.createForm();
    }
    FormModalNewVideoComponent.prototype.ngOnInit = function () {
    };
    FormModalNewVideoComponent.prototype.createForm = function () {
        this.myForm = this.formBuilder.group({
            username: '',
            password: ''
        });
    };
    FormModalNewVideoComponent.prototype.submitForm = function () {
        this.activeModal.close(this.myForm.value);
    };
    FormModalNewVideoComponent.prototype.closeModal = function () {
        this.activeModal.close('Modal Closed');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormModalNewVideoComponent.prototype, "id", void 0);
    FormModalNewVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-modal-new-video',
            template: __webpack_require__(/*! ./form-modal-new-video.component.html */ "./src/app/form-modal-new-video/form-modal-new-video.component.html"),
            styles: [__webpack_require__(/*! ./form-modal-new-video.component.scss */ "./src/app/form-modal-new-video/form-modal-new-video.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormModalNewVideoComponent);
    return FormModalNewVideoComponent;
}());



/***/ }),

/***/ "./src/app/shared/video.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/video.service.ts ***!
  \*****************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
        this.rootURL = 'http://localhost:58965/api';
    }
    VideoService.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.rootURL + '/Video')
            .toPromise().then(function (res) { return _this.list = res; });
    };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/videos/video-list/video-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/videos/video-list/video-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <tr *ngFor=\"let video of service.videoList\">\n    <td class=\"container-fluid d-flex video-container\">\n      <div class=\"video-box\">\n        {{video.url}}\n      </div>\n      <div class=\"d-flex flex-wrap video-info bg-light align-content-between\">\n          <div class=\"d-flex justify-content-between w-100 m-2\">\n            <span class=\"title\">{{video.title}}</span>\n            <button class=\"icon remove btn\">&times;</button>\n          </div>\n          <div class=\"d-flex justify-content-between w-100 m-2\">\n            <span class=\"load-date\">{{video.postedDate}}</span>\n            <div class=\"score\">{{video.avScore}}</div>\n          </div>\n      </div>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/videos/video-list/video-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/videos/video-list/video-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.remove {\n  font-size: 40px;\n  line-height: 15px;\n  background-color: #CF2D00;\n  color: white;\n  border: none;\n  padding: 0;\n  border-radius: 25%;\n  width: 50px;\n  height: 50px; }\n\n.video-box {\n  background-color: #989898;\n  width: 200px; }\n\n.video-container {\n  height: 200px; }\n\n.video-info {\n  min-width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3ZpZGVvLWxpc3QvQzpcXFVzZXJzXFx1c2VyXFxzb3VyY2VcXHJlcG9zXFxZb3V0dWJlLVN0YXJ0LUFwcFxcWW91VHViZS1TdGFydC1BcHAvc3JjXFxhcHBcXHZpZGVvc1xcdmlkZW8tbGlzdFxcdmlkZW8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQVhrQjtFQVlsQixZQVprQixFQUFBOztBQWV0QjtFQUNJLHlCQUF5QjtFQUN6QixZQWhCa0IsRUFBQTs7QUFtQnRCO0VBQ0ksYUFwQmtCLEVBQUE7O0FBdUJ0QjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRidG4tcmVtb3ZlLXNpemU6IDUwcHg7XHJcbiR2aWRlby1ib3gtc2l6ZTogMjAwcHg7XHJcblxyXG5idXR0b24ucmVtb3ZlIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGMkQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICB3aWR0aDogJGJ0bi1yZW1vdmUtc2l6ZTtcclxuICAgIGhlaWdodDogJGJ0bi1yZW1vdmUtc2l6ZTtcclxufVxyXG5cclxuLnZpZGVvLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4O1xyXG4gICAgd2lkdGg6ICR2aWRlby1ib3gtc2l6ZTtcclxufVxyXG5cclxuLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6ICR2aWRlby1ib3gtc2l6ZTtcclxufVxyXG5cclxuLnZpZGVvLWluZm8ge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/videos/video-list/video-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/videos/video-list/video-list.component.ts ***!
  \***********************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/video.service */ "./src/app/shared/video.service.ts");



var VideoListComponent = /** @class */ (function () {
    function VideoListComponent(service) {
        this.service = service;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        this.service.refreshList();
    };
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/videos/video-list/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.scss */ "./src/app/videos/video-list/video-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/videos/video/video.component.html":
/*!***************************************************!*\
  !*** ./src/app/videos/video/video.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/videos/video/video.component.scss":
/*!***************************************************!*\
  !*** ./src/app/videos/video/video.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/videos/video/video.component.ts":
/*!*************************************************!*\
  !*** ./src/app/videos/video/video.component.ts ***!
  \*************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/videos/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/videos/video/video.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos.component.html":
/*!**********************************************!*\
  !*** ./src/app/videos/videos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 d-flex justify-content-between\">\n      <div class=\"\">\n        <a class=\"active px-2 pb-1\">Последние</a>\n        <a class=\"\">Топ 10</a>\n      </div>\n      <div class=\"\">\n          <button (click)=\"openFormModal()\">+ Добавить ролик</button>\n      </div>\n    </div>\n    <app-video-list></app-video-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/videos/videos.component.scss":
/*!**********************************************!*\
  !*** ./src/app/videos/videos.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.active {\n  background-color: #989898;\n  color: white;\n  border-radius: 10px; }\n\na:hover {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL0M6XFxVc2Vyc1xcdXNlclxcc291cmNlXFxyZXBvc1xcWW91dHViZS1TdGFydC1BcHBcXFlvdVR1YmUtU3RhcnQtQXBwL3NyY1xcYXBwXFx2aWRlb3NcXHZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ODk4OTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/videos/videos.component.ts":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _form_modal_new_video_form_modal_new_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-modal-new-video/form-modal-new-video.component */ "./src/app/form-modal-new-video/form-modal-new-video.component.ts");




var VideosComponent = /** @class */ (function () {
    function VideosComponent(modalService) {
        this.modalService = modalService;
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent.prototype.openFormModal = function () {
        var modalRef = this.modalService.open(_form_modal_new_video_form_modal_new_video_component__WEBPACK_IMPORTED_MODULE_3__["FormModalNewVideoComponent"]);
        modalRef.result.then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.scss */ "./src/app/videos/videos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], VideosComponent);
    return VideosComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\source\repos\Youtube-Start-App\YouTube-Start-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map