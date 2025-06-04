function cekCacah() {
  let n = parseInt(document.getElementById('angka').value);
  let hasil = (n >= 0 && Number.isInteger(n)) ? "Bilangan cacah" : "Bukan bilangan cacah";
  document.getElementById('output').innerText = hasil;
}