import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from "./material.module";
import { FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';

import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: SignInComponent},
  { path: 'home', component: MainPageComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
