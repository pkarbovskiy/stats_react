import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/Table'
const StreamerVideos: React.FC<{streamer:{id:number, name:string}, videos:any}> = ({streamer, videos}) => {
  return (
    <div className="streamer_video">
      <div className="streamer_video__info">
        <Link to={`/player/${streamer.id}/${streamer.name.toLowerCase()}`} className="streamer_video--pic">
          <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt="top streamer" />
        </Link>
        <h2>{streamer.name}</h2>
      </div>
      <Table videos={videos} classNameProp={['side','horisontal']} />
    </div>
  )
}

export default StreamerVideos