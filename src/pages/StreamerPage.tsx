import React from 'react'

const StreamerPage: React.FC<{streamer:{id:number, name:string}, videos:any}> = ({streamer, videos}) => {
  return (
    <div className="streamer_page">
        <div className="streamer_page__avatar">
          <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt={`${streamer.name} avatar`} />
          <h1>{streamer.name}</h1>
        </div>
    </div>
  )
}

export default StreamerPage