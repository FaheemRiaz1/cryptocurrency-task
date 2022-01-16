import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import '../App.css'
import Graph from './graph'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Logo from './logo.png'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

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
    <div className='back-color'>
      <AppBar position='static'>
        <Typography variant='h3'>
          <img src={Logo} alt='Logo.png' style={{ paddingRight: '1%' }} />
          Details of <b>{name}</b>
        </Typography>
      </AppBar>
      <div style={{ padding: '1%'}}>
        <div className='details-subdiv'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <b>Symbol:</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {symbol !== undefined ? symbol : 'No symbol available'}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <b>Name</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {name !== undefined ? name : 'No name available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Supply</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {supply !== undefined
                    ? parseInt(supply * 100) / 100
                    : 'No supply data available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Max Supply</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {maxSupply !== undefined
                    ? parseInt(maxSupply * 100) / 100
                    : 'No maximun supply data available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Market Capital Usd</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {marketCapUsd !== undefined
                    ? parseInt(marketCapUsd * 100) / 100
                    : 'No market capacity Usd available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Volume in Usd in last 24 hours</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {volumeUsd24Hr !== undefined
                    ? parseInt(volumeUsd24Hr * 100) / 100
                    : 'No volume data available'}
                </h3>
              </Grid>

              <Grid item xs={6}>
                <b>Price in Usd</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {priceUsd !== undefined
                    ? '$' + parseInt(priceUsd * 100) / 100
                    : '0'}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <b>Change in 24 hours change in percentage</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {changePercent24Hr !== undefined ? (
                    changePercent24Hr >= 0 ? (
                      <p style={{ color: 'green' }}>
                        <AiOutlineArrowUp
                          size='2.9vw'
                          style={{ paddingBottom: '1%' }}
                        />
                        {parseInt(changePercent24Hr * 1000) / 1000 + '%'}{' '}
                      </p>
                    ) : (
                      <p style={{ color: 'red' }}>
                        <AiOutlineArrowDown
                          size='2.9vw'
                          style={{ paddingBottom: '1%' }}
                        />{' '}
                        {parseInt(changePercent24Hr * 1000) / 1000 + '%'}{' '}
                      </p>
                    )
                  ) : (
                    0 + '%'
                  )}
                </h3>
              </Grid>
              <Grid item xs={6}>
                <b>Volume weighted average price</b>
                <h3 style={{ fontWeight: 'bold' }}>
                  {vwap24Hr !== undefined
                    ? parseInt(vwap24Hr * 100) / 100
                    : 'No data available'}
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
