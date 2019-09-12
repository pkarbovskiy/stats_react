import React from 'react';
import VideoCart from './VideoCart';

const Table: React.FC<{ class?: string, videos: any }> = (props) => {

    return (
        <div className={`table ${props.class}`}>
            {props.videos.map((value, indx) => (<VideoCart key={indx} {...value} />))}
        </div>
    );
}

export default Table;