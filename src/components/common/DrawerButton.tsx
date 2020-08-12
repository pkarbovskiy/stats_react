import React from "react"

type Props = {
    toggleState: Function,
    isClosed: boolean
}

const DrawerButton = ({ toggleState, isClosed }: Props) => {
    return (
        <button onClick={toggleState.bind(null)} className={`mr-2 ${isClosed ? 'closed' : ''}`}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="36" y="36" width="36" height="36" rx="8" transform="rotate(-180 36 36)" fill="#E5E7FA" />
                <path d="M22.5723 15L24 16.4218L18 22.4218L12 16.4218L13.4277 15L18 19.5723L22.5723 15Z" fill="#666FE4" />
            </svg>
        </button>
    )
}
export default DrawerButton