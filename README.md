# 오늘의 꽃 웹 개발자 채용과제

2021년 7월 5일(월) 10시 과제 시작 (72시간)

## 참고사항
### 개발관련
- `create react app`을 사용하여 프로젝트 구성
- `git`으로 형상관리
- `styled-components` 사용

## 조건 1
- `Dropdown`, `Counter`  컴포넌트
- `Dropdown`
  - 기본값은 '선택해주세요'
  - 클릭 했을 때 세 가지 선택지
    -  직접 배송: 판매자가 직접 배송 (3,000원)
    -  픽업: 정해진 시간에 픽업 (0원)
    -  택배 배송 (5,000원)
  -  셋 중 하나를 클릭 시 선택지가 닫히고 해당 텍스트가 기본값 대신 들어갑니다.
- `Counter`
  - `+` `-` 버튼과 값을 가지는 컴포넌트
  - 들어갈 수 있는 값은 1이상, 사용자가 지정한 `MAX` 값 이하 입니다.
  - 초기값도 사용자가 지정한 값이어야 합니다.
- 컴포넌트에서 사용될 상태는 모두 `hooks` 폴더로 분리해야한다.

## 조건 2
- 조건1에서 작성한 컴포넌트를 사용
- URL는 /cart로 진행
- 화면 명세서에 따라 작성
- 상태 변화에 따른 값은 `실시간`으로 반영
- `css` 및 아이콘은 자유롭게 사용
- 상품과 배송 가격 데이터가 서버에서 주어진다고 생각

## 라이브러리
``` bash
styled-components
react-router-dom
prop-types
```

## Issue
