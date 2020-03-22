import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchWindow from './SearchWindow'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    bookDetails: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     shelfType: [
       "currentlyReading",
       "wantToRead",
       "read",
     ],
  }

  componentDidMount() {
      BooksAPI.getAll()
        .then((bookDetails) => {
          this.setState(() => ({
            bookDetails
          }))
        })
    }

    handleAddNewBook = (bookToAdd, shelf) => {
      if (this.state.bookDetails.find((book) => book.id === bookToAdd.id)) {
        this.handleShelfTypeChange(bookToAdd, shelf)
      }
      else{
        BooksAPI.update(bookToAdd, shelf)
        .then((response) => {
          bookToAdd.shelf = shelf
          this.setState((prevState) => ({
            bookDetails: prevState.bookDetails.concat([bookToAdd])
          }))
        })
      }
    }


  handleShelfTypeChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    .then((response) => {
      const newBookDetails = [];
      const newState = Object.assign({}, this.state);
      newState.bookDetails.forEach((excludeThisBook) => {
        if(excludeThisBook.id !== book.id) {
          newBookDetails.push(excludeThisBook)
        }
        else{
          excludeThisBook.shelf = newShelf
          newBookDetails.push(excludeThisBook)
        }
      })
      this.setState((prevState) => ({
        bookDetails: newBookDetails
      }))
    })
  }

  render() {
        return (
          <div className="app">

              <Route exact path='/search' render={({ history }) => (
                  <SearchWindow handleShelfTypeChange={(book, newShelf) => {
                      this.handleAddNewBook(book, newShelf)
                      history.push('/')
                    }}
                    />
                )}
              />

            <Route exact path='/' render={() => (
                  <div className="list-books">
                    <div className="list-books-title">
                      <h1>MyReads</h1>
                    </div>
                    {this.state.shelfType.map((shelf) => (
                      <BookShelf key={shelf} shelfType={shelf} bookDetails={this.state.bookDetails} handleShelfTypeChange={this.handleShelfTypeChange}/>
                    ))}
                      <Link
                        to='/search'
                        className="open-search"
                        >Add a Book</Link>
                  </div>
                )}
              />

          </div>
        )
      }
}

export default BooksApp
