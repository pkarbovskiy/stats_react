import React, { MouseEvent } from "react"
import Avatar, { Player } from '../Avatar'
//@todo proper types
const StreamersList = ({ streamersList, elementClicked, currentlyActive }: { streamersList: any; elementClicked: Function, currentlyActive: any }) => {
    if (streamersList.length <= 1) {
        return null
    }
    const handleElementClicked = (id: number, event: MouseEvent) => {
        event.preventDefault()
        elementClicked(id)
    }
    return (
        <div className="streamer_list">
            <ul>
                {streamersList.map((streamer: Player) => (
                    <li key={streamer.id} onClick={handleElementClicked.bind(null, streamer.id)} className={currentlyActive[streamer.id] ? 'active' : ''}><Avatar player={streamer} /> {streamer.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default StreamersList