import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProjects = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService) {

    this.titleService.setTitle('Hussein M. Kanaan - Home');


  }
  ngOnInit(): void {
    this.featuredProjects = this.projectService.getProjectsById(0);
  }





}
