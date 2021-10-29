import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Crypto from './components/Crypto';

const client = new ApolloClient({
  uri: "/graphql" 
});


function App() {
  return (
    <ApolloProvider client = {client}>
      <div className="container">
        <h2> Binance </h2>
        <h5> Binance is a cryptocurrency exchange which is currently the largest exchange in the world in terms of daily trading volume of cryptocurrencies. </h5>
        <p> Around 1705 cryptocurrencies 24 hour rolling window price change statistics is displayed here. Data is collected using Binance's OpenAPI https://github.com/binance/binance-spot-api-docs/ </p>
        <p> React | ApolloClient | GraphQL | Express-GraphQL </p>
        <Crypto/>
      </div>
    </ApolloProvider> 
  );
}

export default App;
