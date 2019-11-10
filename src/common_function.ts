declare global {
    interface Window { ga: any; }
}

export const gaEvents = ({ eventCategory, eventAction, eventLabel }: { eventCategory: string, eventAction: string, eventLabel: string }) {
    // @ts-ignore
    if (ga && typeof ga === 'function') {
        // @ts-ignore
        ga('send', 'event', {
            eventCategory,
            eventAction,
            eventLabel
        })
    }
}