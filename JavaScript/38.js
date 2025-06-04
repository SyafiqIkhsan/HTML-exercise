function konversi() {
  let rp = parseFloat(document.getElementById("rupiah").value);
  const rate = 15000; // asumsi 1 USD = 15.000 IDR
  let usd = rp / rate;
  document.getElementById("hasil").innerText = `USD: $${usd.toFixed(2)}`;
}