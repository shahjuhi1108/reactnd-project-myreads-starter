import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'


class SearchWindow extends Component {
  state = {
    searchedBooks:[],
  }

  searchBarChangeHandle = (event) => {
    event.preventDefault();
    BooksAPI.search(event.target.value)
    .then((searchedBooks) => {
      if(Array.isArray(searchedBooks)) {
        this.setState((prevState) => ({
          searchedBooks: searchedBooks,
        }))
      }
      else{
        this.setState((prevState) => ({
          searchedBooks: [],
        }))
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link
          className='close-search'
          to = '/'
          refresh='true'>
          Close
        </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.searchBarChangeHandle}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookShelf ignoreShelf={true} bookDetails={this.state.searchedBooks} handleShelfTypeChange={this.props.handleShelfTypeChange}/>
          </ol>
        </div>
      </div>
    );
  }
}

SearchWindow.propTypes = {
  handleShelfTypeChange: PropTypes.func.isRequired,
}

export default SearchWindow
