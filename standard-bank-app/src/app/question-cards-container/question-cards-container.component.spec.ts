import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCardsContainerComponent } from './question-cards-container.component';

describe('QuestionCardsContainerComponent', () => {
  let component: QuestionCardsContainerComponent;
  let fixture: ComponentFixture<QuestionCardsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCardsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
