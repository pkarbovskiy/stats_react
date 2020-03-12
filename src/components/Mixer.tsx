
import React, { useRef } from 'react'
import { convertToFancyTime } from '../common_function'

const Mixer = (props: any) => {
    const iframe: any = useRef(false)
    const buffer = 15
    let videoTime: string = convertToFancyTime(props.videoTime - buffer < 0 ? 0 : props.videoTime - buffer)
    return (
        <iframe title={`Mixer ${props.channel_name}'s channel`} src={`https://mixer.com/embed/player/${props.channel_name}?vod=${props.videoId}&t=${videoTime}`} ref={iframe} className="player"></iframe>
    )
}

export default Mixer