import React from 'react'
import { featuredStreamer8bit, pic8bitFaces, defaultPic } from '../constants'

const Avatar = ({ player }: { player: { id: number; name: string; avatar?: string; slug?: string } }) => {
    let profilePic = defaultPic
    let avatar = false
    if (pic8bitFaces.includes(player.id)) {
        profilePic = featuredStreamer8bit.replace('::id', `${player.id}`)
    } else if (player.avatar) {
        profilePic = player.avatar
        avatar = true
    }

    return (<img src={profilePic} alt={``} className={avatar ? 'avatar' : ''} />)
}

export default Avatar