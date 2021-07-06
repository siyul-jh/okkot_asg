import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const S = {
	Contents: styled.div`
		width: 900px;
		margin: auto;
		padding-left: calc(96px + env(safe-area-inset-left));
		padding-right: calc(96px + env(safe-area-inset-left));
	`,
	Header: styled.div`
		border-bottom: 1px solid #434343;
	`,
	Context: styled.div`
		h3 {
			text-align: center;
			padding-bottom: 1rem;
			border-bottom: 1px solid rgb(67 67 67 / 0.16);
		}
		div {
			line-height: 2rem;
		}
	`,
	ContextDay: styled.div`
		padding: 1rem;
		border: 1px solid rgb(67 67 67 / 0.16);
		&:not(:last-child) {
			border-bottom: none;
		}
	`,
	Code: styled.code`
		background-color: rgb(255 127 80 / 0.16);
		box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 0.4);
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		margin: 0 0.5rem;
	`,
	LinkBtn: styled(Link)`
		display: inline-block;
		text-decoration: none;
		font-weight: 900;
		padding: 1rem;
		color: #fff;
		background-color: #f88379;
	`,
};
function App() {
	return (
		<S.Contents>
			<S.Header>
				<h1>[FE] 오늘의꽃 사전과제</h1>
			</S.Header>
			<div>
				<p>2021년 7월 5일(월) 10시 과제 시작 (72시간)</p>
			</div>
			<S.Context>
				<S.ContextDay>
					<h3>- 2일 차 -</h3>
					<div>5. 컴포넌트 정리 및 렌더링 최적화</div>
					<div>
						4. <S.Code>useReduce</S.Code> 및 <S.Code>useContext</S.Code> hook을 사용하여 상태 관리
					</div>
				</S.ContextDay>
				<S.ContextDay>
					<h3>- 1일 차 -</h3>
					<div>3. Cart화면 요소 기능추가</div>
					<div>2. 기본 component 형태 및 Cart화면 UI 제작</div>
					<div>1. Initialize Project</div>
				</S.ContextDay>
			</S.Context>
			<div style={{ marginTop: '1rem', textAlign: 'center' }}>
				<S.LinkBtn to='/cart'>바로가기</S.LinkBtn>
			</div>
		</S.Contents>
	);
}

export default App;
