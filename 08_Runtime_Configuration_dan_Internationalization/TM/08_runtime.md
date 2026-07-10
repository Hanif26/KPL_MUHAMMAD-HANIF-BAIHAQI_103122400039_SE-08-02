# Tugas Mandiri : Runtime Configuration dan Internationalization

**Nama** : MUHAMMAD HANIF BAIHAQI

**NIM** : 103122400039 

**Kelas** : SE-08-02  

Dosen Pengampu : Yudha Islami Sulistya

Asisten Praktikum : Ardiansyah Muhammad Pradana Farawowan, dan Hamid Khaeruman 


## Sumber Kode

Tersedia di [index.js](index.js)

## Output

![alt text](run.png)

## Deskripsi

Pada praktikum ini dikembangkan sebuah program berbasis JavaScript menggunakan Node.js yang bertujuan untuk menampilkan nilai tukar mata uang rupiah (IDR) terhadap Chinese Yuan Offshore (CNH) dan Euro (EUR) secara real-time melalui pemanfaatan API kurs mata uang. Program memanfaatkan library axios untuk mengambil data dari API, sedangkan dotenv digunakan untuk menyimpan URL API ke dalam file .env sehingga konfigurasi menjadi lebih aman dan mudah dikelola.

Selain itu, program juga menerapkan fitur Intl pada JavaScript untuk memformat tampilan mata uang dan tanggal agar sesuai dengan standar lokal Indonesia. Hasil output program menampilkan konversi sejumlah nominal rupiah ke mata uang CNH dan EUR beserta informasi tanggal pengambilan data kurs.

Dalam proses implementasinya, pesan promosi bawaan dari dotenv disembunyikan menggunakan konfigurasi { quiet: true } sehingga tampilan terminal menjadi lebih bersih dan rapi. Program kemudian diuji menggunakan beberapa nominal rupiah, yaitu Rp25.000, Rp50.000, dan Rp100.000 guna memastikan bahwa proses konversi dapat berjalan dengan baik dan menghasilkan output yang sesuai.

Tujuan dari praktikum ini adalah:

1. Memahami penggunaan API pada Node.js.
2. Mempelajari penggunaan package axios dan dotenv.
3. Memahami penggunaan asynchronous programming dengan async/await.
4. Menggunakan Intl.NumberFormat dan Intl.DateTimeFormat untuk formatting data.
5. Mengimplementasikan pengelolaan environment variable menggunakan file .env.
