/*
import React from "react"
import { Line } from 'react-chartjs-2';
import { BlackScholesCall, BlackScholesPut, BlackScholesStraddle } from '../../../functions/blackScholesFormulae'

const r = 0.05
const sigma = 0.5
const K = 100
const t = 0
const T = 1
const lowerVal = 0
const upperVal = 200

const BSCallOut = BlackScholesCall(r, sigma, K, t, T, lowerVal, upperVal)
const CallPayoffOut = BlackScholesCall(r, sigma, K, T, T, lowerVal, upperVal)
const BSPutOut = BlackScholesPut(r, sigma, K, t, T, lowerVal, upperVal)
const PutPayoffOut = BlackScholesPut(r, sigma, K, T, T, lowerVal, upperVal)
const BSStraddleOut = BlackScholesStraddle(r, sigma, K, t, T, lowerVal, upperVal)
const StraddlePayoffOut = BlackScholesStraddle(r, sigma, K, T, T, lowerVal, upperVal)

const callData = {
    labels: BSCallOut.S,
    datasets: [
      {
        label: 'Call price',
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
        pointRadius: 1,
        pointHitRadius: 10,
        data: BSCallOut.V
      },
      {
        label: 'Call payoff',
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
        pointRadius: 1,
        pointHitRadius: 10,
        data: CallPayoffOut.V
      }
    ]
};

const putData = {
labels: BSPutOut.S,
datasets: [
    {
    label: 'Put price',
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
    pointRadius: 1,
    pointHitRadius: 10,
    data: BSPutOut.V
    },
    {
    label: 'Put payoff',
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
    pointRadius: 1,
    pointHitRadius: 10,
    data: PutPayoffOut.V
    }
    ]
};

const straddleData = {
    labels: BSStraddleOut.S,
    datasets: [
        {
        label: 'Straddle price',
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
        pointRadius: 1,
        pointHitRadius: 10,
        data: BSStraddleOut.V
        },
        {
        label: 'Straddle payoff',
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
        pointRadius: 1,
        pointHitRadius: 10,
        data: StraddlePayoffOut.V
        }
    ]
};

export default () => (
    <>
    <Line data={callData} />
    <Line data={putData} />
    <Line data={straddleData} />
    </>
)
*/