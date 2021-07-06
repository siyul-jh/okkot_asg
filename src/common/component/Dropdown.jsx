import React, { useContext } from 'react';
import styled from 'styled-components';
import useDropdown from '../../hooks/useDropdown';
import { CartDispatch } from '../../views/Cart/container';
import PropTypes from 'prop-types';
const S = {
	ToggleBg: styled.div`
		z-index: 0;
		position: fixed;
		right: 0px;
		bottom: 0px;
		top: 0px;
		left: 0px;
		background-color: #ffffff00;
		-webkit-tap-highlight-color: transparent;
	`,
	DownOutlined: styled.svg`
		width: 1em;
		height: 1em;
		display: inline-block;
		font-size: 1.5rem;
		flex-shrink: 0;
		user-select: none;
	`,
	Menu: styled.div`
		position: absolute;
		top: 42px;
		max-width: calc(100% - 32px);
		min-width: 300px;
		background-color: #fff;
		z-index: 1;
	`,
	MenuList: styled.ul`
		font-weight: 900;
		outline: 0;
		padding: 0;
		margin: 0;
		position: relative;
		list-style: none;
		border: 1px solid #424242;
	`,
	MenuListItem: styled.li`
		display: flex;
		padding: 0.5rem;
		justify-content: space-between;
		& span {
			font-size: 0.8rem;
			color: rgb(148, 148, 148);
		}
		&:not(:last-child) {
			border-bottom: 1px solid #424242;
		}
		&:hover {
			cursor: pointer;
			background-color: rgba(0, 0, 0, 0.16);
		}
	`,
	Dropdown: styled.div`
		cursor: pointer;
		position: relative;
		z-index: 1;
		width: 300px;
		&:hover {
			background-color: #eee;
		}
		&:active {
			background-color: #bbb;
		}
		.label-default {
			position: absolute;
			top: 12px;
			left: 10px;
		}
	`,
	DropdownList: styled.div`
		padding: 0.5rem;
		align-items: center;
		justify-content: space-between;
		display: flex;
		border: 1px solid #434343;
		& input {
			display: none;
		}
	`,
};
Dropdown.propTypes = {
	dataSource: PropTypes.array.isRequired,
};
export default function Dropdown({ dataSource }) {
	const dropdown = useDropdown();
	const { state, dispatch } = useContext(CartDispatch);
	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			{dropdown.menu && (
				<>
					<S.ToggleBg onClick={dropdown.toggle} />
					<S.Menu>
						<S.MenuList>
							{dataSource.map((item) => (
								<S.MenuListItem
									key={item.id}
									data-value={item.id}
									onClick={() => {
										dispatch({ type: 'setDropdown', delivery: item });
										dropdown.toggle();
									}}>
									{item.name} <span>{item.delivery_price.toLocaleString()}원</span>
								</S.MenuListItem>
							))}
						</S.MenuList>
					</S.Menu>
				</>
			)}
			<S.Dropdown onClick={dropdown.toggle}>
				{!state.delivery.id && <label className='label-default'>선택해주세요.</label>}
				<S.DropdownList>
					<div>{state.delivery.name}</div>
					<S.DownOutlined viewBox='0 0 122.88 66.91'>
						<g xmlns='http://www.w3.org/2000/svg'>
							<path d='M11.68,1.95C8.95-0.7,4.6-0.64,1.95,2.08c-2.65,2.72-2.59,7.08,0.13,9.73l54.79,53.13l4.8-4.93l-4.8,4.95 c2.74,2.65,7.1,2.58,9.75-0.15c0.08-0.08,0.15-0.16,0.22-0.24l53.95-52.76c2.73-2.65,2.79-7.01,0.14-9.73 c-2.65-2.72-7.01-2.79-9.73-0.13L61.65,50.41L11.68,1.95L11.68,1.95z' />
						</g>
					</S.DownOutlined>
				</S.DropdownList>
			</S.Dropdown>
		</div>
	);
}
