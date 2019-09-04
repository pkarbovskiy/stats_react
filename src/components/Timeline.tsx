import React from 'react';
export interface Events {
    events: {
        id: string;
        startTime: number;
        eventType: string;
        actor?: string
    }[],
    activeEvent: string;
    videoHandler: any;
}
const Timeline: React.FC<Events> = (props: Events) => {
    let active = props.activeEvent;
    return (
        <div className="timeline">
            {props.events.map(event => (
                <div key={event.id} onClick={() => { props.videoHandler.seek(event.startTime); active = event.id; }} className={`timeline__event ${active == event.id ? 'active ' : ' '}${event.eventType}`}>
                </div>
            ))}
        </div>
    );
}

export default Timeline;