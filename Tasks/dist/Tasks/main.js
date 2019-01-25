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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n    padding-bottom: 50px;\r\n}\r\nh1 {\r\n    padding: 25px;\r\n    padding-left: 80px;\r\n}\r\nh4 {\r\n    width: 1200px;\r\n    margin-left: 80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcbmgxIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbn1cclxuaDQge1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"wrapper\">\n  <h1>Tasks</h1>\n\n  <h4>This is a mini-app where you can create, update, delete, and keep track of various chores or\n    jobs that you have filled out on this website in the form of a table. If you have trouble\n    keeping track of jobs to do, then try this app! It's free and easy to use! </h4>\n  <app-tasks></app-tasks>\n</div>"

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
        this.title = 'Tasks';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var TaskService = /** @class */ (function () {
    function TaskService(_http) {
        this._http = _http;
    }
    TaskService.prototype.getAllTasks = function () {
        return this._http.get("/tasks");
    };
    TaskService.prototype.addTask = function (newtask) {
        return this._http.post("/tasks", newtask);
    };
    TaskService.prototype.getTask = function (id) {
        return this._http.get("/tasks/" + id);
    };
    TaskService.prototype.editTask = function (id, edittask) {
        return this._http.put("/tasks/" + id, edittask);
    };
    TaskService.prototype.deleteTask = function (id) {
        return this._http.delete("/tasks/" + id);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tasknew {\r\n    margin: 10px;\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n    padding-left: 70px;\r\n}\r\n#tasknew span, #edittask span {\r\n    color:rgb(212, 42, 42);\r\n}\r\ninput {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\ninput[type = \"submit\"] {\r\n    margin-left: 15px;\r\n}\r\n#greyline {\r\n    height: 2px;\r\n    background-color: grey;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n#tasklist {\r\n    margin-left: 60px;\r\n    margin-right: 40px;\r\n}\r\n#tasklist button {\r\n    margin-left: 5px;\r\n}\r\n#edittask {\r\n    margin: auto;\r\n    padding: 15px;\r\n    background-color: rgb(172, 193, 238);\r\n    border-radius: 10px;\r\n    width: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFza25ldyB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxufVxyXG4jdGFza25ldyBzcGFuLCAjZWRpdHRhc2sgc3BhbiB7XHJcbiAgICBjb2xvcjpyZ2IoMjEyLCA0MiwgNDIpO1xyXG59XHJcbmlucHV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5pbnB1dFt0eXBlID0gXCJzdWJtaXRcIl0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuI2dyZXlsaW5lIHtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbiN0YXNrbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG4jdGFza2xpc3QgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuI2VkaXR0YXNrIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAxOTMsIDIzOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"main\">\n  <div id = \"tasknew\">\n    <form (submit) = \"createTask()\" #taskData = \"ngForm\">\n      <span *ngIf = \"task.invalid && (task.dirty || task.touched)\" >\n        <span *ngIf = \"task.errors.minlength\">Task must be at least 5 characters long</span>\n      </span><br/>\n      Task: \n      <input type = \"text\" name = \"task\" [(ngModel)] = \"newTask.task\" #task = \"ngModel\"\n        ngModel required minlength = \"5\" size = \"40\" placeholder = \"Add a task...\"/>\n  \n      <input type = \"submit\" value = \"Create task\" \n      class = \"btn btn-success\" [disabled] = \"taskData.form.invalid\"/>\n    </form>\n  </div>\n\n  <div id = \"greyline\"></div>\n\n  <div id = \"tasklist\">\n    <h3>Task List</h3><br/>\n\n    <table class = \"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th scope = \"col\">ID</th>\n          <th scope = \"col\">Task Name</th>\n          <th scope = \"col\">Date Created</th>\n          <th scope = \"col\">Date Updated</th>\n          <th scope = \"col\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let task of tasks; index as i\">\n          <td>{{i + 1}}</td>\n          <td>{{task.task}}</td>\n          <td>{{task.created_at | date: \"short\"}}</td>\n          <td>{{task.updated_at | date: \"short\"}}</td>\n          <td>\n            <button class = \"btn btn-primary\" (click) = \"getSingleTask(task)\">Edit</button>\n            <button class = \"btn btn-secondary\" (click) = \"deleteTask(task)\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div id = \"edittask\" *ngIf = \"show\">\n    <h3>Edit Task</h3>\n    <form (submit) = \"editSingleTask()\" #taskData = \"ngForm\">\n      <span *ngIf = \"task.invalid && (task.dirty || task.touched)\" >\n        <span *ngIf = \"task.errors.minlength\">Task must be at least 5 characters long</span>\n      </span><br/>\n\n      <input type = \"text\" name = \"task\" [(ngModel)] = \"editTask.task\" #task = \"ngModel\"\n        ngModel required minlength = \"5\" size = \"40\" placeholder = \"Edit task...\"/>\n  \n      <input type = \"submit\" value = \"Save Edit\" \n      class = \"btn btn-info\" [disabled] = \"taskData.form.invalid\"/>\n    </form>\n    <button class = \"btn btn-secondary\" (click) = \"cancel()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");



var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.show = false;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.newTask = { task: "", created_at: Date.now(), updated_at: Date.now() };
        this.getTasks();
    };
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        var t = this.taskService.getAllTasks();
        t.subscribe(function (data) {
            _this.tasks = data;
        });
    };
    TasksComponent.prototype.createTask = function () {
        var create = this.taskService.addTask({ task: this.newTask.task,
            created_at: this.newTask.created_at, updated_at: this.newTask.updated_at });
        create.subscribe();
        this.newTask = { task: "", created_at: Date.now(), updated_at: Date.now() };
        this.getTasks();
    };
    TasksComponent.prototype.getSingleTask = function (task) {
        this.editTask = task;
        this.task = task;
        var id = this.tasks.indexOf(this.task);
        this.taskService.getTask(id);
        this.copy = Object.assign({}, this.task);
        this.show = true;
    };
    TasksComponent.prototype.cancel = function () {
        Object.assign(this.task, this.copy);
        this.show = false;
    };
    TasksComponent.prototype.editSingleTask = function () {
        var id = this.tasks.indexOf(this.editTask);
        var edit = this.taskService.editTask(id, this.editTask);
        edit.subscribe();
        this.show = false;
        this.getTasks();
    };
    TasksComponent.prototype.deleteTask = function (task) {
        var id = this.tasks.indexOf(task);
        var deleted = this.taskService.deleteTask(id);
        deleted.subscribe();
        this.getTasks();
        this.show = false;
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], TasksComponent);
    return TasksComponent;
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

module.exports = __webpack_require__(/*! c:\CodingDojo\js_frontend\angular\Advanced\Tasks\Tasks\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map