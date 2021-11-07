import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations';

@Component({
  selector: 'article.contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fadeIn
  ]
})
export class ContactComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
  }

}
