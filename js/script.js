//  11월 15일(오전수업)
//  시간이 오래 걸리는 작업을 가지고 테스트

function Timer() {
  let count = 0;
  // 타이머 함수를 이용해서 오래걸리도록 샘플
  // 기본 웹브라우저에 내장 되어 있는 즉, 빌트인이 되어있는 함수
  // setInterverval(함수, 간격);
  setInterval(() => {
    count++;
    console.log("안녕:", this);
    console.log("안녕:", this.count);
  }, 1000);
}
Timer();
