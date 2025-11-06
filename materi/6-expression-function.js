// FUNCTION DECLARATION
function namaFungsi() {
  console.log("Ini adalah function declaration");
}

namaFungsi();

// FUNCTION EXPRESSION DENGAN VALUE FUNCTION DECLARATION
let sayHi = function hello(nama = "Anonymous") {
  return `Hii, saya ${nama}`;
};

console.log(sayHi());

// FUNCTION EXPRESSION DENGAN VALUE FUNCTION ANONYMOUS
let sayHello = function () {
  return "Helloo, saya Dicky";
};

console.log(sayHello());
