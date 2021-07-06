import React from 'react';
import styled from 'styled-components';
import useCounter from '../../hooks/useCounter';

const StyledCounter = styled.div`
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
export default function Counter({ currentCount }) {
	const counter = useCounter(currentCount);
	return (
		<StyledCounter className='App'>
			<div>
				<button type='button' onClick={counter.decrease}>
					<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='12px' height='12px' viewBox='0 0 124 124' xmlSpace='preserve'>
						<g>
							<path d='M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z' />
						</g>
					</svg>
				</button>
				<span>{counter.value}</span>
				<button type='button' onClick={counter.increase}>
					<svg viewBox='0 0 448 448' width='12px' height='12px' xmlns='http://www.w3.org/2000/svg'>
						<path d='m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0' />
					</svg>
				</button>
			</div>
		</StyledCounter>
	);
}
