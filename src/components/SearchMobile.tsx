import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const SearchMobile = withRouter(({ history }) => {
    const [isOpened, setIsOpened] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    // TODO: set proper type
    function submit(e: any) {
        e.preventDefault()
        if (searchQuery) {
            history.push(`\search?q=${encodeURI(searchQuery)}`)
        }
    }
    return (
        <form action="/search" method="get" className="other__search" onSubmit={submit}>
            <div className="relative h-16 my-6 lg:hidden">
                <input className="w-full h-16 px-3 px-8 mb-8 text-lg border-4 rounded-full shadow-lg border-primary-500 focus:outline-none" type="text"
                    name="query"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter Epic/Streamer name" />
                <button type="submit" className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 mt-2 mr-2 rounded-full cursor-pointer bg-primary-500 ">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25">
                        <defs />
                        <path fill="#fff" fillRule="evenodd" d="M9.107 9.416a5.456 5.456 0 015.46-5.451 5.456 5.456 0 015.462 5.451 5.456 5.456 0 01-5.461 5.452 5.456 5.456 0 01-5.461-5.452zM14.567 0C9.359 0 5.136 4.216 5.136 9.416a9.36 9.36 0 001.523 5.133L.593 20.605a1.996 1.996 0 000 2.826c.782.78 2.049.78 2.83 0l6.08-6.07a9.4 9.4 0 005.065 1.472c5.21 0 9.432-4.216 9.432-9.417C24 4.216 19.777 0 14.568 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </form>
    )
})

export default SearchMobile
