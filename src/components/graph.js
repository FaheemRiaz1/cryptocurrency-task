import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'
import Chart from 'chart.js/auto'
import Grid from '@mui/material/Grid'

export default function Graph (props) {
 
  const dataBar = {
    labels: [
      props.rates[0].name,
      props.rates[1].name,
      props.rates[2].name,
      props.rates[3].name,
      props.rates[4].name,
      props.rates[5].name,
      props.rates[6].name
    ],
    datasets: [
      {
        label: 'rate ',
        data: [
          props.rates[0].priceUsd,
          props.rates[1].priceUsd,
          props.rates[2].priceUsd,
          props.rates[3].priceUsd,
          props.rates[4].priceUsd,
          props.rates[5].priceUsd,
          props.rates[6].priceUsd
        ],
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
          'rgba(255, 177, 101,0.4)'
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
          'rgba(255, 177, 101, 1)'
        ]
      }
    ]
  }
  const barChartOptions = {
    scales: {
      xAxes: {
        barPercentage: 1,
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      yAxes: {
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          beginAtZero: true
        }
      }
    }
  }

  return (
    <Grid container spacing={2}>
      <h2 className='graph-h2'>
        <b>Graphical analysis of Price of Currencies</b>
      </h2>
      <Grid item={true} lg={7} md={8} sm={10} xs={10}>
        <MDBContainer>
          <h3 className='mt-1'>Bar chart</h3>
          <Bar data={dataBar} options={barChartOptions} />
        </MDBContainer>
      </Grid>
      <Grid item={true} lg={5} md={8} sm={10} xs={10}>
        <MDBContainer>
          <h3 className='mt-1'>Pie chart</h3>
          <Doughnut data={dataBar} />
        </MDBContainer>
      </Grid>
    </Grid>
  )
}
