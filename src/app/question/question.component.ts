import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Result } from '../interfaces/result';
import { IQuestion } from '../interfaces/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {

  questions: IQuestion[] = [
    {
      question: 'Qual maior País do mundo?',
      options: ['Rússia', 'China', 'Estados Unidos'],
      answer: 'Rússia',
      playerAnswer: '',
    },
    {
      question: 'Qual o maior mamífero do mundo?',
      options: ['Vaca', 'Baleia', 'Elefante'],
      answer: 'Baleia',
      playerAnswer: '',
    },
    {
      question: 'De onde é a invenção do chuveiro elétrico??',
      options: ['Brasil', 'França', 'Inglaterra'],
      answer: 'Brasil',
      playerAnswer: '',
    },
  ];

  index: number = 0;
  currentQuestion: any;
  selectedAnswer: any;
  result!: Result;

  constructor(private localStorage: LocalStorageService) {
    this.currentQuestion = this.questions[this.index];
    this.quizStart();
  }

  private quizStart() {
    this.result = {
      total: 0,
      correct: 0,
      wrong: 0,
      correctPercentage: 0,
      wrongPercentage: 0,
    };
  }

  handleChange(ev : any) {
    this.selectedAnswer = ev;
  }

  checkSelected(){
    return (this.selectedAnswer === this.currentQuestion.answer);
  }

  nextQuestion() {
    this.saveQuestion();
    this.index++;
    this.loadQuestion();
  }

  backQuestion() {
    this.saveQuestion();
    this.index--;
    this.loadQuestion();
  }

  saveQuestion() {
    this.questions[this.index].playerAnswer = this.selectedAnswer;
  }

  loadQuestion() {
    this.currentQuestion = this.questions[this.index];
    this.selectedAnswer = this.currentQuestion.playerAnswer || undefined;
  }

  finishQuiz() {
    this.saveQuestion();
    this.calculateResults();
    localStorage.setItem('result', JSON.stringify(this.result));
  }

  calculateResults() {
    const correctAnswers = this.questions.filter(question => question.playerAnswer === question.answer);
    this.result.correct += correctAnswers.length;
    this.result.wrong += this.questions.length - correctAnswers.length;
    this.result.correctPercentage = (this.result.correct / this.questions.length) ;
    this.result.wrongPercentage = (this.result.wrong / this.questions.length);
    this.result.total = this.questions.length
  }
}
