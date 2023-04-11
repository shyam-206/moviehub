import React, {useEffect,useState}from 'react'
import Pagination from '../components/Pagination';
import Genre from '../components/Genre';
import useGenre from '../useGenre';
import Axios from 'axios';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function TVseries() {
  const [state, setState] = useState([]); //store the fetched data
  const [page, setPage] = useState(1); //keep a track of the page numbers
  const [genre, setGenre] = useState([]); //used to store the origional genre values
  const [value, setValue] = useState([]); //used to store the selected genre values
  const genreURL = useGenre(value)

  
  useEffect(() => {
    const fetchTrending = async () => {
      const res = await Axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`)
      setState(res.data['results'])
    }
    
    fetchTrending()
  }, [page, genreURL])

  return (
    <>
      <div className='movie__list'>
        <div className="row movie__row">
          <div className="col-12 text-center mt-2 mb-4 fs-1 fw-bold text-decoration-underline">
            TV Series
          </div>
          <Genre
            genre={genre}
            setGenre={setGenre}
            setPage={setPage}
            type="movie"
            value={value}
            setValue={setValue}
          />
        </div>
        
        <div className="list__cards2">
          {state.map((Val) => {
            return <Card  media_type={Val} key={Val.id} />
          })}
          
        </div>
        <div className='d-flex' style={{justifyContent:"center" ,alignItems:'center'}}>
          <Pagination page={page} setPage={setPage} />
        </div> 
      </div>
      <Footer />
    </>
  )
}
