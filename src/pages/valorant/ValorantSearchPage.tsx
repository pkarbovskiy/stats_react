import React, { useEffect, useState } from 'react'
import SearchPlayer from '../../components/valorant/SearchPlayer'
import Loader from '../../components/Loader'
import { ROOT_URL } from '../../constants'
// @todo consolidate to one file
type Player = {
    player_name: string;
    player_id: number
}

const ValorantSearchPage = ({ location }:
    { location: any; searchFromCache: any; onData: any; }) => {
    const [search, setSearch] = useState<any>()
    const [loaded, setLoaded] = useState<any>(false)
    // TODO: may be make it protected
    const searchString = location.search.replace('?', '').split('=')
    const queryName = searchString[0]
    const queryString = encodeURI(searchString[1])
    useEffect(() => {
        setLoaded(false)
        if (queryName !== 'q') {
            setLoaded(true)
            return
        }
        fetch(`${ROOT_URL}/api/valorant/search?q=${queryString}`)
            .then(data => data.json())
            .then(data => {

                setSearch(data)
                setLoaded(true)
            }).catch((err) => setLoaded(true))
    }, [queryName, queryString])
    return (
        <div className="search_page_val">
            {!loaded && <Loader />}
            {loaded && search?.players && <div className="text-lg uppercase text-black p-6 py-8 sm:p-8 lg:px-16 search-results">Results Found: {search.players.length} </div>}
            {loaded && search?.players.length === 0 && searchString[1] != null && <p className="p-6">Sorry! We couldn't find '{decodeURI(searchString[1])}' in any recent Twitch Broadcasts. Check back soon!</p>}
            {loaded && search?.players.map((player: Player) => {
                if (search?.players.length > 0) {
                    return (
                        <SearchPlayer
                            key={player.player_id}
                            {...player}
                            gaEvent="Valorant::Search Page"
                        />
                    )
                } else {
                    return (<></>)
                }

            })}
        </div>
    )
}


export default ValorantSearchPage