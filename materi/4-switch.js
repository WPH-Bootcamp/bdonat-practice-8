// SWITCH STATEMENT -> Alternatif lain dari if statement

/*
    PATTERN :

    switch(expression){
        case value1:
            // Code here
            break;
        case value2:
            // Code here
            break;
        .
        .
        .
        .
        default:
            // Code here
    }
*/
let trafficLight = "merah";

switch (trafficLight) {
  case "merah":
    console.log("STOP!!!");
    break;
  case "kuning":
    console.log("SIAP SIAPPP....");
    break;
  case "hijau":
    console.log("JALANN.....");
    break;
  default:
    console.log("LAMPU NYA RUSAKKK");
}

// NOTES : FALL THROUGH -> Kondisi ketika tidak ada break di dalam case
let hari = "senin";
switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
  case "jumat":
    console.log("Hari kerjaaa...");
    break;
  case "sabtu":
  case "minggu":
    console.log("Akhir pekannn....");
    break;
  default:
    console.log("Hari tidak diketahui");
}
