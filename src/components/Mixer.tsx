
import React, { useRef, useEffect } from 'react';

const Mixer = (props: any) => {
    const iframe: any = useRef(false)
    useEffect(() => {
        if (iframe.current) {
            const video = iframe.current.contentWindow.document.querySelector('.spectre-video-element')
            console.log(iframe.current.contentWindow.document)
            //video.currentTime = 360
        }
    }, [iframe.current])
    return (
        <iframe src="https://mixer.com/embed/player/ninja?vod=220588737" ref={iframe}></iframe>
    )
}

export default Mixer