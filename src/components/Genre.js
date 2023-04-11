import React, { useEffect } from "react";
import Axios from "axios";
import { API_KEY } from "../config/config";
//import { v4 } from "uuid";
export default function Genre  ({ genre, setGenre, setPage, type, value, setValue }) {
  
  useEffect(() => {
    const fetchGenre = async () => {
        const res = await Axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
        setGenre(res.data['genres'])
        //console.log(data.data['genres'])
      };

    fetchGenre();
  },[setGenre,type]);

  //Adding a particular genre to the selected array
  const CategoryAdd = (genres) => {
    //first - select everything that's inside of values using the spread operator
    //second - add those genres that are being sent from the non-selected arrays
    setValue([...value,genres])
    //removing those genres from the non selected array that have been added to the selected array.
    setGenre(genre.filter((g) => g.id !== genres.id))
    setPage(1)
  }

  //removing a perticular genre from the selected array
  const CategoryRemove = (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre,genres]);
    setPage(1);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mx-5 movie__row">
          <div className="col-12 d-flex flex-wrap">
            {value && value.map((genre) => {
                return (
                  <>
                    <div className="m-2" key={genre.id} >
                      <button
                        className="bg-dark text-white px-4 py-2 text-center buttons"
                        onClick={() => CategoryRemove(genre)}
                      >
                        {genre.name}
                      </button>
                    </div>
                  </>
                );
              })}

            {genre && genre.map((Gen) => {
                return (
                  <>
                    <div className="m-2" key={Gen.id} >
                      <button
                        className="bg-dark text-white px-3 py-2 text-center button"
                        onClick={() => CategoryAdd(Gen)}
                      >
                        {Gen.name}
                      </button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};