import React from 'react';
import PropTypes from 'prop-types';


const Book = props => {
    const { book, shelf, updateShelf } = props;

    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';
    const title = book.title ? book.title : '';
    const authors = book.authors ? book.authors : [];

    return(
        <li>
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{ backgroundImage: `url(${thumbnail})` }}>
                    </div>
                    <div className='book-shelf-changer'>
                        <select
                            value={shelf}
                            onChange={e => updateShelf(book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className='book-title'>
                    {title}
                </div>
                <div className='book-authors'>
                    {authors}
                </div>
            </div>
        </li>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string,
    updateShelf: PropTypes.func.isRequired,
}

export default Book;