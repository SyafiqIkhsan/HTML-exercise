function konversi() {
  let km = parseFloat(document.getElementById('km').value);
  if (isNaN(km)) {
    document.getElementById('output').innerText = "Masukkan panjang yang valid!";
    return;
  }
  let m = km * 1000;
  document.getElementById('output').innerText = `Hasil: ${m} meter`;
}