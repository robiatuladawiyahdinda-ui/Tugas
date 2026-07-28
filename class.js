// Mendefinisikan sebuah blueprint atau cetakan (class) bernama 'Holiday'
class Holiday {
  
  // Constructor adalah fungsi khusus yang otomatis berjalan saat objek baru dibuat.
  // Menerima dua nilai input (parameter): destination (tujuan) dan days (jumlah hari).
  constructor(destination, days) {
    // Menyimpan nilai 'destination' yang diinputkan ke dalam properti milik objek (this)
    this.destination = destination;
    
    // Menyimpan nilai 'days' yang diinputkan ke dalam properti milik objek (this)
    this.days = days;
  }
  
  // Mendefinisikan sebuah method (fungsi di dalam class) bernama 'info'
  info() {
    // Mencetak teks ke layar console yang menggabungkan nilai properti objek
    console.log(this.destination + " will take " + this.days + " days.");
  }
}

// Membuat cetakan nyata (objek) dari class Holiday dengan data tujuan "Semeru" dan waktu 10 hari.
// Objek tersebut kemudian disimpan ke dalam variabel bernama 'trip'.
var trip = new Holiday("Semeru", 10);

// Memanggil method 'info()' pada objek 'trip' untuk menjalankan perintah cetak teks.
trip.info();
