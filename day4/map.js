// filter dan menampilkan bilangan bulat
const nomor=[1,3,4,5];
const hasil = nomor.filter(cekBilanganBulat);
console.log(hasil);
function cekBilanganBulat(list){
    return list % 2 == 0;
}

// 
const angka = [1,3,4,5];
const angka2 = [22,17,19,20,14];
const angka3 = [1,3,5];
const angka4 = [2,4,6];

function evenOdd(arr){
    var temp =[];
    arr.map(function (val){
        if (val % 2 == 0) {
            temp.push('even');
        } else {
            temp.push('odd');
        }
    });
    return temp;
}
console.log(evenOdd(angka));
console.log(evenOdd(angka2));
console.log(evenOdd(angka3));
console.log(evenOdd(angka4));