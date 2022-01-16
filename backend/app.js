const express = require('express');
const request = require('request');
const app = express();
const axios = require('axios')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res)=>{
  axios.get(`https://api.coincap.io/v2/assets`)
    .then((response)=>{
        res.send(response.data)
    })
    .catch(err=>{
      return err
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));