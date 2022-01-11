import React from 'react';
import { useNavigate, useLocation } from 'react-router'

export default function Details(){
    
    const location = useLocation()
    const navigate = useNavigate()
    const [id,setId] = React.useState()
    const [symbol,setSymbol] = React.useState()
    const [currencySymbol,setCurrencySymbol] = React.useState()
    const [type,setType] = React.useState()
   
    React.useEffect(()=>{
        if(location.state){
          setId(location.state.id)
          setSymbol(location.state.symbol)
          setCurrencySymbol(location.state.currencySymbol)
          setType(location.state.type)
        }else{
          navigate('/details')
        }
      }, [])
    return(
        <div>
            details <br/>
            {id}<br/>
            {symbol}<br/>
            {currencySymbol}<br/>
            {type}<br/>
        </div>
    );
}