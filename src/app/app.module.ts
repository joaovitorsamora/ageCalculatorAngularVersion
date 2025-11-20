import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgeRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AgeCalculatorModule } from './features/age-calculator/age-calculator.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  AppComponent
],
imports: [
  BrowserModule,
  AgeRoutingModule,
  SharedModule,
  AgeCalculatorModule,
  FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
