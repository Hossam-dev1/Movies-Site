import { GalleryComponent } from './gallery/gallery.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

import { TvComponent } from './tv/tv.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'contacts', canActivate: [AuthGuard], component: ContactsComponent },
  { path: 'gallery', canActivate: [AuthGuard], component: GalleryComponent },

  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },
  {path:'moviedetails/:x' , component:MoviedetailsComponent},
  {path:'peopledetails/:x' , component:PeopledetailsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'learning',
    loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true }) ],





  exports: [RouterModule]
})
export class AppRoutingModule { }
