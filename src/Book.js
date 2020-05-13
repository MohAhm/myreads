import React from 'react';


const Book = props => {
    const { id, imageLinks, shelf, title, authors, updateShelf } = props;

    return(
        <li key={id}>
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                            backgroundImage: `url(${imageLinks})`
                        }}>
                    </div>
                    <div className='book-shelf-changer'>
                        <select
                            value={shelf}
                            onChange={(event) => updateShelf(id, event)}>
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

export default Book;