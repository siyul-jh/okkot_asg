import React, { useState } from 'react';
import styled from 'styled-components';
const ChromaKey = styled.div`
	z-index: 0;
	position: fixed;
	right: 0px;
	bottom: 0px;
	top: 0px;
	left: 0px;
	background-color: #ffffff00;
	-webkit-tap-highlight-color: transparent;
`;
const DownOutlined = styled.svg`
	width: 1em;
	height: 1em;
	display: inline-block;
	font-size: 1.5rem;
	flex-shrink: 0;
	user-select: none;
`;
const Menu = styled.div`
	position: absolute;
	top: 42px;
	max-width: calc(100% - 32px);
	min-width: 300px;
	background-color: #fff;
	z-index: 1;
	ul {
		font-weight: 900;
		outline: 0;
		padding: 0;
		margin: 0;
		position: relative;
		list-style: none;
		border: 1px solid #424242;
		& li {
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
		}
	}
`;
const Select = styled.div`
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
	.select {
		padding: 0.5rem;
		align-items: center;
		justify-content: space-between;
		display: flex;
		border: 1px solid #434343;
		& input {
			display: none;
		}
	}
`;
export default function Dropdown() {
	const [menu, setMenu] = useState(false);
	const [selectText, setSelectText] = useState('');
	const [selectValue, setSelectValue] = useState('');
	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			{menu && (
				<>
					<ChromaKey onClick={() => setMenu(!menu)} />
					<Menu>
						<ul>
							<li
								data-value={1}
								onClick={(e) => {
									setSelectText(e.currentTarget.childNodes[0].textContent);
									setSelectValue(e.currentTarget.dataset.value);
									setMenu(!menu);
								}}>
								직접 배송: 판매자가 직접 배송 <span>3,000원</span>
							</li>
							<li
								data-value={2}
								onClick={(e) => {
									setSelectText(e.currentTarget.childNodes[0].textContent);
									setSelectValue(e.currentTarget.dataset.value);
									setMenu(!menu);
								}}>
								픽업: 정해진 시간에 픽업 <span>0원</span>
							</li>
							<li
								data-value={3}
								onClick={(e) => {
									setSelectText(e.currentTarget.childNodes[0].textContent);
									setSelectValue(e.currentTarget.dataset.value);
									setMenu(!menu);
								}}>
								택배 배송 <span>5,000원</span>
							</li>
						</ul>
					</Menu>
				</>
			)}
			<Select onClick={() => setMenu(!menu)}>
				{!selectText && <label className='label-default'>선택해주세요.</label>}
				<div className='select'>
					<div>{selectText}</div>
					<input readOnly value={selectValue} aria-hidden='true' />
					<DownOutlined viewBox='0 0 122.88 66.91'>
						<g xmlns='http://www.w3.org/2000/svg'>
							<path d='M11.68,1.95C8.95-0.7,4.6-0.64,1.95,2.08c-2.65,2.72-2.59,7.08,0.13,9.73l54.79,53.13l4.8-4.93l-4.8,4.95 c2.74,2.65,7.1,2.58,9.75-0.15c0.08-0.08,0.15-0.16,0.22-0.24l53.95-52.76c2.73-2.65,2.79-7.01,0.14-9.73 c-2.65-2.72-7.01-2.79-9.73-0.13L61.65,50.41L11.68,1.95L11.68,1.95z' />
						</g>
					</DownOutlined>
				</div>
			</Select>
		</div>
	);
}
