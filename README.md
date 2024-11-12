# JavaScript 기초

## 1. 기초상식

- HTML5 : 웹브라우저에 데이터를 보여주는 형식을 지정한 문법구조
- CSS3 : 데이터를 잘 보이기 위해서 꾸며주는 용도의 문법
- JavaScript

```
JavaScript 특징
- 프로그래밍 언어:
HTML과 CSS가 웹 페이지의 구조와 스타일을 정의한다면,
JavaScript는 페이지가 사용자와 상호작용할 수 있도록 해줍니다.

- 클라이언트-서버 양쪽에서 사용 가능:
주로 웹 브라우저에서 실행되지만, Node.js를 통해 서버에서도 사용할 수 있습니다.
```

```
1. 레이아웃 변경(CSS) :
- 인터렉티브(사용자 행동에 제어) 결과로 html, css로 변경
- css제어를 위한 추가 설명 : css 파일, emotion, tailwind, bootstrap 등등

2. HTML 변경 :
- 데이터를 호출하고 그 결과를 처리할 수 있다.
- html 제어를 위한 추가 설명 : innerHtml ===> 리액트에서는 JSX로 구현

3. 별첨 :
- html 제어하는 것이 아니고, Server, DB 를 다루는 javaScript 를 Node.js 라고 한다.

- js, jsx (javaScript XML)
```

-JSX와 JavaScript의 차이점

```
- 문법 차이:  JavaScript에서는 HTML 태그를 직접 사용할 수 없지만,
            JSX에서는 가능하며 class 대신 className을 사용합니다.
- 기능 차이:  JSX는 React 컴포넌트 안에서 UI 요소를 정의하는 데 사용되며,
            컴파일러가 JavaScript로 변환해 브라우저가 이해할 수 있도록 합니다.

요약
JavaScript는 웹의 동적 기능을 구현하는 범용 언어로,
React 등 다양한 프레임워크에서도 사용됩니다.
JSX는 React의 컴포넌트를 더 쉽게 작성할 수 있도록 도와주는 JavaScript 문법 확장입니다.

JSX 특징
- React의 구성 요소:
JSX는 JavaScript 코드 안에서 HTML과 유사한 문법을 사용해 컴포넌트 구조를 표현하는 데 사용됩니다.
- JavaScript와 HTML의 결합:
HTML 태그를 JavaScript 코드 안에서 사용하여, 컴포넌트 구조를 더 쉽게 시각화할 수 있습니다.
- 컴파일 필요:
JSX는 브라우저가 바로 실행할 수 없기 때문에 Babel과 같은 도구를 통해 JavaScript로 변환됩니다.
```

## 2. 웹브라우저용 javaScript

- 웹 브라우저에 js가 실행이 되는 것 테스트 하기
- (F12 개발자 도구 console 창 활용)
- 여러 줄 테스트 시 Shift + Enter를 활용

```
console.log("안녕")
```

## 3. html 문서에 js 활용하기

-index2.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>11월 12일 자바스크립트</title>
    <!-- 자바스크립트 실행하기 <script></script>  -->
    <script></script>
  </head>
  <body></body>
</html>
```

```html
 <title>11월 12일 자바스크립트</title>
    <!-- 자바스크립트 실행하기 <script></script>  -->
    <script>
        // 콘솔 확인하기
      console.log("안녕");
    </script>
  </head>

```

## 4. HTML과 js 구분하기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>11월 12일 자바스크립트</title>
    <!-- 자바스크립트 실행하기 <script></script>  -->
    <script src="script.js">

      //     <script src="script.js"> 입력시 밑에 작업
      //  console.log("안녕");
      //  에 대해서는 무시 되고 script.js 를 우선 실행한다.

          // 콘솔 확인하기
          console.log("안녕");
    </script>
  </head>
  <body></body>
</html>
```

## 5. 변수 알기 (html이 아닌 script.js 활용)

### 5.1 변수(Variable)란?

- 웹브라우저에 값, 즉 데이터를 임시로 보관한다.

### 5.2 변수 만드는 법

- 1단계

```
1. 무엇을 보관할 것인가?
: 사용자 정보를 보관하고 싶습니다. 웹브라우저에
- 이름
- 주민번호
- 전화번호
- 주소
- 이메일
- 아이디 / 비밀번호
- 개인정보동의
```

- 2단계

```
1. 각 항목에 보관할 내용(값, 데이터)에 대한 고민
- 이름 : 글자( 몇자까지 허용할까? )
- 주민번호 : 숫자 ( N자리, 숫자인지 글자인지 확실히 협의필요)
- 전화번호 : 숫자 ( N자리 )
- 주소 : 글자 (자릿수 알수없다. 백엔드와 협의)
- 이메일 : 글자
- 아이디 / 비밀번호 : 글자
- 개인정보동의 : 동의 또는 비동의
```

- 3단계 (script.js js 활용)

```js
1. 변수 선언
2. 값의 (=) 할당/대입/Assign
// 자리 좀 마련해줘 var 변수선언이다.
// " " 쌍따옴표 치면 글자로 인식한다.
var 이름;
이름 = "홍길동";

var 주민번호;
주민번호 = "123456789";
var 전화번호;
// 앞자리 0은 전부 0이라고 인식해서 글자""로 해줘야함
전화번호 = "01012345678";
var 주소;
주소 = "대구";
var 이메일;
이메일 = "a@a.net";
var 아이디;
아이디 = "aa";
var 비밀번호;
비밀번호 = "123456";
var 개인정보동의;
개인정보동의 = false;

```

- 4단계 (script.js js 활용)

```js
/**
 * 최신 문법 즉 ECMA Script로 적용하기
 * var 를 사용하면 협업이 어렵다.
 * 여러번 중복으로 동일한 이름으로 선언해도 오류가 없다.
 * 이게 가장 큰 문제이다.
 * 그래서 ECMA 에서는 let const 를 많이 사용함.
 * let은 한번만 만들수 있고, 값 즉, 데이터는 여러번 변경 가능
 * const 는 unique 한 값이다. 유일한 constant 다.
 * let 처럼 한번만 만들 수 있다.
 * let과 다르게 const는 변경불가한 요소 위주로.
 */
let 이름;
이름 = "홍길동";

const 주민번호 = "123456789";

let 전화번호;
전화번호 = "0000000000";

let 주소;
주소 = "대구";

let 이메일;
이메일 = "a@a.net";

let 아이디;
아이디 = "aa";

let 비밀번호;
비밀번호 = "123456";

let 개인정보동의;
개인정보동의 = false;

let 전화번호;
전화번호 = 1234560;
```

## 5.3. 변수명 잘 만들기 (명명법, 네이밍규칙(컨벤션) 적용하기)

1. 이름은 "명사 & 영어" 로 지어주세요.

```
1. 특수기호 중 첫글자, 변수명로 가능한 글자
    _(언더바) $(달러)
    const _
    const $

2. 숫자로 시작하는 변수명 불가능
    3_name (x불가능)
    _3name (0가능)
3. js 에서 사용하는 단어는 변수명 활용 불가(키워드).

    const if = "안녕" (불가능)
    const for = "안녕" (불가능)
    const var = "안녕" (불가능)

```

- 카멜케이스(CamelCase) 명명법 <가장 일반적>

```
변수명이 소문자로 무조건 시작해야 합니다.
연결되는 새로운 단어의 시작은 대문자로 시작합니다.

const name;
const nickname; (카멜케이스 x)
const nickName; (카멜케이스 o)
const userAddressName; (카멜케이스 o)
```

- 스네이크(snake) 명명법

```
변수이름을 모두 소문자로 작성하고, 단어마다 _를 작성
const nick_name;
const user_address_name;

```

- 케밥(kebab) 명명법

```
변수이름으로 사용할 수 없습니다.
js에서는 -를 뺄셈, 즉 연산자로 생각합니다.

const nick-name; (- 연산으로 생각, 오류)

예외적으로 Next.js 의 파일명에 파일이름 컨벤션에 주로 활용합니다.
```

- 파스칼(Pascal) 명명법

```
변수명의 첫글자를 모두 대문자로 작성하는 것만 카멜케이스와 다릅니다.
const Name;
const NickName;
const UserAddressName;

참고적으로 파스칼 케이스는 용도가 관례상 (문법과 상관없이) 지정된다.
프로그래머들 사이에 암묵적 관례를 지니고 있다.

첫글자가 대문자이면
- 객체명 아닐까?
- 객체를 만들어주는 객체 생성자 함수 이름이 아닐까?
- 객체를 생성하는 클래스 함수가 아닐까?
라고 유추를 자연스럽게 합니다.

```

- 상수 명명법

```
이런 규칙은 없습니다.
암묵적으로 상수를 만들때는 대문자만 씁니다.

const PI = 3.14;
const APP_NAME = "TODO";
```

## 6. 데이터 타입 알기

- 변수에 담을 수 있는 값(데이터)는 정해져 있어요.

```JS
const myAge = 값;
```

- 위의 코드를 읽어보겠습니다.
- 할당 / 대입 기호(=)를 기준으로 오른쪽 부터

```
오른쪽 부터 읽어야 한다.

숫자 값은 myAge에 담겨있다.
글자 값은 myAge에 담겨있다.

myage = 값 이다 라고 왼쪽부터 읽는것 아님.
값 이 중요한 것이지 myAge가 메인이 아님
```

### 6.1. 값으로 즉, 데이터로 인정받는 큰 2가지 분류

- 위 문장을 조금 더 정확하게 표현하면 Data Type 이라 함.
- 원시 타입(Primitive Type)**과 **참조 타입(Reference Type) 2가지 종류가 있습니다.

### 6.2. 원시 타입(Primitive Type)

- 기본 데이터 값의 종류
- 1. string : 글자, 문자열
- 2. number : 숫자
- 3. boolean : 논리적으로 true/false
- 4. undefined : 변수만들면 기본적으로 셋팅 되는 값

```
: 변수 만들면 기본적으로 셋팅 되는 값
: 값으로 아무것도 안 작성했어요. 하면 기본적으로 undefined 셋팅
```

- 5. null

```
개발자가 의도적으로 값이 없음을 표현하는 경우.
```

- 6. symbol

```
최신 ECMA Script 추가 데이터 타입
죽어도 겹치지 않는 변수명 및 변수값 보장
```

- 7.  레퍼런스 즉 '참조타입' 입니다.

### 6.3. 참조타입 (Resference Data Type)

- 기본활용하기 좋은 경우

```
원시값이 너무 많다. 그렇다면 묶어서 관리할까?
원시값이 서로 관련성이 있는 정보다. 그렇다면 묶어서 관리할까?
```

```js
// 인터파크 쇼핑몰 JS 작업
const 공연명 = "";
const 공연일시 = "";
const 공연포스터 = "";
const 출연진_1 = "";
const 출연진_2 = "";
const 출연진_3 = "";
const 공연가격 = "";
const 예약자수 = "";
const 잔여석 = "";

const 공연명2 = "";
const 공연2일시 = "";
const 공연2포스터 = "";
const 출연2진_1 = "";
const 출연2진_2 = "";
const 출연2진_3 = "";
const 공연2가격 = "";
const 예약2자수 = "";
const 잔여2석 = "";
```

```js
// 인터파크 쇼핑몰 JS 작업
const 공연명 = ["로미오", "아이유", "노트담의"];
const 공연일시 = ["11", "12", "13"];
const 공연포스터 = ["a.jpg", "b.jpg", "c.jpg"];
const 출연진_1 = ["a", "b", "c"];
const 출연진_2 = ["d", "f", "g"];
const 출연진_3 = ["a", "", "c"];
const 공연가격 = [1000, 5000, 25000];
const 예약자수 = [100, 50, 48];
const 잔여석 = [false, false, true];
```

```js
// @start 다른방식 3시수업

const 로미오 = {
  공연명: "로미오",
  공연일시: "11",
  출연진_1: "a",
  출연진_2: "b",
  출연진_3: "c",
  공연가격: 1000,
  예약자수: 100,
  잔여석: false,
};
const 아이유 = {
  공연명: "아이유",
  공연일시: "12",
  출연진_1: "a",
  출연진_2: "b",
  출연진_3: "c",
  공연가격: 1000,
  예약자수: 100,
  잔여석: false,
};
const 노트담의 = {
  공연명: "로미오",
  공연일시: "11",
  출연진_1: "a",
  출연진_2: "b",
  출연진_3: "c",
  공연가격: 1000,
  예약자수: 100,
  잔여석: false,
};

const 공연 = [로미오, 아이유, 노트담의];
// @end 다른방식 3시수업
```

- 배열
- 객체
- 함수

### 6.4. 호이스팅(hoisting)

- 코드의 작성 순서가 실행에 영향을 주는 것
- 면접 단골메뉴 -코드를 가장 상단으로 끌어 올려 줌.(자바스크립트의 엔진이..)

```
var, function 함수명() {}
위의 2가지는 hoisting 이 된다.
좋지않다. 라고 생각해서 권장하지 않아요.
```

## 7. number 알아보기

```js
const num_1 = 5;
const num_2 = 5.4;
const num_3 = Infinity;
const num_4 = -Infinity;
const num_5 = NaN;
console.log(typeof num_1);
console.log(num_3);
console.log(num_4);
console.log(num_5);
```

## 8. string 알아보기

```js
const str_1 = "안녕하세요.";
const str_2 = "안";
const str_3 = `반가워`;

const age = 10;
const city = "대구";
const message = `나는 ${city}에 살고 ${age}살입니다`;

console.log(typeof str_1);
console.log(str_3);
console.log(typeof str_3);
console.log(message);
```

## 9. boolean 알아보기

### 9.1 우리는 falshy 한 데이터를 알아야 합니다.

- truthy 참스러운 데이터..
- falshy 는 거짓스러운 데이터..
- 어떤 경우를 false로 판단하는가?

```
false
""
0
null
undefined
NaN

빼고 나머지는 다 true
```

```js
const isMember = false;
console.log(typeof isMember, isMember);

const isLogin = true;
console.log(typeof isLogin, isLogin);
// ============================================= //
const isNow = "12시";
console.log("12시", typeof isNow, isNow);

if (isNow) {
  console.log("true 입니다.");
} else {
  console.log("false 입니다.");
}

const isPlay = 100;
console.log(typeof isPlay, isPlay);

if (isPlay) {
  console.log("isPlay true 입니다.");
} else {
  console.log("isPlay false 입니다.");
}

const isPoint = 0;
console.log(typeof isPoint, isPoint);

if (isPoint) {
  console.log("isPoint true 입니다.");
} else {
  console.log("isPoint false 입니다.");
}

const isTeam = "";
console.log(typeof isTeam, isTeam);

if (isTeam) {
  console.log("isTeam true 입니다.");
} else {
  console.log("isTeam false 입니다.");
}

const isItems = [];
console.log(typeof isItems, isItems);
if (isItems) {
  console.log("isItems true 입니다.");
} else {
  console.log("isItems false 입니다.");
}

const isInfo = {};
console.log(typeof isInfo, isInfo);
if (isInfo) {
  console.log("isInfo true 입니다.");
} else {
  console.log("isInfo false 입니다.");
}

const isUn = undefined;
console.log(typeof isUn, isUn);
if (isUn) {
  console.log("isUn true 입니다.");
} else {
  console.log("isUn false 입니다.");
}

const isN = null;
console.log(typeof isN, isN);
if (isN) {
  console.log("isN true 입니다.");
} else {
  console.log("isN false 입니다.");
}
```
