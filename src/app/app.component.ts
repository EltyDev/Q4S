
import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { QuestionsComponent } from "./questions/questions.component";
import { RouterOutlet } from "@angular/router";
import { ResultComponent } from "./result/result.component";

export interface Points {
  farLeft?: number;
  left?: number;
  centerLeft?: number;
  centerRight?: number;
  right?: number;
  farRight?: number;
}

export interface Result {
  questions: number[];
  points: Points;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionsComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  result = signal<Result | null>(null);

}
