import React, {useEffect, useState } from 'react'
import { API_KEY } from '../../config/config'
import Axios from 'axios'
import Card from '../../components/Card'

export default function TrendingMovies() {

  const [state,setState] = useState([])

  useEffect(() => {
    const fetchTrending = async() => {
        const res = await Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        //console.log(res.data['results'])
        setState(res.data['results'])
    }

    fetchTrending()
  },[])

  return (
    <>
      <div className="container movie-type">
        <h2>Trending Movies</h2>
      </div>
      <div className="movie__list">
        <div className="list__cards1" >
          {state.map(movie => (
              <Card media_type={movie} key={movie.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}
