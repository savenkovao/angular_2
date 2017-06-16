import { NgModule }         from '@angular/core';

import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent }     from './app.component/index.js';
import { SubComponent }     from './sub.component/index.js';
import { IndComponent }     from './ind.component/index.js';
import { InputComponent }   from './input.component/index.js';
import { OutComponent }     from './out.component/index.js';
import { TwowayComponent }  from './twoway.component/index.js';
import { DataComponent }    from './data.component/index.js';
import { FormComponent }    from './form.component/index.js';
import { FormNgComponent }            from './form-ng.component/index.js';
import { FormValidationComponent }    from './form-valid.component/index.js';
import { FullValidFormComponent }     from './form_fv.component/index.js';


import { BoldDirective }    from './app.component/app.directive.js';
import { StrucDirective }   from './app.component/struc.directive';

import { PhoneService }     from  './app.component/phones.service';
import { LogService }       from './app.component/logger.service';



@NgModule ({
    imports:
        [
            BrowserModule,
            FormsModule
        ],

    declarations:
        [
            AppComponent,
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

            BoldDirective,
            StrucDirective
        ],
    providers: [ PhoneService, LogService ],

    bootstrap: [AppComponent]
})

export class AppModule {

}