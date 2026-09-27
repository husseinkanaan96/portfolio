import { Component } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
