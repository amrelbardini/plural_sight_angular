import {
  trigger,
  animate,
  transition,
  style,
  group,
  query,
} from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  //transition between any two states
  transition('* <=> *', [
    //events to apply
    //Defined style and animation function to apply
    // config object with optional set to true to handle when element not yet added to the DOM
    query(
      ':enter,:leave',
      style({ position: 'fixed', width: '100%', zIndex: 2 }),
      { optional: true }
    ),

    //group
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
