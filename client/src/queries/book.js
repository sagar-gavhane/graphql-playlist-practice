import { gql } from "apollo-boost"

export const getBooksQuery = gql`
  {
    books {
      name
      id
      author {
        name
      }
    }
  }
`

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`
