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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var index_js_1 = require("./app.component/index.js");
//routes
var index_js_2 = require("./routes/home.component/index.js");
var index_js_3 = require("./routes/login.component/index.js");
var index_js_4 = require("./routes/about.component/index.js");
var index_js_5 = require("./routes/not-found.component/index.js");
var index_js_6 = require("./components/sub.component/index.js");
var index_js_7 = require("./components/ind.component/index.js");
var index_js_8 = require("./components/input.component/index.js");
var index_js_9 = require("./components/out.component/index.js");
var index_js_10 = require("./components/twoway.component/index.js");
var index_js_11 = require("./components/data.component/index.js");
var index_js_12 = require("./components/form.component/index.js");
var index_js_13 = require("./components/form-ng.component/index.js");
var index_js_14 = require("./components/form-valid.component/index.js");
var index_js_15 = require("./components/form_fv.component/index.js");
var index_js_16 = require("./components/form-ddr.component/index.js");
var index_js_17 = require("./components/http.component/index.js");
var index_js_18 = require("./components/http-server.component/index.js");
var index_js_19 = require("./components/http-post.component/index.js");
var index_js_20 = require("./components/item.component/index.js");
var app_directive_js_1 = require("./app.component/app.directive.js");
var struc_directive_1 = require("./app.component/struc.directive");
var phones_service_1 = require("./app.component/phones.service");
var logger_service_1 = require("./app.component/logger.service");
//определение маршрутов (routes)
var appRoutes = [
    { path: '', component: index_js_2.HomeComponent },
    { path: 'about', component: index_js_4.AboutComponent },
    { path: 'login', component: index_js_3.LoginComponent },
    { path: 'contact', component: index_js_4.AboutComponent },
    { path: 'events', redirectTo: '/' },
    { path: 'news', redirectTo: '/', pathMatch: 'full' },
    { path: 'item/:id', component: index_js_20.ItemComponent },
    { path: '**', component: index_js_5.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule
        ],
        declarations: [
            index_js_1.AppComponent,
            index_js_2.HomeComponent,
            index_js_4.AboutComponent,
            index_js_3.LoginComponent,
            index_js_5.NotFoundComponent,
            index_js_6.SubComponent,
            index_js_7.IndComponent,
            index_js_8.InputComponent,
            index_js_9.OutComponent,
            index_js_10.TwowayComponent,
            index_js_11.DataComponent,
            index_js_12.FormComponent,
            index_js_13.FormNgComponent,
            index_js_14.FormValidationComponent,
            index_js_15.FullValidFormComponent,
            index_js_16.FormDdrComponent,
            index_js_17.HttpComponent,
            index_js_18.HttpServerComponent,
            index_js_19.HttpPostComponent,
            index_js_20.ItemComponent,
            app_directive_js_1.BoldDirective,
            struc_directive_1.StrucDirective
        ],
        providers: [phones_service_1.PhoneService, logger_service_1.LogService],
        bootstrap: [index_js_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map