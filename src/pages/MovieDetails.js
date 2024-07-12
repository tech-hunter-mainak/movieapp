import React, { useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import TopNav from '../components/TopNav';
import "../css/moviesearch.css";
import { useNavigate } from 'react-router-dom';

function MovieDetails() {
    const [movieData, setMovieData] = useState(null);
    const navigate = useNavigate()

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    useEffect(() => {
        try {
            const cookieData = getCookie('fulldata');
            const parsedData = JSON.parse(cookieData);
            setMovieData(parsedData);
        } catch (error) {
            console.error('Error parsing cookie data:', error);
        }
    }, []);

    if (!movieData) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <TopNav />
            <SideNav />
            <main id="moviedetails" style={{ "backgroundImage": "url('" + movieData.Poster + "')" }}>
                <div id="backdropshade">
                    <div id="backshade">
                        <div id="poster"><img src={movieData.Poster} alt={movieData.Title} /></div>
                        <div id="poster-details">
                            <div id="movie-name">{movieData.Title}</div>
                            <div id="movie-pre-details">
                                <span id="released-year">{movieData.Year}&nbsp;</span>
                                <span>•&nbsp;</span>
                                <span id="production">{movieData.Production || 'Unknown Production'}</span>
                            </div>
                            <div id="base-details">
                                <div id="star-rating">
                                    <div id="star-cnt">
                                        <span id="star-num">{movieData.imdbRating}/10</span>
                                        <span id="star-logo">&nbsp;★</span>
                                    </div>
                                    <div id="star-text">Average</div>
                                </div>
                                <div id="total-ratings">
                                    <div id="total-rating-num">{movieData.imdbVotes}</div>
                                    <div id="total-rating-text">Ratings</div>
                                </div>
                            </div>
                            <div id="short-description">{movieData.Plot}</div>
                            <button id="purchase-btn" onClick={()=>{navigate('/movie/purchase')}}>
                                <div id="purchase">Purchase</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="more">
                    <div id="additional-details">
                        <div id="additional-details-header">Additional Details</div>
                        <div id="additional-details-content">
                            {/* Add any additional movie details here */}
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default MovieDetails;
