import React from 'react'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'

function MovieDetails(movie_details) {
    return (
        <React.Fragment>
            <TopNav />
            <section id='moviedetails'>
                <SideNav />
            </section>
        </React.Fragment>
    )
}

export default MovieDetails