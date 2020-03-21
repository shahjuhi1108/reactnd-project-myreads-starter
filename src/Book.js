import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import * as Constants from './Constants'

class Book extends Component {
  handleChange = (event) => {
    event.preventDefault();
    this.props.handleShelfTypeChange(this.props.book, event.target.value)
  }

  render() {

    const options = [];

    Object.keys(Constants.shelfAlias).forEach((shelfType) => (
      options.push(<option key={shelfType} value={shelfType}>{Constants.shelfAlias[shelfType]}</option>)
    ))

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (this.props.book.imageLinks === undefined ? "" : this.props.book.imageLinks.thumbnail) + ')' }}></div>
          <div className="book-shelf-changer">
            <select value={this.props.shelfType} onChange={this.handleChange}>
              {options}
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
        {this.props.book.authors.map((author) => (
          <div key={author} className="book-author">{author}</div>
        ))}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  shelfType: PropTypes.string,
  book: PropTypes.object.isRequired,
  handleShelfTypeChange: PropTypes.func.isRequired,
}

export default Book;
