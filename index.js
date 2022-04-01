// Every Apollo GraphQL code starter pack.
const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schema/type-defs")
const { resolvers } = require("./schema/resolvers")

// typeDefs and resolvers => variables used throughout app 
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then( ({url}) => {
  console.log(`GraphQL is running at: ${url}`)
})