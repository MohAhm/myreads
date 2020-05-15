import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        }))

        this.searchBooks(query)
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

    render() {
        const { query, results } = this.state;

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
                                id={book.id}
                                imageLinks={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                title={book.title}
                                shelf={book.shelf ? book.shelf : 'none'}
                                authors={book.authors ? book.authors : []}
                            />
                        ))}
                    </ol>
                </div>
            </div>
         );
    }
}

export default SearchBooks;