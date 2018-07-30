import { Component } from '@angular/core';
import { AccountCardInterface } from "../models/Account-card.Interface";

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent {
  account:  AccountCardInterface = {
    title:  'Consolidator account',
    body: ' Make banking a simple pleasure with special rates and benefits for over-55s',
    monthly_fee: 45.39,
    monthly_income:'yes',
    payment_type:'monthly fee',
    income_type:'monthly income required',
  };
}
