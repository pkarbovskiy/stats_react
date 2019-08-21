import React from 'react';

const VideoCart: React.FC = (props) => {
    return (
        <div className="video_cart">
            <img src="https://i.ytimg.com/vi/izsIi6UTl2w/hqdefault_live.jpg?sqp=COznmOoF-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD6-qIW_O9g-ePC_2OaI4W2I3bI0A" />
            <div>
                <a><h4>Ninja</h4></a> Eliminated By <a>NinjaSucks4</a>
            </div>
            <span>views: <span>0</span> likes:<span> 10000</span> </span>
        </div>
    );
}

export default VideoCart;