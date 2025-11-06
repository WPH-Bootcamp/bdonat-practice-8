// 1. FUNCTION -> Cara untuk membungkus banyak blok kode dalam 1 penamaan fungsi, dan membuatnya menjadi reusable

function jalan() {
  console.log("Angkat kaki kanan");
  console.log("Angkat kaki kiri");
}
// jalan();
// jalan();
// jalan();

function oreg() {
  console.log("Potong tempe");
  console.log("kasih kecap");
  console.log("kasih micin");
}

// oreg();

/*
    PATTERN :

    1. DECLARATION FUNCTION
    function namaFungsi(){
        // Code here
    }
    
    2. CALLING FUNCTION (INVOKE)
    namaFungsi()
*/

let nama = "Ucup";

function sayHi() {
  let nama = "Renday";
  console.log("Halo, amigo", nama);
}

console.log(nama);

sayHi();

// 2. FUNCTION dengan PARAMATER dan ARGUMENT
/*

    PATTERN :
    1. DECLARATION FUNCTION
    function namaFungsi(parameter){
        // Code here
    }
    
    2. CALLING FUNCTION (INVOKE)
    namaFungsi(argument)

    NOTES : Parameter bisa diberikan default value

*/
function tambah(a, b, c, d = 100) {
  console.log(a + b + c + d);
}

tambah(2, 1, 10, 5);

function showMsg(text1, text2, tandaBaca) {
  console.log(text1, tandaBaca, text2);
}
showMsg("Haloo", "Renday", ":");

// 3. RETURN KEYWORD FUNCTION
function multiply(a, b) {
  return a * b;
}
console.log(multiply(10, 20));

let hasil1 = multiply(2, 5);
console.log(hasil1);

let hasil2 = multiply(10, 4);
console.log(hasil2);
