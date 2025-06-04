function cekKelipatan() {
  const angka = parseInt(document.getElementById('angka').value);
  const hasil = angka % 5 === 0 ? "adalah kelipatan 5" : "bukan kelipatan 5";
  document.getElementById('output').innerText = `${angka} ${hasil}`;
}