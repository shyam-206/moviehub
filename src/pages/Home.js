import React from 'react'
import TrendingMovies from './HomeComponents/TrendingMovies'
import ActionandAdventure from './HomeComponents/ActionandAdventure'
import ScienceFiction from './HomeComponents/ScienceFiction'
import Horror from './HomeComponents/Horror'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <TrendingMovies />
            <ActionandAdventure />
            <Horror />
            <ScienceFiction />
            <Footer />
        </>
    )

}
