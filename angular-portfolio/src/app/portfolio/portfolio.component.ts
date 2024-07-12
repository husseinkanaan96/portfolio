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

  isCollapsed: boolean = true;
  filtering: boolean = false;

  javascript: boolean = false;
  php: boolean = false;
  angular: boolean = false;
  springboot: boolean = false;
  nodejs: boolean = false;
  bootstrap: boolean = false;
  postgresql: boolean = false;
  html: boolean = false;
  css: boolean = false;
  expressjs: boolean = false;
  mysql: boolean = false;
  phpmyadmin: boolean = false;
  typescript: boolean = false;
  laravel: boolean = false;
  sqlite: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {

    this.titleService.setTitle('Hussein M. Kanaan - Portfolio');
  }

  ngOnInit(): void {
    this.portfolioCard = this.projectService.getProjects();
  }
  filter() {
    let filterTags: Tag[] = [];
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT)
    }
    if (this.php) {
      filterTags.push(Tag.PHP)
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if (this.springboot) {
      filterTags.push(Tag.SPRINGBOOT)
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS)
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP)
    }
    if (this.postgresql) {
      filterTags.push(Tag.POSTGRESQL)
    }
    if (this.html) {
      filterTags.push(Tag.HTML)
    }
    if (this.css) {
      filterTags.push(Tag.CSS)
    }
    if (this.expressjs) {
      filterTags.push(Tag.EXPRESSJS)
    }
    if (this.mysql) {
      filterTags.push(Tag.MYSQL)
    }
    if (this.phpmyadmin) {
      filterTags.push(Tag.PHPMYADMIN)
    }
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.laravel) {
      filterTags.push(Tag.LARAVEL)
    }
    if (this.sqlite) {
      filterTags.push(Tag.SQLITE)
    }

    if (this.typescript
      || this.phpmyadmin
      || this.mysql
      || this.expressjs
      || this.css
      || this.html
      || this.postgresql
      || this.bootstrap
      || this.nodejs
      || this.springboot
      || this.angular
      || this.php
      || this.javascript
      || this.laravel
      || this.sqlite
    ) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.portfolioCard = this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilters() {

    this.javascript = false;
    this.php = false;
    this.angular = false;
    this.springboot = false;
    this.nodejs = false;
    this.bootstrap = false;
    this.postgresql = false;
    this.html = false;
    this.css = false;
    this.expressjs = false;
    this.mysql = false;
    this.phpmyadmin = false;
    this.typescript = false;
    this.laravel = false;
    this.sqlite = false;

    this.filtering = false;

    this.portfolioCard = this.projectService.getProjects();
  }

}
