import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';


const shelves = {
	1: {
		shelf: 'currentlyReading',
		title: 'Currently Reading',
	},
	2: {
		shelf: 'wantToRead',
		title: 'Want to Read',
	},
	3: {
		shelf: 'read',
		title: 'Read',
	},
};

class App extends Component {
	state = {
		books: [],
	};

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				this.setState(() => ({
					books
				}))
			})
	}

	updateShelves = (book, shelf) => {
        BooksAPI.update(book, shelf)
			.then(() => {
				const currBooks = this.state.books;
				const updateBook = currBooks.filter((b) => b.id === book.id)[0];

				updateBook.shelf = shelf;

				this.setState(() => ({
					books: currBooks
				}))
            })
	}

	handleAddBook = (book, shelf) => {
		BooksAPI.get(book.id)
			.then((book) => {
				this.setState(() => ({
					books: this.state.books.concat([book])
				}))

				this.updateShelves(book, shelf)
			})
	}

	render() {
		return (
			<div className='app'>
				<Route
					exact
					path='/'
					render={() => (
						<div className='list-books'>
							<div className='list-books-title'>
								<h1>MyReads</h1>
							</div>

							<ListBooks
								books={this.state.books}
								shelves={shelves}
								updateShelf={this.updateShelves}
							/>
						</div>
					)}
				/>

				<Route
					path='/search'
					render={() => (
						<SearchBooks
							books={this.state.books}
							updateShelf={this.handleAddBook}
						/>
					)}
				/>
			</div>
		);
	}

}

export default App;
