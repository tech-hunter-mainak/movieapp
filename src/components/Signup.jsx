import React, { useState } from 'react'
import "../css/signup.css"
import { Link } from 'react-router-dom'

function Signup() {

    const Banksection = () => {
        return (
            <div id="card-reg-details">
                <div id="card-header-details">Card Details</div>
                <div id="usrname"><input type="text" placeholder="Card Number" required /></div>
                <div id="usrname"><input type="text" placeholder="Card Holder's Full Name" required /></div>
                <div id="usr-fullname">
                    <div id="usrfname"><input type="text" placeholder="MM/YY" required /></div>
                    <div id="usrlname"><input type="number" placeholder="CVV/Security Code on Card's Back" required /></div>
                </div>
            </div>
        )
    }

    const Cardsection = () => {
        return (
            <div id="card-reg-details">
                <div id="card-header-details">Card Details</div>
                <div id="usrname"><input type="text" placeholder="Card Number" required /></div>
                <div id="usrname"><input type="text" placeholder="Card Holder's Full Name" required /></div>
                <div id="usr-fullname">
                    <div id="usrfname"><input type="text" placeholder="MM/YY" required /></div>
                    <div id="usrlname"><input type="number" placeholder="CVV/Security Code on Card's Back" required /></div>
                </div>
            </div>
        )
    }
    const [displaySection, setDisplaySection] = useState(<Cardsection />)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userfname, setUserfname] = useState('');
    const [userlname, setUserlname] = useState('');
    const [cardnumber, setCardnum] = useState('');
    const [cardusername, setCarduser] = useState('');
    const [cardcvv, setCardcvv] = useState('');
    const [cardexp, setCardexp] = useState('');
    const [paymenttype, setPaymenttype] = useState('');
    const [bankname, setBankname] = useState('');
    const [bankifsc, setBankifsc] = useState('');
    const [bankusername, setBankholdernname] = useState('');
    const [bankaccnum, setBankaccnum] = useState('');
    const [error, setError] = useState('');
    const [walletID, setWalletID] = useState('');

    var datetime = new Date();

    var wallet = String(datetime.getDate) + String(datetime.getDay) + String(datetime.getMonth) + String(datetime.getDate)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, email, userfname, userlname, bankname, bankusername, bankifsc, bankaccnum, cardusername, cardnumber, cardexp, cardcvv })
            });

            if (!response.ok) {
                throw new Error('User not found');
            }

            const data = await response.json();
            console.log(data.mv_ctr_name)
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <React.Fragment>
            <section id='signup'>
                <form id="usersignup">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div id="signin-locate">Already have an account? <Link to=''>SignIn</Link></div>
                    <div id="signup-details">
                        <div id="signup-header">Sign Up Details</div>
                        <div id="usr-fullname">
                            <div id="usrfname"><input type="text" placeholder="First Name" required onChange={(e) => setUserfname(e.target.value)} /></div>
                            <div id="usrlname"><input type="text" placeholder="Last Name" required onChange={(e) => setUserlname(e.target.value)} /></div>
                        </div>
                        <div id="usrname"><input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} /></div>
                        <div id="usrmail"><input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /></div>
                        <div id="usrpass"><input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} /></div>
                    </div>
                    <div id="payment-method">Before continue you need to enter a payment method. Please choose a suitable
                        payment method.</div>
                    <div id="payment-type">
                        <label for="paymenttype">Card&nbsp;<input type="radio" name="paymenttype" id="pay-type" value="card" required checked onChange={(e) => setPaymenttype(e.target.value)} /></label>
                        <label for="paymenttype">Bank&nbsp;<input type="radio" name="paymenttype" id="pay-type" value="bank" required onChange={(e) => setPaymenttype(e.target.value)} /></label>
                    </div>
                    {displaySection}
                    <button type="submit" id="register-btn">Save & Register</button>
                </form>
            </section>
        </React.Fragment>
    )
}

export default Signup