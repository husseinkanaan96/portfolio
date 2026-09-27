import { Component, signal } from '@angular/core';

import { EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;
  readonly expandedId = signal(EXPERIENCES[0].id);

  toggle(id: string): void {
    this.expandedId.update((current) => (current === id ? '' : id));
  }
}
