import React from 'react';
import VideoCart from './VideoCart';

const Table: React.FC<{ class?: string }> = (props) => {
    const a = [
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
    ];
    return (
        <div className={`table ${props.class}`}>
            {a.map(value => (<VideoCart {...value} />))}
        </div>
    );
}

export default Table;