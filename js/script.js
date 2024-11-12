// // 11월 12일 js 기초수업 README.md
// // console.log("안녕");

// /**
//  * 최신 문법 즉 ECMA Script로 적용하기
//  * var 를 사용하면 협업이 어렵다.
//  * 여러번 중복으로 동일한 이름으로 선언해도 오류가 없다.
//  * 이게 가장 큰 문제이다.
//  * 그래서 ECMA 에서는 let const 를 많이 사용함.
//  * let은 한번만 만들수 있고, 값 즉, 데이터는 여러번 변경 가능
//  * const 는 unique 한 값이다. 유일한 constant 다.
//  * let 처럼 한번만 만들 수 있다.
//  * let과 다르게 const는 변경불가한 요소 위주로.
//  */

// // 자리 좀 마련해줘 var 변수선언이다.
// // " " 쌍따옴표 치면 글자로 인식한다.
// let name;
// name = "홍길동";

// const juminNumber = "123456789";

// let telNumber;
// // 앞자리 0은 전부 0이라고 인식해서 글자""로 해줘야함
// telNumber = "01012345678";
// let address;
// address = "대구";
// var email;
// email = "a@a.net";
// var id;
// id = "aa";
// var password;
// password = "123456";
// var privacyPolice;
// privacyPolice = false;

// const MEMBER_SIGN_UP = "회원가입정보입력";

// 11월 12일 오후
// @start 인터파크 쇼핑몰 js 작업
// 인터파크 쇼핑몰 JS 작업

// @start 노가다 방식
// const 공연명 = ["로미오", "아이유", "노트담의"];
// const 공연일시 = ["11", "12", "13"];
// const 공연포스터 = ["a.jpg", "b.jpg", "c.jpg"];
// const 출연진_1 = ["a", "b", "c"];
// const 출연진_2 = ["d", "f", "g"];
// const 출연진_3 = ["a", "", "c"];
// const 공연가격 = [1000, 5000, 25000];
// const 예약자수 = [100, 50, 48];
// const 잔여석 = [false, false, true];
// @end 노가다 방식
//  이 방법 대신에

// @start 다른방식 3시수업
// const 로미오 = {
//   공연명: "로미오",
//   공연일시: "11",
//   출연진_1: "a",
//   출연진_2: "b",
//   출연진_3: "c",
//   공연가격: 1000,
//   예약자수: 100,
//   잔여석: false,
// };
// const 아이유 = {
//   공연명: "아이유",
//   공연일시: "12",
//   출연진_1: "a",
//   출연진_2: "b",
//   출연진_3: "c",
//   공연가격: 1000,
//   예약자수: 100,
//   잔여석: false,
// };
// const 노트담의 = {
//   공연명: "로미오",
//   공연일시: "11",
//   출연진_1: "a",
//   출연진_2: "b",
//   출연진_3: "c",
//   공연가격: 1000,
//   예약자수: 100,
//   잔여석: false,
// };

// const 공연 =[로미오, 아이유, 노트담의];
// @end 다른방식 3시수업

// @start 7. number 알아보기
// const num_1 = 5;
// const num_2 = 5.4;
// const num_3 = Infinity;
// const num_4 = -Infinity;
// const num_5 = NaN;
// console.log(typeof num_1);
// console.log(num_3);
// console.log(num_4);
// console.log(num_5);
// // @end 7. number 알아보기

// // @start 8. string 알아보기
// const str_1 = "안녕하세요.";
// const str_2 = "안";
// const str_3 = "반가워";

// const age = 10;
// const city = "대구"
// const message = '나는 ${}에 살고 ${}살입니다'
// console.log(typeof str_1);
// console.log(str_3);
// console.log(typeof str_3);
// console.log(message);
// // @end 8. string 알아보기

// @start 9.  # 9. boolean 알아보기

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
// @end 9.boolean 알아보기
