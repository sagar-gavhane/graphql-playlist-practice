import React from "react"
import { graphql, compose } from "react-apollo"
import { getAuthorsQuery } from "./../queries/author"
import { addBookMutation, getBooksQuery } from "./../queries/book"

const AddBook = props => {
  console.log("[prosp]", props)
  const [name, setName] = React.useState("shaun")
  const [genre, setGenre] = React.useState("sci")
  const [author, setAuthor] = React.useState("5d3d438eb66a290630ae0d86")

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await props.addBookMutation({
      variables: {
        name: name,
        genre,
        authorId: author
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
    console.log("[result]", result)
  }

  return (
    <React.Fragment>
      <strong>Add Book</strong>
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">genre</label>
          <input
            className="form-control"
            type="text"
            name="genre"
            id="genre"
            value={genre}
            onChange={e => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <select
            className="form-control"
            name="author"
            id="author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          >
            <option value="">-SELECT-</option>
            {props.getAuthorsQuery.authors &&
              props.getAuthorsQuery.authors.map(author => {
                return (
                  <option value={author.id} key={author.id}>
                    {author.name}
                  </option>
                )
              })}
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook)
