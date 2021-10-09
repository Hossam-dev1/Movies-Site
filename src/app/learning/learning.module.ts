import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { FullstackComponent } from './fullstack/fullstack.component';
import { AndroidComponent } from './android/android.component';


@NgModule({
  declarations: [FullstackComponent, AndroidComponent],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
