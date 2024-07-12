import React, { useEffect, useState } from 'react'
import Offerbanner from './Offerbanner';
import p1 from "../imgs/poster2.jpg"
import p2 from "../imgs/poster3.jpg"
import p3 from "../imgs/poster4.jpg"
import p4 from "../imgs/poster5.jpg"
import p5 from "../imgs/poster6.jpg"
import p6 from "../imgs/poster7.jpg"
import p7 from "../imgs/poster8.jpg"

function Moviesection() {
    const [movies, setMovies] = useState([])

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

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }



    return (
        <div id="movies-section">
            <Offerbanner />
            {/* <div id="locallang-mv-suggestion">
                <div id="mv-cards-header">Demo Title</div>
                <div id="mv-cards-all">
                    <div id="mv-slide-icons">
                        <i
                            className="fi fi-sr-caret-square-left"
                            onClick={() => {
                                document.getElementById("mv-cards").scrollBy({
                                    top: 0,
                                    left: -200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                        <i
                            className="fi fi-sr-caret-circle-right"
                            onClick={() => {
                                document.getElementById("mv-cards").scrollBy({
                                    top: 0,
                                    left: 200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                    </div>
                    <div id="mv-cards">
                        <div id="mv-card1">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card2">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card3">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card4">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card5">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card6">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card7">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div id="preff1-suggestion">
                <div id="mv-cards-header">Demo Title</div>
                <div id="mv-cards-all">
                    <div id="mv-slide-icons">
                        <i
                            className="fi fi-sr-caret-square-left"
                            onClick={() => {
                                document.getElementById("mv-cards").scrollBy(
                                    {
                                        top: 0,
                                        left: -200,
                                        behavior: "smooth",
                                    },
                                    this
                                );
                            }}
                        ></i>
                        <i
                            className="fi fi-sr-caret-circle-right"
                            onClick={() => {
                                document.getElementById("mv-cards").scrollBy({
                                    top: 0,
                                    left: 200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                    </div>
                    <div id="mv-cards">
                        <div id="mv-card1">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card2">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card3">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card4">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card5">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card6">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card7">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="preff2-suggestion">
                <div id="mv-cards-header">Demo Title</div>
                <div id="mv-cards-all">
                    <div id="mv-slide-icons">
                        <i
                            className="fi fi-sr-caret-square-left"
                            onClick={() => {
                                document.getElementById("mv-cards").scrollBy({
                                    top: 0,
                                    left: -200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                        <i
                            className="fi fi-sr-caret-circle-right"
                            onClick={() => {
                                document.getElementById("mv-cards").scrollBy({
                                    top: 0,
                                    left: 200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                    </div>
                    <div id="mv-cards">
                        <div id="mv-card1">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card2">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card3">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card4">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card5">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card6">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card7">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="preff3-suggestion">
                <div id="mv-cards-header">Demo Title</div>
                <div id="mv-cards-all">
                    <div id="mv-slide-icons">
                        <i
                            className="fi fi-sr-caret-square-left"
                            onClick={() => {
                                document.getElementById("mv-cards").scrollBy({
                                    top: 0,
                                    left: -200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                        <i
                            className="fi fi-sr-caret-circle-right"
                            onClick={() => {
                                document.getElementById("mv-cards").scrollBy({
                                    top: 0,
                                    left: 200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                    </div>
                    <div id="mv-cards">
                        <div id="mv-card1">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card2">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card3">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card4">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card5">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card6">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                        <div id="mv-card7">
                            <div id="mv-blur-cover">
                                <div id="mv-cover-name">Movie</div>
                                <div id="mv-price-short">₹ 849/-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="en-mv-suggestion">
                <div id="mv-cards-header">
                    <div id="mv-sg-type">Suggested Movies</div>
                    <div id="mv-sg-text">We would like to suggest you these movies. You can also purchase them.</div>
                </div>
                <div id="mv-cards-all">
                    <div id="mv-slide-icons">
                        <i
                            className="fi fi-sr-caret-square-left"
                            onClick={() => {
                                document.getElementById("mv-cards", this).scrollBy({
                                    top: 0,
                                    left: -200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                        <i
                            className="fi fi-sr-caret-circle-right"
                            onClick={() => {
                                document.getElementById("mv-cards", this).scrollBy({
                                    top: 0,
                                    left: 200,
                                    behavior: "smooth",
                                });
                            }}
                        ></i>
                    </div>
                    <div id="mv-cards">
                        <div id="mv-card1" style={{ "backgroundImage": "url('" + p1 + "')" }}>
                        </div>
                        <div id="mv-card2" style={{ "backgroundImage": "url('" + p2 + "')" }}>
                        </div>
                        <div id="mv-card3" style={{ "backgroundImage": "url('" + p3 + "')" }}>
                        </div>
                        <div id="mv-card4" style={{ "backgroundImage": "url('" + p4 + "')" }}>
                        </div>
                        <div id="mv-card5" style={{ "backgroundImage": "url('" + p5 + "')" }}>
                        </div>
                        <div id="mv-card6" style={{ "backgroundImage": "url('" + p6 + "')" }}>
                        </div>
                        <div id="mv-card7" style={{ "backgroundImage": "url('" + p7 + "')" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Moviesection