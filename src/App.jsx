import React, { useState } from 'react';
import styled from 'styled-components';

const Counter = styled.div`
	span {
		width: 1rem;
		padding: 0 1rem;
		text-align: center;
		display: inline-block;
	}
	button {
		border: none;
		background-color: transparent;
		font-size: 1.2rem;
		font-weight: 400;
		outline: none;
		cursor: pointer;
	}
`;
function App() {
	const [count, setCount] = useState(1);
	const onIncrease = () => {
		setCount(count + 1);
	};
	const onDecrease = () => {
		setCount(count - 1);
	};
	return (
		<Counter className='App'>
			<div>
				<button type='button' onClick={onDecrease}>
					-
				</button>
				<span>{count}</span>
				<button type='button' onClick={onIncrease}>
					+
				</button>
			</div>
		</Counter>
	);
}

export default App;
