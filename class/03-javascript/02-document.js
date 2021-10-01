function aaa() {
  // 기능 작성하기
  // 기능을 먼저 만들고, 연결을 하면 오류 위험 적음

  // html에서는 숫재 존재하지 않음. 모두 문자

  alert("hiii");
  document.getElementById("greeting").innerText = "반갑습니다";
}

function counter() {
  const temp = Number(document.getElementById("count").innerText) + 1;
  document.getElementById("count").innerText = temp;
}

function changeColor() {
  document.getElementById("ccc").setAttribute("style", "background-color: red");
}

function setDisabled() {
  document.getElementById("ddd").setAttribute("disabled", "true");
}
