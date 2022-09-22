import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{ name: 'Harry Potter', price: '$10', id: 12 },
		{ name: 'GOT', price: '$30', id: 50 },
		{ name: 'Inception', price: '$50', id: 33 },
	]);
	return (
		<MovieContext.Provider value={'Hey! This works!'}>
			{props.children}
		</MovieContext.Provider>
	);
};
