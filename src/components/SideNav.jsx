import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Chatbot from './Chatbot'
import Home from '../pages/Home'
import Moviesection from './Moviesection'

function SideNav({ sendData }) {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <div id="sidenav">
                <div id="sidenav-links">
                    <div id="sidenavlink1" onClick={() => { navigate('/'); if (sendData) { sendData(<Moviesection />) } }}>
                        <div id="home-logo"><i className="fi fi-rr-home"></i></div>
                        <div id="home-name">Home</div>
                    </div>
                    <div id="sidenavlink2" onClick={() => { navigate('/'); if (sendData) { sendData(<Chatbot />) } }}>
                        <div id="bot-logo"><i className="fi fi-rr-chatbot-speech-bubble"></i></div>
                        MovieBOT
                    </div>
                    <div id="sidenavlink3" onClick={() => { navigate('/transactions') }}>
                        <div id="wallet-logo"><i className="fi fi-rr-wallet"></i></div>
                        e-Wallet
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideNav