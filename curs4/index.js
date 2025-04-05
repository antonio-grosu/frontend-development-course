// avem toate tipurile de date ca in orice limbaj

// declaram variabilele cu  let si const

let a = 3;
const b = 4;

// dif este ca let se poate suprascrie, const nu

// niste functii importante in js sunt cele pentru array uri

let arr = [1, 2, 3, 4, 5];

function modul4(x) {
  return x % 4;
}

const modul4v2 = (x) => {
  return x % 4;
};

// map - aplica o functie fiecarui element din array

let arr2 = arr.map((item) => {
  return item * 2;
});

// map ul este o functie care parcurge array ul si pt fiecare element aplica o  functie

let arr3 = arr.map((x) => x * 3);
console.log(arr3);

// filter - filtreaza array ul in functie de o conditie

arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Joe", age: 25 },
  { name: "jsda", age: 35 },
  { name: "sfuias", age: 35 },
];

let arr4 = arr.filter((item) => item.age == 25);

let arr5 = arr.filter((age) => age.age == 35);

console.log(arr5);
