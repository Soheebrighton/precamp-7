const email = "codecamp@gmail.com";
// undefined
// email
// 'codecamp@gmail.com'
email.includes("@");
// true
email.split("@");
// (2) ['codecamp', 'gmail.com']
email.split("@")[0];
// 'codecamp'
email.split("@")[1];
// 'gmail.com'
const front = email.split("@")[0];
// undefined
const front = email.split("@")[1];
// undefined
const back = email.split("@")[1];
// undefined
const front = email.split("@")[0];
// undefined
const newFront = [];
// undefined
newFront.push(front[0]);
// 1
newFront.push(front[1]);
// 2
newFront.push(front[3]);
// 3
newFront.push(front[2]);
// 4
newFront.push("*");
// 5
newFront.push("*");
// 6
newFront.push("*");
// 7
newFront.push("*");
// 8
newFront[2] = front[3];
("e");
newFront[2] = "d";
("d");
newFront[3] = "e";
("e");
newFront.join("") + "@" + back;
("code****@gmail.com");
const result = newFront.join("") + "@" + back;

// undefined
result;
("code****@gmail.com");
