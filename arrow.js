// Membuat variabel bernama 'greeting' yang menyimpan sebuah arrow function.
// Fungsi ini menerima 1 parameter (data inputan) yang diberi nama 'message'.
// Karena hanya ada satu parameter, tanda kurung () di sekitar 'message' boleh dihilangkan.
var greeting = message => {
  
  // Menginstruksikan browser untuk menampilkan kotak pesan pop-up (alert) 
  // yang isinya adalah teks dari parameter 'message'.
  alert(message);
} // Penutup blok fungsi 'greeting'

// Memanggil/menjalankan fungsi 'greeting' yang sudah dibuat di atas, 
// sambil mengirimkan teks string 'Selamat Pagi' ke dalam parameter 'message'.
// Hasilnya: Browser akan memunculkan pop-up bertuliskan "Selamat Pagi".
greeting('Selamat Pagi');


// Membuat variabel 'greetingNew' yang menyimpan arrow function dengan 2 parameter.
// Karena parameternya lebih dari satu, kita WAJIB menggunakan tanda kurung ().
// Di sini parameternya tertulis 'message1' dan 'message' (seharusnya 'message2' agar kodenya jalan).
var greetingNew = (message1, message) => {
  
  // Menginstruksikan browser untuk menampilkan pop-up alert yang menggabungkan (concat) dua variabel.
  // PENTING: Baris ini akan menghasilkan pesan error (ReferenceError) jika dijalankan, 
  // karena variabel 'message2' tidak pernah didaftarkan di dalam parameter sebelumnya (di atas tertulis 'message').
  alert(message1 + message2);
} // Penutup blok fungsi 'greetingNew'
