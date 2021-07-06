import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CartDispatch } from '.';

const S = {
	Bill: styled.div`
		display: flex;
		justify-content: space-between;
		border: 1px solid #434343;
		padding: 1rem;
	`,
	BillItem: styled.div`
		flex: 1;
	`,
};
export default function BillCalc() {
	const { state } = useContext(CartDispatch);
	const checkedList = state.cartList.filter((item) => item.checked);

	const checkedSum = checkedList.reduce((prev, curr) => {
		return prev + curr.count * curr.product_price;
	}, 0);
	const checkedCount = checkedList.reduce((prev, curr) => {
		return prev + curr.count;
	}, 0);
	useEffect(() => {
		if (checkedList.length > 0) {
			document.querySelectorAll('.product').forEach((item) => {
				fadeIn(item);
			});
			function fadeIn(target) {
				let level = 0;
				let inTimer = setInterval(function () {
					level = fadeInAction(target, level, inTimer);
				}, 50);
			}
			function fadeInAction(target, level, inTimer) {
				level = level + 0.1;
				target.style.opacity = level;
				if (level > 1) clearInterval(inTimer);
				return level;
			}
		}
	}, [checkedList]);
	useEffect(() => {
		fadeIn(document.querySelector('.delivery'));
		fadeIn(document.querySelectorAll('.product')[2]);

		function fadeIn(target) {
			let level = 0;
			let inTimer = setInterval(function () {
				level = fadeInAction(target, level, inTimer);
			}, 50);
		}
		function fadeInAction(target, level, inTimer) {
			level = level + 0.1;
			target.style.opacity = level;
			if (level > 1) clearInterval(inTimer);
			return level;
		}
	}, [state.delivery]);
	return (
		<S.Bill>
			<S.BillItem className='product'>총 상품 금액 :{checkedSum.toLocaleString()}원</S.BillItem>
			<S.BillItem className='product'>총 상품 수량 :{checkedCount}개</S.BillItem>
			<S.BillItem className='delivery'>총 배송비 :{state.delivery.delivery_price || 0}원</S.BillItem>
			<S.BillItem className='product'>총 결제하실 금액 : {(checkedSum + (state.delivery?.delivery_price || 0)).toLocaleString() || 0}원</S.BillItem>
		</S.Bill>
	);
}
