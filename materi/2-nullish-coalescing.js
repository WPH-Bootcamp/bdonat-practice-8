// NULLISH COALESCING (??) -> Hanya bekerja pada nilai null atau undefined : Dengan kata lain, NULLISH COALESCING (??) mengembalikan argumen pertama jika argumen tersebut bukan null/undefined
let nickname = 0;
console.log(nickname ?? "anonymous");

// OPERATOR OR (||) -> bekerja untuk semua nilai falsy
console.log(nickname || "anonymous");

// STUDI KASUS
let lahir = 0;
console.log(lahir ?? "belum lahir");
console.log(lahir || "Belum lahir");

let uang = 0;
console.log(uang ?? "Kamu tidak uang");
console.log(uang || "Kamu tidak uang");
