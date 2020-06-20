import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';


class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired,
    };

    shelves = [
        {
            shelf: 'currentlyReading',
            title: 'Currently Reading',
        },
        {
            shelf: 'wantToRead',
            title: 'Want to Read',
        },
        {
            shelf: 'read',
            title: 'Read',
        },
    ];


    render() {
        const { books, updateShelf } = this.props;

        return (
            <div className='list-books-content'>
                {this.shelves.map(({ shelf, title }) => {
                    const booksByShelf = books.filter(book => book.shelf === shelf);

                    if (booksByShelf.length > 0 ) {
                        return (
                            <Bookshelf
                                key={shelf}
                                title={title}
                                books={booksByShelf}
                                updateShelf={updateShelf}
                            />
                        );
                    }

                    return null;
                })}

                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

export default ListBooks;