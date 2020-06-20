import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { search } from '../utils/BooksAPI';
import SearchBox from './common/SearchBox'
import Book from './Book';

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired,
    };

    state = {
        query: '',
        searchResult: [],
    };

    clearResult = () => {
        this.setState({ searchResult: [] });
    };

    handleSearch = async query => {
        this.setState({ query });

        if (query.trim() !== '') {
            const searchResult = await search(query);

            if (!searchResult.error) {
                this.setState({ searchResult });
            }
            else {
                this.clearResult();
            }
        } else {
            this.clearResult();
        }
    };

    getShelf = book => {
        const { books } = this.props;

        for (let b of books) {
            if (b.id === book.id) {
                return b.shelf;
            }
        }

        return 'none';
    }


    render() {
        const { query, searchResult } = this.state;
        const { updateShelf } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Close</Link>

                    <div className="search-books-input-wrapper">
                        <SearchBox
                            value={query}
                            placeholder="Search by title or author"
                            onChange={this.handleSearch}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResult.map((book) => (
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
