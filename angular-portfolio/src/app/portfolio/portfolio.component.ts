import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/tags';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioCard = {} as Project[];



  constructor(private titleService: Title, private projectService: ProjectsService) {

    this.titleService.setTitle('Hussein M. Kanaan - Portfolio');


  }
  ngOnInit(): void {
    this.portfolioCard = this.projectService.getProjects();
  }

}
