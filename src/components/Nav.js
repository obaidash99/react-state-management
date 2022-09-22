import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';

const Nav = () => {
	const value = useContext(MovieContext);
	return (
		<div className="nav">
			<h3>Dev Ed</h3>
			<p>List Of Movies: </p>
		</div>
	);
};

export default Nav;
