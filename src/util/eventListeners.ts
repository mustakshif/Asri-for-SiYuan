type EventListenerTarget = HTMLElement | Document | Window;

export class AsriEventListener<T extends Event> {

    public callback: (e: T) => void
    constructor(callback: (e: T) => void) {
        this.callback = callback;
    }

    start<E extends EventListenerTarget>(target: E, eventName: string) {
        target.addEventListener(eventName, this.callback as (e: Event) => void);
    }

    remove<E extends EventListenerTarget>(target: E, eventName: string) {
        target.removeEventListener(eventName, this.callback as (e: Event) => void);
    }
    // init() {
    //     document.addEventListener('click', (e) => {
    //         const target = e.target as HTMLElement
    //         if (target.classList.contains('b3-dialog__close')) {
    //             const dialog = target.closest('.b3-dialog')
    //             if (dialog) {
    //                 dialog.classList.remove('b3-dialog--open')
    //             }
    //         }
    //     })
    // }
}