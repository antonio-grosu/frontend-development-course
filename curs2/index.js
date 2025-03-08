// declararea variabilelor

let nume = "Matei";
const numeFamilie = "Lepadatu";

// for
// for (let i = 0; i <= 3; i += 1) console.log(i);

//while
let i = 0;

while (i <= 3) {
  //   console.log(i);
  i += 1;
}

// Vom uita de aceste instr repetitive

//callback function ? functii predefinite si array-uri

// 1 functia map => ia fiecare element din arr si face ceva cu el

let numere = [1, 2, 3];

let copieNumere = numere.map((item) => {
  return item;
});

// console.log(copieNumere);

function par(n) {
  if (n % 2 == 0) return true;
  else return false;
}

const impar = (n) => {
  if (n % 2 == 1) return true;
  else return false;
};

// 2 filter

let arr = [
  {
    nume: "Matei",
    varsta: 20,
    masina: "MG",
  },
  {
    nume: "Antonio",
    varsta: 20,
    masina: "Mercedes",
  },
  {
    nume: "Matei",
    varsta: 23,
    masina: "Toyota",
  },
  {
    nume: "Tudor",
    varsta: 20,
    masina: "BMW",
  },
  {
    nume: "Gigel",
    varsta: 20,
    masina: "MG",
  },
  {
    nume: "Ion",
    varsta: 20,
    masina: "Mercedes",
  },
  {
    nume: "Gheorghe",
    varsta: 20,
    masina: "BMW",
  },
];

const baietiCuMG = arr.filter((baiat) => baiat.masina == "MG");
const baietiCuMercedes = arr.filter((baiat) => baiat.masina == "Mercedes");

// 3 forEach

// arr.forEach((baiat) => console.log(baiat.nume, baiat.masina));

// functii asinscron

const getCampionat = async () => {
  let campionate = [];
  const response = await fetch("http://localhost:3000/championships/");
  campionate = await response.json();

  if (campionate) console.log(campionate);
};
