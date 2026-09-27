import { Component } from '@angular/core';

import { SKILL_GROUPS } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly skillGroups = SKILL_GROUPS;
}
