import React from 'react'
import { featuredStreamer8bit, pic8bitFaces, defaultPic } from '../constants'

export type Player = { id: number; name: string; avatar?: string; slug?: string }

const Avatar = ({ player }: { player: Player }) => {
    let profilePic = defaultPic
    let avatar = false
    if (pic8bitFaces.includes(player.id)) {
        profilePic = featuredStreamer8bit.replace('::id', `${player.id}`)
    } else if (player.avatar) {
        profilePic = player.avatar
        avatar = true
    }
    return (
        <img
            src={profilePic}
            alt={``}
            className={avatar ? 'rounded-full  object-center object-cover border-white mr-2 h-12 w-12 bg-primary-900' : 'rounded-full object-center object-cover border-white mr-2 h-8 w-8 bg-primary-900'} />)
}

export default Avatar