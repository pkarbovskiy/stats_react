import React from 'react';
import { TwitchPlayer } from '../components/TwitchPlayer';
import UpDownVote from '../components/UpDownVote';
import Table from '../components/Table';

const VideoPage: React.FC = () => {
    return (
        <>
            <TwitchPlayer options={{
                video: 464060196,
                videoTime: 11488
            }} />
            <UpDownVote score={5} />
            <Table class="side" />
        </>
    )
}
export default VideoPage;