import { useContext, useEffect, useState } from 'react';
import { CartDispatch } from '../views/Cart/container';
import PropTypes from 'prop-types';

useCounter.propTypes = {
	id: PropTypes.string.isRequired,
	current_count: PropTypes.number,
	stock: PropTypes.number,
};
export default function useCounter({ id, current_count, stock }) {
	const [count, setCount] = useState(current_count);
	const { dispatch } = useContext(CartDispatch);

	useEffect(() => {
		dispatch({ type: 'setCount', count: { id, count } });
	}, [count, dispatch, id]);

	return {
		value: count,
		increase: () => setCount((prevCount) => (prevCount < stock ? prevCount + 1 : stock)),
		decrease: () => setCount((prevCount) => Math.max(prevCount - 1, 1)),
	};
}
