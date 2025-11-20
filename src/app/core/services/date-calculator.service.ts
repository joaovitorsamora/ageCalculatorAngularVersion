import { Injectable } from '@angular/core';
import { Age } from '../models/age';
import { differenceInDays, differenceInMonths, differenceInYears, isLeapYear } from 'date-fns'

@Injectable({
  providedIn: 'root'
})
export class DateCalculatorService {

  constructor() { }
  
  calculateAge(year: number, month: number, day: number): Age {
    const currentDate = new Date()

    const valid = year > 0 &&
      month >= 1 &&
      month <= 12 &&
      day >= 1 &&
      day <= ([
        31,
        isLeapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ][month - 1]);
    
    if (!valid) {
      return { year:0, month:0, day:0 }
    }

    const pastDate = new Date(year, month - 1, day)
    const ageCalculator = {
      day: differenceInDays(currentDate, pastDate),
      month: differenceInMonths(currentDate, pastDate),
      year: differenceInYears(currentDate, pastDate)

    }
    return ageCalculator
  }
}
