import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

export const fadingAnimation = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate(1000, style({ opacity: 0 })),
  ]),
]);

export const quarterCircleAnimation = trigger('slideInAndOut', [
  state('enterBottomLeft', style({})), // Placeholder for the state
  state('enterTopRight', style({})), // Placeholder for the state

  transition('* => enterBottomLeft', [
    animate(
      '1s ease-in',
      keyframes([
        style({ transform: 'translateX(-100%) translateY(100%)', offset: 0 }),
        style({ transform: 'translateX(-50%) translateY(50%)', offset: 0.5 }),
        style({ transform: 'translateX(0) translateY(0)', offset: 1 }),
      ])
    ),
  ]),
  transition('enterBottomLeft => *', [
    animate(
      '1s ease-out',
      keyframes([
        style({ transform: 'translateX(0) translateY(0)', offset: 0 }),
        style({ transform: 'translateX(50%) translateY(-50%)', offset: 0.5 }),
        style({ transform: 'translateX(100%) translateY(-100%)', offset: 1 }),
      ])
    ),
  ]),

  transition('* => enterTopRight', [
    animate(
      '1s ease-in',
      keyframes([
        style({ transform: 'translateX(100%) translateY(-100%)', offset: 0 }),
        style({ transform: 'translateX(50%) translateY(-50%)', offset: 0.5 }),
        style({ transform: 'translateX(0) translateY(0)', offset: 1 }),
      ])
    ),
  ]),
  transition('enterTopRight => *', [
    animate(
      '1s ease-out',
      keyframes([
        style({ transform: 'translateX(0) translateY(0)', offset: 0 }),
        style({ transform: 'translateX(-50%) translateY(50%)', offset: 0.5 }),
        style({ transform: 'translateX(-100%) translateY(100%)', offset: 1 }),
      ])
    ),
  ]),
]);
