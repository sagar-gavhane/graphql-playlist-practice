import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const App = props => {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <div className="container my-4">
          <div className="row">
            <h1>Ninja Reading List</h1>
          </div>
          <div className="row">
            <BookList />
          </div>
          <div className="row">
            <AddBook />
          </div>
        </div>
      </ApolloProvider>
    </React.Fragment>
  )
}

export default App
