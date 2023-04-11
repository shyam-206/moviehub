import React, {useEffect, useState } from 'react'
import { API_KEY } from '../../config/config'
import Axios from 'axios'
import Card from '../../components/Card'

export default function ActionandAdventure() {
  const [state,setState] = useState([])

  useEffect(() => {

    const fetchData = async() => {
        const res = await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`)
        //console.log(res.data['results'])
        setState(res.data['results'])
    }

    fetchData()
  },[])

  return (
    <>
      <div className="container movie-type">
        <h2>Action and Adventure</h2>
      </div>
      <div className="movie__list" >
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
