import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slider, transformer} from '../router-animations';

@Component({
  selector: 'app-home-page-comp',
  templateUrl: './home-page-comp.component.html',
  styleUrls: ['./home-page-comp.component.css'], 
  animations : [
    slider
  ]
})
export class HomePageCompComponent implements OnInit {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
