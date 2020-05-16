/* eslint-disable no-lone-blocks */
import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


const Bookshelf = props => {
    const { booksByShelf, shelfInfo, books, updateShelf } = props;

    return(
        <div>
            {booksByShelf && booksByShelf.length > 0 && (
                <div className='bookshelf' key={shelfInfo.id}>
                    <h2 className='bookshelf-title'>{shelfInfo.title}</h2>
                    <div className='bookshelf-books'>
                        <ol className='books-grid'>
                            {booksByShelf && booksByShelf.map(bookId => {
                                return(
                                    books.filter(book => book.id === bookId).map((book) => (
                                        <Book
                                            key={book.id}
                                            book={book}
                                            updateShelf={updateShelf}
                                        />
                                    ))
                                );
                            })}
                        </ol>
                    </div>
                </div>
            )}
        </div>
    );
}

Bookshelf.propTypes = {
    booksByShelf: PropTypes.array,
    shelfInfo: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
}

export default Bookshelf;