import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getAll, update } from '../utils/BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import '../App.css';


class App extends Component {
	state = {
		books: [],
	};

	async componentDidMount() {
        const books = await getAll();
        this.setState({ books });
	}

	handleUpdate = async (book, shelf) => {
		book.shelf = shelf;

		this.setState((currentState) => ({
			books: currentState.books
				.filter(b => b.id !== book.id)
				.concat(book)
		}));

		await update(book, shelf);
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
								updateShelf={this.handleUpdate}
							/>
						</div>
					)}
				/>

				<Route
					path='/search'
					render={() => (
						<SearchBooks
							books={this.state.books}
							updateShelf={this.handleUpdate}
						/>
					)}
				/>
			</div>
		);
	}

}

export default App;
