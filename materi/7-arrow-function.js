// 1. FUNCTION DECLARATION
function namaFungsi() {
  console.log("Ini adalah function declaration");
}

namaFungsi();

// 2. FUNCTION EXPRESSION DENGAN VALUE FUNCTION DECLARATION
let sayHi = function hello(nama = "Anonymous") {
  return `Hii, saya ${nama}`;
};

console.log(sayHi());

// 3. FUNCTION EXPRESSION DENGAN VALUE FUNCTION ANONYMOUS
let sayHello = function () {
  return "Helloo, saya Dicky";
};

console.log(sayHello());

// 4. FUNCTION ARROW ( => ) : Multi Line Function
let sayHola = (nama = "Ucup") => {
  return `Holaa, ${nama}`;
};
console.log(sayHola());

// 5. FUNCTION ARROW : One Line Function
let sayHai = (nama = "Renday") => `Haii, ${nama}`;
console.log(sayHai());

// STUDI KASUS
let bagi = (a, b) => (b === 0 ? "Tidak bisa karena penyebut adalah 0 " : a / b);
let result = bagi(10, 0);

console.log(result);
