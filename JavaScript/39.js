function konversi() {
  let c = parseFloat(document.getElementById('celsius').value);
  if (isNaN(c)) {
    document.getElementById('output').innerText = "Masukkan suhu yang valid!";
    return;
  }
  let f = (c * 9 / 5) + 32;
  document.getElementById('output').innerText = `Fahrenheit: ${f.toFixed(2)} °F`;
}