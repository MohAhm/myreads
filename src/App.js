import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import ListBooks from './ListBooks';
import './App.css';


class App extends Component {

	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				this.setState(() => ({
					books
				}))
			})
	}

	render() {
		return (
			<div className='App'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					<div>
						<ListBooks books={this.state.books}/>
					</div>
				</div>
			</div>
		);
	}

}

export default App;
