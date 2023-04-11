import React ,{useEffect,useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { unavailable } from '../config/config'

export default function Card({media_type}) {
    
    /* loading for the first the render then they 
    don't show direct cards instead of they show loading 
    effect and the after one second they show the all popular 
    picture in form of cards */ // using the skeleton loading theme used

    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },1000)    
    },[])


    return (
        <>
            {
                isLoading ? 
                // first one second this will show 
                <div className="cards">
                    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <div >
                    <div className="cards"key={media_type.id} style={{textDecoration:'none' ,color:"white"}}>
                        <img className="cards_img" src={media_type.poster_path ? `https://image.tmdb.org/t/p/original/${ media_type ? media_type.poster_path:"" }` : unavailable} alt="" />
                        <div className="cards_overlay">
                            <div className="card_title">{ media_type ? media_type.original_title || media_type.name :""}</div>
                            <div className="card_runtime">
                                { media_type ? media_type.release_date || media_type.first_air_date:"" }
                                <span className='card_rating'> 
                                    {media_type ? media_type.vote_average:""} 
                                    <i className="fas fa-star" />{""}
                                </span>
                            </div>
                            <div className="card_description">
                                {media_type ? media_type.overview.slice(0,118) +"..." :""}
                            </div>
                        </div>
                    </div>
            </div>
            }
        </>
    )
}