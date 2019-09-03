import React from 'react';
interface Events {
  events: {
    id: string;
    startTime:number;
    eventType: string;
    actor?: string
  }[],
  activeEvent: string;
  videoHandler: any;
}
const Timeline:React.FC<Events> = (props:Events) => {
  let active = props.activeEvent;
  return (
    <>
      {props.events.map(event => (
        <div key={event.id} onClick={()=> { props.videoHandler.seek(event.startTime); active = event.id;}} className={`${active == event.id? 'active': ''} eventType`}>
        </div> 
      ))}
    </>
  );
}

export default Timeline;