import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-counter',
  templateUrl: './resume-counter.component.html',
  styleUrls: ['./resume-counter.component.scss']
})
export class ResumeCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = [
    {
      count:'140',
      img:'assets/images/resume/icon/1.png',
      type:'Satisfied Customers'
    },
    {
      count:'12',
      img:'assets/images/resume/icon/2.png',
      type:'Total Articles'
    },
    {
      count:'560',
      img:'assets/images/resume/icon/3.png',
      type:'Hours Worked'
    },
    {
      count:'96',
      img:'assets/images/resume/icon/4.png',
      type:'Colaborations'
    }]
}
