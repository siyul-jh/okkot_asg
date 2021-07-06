import React, { useReducer } from 'react';
import Dropdown from '../../../common/component/Dropdown';
import styled from 'styled-components';
import { cartLists, deliveryTypes } from '../../../common/data';
import BillCalc from '../component/BillCalc';
import Details from './Details';

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-shrink: 0;
	flex-grow: 0;
	.main {
		padding: calc(96px + env(safe-area-inset-left));
		max-width: 100%;
		width: 900px;
	}
	.menu {
		border-bottom: 1px solid #434343;
	}
	.btn-list {
		float: right;
		margin-top: 16px;
		& button {
			padding: 0.5rem 1rem;
			background-color: rgb(94, 94, 94);
			color: #ffffff;
			border: none;
			font-size: 18px;
			cursor: pointer;
		}
	}
`;
const INITIAL_STATE = {
	cartList: cartLists,
	delivery: {},
	checkedAll: false,
};
export const CartDispatch = React.createContext(null);
export default function Cart() {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	return (
		<Main>
			<div className='main'>
				<div className='menu'>
					<h1>장바구니</h1>
				</div>
				<div>
					<h4>주소</h4>
					<p>서울시 강남구 도산대로 174 7층</p>
				</div>
				<div>
					<h4>배송 방법</h4>
					<CartDispatch.Provider value={{ state, dispatch }}>
						<Dropdown dataSource={deliveryTypes} />
					</CartDispatch.Provider>
				</div>
				<div className='details'>
					<h4>상품 내역</h4>
					<CartDispatch.Provider value={{ state, dispatch }}>
						<Details />
					</CartDispatch.Provider>
				</div>
				{/* BillCalc 에는 Dropdown의 상태값과 BillList의 상태값이 필요함 */}
				<CartDispatch.Provider value={{ state, dispatch }}>
					<BillCalc />
				</CartDispatch.Provider>
				<div className='btn-list'>
					<button type='button' onClick={() => log(state)}>
						주문하기
					</button>
				</div>
			</div>
		</Main>
	);
}
function log(state) {
	let cartList = state.cartList.filter((item) => item.checked);
	let result = {
		productList: cartList.map((product) => {
			return {
				id: product.id,
				image_url: product.image_url,
				product_name: product.product_name,
				product_price: product.product_price,
				current_count: product.current_count,
				stock: product.stock,
			};
		}),
		deliveryType: state.delivery.name,
		totalCount: cartList.reduce((prev, curr) => {
			return prev + curr.count;
		}, 0),
		totalProductPrice: cartList.reduce((prev, curr) => {
			return prev + curr.count * curr.product_price;
		}, 0),
		deliveryPrice: state.delivery.delivery_price,
		totalPrice:
			cartList.reduce((prev, curr) => {
				return prev + curr.count * curr.product_price;
			}, 0) + state.delivery.delivery_price,
	};
	result.cartList = cartList;
	result.totalProductPrice = cartList.reduce((prev, curr) => {
		return prev + curr.count * curr.product_price;
	}, 0);
	result.deliveryType = state.delivery.name;
	if (result.length <= 0) {
		alert('상품을 선택해주세요.');
	} else if (!state.delivery) {
		alert('배송 방법을 선택해 주세요.');
	} else {
		console.log(result);
	}
}
function reducer(state, action) {
	switch (action.type) {
		case 'setDropdown':
			return { ...state, delivery: action.delivery };
		case 'setCount':
			const setCount = state.cartList.map((cart) => {
				if (cart.id === Number(action.count.id)) {
					return { ...cart, count: action.count.count };
				} else {
					return cart;
				}
			});
			return { ...state, cartList: setCount };
		case 'setChecked':
			const setChecked = state.cartList.map((cart) => {
				if (cart.id === Number(action.checked)) {
					return { ...cart, checked: !cart.checked && true };
				} else {
					return cart;
				}
			});
			const checkedAll = setChecked.every((item) => item.checked);
			return { ...state, cartList: setChecked, checkedAll: checkedAll };
		case 'setCheckedAll':
			const setCheckedAll = state.cartList.map((cart) => {
				return { ...cart, checked: action.checked };
			});
			return { ...state, cartList: setCheckedAll, checkedAll: action.checked };
		case 'setDelete':
			return { ...state, cartList: state.cartList.filter((item) => item.id !== Number(action.id)) };
		default:
			return state;
	}
}
