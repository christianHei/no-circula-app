import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";

import {RegisterRoutingModule} from "./register-routing.module";
import {RegisterComponent} from "./register.component";

//
import {HttpModule} from '@angular/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {ButtonModule, InputTextModule} from 'primeng';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ScrollingModule,
    RegisterRoutingModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    TableModule
  ]
})
export class RegisterModule { }
