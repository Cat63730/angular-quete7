import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skills } from '../models/skills.models';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  componentParent: Developer = new Developer (
    "Cathy",
    "Arguel",
    49,
    "feminin",
    "dev",
    [
      new Skills ( 
        "angular",
        "./assets/titre.png",
        "https://www.instagram.com/accty_art/?hl=fr"
      )
    ]
  )
  ;

  constructor(){}

}
