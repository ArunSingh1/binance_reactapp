const axios = require('axios');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql');


// crypto type
const CryptoType = new GraphQLObjectType({
    name: 'Crypto',
    fields: () => ({
      symbol: { type: GraphQLString },
      weightedAvgPrice: { type: GraphQLString },
      lastQty: { type: GraphQLString },
      volume: { type: GraphQLString }
    })
  });


// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        cryptos: {
        type: new GraphQLList(CryptoType),
        resolve(parent, args) {
          return axios
            .get('https://api2.binance.com/api/v3/ticker/24hr')
            .then(res => res.data);

            } 
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});