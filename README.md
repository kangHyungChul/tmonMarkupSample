# tmon 마크업 샘플


## 강형철
- 연락처 : 010.6546.1769
- 이메일 : chul62@naver.com


## 작업환경
- node version - 18.12.0
- npm version - 8.19.2
- build tool - webpack
- css preprocessor - scss


## 구성

### 뷰페이지
### 웹팩 빌드용 html파일과 js파일을 페이지마다 폴더로 구성하여 정리
#### 구독신청 페이지
- 뷰페이지 : /src/view/order
- css파일 : /asset/css/order.scss
#### 구독동의 페이지
- 뷰페이지 : /src/view/agree
- css파일 : /asset/css/agree.scss
#### 결제카드 등록 / 제휴카드 발급
- 뷰페이지 : /src/view/card
- css파일 : /asset/css/card.scss
#### 결제카드 등록 (모달)
- 뷰페이지 : /src/view/cpc
- css파일 : /asset/css/card.scss
#### 완료페이지
- 뷰페이지 : /src/view/complete
- css파일 : /asset/css/complete.scss

### 공용 css파일
- _default.scss : 통합 import용 파일
- _util.scss : scss공용함수 파일
- _reset.scss : 사이트 reset파일
- _layout.scss : 전체적인 공통 레이아웃 (header, 공용버튼 등)
- _modal.scss : modal컨텐츠 파일

### js파일
- modal.js : 모달용 스크립트 파일
- util.js : 동의체크, txt불러오기, 탭기능 등 공용사용 스크립트 파일


## 주로 고민한것
- 레이아웃 목적에 따른 올바른 마크업
- js 작성 시 재활용이 가능하도록 모듈화 하기
- 모달 작업 시 확인/취소 버튼에 따라 콜백처리 구상
- css 작성 시 공통요소 체크하여 변수처리
- 용도에 따라 cs 파일 분리하기
