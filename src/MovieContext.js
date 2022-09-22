import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{ name: 'Harry Potter', price: '$10', id: 12 },
		{ name: 'GOT', price: '$30', id: 50 },
		{ name: 'Shutter Island', price: '$68', id: 33 },
		{ name: 'House of the Dragons', price: '$50', id: 43 },
		{ name: 'Inception', price: '$46', id: 97 },
		{ name: 'Glory', price: '$20', id: 88 },
	]);
	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	);
};
