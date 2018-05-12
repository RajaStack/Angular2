import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http ,  HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {headerComponent} from './component/productlist/headerComponent';
import {productListComponent} from './component/productlist/productListComponent';
import {productComponent} from './component/productlist/productComponent';




@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    productListComponent,
    productComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
