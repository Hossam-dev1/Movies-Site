import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullstackComponent } from './fullstack/fullstack.component';
import { AndroidComponent } from './android/android.component';

const routes: Routes = [
  {path:'' ,component:FullstackComponent},
  {path:'android' , component:AndroidComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LearningRoutingModule { }
