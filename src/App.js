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

	updateShelves = (bookId, event) => {
		const currState = this.state.books;
		const book = currState.filter((b) => b.id === bookId)[0];

		const shelf = event.target.value;
		book.shelf = shelf;

        BooksAPI.update(book, shelf)
			.then(() => {
				this.setState({
					books: currState
				})
            })
    }

	render() {
		return (
			<div className='app'>
				<div className='list-books'>
					<div className='list-books-title'>
						<h1>MyReads</h1>
					</div>

					<Route
						exact
						path='/'
						render={() => (
							<ListBooks
								shelves={shelves}
								books={this.state.books}
								updateShelf={this.updateShelves}
							/>
						)}
					/>

					<Route path='/search' component={SearchBooks} />
				</div>
			</div>
		);
	}

}

export default App;
