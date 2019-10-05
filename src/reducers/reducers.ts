import { handleActions } from 'redux-actions'
import { action } from '../actions'
const DEFAULT_STATE = {
    deathKillTimers: [
        { id: 327983, endTime: 1396, startTime: 1380, actionId: 2 },
        { id: 327986, endTime: 1492, startTime: 1477, actionId: 3 },
        { id: 328005, endTime: 2057, startTime: 2042, actionId: 2 },
        { id: 328013, endTime: 2113, startTime: 2098, actionId: 2 },
        { id: 328016, endTime: 2189, startTime: 2172, actionId: 2 },
        { id: 328022, endTime: 2303, startTime: 2287, actionId: 2 },
        { id: 328025, endTime: 2329, startTime: 2313, actionId: 2 },
        { id: 328035, endTime: 2667, startTime: 2651, actionId: 2 },
        { id: 328065, endTime: 3276, startTime: 3257, actionId: 2 },
        { id: 328069, endTime: 3292, startTime: 3273, actionId: 2 },
        { id: 328095, endTime: 3762, startTime: 3743, actionId: 2 },
        { id: 328116, endTime: 4025, startTime: 4010, actionId: 2 },
        { id: 328121, endTime: 4107, startTime: 4092, actionId: 2 },
        { id: 328126, endTime: 4241, startTime: 4224, actionId: 2 },
        { id: 328152, endTime: 4464, startTime: 4444, actionId: 2 },
        { id: 328158, endTime: 4484, startTime: 4467, actionId: 2 },
        { id: 328164, endTime: 4540, startTime: 4524, actionId: 2 },
        { id: 328174, endTime: 4789, startTime: 4773, actionId: 2 },
        { id: 328225, endTime: 5422, startTime: 5405, actionId: 2 },
        { id: 328236, endTime: 5600, startTime: 5583, actionId: 2 },
        { id: 328249, endTime: 5660, startTime: 5643, actionId: 2 },
        { id: 328272, endTime: 5808, startTime: 5792, actionId: 2 },
        { id: 328282, endTime: 6069, startTime: 6054, actionId: 2 },
        { id: 328307, endTime: 6204, startTime: 6189, actionId: 2 },
        { id: 328311, endTime: 6230, startTime: 6215, actionId: 2 },
        { id: 328313, endTime: 6241, startTime: 6226, actionId: 2 },
        { id: 328315, endTime: 6359, startTime: 6344, actionId: 2 },
        { id: 328325, endTime: 6452, startTime: 6437, actionId: 2 },
        { id: 328334, endTime: 6495, startTime: 6480, actionId: 2 },
        { id: 328341, endTime: 6787, startTime: 6772, actionId: 3 },
        { id: 328354, endTime: 7084, startTime: 7069, actionId: 2 },
        { id: 328364, endTime: 7103, startTime: 7088, actionId: 2 },
        { id: 328372, endTime: 7119, startTime: 7104, actionId: 2 },
        { id: 328374, endTime: 7134, startTime: 7119, actionId: 2 },
        { id: 328409, endTime: 7467, startTime: 7452, actionId: 2 },
        { id: 328410, endTime: 7469, startTime: 7454, actionId: 2 },
        { id: 328432, endTime: 7848, startTime: 7833, actionId: 2 },
        { id: 328433, endTime: 7849, startTime: 7834, actionId: 2 },
        { id: 328437, endTime: 7907, startTime: 7892, actionId: 2 },
        { id: 328438, endTime: 7908, startTime: 7893, actionId: 2 },
        { id: 328439, endTime: 7909, startTime: 7894, actionId: 2 },
        { id: 328443, endTime: 7957, startTime: 7942, actionId: 2 },
        { id: 328444, endTime: 7958, startTime: 7943, actionId: 2 },
        { id: 328445, endTime: 7968, startTime: 7953, actionId: 2 },
        { id: 328446, endTime: 7969, startTime: 7954, actionId: 2 },
        { id: 328451, endTime: 7970, startTime: 7955, actionId: 2 },
        { id: 328458, endTime: 8207, startTime: 8192, actionId: 2 },
        { id: 328459, endTime: 8208, startTime: 8193, actionId: 2 },
        { id: 328460, endTime: 8209, startTime: 8194, actionId: 2 },
        { id: 328478, endTime: 8520, startTime: 8505, actionId: 2 },
        { id: 328479, endTime: 8521, startTime: 8506, actionId: 2 },
        { id: 328499, endTime: 8775, startTime: 8760, actionId: 2 },
        { id: 328501, endTime: 8776, startTime: 8761, actionId: 2 },
        { id: 328513, endTime: 8876, startTime: 8861, actionId: 3 },
        { id: 328534, endTime: 9153, startTime: 9138, actionId: 2 },
        { id: 328535, endTime: 9154, startTime: 9139, actionId: 2 },
        { id: 328537, endTime: 9166, startTime: 9151, actionId: 2 },
        { id: 328549, endTime: 9313, startTime: 9298, actionId: 2 },
        { id: 328553, endTime: 9350, startTime: 9335, actionId: 2 },
        { id: 328577, endTime: 9520, startTime: 9505, actionId: 2 },
        { id: 328584, endTime: 9537, startTime: 9522, actionId: 2 },
        { id: 328604, endTime: 9597, startTime: 9582, actionId: 2 },
        { id: 328649, endTime: 10272, startTime: 10257, actionId: 2 },
        { id: 328657, endTime: 10330, startTime: 10315, actionId: 3 },
        { id: 328679, endTime: 10555, startTime: 10540, actionId: 2 },
        { id: 328683, endTime: 10580, startTime: 10565, actionId: 2 },
        { id: 328697, endTime: 10756, startTime: 10741, actionId: 2 },
        { id: 328709, endTime: 10991, startTime: 10976, actionId: 2 },
        { id: 328719, endTime: 11132, startTime: 11117, actionId: 2 },
        { id: 328733, endTime: 11196, startTime: 11181, actionId: 2 },
        { id: 328745, endTime: 11352, startTime: 11337, actionId: 2 },
        { id: 328751, endTime: 11452, startTime: 11437, actionId: 2 }
    ],
    timeline: {
        activeEvent: '11028',
        videoHandler: false
    },
    twitchPlayer: {
        targetElementId: 'twitchPlayer',
        autoplay: true,
        video: 486266736,
        videoTime: 0
    },
    streamers: [
        {
            streamer: {
                id: 3372,
                name: "Symfuhny",
                slug: "symfuhny"
            },
            videos: [
                {
                    videoId: 287050,
                    streamer: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    player: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                    views: 22,
                    streamStart: 1568165344
                },
                {
                    videoId: 287050,
                    streamer: {
                        id: 3337,
                        name: "Nickmercs"
                    },
                    player: {
                        id: 3337,
                        name: "DrLupo"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/242053.png",
                    views: 17,
                    streamStart: 1568165344
                },
                {
                    videoId: 287050,
                    streamer: {
                        id: 3337,
                        name: "Nickmercs"
                    },
                    player: {
                        id: 3337,
                        name: "Bugha"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/242618.png",
                    views: 17,
                    streamStart: 1568165344
                },
                {
                    videoId: 287050,
                    streamer: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    player: {
                        id: 3372,
                        name: "dakotaz"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/175228.png",
                    views: 22,
                    streamStart: 1568165344
                },
                {
                    videoId: 287050,
                    streamer: {
                        id: 3337,
                        name: "Nickmercs"
                    },
                    player: {
                        id: 3337,
                        name: "Chap"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/195852.png",
                    views: 17,
                    streamStart: 1568165344
                },
                {
                    videoId: 287050,
                    streamer: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    player: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/199918.png",
                    views: 22,
                    streamStart: 1568165344
                }]
        },
        {
            streamer: {
                id: 3337,
                name: "Nickmercs"
            },
            videos: [
                {
                    streamer: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    player: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                    views: 22,
                    streamStart: 1568165344
                },
                {
                    streamer: {
                        id: 3337,
                        name: "Nickmercs"
                    },
                    player: {
                        id: 3337,
                        name: "DrLupo"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/242053.png",
                    views: 17,
                    streamStart: 1568165344
                },
                {
                    streamer: {
                        id: 3337,
                        name: "Nickmercs"
                    },
                    player: {
                        id: 3337,
                        name: "Bugha"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/242618.png",
                    views: 17,
                    streamStart: 1568165344
                },
                {
                    streamer: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    player: {
                        id: 3372,
                        name: "dakotaz"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/175228.png",
                    views: 22,
                    streamStart: 1568165344
                },
                {
                    streamer: {
                        id: 3337,
                        name: "Nickmercs"
                    },
                    player: {
                        id: 3337,
                        name: "Chap"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/195852.png",
                    views: 17,
                    streamStart: 1568165344
                },
                {
                    streamer: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    player: {
                        id: 3372,
                        name: "Symfuhny"
                    },
                    action: "Eliminated by",
                    image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                    views: 22,
                    streamStart: 1568165344
                }]
        },
        {
            streamer: {
                id: 3426,
                name: "Dakotaz"
            },
            videos: [{
                streamer: {
                    id: 3372,
                    name: "Symfuhny"
                },
                player: {
                    id: 3372,
                    name: "Symfuhny"
                },
                action: "Eliminated by",
                image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                views: 22,
                streamStart: 1568165344
            },
            {
                streamer: {
                    id: 3337,
                    name: "Nickmercs"
                },
                player: {
                    id: 3337,
                    name: "Nickmercs"
                },
                action: "Eliminated by",
                image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                views: 17,
                streamStart: 1568165344
            },
            {
                streamer: {
                    id: 3337,
                    name: "Nickmercs"
                },
                player: {
                    id: 3337,
                    name: "Nickmercs"
                },
                action: "Eliminated by",
                image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                views: 17,
                streamStart: 1568165344
            },
            {
                streamer: {
                    id: 3372,
                    name: "Symfuhny"
                },
                player: {
                    id: 3372,
                    name: "Symfuhny"
                },
                action: "Eliminated by",
                image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                views: 22,
                streamStart: 1568165344
            },
            {
                streamer: {
                    id: 3337,
                    name: "Nickmercs"
                },
                player: {
                    id: 3337,
                    name: "Nickmercs"
                },
                action: "Eliminated by",
                image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                views: 17,
                streamStart: 1568165344
            },
            {
                streamer: {
                    id: 3426,
                    name: "Dakotaz"
                },
                player: {
                    id: 3372,
                    name: "Symfuhny"
                },
                action: "Eliminated by",
                image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
                views: 22,
                streamStart: 1568165344
            }]
        }
    ],
    videos: [
        {
            streamer: {
                id: 3372,
                name: "Symfuhny"
            },
            player: {
                id: 3372,
                name: "Symfuhny"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 22,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3337,
                name: "Nickmercs"
            },
            player: {
                id: 3337,
                name: "Nickmercs"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 17,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3372,
                name: "Symfuhny"
            },
            player: {
                id: 3372,
                name: "Symfuhny"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 22,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3337,
                name: "Nickmercs"
            },
            player: {
                id: 3337,
                name: "Nickmercs"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 17,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3372,
                name: "Symfuhny"
            },
            player: {
                id: 3372,
                name: "Symfuhny"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 22,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3337,
                name: "Nickmercs"
            },
            player: {
                id: 3337,
                name: "Nickmercs"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 17,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3372,
                name: "Symfuhny"
            },
            player: {
                id: 3372,
                name: "Symfuhny"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 22,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3337,
                name: "Nickmercs"
            },
            player: {
                id: 3337,
                name: "Nickmercs"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 17,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3372,
                name: "Symfuhny"
            },
            player: {
                id: 3372,
                name: "Symfuhny"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 22,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3337,
                name: "Nickmercs"
            },
            player: {
                id: 3337,
                name: "Nickmercs"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 17,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3426,
                name: "Dakotaz"
            },
            player: {
                id: 3426,
                name: "Dakotaz"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 5,
            streamStart: 1568165344
        },
        {
            streamer: {
                id: 3150,
                name: "Ninja"
            },
            player: {
                id: 3150,
                name: "Ninja"
            },
            action: "Eliminated by",
            image: "https://d38ev7kpu49one.cloudfront.net/287050.png",
            views: 16,
            streamStart: 1568165344
        }
    ],
    topStreamers: {
        "Symfuhny": 3372,
        "Nickmercs": 3337,
        "Dakotaz": 3426,
        "Ninja": 3150,
        "Myth": 3429,
        "SypherPk": 3372,
        "Daequan": 3337,
        "Bugha": 3426,
        "Chap": 3150,
        "Cloakzy": 3429,
        "CDNThe3rd": 3372,
        "DrLupo": 3337,
        "MrFreshAsian": 3426,
        "Aydan": 3150,
        "BrookeAB": 3429,
        "TSM_Hamlinz": 3429,
        "Loeya": 3429,
        "AlexRamiGaming": 3429,
    }
}
export type State = typeof DEFAULT_STATE

const reducer = (state: State, action: { payload: any }): State => Object.assign({}, state, action.payload)

export const mainReducer = handleActions({
    [action as any]: reducer
},
    DEFAULT_STATE
)