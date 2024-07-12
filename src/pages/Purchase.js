import React, { useEffect, useState } from 'react';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import { useNavigate } from 'react-router-dom';

function Purchase() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentGateway, setPaymentGateway] = useState('');
    const [error, setError] = useState('');
    const [movie, setMovie] = useState('');
    const [mvdetails, setMvdetails] = useState({});
    const [searchResult, setSearchResult] = useState('');
    const navigate = useNavigate();

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

    var details = JSON.parse(getCookie('fulldata'))

    useEffect(() => {
        const timeout = setTimeout(async () => {
            if (movie) {
                var price = (Number(mvdetails.imdbRating) >= 7) ? '699' : (Number(mvdetails.imdbRating) >= 5) ? '469' : '389'
                try {
                    const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=452c13f3`);
                    const data = await response.json();
                    setMvdetails(data);
                    setSearchResult(data.Title || 'Movie not found');
                } catch (error) {
                    console.error("Error encountered: ", error);
                }
            } else {
                setSearchResult('');
            }
        }, 1500);

        return () => {
            clearTimeout(timeout);
        };
    }, [movie]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        var datetime = new Date()
        var tr_hash = String(datetime.getDate()) + String(datetime.getMonth()) + String(datetime.getFullYear()) + String(datetime.getDay()) + String(datetime.getHours()) + String(datetime.getMinutes()) + String(datetime.getSeconds()) + String(datetime.getMilliseconds())
        console.log(tr_hash)
        var amount = '0'
        var uname = '', upass = ''
        if (getCookie('userdetails')){
            var userdata = JSON.parse(getCookie('userdetails'))
            uname = userdata.usrname
            upass = userdata.usrpass
        }
        if (getCookie('fulldata')){
            var userdata = JSON.parse(getCookie('fulldata'))
            amount = (Number(mvdetails.imdbRating || details.imdbRating) >= 7) ? '699' : (Number(mvdetails.imdbRating || details.imdbRating) >= 5) ? '469' : '389'
        }

        
        const form = event.target;
        const payload = {
            username: uname,
            userpass: upass,
            moviename: form.moviename ? form.moviename.value : '0',
            pamount: (paymentMethod == 'movie') ? amount : '0',
            wamount: form.wamount ? form.wamount.value : '0',
            trpin: form.trpin ? form.trpin.value : '0',
            trhash: tr_hash,
            payfor: paymentMethod,
            payusing: paymentGateway ? paymentGateway : 'defaultpay'
        };

        try {
            const response = await fetch('http://localhost:3001/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Purchase failed');
            }

            const data = await response.json();
            console.log(data.message);
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    const Moviebuysection = () => (
        <div id="card-reg-details">
            <div id="card-header-details">Movie Details</div>
            <div id="usrname">
                <input
                    type="search"
                    name="moviename"
                    value={movie || details.Title}
                    autoFocus
                    placeholder="Search for a movie"
                    onChange={(e) => setMovie(e.target.value)}
                    required
                />
                {(searchResult || details) &&
                    <p>
                        Movie Name: {mvdetails.Title || details.Title}<br />
                        imdbID: {mvdetails.imdbID || details.imdbID}<br />
                        <img src={mvdetails.Poster || details.Poster} alt="Movie Poster" /><br />
                        Price: {(Number(mvdetails.imdbRating || details.imdbRating) >= 7) ? '699' : (Number(mvdetails.imdbRating || details.imdbRating) >= 5) ? '469' : '389'}
                    </p>
                }
            </div>
            <div id="payment-type">
                <select value={paymentGateway} onChange={(e) => setPaymentGateway(e.target.value)} required>
                    <option value="" disabled selected>Select Payment Type</option>
                    <option value="walletpay">Pay using wallet</option>
                    <option value="defaultpay">Pay using Card or Bank</option>
                </select>
            </div>
            <div id="usrname">
                <input name='trpin' type="text" placeholder="Enter your transaction pin" required />
            </div>
        </div>
    );

    const Walletsection = () => (
        <div id="card-reg-details">
            <div id="card-header-details">Wallet Details</div>
            <div id='walletid'>Wallet ID: 13212321</div>
            <div id="usrname">
                <input name='wamount' type="text" placeholder="Enter the amount" required />
            </div>
            <div id="usrname">
                <input name='trpin' type="text" placeholder="Enter your transaction pin" required />
            </div>
        </div>
    );

    const RenderSignup = () => (
        <section id='signup'>
            <form id="usersignup" onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div id="payment-method" style={{ "marginTop": "20px" }}>Before continuing, you need to enter a payment type (i.e., Add money to wallet or purchasing a movie). Please choose a suitable payment method.</div>
                <div id="payment-type">
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                        <option value="" disabled selected>Select Payment Type</option>
                        <option value="wallet">Add money to wallet</option>
                        <option value="movie">Purchase a movie</option>
                    </select>
                </div>
                {paymentMethod === 'wallet' && <Walletsection />}
                {paymentMethod === 'movie' && <Moviebuysection />}
                <button type="submit" id="register-btn">
                    {paymentMethod === 'wallet' && <>Add money</>}
                    {paymentMethod === 'movie' && <>Buy Movie</>}
                </button>
            </form>
        </section>
    );

    return (
        <React.Fragment>
            <TopNav />
            <SideNav />
            <RenderSignup />
        </React.Fragment>
    );
}

export default Purchase;
