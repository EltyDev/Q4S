import { Component, computed, inject, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import baseQuestions from '../../../public/questions.json';
import { Result, Points } from '../app.component';

interface Attribution {
  agreePlus?: Points;
  agree?: Points;
  neutral?: Points;
  disagree?: Points;
  disagreePlus?: Points;
}

interface Question {
  question: string;
  attribution: Attribution;
}

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {

  router = inject(Router);

  points: Points = {
    farLeft: 0,
    left: 0,
    centerLeft: 0,
    centerRight: 0,
    right: 0,
    farRight: 0
  };

  questionResult: number[] = [];

  onFinished = output<Result>();

  shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  questions: Question[] = this.shuffleArray(baseQuestions as Question[]);

  questionIndex = signal(0);
  questionString = computed(() => this.questions[this.questionIndex()].question);

  answer = (button: EventTarget | null) => {
    if (!button) return;
    let id = (button as Element).id;
    let index = this.questionIndex();
    let question = this.questions[index];
    let points = question.attribution[id as keyof Attribution];
    if (points != null) {
      if (points.farLeft !== undefined) this.points.farLeft! += points.farLeft;
      if (points.left !== undefined) this.points.left! += points.left;
      if (points.centerLeft !== undefined) this.points.centerLeft! += points.centerLeft;
      if (points.centerRight !== undefined) this.points.centerRight! += points.centerRight;
      if (points.right !== undefined) this.points.right! += points.right;
      if (points.farRight !== undefined) this.points.farRight! += points.farRight;
    }
    switch (id) {
      case 'disagreePlus':
        this.questionResult.push(0);
        break;
      case 'disagree':
        this.questionResult.push(1);
        break;
      case 'neutral':
        this.questionResult.push(2);
        break;
      case 'agree':
        this.questionResult.push(3);
        break;
      case 'agreePlus':
        this.questionResult.push(4);
        break;
    }
    if (this.questionIndex() + 1 < this.questions.length) {
      this.questionIndex.set(index + 1);
      return;
    }
    this.onFinished.emit({
      questions: this.questionResult,
      points: this.points
    });
  }
}
