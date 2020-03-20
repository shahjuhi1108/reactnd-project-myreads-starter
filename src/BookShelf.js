import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import * as Constants from './Constants'


class BookShelf extends Component {
  render() {
    return(
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfType}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.bookDetails.filter((book) => {
                  return this.props.shelfType === book.shelf
                }).map((book) => (
                  <li key={book.id}>
                  <Book handleShelfTypeChange={this.props.handleShelfTypeChange} shelfType={this.props.shelfType} book={book}/>
                  </li>
              ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  shelfType: PropTypes.string.isRequired,
  bookDetails: PropTypes.array.isRequired,
  handleShelfTypeChange: PropTypes.func.isRequired,
}

export default BookShelf;
