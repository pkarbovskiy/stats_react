import React from 'react';

const VideoCart: React.FC = (props) => {
    return (
        <div className="video_cart">
            <img src="https://i.ytimg.com/vi/tpLLst4-3fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa96p7hYxmvLj9e89oHrzzPVzN4g" />
            <div>
                <a><h4>Ninja</h4></a> Eliminated By <a>NinjaSucks4</a>
            </div>
            <span>views: <span>0</span></span>
        </div>
    );
}

export default VideoCart;