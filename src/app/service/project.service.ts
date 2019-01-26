import {Injectable} from '@angular/core';
import {Project} from '../model/project';
import datacv from '../../assets/document/cv.json';
import {classToPlain, plainToClass} from "class-transformer";
import {stringify} from '@angular/core/src/render3/util';
@Injectable({providedIn: 'root'})
export class ProjectService {

  private projects : Project[];
  constructor() {
    this.setProjectsFromJson();
  }

  setProjectsFromJson() {
    this.projects = [];
    datacv
      .mesprojects
      .forEach(function (projectJson) {
        let project = plainToClass(Project, projectJson);
        this
          .projects
          .push(project);
      }.bind(this));
  }

  getProjects() {
    return this.projects;
  }
  getAllTags() : string[] {

    let result = [];
    this
      .projects
      .forEach(function (project : Project) {
        project
          .tags
          .forEach(function (tag : string) {
            if (!result.includes(tag)) {
              result.push(tag);
            }
          });
      });
    return result;
  }
  getProjectsByTags() : Map < string,
  Project[] > {
    let result = new Map < string,
      Project[] > ();
    this
      .projects
      .forEach(function (project : Project) {
        project
          .tags
          .forEach(function (tag : string) {
            if (!(result[tag])) {
              result[tag] = [];
            }
            result[tag].push(project);
          });
      });
    return result;
  }
}
