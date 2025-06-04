function hitungUmur() {
  let tahun = parseInt(document.getElementById("tahun").value);
  let sekarang = new Date().getFullYear();
  let umur = sekarang - tahun;
  document.getElementById("hasil").innerText = `Umur Anda: ${umur} tahun`;
}