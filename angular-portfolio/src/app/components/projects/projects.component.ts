import { Component, HostListener, signal } from '@angular/core';

import { Project, PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  readonly selectedProject = signal<Project | null>(null);
  readonly activeImageIndex = signal(0);

  openProject(project: Project): void {
    this.activeImageIndex.set(0);
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
    this.activeImageIndex.set(0);
  }

  previousImage(total: number): void {
    this.activeImageIndex.update((index) => (index - 1 + total) % total);
  }

  nextImage(total: number): void {
    this.activeImageIndex.update((index) => (index + 1) % total);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeProject();
  }
}
