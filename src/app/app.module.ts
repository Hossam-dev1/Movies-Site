import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule} from '@angular/forms';

import { TvComponent } from './tv/tv.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HelloPipe } from './hello.pipe';
import { GenderPipe } from './gender.pipe';
import { SearchPipe } from './search.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component'

@NgModule({
  declarations: [
    AppComponent,HomeComponent,NavbarComponent, FooterComponent, GalleryComponent,  ContactsComponent, TvComponent, NotfoundComponent, HelloPipe, GenderPipe, SearchPipe, RegisterComponent, LoginComponent, MoviedetailsComponent, PeopledetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
