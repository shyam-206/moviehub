import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { API_KEY } from '../config/config';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

export default function Search() {

  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [load,setLoad] = useState(false)

  useEffect(() =>{ 
    const getMovie = async () => {
      const res = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
      setContent(res.data['results'])
    }
    getMovie()
  },[page,searchText])

  const handleText = (e) => {
    setSearchText(e.target.value)
    Search()
  }

  const Search = () => {
    const getMovie = async () => {
      const res = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
      setContent(res.data['results'])
    }
    setLoad(true)
    getMovie()
  }


  return (
    <>
      <div className='container'>
          <div className="row pt-3 mb-5">
            <div className="col-12 pt-5 pb-3 d-flex justify-content-center align-items-center">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleText} 
                sear
                className="form-control-lg col-6 search bg-dark text-white border border-0"
              />
              {/* <button className="btn btn-primary text-white mx-2 col-md-1 col-sm-2 py-2" onClick={Search}>
                <i className="fas fa-search"></i>
              </button> */}
            </div>
            { load &&
              <>
                <div className='list__cards2'>
                {content &&
                  content.map((Val) => {
                    return(
                      <>
                        <Card media_type={Val} key={Val.id} />
                      </>
                    )
                  })}
                </div>
                <div className='d-flex mt-0' style={{justifyContent:'center' ,alignItems:'center'}}>
                  <Pagination page={page}  setPage={setPage}/> 
                </div>
              </>
            }
          </div>
      </div>

    </>
  )
}
