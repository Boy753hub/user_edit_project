import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PipePipe } from './pipe.pipe';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { BoolianPipe } from './boolian.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TestComponent,
    PipePipe,
    BoolianPipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }