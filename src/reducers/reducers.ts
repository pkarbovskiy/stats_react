import { handleActions } from 'redux-actions'
import { action } from '../actions'
const DEFAULT_STATE = {
    killDeathTimers: [
        {id:331880, startTime:  708, actionId: 2},
        {id:331958, startTime:  2266, actionId:  2},
        {id:332059, startTime:  5874, actionId:  3},
        {id:332060, startTime:  5875, actionId:  3},
        {id:332090, startTime:  7153, actionId:  3},
        {id:332091, startTime:  7154, actionId:  3},
        {id:332139, startTime:  11526, actionId: 2},
        {id:332140, startTime:  11527, actionId: 2},
        {id:332141, startTime:  11528, actionId: 2},
        {id:332142, startTime:  11529, actionId: 2},
        {id:332143, startTime:  11530, actionId: 2},
        {id:332146, startTime:  12205, actionId: 3},
        {id:332154, startTime:  12718, actionId: 3},
        {id:332155, startTime:  12719, actionId: 3},
        {id:332164, startTime:  14515, actionId: 2},
        {id:332165, startTime:  14516, actionId: 2},
        {id:332166, startTime:  14517, actionId: 2},
        {id:332167, startTime:  14518, actionId: 2},
        {id:332179, startTime:  14683, actionId: 2},
        {id:332180, startTime:  14684, actionId: 2},
        {id:332181, startTime:  14685, actionId: 2},
        {id:332182, startTime:  14686, actionId: 2},
        {id:332206, startTime:  15715, actionId: 2},
        {id:332207, startTime:  15716, actionId: 2},
        {id:332209, startTime:  15717, actionId: 2},
        {id:332211, startTime:  15718, actionId: 2},
        {id:332218, startTime:  15912, actionId: 2},
        {id:332219, startTime:  15915, actionId: 2},
        {id:332224, startTime:  15991, actionId: 2},
        {id:332225, startTime:  15992, actionId: 2},
        {id:332226, startTime:  15993, actionId: 2},
        {id:332227, startTime:  15994, actionId: 2},
        {id:332228, startTime:  15995, actionId: 2},
        {id:332229, startTime:  16018, actionId: 2},
        {id:332230, startTime:  16147, actionId: 2},
        {id:332236, startTime:  17380, actionId: 2},
        {id:332237, startTime:  17381, actionId: 2},
        {id:332242, startTime:  17465, actionId: 2},
        {id:332243, startTime:  17466, actionId: 2},
        {id:332244, startTime:  17467, actionId: 2},
        {id:332245, startTime:  17468, actionId: 2},
        {id:332246, startTime:  17471, actionId: 2},
        {id:332247, startTime:  17472, actionId: 2},
        {id:332248, startTime:  17473, actionId: 2},
        {id:332249, startTime:  17474, actionId: 2},
        {id:332254, startTime:  18528, actionId: 2},
        {id:332255, startTime:  18529, actionId: 2},
        {id:332256, startTime:  18530, actionId: 2},
        {id:332257, startTime:  18531, actionId: 2},
        {id:332258, startTime:  18532, actionId: 2},
        {id:332264, startTime:  19544, actionId: 2},
        {id:332265, startTime:  19545, actionId: 2},
        {id:332266, startTime:  19546, actionId: 2},
        {id:332267, startTime:  19547, actionId: 2},
        {id:332268, startTime:  19647, actionId: 2},
        {id:332269, startTime:  19648, actionId: 2},
        {id:332275, startTime:  20499, actionId: 2},
        {id:332276, startTime:  20501, actionId: 2},
        {id:332277, startTime:  20502, actionId: 2},
        {id:332278, startTime:  20749, actionId: 3},
        {id:332279, startTime:  20750, actionId: 3},
        {id:332280, startTime:  21624, actionId: 2},
        {id:332281, startTime:  21625, actionId: 2},
        {id:332282, startTime:  21626, actionId: 2},
        {id:332283, startTime:  21627, actionId: 2},
        {id:332284, startTime:  21628, actionId: 2},
        {id:332293, startTime:  22284, actionId: 2},
        {id:332294, startTime:  22285, actionId: 2},
        {id:332295, startTime:  22286, actionId: 2},
        {id:332296, startTime:  22287, actionId: 2},
        {id:332297, startTime:  22288, actionId: 2},
        {id:332302, startTime:  22336, actionId: 3},
        {id:332303, startTime:  22349, actionId: 3},
        {id:332304, startTime:  23538, actionId: 2},
        {id:332310, startTime:  24858, actionId: 2},
        {id:332311, startTime:  24892, actionId: 2},
        {id:332312, startTime:  24958, actionId: 2},
        {id:332320, startTime:  25131, actionId: 2},
        {id:332321, startTime:  25137, actionId: 2},
        {id:332322, startTime:  25139, actionId: 2},
        {id:332323, startTime:  25184, actionId: 2},
        {id:332331, startTime:  25287, actionId: 2},
        {id:332332, startTime:  25288, actionId: 2},
        {id:332333, startTime:  25290, actionId: 2},
        {id:332334, startTime:  25300, actionId: 2},
        {id:332335, startTime:  25318, actionId: 2},
        {id:332339, startTime:  25349, actionId: 2},
        {id:332340, startTime:  25513, actionId: 3},
        {id:332341, startTime:  25565, actionId: 3},
        {id:332342, startTime:  25566, actionId: 3},
        {id:332345, startTime:  25646, actionId: 2},
        {id:332355, startTime:  25876, actionId: 2}
    ],
    timeline: {
        activeEvent: '11028',
        videoHandler: false
    },
    twitchPlayer: {
        video: 464060196,
        videoTime: 11488
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
        },
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