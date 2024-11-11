// 11월 11일 작업
// html 138   <div class="swiper-wrapper" id="main-api">
// @start 11월 11일 슬라이드 api 작업
window.addEventListener("load", function () {
  // api 주소 :  /apis/main.json  리퀘스트하세요.
  const MAIN_SLIDE_URL = "/apis/main.json";
  // 데이터 호출
  fetch(MAIN_SLIDE_URL)
    .then(function (response) {
      // console.log("슬라이드 :", response);

      const result = response.json();
      return result;
    })
    .then(function (result) {
      // console.log("슬라이드 결과 : ", result);
      // HTML 만들기
      let htmlSlide = "";
      for (let i = 0; i < 4; i++) {
        // main-slide 사진부분 사진 4개 (html 141 - 159)
        const tag = `
          <div class="swiper-slide">
            <a href="${result[i].url}">
              <img src="./images/${result[i].pic}" alt="${result[i].title}" />
            </a>
          </div>
        `;
        // 모든 html 글자 하나로 합치기 (let 으로 명명해준 애를 활용)
        htmlSlide += tag;
        // console.log("htmlSlide : ", htmlSlide);
      }
      // html 출력하기 id니깐 #으로 호출
      // (html138 <div class="swiper-wrapper"  id="main-api">
      const slideTag = document.querySelector("#main-api");
      // console.log(slideTag);
      slideTag.innerHTML = htmlSlide;

      const visualSlideSW = new Swiper(".visual-slide", {
        loop: true,
        pagination: {
          el: " .visual-slide .swiper-pagination",
          // 클릭이 가능하게 해줘
          clickable: true,
        },
        // 사진 자동재생,움직이는 것
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 1000,
      });
      // 개발자 추가 작업 : 마우스 가 Enter 가 되면 (마우스 걸치면)
      const visaulSide = document.querySelector(".visual-slide");
      // console.log(visaulSide);

      visaulSide.addEventListener("mouseenter", function () {
        // console.log("오버");
        visualSlideSW.autoplay.stop();
      });

      visaulSide.addEventListener("mouseleave", function () {
        // console.log("아웃");
        visualSlideSW.autoplay.start();
      });
    })
    .catch(function () {});
});
// @end 11월 11일 슬라이드 api 작업

// 11월 7일(목) 작업 html 104라인
// 11월 8일(금) 작업 html 126라인
// 카카오 블로그 사진안에 슬라이드 .... 나오게 하는 작업
