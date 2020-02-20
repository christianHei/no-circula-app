import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//
import {HttpModule} from '@angular/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {ButtonModule, InputTextModule} from 'primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    ScrollingModule,
    TableModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    InputTextModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
