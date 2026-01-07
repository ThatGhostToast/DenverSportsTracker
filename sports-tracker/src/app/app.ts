import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('sports-tracker');
}
