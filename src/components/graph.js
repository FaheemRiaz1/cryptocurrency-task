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
        label: 'Price of Coins in Usd',
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
          'rgba(112, 40,145,0.9)',
          'rgba(255, 165,0)',
          'rgba(255, 0, 0)',
          'rgba(0, 0, 255)',
          'rgba(0, 128, 0)',
          'rgba(255, 192, 203)'
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
      <Grid item={true} lg={8} md={8} sm={10} xs={10}>
        <MDBContainer>
          <h3 className='mt-1'>Bar chart</h3>
          <Bar data={dataBar} options={barChartOptions} />
        </MDBContainer>
      </Grid>
      <Grid
        item={true}
        lg={4}
        md={8}
        sm={10}
        xs={10}
        style={{ borderLeft: '1px solid black' }}
      >
        <MDBContainer>
          <h3 className='mt-1'>Pie chart</h3>
          <Doughnut data={dataBar} />
        </MDBContainer>
      </Grid>
    </Grid>
  )
}
