# javaScript 기초

<!-- 11월 14일(목) -->

## 1. 함수

### 1.1. 함수를 만들 시점

#### 1.1.1. 코드가 너무 긴 경우(한개의 결과를 만들기 위해서)

- 코드 가독성이 너무 떨어진다고 판단시
- 하나의 과정을 작성하기 위해서 너무 많은 코드가 작성된 경우
- 여러 줄이 작성되어서 한개의 결과를 만든다면 함수로 묶어줄 고민

#### 1.1.2. 동일한 기능이 여러 번 사용될때

- 2번이상 동일한 기능이라면 함수를 만들까?
- 2번이상 동일한 기능인데 재료만 다르다? 그러면 함수만들까?

#### 1.1.3. 코드를 누군가에게 주어야 한다면

- 코드를 공유할 때 함수를 만들까?

### 1.2. 함수를 만드는 방법

- {} 즉, 코드블럭을 이용해서 코드를 묶어준다.
- 이름을 지어준다. 이때 이름은 `동사`로 정한다.
- 이름 뒤에 `()` 를 붙인다.
- JS 를 위해서 `function` 이라고 적는다.
- 재료가 필요하면 `(매개 변수, 매개 변수)` 로 전달한다.
- 재료가 필요하면 `(파라메터, 파라메터)` 로 전달한다.
- 재료가 필요하면 `(parameter, parameter)` 로 전달한다.
- 함수를 만들때는 `JS Doc` 을 작성해주는 센스 (아주 고평가)

### 1.3. 함수 사용법

- `함수명()`
- 호출, 실행, Call 한다.

### 1.4. 샘플코드

````JS
// 너비와 높이를 이용해서 면적계산하기
/**
 * 너비 높이 값을 이용한 면적 계산 함수
 * @param {number} _width
 * @param {number} _height
 * @returns {number}
 * --- 함수 사용 예제 ---
 * ```javascript
 *  calcRect(100, 30)
 * ```
 */

function calcRect(_width, _height) {
  const width = _width;
  const height = _height;
  const result = width * height;
  // 함수 실행 결과를 돌려준다.
  // return 함수 종료
  return result;
}

const noew = calcRect(400, 50);
console.log(now);
````

## 2. 화살표 함수 ( Arrow Function )

### 2.1. 화살표 함수가 필요한 이유

- 함수가 간략화 됩니다.
- 함수가 최적화 즉, Arguments 를 사용할 수 없도록 최적화 됨. (메모리 절약, 성능 최적화)
- this 의 값 고정 ( 그때 그때 다르지 않고 늘 한결같이 같다.)
- new 를 사용못합니다.

### 2.2. 화살표 함수 만들기

- 화살표 함수는 변수 만들듯이 생성한다.
- const 를 활용한다.
- 이름을 `동사`로 만든다.
- `값으로 함수`를 작성한다.
- 함수는 `익명함수`(이름삭제)로 한다.
- `function 을 없애고` 화살표로 표현한다.

```JS
// 이름 calcRect 를 제거 하고, function도 제거, => { 앞에  로 대체
// const calcRectArrow = function calcRect(_width, _height) {
const calcRectArrow = (_width, _height) => {
  const width = _width;
  const height = _height;
  const result = width * height;
  // 함수 실행 결과를 돌려준다.
  // return 함수 종료
  return result;
};
```

### 2.3. 화살표 함수 사용하기

- `이름()` 붙이면 실행됨.
- 주의 사항은 `호이스팅이 안된다.`

### 2.4. 여러가지 화살표 함수의 예

```JS
// 11월 14일(목) 수업

function say() {
  console.log("안녕");
}
// const sayArrow = function say(){
const sayArrow = () => {
  console.log("안녕");
};

// 파라메터가 1개 있는 경우 (word)에 () 생략 가능
function sayWord(word) {
  console.log(word);
}
// const sayWordArrow = function sayWord(word) {
const sayWordArrow = (word) => {
  console.log(word);
};
// end

// 파라메터가 2개 있는 경우  () 생략불가능 필수 입력
function sayWordText(word, text) {
  console.log(word, text);
}
// const sayWordTextArrow = function sayWordText(word, text) {
const sayWordTextArrow = (word, text) => {
  console.log(word, text);
};
// end

//  파라메터가 없고 함수 결과를 리턴하지 않는 경우
function noReturn() {}
// const noReturnArrow = function noReturn() {}
const noReturnArrow = () => {};

//  파라메터가 없고 함수 결과를 리턴하는 경우
function yesReturn() {
  return 1;
}

// const yesReturnArrow = function yesReturn() {
//   return 1;
const yesReturnArrow = () => {
  return 1;
};
// return 코드에 딱 1줄 코딩 작성된 경우 {}중괄호 생략가능
const yesReturnArrow = () => 1;
// { return }; 생략 가능
// return 샘플 코드 1줄 짜리 예제
const isLogin = true; // 로그인 상태를 지정함.

// if 문 여러 줄 코드
const userLogin = () => {
  if (isLogin === true) {
    return "로그인";
  } else {
    return "로그아웃";
  }
};
// 3항 연산자 ( 중괄호 생략 가능, 1줄이라서, return 도 있어서..)
const userLoginArrow = () => {
  return isLogin ? "로그인" : "로그아웃";
};
const userLoginArrowReturn = () => (isLogin ? "로그인" : "로그아웃");

// 3배를 계산한다.
const num = 1;
const countThriple = (_num) => _num * 3;
const result = countThriple(num);
console.log(result);

// 다음은 정말 조심하셔야 합니다.
// 파라메터가 {} 형태라면 반드시 () 필수로 감싸줘야 합니다.
const parseJsonArrow = () => {
  console.log("실행");
};

```

## 3. 변수 및 함수의 접근가능 유효 범위 (Scope)

- 제일 중요한 것이 `{}중괄호` 코드 블럭의 이해

### 3.1. Scope 의 종류

- 전체 영역 : 전역 스코프(global scope)
- 특정 영역 : 지역 스코프(local scope)

### 3.2. 전역 스코프(global scope)

- 프로그램 어디서든 마음대로 사용하세요.
- 변수 든, 함수 든 마음대로 사용하세요.

```JS
function say() {
  console.log("안녕");
}
const sayArrow = () => {
  console.log("반가워");
};

//
say();
sayArrow();

{
  say();
sayArrow();
}
// 스코프 관점에서 보면 {}중괄호만 보면 된다.
// 앞에 function showHi() 있더라도
// 제일 중요한건 {}중괄호 안이다.
// 전역 스코프는 전부 다 가능하다 의미함.
function showHi(){
  say();
sayArrow();
}
showHi();

```

### 3.3. 지역 스코프(local scope)

- `특정 {}` 안에서만 사용한다.

```JS

// 지역 스코프 생성
{
  const age = 10;
}
console.log(age);
// {}중괄호안에 있는 애만 다른 명령어 없이 {}안을 출력 할 수없다.

// @start 지역 함수 Scope 생성
{
  // function에 대해서 호이스팅되어서 hi 안녕 백엔드 출력된다.
  function hi() {
    console.log("안녕 백엔드?");
  }
}
hi();
// 지역 Scope 화살표 함수 생성
{
  const go = () => {
    console.log("가자");
  };
}

go();
// Arrow => 는 호이스팅 안되어서 go 가자 는출력 안됨.
// @end 지역 함수 Scope 생성

```

- function 함수(){ 지역 스코프 }

```JS
// 함수 안에 만들어진 함수의 scope의 고민
function 외부함수() {
  function 내부함수() {
    console.log("내부함수");
  }
  const 화살표함수 = () => {
    console.log("화살표 함수");
  };
  내부함수();
  화살표함수();
}

외부함수();
// 외부함수는 정상적으로 {}안에 있는 내용물이 출력됨.

내부함수();
화살표함수();
// 출력안됨 function 안에 function은 지역스코프로 출력할 수 없다.

```

### 3.4 this 요놈.. 오류의 원인이 될 수 있다.

- 글로벌 스코프의 this 는 웹브라우저 상에서는 window를 가르킵니다.

```JS
console.log("글로벌 this : ", this); // window

```

- 화살표 함수 안쪽의 this 는 window 가 아닐 수 있다.
- 일반함수 안쪽의 this 는 window 가 아닐 수 있다.

<!-- 11.15(금) 오전수업-->

#### 3.4.1. 글로벌 스코프의 this 는 window

```js
console.log("글로벌 this : ", this); // window
```

#### 3.4.2. 화살표 함수 안쪽의 this 는 window 가 아닐 수 있다.

- 글로벌 스코프에 생성된 화살표 함수의 `this` 는 `window`
- `this로 변수를 참조하면 안된다.` 이유는 window를 참조하므로
- 화살표에서는 this 쓰지말자.

```js
const go = () => {
  const age = 10;
  console.log("화살표 this : ", this); // window
  console.log("화살표 age : ", age); // 지역변수
  console.log("화살표 this.age : ", this.age); //전역변수 age
};
```

- `객체`라는 곳에 기능(함수) 즉, `메서드`에 만약 `화살표`로 `this` 를 쓴다면 `window`
- 글로벌 스코프에 생성된 화살표 함수의 `this` 는 `window`
- `this로 변수를 참조하면 안된다.` 이유는 window를 참조하므로
- 화살표에서는 this 쓰지말자.

```js
// 기본 데이터를 묶어서 {} 안에 모아서 관리 할 수 없을까?
// Object 제 7의 데이터 종류
const Person = {
  username: "홍길동", // 속성 (Property)
  age: 20, // 속성 (Property)
  korean: true, // 속성 (Property)
  say: () => {
    console.log("안녕", this);
    console.log("안녕", this.username);
    // 글로벌에 없으므로 this.username, age, korean 안 나와야 정상이다.
    console.log("안녕", this.age);
    console.log("안녕", this.korean);
  }, // 행동. 기능 (Method)
  cry: () => {
    console.log("ㅠㅠ", this);
  }, // 행동, 기능(Method)
};

console.log(Person.name);
console.log(Person["name"]);
Person.say();
```

- 일반 함수 안쪽에 화살표 함수를 중첩해서 사용시 this 는
- `비동기 함수`에서의 `화살표 함수`의 `this` 는 `window`
- `this로 변수를 참조하면 안된다.` 이유는 window를 참조하므로
- 화살표에서는 this 쓰지말자.

```js
//  시간이 오래 걸리는 작업을 가지고 테스트
function Timer() {
  let count = 0;
  // 타이머 함수를 이용해서 오래걸리도록 샘플
  // 기본 웹브라우저에 내장 되어 있는 즉, 빌트인 이 되어 있는 함수
  // setInterval(함수, 간격);
  setInterval(() => {
    this.count++; // 오류 ...  undefined  + 1
    console.log("안녕 : ", this);
    console.log("안녕 : ", this.count); // NaN 이 계속 나와요.
  }, 1000);
}

Timer();
```

- 클래스의 메서드 , 즉 클래스에 화살표 메서드를 사용시 this 는
  `window 말고 instance`를 가르킴
- this는 클래스의 `복제본(instance)`을 가르킨다.

```js
class Student {
  // new Student() 실행시 자동실행
  // 객체를 생성하는 함수 : 기본 생성자 함수
  constructor() {
    console.log("학생 한 객체를 만들어요.");
  }

  count = 1;

  say = () => {
    console.log("클래스로 만들어진 instance: ", this);

    console.log("클래스로 만들어진 instance.count: ", this.count);
  };
  // this 는 class Student 가 표시된다.
}

const st = new Student();
st.say();
```

#### 3.4.3 일반함수 안쪽의 this 는 window 가 아닐 수 있다.

- 글로벌 영역의 `function` 의 `this` 는 `window`

```js
function go() {
  const age = 10;
  console.log("화살표 this : ", this); // window
  console.log("화살표 age : ", age); // 지역변수
  console.log("화살표 this.age : ", this.age); // 전역변수 age undefined
}

go();
```

- `객체`라는 곳에 기능(함수) 즉, `메서드`에 만약 `function`로 `this` 를 쓴다면 `window 일까??` -`this`를 쓴다면 `자기자신을 가르킨다. 화살표와 다르다.`

```js
// 기본 데이터를 묶어서 {} 안에 모아서 관리 할 수 없을까?
// Object 제 7의 데이터 종류
const Person = {
  userName: "홍길동", // 속성 (Property)
  age: 20, // 속성 (Property)
  korean: true, // 속성 (Property)
  say: function () {
    console.log("안녕", this);
    console.log("안녕", this.userName);
    console.log("안녕", this.age);
    console.log("안녕", this.korean);
  }, // 행동. 기능 (Method)
  cry: function () {
    console.log("ㅠㅠ", this);
  }, // 행동, 기능(Method)
};

console.log(Person.userName);
console.log(Person["userName"]);
Person.say();
```

- `비동기 함수`에서의 `function`의 `this` 는 `window`
- 누가 함수를 call 했는가가 중요해요.

```js
//  시간이 오래 걸리는 작업을 가지고 테스트
function Timer() {
  setInterval(function () {
    // 함수를 실행하는 주인은 window 라서.
    console.log("안녕 : ", this);
  }, 1000);
}

Timer();
```

- 클래스의 메서드, 즉 클래스에 화살표 메서드를 사용시 this 는 `window 말고 instance`를 가르킴
- this는 클래스의 `복제본(instance)`을 가르킨다.

<!-- 11월 15일(금) 오후수업 -->

## 4. 콜백함수(callback Function)

- 함수(일반/화살표) 를 파라메터로 전달하는 것
- 파라메터의 값으로 전달되는 함수를 말함.
- 비동기 즉, 서버 연동(Request, Response) 후에 함수실행
- 이벤트 기반 함수 실행(클릭했을때, Html이 완성 되었을 때) 후에 함수실행

### 4.1 아래 모두 동일합니다.

-가능하면 마지막 방식으로 한다.

```js
//  @start 콜백함수case#1
function run(함수) {
  함수();
}

const say = () => {
  console.log("say");
};
const cry = () => {
  console.log("ㅠㅠ");
};

run(say);
run(눈물);

window.addEventListener("", function () {});
// @end콜백함수 case#1

// @start 콜백함수case#2
function run(함수) {
  함수();
}

run(function () {
  console.log("say");
});

run(function () {
  console.log("ㅠㅠ");
});

window.addEventListener("", function () {});

// @end 콜백함수case#2

// @start 콜백함수case#3

function run(함수) {
  함수();
}

run(() => {
  console.log("say");
});

run(() => {
  console.log("ㅠㅠ");
});

window.addEventListener("", function () {});
// @end 콜백함수case#3
```

<!-- 11월 15일 오후수업 콜백함수 끝 -->
