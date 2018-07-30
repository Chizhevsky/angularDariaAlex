import { Component } from '@angular/core';
import { AnswerInterface } from "../models/Answer.interface";
import { QuestionInterface, Types} from "../models/Question.Interface";

@Component({
  selector: 'app-question-cards-container',
  templateUrl: './question-cards-container.component.html',
  styleUrls: ['./question-cards-container.component.scss']
})
export class QuestionCardsContainerComponent  {

  onResult(response) {
    console.log(response);
  }

  question: QuestionInterface = {
    title: 'Experience the new way to bank',
    type: Types.action,
    id: 1
  };

  answers: AnswerInterface[] = [
    {
      description: 'Open your account with people who are serious about Your Next',
      action: 'GET ACCOUNT',
      id: 1,
    },
    {
      description: 'Getting cash for your needs is now easy. Quickly know how much can get',
      action: 'GET LOAN',
      id: 2,
    },
    {
      description: 'Insure what matters to you. Let us help you understand the benefits',
      action: 'GET INSURED',
      id: 3,
    },
    {
      description: 'Insure what matters to you. Let us help you understand the benefits',
      action: 'GET INSURED',
      id: 3,
    },
    {
      description: 'Insure what matters to you. Let us help you understand the benefits',
      action: 'GET INSURED',
      id: 3,
    },
    {
      description: 'Insure what matters to you. Let us help you understand the benefits',
      action: 'GET INSURED',
      id: 3,
    },
    {
      description: 'Insure what matters to you. Let us help you understand the benefits',
      action: 'GET INSURED',
      id: 3,
    }
  ];
}
