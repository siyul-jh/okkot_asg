import React from 'react';
import Counter from '../../common/component/Counter';
import Dropdown from '../../common/component/Dropdown';

import styled from 'styled-components';

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-shrink: 0;
	flex-grow: 0;
	.main {
		padding-top: calc(96px + env(safe-area-inset-left));
		padding-left: calc(96px + env(safe-area-inset-left));
		padding-right: calc(96px + env(safe-area-inset-right));
		max-width: 100%;
		width: 900px;
	}
	.menu {
		border-bottom: 1px solid #434343;
	}
	.details {
		& label {
			input[type='checkbox'] {
				margin-right: 16px;
			}
		}
		.list {
			margin: 1rem 0;
			border-top: 1px solid #434343;
			border-bottom: 1px solid #434343;
			.list-items {
				display: flex;
				align-items: center;
				position: relative;
				padding: 1rem;
				&:not(:last-child) {
					border-bottom: 1px solid #434343;
				}
				input[type='checkbox'] {
					width: 16px;
					margin-right: 16px;
					flex-shrink: 0;
				}
				img {
					width: 100px;
					height: 100px;
					margin-right: 16px;
				}
				& .title {
					flex: auto;
					text-align: center;
				}
				& .price {
					flex: auto;
					text-align: center;
				}
			}
		}
	}
	.all-items {
		display: flex;
		justify-content: space-between;
		border: 1px solid #434343;
		padding: 1rem;
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
		}
	}
`;
const Button = styled.button`
	&.btn {
		padding: 1rem;
		font-size: 1.2rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
		outline: none;
	}
`;

export default function Cart() {
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
					<Dropdown />
				</div>
				<div className='details'>
					<h4>상품 내역</h4>
					<label htmlFor='chk-all'>
						<input type='checkbox' id='chk-all' />
						전체
					</label>
					<div className='list'>
						<div className='list-items'>
							<input type='checkbox' />
							<img alt='img' src='https://picsum.photos/200/300' />
							<p className='title'>유칼립투스</p>
							<Counter />
							<p className='price'>48,000원</p>
							<Button type='button' className='btn btn-close'>
								<svg height='16px' viewBox='0 0 329.26933 329' width='16px' xmlns='http://www.w3.org/2000/svg'>
									<path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' />
								</svg>
							</Button>
						</div>
						<div className='list-items'>
							<input type='checkbox' />
							<img alt='img' src='https://picsum.photos/200/300' />
							<p className='title'>유칼립투스</p>
							<Counter />
							<p className='price'>48,000원</p>
							<Button type='button' className='btn btn-close'>
								<svg height='16px' viewBox='0 0 329.26933 329' width='16px' xmlns='http://www.w3.org/2000/svg'>
									<path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' />
								</svg>
							</Button>
						</div>
					</div>
				</div>
				<div className='all-items'>
					<div>총 상품 금액 :0원</div>
					<div>총 상품 수량 :0원</div>
					<div>총 배송비 :0원</div>
					<div>총 결제하실 금액 : 0원</div>
				</div>
				<div className='btn-list'>
					<button type='button'>주문하기</button>
				</div>
			</div>
		</Main>
	);
}
