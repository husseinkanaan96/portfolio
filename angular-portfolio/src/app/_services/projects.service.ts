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
      pictures: [],
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
      pictures: [],
      tags: [Tag.HTML,
      Tag.CSS,
      Tag.BOOTSTRAP,
      Tag.JAVASCRIPT,
      Tag.PHP,
      Tag.MYSQL,
      Tag.PHPMYADMIN]
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
}
