import React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
export default function HomePage () {
  const [rates, setRates] = React.useState(['a','b','x'])
  const [topTen, setTopTen] = React.useState([])
  const navigate = useNavigate()

  var array = []

  const getRate = () => {
    axios.defaults.baseURL = 'https://api.coincap.io/v2/assets'
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=utf-8'
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    axios
      .get('https://api.coincap.io/v2/assets')

      .then(response => {
        const price = response.data

        array.push(price)
        setRates(price['data'])
        console.log(price)
        getTopTen()
      })
      .catch(error => {
        console.log(error)
      })
  }

  React.useEffect(() => getRate(), [topTen])
  React.useEffect(() => {
    navigate('/')
  }, [])

  const getTopTen = () => {
    var sortByCount = rates.sort(function (a, b) {
      return b.priceUsd - a.priceUsd
    })

    var topTen = sortByCount.slice(0, 10)
    setTopTen(topTen)
    console.log('tipten', topTen)
  }
  return (
    <div>
      <h1>Top 10 Crypto currencies</h1>
      <div className='d-flex flex-column'></div>

      <div style={{ padding: '20%', paddingTop: '0%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>SR </TableCell>
                <TableCell align='left'>Coin Name </TableCell>
                <TableCell align='left'>Rate</TableCell>
                <TableCell align='left'>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topTen.map((price, index) => (
                <TableRow key={price.id}>
                  <TableCell align='left'>{index + 1}</TableCell>
                  <TableCell align='left'>{price.id}</TableCell>
                  <TableCell align='left'>
                    {Math.round(price.priceUsd)}
                  </TableCell>
                  <TableCell align='left'>
                    <ListItemButton>
                      <Link
                        style={{ color: 'black', textDecoration: 'none' }}
                        to='/details'
                        state={{
                          id: price.id,
                          symbol: price.symbol,
                          name: price.name,
                          supply: price.supply,
                          maxSupply: price.maxSupply,
                          marketCapUsd: price.marketCapUsd,
                          volumeUsd24Hr: price.volumeUsd24Hr,
                          priceUsd: price.priceUsd,
                          changePercent24Hr: price.changePercent24Hr,
                          vwap24Hr: price.vwap24Hr
                        }}
                      >
                        <ListItemText primary={'Details'} />
                      </Link>
                    </ListItemButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {topTen.map((item, index) => (
          <List
            component='nav'
            key={item.id}
            aria-label='secondary mailbox folder'
          >
            <ListItemButton>
              <Link
                style={{ color: 'black', textDecoration: 'none' }}
                to='/details'
                state={{
                  id: item.id,
                  symbol: item.symbol,
                  currencySymbol: item.currencySymbol,
                  type: item.type
                }}
              >
                <ListItemText primary={item.id} />

                {Math.round(item.rateUsd * 100) / 100}
              </Link>
            </ListItemButton>
          </List>
        ))}
      </Box> */}
    </div>
  )
}
