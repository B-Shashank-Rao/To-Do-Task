import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemNumber : any;
  projectText : string = "Angular Project";
  projects : any = [];
  //details : any = [];
  constructor() { }

  ngOnInit(): void {
    this.itemNumber = this.projects.length;
  }
  add(){
    this.projects.push(this.projectText);
    //this.projectText = '';
    this.itemNumber = this.projects.length;
    console.log(this.projects)
  }
}
