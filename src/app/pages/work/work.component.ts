import { Component, OnInit } from '@angular/core';
import { itemsFadeIn, listFadeIn } from 'src/app/animations';

@Component({
  selector: 'article.work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    listFadeIn,
    itemsFadeIn
  ]
})
export class WorkComponent implements OnInit {
  public workList = [
    {
      job: 'FEi Systems',
      dates: '2015 - Present',
      projects: [
        {
          name: 'Carity (Web App)',
          description: 'UX Design, HTML, CSS, JavaScript, 508 Testing and Remediation, Angular Development, C#'
        },
        {
          name: 'National Disaster Management System (Web App)',
          description: 'Lead UX Design, HTML, CSS, JavaScript, 508 Testing and Remediation'
        },
        {
          name: 'Virginia Waiver Management System (WaMS) (Web App)',
          description: 'Lead UX Design, HTML, CSS, JavaScript, 508 Testing and Remediation'
        },
        {
          name: 'TEFT Grant Proposal, MyLTSS (Maryland) (Web App)',
          description: 'UX Design, HTML, CSS, JavaScript'
        },
        {
          name: 'LTSS Maryland (Web App)',
          description: 'UX Design, C# (Razor), HTML, CSS, JavaScript, 508 Testing and Remediation'
        },
        {
          name: 'LTSS Mississippi (Web App)',
          description: 'UX Design, C# (Razor), HTML, CSS, JavaScript, 508 Testing and Remediation'
        }
      ]
    },
    {
      job: 'Fresh Media Network',
      dates: '2013 - 2014',
      projects: [{
        name: 'miHair (Android/Web App)',
        description: 'HTML, CSS, JavaScript, Graphic Design'
      }]
    }
  ]

  constructor () { }

  ngOnInit(): void {
  }

}
