
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const Mongo = require('./mongo')

const schema = buildSchema(`
  type Query {
    stuff: [String]
  }
  type Mutation {
    addStuff(stuff: String): String
  }
`)

const root = {
  stuff: async () => {
    var results = await Mongo.readMany('stuff', {})
    return results.map(r => r.value);
    
  },
  addStuff: async ({ stuff }) => {
    const result = await Mongo.create('stuff', { value: stuff })
    return result.value
  }
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

let port = 4000;
if (process.env.STACK === undefined) {
  port = 4001;
}

app.listen(port, () => console.log(`Now browse to localhost:${port}/graphql`));


