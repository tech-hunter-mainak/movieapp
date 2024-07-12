import React from 'react'

function Offerbanner() {
    var date = new Date()
    var msg = '', percent = 0
    if (date.getMonth == 1) {
        if (date.getDate == 1) {

        }
    }

    return (
        <React.Fragment><section class="offers-section">
            <h2>Recent Offers & Discounts</h2>
            <div class="offers-container">
                <div class="offer-item">
                    <h3>Summer Sale!</h3>
                    <p>Get up to 50% off on selected items. Hurry, offer ends soon!</p>
                </div>
                <div class="offer-item">
                    <h3>Flash Sale Today!</h3>
                    <p>Exclusive discounts for today only. Don't miss out!</p>
                </div>
            </div>
        </section></React.Fragment>
    )
}

export default Offerbanner