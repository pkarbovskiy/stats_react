import { handleActions } from 'redux-actions'
import { action } from '../actions'
const DEFAULT_STATE = {
    deathKillTimers: [
        {id:328272, startTime:5808, action_id:2},
        {id:328282, startTime:6069, action_id:2},
        {id:328307, startTime:6204, action_id:2},
        {id:328311, startTime:6230, action_id:2},
        {id:328313, startTime:6241, action_id:2},
        {id:328315, startTime:6359, action_id:2},
        {id:328325, startTime:6452, action_id:2},
        {id:328334, startTime:6495, action_id:2},
        {id:328341, startTime:6787, action_id:3},
        {id:328354, startTime:7084, action_id:2},
        {id:328364, startTime:7103, action_id:2},
        {id:328372, startTime:7119, action_id:2},
        {id:328374, startTime:7134, action_id:2},
        {id:328409, startTime:7467, action_id:2},
        {id:328410, startTime:7469, action_id:2},
        {id:328432, startTime:7848, action_id:2},
        {id:328433, startTime:7849, action_id:2},
        {id:328437, startTime:7907, action_id:2},
        {id:328438, startTime:7908, action_id:2},
        {id:328439, startTime:7909, action_id:2},
        {id:328443, startTime:7957, action_id:2},
        {id:328444, startTime:7958, action_id:2},
        {id:328445, startTime:7968, action_id:2},
        {id:328446, startTime:7969, action_id:2},
        {id:328451, startTime:7970, action_id:2},
        {id:328458, startTime:8207, action_id:2},
        {id:328459, startTime:8208, action_id:2},
        {id:328460, startTime:8209, action_id:2},
        {id:328478, startTime:8520, action_id:2},
        {id:328479, startTime:8521, action_id:2},
        {id:328499, startTime:8775, action_id:2},
        {id:328501, startTime:8776, action_id:2},
        {id:328513, startTime:8876, action_id:3},
        {id:328534, startTime:9153, action_id:2},
        {id:328535, startTime:9154, action_id:2},
        {id:328537, startTime:9166, action_id:2},
        {id:328549, startTime:9313, action_id:2},
        {id:328553, startTime:9350, action_id:2},
        {id:328577, startTime:9520, action_id:2},
        {id:328584, startTime:9537, action_id:2},
        {id:328604, startTime:9597, action_id:2},
        {id:328649, startTime:10272, action_id:2},
        {id:328657, startTime:10330, action_id:3},
        {id:328679, startTime:10555, action_id:2},
        {id:328683, startTime:10580, action_id:2},
        {id:328697, startTime:10756, action_id:2},
        {id:328709, startTime:10991, action_id:2},
        {id:328719, startTime:11132, action_id:2},
        {id:328733, startTime:11196, action_id:2},
        {id:328745, startTime:11352, action_id:2},
        {id:328751, startTime:11452, action_id:2}        
    ],
    timeline: {
        activeEvent: '11028',
        videoHandler: false
    },
    twitchPlayer: {
        video: 486266736,
        videoTime: 0
    },
    streamers: [
        {
            streamer: {
                id: 3372,
                name: "Symfuhny"
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