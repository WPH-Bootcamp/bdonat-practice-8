// OPERATOR LOGIKA -> Hanya akan menghasilkan nilai boolean (true / false) : digunakan untuk menggabungkan ekspresi boolean dan mengontrol alur eksekusi berdasarkan kondisi logika

/*
    Macam-macam Operator Logika :
    1. AND (&&) -> semua kondisi perlu menjadi true, agar mendapatkan nilai true
    2. OR (||) -> walaupun hanya 1 kondisi true, maka mendapatkan nilai true
    3. NOT (!) -> mengembalikan nilai yang berkebalikan dari nilai operandnya -> hanya untuk nilai boolean

    4. NULLISH COALESCING (??)
*/

/*
    NOTES : 
    -. Truthy -> true, 1, console.log("hello"), "ucup", ....
    -. Falsy -> false, 0, null, undefined, "", ....
*/

let sudahMakan = false;
let sudahCuciPiring = true;

// 1. AND (&&)
let resultAND =
  sudahMakan && sudahCuciPiring ? "Yaudaa deh, hati2" : "GAAKKKK!!!";
console.log(resultAND);
// -. SHORT CIRCUIT EVALUATION AND (&&) -> Mengembalikan nilai pertama falsy, atau nilai terakhir jika semua truthy
console.log(0 && "Faiz");
console.log(1 && 0);
console.log(false && null);
console.log("Ucup" && true);
console.log("ucup" && true && 1);

// 2. OR (||)
let resultOR =
  sudahMakan || sudahCuciPiring ? "Yaudaa deh, hati2" : "GAAKKKK!!!";
console.log(resultOR);
// -. SHORT CIRCUIT EVALUATION OR (||) -> Mengembalikan nilai pertama truthy, atau nilai terakhir jika semua falsy
console.log("ucup" || 0);
console.log(0 || null);
console.log(0 || undefined || null || "" || 1);

// 3. NOT (!)
let pintar = true;
let bodoh = true;

console.log(!pintar);
console.log(!!bodoh);
// NOTES : genap = nilai asli , ganjil = nilai nya kebalikan
