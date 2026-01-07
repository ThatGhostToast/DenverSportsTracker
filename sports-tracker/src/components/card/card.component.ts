import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {}
