function hitungDigit() {
  let angka = document.getElementById('angka').value.trim();
  if (!angka || isNaN(angka)) {
    document.getElementById('output').innerText = "Masukkan angka yang valid!";
    return;
  }
  // Hilangkan tanda minus jika ada
  if (angka[0] === '-') angka = angka.substring(1);
  document.getElementById('output').innerText = `Jumlah digit: ${angka.length}`;
}