import React from "react"
import { Line } from 'react-chartjs-2';
import { CreateDataFromArrays } from '../../../functions/createDataFromArrays'

const data = require("./data/data_out.json")

const europeanOptionPrice = CreateDataFromArrays(data.european_analytic_plot.stock_price, data.european_analytic_plot.option_price, 2)
const europeanOptionPayoff = CreateDataFromArrays(data.european_analytic_plot.stock_price, data.european_analytic_plot.payoff, 2)

const europeanOptionPricePlot = {
datasets: [
    {
    label: 'Option v',
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
    data: europeanOptionPrice
    },
    {
    label: 'Option payoff',
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
    data: europeanOptionPayoff
    }
    ]
};

export const EuropeanOptionPrice = () => (
  <Line data={europeanOptionPricePlot} options = {{
title: {
  display: true,
  text: 'European option price',
},
scales: {
  yAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'V',
    },
  }],
  xAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'S'
    },
    ticks: {
      precision: 0,
    },
  }],
}}     
}/>
)

const europeanOptionConvergenceNTheta0 = CreateDataFromArrays(data.european_convergence_in_n.space_steps_vec, data.european_convergence_in_n.errors[0], 1)
const europeanOptionConvergenceNTheta1 = CreateDataFromArrays(data.european_convergence_in_n.space_steps_vec, data.european_convergence_in_n.errors[1], 1)
const europeanOptionConvergenceNTheta2 = CreateDataFromArrays(data.european_convergence_in_n.space_steps_vec, data.european_convergence_in_n.errors[2], 1)

const europeanOptionNConvergencePlot = {
  datasets: [
      {
      label: 'Theta = 0',
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
      data: europeanOptionConvergenceNTheta0
      },
      {
      label: 'Theta = 0.5',
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
      data: europeanOptionConvergenceNTheta1
      },
      {
        label: 'Theta = 1',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,127,80, 0.4)',
        borderColor: 'rgba(255,127,80, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,127,80, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,127,80, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: europeanOptionConvergenceNTheta2
        },
      ]
  };

  const europeanOptionConvergenceMTheta0 = CreateDataFromArrays(data.european_convergence_in_m.time_steps_vec, data.european_convergence_in_m.errors[0], 1)
  const europeanOptionConvergenceMTheta1 = CreateDataFromArrays(data.european_convergence_in_m.time_steps_vec, data.european_convergence_in_m.errors[1], 1)
  
  const europeanOptionMConvergencePlot = {
    datasets: [
        {
        label: 'Theta = 0.5',
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
        data: europeanOptionConvergenceMTheta0
        },
        {
        label: 'Theta = 1',
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
        data: europeanOptionConvergenceMTheta1
        }
        ]
    };

export const EuropeanOptionConvergence = () => (
  <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', height: '30vh'}}>
    <div style={{width: '50%', height: '100%', flex: 1}}>
      <Line 
        data={europeanOptionNConvergencePlot}
        options = {{
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Convergence in N",
        },
        scales: {
          yAxes: [{
            type: 'logarithmic',
            scaleLabel: {
              display: true,
              labelString: 'error',
            },
          }],
          xAxes: [{
            type: 'logarithmic',
            scaleLabel: {
              display: true,
              labelString: 'S'
            },
            ticks: {
              precision: 3,
            },
          }],
        }}     
        }/>
    </div>
    <div style={{width: '50%', height: '100%', flex: 1}}>
      <Line
        data={europeanOptionMConvergencePlot}
        options = {{
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Convergence in M",
        },
        scales: {
          yAxes: [{
            type: 'logarithmic',
            scaleLabel: {
              display: true,
              labelString: 'error',
            },
            ticks: {
              precision: 2,
            }
          }],
          xAxes: [{
            type: 'logarithmic',
            scaleLabel: {
              display: true,
              labelString: 'S'
            },
            ticks: {
              precision: 2,
            },
          }],
        }}     
      }/>
    </div>
  </div>
)

const europeanOptionJointConvergence0 = CreateDataFromArrays(data.european_joint_convergence.space_steps, data.european_joint_convergence.errors[0], 1, true)

const europeanOptionJointConvergence1 = CreateDataFromArrays(data.european_joint_convergence.space_steps, data.european_joint_convergence.errors[1], 1, true)


const europeanOptionJointConvergencePlots = {
datasets: [
    {
    label: 'Crank-Nicolson',
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
    data: europeanOptionJointConvergence0
    },
    {
      label: 'Implicit',
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
      data: europeanOptionJointConvergence1
      }
    ]
};

export const EuropeanOptionJointConvergence = () => (
  <Line data={europeanOptionJointConvergencePlots} options = {{
title: {
  display: true,
  text: 'European option error joint convergence',
},
scales: {
  yAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'log(error)',
    },
  }],
  xAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'log(N)=log(M)'
    },
    ticks: {
      precision: 0,
    },
  }],
}}     
}/>
)

const americanOptionPrice = CreateDataFromArrays(data.american_plot.stock_price, data.american_plot.amer_option_price, 6)
const americanOptionPayoff = CreateDataFromArrays(data.american_plot.stock_price, data.american_plot.payoff, 6)
const americanAnalOptionPrice = CreateDataFromArrays(data.american_plot.stock_price, data.american_plot.euro_option_price, 6)

const americanOptionPricePlot = {
datasets: [
    {
    label: 'American option price',
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
    data: americanOptionPrice
    },
    {
      label: 'European option price',
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
      data: americanAnalOptionPrice
    },
    {
    label: 'Option payoff',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(255,127,80, 0.4)',
    borderColor: 'rgba(255,127,80, 1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(255,127,80, 1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(255,127,80, 1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: americanOptionPayoff
    },
    ]
};

export const AmericanOptionPrice = () => (
  <Line data={americanOptionPricePlot} options = {{
title: {
  display: true,
  text: 'American straddle price',
},
scales: {
  yAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'V',
    },
  }],
  xAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'S'
    },
    ticks: {
      precision: 0,
    },
  }],
}}     
}/>
)

const americanEuropeanOptionDiff = CreateDataFromArrays(data.american_european_difference_plot.stock_price, data.american_european_difference_plot.price_difference, 6)

const americanEuropeanOptionDiffPlot = {
datasets: [
    {
    label: 'American - European price',
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
    data: americanEuropeanOptionDiff
    }
    ]
};

export const AmericanEuropeanOptionDiff = () => (
  <Line data={americanEuropeanOptionDiffPlot} options = {{
title: {
  display: true,
  text: 'American option premium',
},
scales: {
  yAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'spread',
    },
  }],
  xAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'S'
    },
    ticks: {
      precision: 0,
    },
  }],
}}     
}/>
)

const americanOptionJointConvergence = CreateDataFromArrays(data.american_joint_convergence.space_steps, data.american_joint_convergence.diff_errors, 1, true)


const AmericanOptionJointConvergencePlot = {
datasets: [
    {
    label: 'Error',
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
    data: americanOptionJointConvergence
    },
    ]
};

export const AmericanOptionJointConvergence = () => (
  <Line data={AmericanOptionJointConvergencePlot} options = {{
title: {
  display: true,
  text: 'American option error joint convergence',
},
scales: {
  yAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'log(error)',
    },
  }],
  xAxes: [{
    type: 'linear',
    scaleLabel: {
      display: true,
      labelString: 'log(N)=log(M)'
    },
    ticks: {
      precision: 0,
    },
  }],
}}     
}/>
)