import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorPageComponent } from './features/age-calculator/pages/calculator-page/calculator-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/age-calculator/age-calculator.module')
        .then(m => m.AgeCalculatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgeRoutingModule {}
