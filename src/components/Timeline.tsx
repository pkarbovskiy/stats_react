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
const Timeline: React.FC<Events> = ({ events, activeEvent, videoHandler }) => {
    let active = activeEvent;
    const eventPic: any = {
        'eleminatedBy': (<svg viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 100.3 0 224c0 70.1 36.9 132.6 94.5 173.7 9.6 6.9 15.2 18.1 13.5 29.9l-9.4 66.2c-1.4 9.6 6 18.2 15.7 18.2H192v-56c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v56h64v-56c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v56h77.7c9.7 0 17.1-8.6 15.7-18.2l-9.4-66.2c-1.7-11.7 3.8-23 13.5-29.9C475.1 356.6 512 294.1 512 224 512 100.3 397.4 0 256 0zm-96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm192 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"></path></svg>)
    }
    return (
        <div className="timeline">
            {events.map(event => (
                <div key={event.id} onClick={() => { videoHandler.seek(event.startTime); active = event.id; }} className={`timeline__event ${active === event.id ? 'active ' : ' '}${event.eventType}`}>
                    {eventPic[event.eventType]}
                </div>
            ))}
        </div>
    );
}

export default Timeline;