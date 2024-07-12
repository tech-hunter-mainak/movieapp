import React, { useState } from 'react';
import "../css/signup.css";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [error, setError] = useState('');
    const [isSignup, setIsSignup] = useState(true);
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

    if(getCookie('userdetails')){
        navigate('/transactions')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        var datetime = new Date()
        var walletID = String(datetime.getDate()) + String(datetime.getMonth()) + String(datetime.getFullYear()) + String(datetime.getDay()) + String(datetime.getHours()) + String(datetime.getMinutes()) + String(datetime.getSeconds()) + String(datetime.getMilliseconds())

        const form = event.target;
        const payload = {
            username: form.username.value,
            password: form.userpassword.value,
            userfname: form.userfname.value,
            userlname: form.userlname.value,
            email: form.useremail.value,
            bankusername: form.baccname ? form.baccname.value : '0',
            bankifsc: form.bifsc ? form.bifsc.value : '0',
            bankaccnum: form.baccnum ? form.baccnum.value : '0',
            cardusername: form.cname ? form.cname.value : '0',
            cardnumber: form.cnum ? form.cnum.value : '0',
            cardexp: form.cexp ? form.cexp.value : '0',
            cardcvv: form.ccvv ? form.ccvv.value : '0',
            trpin: form.trpin ? form.trpin.value : '0',
            paytype: paymentMethod,
            wallet: walletID
        };

        try {
            const response = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('User not found');
            }

            const data = await response.json();
            console.log(data.message)
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const payload = {
            lmail: form.lmail.value,
            lpass: form.lpass.value
        };

        try {
            const response = await fetch('http://localhost:3001/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('User not found');
            }

            const data = await response.json();
            console.log(data);
            setCookie('userdetails', JSON.stringify(data), 1)
            window.location.href = ''
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    const renderSignup = () => (
        <section id='signup'>
            <form id="usersignup" onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div id="signin-locate">Already have an account? <span onClick={() => setIsSignup(false)}>SignIn</span></div>
                <div id="signup-details">
                    <div id="signup-header">Sign Up Details</div>
                    <div id="usr-fullname">
                        <div id="usrfname"><input name='userfname' type="text" placeholder="First Name" required /></div>
                        <div id="usrlname"><input name='userlname' type="text" placeholder="Last Name" required /></div>
                    </div>
                    <div id="usrname"><input name='username' type="text" placeholder="Username" required /></div>
                    <div id="usrmail"><input name='useremail' type="email" placeholder="Email" required /></div>
                    <div id="usrpass"><input name='userpassword' type="password" placeholder="Password" required /></div>
                </div>
                <div id="payment-method">Before continuing, you need to enter a payment method. Please choose a suitable payment method.</div>
                <div id="payment-type">
                    <select onChange={(e) => setPaymentMethod(e.target.value)} required>
                        <option value="" disabled selected>Select Payment Method</option>
                        <option value="card">Card</option>
                        <option value="bank">Bank</option>
                    </select>
                </div>
                {paymentMethod === 'card' && <Cardsection />}
                {paymentMethod === 'bank' && <Banksection />}
                <button type="submit" id="register-btn">Save & Register</button>
            </form>
        </section>
    );

    const renderLogin = () => (
        <section id='signup'>
            <form id="usersignup" onSubmit={handleLogin}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div id="signin-locate">Don't have an account? <span onClick={() => setIsSignup(true)}>SignUp</span></div>
                <div id="signup-details">
                    <div id="signup-header">Login Details</div>
                    <div id="usrname"><input name='lmail' type="email" placeholder="Email" required /></div>
                    <div id="usrpass"><input name='lpass' type="password" placeholder="Password" required /></div>
                </div>
                <button type="submit" id="register-btn">Login</button>
            </form>
        </section>
    );

    const Banksection = () => (
        <div id="card-reg-details">
            <div id="card-header-details">Bank Details</div>
            <div id="usrname"><input name='baccnum' type="text" placeholder="Bank's Account Number" required /></div>
            <div id="usrname"><input name='baccname' type="text" placeholder="Account Holder's Full Name" required /></div>
            <div id="usrname"><input name='bifsc' type="text" placeholder="IFS Code" required /></div>
            <div id="usrname"><input name='trpin' type="text" placeholder="Create a transaction pin" required /></div>
        </div>
    );

    const Cardsection = () => (
        <div id="card-reg-details">
            <div id="card-header-details">Card Details</div>
            <div id="usrname"><input name='cnum' type="text" placeholder="Card Number" required /></div>
            <div id="usrname"><input name='cname' type="text" placeholder="Card Holder's Full Name" required /></div>
            <div id="usr-fullname">
                <div id="usrfname"><input name='cexp' type="text" placeholder="MM/YY" required /></div>
                <div id="usrlname"><input name='ccvv' type="text" placeholder="CVV/Security Code on Card's Back" required /></div>
            </div>
            <div id="usrname"><input name='trpin' type="text" placeholder="Create a transaction pin" required /></div>
        </div>
    );

    return (
        <React.Fragment>
            {isSignup ? renderSignup() : renderLogin()}
        </React.Fragment>
    );
}

export default Signup;
