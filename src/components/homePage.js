import React from 'react'
import axios from 'axios'
import ListItemText from '@mui/material/ListItemText'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Logo from './logo.png'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
export default function HomePage () {
  const [topTen, setTopTen] = React.useState([''])
  const navigate = useNavigate()
  var i = 0
  React.useEffect(() => {
    navigate('/')
  }, [navigate])

  React.useEffect(() => {
    const getRate = () => {
      axios.get('http://localhost:5000/').then(
        response => {
          const price = response.data
          var sortByCount = price['data'].sort(function (a, b) {
            return (
              (b.priceUsd !== undefined ? b.priceUsd : 0) -
              (a.priceUsd !== undefined ? a.priceUsd : 0)
            )
          })

          var topTen = sortByCount.slice(0, 10)
          setTopTen(topTen)
        },
        error => {
          return error
        }
      )
    }
    getRate()
  }, [])

  return (
    <div className='back-color'>
      <AppBar position='static'>
        <Typography variant='h3'>
          <img src={Logo} alt='Logo.png' style={{ paddingRight: '1%' }} />
          Top 10 Cryptocurrencies
        </Typography>
      </AppBar>
      <div className='d-flex flex-column'></div>

      <div className='home-main-div'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150 }} aria-label='simple table'>
            <TableHead>
              <TableRow key={i + 1}>
                <TableCell align='center'>SR </TableCell>
                <TableCell align='center'>Rank </TableCell>
                <TableCell align='center'>Coin Name </TableCell>
                <TableCell align='center'>Rate</TableCell>
                <TableCell align='center'>Details</TableCell>
              </TableRow>
            </TableHead>
            {topTen.map((price, index) => (
              <React.Fragment key={index}>
                <TableBody>
                  <TableRow key={price.id}>
                    <TableCell align='center'>{index + 1}</TableCell>
                    <TableCell align='center'>
                      {price.rank !== undefined ? price.rank : 'rank'}
                    </TableCell>

                    <TableCell align='center'>
                      {price.id !== undefined ? price.id : 'name'}
                    </TableCell>
                    <TableCell align='center'>
                      {price.priceUsd !== undefined ? (
                        price.changePercent24Hr >= 0 ? (
                          <p style={{ color: 'green' }}>
                            <AiOutlineArrowUp
                              size='1.4vw'
                              style={{ paddingBottom: '1%' }}
                            />
                            {parseInt(price.priceUsd * 100) / 100}
                          </p>
                        ) : (
                          <p style={{ color: 'red' }}>
                            <AiOutlineArrowDown
                              size='1.4vw'
                              style={{ paddingBottom: '1%' }}
                            />
                            {parseInt(price.priceUsd * 100) / 100}
                          </p>
                        )
                      ) : (
                        0
                      )}
                    </TableCell>
                    <TableCell align='center'>
                      <Link
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
                          vwap24Hr: price.vwap24Hr,
                          topTen: topTen
                        }}
                      >
                        <ListItemText primary={'Details'} />
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </React.Fragment>
            ))}
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
