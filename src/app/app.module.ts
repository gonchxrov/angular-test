import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as Pages from './components/pages';
import * as Containers from './components/containers';
import * as Presentationals from './components/presentationals';

@NgModule({
  declarations: [
    Containers.AppComponent,
    Pages.MainComponent,
    Presentationals.PasswordValidatorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [Containers.AppComponent],
})
export class AppModule {}
