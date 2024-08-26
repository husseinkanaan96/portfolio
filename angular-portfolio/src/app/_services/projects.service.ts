import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  portfolioCard: Project[] = [
    {
      id: 0,
      name: 'Credit Card Authentication App',
      summary: 'Credit Card Authenticator',
      description: 'Credit card authenticator that uses Luhns Algorithm to determine the validity of the credit card when the user enters the credit card number and CVV and expiry date',
      projectLink: 'https://github.com/husseinkanaan96/CarmaAssassement',
      pictures: ['../../assets/CarmaAssessment/CCScreenshot1.png', '../../assets/CarmaAssessment/CCScreenshot2.png', '../../assets/CarmaAssessment/CCScreenshot3.png'],
      tags: [Tag.NODEJS,
      Tag.EXPRESSJS,
      Tag.HTML,
      Tag.JAVASCRIPT,
      Tag.CSS,
      Tag.BOOTSTRAP,
      Tag.POSTGRESQL]
    },

    {
      id: 1,
      name: 'NanoVine',
      summary: 'Movie Web Application',
      description: 'Movie web application that displays list of trending movies and their respective trailers. In addition, the application provides the ability to create a user and write a review',
      projectLink: 'https://github.com/husseinkanaan96/NanoVine',
      pictures: ['../../assets/NanoVine/Nanovine1.png', '../../assets/NanoVine/Nanovine2.png', '../../assets/NanoVine/Nanovine3.png', '../../assets/NanoVine/Nanovine4.png', '../../assets/NanoVine/Nanovine5.png', '../../assets/NanoVine/Nanovine6.png', '../../assets/NanoVine/Nanovine7.png', '../../assets/NanoVine/Nanovine8.png', '../../assets/NanoVine/Nanovine9.png'],
      tags: [Tag.HTML,
      Tag.CSS,
      Tag.BOOTSTRAP,
      Tag.JAVASCRIPT,
      Tag.PHP,
      Tag.MYSQL,
      Tag.PHPMYADMIN]
    },
    {
      id: 2,
      name: 'Simple CRUD App',
      summary: 'Dotnet-Angular CRUD',
      description: 'Simple Dotnet-Angular Create, Read, Update, and Delete Application',
      projectLink: 'https://github.com/husseinkanaan96/dotnet-angular-CRUD',
      pictures: ['../../assets/dotnet CRUD/Screenshot 2024-08-26 203007.png', '../../assets/dotnet CRUD/Screenshot 2024-08-26 203014.png', '../../assets/dotnet CRUD/Screenshot 2024-08-26 203039.png'],
      tags: [Tag.HTML,
      Tag.CSS,
      Tag.JAVASCRIPT,
      Tag.ANGULAR,
      Tag.DOTNETCORE,
      Tag.POSTGRESQL]
    }

  ]

  constructor() { }

  getProjects() {
    return this.portfolioCard;
  }
  getProjectsById(id: number): Project {
    let project = this.portfolioCard.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project with the ID: ' + id);
    }
    return project;

  }
  getProjectsByFilter(filterTags: Tag[]) {

    let filteredProjects: Project[] = [];
    this.portfolioCard.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
