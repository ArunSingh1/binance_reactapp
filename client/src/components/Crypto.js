import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
// import { query } from 'express';
import Cryptoitem from './Cryptoitem'


const CRYPTO_QUERY = gql`
    query CryptoQuery {
        cryptos {
            symbol
            volume
            weightedAvgPrice            
            lastQty
            }
    }
`;

export class Crypto extends Component {
    render() {
        return (
            <>
              <h5>Crypto Data</h5> 
              <Query query={CRYPTO_QUERY}>
                  {
                    ({loading, error, data}) => {
                        if(loading) return <h4>loading......</h4>
                        if(error) console.log(error);
                        
                        

                        return <> {
                            data.cryptos.map(crypto => (
                                <Cryptoitem key ={crypto.symbol} crypto={crypto} />
                            )
                            )
                        }
                        </>
                    }
                }
                </Query>


            
            </>
        )
    }
}

export default Crypto;
