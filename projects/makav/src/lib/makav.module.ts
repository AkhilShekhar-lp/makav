import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MakavComponent } from './makav.component';




@NgModule({
  declarations: [
    MakavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MakavComponent
  ]
})
export class MakavModule { }
