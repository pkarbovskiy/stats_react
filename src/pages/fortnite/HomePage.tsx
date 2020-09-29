import React, { useEffect, useState, useMemo, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Helmet } from 'react-helmet'

import TopRated from '../../components/TopRated'
import { addMedia } from '../../actions'
import Loader from '../../components/Loader'
import '../../styles/App.scss'
import { mediaTypes, elementsOnLoad, ROOT_URL } from '../../constants'
import { shouldLazyLoad, gaEvents } from '../../common_function'
import Search from '../../components/Search'
import { Games } from '../../constants'

const HomePage = () => {

    const currentSince = useRef<1 | 7 | 14>(7)

    const { mediaById, media }: { mediaById: any; media: number[] } = useSelector(
        (state: any) => ({
            mediaById: state.mainReducer.media[mediaTypes.TOP_RATED].byId,
            media: state.mainReducer.media[mediaTypes.TOP_RATED].media
        }),
        shallowEqual
    )

    /**
     * split all events by since and keep them in the same order
     * @param { entitySorted, entityById } entity which consists of just ids in array and dictionary
     * @returns object like { [since: number]: number[] }
     */
    function splitBySince({ entitySorted, entityById }: { entitySorted: any; entityById: any }): { [action: string]: number[] } {
        return entitySorted.reduce((acc: { [action: string]: number[] }, id: number) => {

            if (!entityById[id]) {
                return acc
            }

            if (entityById[id].since <= 1) {
                acc[1].push(id)
            }

            if (entityById[id].since <= 7) {
                acc[7].push(id)
            }

            if (entityById[id].since <= 14) {
                acc[14].push(id)
            }

            return acc
        }, { 1: [], 7: [], 14: [] })
    }

    const idsForSince = useMemo(
        () => splitBySince({ entitySorted: media, entityById: mediaById }),
        [
            media,
            mediaById
        ]
    )
    const dispatch = useDispatch()
    const [mediaSorted, setMediaSorted] = useState<number[]>([])

    useEffect(() => {
        setMediaSorted((state: any) => idsForSince[currentSince.current].slice(0, elementsOnLoad))
        function scroll() {
            if (shouldLazyLoad()) {
                setMediaSorted((state: any) => idsForSince[currentSince.current].slice(0, state.length + 6))
            }
        }

        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [media, idsForSince])

    useEffect(() => {

        function getMediaForThePage(page = 1, amount = 3, since = 7) {
            fetch(`${ROOT_URL}/api/video/top_videos?page=${page}&amount=${amount}&since=${since}`)
                .then(data => data.json())
                .then(data => {
                    dispatch(addMedia({ data, since }, mediaTypes.TOP_RATED))
                })
        }

        if (media.length < elementsOnLoad) {

            // fetch media from server
            getMediaForThePage(1, elementsOnLoad)
            //setCurrentPage((state: number) => state++)
        }
    }, [dispatch, media.length])


    function sortBySince(since: 1 | 7 | 14): void {
        gaEvents({ eventCategory: `Top Rated Buttons:click:${since}`, eventAction: 'click', eventLabel: `${since}` })
        currentSince.current = since
        // setting what actions we need to see
        setMediaSorted(idsForSince[since].slice(0, elementsOnLoad))
    }

    return (
        <>
            <Helmet>
                <title>Fortnite - VODsearch.tv  | See which streamers you&apos;ve killed</title>
            </Helmet>
            <div className="home_page fortnite">
                <svg viewBox="0 0 101 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 14.0931C0 21.8459 0.0191652 28.1862 0.0447188 28.1862C0.0830491 28.1862 5.28959 27.2211 5.92843 27.0933L6.26063 27.0293V21.8523V16.6816H8.24103H10.2214V15.7357C10.2214 15.218 10.2406 13.8694 10.2661 12.7317L10.3045 10.6737H8.28575H6.26063V8.40473V6.13577H8.59239C9.87646 6.13577 10.9242 6.12299 10.9242 6.10381C10.9242 6.03351 11.4352 0.57523 11.4672 0.300398L11.5055 0H5.74955H0V14.0931Z" fill="#666FE4" />
                    <path d="M95.5573 0.824446L90.4594 1.24628V13.978V26.7097L90.6702 26.7417C90.8554 26.7736 100.726 27.4895 100.924 27.4831C100.981 27.4831 101 26.8056 101 24.3193V21.1556H98.8281H96.6561V18.8547V16.5537H98.5087H100.361V13.8054V11.0571H98.4448H96.5283V9.23556V7.41401L96.6753 7.38844C96.7519 7.36927 97.4035 7.3437 98.1254 7.31814C98.8473 7.29896 99.7864 7.267 100.221 7.24144L101 7.20309V3.79646V0.383438L100.828 0.38983C100.726 0.396221 98.3554 0.587963 95.5573 0.824446Z" fill="#666FE4" />
                    <path d="M62.8302 1.70625C62.8941 2.34539 63.6223 11.9773 63.6096 11.9901C63.6032 12.0028 62.6641 9.69553 61.5206 6.86413C60.3834 4.03273 59.4252 1.68707 59.3996 1.64233C59.3613 1.57203 57.5981 1.89799 54.7041 2.51157L54.4294 2.56909V13.5559V24.5428H57.2723H60.1151L60.0832 24.0826C60.0193 23.2262 59.7829 16.1445 59.8085 15.8633C59.8276 15.614 60.0193 16.0486 61.8336 20.4331C62.9324 23.0983 63.8651 25.3034 63.8907 25.3417C63.929 25.3801 64.817 25.3226 66.3246 25.1947C67.6343 25.0797 68.7075 24.9774 68.7075 24.971C68.7139 24.9646 68.682 20.3564 68.6372 14.732C68.5925 9.10752 68.5542 3.79624 68.5542 2.92062L68.5478 1.34194H65.673H62.7919L62.8302 1.70625Z" fill="#666FE4" />
                    <path d="M17.8575 1.73105C14.0373 1.98671 11.9355 4.6008 11.2711 9.90569C11.1369 11.005 11.0794 14.7376 11.1753 16.0415C11.4947 20.2726 12.6382 23.0209 14.6697 24.4206C15.7621 25.1684 17.404 25.5711 19.0266 25.4752C20.8728 25.3729 22.1314 24.8488 23.2621 23.7176C24.1884 22.7908 24.6931 21.9216 25.1786 20.4388C25.8558 18.3679 26.1624 15.2745 26.0091 12.0532C25.8366 8.44844 25.2936 6.20505 24.1756 4.48576C23.1088 2.84955 21.4223 1.87166 19.4546 1.75023C19.1416 1.73105 18.8094 1.71188 18.72 1.6991C18.6305 1.69271 18.2472 1.70549 17.8575 1.73105ZM18.7583 6.75471C19.2246 7.25964 19.4227 9.27294 19.4227 13.5808C19.4227 18.8856 19.0905 21.0907 18.3622 20.6177C18.0492 20.4068 17.8128 19.3778 17.6978 17.6713C17.6148 16.4249 17.6148 10.7174 17.6978 9.5222C17.8192 7.83486 18.0364 6.90172 18.3622 6.67802C18.5411 6.55019 18.573 6.55658 18.7583 6.75471Z" fill="#666FE4" />
                    <path d="M26.8308 13.3506V24.9893H29.7631H32.689L32.7273 24.1776C32.7528 23.7238 32.804 22.2538 32.8423 20.8988C32.8806 19.5439 32.9317 18.355 32.9573 18.2592C32.9892 18.125 33.2639 18.9878 34.1072 21.9023C34.7205 24.0051 35.2379 25.7499 35.2635 25.7755C35.3146 25.833 41.3069 25.3601 41.3708 25.2961C41.39 25.2706 40.7256 23.1806 39.8951 20.6368L38.3874 16.0222L38.7068 15.741C39.7673 14.8142 40.6425 13.0246 40.8917 11.2542C41.0003 10.4808 40.93 8.56339 40.7639 7.85394C40.1251 5.07367 38.4321 2.91336 36.2729 2.10805C35.3338 1.76291 35.4104 1.7693 30.9705 1.74373L26.8308 1.71817V13.3506ZM33.4172 7.22758C33.8708 7.45128 34.2413 8.0265 34.4394 8.81904C34.5735 9.34953 34.5544 11.0305 34.4074 11.5674C34.1327 12.5772 33.6472 13.1652 32.9189 13.3889L32.772 13.4273V10.2315V7.02944L32.9828 7.07418C33.0914 7.09336 33.2895 7.16366 33.4172 7.22758Z" fill="#666FE4" />
                    <path d="M41.0774 4.76085V7.73286H42.7064H44.3355V16.2974V24.8619H47.4019H50.4683V16.8087V8.75549H52.1293H53.7903V5.78348V2.81146L53.6498 2.7859C53.5156 2.75394 41.3329 1.78244 41.1604 1.78884C41.0966 1.78884 41.0774 2.42798 41.0774 4.76085Z" fill="#666FE4" />
                    <path d="M69.8879 14.0284V25.6288H73.0502H76.2124V14.0284V2.42797H73.0502H69.8879V14.0284Z" fill="#666FE4" />
                    <path d="M83.4328 3.23408C79.9703 3.41943 77.0891 3.57283 77.0316 3.57283C76.923 3.57922 76.9166 3.76457 76.9166 6.58319V9.58716H78.5457H80.1747V17.9919V26.3966H83.2731H86.3714V17.6404V8.8841H88.0963H89.8212V5.88013C89.8212 4.22475 89.802 2.88255 89.7765 2.88255C89.7445 2.88894 86.8953 3.04234 83.4328 3.23408Z" fill="#666FE4" />
                </svg>
                <div className="home_page__search">
                    <Search currentGame={Games.fortnite} />
                    <span className="home_page__search--text">Find all your streamer interactions</span>
                </div>
            </div>
            <div className="p-6 py-12 sm:p-8 sm:py-10 lg:px-16">
                <div className={'text-primary-500 text-2xl font-bold mb-2 pl-2'}>Top Highlights</div>
                {mediaSorted.length === 0 && <Loader />}
                {mediaSorted.length > 0 && (
                    <>
                        <div className="pl-2 home_page__filters">
                            <button className={currentSince.current === 1 ? 'active' : ''} onClick={() => sortBySince(1)}>Last 2 days</button>
                            <button className={currentSince.current === 7 ? 'active' : ''} onClick={() => sortBySince(7)}>Last Week</button>
                            <button className={currentSince.current === 14 ? 'active' : ''} onClick={() => sortBySince(14)}>Last 2 Weeks</button>
                        </div>
                        <TopRated
                            mediaSorted={mediaSorted}
                            mediaById={mediaById}
                            gaEvent="Home Page::Top rated"
                        />
                    </>
                )}
            </div>
        </>
    );
}

export default HomePage