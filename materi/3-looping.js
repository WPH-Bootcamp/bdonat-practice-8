// LOOPING -> Perulangan (tindakan yang dilakukan berulang kali)
/*
    Berdasarkan Jenis Looping dibagi menjadi 2 :
    1. Countable -> for Loop
    2. Uncountable -> while dan do..while Loop
*/

console.log("====WHILE====");
// 1. WHILE LOOP
/*
    PATTERN :
    while(kondisi){
        // Code here
    }
*/
let jalan = 0;
while (jalan < 3) {
  console.log(`${jalan + 1}x jalan`);
  jalan = jalan + 1;
}

// STUDI KASUS
let tangkiPenuhWhile = false;

while (!tangkiPenuhWhile) {
  console.log("Mengisi air...");

  const sudahCukup = Math.random() > 0.7;
  console.log(sudahCukup);
  if (sudahCukup) {
    tangkiPenuhWhile = true;
  }
}
console.log("Tangki sudah penuh");

// NOTES : INCREMENT (MENAMBAHKAN) ATAU DECREMENT (MENGURANGKAN)

console.log("====DO...WHILE====");

// 2. DO...WHILE LOOP
/*
    PATTERN :
    do{
        // Code here
    }while(kondisi)
*/
let lari = 0;
do {
  console.log(`${lari + 1}x lari`);
  lari = lari + 1;
} while (lari < 3);

// STUDI KASUS
let tangkiPenuhDoWhile = false;
do {
  console.log("Mengisi air...");

  const sudahCukup = Math.random() > 0.7;
  console.log(sudahCukup);
  if (sudahCukup) {
    tangkiPenuhDoWhile = true;
  }
} while (!tangkiPenuhDoWhile);

console.log("Tangki sudah penuh");

console.log("====FOR====");

// 3. FOR LOOP
/*
    PATTERN :
    for(initialization; condition; step){
        // Code here
    }
*/
for (let i = 1; i <= 5; i = i + 1) {
  console.log("Perulangan ke-" + i);
}

console.log("---STUDI KASUS----");

for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}

for (let i = 5; i >= 1; i--) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}

// 4. BREAK KEYWORD -> Cara untuk menghentikan looping secara paksa
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    // console.log(i);
    break;
  }
  // console.log(i);
}

console.log("===========");

// 5. CONTINUE KEYWORD -> Cara untuk mengabaikan nilai looping
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
  if (i === 12) break;
}

// MAP LOOPING
let arr = [1, 2, 3, 4, 5];
arr.map((data, i) => console.log(data, i));

arr.forEach((data, i) => console.log(data, i));
