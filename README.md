# MyReads Project

This was an academic project that I worked on as part of the Udacity React Developer nanodegree program. The app allows users to search from the database of books, and keep track of those books in different virtual bookshelves. Users can track the books in Read, Currently Reading, and Want To Read shelves. App also allows the books to move between the shelves throughout their lifecycle. The books can be removed from the shelves by using the 'none' option.

*Live Demo: https://shahjuhi1108.github.io/reactnd-project-myreads-starter/*
*Here is the link to the terms that you can search for: https://github.com/shahjuhi1108/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md*
*Click on the add button towards the bottom of the page, to search and add new books*

## Backend Server

The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods which app needs to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
