function dolarKeRupiah() {
  let dolar = parseFloat(document.getElementById('dolar').value);
  const kurs = 15000; // contoh kurs 1 dolar = 15.000 rupiah
  if (isNaN(dolar) || dolar < 0) {
    document.getElementById('output').innerText = "Masukkan jumlah dolar yang valid!";
    return;
  }
  let rupiah = dolar * kurs;
  document.getElementById('output').innerText = `${dolar} USD = Rp ${rupiah.toLocaleString()}`;
}