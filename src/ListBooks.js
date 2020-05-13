import React from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';


const ListBooks = props => {
    const { shelves, books, updateShelf } = props;
    const booksByShelf = {};

    books.forEach(book => {
        const sehlfID = book.shelf;
        if (booksByShelf[sehlfID]) {
            booksByShelf[sehlfID].push(book.id);
        }
        else {
            booksByShelf[sehlfID] = [book.id];
        }
    });

    const bookshelf = Object.keys(shelves).map(id => (
        <Bookshelf
            key={id}
            booksByShelf={booksByShelf[shelves[id].shelf]}
            shelfInfo={shelves[id]}
            books={books}
            updateShelf={updateShelf}
        />
    ));

    return (
        <div className='list-books-content'>
            {bookshelf}
        </div>
    );
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
}

export default ListBooks;