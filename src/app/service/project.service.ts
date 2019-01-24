import {Injectable} from '@angular/core';
import {Project} from '../model/project';

@Injectable({providedIn: 'root'})
export class ProjectService {

  private projects : Project[] = [];
  constructor() {}

  getProjects() {

    return this.projects;
  }
}
