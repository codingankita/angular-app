import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-services-comp',
  templateUrl: './services-comp.component.html',
  styleUrls: ['./services-comp.component.css'],
  // animations : [
  //   trigger('flyInOut' , [
  //     transition('void => *' , [
  //       style({transform: 'translateX(-100%)'}),
  //       animate('1s')
  //     ]),
  //     transition('* => void' , [
  //       style({transform:'translateX(100%)'}),
  //       animate('1s')
  //     ])
  //   ])
  // ]
})
export class ServicesCompComponent implements OnInit {
  // showDiv: boolean = true;
  // toggleDiv(){
  //   this.showDiv = this.showDiv ? false : true;
  // }
  constructor() { }

  ngOnInit(): void {
  }
}
