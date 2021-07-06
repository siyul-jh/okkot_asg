import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartDispatch } from '.';
import BillList from '../component/BillList';

const StyledList = styled.div`
	& label {
		input[type='checkbox'] {
			margin-right: 16px;
		}
	}
`;

export default function Details() {
	const { state, dispatch } = useContext(CartDispatch);

	return (
		<StyledList>
			<label>
				<input type='checkbox' defaultValue={state?.checkedAll || false} checked={state.checkedAll} onChange={(e) => dispatch({ type: 'setCheckedAll', checked: e.target.checked })} />
				전체
			</label>
			<BillList list={state.cartList} dispatch={dispatch} />
		</StyledList>
	);
}
