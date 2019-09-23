import React, { useState } from 'react'

const Search: React.FC<{ mobile: boolean }> = ({ mobile }) => {
    const [isOpened, setIsOpened] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    // TODO: set proper type
    function submit(e: any) {
        if (isOpened && searchQuery) {
            e.target.submit()
        }
        e.preventDefault()
        setIsOpened(!isOpened)
    }
    return (
        <form action="/search" method="get" className="search">
            <input
                type="text"
                name="query"
                className={`search__query${isOpened ? ' expanded' : ''}`}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Epic/Streamer name"
            />
            <button type="submit" className="search__submit" onClick={submit}>
                <svg viewBox="0 0 24 24" >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                    </path>
                </svg>
            </button>
        </form>
    )
}

export default Search
