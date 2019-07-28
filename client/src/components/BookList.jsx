import React from "react"
import { graphql } from "react-apollo"
import { getBooksQuery } from "./../queries/book"

class BookList extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {this.props.data.loading ? (
          <strong>Loading....</strong>
        ) : (
          <ul className="list-group my-4 w-100">
            {this.props.data.books.map(book => {
              return (
                <li className="list-group-item" key={book.id}>
                  {`${book.name} - ${book.author.name}`}
                </li>
              )
            })}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

export default graphql(getBooksQuery)(BookList)
