import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations';

@Component({
  selector: 'article.about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    fadeIn
  ]
})
export class AboutComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
  }

}
