function cekKelipatan5() {
  let n = parseInt(document.getElementById('angka').value);
  if (isNaN(n)) {
    document.getElementById('output').innerText = "Masukkan angka yang valid!";
    return;
  }
  let hasil = (n % 5 === 0) ? "merupakan kelipatan 5" : "bukan kelipatan 5";
  document.getElementById('output').innerText = `${n} ${hasil}`;
}