import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {

  teamData: any = [{
      teamName: "Denver Broncos",
      teamLogo: "https://upload.wikimedia.org/wikipedia/en/4/44/Denver_Broncos_logo.svg",
      recentScore: "3 - 19"
    },
    {
      teamName: "Colorado Avalanche",
      teamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Colorado_Avalanche_logo.svg/2560px-Colorado_Avalanche_logo.svg.png",
      recentScore: "2 - 4"
    },
    {
      teamName: "Denver Nuggets",
      teamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/2560px-Denver_Nuggets.svg.png",
      recentScore: "114 - 110"
    }
  ];
}
