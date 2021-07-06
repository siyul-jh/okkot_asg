import React from 'react';
import styled from 'styled-components';
import Counter from '../../../common/component/Counter';
import PropTypes from 'prop-types';
const S = {
	List: styled.div`
		margin: 1rem 0;
		border-top: 1px solid #434343;
		border-bottom: 1px solid #434343;
	`,
	ListItem: styled.div`
		display: flex;
		align-items: center;
		position: relative;
		padding: 1rem;
		animation: fadein 2s;
		&:not(:last-child) {
			border-bottom: 1px solid #434343;
		}
		@keyframes fadein {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	`,
	Input: styled.input`
		width: 16px;
		margin-right: 16px;
		flex-shrink: 0;
	`,
	Img: styled.img`
		width: 100px;
		height: 100px;
		margin-right: 16px;
	`,
	Title: styled.div`
		flex: auto;
		text-align: center;
	`,
	Price: styled.div`
		width: 200px;
		text-align: center;
	`,
	Button: styled.button`
		padding: 1rem;
		font-size: 1.2rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
		outline: none;
	`,
	Alert: styled.div`
		padding: 1rem;
		text-align: center;
		font-size: 1.2rem;
		font-weight: 900;
		color: #f88379;
	`,
};
BillList.propTypes = {
	list: PropTypes.array.isRequired,
	dispatch: PropTypes.func,
};
export default function BillList({ list, dispatch }) {
	return (
		<S.List>
			{list.map((item) => (
				<S.ListItem key={item.id}>
					<S.Input
						type='checkbox'
						data-id={item.id}
						defaultValue={item?.checked || ''}
						checked={item?.checked || false}
						onChange={(e) => dispatch({ type: 'setChecked', checked: e.currentTarget.dataset.id })}
					/>
					<S.Img alt={item.product_name} src={item.image_url} />
					<S.Title>{item.product_name}</S.Title>
					<Counter currentCount={item} />
					<S.Price>{item.product_price.toLocaleString()}원</S.Price>
					<S.Button type='button' data-id={item.id} onClick={(e) => dispatch({ type: 'setDelete', id: e.currentTarget.dataset.id })}>
						<svg height='16px' viewBox='0 0 329.26933 329' width='16px' xmlns='http://www.w3.org/2000/svg'>
							<path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' />
						</svg>
					</S.Button>
				</S.ListItem>
			))}
			{!list.length && <S.Alert>장바구니가 비었습니다.</S.Alert>}
		</S.List>
	);
}
