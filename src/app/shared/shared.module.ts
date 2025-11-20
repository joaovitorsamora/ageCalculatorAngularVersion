import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { TextComponent } from './components/text/text.component';
import { AddIconComponent } from './components/add-icon/add-icon.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CardComponent,
    TextComponent,
    AddIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
