import {Component, OnInit} from '@angular/core';
import {ProjectService} from './service/project.service';
import {Project} from './model/project';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {
  title = 'moncv';

  constructor(private service : ProjectService) {}

  ngOnInit() {}
}
