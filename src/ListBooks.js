import React, { Component } from 'react';
import Book from './Book';

class ListBooks extends Component {
    render() {
        console.log('Props', this.props);

        return(
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>Currently Reading</h2>

                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {this.props.books.map((book) => (
                            <Book
                                key={book.id}
                                imageLinks={book.imageLinks.thumbnail}
                                shelf={book.shelf}
                                title={book.title}
                                authors={book.authors}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default ListBooks;