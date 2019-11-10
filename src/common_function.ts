declare global {
    interface Window { ga: any; }
}

export const gaEvents = ({ eventCategory, eventAction, eventLabel }: { eventCategory: string, eventAction: string, eventLabel: string }) => {

    if (window.ga && typeof window.ga === 'function') {
        window.ga('send', 'event', {
            eventCategory,
            eventAction,
            eventLabel
        })
    }
}