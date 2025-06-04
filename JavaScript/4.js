function cekDesimal() {
  let n = parseFloat(document.getElementById('angka').value);
  let hasil = (n % 1 !== 0) ? "Bilangan Desimal" : "Bukan Desimal";
  document.getElementById('output').innerText = hasil;
}