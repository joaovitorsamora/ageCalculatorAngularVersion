import { Component, NgModule } from '@angular/core';
import { Age } from '../../../../core/models/age';
import { DateCalculatorService } from '../../../../core/services/date-calculator.service';

@Component({
  selector: 'app-calculator-page',
  standalone: false,
  templateUrl: './calculator-page.component.html',
  styleUrl: './calculator-page.component.css'
})
export class CalculatorPageComponent {
  age: Age = {
    year: 0,
    month: 0,
    day: 0
  }

  formValues = {
    year: 0,
    month: 0,
    day: 0
  }

  constructor(private service: DateCalculatorService) { }
  
  ngOnInit(): void { }
  
  calculate() {
    this.age = this.service.calculateAge(
      this.formValues.year,
      this.formValues.month,
      this.formValues.day
    )
  }
}
