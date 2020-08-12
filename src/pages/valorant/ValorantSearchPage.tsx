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
    useEffect(() => {
        setLoaded(false)
        const queryString = encodeURI(searchString[1])
        fetch(`${ROOT_URL}/api/valorant/search?q=${searchString[1]}`)
            .then(data => data.json())
            .then(data => {

                setSearch(data)
                setLoaded(true)
            })
    }, [searchString[1]])
    return (
        <div className="">
            {!loaded && <Loader />}
            {loaded && <div className="text-lg uppercase text-black p-6 py-8 sm:p-8 lg:px-16 search-results">Results Found: {search.players.length} </div>}
            {loaded && search?.players.map((player: Player) => {
                if (search?.players.length > 0) {
                    return (

                        <SearchPlayer
                            key={player.player_id}
                            {...player}
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