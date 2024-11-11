// 11월 11일 추가
// HTML 240 CREW list-thum-wrap //
// console.log(000) 은 상태 확인용이라 주석처리

window.addEventListener("load", function () {
  // api 주소 :  /apis/crew.json  리퀘스트하세요.
  const CREW_DATA_URL = "/apis/crew.json";
  // 데이터 호출
  fetch(CREW_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      //   console.log("데이터 결과 : ", result);

      // 최종 html 만들기
      let htmlCrew = "";
      // 11월 11일 오후 작업
      // a 태그만 만들어서 배치하기
      let html_Atag_list = "";

      for (let i = 0; i < result.length; i++) {
        // 현재 실행되는 순서 0, 1, 2, 3
        // console.log("i", i);
        //   `빽틱으로 a 태그 만들어주는것
        html_Atag_list += `<a href="#">${i}< /a>`;
        // console.log(html_Atag_list);

        let tag = "";

        // 3개씩 배치하는 Div 형태
        //  i 가 0일때  예외처리 위한 코드
        if ((i + 1) % 3 == 0) {
          //   console.log("list div 만들어" 3개씩 묶음 나오게);

          tag = `<div class="list">${html_Atag_list}</div>`;
          // 3개를 다 채웠다. 그렇다면 다시 만들자.
          // 3개가 들어가서 조건이 충족되면
          // a태그 목록 내용만 지우고 다시 만들기출발
          html_Atag_list = "";
        } else if (i <= result.length - 1) {
          // 결과 값에서 - 1 해라.
          tag = `<div class="list">${html_Atag_list}</div>`;
          html_Atag_list = "";
        }
        //   console.log("a 태그를 내부에 추가");

        htmlCrew += tag;
      }

      console.log(htmlCrew);

      // html 출력하기
    })
    .catch(function () {});
});
