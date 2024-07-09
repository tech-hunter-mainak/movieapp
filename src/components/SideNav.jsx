import React from 'react'

function SideNav() {
  return (
    <React.Fragment>
        <div id="sidenav">
            <div id="logo" style="display: flex; align-items: center;">
                <div id="sidenavlogo" style="cursor: pointer;" onclick="location.href = '#'"></div>
            </div>
            <div id="sidenav-links">
                <div id="sidenavlink1">
                    <div id="home-logo"><i class="fi fi-rr-home"></i></div>
                    <div id="home-name">Home</div>
                </div>
                <div id="sidenavlink2">
                    <div id="bot-logo"><i class="fi fi-rr-chatbot-speech-bubble"></i></div>
                    MovieBOT
                </div>
                <div id="sidenavlink3">
                    <div id="wallet-logo"><i class="fi fi-rr-wallet"></i></div>
                    e-Wallet
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default SideNav