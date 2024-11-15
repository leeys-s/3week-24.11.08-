// 11월 15일(금) 오후수업
function run(콜백함수) {
  콜백함수();
}

//  @start 콜백함수case#1

const say = () => {
  console.log("say");
};
const cry = () => {
  console.log("ㅠㅠ");
};

run(say);
run(cry);

window.addEventListener("", function () {});
// @end콜백함수 case#1

// @start 콜백함수case#2
run(function () {
  console.log("say");
});
run(function () {
  console.log("ㅠㅠ");
});

// @end 콜백함수case#2

// @start 콜백함수case#3
run(() => {
  console.log("say");
});
run(() => {
  console.log("ㅠㅠ");
});

// @end 콜백함수case#3
