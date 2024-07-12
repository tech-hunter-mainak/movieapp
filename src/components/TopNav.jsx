import React, { useEffect, useState } from 'react';
import Moviesection from './Moviesection';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

function TopNav({ sendData }) {
    const navigate = useNavigate();
    const [movie, setMovie] = useState('');
    const [series, setSeries] = useState('');
    const [episode, setEpisode] = useState('');
    const [mmetadata, setMMetaData] = useState('');
    const [smetadata, setSMetaData] = useState('');
    const [emetadata, setEMetaData] = useState('');
    const [text, setText] = useState('');
    let sm = '', se = '', ss = '';

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

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

    let data;
    try {
        data = JSON.parse(getCookie('userdetails'));
    } catch (error) {
        console.error('Error parsing user details cookie:', error);
        data = null;
    }

    useEffect(() => {
        const timeout = setTimeout(async () => {
            if (text) {
                console.log(text);
                try {
                    const response1 = await fetch(`https://www.omdbapi.com/?t=${text}&type=movie&apikey=452c13f3`);
                    const data1 = await response1.json();
                    sm = data1.Title;
                    setMovie(sm);
                    setMMetaData(data1);
                    console.log(sm);
                } catch (error) {
                    console.log("Error encountered: ", error);
                }

                try {
                    const response2 = await fetch(`https://www.omdbapi.com/?t=${text}&type=series&apikey=452c13f3`);
                    const data2 = await response2.json();
                    ss = data2.Title;
                    setSeries(ss);
                    setSMetaData(data2);
                    console.log(ss);
                } catch (error) {
                    console.log("Error encountered: ", error);
                }

                try {
                    const response3 = await fetch(`https://www.omdbapi.com/?t=${text}&type=episode&apikey=452c13f3`);
                    const data3 = await response3.json();
                    se = data3.Title;
                    console.log(se);
                    setEMetaData(data3);
                    setEpisode(se);
                } catch (error) {
                    console.log("Error encountered: ", error);
                }
            } else {
                setMovie('');
                setSeries('');
                setEpisode('');
                setMMetaData('');
                setSMetaData('');
                setEMetaData('');
            }
        }, 1500);

        return () => {
            clearTimeout(timeout);
        };
    }, [text]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <div id="nav">
                <div id="logo" style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <div id="navlogo" style={{ 'cursor': 'pointer' }} onClick={() => {
                        if (sendData) {
                            sendData(<Moviesection />);
                        } else {
                            navigate('/');
                        }
                    }}>Movie App</div>
                </div>
                <form id="search-bar" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        placeholder="Search for a movie"
                        onChange={(e) => setText(e.target.value)}
                        onFocus={() => { document.getElementById('history-suggest').style.display = 'block'; }}
                        onBlur={() => { document.getElementById('history-suggest').style.display = 'none'; }}
                    />
                    <div id="history-suggest">
                        {movie && (
                            <div
                                id="movie"
                                onTouchStart={() => {
                                    setCookie("fulldata", JSON.stringify(mmetadata), 1);
                                    navigate('/movie');
                                }}
                                onMouseDown={() => {
                                    setCookie("fulldata", JSON.stringify(mmetadata), 1);
                                    navigate('/movie');
                                }}
                            >
                                <i className="fi fi-br-search"></i>{movie}
                            </div>
                        )}
                        {series && (
                            <div
                                id="series"
                                onTouchStart={() => {
                                    setCookie("fulldata", JSON.stringify(smetadata), 1);
                                    navigate('/movie');
                                }}
                                onMouseDown={() => {
                                    setCookie("fulldata", JSON.stringify(smetadata), 1);
                                    navigate('/movie');
                                }}
                            >
                                <i className="fi fi-br-search"></i>{series}
                            </div>
                        )}
                        {episode && (
                            <div
                                id="episode"
                                onTouchStart={() => {
                                    setCookie("fulldata", JSON.stringify(emetadata), 1);
                                    navigate('/movie');
                                }}
                                onMouseDown={() => {
                                    setCookie("fulldata", JSON.stringify(emetadata), 1);
                                    navigate('/movie');
                                }}
                            >
                                <i className="fi fi-br-search"></i>{episode}
                            </div>
                        )}
                    </div>
                </form>
                {data ? (
                    <div id="user-icon" onClick={() => { if (sendData) { sendData(<Profile />); } }}>Profile&nbsp;</div>
                ) : (
                    <div id="user-icon" onClick={() => { if (sendData) { sendData(<Signup />); } }}>Register/Login</div>
                )}
            </div>
        </React.Fragment>
    );
}

export default TopNav;
