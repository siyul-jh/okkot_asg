import { useContext, useEffect, useState } from 'react';
import { CartDispatch } from '../views/Cart/container';

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
