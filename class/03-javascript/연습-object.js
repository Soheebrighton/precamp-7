const profile = {
  name: "철수",
};
// undefined
const profile = {
  name: "철수",
  gender: "남자",
  age: 10,
};
// undefined
// profile
// {name: '철수', gender: '남자', age: 10}age: 10gender: "남자"name: "철수"[[Prototype]]: Object
const profile2 = { name: "영희", gender: "여자", age: 10 };
// undefined
// profile
// {name: '철수', gender: '남자', age: 10}
profile.name;
// '철수'
profile2.gender;
// '여자'
