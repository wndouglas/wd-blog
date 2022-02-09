import React from "react"
import { Line } from 'react-chartjs-2';
import { CreateDataFromArrays } from '../../../../../functions/createDataFromArrays'

const cev_volatility_data = require('./cev_black_vols.json')

const strikes = cev_volatility_data.strikes.map(x => x*100)
const p0_impliedVolCurve = CreateDataFromArrays(strikes, cev_volatility_data.p[0].map(x => x*100))
const p1_impliedVolCurve = CreateDataFromArrays(strikes, cev_volatility_data.p[1].map(x => x*100))
const p2_impliedVolCurve = CreateDataFromArrays(strikes, cev_volatility_data.p[2].map(x => x*100))
const p3_impliedVolCurve = CreateDataFromArrays(strikes, cev_volatility_data.p[3].map(x => x*100))

const cevImpliedBlackVolCurvePlot = {
    datasets: [
        {
            label: 'p = 0.2',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(44, 130, 201, 0.4)',
            borderColor: 'rgba(44, 130, 201, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(44, 130, 201, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(44, 130, 201, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            data: p0_impliedVolCurve
        },
        {
            label: 'p = 0.4',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(35, 203, 167, 0.4)',
            borderColor: 'rgba(35, 203, 167, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(35, 203, 167, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(35, 203, 167, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            data: p1_impliedVolCurve
        },
        {
            label: 'p = 0.6',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgb(159,57,43)',
            borderColor: 'rgb(159,57,43)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(159,57,43)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(159,57,43)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            data: p2_impliedVolCurve
        },
        {
            label: 'p = 0.8',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(223,111,1, 0.4)',
            borderColor: 'rgba(223,111,1, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(223,111,1, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(223,111,1, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            data: p3_impliedVolCurve
        },
    ]
}

export const CEVBlackVolCurve = ({ tableNumber, tableCaption }) => (
    <Line data={cevImpliedBlackVolCurvePlot} options = {{
        title: {
            display: true,
            text: 'CEV Implied Black Volatilities',
        },
        scales: {
            yAxes: [{
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'Implied vol (%)',
                },
            }],
            xAxes: [{
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'Moneyness (%)'
                },
                ticks: {
                    precision: 0,
                },
            }],
        },
    }     
    }/>
)