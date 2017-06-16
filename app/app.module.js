"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var index_js_1 = require("./app.component/index.js");
var index_js_2 = require("./sub.component/index.js");
var index_js_3 = require("./ind.component/index.js");
var index_js_4 = require("./input.component/index.js");
var index_js_5 = require("./out.component/index.js");
var index_js_6 = require("./twoway.component/index.js");
var index_js_7 = require("./data.component/index.js");
var index_js_8 = require("./form.component/index.js");
var index_js_9 = require("./form-ng.component/index.js");
var index_js_10 = require("./form-valid.component/index.js");
var index_js_11 = require("./form_fv.component/index.js");
var app_directive_js_1 = require("./app.component/app.directive.js");
var struc_directive_1 = require("./app.component/struc.directive");
var phones_service_1 = require("./app.component/phones.service");
var logger_service_1 = require("./app.component/logger.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            index_js_1.AppComponent,
            index_js_2.SubComponent,
            index_js_3.IndComponent,
            index_js_4.InputComponent,
            index_js_5.OutComponent,
            index_js_6.TwowayComponent,
            index_js_7.DataComponent,
            index_js_8.FormComponent,
            index_js_9.FormNgComponent,
            index_js_10.FormValidationComponent,
            index_js_11.FullValidFormComponent,
            app_directive_js_1.BoldDirective,
            struc_directive_1.StrucDirective
        ],
        providers: [phones_service_1.PhoneService, logger_service_1.LogService],
        bootstrap: [index_js_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map