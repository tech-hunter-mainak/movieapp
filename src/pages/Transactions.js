import React, { useEffect } from 'react';
import "../css/transaction.css";
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';

function Transactions() {
    useEffect(() => {
        const setTransactionSectionHeight = () => {
            const height = window.innerHeight - 70;
            const transactionSection = document.getElementById('transaction-section');
            transactionSection.style.maxHeight = `${height}px`;
            transactionSection.style.minHeight = `${height}px`;
            transactionSection.style.height = `${height}px`;
        };

        setTransactionSectionHeight();
        window.addEventListener('resize', setTransactionSectionHeight);

        const loadGoogleCharts = () => {
            const script = document.createElement('script');
            script.src = "https://www.gstatic.com/charts/loader.js";
            script.onload = () => {
                window.google.charts.load('current', { 'packages': ['corechart'] });
                window.google.charts.setOnLoadCallback(drawChart);
            };
            document.body.appendChild(script);
        };

        const drawChart = () => {
            const data = new window.google.visualization.DataTable();
            data.addColumn('string', 'Money Added');
            data.addColumn('number', 'Money Spend');
            data.addRows([
                ['Spend', 30],
                ['Added', 70]
            ]);

            const options = {
                title: 'Money expanses analysis',
                sliceVisibilityThreshold: 0.2,
            };

            const chart = new window.google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        };

        loadGoogleCharts();

        return () => {
            window.removeEventListener('resize', setTransactionSectionHeight);
        };
    }, []);

    return (
        <React.Fragment>
            <TopNav />
            <SideNav />
            <section id="transaction-section">
                <div id="trside1">
                    <div id="tr-top">
                        <div id="debit-card">
                            <div id="card-head">
                                <div id="head-logo1">Logo</div>
                                <div id="head-logo2">SBI</div>
                            </div>
                            <div id="card-body">
                                <div id="laser-logo"></div>
                                <div id="card-number">0000-0000-0000-0000</div>
                            </div>
                            <div id="card-footer">
                                <div id="card-valid">MM/YY</div>
                                <div id="card-footer-details">
                                    <div id="card-details-1">Card Holder name</div>
                                    <div id="card-details-2">
                                        <div id="card-company">RuPay</div>
                                        <div id="card-type">DEBIT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="add-more-payment"></div>
                    </div>
                    <div id="tr-history">
                        <div id="tr-history-text">Transaction History</div>
                        <div id="tr-details-cards">
                            <div id="tr-details-card">
                                <div id="tr-amount">+Rs. 230/-</div>
                                <div id="tr-detail">
                                    <div id="tr-hash">Transaction ID: fydt3445tfctr67</div>
                                    <div id="tr-date">28-02-2024</div>
                                </div>
                            </div>
                            <div id="tr-details-card"></div>
                            <div id="tr-details-card"></div>
                            <div id="tr-details-card"></div>
                            <div id="tr-details-card"></div>
                            <div id="tr-details-card"></div>
                        </div>
                    </div>
                </div>
                <div id="trside2">
                    <div id="chart_div"></div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Transactions;
