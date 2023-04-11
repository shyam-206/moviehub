import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Search from '../pages/Search'
import TVseries from '../pages/TVseries'


export default function Navigation() {

  return ( 
    <div style={{bottom:'0px'}}>
      <Routes>
        <Route path='/' element={ <Home/> } exact/>
        <Route path='/movies' element={ <Movies /> } />
        <Route path='/tvSeries' element={ <TVseries/> } />
        <Route path='/search' element={ <Search/> } />
      </Routes>
    </div>
  )
}
