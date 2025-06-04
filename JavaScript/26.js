function jumlahDeret() {
  let n = parseInt(document.getElementById("n").value);
  let hasil = (n * (n + 1)) / 2;
  document.getElementById("hasil").innerText = `Jumlah deret: ${hasil}`;
}