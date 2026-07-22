// Membuat sebuah variabel bernama 'products' yang berfungsi untuk menyimpan sekumpulan data.
// Kumpulan data ini disebut 'Array' (ditandai dengan kurung siku []), yang di dalamnya berisi tiga buah teks (string): "Flashdisk", "SDD", dan "Monitor".
var products = ["Flashdisk", "SDD", "Monitor"];

// Menginstruksikan browser untuk mencari elemen di dalam dokumen HTML yang memiliki atribut id="demo" (yaitu tag <p id="demo"></p> di file array.html).
// Setelah elemen tersebut ditemukan, 'innerHTML' digunakan untuk menyisipkan atau mengubah isi teks di dalam elemen tersebut.
// Teks yang dimasukkan adalah elemen pertama dari array 'products' (yaitu products[0]).
// Penting diingat: Urutan (indeks) pada Array selalu dimulai dari angka 0, sehingga output yang akan tampil di halaman web adalah "Flashdisk".
document.getElementById("demo").innerHTML = products[0];
