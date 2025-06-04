function konversi() {
  let f = parseFloat(document.getElementById('fahrenheit').value);
  if (isNaN(f)) {
    document.getElementById('output').innerText = "Masukkan suhu yang valid!";
    return;
  }
  let c = (f - 32) * 5 / 9;
  document.getElementById('output').innerText = `Celsius: ${c.toFixed(2)} °C`;
}