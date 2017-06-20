import { NgModule }         from '@angular/core';

import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http'
import { Routes, RouterModule } from '@angular/router';


import { AppComponent }     from './app.component/index.js';
//routes
import { HomeComponent }   from './routes/home.component/index.js';
import { LoginComponent }   from './routes/login.component/index.js';
import { AboutComponent }   from './routes/about.component/index.js';
import { NotFoundComponent }   from './routes/not-found.component/index.js';


import { SubComponent }     from './components/sub.component/index.js';
import { IndComponent }     from './components/ind.component/index.js';
import { InputComponent }   from './components/input.component/index.js';
import { OutComponent }     from './components/out.component/index.js';
import { TwowayComponent }  from './components/twoway.component/index.js';
import { DataComponent }    from './components/data.component/index.js';
import { FormComponent }    from './components/form.component/index.js';
import { FormNgComponent }            from './components/form-ng.component/index.js';
import { FormValidationComponent }    from './components/form-valid.component/index.js';
import { FullValidFormComponent }     from './components/form_fv.component/index.js';
import { FormDdrComponent }  from './components/form-ddr.component/index.js';
import { HttpComponent }     from './components/http.component/index.js';
import { HttpServerComponent} from './components/http-server.component/index.js';
import { HttpPostComponent } from './components/http-post.component/index.js';
import { ItemComponent } from './components/item.component/index.js';

import { BoldDirective }    from './app.component/app.directive.js';
import { StrucDirective }   from './app.component/struc.directive';

import { PhoneService }     from  './app.component/phones.service';
import { LogService }       from './app.component/logger.service';

//определение маршрутов (routes)
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contact', component: AboutComponent},
    {path: 'events', redirectTo: '/'},
    {path: 'news', redirectTo: '/', pathMatch:'full'},
    {path: 'item/:id', component: ItemComponent},
    {path: '**', component: NotFoundComponent}
];



@NgModule ({
    imports:
        [
            BrowserModule,
            RouterModule.forRoot(appRoutes),
            FormsModule,
            ReactiveFormsModule,
            HttpModule
        ],

    declarations:
        [
            AppComponent,
            HomeComponent,
            AboutComponent,
            LoginComponent,
            NotFoundComponent,

            SubComponent,
            IndComponent,
            InputComponent,
            OutComponent,
            TwowayComponent,
            DataComponent,
            FormComponent,
            FormNgComponent,
            FormValidationComponent,
            FullValidFormComponent,
            FormDdrComponent,
            HttpComponent,
            HttpServerComponent,
            HttpPostComponent,
            ItemComponent,

            BoldDirective,
            StrucDirective
        ],
    providers: [ PhoneService, LogService ],

    bootstrap: [AppComponent]
})

export class AppModule {

}