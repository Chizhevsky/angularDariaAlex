import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';

import { RouterModule, Routes } from "@angular/router";
import { QuestionCardsComponent } from './question-cards/question-cards.component';
import { QuestionCardsContainerComponent } from './question-cards-container/question-cards-container.component';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { MenuComponent } from './menu/menu.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';

const routes: Routes = [
  { path: '', component: SignInComponent},
  { path: 'home', component: MainPageComponent},
  { path: 'customer', component: CustomerInputComponent},
  { path: 'customersearch', component: CustomerSearchComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainPageComponent,
    QuestionCardsComponent,
    QuestionCardsContainerComponent,
    CustomerInputComponent,
    MenuComponent,
    AccountCardComponent,
    CustomerSearchComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
