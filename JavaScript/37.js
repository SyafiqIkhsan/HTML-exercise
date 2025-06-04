function konversi() {
  let m = parseFloat(document.getElementById('meter').value);
  if (isNaN(m)) {
    document.getElementById('output').innerText = "Masukkan panjang yang valid!";
    return;
  }
  let km = m / 1000;
  document.getElementById('output').innerText = `Hasil: ${km} km`;
}