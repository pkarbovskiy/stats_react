export default 'http://192.168.232.128:8000'
// @todo refactor export url
export const ROOT_URL = 'http://192.168.232.128:8000'

export const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)

export const mobileNotIpad = isMobile && ((isMobile || { input: '' }).input || '').indexOf('ipad') === -1

export const cloudFrontUrl = '//d38ev7kpu49one.cloudfront.net'

export const featuredStreamer8bit = `${cloudFrontUrl}/featured_streamers/::id.png`

export const reactionImage = `${cloudFrontUrl}/::id.png`
export const matchImage = `${cloudFrontUrl}/valorant/::id.png`

export const defaultPic = `${cloudFrontUrl}/static/face.svg`

export const defaultVideoImage = `${cloudFrontUrl}/static/image.svg`

export const loginUrl = `${ROOT_URL}/rest-auth/login/`

export const AuthUrls = {
    // implemented
    LOGIN: `${ROOT_URL}/rest-auth/login/`,
    LOGOUT: `${ROOT_URL}/rest-auth/logout/`,
    SIGNUP: `${ROOT_URL}/rest-auth/registration/`,
    // @todo implement those
    CHANGE_PASSWORD: `${ROOT_URL}/rest-auth/password/change/`,
    RESET_PASSWORD: `${ROOT_URL}/rest-auth/password/reset/`,
    RESET_PASSWORD_CONFIRM: `${ROOT_URL}/rest-auth/password/reset/confirm/`,
    USER_ACTIVATION: `${ROOT_URL}/rest-auth/registration/verify-email/`,
    USER_PROFILE: `${ROOT_URL}/rest-auth/user/`
}

export const mediaTypes = {
    TOP_RATED: 'top_rated'
}

export enum Games {
    fortnite = 'fortnite',
    valorant = 'valorant'
}

export enum ActionTypes {
    setAutenticated = 'SET_AUTHENTICATED',
    setCurentGame = 'SET_CURRENT_GAME'
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
