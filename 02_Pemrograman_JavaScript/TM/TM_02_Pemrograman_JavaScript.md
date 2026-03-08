Membuat fungsi bernama fizzBuzz yang memproses sebuah larik (array) bilangan dan menghasilkan deretan kata atau angka berdasarkan aturan pembagian tertentu. Program ini diintegrasikan dengan pengujian otomatis menggunakan modul assert

Masalah: Pengecekan kelipatan 2 di urutan pertama, maka angka 14 akan langsung dianggap sebagai "Fizz" dan keluar dari blok kondisi.

Akibat: Tes gagal karena angka 14 seharusnya menghasilkan "FizzBuzz" (karena 14 juga habis dibagi 7), bukan hanya "Fizz".

Solusi: Kelipatan terkecil (14) harus selalu diperiksa paling awal sebelum memeriksa pembagi individualnya (2 atau 7), dan juga menggunakan metode .join(" ") atau logika pemisah yang hanya muncul di antara dua elemen. Ini untuk memastikan format string benar.

![alt text](<image_output_berhasil.png>)
output berhasil semua