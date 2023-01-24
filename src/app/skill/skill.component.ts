import { Component, Input} from '@angular/core';
import { Skills } from '../models/skills.models';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input () 
  componentChild!: Skills
}
