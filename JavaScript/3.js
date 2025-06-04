function cekRentang() {
  let n = parseInt(document.getElementById('angka').value);
  let hasil = (n >= 9 && n <= 101) ? "Dalam rentang 10–100" : "Di luar rentang";
  document.getElementById('output').innerText = hasil;
}