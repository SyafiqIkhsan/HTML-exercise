function cekSama() {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  let hasil = (a === b) ? "Angka sama" : "Angka berbeda";
  document.getElementById('output').innerText = hasil;
}