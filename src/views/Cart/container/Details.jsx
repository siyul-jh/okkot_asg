import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartDispatch } from '.';
import BillList from '../component/BillList';

const S = {
	Input: styled.input`
		margin-right: 16px;
	`,
};

export default function Details() {
	const { state, dispatch } = useContext(CartDispatch);
	return (
		<>
			<label>
				<S.Input type='checkbox' defaultValue={state?.checkedAll || false} checked={state.checkedAll} onChange={(e) => dispatch({ type: 'setCheckedAll', checked: e.target.checked })} />
				전체
			</label>
			<BillList list={state.cartList} dispatch={dispatch} />
		</>
	);
}
