import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export let flyIn = trigger('flyIn', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(900)
    ]),
    transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
    ])
])

export let photoState = trigger('photoState', [
    transition('* => *',
        animate('5000ms ease', keyframes([
            style({ transform: 'translateY(-50%)    rotateX(-90deg)', offset: 0 }),
            style({ transform: 'translateY(0)  rotateX(0)', offset: 0.33 }),
        ])
        ))])

export let photoAnimations = trigger('photoAnimations', [
    transition('* => *', [
        query('img', style({ transform: 'scale(0)' })),
        query('img',
            stagger('600ms', [
                animate('900ms', style({ transform: 'scale(1.1)' }))
            ]))
    ])
])

export let fade = trigger("fade", [
    transition("void => *", [
        style({ opacity: 0 }),
        animate(1000)
    ])
])

export let zoom = trigger("zoom", [
    transition(":enter", [
        style({ transform: 'scale(0.1)' }),
        animate(700)
    ])
])

export let rotate = trigger("rotate", [
    transition(":enter", [
        style({ transform: 'rotate(360deg)', opacity: 0 }),
        animate(700)
    ])
])

export let slide2 = trigger("slide2", [
    transition(":enter", [
        animate('3s 2s ease-in',
            style({ transform: 'translateX(-50px)' })
        )
    ])
])

export let blinking = trigger('blinking', [
    state('invisible', style({ color: '#000' })),
    state('visible', style({ color: 'purple' })),
    transition('invisible <=> visible', animate('2s linear'))
])