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

export const shouldLazyLoad = () => {
    return getDocumentHeight() - window.innerHeight - document.documentElement.scrollTop < 250
}

export const onErrorStreamerFace = (event: any) => {
    event.target.src = "//d38ev7kpu49one.cloudfront.net/static/face.svg"
}
export const convertToFancyTime = (timestamp: number): string => {
    const minutes_seconds = timestamp % 3600
    const hours = (timestamp - minutes_seconds) / 3600
    const seconds = minutes_seconds % 60
    const minutes = (minutes_seconds - seconds) / 60

    return `${hours > 9 ? hours : '0' + hours}h${minutes > 9 ? minutes : '0' + minutes}m${seconds > 9 ? seconds : '0' + seconds}s`
}