import {Component, OnInit} from '@angular/core';
import {ProjectService} from 'src/app/service/project.service';
import {Project} from 'src/app/model/project';

@Component({selector: 'app-portfolio', templateUrl: './portfolio.component.html', styleUrls: ['./portfolio.component.css']})
export class PortfolioComponent implements OnInit {
  tags : string[]
  projects : Project[];
  projectsByTags : Map < string,
  Project[] >;
  constructor(private service : ProjectService) {}

  ngOnInit() {
    this.projects = this
      .service
      .getProjects();
    this.projectsByTags = this
      .service
      .getProjectsByTags();
    this.tags = this
      .service
      .getAllTags();
    console.log("project", this.projects);
  }

}
