const cars = ["saab", "volvo", "BMW"];
cars [0] = "Opel";
console.log(cars);
console.log(' ');

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
fruits[6] = "Edamame";
console.log(fruits);
console.log(' ');

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person.length);
console.log(person[0]);
console.log(' ');

let hewan = ["gajah", "jerapah"]
console.log(hewan.length) //2

let angka = [3,2,1,4,5,6,7]
console.log(angka.length) //7

//method push() untuk memasukan data pada urutan terakhir array atau bisa dibilang memasukkan data ke paling kanan
let animal = ["marmut", "kucing"];
animal.push("tikus");
console.log(animal); //["marmut", "kucing", "tikus"]

//method pop() berfungsi untuk menghapus element terakhir, atau mengahpus elemen  array paling kanan
let animal1 = ["marmut", "kucing", "tikus"];
animal1.pop();
console.log(animal1); //["marmut", "kucing"];

//method shift() berfungsi untuk mengahpus elemen pertama pada array, atau bisa dibilang ngehapus yang paling kiri
let animal2 = ["marmut", "kucing", "tikus"];
animal2.shift();
console.log(animal2); //["kucing", "tikus"];

//method unshift() berfungsi meanmbahkan data pada urutan pertama, atau nambahin sesuatu di paling kiri
let animal3 = ["marmut", "kucing"];
animal3.unshift("tikus");
console.log(animal3); //["tikus", "marmut", "kucing"];

//method splice berfungsi bisa menambahkan data, bisa menghapus data pada arrya, bisa keduanya sekaligus tergantung isi parameter yang diberikan
// contoh .splice(param1, param2, ...param n)
// parameter pertama sebagai penentuan posisi mau di index ke berapa
// parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item, (bisa juga tidak menghapus apa apa kalau dikasih nilai 0)
// parameter sisayna, itu untuk menambahkan data ke dalam array, jumlahnya bisa banyak

//contoh menghapus 1 item dari index nomor 1
let animal4 = ["marmut", "kucing", "tikus"];
animal4.splice(1,1);
console.log(animal4); //["marmut", "tikus"]

//contoh menambahkan 1 item tanpa menghapus apa apa, dari index nomor 1
let animal5 = ["marmut", "kucing", "tikus"];
animal5.splice(1,0,"gajah");
console.log(animal5); //["marmut", "gajah", "kucing", "tikus"]

//contoh menambahkan 1 item dan menghapus 2 item, dari index nomor 1
let animal6 = ["marmut", "kucing", "tikus"];
animal6.splice(1,2,"gajah");
console.log(animal6); //["marmut", "gajah"]

//contoh menambahkan 3 item dan menghapus 2 item, dari index nomor 1
let animal7 = ["marmut", "kucing", "tikus"];
animal7.splice(1,2,"gajah", "jerapah", "singa");
console.log(animal7); //["marmut", "gajah", "jerapah", "singa"]


//method slice berfungsi untuk memotong array tergantung dari nilai parameter yang diberikan. conth .slice(1,4)
//contoh memotong dari index 1 sampe ujung
let animal8 = ["marmut", "gajah", "jerapah", "singa"]
animal8.slice(1)
console.log(animal8) //["marmut", "gajah", "jerapah", "singa"] | this one is not working sinmce .slice is one method that not changed variable array

//gini caranya, ada 2 cara
let hewan2 = ["gajah", "jerapah", "badak", "singa"];
//bisa langsung hajar aja taro di output
console.log(hewan2.slice(1)) //["jerapah", "badak", "singa"]
//kita tampung di variabel baru
let slicedHewan = hewan2.slice(1)
console.log(slicedHewan) //["jerapah", "badak", "singa"]

//contoh memotong dari index 1 sampai sebelum index ke 3
//dengan kata lain
//contoh memotong dari index 1 sampai index 2
let hewan3 = ["gajah", "jerapah", "badak", "singa"];
let slicedHewan2 = hewan3.slice(1,3);
console.log(slicedHewan2) //["jerapah", "badak"]

//Merging Arrays (Concatenating)
// merging two Array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// merging three Array
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildrenTo = arr1.concat(arr2, arr3);
console.log(myChildrenTo);

// toSpliced()
const month = ["Jan", "Feb", "Mar", "Apr"];
const toSpliced = month.toSpliced(1,2);
console.log(month);
console.log(toSpliced);