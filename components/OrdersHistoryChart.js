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
        });
        const timerID = setInterval(() => {
            fetchData().then((chartData) => {
                updateChart(chartData);
            });
        }, 1000 * 90);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const fetchData = async () => {
        let data = { symbol: [], type: [], avg: [], amount: [], qty: [], date: [] , color: []};
        // let result = await callAPI("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=1m");
        const Alpaca = require('@alpacahq/alpaca-trade-api')
        const alpaca = new Alpaca({
            keyId: 'PKP8LKQAS4FBT4VA0N5L',
            secretKey: 'v8nUjLr4dK3aZubCwr2f6eApLvZzRS6wGEDqcxgE',
            paper: true,
        })
        await alpaca.getOrders({
            status: 'all',
            direction: 'desc'
        }).then((orders) => {
            var isOdd = true
            for (const item of orders){
                data.symbol.push(item.symbol)
                data.type.push(item.side)
                data.avg.push(parseFloat(item.filled_avg_price).toFixed(3))
                data.amount.push(parseFloat(item.filled_qty * item.filled_avg_price).toFixed(3))
                data.qty.push(parseFloat(item.filled_qty).toFixed(3))
                data.date.push(item.updated_at.substring(0, 16))
                if (isOdd){
                    data.color.push("white")
                    isOdd = false
                }
                else{
                    data.color.push("#ffe46c")
                    isOdd = true
                }
            }
        })
        return data;
    };

    const initChart = (data) => {
        var values = [
            data.symbol,
            data.type,
            data.qty,
            data.avg,
            data.amount,
            data.date
        ]

        var headerColor = "#fcd72b";
        var width = 950
        if (window.innerHeight / window.innerWidth >  1.523) width = window.innerWidth * 0.95

        let layout = {
            autosize: true,
            width: width,
            height: "100%",
            margin: {
                l: 20,
                r: 20,
                t: 50,
                pad: 3,
            },
            showlegend: false,

        };

        var data = [{
            type: 'table',
            header: {
                values: [["<b>Symbol</b>"], ["<b>Type</b>"],
                ["<b>Qty</b>"], ["<b>Average Cost</b>"], ["<b>Amount</b>"], ["<b>Date</b>"]],
                align: ["center", "center"],
                height: 30,
                line: { width: 1, color: 'black' },
                fill: { color: headerColor },
                font: { family: "Arial", size: 14, color: "black" }
            },
            cells: {
                values: values,
                align: ["center", "center"],
                height: 25,
                line: { color: "white", width: 1 },
                fill: {
                    color: [data.color]
                },
                font: { family: "Arial", size: 12, color: ["black"] }
            }
        }]

        Plotly.newPlot('chartOrders', data, layout, { responsive: true });
    };

    const updateChart = (data) => {
        // if (document.querySelector("#last-price") !== null) {
        //     document.querySelector("#last-price").classList.remove("animate__fadeIn");
        //     let trace_price = {
        //         x: [data.index.map((t) => new Date(t))],
        //         y: [data.price],
        //     };


        //     Plotly.update("chartOrders", trace_price, {}, 0);
        //     document.querySelector("#last-price").classList.add("animate__fadeIn");
        // }
    };

    return (
        <>
            <div className=''>
                {isLoading ? (
                    <h6 className='value animate__animated animate__flash animate__slow text-center text-primary'> loading ...</h6>
                ) : (
                    <>

                        <div id='chartOrders'></div>
                    </>
                )}
            </div>
        </>
    );
}

export default PortfolioChart;