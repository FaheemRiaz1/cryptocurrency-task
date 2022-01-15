import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import '../App.css'
import Graph from './graph'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export default function Details () {
  const location = useLocation()
  const navigate = useNavigate()

  const [id, setId] = React.useState()
  const [symbol, setSymbol] = React.useState()
  const [name, setName] = React.useState()
  const [supply, setSupply] = React.useState()
  const [maxSupply, setMaxSupply] = React.useState()
  const [marketCapUsd, setMarketCapUsd] = React.useState()
  const [volumeUsd24Hr, setVolumeUsd24Hr] = React.useState()
  const [priceUsd, setPriceUsd] = React.useState()
  const [changePercent24Hr, setChangePercent24Hr] = React.useState()
  const [vwap24Hr, setVwap24Hr] = React.useState()
  const [array, setArray] = React.useState([])
  const [topTen, setTopTen] = React.useState()
  // set HTTPS=true&&

  React.useEffect(() => {
    if (location.state) {
      setId(location.state.id)
      setName(location.state.name)
      setSymbol(location.state.symbol)
      setSupply(location.state.supply)
      setMaxSupply(location.state.maxSupply)
      setMarketCapUsd(location.state.marketCapUsd)
      setVolumeUsd24Hr(location.state.volumeUsd24Hr)
      setPriceUsd(location.state.priceUsd)
      setChangePercent24Hr(location.state.changePercent24Hr)
      setVwap24Hr(location.state.vwap24Hr)
      setArray(location.state)
      setTopTen(location.state.topTen)
    } else {
      navigate('/details')
    }
  }, [])

  return (
    <div>
      <AppBar position='static'>
        <Typography variant='h3'>
          Details of <b>{name}</b>
        </Typography>
      </AppBar>
      <div style={{ padding: '1%' }}>
        <div className='details-subdiv'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <b>Symbol:</b>{' '}
                <h3 style={{ fontWeight: 'bold' }}>
                  {symbol !== undefined ? symbol : 'No symbol available'}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <b>Name</b>{' '}
                <h3 style={{ fontWeight: 'bold' }}>
                  {name !== undefined ? name : 'No name available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Supply</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {supply !== undefined
                    ? Math.round(supply)
                    : 'No supply data available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Max Supply</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {maxSupply !== undefined
                    ? Math.round(maxSupply)
                    : 'No maximun supply data available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Market Capital Usd</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {marketCapUsd !== undefined
                    ? Math.round(marketCapUsd)
                    : 'No market capacity Usd available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Volume in Usd in last 24 hours</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {volumeUsd24Hr !== undefined
                    ? Math.round(volumeUsd24Hr)
                    : 'No volume data available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Price in Usd</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {priceUsd !== undefined ? '$' + Math.round(priceUsd) : '0'}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <b>Change in 24 hours in percentage</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {changePercent24Hr !== undefined
                    ? Math.round(changePercent24Hr) + '%'
                    : 0 + '%'}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <b>V wap 24 hrs</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {vwap24Hr !== undefined
                    ? Math.round(vwap24Hr)
                    : 'No data available'}
                  %
                </h3>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div style={{ padding: '1%' }}>
        <div className='details-subdiv'>
          <Graph rates={topTen !== undefined ? topTen : 'No data'} />
        </div>
      </div>
    </div>
  )
}
