import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import 'hammerjs';

import { AppComponent } from './app.component';
// import { ComponentsModule }         from './components/components.module';
// import { CoreModule }               from './core/core.module';
// import { UserRoutingModule }        from './routes/user-routing.module';
// import { ItemsComponent } from './items/items.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NoopAnimationsModule,
    ReactiveFormsModule,

    // ComponentsModule,
    // CoreModule,
    // UserRoutingModule,
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
