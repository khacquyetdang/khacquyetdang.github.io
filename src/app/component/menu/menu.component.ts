import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-menu', templateUrl: './menu.component.html', styleUrls: ['./menu.component.css']})
export class MenuComponent implements OnInit {

  isNavOpen : boolean;
  constructor() {}

  ngOnInit() {
    this.isNavOpen = false;
  }

  menuClass() {
    if (this.isNavOpen) {
      return "menu open";
    }
    return "menu";
  }
  titleMenuToggleAttr()
  {
    if (this.isNavOpen) {
      return "hide navigation";
    }
    return "show navigation";
  }
  navClass() {
    if (this.isNavOpen) {
      return "navOpen";
    }
    return "navClosed";
  }

  onMenuClick(event : any) {
    // Set the timeout to the animation length in the CSS.
    this.isNavOpen = !this.isNavOpen;

    /*
    setTimeout(function () {
      console.log("timeout set");
      $('#menuToggle > span')
        .toggleClass("navClosed")
        .toggleClass("navOpen");
    }, 200);*/
    event.preventDefault();
  }

}
