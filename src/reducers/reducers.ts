import {handleActions} from 'redux-actions'
import {action} from '../actions'
const DEFAULT_STATE = {
  timeline: {
      events: [
          { id: '11035', startTime: 14340, eventType: 'eleminatedBy' },
          { id: '11033', startTime: 11503, eventType: 'eleminatedBy' },
          { id: '11032', startTime: 8807, eventType: 'eleminatedBy' },
          { id: '11031', startTime: 8453, eventType: 'eleminatedBy' },
          { id: '11030', startTime: 6255, eventType: 'eleminatedBy' },
          { id: '11029', startTime: 5809, eventType: 'eleminatedBy' },
          { id: '11028', startTime: 5473, eventType: 'eleminatedBy' },
          { id: '11027', startTime: 5315, eventType: 'eleminatedBy' },
          { id: '11026', startTime: 4065, eventType: 'eleminatedBy' },
          { id: '11025', startTime: 3595, eventType: 'eleminatedBy' },
          { id: '11024', startTime: 1197, eventType: 'eleminatedBy' }
      ],
      activeEvent: '11028',
      videoHandler: false
  },
  twitchPlayer: {
      video: 464060196,
      videoTime: 11488
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
        action: "Elemenated by",
        image: "https://i.ytimg.com/vi/tpLLst4-3fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa96p7hYxmvLj9e89oHrzzPVzN4g",
        views: 22
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
        action: "Elemenated by",
        image: "https://i.ytimg.com/vi/tpLLst4-3fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa96p7hYxmvLj9e89oHrzzPVzN4g",
        views: 17
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
        action: "Elemenated by",
        image: "https://i.ytimg.com/vi/tpLLst4-3fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa96p7hYxmvLj9e89oHrzzPVzN4g",
        views: 5
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
        action: "Elemenated by",
        image: "https://i.ytimg.com/vi/tpLLst4-3fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa96p7hYxmvLj9e89oHrzzPVzN4g",
        views: 16
    },
    {
        streamer: {
            id: 3429,
            name: "Myth"
        },
        player: {
            id: 3429,
            name: "Myth"
        },
        action: "Elemenated by",
        image: "https://i.ytimg.com/vi/tpLLst4-3fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa96p7hYxmvLj9e89oHrzzPVzN4g",
        views: 233
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
type State = typeof DEFAULT_STATE

const reducer = (state: State, action: {payload:any}): State => Object.assign({}, state,  action.payload)

export const mainReducer = handleActions({
    [action as any]: reducer
  },
  DEFAULT_STATE
)