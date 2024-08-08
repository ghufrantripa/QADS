// let hariKe = 4;

// switch (hariKe) {
//     case 1:
//         hariKe = "Senin";
//         break;
//     case 2:
//         hariKe = "Tuesday";
//         break;
//     case 3:
//         hariKe = "Wednesday";
//         break;
//     case 4:
//         hariKe = "Thursday";
//         break;
//     case 5:
//         hariKe = "Friday";
//         break;
//     default:
//         console.log("Hari apa?")
//         break;
// }

// console.log(`Sekarang ${hariKe}`)


// let warnaLampu = "ungu"

// switch (warnaLampu) {
//     case 'merah':
//         console.log('Stop');
//         break;
//     case 'kuning':
//         console.log('siap siap');
//         break;
//     case 'hijau':
//         console.log('jalann');
//         break;
//     default:
//         console.log('ngapain hayo');
// }

// function sapa(nama){
//     console.log(`Halo ${nama} anjing`);
// }

// sapa('messi');

// function tambah(v1, v2){
//     console.log(`Hasil penjumalahan ${v1} dan ${v2}. adalah ${v1 + v2}`)
// }

// tambah(2,5);


// function cekSuara(suara){
//     if (suara === 'ayam'){
//         console.log('berkokok')
//     } else if(suara === 'Kucing'){
//         console.log('Meong')
//     } else if (suara === "anjing"){
//         console.log('menggonggong')
//     }
// }

// cekSuara('Kucing')

const cetakNama = (namaDepan, namaBelakang) =>{
    return namaDepan + ' ' + namaBelakang
}

const hasil = cetakNama('Ghufran', 'Tripa');
console.log(hasil)