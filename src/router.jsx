import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Cart from './views/Cart';

export default function Router() {
	return (
		<>
			<Route exact path='/' component={App}></Route>
			<Route path='/cart' component={Cart}></Route>
		</>
	);
}
