import React, { useState, useEffect } from "react";
import callAPI from "../utils/cryptoData";

const PortfolioChart = () => {
    var Plotly = require('plotly.js')

    const [isLoading, setIsLoading] = useState(true);
    const [latestPrice, setLatestPrice] = useState(0);
    useEffect(() => {

        fetchData().then((chartData) => {
            setIsLoading(false);
            initChart(chartData);
            setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
        });
        const timerID = setInterval(() => {
            fetchData().then((chartData) => {
                updateChart(chartData);
                setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
            });
        }, 1000 * 90);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const fetchData = async () => {
        let data = { index: [], price: [], volumes: [] };
        // let result = await callAPI("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=1m");
        const Alpaca = require('@alpacahq/alpaca-trade-api')
        const alpaca = new Alpaca({
            keyId: 'PKP8LKQAS4FBT4VA0N5L',
            secretKey: 'v8nUjLr4dK3aZubCwr2f6eApLvZzRS6wGEDqcxgE',
            paper: true,
        })
        await alpaca.getPortfolioHistory({
            period: 'all',
            timeframe: '1D',
        }).then((account) => {
            for (const item of account.timestamp) {
                data.index.push(item * 1000);
            }
            for (const item of account.equity) {
                data.price.push(item);
            }
        })
        return data;
    };

    const initChart = (data) => {
        let trace_price = {
            name: "Price ($)",
            x: data.index.map((t) => new Date(t)),
            y: data.price,
            xaxis: "x",
            yaxis: "y1",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#fcd72b", size: 5 },
        };

        var width = 950
        if (window.innerHeight / window.innerWidth >  1.523) width = window.innerWidth * 0.9

        let layout = {
            autosize: true,
            width: width,
            height: "100%",
            margin: {
                l: 50,
                r: 20,
                t: 50,
                pad: 3,
            },
            showlegend: false,
            xaxis: {
                domain: [1, 1],
                anchor: "y2",
            },
            yaxis: {
                domain: [0.1, 1],
                anchor: "x",
            },
            yaxis2: {
                showticklabels: false,
                domain: [0, 0.1],
                anchor: "x",
            },
            grid: {
                roworder: "bottom to top",
            },
        };
        let config = { responsive: true };
        let series = [trace_price];

        Plotly.newPlot("chartPortfolio", series, layout, config);
    };

    const updateChart = (data) => {
        if (document.querySelector("#last-price") !== null) {
            document.querySelector("#last-price").classList.remove("animate__fadeIn");
            let trace_price = {
                x: [data.index.map((t) => new Date(t))],
                y: [data.price],
            };


            Plotly.update("chartPortfolio", trace_price, {}, 0);
            document.querySelector("#last-price").classList.add("animate__fadeIn");
        }
    };

    return (
        <>
            <div className=''>
                {isLoading ? (
                    <h6 className='value animate__animated animate__flash animate__slow text-center text-primary'> loading ...</h6>
                ) : (
                    <>
                        <h3 id='last-price' className='text-center text-primary animate__animated'>Currrent equity is ${latestPrice}
                        </h3>
                        <div id='chartPortfolio'></div>
                    </>
                )}
            </div>
        </>
    );
}

export default PortfolioChart;