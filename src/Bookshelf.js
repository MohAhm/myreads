/* eslint-disable no-lone-blocks */
import React from 'react';
import Book from './Book';

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
                                            id={book.id}
                                            imageLinks={book.imageLinks.thumbnail}
                                            shelf={book.shelf}
                                            title={book.title}
                                            authors={book.authors}
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

export default Bookshelf;