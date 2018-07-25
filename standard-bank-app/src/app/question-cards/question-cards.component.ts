import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AnswerInterface} from "../models/Answer.interface";
import {QuestionInterface} from "../models/Question.Interface";

@Component({
  selector: 'app-question-cards',
  templateUrl: './question-cards.component.html',
  styleUrls: ['./question-cards.component.scss']
})
export class QuestionCardsComponent {
  @Input()
  answers: AnswerInterface[];

  @Input()
  question: QuestionInterface;

  @Output()
  result: EventEmitter<any> = new EventEmitter();

  buttonState() {
    return !this.answers.some(answers => answers.isChecked);
  }

  onClick(id) {
    if (this.question.type !== 0) return;
    let result = {
      questionId: this.question.id,
      answers: [id]
    };
    this.result.emit(result);
  }

  onActionClick(id) {
    let result = {
      questionId: this.question.id,
      answers: [id]
    };
    this.result.emit(result);
  }

  onNext() {
    let result = {
      questionId: this.question.id,
      answers: this.answers.filter(answer => answer.isChecked).map(answer => answer.id)
    };
    this.result.emit(result);
  }
}
