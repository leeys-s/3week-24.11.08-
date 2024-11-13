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

// const isMember = false;
// console.log(typeof isMember, isMember);

// const isLogin = true;
// console.log(typeof isLogin, isLogin);
// // ============================================= //
// const isNow = "12시";
// console.log("12시", typeof isNow, isNow);

// if (isNow) {
//   console.log("true 입니다.");
// } else {
//   console.log("false 입니다.");
// }

// const isPlay = 100;
// console.log(typeof isPlay, isPlay);

// if (isPlay) {
//   console.log("isPlay true 입니다.");
// } else {
//   console.log("isPlay false 입니다.");
// }

// const isPoint = 0;
// console.log(typeof isPoint, isPoint);

// if (isPoint) {
//   console.log("isPoint true 입니다.");
// } else {
//   console.log("isPoint false 입니다.");
// }

// const isTeam = "";
// console.log(typeof isTeam, isTeam);

// if (isTeam) {
//   console.log("isTeam true 입니다.");
// } else {
//   console.log("isTeam false 입니다.");
// }

// const isItems = [];
// console.log(typeof isItems, isItems);
// if (isItems) {
//   console.log("isItems true 입니다.");
// } else {
//   console.log("isItems false 입니다.");
// }

// const isInfo = {};
// console.log(typeof isInfo, isInfo);
// if (isInfo) {
//   console.log("isInfo true 입니다.");
// } else {
//   console.log("isInfo false 입니다.");
// }

// const isUn = undefined;
// console.log(typeof isUn, isUn);
// if (isUn) {
//   console.log("isUn true 입니다.");
// } else {
//   console.log("isUn false 입니다.");
// }

// const isN = null;
// console.log(typeof isN, isN);
// // if (isN) {
// //   console.log("isN true 입니다.");
// // } else {
// //   console.log("isN false 입니다.");
// // }
// // @end 9.boolean 알아보기

// // @start 10. null 알아보기
// // 회원정보가 없다. (비어있다. 청소대상)
// // 개발자가 직접 표현
// const memberInfo = null;
// // memberInfo 는 falshy 라서 거짓
// if(memberInfo) {
//   console.log("있어요.")
// }else{
//   console.log("없어요.")
// }
// // @end 10. null 알아보기

// // @start 11. undifined 알아보기
// // 회원정보 값을 안 담았다.
// let isLogin; // undefined

// // isLogin 는 falshy 라서 거짓
// if(isLogin) {
//   console.log("있어요.")
// }else{
//   // 실행이 됨.
//   console.log("없어요.")
// }
// // @end  11. undifined 알아보기

// // @start 12

// ## 12. symbol 알아보기
// - unique 한 값
// - 교재 참조.
// // @end

// // @start 13

// # 13. 기본형 데이터 정리

// const str = "안녕";
// const strName = `홍길동 ${str} 하세요.`

// const num = 1;
// const numNan = NaN; // 숫자 아니다.

// const isLogin = false;

// const member = null;

// let isPoint = undefined;

// @end

// @start 2. 암묵적(묵시적) 데이터 변환

// const num = 100;
// console.log(typeof num, num); // number

// const point = "50";
// console.log(typeof point, point); // string

// const total = num + point;
// // 프로그래머는  100   +   "50" ===> 150 ?
// // 프로그래머는  100   +   "50" ===> 10050 ?
// console.log(typeof total, total); // 묵시적으로 종류결정

// const minus = num - point;
// // 프로그래머는  100  -   "50" ===> 50 ?
// // 프로그래머는  100   -   "50" ===> ????
// console.log(typeof minus, minus); // 묵시적으로 종류결정

// // @end 2. 암묵적(묵시적) 데이터 변환

// // @start 3. 명시적 데이터형을 지정함.

// const num = 100;
// console.log(typeof num, num); // number

// const point = "50";
// console.log(typeof point, point); // string

// const total = num + Number(point); // 명시적으로 종류결정
// console.log(typeof total, total); //

// const minus = num - Number(point);
// console.log(typeof minus, minus); // 묵시적으로 종류결정

// // @end 3. 명시적 데이터형을 지정함.

// // @start 4. 연산

// const num_1 = 500;
// const num_2 = 50;
// const total = num_1 + num_2;

// // 글자 + 글자 =
// const str_1 = "안녕"
// const str_2 = "반가워";
// const result = str_1 + str_2;
// const num_3 = 200;
// const str_3 = "점이야";
// const result_str_num = num_3 + str_3;

// // - 뺄셈
// const m_1 = 500;
// const m_2 = 1000;
// const m_result = m_1 - m_2;

// // 숫자 - 글자 ( 몰래 숫자로 변경 ) = 결과 NaN 이 나온다
// const m_3 = 500;
// const m_4 = "안녕";
// const m_result_n_s = m_3 - m_4;
// // = NaN 나온다.

// const m_5 = "500";
// const m_6 = "1000";
// const m_result_n_s = m_5 - m_6;
// // = js가 자동변환해서 - 500 이 나온다.

// //  * 곱셈
// const multi_1 = 5;
// const multi_2 = 3;
// const multi_result_1 = multi_1 * multi_2;
// // 값을 숫자로 바꾸어 보고 결과 출력 (NaN)
// const multi_3 = 5;
// const multi_4 = "안녕";
// const multi_result_2 = multi_3 * multi_4;

// //  / 나눗셈
// const div_1 = 5;
// const div_2 = 3;
// const div_result_1 = div_1 / div_2;
// // 값을 숫자로 바꾸어 보고 결과 출력 (NaN)
// const div_3 = 5;
// const div_4 = "안녕";
// const div_result_2 = div_3 / div_4;

// const div_5 = 5;
// const div_6 = 0;
// const div_result_3 = div_5 / div_6;
// // = Infinity 나옴

// // % 나머지
// const totalReview = 32:
// const pageReview = 5;
// const totalResult = totalReview % pageReview;
// // 나머지 2 나옴
// // 몇 페이지가 나올 것이며

// const totalReview = 32:
// const pageReview = 0;
// const totalResult = totalReview % pageReview;
// //  NaN 나옴

// // ### 4.2. @start복합연산자
// // <!-- 연산자 오른쪽 부터 읽는다 -->
// // ( += -= /= *= %=  연산부터 하고 = 값을 담아라 의미)
// let num_1 = 500;
// num_1 = (num_1 + 5);
// // 위에 두줄은 한줄로 += 로 표현한 것n
// um_1 += 5;

// let num_1 = 500;
// num_1 = (num_1 - 5);
// num_1 -= 5;

// let num_1 = 500;
// num_1 = (num_1 * 5);
// num_1 *= 5;

// let num_1 = 500;
// num_1 = (num_1 / 5);
// num_1 /= 5;

// let num_1 = 500;
// num_1 = (num_1 / 5);
// num_1 %= 5;

// // ### 4.2. @end복합연산자

//@start ### 4.3. 증가 감소 연산자 (++ --)

// 반복문 할 때 쓰이는 것
// let num_1 = 500;
// num_1++;
// // 1씩 증가
// num_1--;
// //  1씩 감소

// //@end ### 4.3. 증가 감소 연산자 (++ --)

// //@start 4.4. 논리연산자

// let gender = true;
// let isMember = false;

// // 또는 연산자 ( or 연산자 )
// // OR은 하나라도 참이면 참을 반환 한다.
// let result = true || true; // true

// result = false || true; // true

// result = false || false; // false

// result = "<div>hello</div>" || false; // <div>hello</div>
// // "" 사이에 빈 것이 아니니깐 true 임 falshy 한 애가 아님.

// // 그리고 연산자 ( AND 연산자 )
// // AND는 모든 값이 참일 때만 true 를 반환 한다.
// let result = true && true; // true

// result = false && true; // false
// // (and 는 앞에 값 우선 취하므로 뒤에 true 신경도 안쓴다.)

// result = true || false; // false
// //  얘가 제일 많이 쓰임. true 가 로그인이고, false 가 화면출력 느낌임.
// //

// //  Not 연산자
// result = !true; // false
// result = !false; // true

// //@end 4.4. 논리연산자

// //@start  ### 4.5 비교연산자
// // 또는 연산자 ( OR 연산자 )
// let result = 1 == "1"; // true
// // 데이터 타입도 필수로 체크 해야 합니다.
// result = 1 === "1"; // false

// result = 1 != "1"; // false

// result = 1 !== "1"; // true
// // 1과 "1"은 종류(타입)가 !다르지? 에 대한 참 true 의미

// esult = 1 > 1; // false
// result = 1 < 1; // false
// result = 1 >= 1; // true
// result = 1 <= 1; // true
//@end ### 4.5 비교연산자

// //@start ### 4.6. 병합 연산자
// let userName = null;
// let displayName = userName;
// if (userName) {
//   displayName = userName;
// } else {
//   displayName = "Guest";
// }
// // 위 코드 에서 ?? 활용
// let userName = null;
// let displayName = userName ?? "Guest";
// console.log("displayName : ", displayName);

// // 아래는 주의하세요.
// let age = 0;
// let displayAge = age ?? 15;
// console.log("displayAge : ", displayAge);

// //@end ### 4.6. 병합 연산자

// //@start ### 4.7. 삼항 연산자
// // 삼항 연산자
// //  결과 = 조건  ?   참결과    :    거짓결과

// let age = 10;
// let result = age > 18 ? console.log("회원가입") : console.log("부모동의필요");

// // if(result) {
// //   console.log("회원가입")
// // }else{
// //   console.log("부모동의필요")
// // }

// const userRole = "ADMIN";
// const url = userRole === "ADMIN" ? "admin.html" : "member.html";

// //@end ### 4.7. 삼항 연산자

// // @end 4. 연산

// // @start 5. 조건문 (condition)

// @start 5.1 if문 조건문 (condition)
// const age = 15;
// if (age > 18) {
//   console.log("부모님 동의 필요해요.");
// }

// //  이렇게 해도 됩니다.
// if (age > 18) console.log("성인 이시군요.");

// const user = "hong"
// if(user) return "로그인하셨네요"

// // if else 구문을 일반적으로 활용
// if (age > 18) {
//   console.log("성인이시군요.");
// } else {
//   console.log("부모님 동의 필요해요.");
// }

// // if else else if else
// if (age > 18) {
//   console.log("성인이시군요.");
// } else if (age >= 15) {
//   console.log("3년 후에 오세요.");
// } else if (age >= 13) {
//   console.log("8년 후에 오세요.");
// } else if (age >= 10) {
//   console.log("10년 후에 오세요.");
// } else if (age >= 8) {
//   console.log("12년 후에 오세요.");
// } else if (age >= 5) {
//   console.log("13년 후에 오세요.");
// } else {
//   console.log("나이가 없네요. 입력하세요.");
// }

// @end 5.1 if문 조건문 (condition)

// @start ### 5.2. switch조건문  조건문 (condition)
// const age = 15;

// switch (age) {
//   case 18:
//     console.log("성인");
//     break;

//   case 15:
//     console.log("3년뒤");
//     break;

//   case 10:
//     console.log("8년뒤");
//     break;

//   case 5:
//     console.log("13년뒤인");
//     break;

//   default:
//     console.log("나이를 입력하셔야 해요");
//     break;
// }
// const userRole = "ADMIN"; // GUEST, MEMBER
// switch (userRole) {
//   case "ADMIN":
//     console.log("관리자시군요.");
//     break;

//   case "MEMBER":
//     console.log("회원이시군요");
//     break;

//   default:
//     console.log("가입전 이군요. 회원가입 해주세요.");
//     break;
// }

// @end ### 5.2. switch조건문  조건문 (condition)

// @end 5. 조건문 (condition)

// @start ## 6. 반복문 (Loop)
// for 조건이 참인 동안 실행
// for ( 초기값; 조건식; 증감) {
//   할일;
// }
// const total = 10;
// for (let i = 0; i < total; i++) {
//   console.log("안녕");
//   if (i == 2) {
//     break;
//     // break는 가장 가까운 for 문을 멈추어버린다.
//     //  밑에 점심먹자 콘솔로그를 출력한다.
//   }
// }
// console.log("점심먹자...");

// //  continue 반복 중 일부를 실행하지 않고 무시하면서 반복
// for (let i = 0; i < total; i++) {
//   console.log("안녕");
//   if (i == 2) {
//     continue;
//   }
//   console.log("반가워", i);
// }

// // break 를 조금 더 보기
// // 전제를 달아보면 for를 중첩하더라도
// // 2중 for 까지만 합시다.
// // break 가장 가까운 for 를 끊어버리고 다음 코드 실행함.
// for (let i = 0; i < total; i++) {
//   console.log("======= i ", i);

//   break;

//   for (let j = 0; j < total; j++) {
//     console.log(">>>>>> j ", j);
//   }
// }

// // 구구단 반복문 연습
// for (let i = 1; i < 10; i++) {
//   // if (i > 5) {
//   //   break;
//   // }
//   console.log("====", i, "단 출력 ====");
//   for (let j = 1; j < 10; j++) {
//     if (i > 5) {
//       break;
//     }
//     // console.log(i, "*" , j , " = ", i*j)
//     // `` 빽틱 활용시
//     console.log(` ${i} * ${j} = ${i * j}`);
//   }
// }

// @start while 구문
// while (조건) {
//   할일
// }

// do {
//   할일일
// } while (조건)

// let count = 0;

// while (count < 0) {
//   console.log("while", count);
//   count++;
// }

// let countDo = 0;
// do {
//   console.log("do : ", countDo);
//   countDo++;
// } while (countDo < 0)

// @end while 구문

// @end ## 6. 반복문 (Loop)

// @start ## 7. 함수 (function)
// 세금을 계산하고 싶다.
// 수익의 5% 세금이다.

// 월급이 1000000원
// 세금이 5%
// 최종 세금은 월급 * 0.05 가 나온다.

// const money = 1000000;
// const ratio = 5;

// function ratioCalc(_money, _ratio) {
//   // 재료가 없는 경우 예외처리
//   if(_money === undefined || _ratio === undefined) {
//     return "값이 올바르지 않습니다. 확인해 주세요."
//   }
//   const ratio = _ratio / 100;
//   const result = money * ratio;
//   console.log(result);
// }

// ratioCalc(money, ratio);

/** @start 사칙 계산기
 * 덧셈 계산기 
//  * param (매개변수 의미, add() 안에 머가 들어가는지 설명서 개념)
//  * @param {number} a
//  * @param {number} b
//  * @returns {number}
//  */
// function add(a, b) {
//   if (arguments.length < 2) {
//     return "2개의 값이 필요 합니다.";
//   }
//   if (typeof a !== "number") {
//     return "첫번째 값이 숫자여야 합니다.";
//   }
//   // 밑에 처럼 {} 없이 타이핑 해도 똑같다.
//   if (typeof b !== "number") {
//     return "두번째 값이 숫자여야 합니다.";
//   }

//   const result = a + b;
//   return result;
// }
// const result = add(5, 4);
// console.log(result);
// // 만약에 ("5",4) 넣어버리면 9가 아닌 54로 나온다.

// /**
//  * 뺄셈 계산기
//  * * param (매개변수 의미, add() 안에 머가 들어가는지 설명서 개념)
//  * @param {number} a
//  * @param {number} b
//  * @returns {number}
//  */

// function minus(a, b) {
//   if (arguments.length < 2) {
//     return "2개의 값이 필요 합니다.";
//   }
//   if (typeof a !== "number") {
//     return "첫번째 값이 숫자여야 합니다.";
//   }
//   // 밑에 처럼 {} 없이 타이핑 해도 똑같다.
//   if (typeof b !== "number") {
//     return "두번째 값이 숫자여야 합니다.";
//   }
//   if (b === 0) {
//     return "분모는 반드시 0 이상이어야 합니다.";
//   }

//   const result = a / b;
//   return result;
// }

// minus(5, 4);
// // void 아무것도 안나온다.   return result; 입력해주면 void 사라짐

// /**
//  * 나누기 계산기
//  * * param (매개변수 의미, add() 안에 머가 들어가는지 설명서 개념)
//  * @param {number} a
//  * @param {number} b
//  * @returns {number}
//  */

// function divide(a, b) {
//   if (arguments.length < 2) {
//     return "2개의 값이 필요 합니다.";
//   }
//   if (typeof a !== "number") {
//     return "첫번째 값이 숫자여야 합니다.";
//   }
//   // 밑에 처럼 {} 없이 타이핑 해도 똑같다.
//   if (typeof b !== "number") {
//     return "두번째 값이 숫자여야 합니다.";
//   }
//   if (b === 0) {
//     return "분모는 반드시 0 이상이어야 합니다.";
//   }

//   const result = a / b;
//   return result;
// }
// const result = add(5, 4);
// consonle.log(result);

// /**
//  * 계산기
//  * 계산기 함수는 두개의 숫자와 한개의 기호를 받습니다.
//  * 한개의 기호는 + - / 로 입력합니다.
//  * 사용예시
//  * ```javascript
//  * const result = calc("+", 5, 4);
//  * ```
//  *
//  * @param {string} sign
//  * @param {number} a
//  * @param {number} b
//  * @returns {number}
//  */

// function calc(sign, a, b, role = "guest") {
//   if (role === "admin") {
//     return "주인님 오셨네요.";
//   }
//   switch (sign) {
//     case "+":
//       return add(a, b);
//       break;
//     case "-":
//       return minus(a, b);
//       break;
//     case "/":
//       if (b === 0) {
//         return "분모는 반드시 0 이상이어야 합니다.";
//       }
//       return divide(a, b);
//       break;
//     default:
//       return "기호를 올바르게 입력해주세요.";
//       break;
//   }
// }
// const now = calc("+", 5, 4);
// console.log(now);

// const admin = calc("+", 5, 4, "admin");
// @end ## 7. 함수 (function)

// @start ## 8.화살표 함수 (Arrow function)
// add();
// function add() {
//   return 1 + 2;
// }
// // 이름(add) 빼고, function 빼고

// const addA =  () => 1 + 2;
// addA();

// function minus(a) {
//   return a - 2;
// }
// // 이름(minus) 빼고, function 빼고

// const minusA = (a) => a - 2;

// function divide(a, b) {
//   return a / b;
// }
// // 이름(divide) 빼고, function 빼고
// const divideA = (a, b) => a / b;

// function multi(a, b) {
//   console.log("곱셈")
//   return a * b;
// }
// // 이름(multi) 빼고, function 빼고
// const divideA = (a, b) => a * b;

// ### 8.2. 일반 함수와는 다르게 arguments 가 없다.
function add(a, b) {
  console.log(arguments);
  return a + b;
}
add(5, 4, 6, 7, 8);

(a, b) => {
  console.log(arguments);
  return a + b;
};

addA(100, 70);
// @end ## 8.화살표 함수 (Arrow function)
