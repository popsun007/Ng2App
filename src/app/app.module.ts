import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { CommonModule }             from '@angular/common';

import { NgModule }                 from '@angular/core';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }             from './app.component';

import { ComponentsModule }         from './components/components.module';
import { CoreModule }               from './core/core.module';
import { UserRoutingModule }        from './routes/user-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    JsonpModule,

    ComponentsModule,
    CoreModule,
    UserRoutingModule,
  ],
  exports: [
    CommonModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
