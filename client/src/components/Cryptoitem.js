import React from 'react'

export default function Cryptoitem({crypto : {symbol, volume, weightedAvgPrice, lastQty }}) {

    return <div className= "card card=body mb-3">
        <div className= "row">
            <div className="col-md-9">
                <h6>CryptoCurrency: {symbol}</h6>
                <p>Weighted Average Price: {weightedAvgPrice}</p>
                <p>Volume: {volume}</p>
                <p>Last Quantity: {lastQty}</p>
            </div>
        </div>          
        </div>
    
}
