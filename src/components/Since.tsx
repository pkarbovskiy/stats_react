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
            text = `${since / 30 | 0} months`
            break
        default:
            return (<></>)
    }
    return (
        <span className="since--date">{text}</span>
    )
}

export default Since