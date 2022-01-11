import React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
export default function HomePage () {
  const [rates, setRates] = React.useState([])
  const [topTen, setTopTen] = React.useState([])
  const navigate = useNavigate()

  var array = []

  const getRate = () => {
    axios.defaults.baseURL = 'https://api.coincap.io/v2/rates'
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=utf-8'
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    axios.get('https://api.coincap.io/v2/rates').then(response => {
      const price = response.data
      array.push(price)
      setRates(price['data'])
      getTopTen()
    })
  }

  React.useEffect(() => getRate(), [topTen])
  React.useEffect(() => {
    navigate('/')
  }, [])

  const getTopTen = () => {
    let top10 = rates
      .sort(function (a, b) {
        return a.rateUsd < b.rateUsd ? 1 : -1
      })
      .slice(0, 10)
    top10 = top10.sort((a, b) => b.rateUsd - a.rateUsd)
    setTopTen(top10)
  }
  return (
    <div>
      <h1>Top 10 Crypto currencies</h1>
      <div className='d-flex flex-column'></div>
      {/* <ListGroup as='ol' numbered variant='danger'>
        {topTen.map((item, index) => (
          <ListGroup.Item as='li' key={item.id}>
            {item.id}
            <br />

            {item.rateUsd}
          </ListGroup.Item>
        ))}
      </ListGroup> */}
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {topTen.map((item, index) => (
             <List component='nav' key={item.id} aria-label='secondary mailbox folder'>
       
            <ListItemButton>
              <Link
                style={{ color: 'black', textDecoration: 'none' }}
                to = '/details'
                state= {{
                  id: item.id,
                  symbol: item.symbol,
                  currencySymbol: item.currencySymbol,
                  type: item.type
                }}
               
              >
                <ListItemText primary={item.id} />

                {Math.round((item.rateUsd ) * 100) / 100}
              </Link>
            </ListItemButton>
            </List>
          ))}
        
      </Box>
    </div>
  )
}
