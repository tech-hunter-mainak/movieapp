import React, { useEffect, useState } from 'react'
import Moviesection from './Moviesection'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'

function TopNav({ sendData }) {
    const navigate = useNavigate()
    const [movie, setMovie] = useState('')
    const [series, setSeries] = useState('')
    const [episode, setEpisode] = useState('')
    const [mmetadata, setMMetaData] = useState('')
    const [smetadata, setSMetaData] = useState('')
    const [emetadata, setEMetaData] = useState('')
    var sm = '', se = '', ss = ''
    const [text, setText] = useState('')
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    useEffect(() => {
        const timeout = setTimeout(async () => {
            if (text) {
                console.log(text)
                try {
                    var response1 = await fetch('https://www.omdbapi.com/?t=' + text + '&type=movie&apikey=452c13f3')
                    var data1 = await response1.json()
                    sm = data1.Title
                    setMovie(sm)
                    setMMetaData(data1)
                    console.log(sm)
                } catch (error) {
                    console.log("Error encountere: ", error)
                }

                try {
                    var response2 = await fetch('https://www.omdbapi.com/?t=' + text + '&type=series&apikey=452c13f3')
                    var data2 = await response2.json()
                    ss = data2.Title
                    setSeries(ss)
                    setSMetaData(data2)
                    console.log(ss)
                } catch (error) {
                    console.log("Error encountere: ", error)
                }

                try {
                    var response3 = await fetch('https://www.omdbapi.com/?t=' + text + '&type=episode&apikey=452c13f3')
                    var data3 = await response3.json()
                    se = data3.Title
                    console.log(se)
                    setEMetaData(data3)
                    setEpisode(se)
                } catch (error) {
                    console.log("Error encountere: ", error)
                }
            }
            else {
                setMovie('')
                setSeries('')
                setEpisode('')
                setMMetaData('')
                setSMetaData('')
                setEMetaData('')
            }
        }, 1500);

        return () => {
            clearTimeout(timeout)
        }
    }, [text])

    return (
        <React.Fragment>
            <div id="nav">
                <div id="logo" style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <div id="navlogo" style={{ 'cursor': 'pointer' }} onClick={() => {
                        if (sendData) {
                            sendData(<Moviesection />)
                        }
                        else {
                            navigate('/')
                        }
                    }}>Movie App</div>
                </div>
                <form id="search-bar">
                    <input type="search" name="" id="" placeholder="Search for a movie" onChange={(e) => setText(e.target.value)}
                        onFocus={() => { document.getElementById('history-suggest').style.display = 'block' }}
                        onBlur={() => { document.getElementById('history-suggest').style.display = 'none' }} />
                    <div id="history-suggest">
                        {movie && (<div id="movie" onTouchStart={()=>{
                            setCookie("fulldata",JSON.stringify(mmetadata),1)
                            navigate('/movie')
                        }} onMouseDown={()=>{
                            setCookie("fulldata",JSON.stringify(mmetadata),1)
                            navigate('/movie')
                        }}><i className="fi fi-br-search"></i>{movie}</div>)}
                        {series && (<div id="episode" onTouchStart={()=>{
                            setCookie("fulldata",JSON.stringify(smetadata),1)
                            navigate('/movie')
                        }} onMouseDown={()=>{
                            setCookie("fulldata",JSON.stringify(smetadata),1)
                            navigate('/movie')
                        }}><i className="fi fi-br-search"></i>{series}</div>)}
                        {episode && (<div id="series" onTouchStart={()=>{
                            setCookie("fulldata",JSON.stringify(emetadata),1)
                            navigate('/movie')
                        }} onMouseDown={()=>{
                            setCookie("fulldata",JSON.stringify(emetadata),1)
                            navigate('/movie')
                        }}><i className="fi fi-br-search"></i>{episode}</div>)}
                    </div>
                </form>
                <div id="user-icon" onClick={() => { if (sendData) { sendData(<Signup />) } else { } }}>Sign In</div>
            </div>
        </React.Fragment>
    )
}

export default TopNav