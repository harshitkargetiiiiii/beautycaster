import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-about',
  templateUrl: './resume-about.component.html',
  styleUrls: ['./resume-about.component.scss']
})
export class ResumeAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  about=[
    {
      name:'Makeup',
      timer:'95%',
      exp:'4 Years Experince'
    },
    {
      name:'Fashion',
      timer:'75%',
      exp:'4 Years Experince'
    },
    {
      name:'Styling',
      timer:'80%',
      exp:'4 Years Experince'
    },
    {
      name:'Self Care',
      timer:'95%',
      exp:'4 Years Experince'
    }
  ]
}
