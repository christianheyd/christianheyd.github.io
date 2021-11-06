import { animate, animateChild, query, stagger, style, transition, trigger } from "@angular/animations";

export const fadeIn =
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('150ms ease-in',
        style({ opacity: 1 })
      )
    ])
  ]);

export const listFadeIn =
  trigger('list', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('150ms ease-in',
        style({ opacity: 1 })
      ),
      query('@items',
        stagger(10, animateChild())
      )
    ]),
  ]);

export const itemsFadeIn =
  trigger('items', [
    transition(':enter', [
      style({ transform: 'scale(0.1)', opacity: 0 }),
      animate('800ms cubic-bezier(.8,-0.6,0.2,1.5)',
        style({ transform: 'scale(1)', opacity: 1 }))
    ])
  ])
