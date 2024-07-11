import React from 'react'

function Moviesection() {
    return (
        <div id="movies-section">
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
        </div>
    );
}

export default Moviesection