const express = require("express")
const graphqlHTTP = require("express-graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose")

const mongoDBUris = "mongodb://shaun:ebcb6a92fbe5@ds243897.mlab.com:43897/graphql-playlist-practice"
mongoose.connect(mongoDBUris, {
  useNewUrlParser: true
})
mongoose.connection.once("open", () => {
  console.log("[MongoDB connected successfully]")
})

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(4000, () => {
  console.log("[listening on port 4000]")
})
