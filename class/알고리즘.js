//조건문
//018. 조건문 연습

function boolean(input1, input2) {
  if (input1 || input2) {
    console.log("true");
  } else if (!input1 && !input2) {
    console.log("false");
  }
}

//019. 홀짝

function evenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else if (num % 2 === 1) {
    console.log("Odd");
  } else if (num === 0) {
    console.log("Zero");
  }
}

//020. 온도

function temperature(num) {
  if (num <= 18) {
    console.log("조금 춥네요");
  } else if (num <= 23) {
    console.log("날씨가 좋네요");
  } else {
    console.log("조금 덥습니다");
  }
}

// 021. 며칠

function days(month) {
  if (month === 2) {
    console.log("28");
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30");
  } else if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    console.log("31");
  } else {
    console.log("please type a correct number between 1 and 12");
  }
}
// 2월 : 28일

// 4월 : 30일
// 6월 : 30일
// 9월 : 30일
// 11월 : 30일

// 1월 : 31일
// 3월 : 31일
// 5월 : 31일
// 7월 : 31일
// 8월 : 31일
// 10월 : 31일
// 12월 : 31일

// 022. 미니 계산기

function calculator(num1, num2, operator) {
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    const input = `${num1 + operator + num2}`;
    const result = eval(input);
    console.log(result);
  } else if (
    operator !== "+" ||
    operator !== "-" ||
    operator !== "*" ||
    operator !== "/"
  ) {
    console.log("올바른 입력이 아닙니다");
  }
}

// 7. 반복문(연습문제)
// 023. 숫자 더하기

function sum(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    count = count + i;
    console.log(count);
  }
}

// 024. 특정 문자열 세기

function countLetter(str) {
  let count = 0;
  const searchA = "a";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].includes("a"));
  }
  

// 028. random 숫자 만들기
function random(number) {
    const randomNum = Math.floor(Math.random() * 100) + 1
    if (number > randomNum) {
        console.log(`random number was ${randomNum}`)
        console.log("Win")

    } else if (number < randomNum) {
        console.log(`random number was ${randomNum}`)
        console.log("Lose")
    }
  }


// 029. 나누기 함수 만들기

const divide = (a, b) => {

    console.log(a / b);


}

//030. 비밀번호 검증 함수

function passwords(password1, password2) {
  if (password1.length < 8 || password1.length > 16) {
    console.log("비밀번호는 8~16자리여야 합니다");
  } else if (password1 !== password2) {
    console.log("비밀번호를 다시 확인해 주세요");
  } else if (password2.length < 8 || password2.length > 16) {
    console.log("비밀번호는 8~16자리여야 합니다");
  }
}

//10. 내장함수 - 타이머 (연습문제)
//031. 자동 로그아웃


setTimeout(() => {
    console.log("자동 로그아웃")
}, 2000)


//11. 내장객체 - 날짜 (연습문제)

//032. 오늘 날짜 구하기

const today = new Date();

const year = today.getFullYear();

const month = today.getMonth();

const date = today.getDate();


console.log(`오늘은 ${year}년 ${month}월 ${date}일 입니다`);


////////// 실 무 문 제 ///////////
///////////////////////////////

//1. 배열
//033. 회원가입

function email(inputAddress) {



  if(inputAddress.includes("@") && inputAddress[0] !== " " && inputAddress[inputAddress.length - 1] !== " ") {

    const onlyLetters = inputAddress.split("@")
    // array

    const id = onlyLetters[0].toLowerCase()
    const domain = onlyLetters[1].toLowerCase()
    const checkedAddress = `${id}@${domain}`

  
    console.log(checkedAddress)
    // "@" 가 포함되면 소문자 변환 함수를 쓸수 없다. (숫자는 포함 가능)
    // "@"를 뺀 문자 variables에 저장
    // 골뱅이만 따로 빼는거 리뷰하기


  } else {
    console.log("please type a valid e-mail address")
  }


  email("1234@ABC.com")
  email("123abc.com")