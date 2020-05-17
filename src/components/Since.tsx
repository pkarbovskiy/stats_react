import React from 'react'

const Since = ({ since }: { since: any }) => {
    let text
    switch (true) {
        case since === 0:
            text = 'Today'
            break
        case since === 1:
            text = 'Yesterday'
            break
        case since < 30:
            text = `${since} days ago`
            break
        case since >= 30 && since < 60:
            text = 'Last month'
            break
        case since >= 60:
            text = `${since / 30 | 0} months ago`
            break
        default:
            return (<></>)
    }
    return (
        <span className="absolute bottom-0 px-2 py-1 text-xs text-white bg-gray-800 opacity-75 rounded-tr-md">{text}</span>
    )
}

export default Since