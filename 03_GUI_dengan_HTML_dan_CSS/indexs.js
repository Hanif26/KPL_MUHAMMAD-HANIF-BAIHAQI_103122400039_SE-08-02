const editor = document.getElementById("editor-kecil");
const hf = document.getElementById("hf"); // Hitung Huruf
const hb = document.getElementById("hb"); // Hitung Besar
const hk = document.getElementById("hk"); // Hitung Kecil

// Event listener untuk hitung karakter otomatis
editor.addEventListener("input", () => {
    const text = editor.value;
    hf.textContent = text.length;
    
    // regex untuk hitung huruf kecil & besar
    hb.textContent = (text.match(/[A-Z]/g) || []).length;
    hk.textContent = (text.match(/[a-z]/g) || []).length;
});

// untuk alghoritma tombol
document.getElementById("huruf-besar").onclick = () => {
    editor.value = editor.value.toUpperCase();
};

document.getElementById("huruf-kecil").onclick = () => {
    editor.value = editor.value.toLowerCase();
};

document.getElementById("huruf-paragraf").onclick = () => {
    // untuk hruf depan besar
    let text = editor.value.toLowerCase();
    editor.value = text.charAt(0).toUpperCase() + text.slice(1);
};