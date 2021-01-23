import React from "react"
import { Line } from 'react-chartjs-2';
import { CreateDataFromArrays } from '../../../../../functions/createDataFromArrays'

const data = {
    maturity: [1, 2, 3, 5, 7, 10, 12, 15, 20, 25],
    swap_rate: [0.042, 0.043, 0.047, 0.054, 0.057, 0.06, 0.061, 0.059, 0.056, 0.0555]
}

const yield_data = require('./data_out.json')

const linearYield_yieldCurve = CreateDataFromArrays(yield_data.maturities, yield_data.linear_yields.yield_grid.map(x => x*100))
const linearYield_forwardCurve = CreateDataFromArrays(yield_data.maturities, yield_data.linear_yields.forward_grid.map(x => x*100))
const flatForward_YieldCurve = CreateDataFromArrays(yield_data.maturities, yield_data.flat_forwards.yield_grid.map(x => x*100))
const flatForward_forwardCurve = CreateDataFromArrays(yield_data.maturities, yield_data.flat_forwards.forward_grid.map(x => x*100))

function convert_to_percentage(value) {
    value = value*100
    return value.toFixed(2) + "%"
}

const linearYieldCurvePlot = {
    datasets: [
        {
            label: 'Yield curve',
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
            data: linearYield_yieldCurve
        },
        {
            label: 'Forward curve',
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
            data: linearYield_forwardCurve
        }
    ]
}

const flatForwardCurvePlot = {
    datasets: [
        {
            label: 'Yield curve',
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
            data: flatForward_YieldCurve
        },
        {
            label: 'Forward curve',
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
            data: flatForward_forwardCurve
        }
    ]
}
    
export const LinearYieldCurve = () => (
    <Line data={linearYieldCurvePlot} options = {{
        title: {
            display: true,
            text: 'Linear Yield Interpolation',
        },
        scales: {
            yAxes: [{
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'Yield (%)',
                },
            }],
            xAxes: [{
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'T'
                },
                ticks: {
                    precision: 0,
                },
            }],
        },
    }     
    }/>
)

export const FlatForwardCurve = ({ tableNumber, tableCaption }) => (
    <Line data={flatForwardCurvePlot} options = {{
        title: {
            display: true,
            text: 'Flat Forward Interpolation',
        },
        scales: {
            yAxes: [{
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'Yield (%)',
                },
            }],
            xAxes: [{
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'T'
                },
                ticks: {
                    precision: 0,
                },
            }],
        },
    }     
    }/>
)

export const BenchmarkTable = ({ tableNumber, tableCaption }) => (
    <table style={{ width: "50%", marginLeft: "auto", marginRight: "auto", fontSize: "1rem"}}>
        <caption style={{fontSize: "0.75rem", textAlign: "center"}}>
            <span style={{color: "black", fontWeight: "bold"}}>Table {tableNumber}:</span> {tableCaption}
        </caption>
        <tbody>
            <tr key="header">
                <th style={{ textAlign: "center"}}>Maturity (years)</th>
                <th style={{ textAlign: "center"}}>Swap par rate</th>
            </tr>
            {data.maturity.map((element, index) => (
                <tr style={{height: "0.5rem"}} key={index}>
                    <td style={{ textAlign: "center", height: "0.5rem"}}>{element}</td>
                    <td style={{ textAlign: "center", height: "0.5rem"}}>{convert_to_percentage(data.swap_rate[index])}</td>
                </tr>
            ))}
        </tbody>
    </table>
)