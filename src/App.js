import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchWindow from './SearchWindow'

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
    showSearchPage: false
  }

  componentDidMount() {
      BooksAPI.getAll()
        .then((bookDetails) => {
          this.setState(() => ({
            bookDetails
          }))
        })
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
        {this.state.showSearchPage ? (
          <SearchWindow showSearchPage={this.state.showSearchPage} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {this.state.shelfType.map((shelf) => (
              <BookShelf key={shelf} shelfType={shelf} bookDetails={this.state.bookDetails} handleShelfTypeChange={this.handleShelfTypeChange}/>
            ))}
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })} >Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
