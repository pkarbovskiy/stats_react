export default 'https://vodsearch.tv/'//'http://192.168.232.128:8000'

export const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)

export const mobileNotIpad = isMobile && ((isMobile || { input: '' }).input || '').indexOf('ipad') === -1

export const cloudFrontUrl = '//d38ev7kpu49one.cloudfront.net'

export const featuredStreamer8bit = `${cloudFrontUrl}/featured_streamers/::id.png`

export const reactionImage = `${cloudFrontUrl}/::id.png`

export const defaultPic = `${cloudFrontUrl}/static/face.svg`

export const defaultVideoImage = `${cloudFrontUrl}/static/image.svg`

export const mediaTypes = {
    TOP_RATED: 'top_rated'
}

export const elementsOnLoad = mobileNotIpad ? 3 : 36

// ids for existing 8bit faces
export const pic8bitFaces = [
    3337,
    10654,
    3485,
    3429,
    5010,
    3372,
    3476,
    3603,
    3150,
    3426,
    3524,
    3316,
    3473,
    3365,
    3306,
    3591,
    8370,
    3510
]
