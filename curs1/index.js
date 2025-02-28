// asa se declara
let i = 0;
const domi = 2;

// cele 3 functii din js cele mai imp

const arr = [1, 2, 3, 4, 5];

// 1 functia map

arr.map((item) => {
  console.log(item);
});

const newArr = [
  { error: false, message: "Succes" },
  { error: true, message: "Invalid Credentials" },
  { error: true, message: "Server Error" },
];

// 2 functia filter

const erori = newArr.filter((item) => item.error);

// 3 forEach

newArr.forEach((item) => console.log(item));
