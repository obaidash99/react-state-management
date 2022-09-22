import React, { useState, useContext } from 'react';
import { MovieContext } from '../MovieContext';

const AddMovie = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [movies, setMovies] = useContext(MovieContext);

	const updateName = (e) => {
		setName(e.target.value);
	};
	const updatePrice = (e) => {
		setPrice(e.target.value);
	};

	const addMovie = (e) => {
		e.preventDefault();
		setMovies((prevMovies) => [...prevMovies, { name: name, price: price, id: 333 }]);
	};

	return (
		<form>
			<input
				type="text"
				name="name"
				value={name}
				onChange={updateName}
				placeholder="Movie"
			/>
			<input
				type="text"
				name="price"
				value={price}
				onChange={updatePrice}
				placeholder="Price"
			/>
			<button type="submit" onClick={addMovie}>
				Add Movie
			</button>
		</form>
	);
};

export default AddMovie;
