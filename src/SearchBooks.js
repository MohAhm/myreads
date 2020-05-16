import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './utils/BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
    state = {
        query: '',
        results: [],
    };

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }));

        this.searchBooks(query);
    }

    searchBooks = (query) => {
        if (query.trim() !== '') {
            BooksAPI.search(query)
                .then((books) => {
                    this.setState(() => ({
                        results: books
                    }))
                })
        } else {
            this.setState(() => ({
                results: []
            }))
        }
    }

    getShelf = book => {
        const currBooks = this.props.books;

        for (let currBook of currBooks) {
            if (currBook.id === book.id) {
                return currBook.shelf;
            }
        }

        return 'none';
    }

    render() {
        const { query, results } = this.state;
        const updateShelf = this.props.updateShelf;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Close</Link>

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {results && results.length > 0 && results.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                shelf={this.getShelf(book)}
                                updateShelf={updateShelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
         );
    }
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
}

export default SearchBooks;
