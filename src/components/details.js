import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

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
    } else {
      navigate('/details')
    }
  }, [])

  return (
    <div style={{padding:"1%"}}>
      <h1>
        Details of <b>{name}</b>
      </h1>
      <div
        style={{
          textAlign: 'left',
          padding: '5%',
          paddingTop: '1%',
          border: '2px solid black'
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <b>Symbol:</b> <h3 style={{ fontWeight: 'bold' }}>{symbol}</h3>
            </Grid>
            <Grid item xs={6}>
            <b>Name</b> <h3 style={{ fontWeight: 'bold' }}>{name}</h3>
            </Grid>

            <Grid item xs={6}>
            <b>Supply</b><h3 style={{ fontWeight: 'bold' }}>{Math.round(supply)}</h3>
            </Grid>

            <Grid item xs={6}>
            <b>Max Supply</b><h3 style={{ fontWeight: 'bold' }}>{Math.round(maxSupply)}</h3>
            </Grid>

            <Grid item xs={6}>
            <b>Market Capital Usd</b><h3 style={{ fontWeight: 'bold' }}>{Math.round(marketCapUsd)}</h3>
            </Grid>

            <Grid item xs={6}>
            <b>Volume in Usd in last 24 hours</b><h3 style={{ fontWeight: 'bold' }}>{Math.round(volumeUsd24Hr)}</h3>
            </Grid>

            <Grid item xs={6}>
            <b>Price in Usd</b><h3 style={{ fontWeight: 'bold' }}>${Math.round(priceUsd)}</h3>
            </Grid>
            <Grid item xs={6}>
            <b>Change in 24 hours in percentage</b><h3 style={{ fontWeight: 'bold' }}>{Math.round(changePercent24Hr)}%</h3>
            </Grid>
            <Grid item xs={6}>
            <b>V wap 24 hrs</b><h3 style={{ fontWeight: 'bold' }}>{Math.round(vwap24Hr)}%</h3>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}
