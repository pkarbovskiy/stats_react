import React, { useState } from 'react';
import { TwitchPlayer, TwitchPlayerOptions } from '../components/TwitchPlayer';
import Timeline, { Events } from '../components/Timeline';
import UpDownVote from '../components/UpDownVote';
import Table from '../components/Table';
type VideoPage = {
    timeline: Events;
    twitchPlayer: TwitchPlayerOptions;
}
const videoPageData = {
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
    }
};

const VideoPage: React.FC = () => {
    const [videoHandler, setVideoHandler] = useState(false);
    return (
        <>
            <TwitchPlayer options={{ ...videoPageData.twitchPlayer, setVideoHandler } as any} />
            {videoHandler &&
                <Timeline {...videoPageData.timeline as any} videoHandler={videoHandler} />
            }
            <UpDownVote score={5} />
            <Table class="side" />
        </>


    )
}
export default VideoPage;