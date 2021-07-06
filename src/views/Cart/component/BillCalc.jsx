import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartDispatch } from '../container';

const Bill = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid #434343;
	padding: 1rem;
	& div {
		flex: 1;
	}
`;
export default function BillCalc() {
	const { state } = useContext(CartDispatch);
	const checkedList = state.cartList.filter((item) => item.checked);

	const checkedSum = checkedList.reduce((prev, curr) => {
		return prev + curr.count * curr.product_price;
	}, 0);
	const checkedCount = checkedList.reduce((prev, curr) => {
		return prev + curr.count;
	}, 0);
	return (
		<Bill>
			<div>총 상품 금액 :{checkedSum.toLocaleString()}원</div>
			<div>총 상품 수량 :{checkedCount}개</div>
			<div>총 배송비 :{state.delivery.delivery_price || 0}원</div>
			<div>총 결제하실 금액 : {(checkedSum + (state.delivery?.delivery_price || 0)).toLocaleString() || 0}원</div>
		</Bill>
	);
}
