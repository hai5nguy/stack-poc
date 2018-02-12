var express = require('express')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')

var schema = buildSchema(`
  type Query {
    stuff: [String]
  }
`)

var root = { stuff: () => [
    'stuff 1 from graphql',
    'stuff 2 from graphql',
    'stuff 3 from graphql',
]}

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));