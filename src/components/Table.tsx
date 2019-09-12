import React from 'react';
import VideoCart, { videoCartProps } from './VideoCart';

const Table: React.FC<{ videos: any; class?: string }> = (props) => {

    return (
        <div className={`table ${props.class}`}>
            {props.videos.map((value: videoCartProps, indx: number) => (<VideoCart key={indx} {...value} />))}
        </div>
    );
}

export default Table;