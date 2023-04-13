import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const navigation = [
    {
      pageName: "Home",
      route: "/",
      id: 1,
    },
    {
      pageName: "Movies",
      route: "/movies",
      id: 2,
    },
    {
      pageName: "TV Series",
      route: "/tvSeries",
      id: 3,
    },
    {
      pageName: "Search",
      route: "/search",
      id: 4,
    },
  ];

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <span className='navbar-brand nav-head' ><i className='fa fa-video'></i>&nbsp;MovieHub</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse header' id='navbarSupportedContent'>
                <ul className="navbar-nav">
                    {navigation.map((nav) => 
                      <li key={nav.id} className='nav-item'>
                        <Link className='nav-link' to={nav.route} >{nav.pageName}</Link>
                      </li>
                    )}
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
