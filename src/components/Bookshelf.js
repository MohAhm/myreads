import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


const Bookshelf = props => {
    const { title, books, updateShelf } = props;

    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{title}</h2>

            <div className='bookshelf-books'>
                <ol className='books-grid'>
                    {books.map(book => (
                        <Book
                            key={book.id}
                            book={book}
                            shelf={book.shelf}
                            updateShelf={updateShelf}
                        />
                    ))}
                </ol>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
}

export default Bookshelf;