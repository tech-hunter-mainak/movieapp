import React from 'react'
import "../css/profile.css"
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate()

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

    return (
        <React.Fragment>
            {data ? <div class="profile-container" style={{'position': 'fixed', 'top': '60%', 'left': '50%', 'transform':'translate(-50%, -59%)', 'marginLeft':'80px'}}>
                <h1>User Profile</h1>
                <div class="profile-item">
                    <label for="username">Username:</label>
                    <span id="username">{data.usrname}</span>
                </div>
                <div class="profile-item">
                    <label for="email">Email:</label>
                    <span id="email">{data.u_mail}</span>
                </div>
                <div class="profile-item">
                    <label for="full-name">Full Name:</label>
                    <span id="full-name">{data.u_fname} {data.u_lname}</span>
                </div>
                <div class="profile-item">
                    <label for="e-wallet-id">E-Wallet ID:</label>
                    <span id="e-wallet-id">{data.wallet_id}</span>
                </div>
                <button class="logout-button" onClick={()=>{setCookie('userdetails','',-1); window.location.reload()
                }}>Logout</button>
            </div> : ''}
        </React.Fragment>
    )
}

export default Profile