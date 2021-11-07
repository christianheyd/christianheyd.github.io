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
  public resume = [
    {
      employer: 'FEi Systems',
      dates: '2015 - Present',
      position: [
        {
          name: 'Software Developer',
          dates: 'December 2020 - Present',
          tools: 'Angular | Sass | C# | Axe DevTools | NVDA/JAWS',
          bullets: [
            'Developed and maintained theming system capable of customization for white-label clients, custom styling for Angular Material components, print stylesheets and responsive design implementation',
            'Lead 508 testing and remediation effort on FEI’s flagship waiver management product',
            'Provided developer input to UX team to provide feedback on designs and feasibility of implementation and assisted with development of a company component library',
            'Worked with Business Development team to provide rapid prototypes for demos and RFPs'
          ]
        },
        {
          name: 'Senior UX Designer',
          dates: 'August 2019 - December 2020',
          tools: 'Axure | Adobe Suite | HTML | Sass | Angular | Axe DevTools | NVDA/JAWS',
          bullets: [
            'Designed and launched FEi’s flagship waiver management system',
            'Trained developers, testers and business analysts on Section 508 and WCAG requirements and remediation',
            'Oversaw and onboarded contractors and new employeess for design and accessibility testing efforts'
          ]
        },
        {
          name: 'UX Designer',
          dates: 'March 2016 - August 2019',
          tools: 'Axure | Adobe Suite | HTML | Sass | AngularJS | React',
          bullets: [
            'Designed and launched a client portal for the state of Maryland and the NDMS Response Management Suite and Disaster Medication information System',
            'Tested and remediated 508 and UI issues across more than 6 projects, and was the lead UX point of contact for 4',
            'Worked with business analysts to provide mockups to assist in requirements gathering sessions with clients',
            'Provided marketing materials for the business development team, including posters, brochures and videos'
          ]
        },
        {
          name: 'Junior UX Designer',
          dates: 'February 2015 - March 2016',
          tools: 'Adobe Suite | HTML | LESS | Wave | NVDA/JAWS | C#/Razor',
          bullets: [
            'Assisted development team with remediation of 508 and styling bugs across 3 projects',
            'Assisted business development team with mockups and HTML/CSS prototypes for demos and RFPs'
          ]
        },

      ]
    },
    {
      employer: 'Fresh Media Network - miHair',
      dates: '2013 - 2014',
      position: [
        {
          name: 'Front End Developer, Graphic Designer',
          dates: 'October 2013 - October 2014',
          tools: 'Adobe Suite | HTML | Sass | JavaScript | Bootstrap',
          bullets: [
            'Designed and developed more than 150 one-off, custom articles using HTML, CSS and JavaScript.',
            'Designed the front end for the Android application to be used in salons nationwide on a digital media platform',
            'Responsible for all graphic art and design duties at Fresh Media Network, including magazine ads, brochures and image editing for the content team'
          ]
        },
      ]
    }
  ]

  constructor () { }

  ngOnInit(): void {
  }

}
