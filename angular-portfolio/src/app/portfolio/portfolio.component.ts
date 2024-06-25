import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioCard: Project = {
    id: 0,
    name: 'Credit Card Authentication App',
    summary: 'Credit card authenticator that uses Luhns Algorithm to determine the validity of the credit card when the user enters the credit card number and CVV and expiry date',
    description: '',
    projectLink: '',
    pictures: [],
    tags: [Tag.NODEJS, Tag.EXPRESSJS, Tag.HTML, Tag.JAVASCRIPT, Tag.CSS, Tag.BOOTSTRAP],
  }



  constructor(private titleService: Title) {

    this.titleService.setTitle('Hussein M. Kanaan - Portfolio');


  }

}
