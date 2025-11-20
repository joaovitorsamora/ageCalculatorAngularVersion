import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgeCalculatorRoutingModule } from './age-calculator-routing.module'; // <---- CORRETO

import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { AgeInputGroupComponent } from './components/age-input-group/age-input-group.component';
import { AgeDisplayComponent } from './components/age-display/age-display.component';
import { BirthdateDirective } from '../../core/validators/birthdate.directive';

@NgModule({
  declarations: [
    CalculatorPageComponent,
    AgeInputGroupComponent,
    AgeDisplayComponent,
    BirthdateDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgeCalculatorRoutingModule
  ]
})
export class AgeCalculatorModule {}
