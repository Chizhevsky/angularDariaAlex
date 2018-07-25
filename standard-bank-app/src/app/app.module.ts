import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from "./material.module";
import { FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';

import { RouterModule, Routes } from "@angular/router";
import { GetAccountComponent } from './get-account/get-account.component';
import { QuestionCardsComponent } from './question-cards/question-cards.component';
import { QuestionCardsContainerComponent } from './question-cards-container/question-cards-container.component';

const routes: Routes = [
  { path: '', component: SignInComponent},
  { path: 'home', component: MainPageComponent},
  { path: 'account', component: GetAccountComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainPageComponent,
    GetAccountComponent,
    QuestionCardsComponent,
    QuestionCardsContainerComponent
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
