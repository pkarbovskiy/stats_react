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

export const getDocumentHeight = () => {
    const body = document.body
    const documentElement = document.documentElement

    return Math.max(
        body.scrollHeight, documentElement.scrollHeight,
        body.offsetHeight, documentElement.offsetHeight,
        body.clientHeight, documentElement.clientHeight
    )
}